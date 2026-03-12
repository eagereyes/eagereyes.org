import type { APIGatewayProxyEventV2, APIGatewayProxyResultV2 } from 'aws-lambda';
import { Octokit } from '@octokit/rest';
import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';

const OWNER = process.env.GITHUB_OWNER ?? '';
const REPO = process.env.GITHUB_REPO ?? '';
const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN ?? '';
const SES_FROM = process.env.SES_FROM ?? '';
const NOTIFY_EMAIL = process.env.NOTIFY_EMAIL ?? '';

const ses = new SESClient({});
const MIN_SUBMIT_MS = 3000;
const SLUG_RE = /^\d{4}\/[\w-]+$/;

const corsHeaders = {
    'Access-Control-Allow-Origin': ALLOWED_ORIGIN,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
};

function response(statusCode: number, body: object): APIGatewayProxyResultV2 {
    return {
        statusCode,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
        body: JSON.stringify(body),
    };
}

function formatComment(name: string, url: string, comment: string): string {
    const author = url ? `[${name}](${url})` : name;
    const lines = comment
        .trim()
        .split('\n')
        .map((l) => `> ${l}`)
        .join('\n');
    return `${author} says…\n${lines}`;
}

function commentNotificationEmail(name: string, url: string, comment: string, slug: string, prUrl: string) {
    const author = url ? `<a href="${url}" style="color:#8e68a0">${name}</a>` : name;
    const preview = comment.length > 300 ? comment.slice(0, 300) + '…' : comment;
    return {
        subject: `New comment on: ${slug}`,
        html: `<!DOCTYPE html><html><body style="font-family:sans-serif;max-width:560px;margin:40px auto;color:#333">
<h2 style="color:#8e68a0;margin-bottom:4px">eagereyes</h2>
<hr style="border:none;border-top:1px solid #eee;margin-bottom:24px">
<p><strong>From:</strong> ${author}</p>
<p><strong>On:</strong> ${slug}</p>
<blockquote style="border-left:3px solid #8e68a0;margin:16px 0;padding:8px 16px;color:#555;background:#faf9fb">${preview.replace(/\n/g, '<br>')}</blockquote>
<p><a href="${prUrl}" style="display:inline-block;padding:10px 20px;background:#8e68a0;color:white;text-decoration:none;border-radius:6px">Review PR →</a></p>
</body></html>`,
        text: `New comment on ${slug}\nFrom: ${name}${url ? ` (${url})` : ''}\n\n${comment}\n\nReview PR: ${prUrl}`,
    };
}

// Support both HTTP API (v2) and REST API (v1) event shapes
function getMethod(event: APIGatewayProxyEventV2 & { httpMethod?: string }): string {
    return (event.requestContext?.http?.method ?? event.httpMethod ?? '').toUpperCase();
}

export const handler = async (event: APIGatewayProxyEventV2): Promise<APIGatewayProxyResultV2> => {
    const method = getMethod(event);

    // CORS preflight
    if (method === 'OPTIONS') {
        return { statusCode: 204, headers: corsHeaders, body: '' };
    }

    if (method !== 'POST') {
        return response(405, { error: 'Method not allowed' });
    }

    let body: Record<string, string>;
    try {
        const raw = event.body ?? '';
        const decoded = event.isBase64Encoded ? Buffer.from(raw, 'base64').toString('utf-8') : raw;
        const contentType = event.headers['content-type'] ?? '';
        if (contentType.includes('application/x-www-form-urlencoded')) {
            body = Object.fromEntries(new URLSearchParams(decoded));
        } else {
            body = JSON.parse(decoded);
        }
    } catch {
        return response(400, { error: 'Invalid request body' });
    }

    const { name, url = '', comment, slug, _timestamp, _hp } = body;

    // Honeypot — silent discard
    if (_hp) {
        return response(200, { ok: true });
    }

    // Timing check
    const submitTime = Number(_timestamp);
    if (!submitTime || Date.now() - submitTime < MIN_SUBMIT_MS) {
        return response(400, { error: 'Submission too fast' });
    }

    // Validation
    if (!name?.trim()) return response(400, { error: 'Name is required' });
    if (!comment?.trim()) return response(400, { error: 'Comment is required' });
    if (!slug || !SLUG_RE.test(slug)) return response(400, { error: 'Invalid post slug' });
    if (url && !/^https?:\/\//.test(url)) return response(400, { error: 'Invalid URL' });

    const token = process.env.GITHUB_TOKEN;
    if (!token) return response(500, { error: 'Server misconfigured' });

    const octokit = new Octokit({ auth: token });
    const filePath = `content/blog/${slug}+++comments.md`;
    const branchName = `comment-${slug.replace('/', '-')}-${Date.now()}`;
    const newEntry = formatComment(name.trim(), url.trim(), comment.trim());

    try {
        // Get main branch SHA
        const { data: mainBranch } = await octokit.repos.getBranch({ owner: OWNER, repo: REPO, branch: 'main' });
        const sha = mainBranch.commit.sha;

        // Create new branch
        await octokit.git.createRef({
            owner: OWNER,
            repo: REPO,
            ref: `refs/heads/${branchName}`,
            sha,
        });

        // Try to get existing comments file
        let existingContent = '';
        let existingFileSha: string | undefined;
        try {
            const { data } = await octokit.repos.getContent({
                owner: OWNER,
                repo: REPO,
                path: filePath,
                ref: branchName,
            });
            if (!Array.isArray(data) && data.type === 'file' && 'content' in data) {
                existingContent = Buffer.from(data.content, 'base64').toString('utf-8');
                existingFileSha = data.sha;
            }
        } catch (err: any) {
            if (err.status !== 404) throw err;
            // 404 = file doesn't exist yet, start fresh
        }

        const fileContent = existingContent
            ? existingContent.trimEnd() + '\n\n' + newEntry + '\n'
            : newEntry + '\n';

        // Create or update file on new branch
        await octokit.repos.createOrUpdateFileContents({
            owner: OWNER,
            repo: REPO,
            path: filePath,
            message: `Add comment on ${slug}`,
            content: Buffer.from(fileContent).toString('base64'),
            branch: branchName,
            ...(existingFileSha ? { sha: existingFileSha } : {}),
        });

        // Open PR
        const { data: pr } = await octokit.pulls.create({
            owner: OWNER,
            repo: REPO,
            head: branchName,
            base: 'main',
            title: `New comment on: ${slug}`,
            body: [
                `**From:** ${name.trim()}${url ? ` — ${url.trim()}` : ''}`,
                '',
                '**Comment:**',
                '',
                comment.trim(),
            ].join('\n'),
        });

        // Fire-and-forget notification — never let email failure affect the commenter's response
        if (NOTIFY_EMAIL && SES_FROM) {
            const tmpl = commentNotificationEmail(name.trim(), url.trim(), comment.trim(), slug, pr.html_url);
            ses.send(new SendEmailCommand({
                Source: SES_FROM,
                Destination: { ToAddresses: [NOTIFY_EMAIL] },
                Message: {
                    Subject: { Data: tmpl.subject },
                    Body: { Html: { Data: tmpl.html }, Text: { Data: tmpl.text } },
                },
            })).catch(err => console.error('Notification email failed:', err));
        }

        return response(200, { ok: true, pr: pr.html_url });
    } catch (err: any) {
        console.error('GitHub API error:', err);
        return response(500, { error: 'Failed to submit comment' });
    }
};
