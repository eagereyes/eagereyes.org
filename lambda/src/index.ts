import type { APIGatewayProxyEventV2, APIGatewayProxyResultV2 } from 'aws-lambda';
import { Octokit } from '@octokit/rest';

const OWNER = process.env.GITHUB_OWNER ?? '';
const REPO = process.env.GITHUB_REPO ?? '';
const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN ?? '';
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

        return response(200, { ok: true, pr: pr.html_url });
    } catch (err: any) {
        console.error('GitHub API error:', err);
        return response(500, { error: 'Failed to submit comment' });
    }
};
