import type { APIGatewayProxyEventV2, APIGatewayProxyResultV2 } from 'aws-lambda';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, GetCommand, PutCommand, UpdateCommand, QueryCommand, ScanCommand } from '@aws-sdk/lib-dynamodb';
import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';

const TABLE = process.env.DYNAMODB_TABLE ?? '';
const SES_FROM = process.env.SES_FROM ?? '';
const SITE_URL = process.env.SITE_URL ?? '';
const LAMBDA_BASE_URL = process.env.LAMBDA_BASE_URL ?? '';
const SEND_KEY = process.env.SEND_KEY ?? '';
const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN ?? '';
const MIN_SUBMIT_MS = 3000;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const dynamo = DynamoDBDocumentClient.from(new DynamoDBClient({}));
const ses = new SESClient({});

const corsHeaders = {
    'Access-Control-Allow-Origin': ALLOWED_ORIGIN,
    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
};

function jsonResponse(statusCode: number, body: object): APIGatewayProxyResultV2 {
    return {
        statusCode,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
        body: JSON.stringify(body),
    };
}

function htmlResponse(statusCode: number, body: string, extraHeaders: Record<string, string> = {}): APIGatewayProxyResultV2 {
    return {
        statusCode,
        headers: { 'Content-Type': 'text/html; charset=utf-8', ...corsHeaders, ...extraHeaders },
        body,
    };
}

function getMethod(event: APIGatewayProxyEventV2 & { httpMethod?: string }): string {
    return (event.requestContext?.http?.method ?? event.httpMethod ?? '').toUpperCase();
}

function getPath(event: APIGatewayProxyEventV2): string {
    return event.requestContext?.http?.path ?? event.rawPath ?? '/';
}

// --- Email templates ---

function confirmationEmail(token: string): { subject: string; html: string; text: string } {
    const url = `${LAMBDA_BASE_URL}/confirm?token=${token}`;
    return {
        subject: 'Confirm your eagereyes subscription',
        html: `<!DOCTYPE html><html><body style="font-family:sans-serif;max-width:500px;margin:40px auto;color:#333">
<h2 style="color:#8e68a0">eagereyes</h2>
<p>Thanks for subscribing! Click the button below to confirm your email address.</p>
<p><a href="${url}" style="display:inline-block;padding:10px 20px;background:#8e68a0;color:white;text-decoration:none;border-radius:6px">Confirm subscription</a></p>
<p style="font-size:13px;color:#888">Or copy this link: ${url}</p>
</body></html>`,
        text: `Confirm your eagereyes subscription\n\nClick here to confirm: ${url}`,
    };
}

function newsletterEmail(
    token: string,
    title: string,
    description: string,
    postUrl: string,
    featuredImage?: string,
): { subject: string; html: string; text: string } {
    const unsubUrl = `${LAMBDA_BASE_URL}/unsubscribe?token=${token}`;
    const imgTag = featuredImage
        ? `<img src="${featuredImage}" alt="" style="max-width:100%;height:auto;border-radius:6px;margin-bottom:16px">`
        : '';
    return {
        subject: `New on eagereyes: ${title}`,
        html: `<!DOCTYPE html><html><body style="font-family:sans-serif;max-width:560px;margin:40px auto;color:#333">
<h2 style="color:#8e68a0;margin-bottom:4px">eagereyes</h2>
<hr style="border:none;border-top:1px solid #eee;margin-bottom:24px">
${imgTag}
<h1 style="font-size:22px;margin-top:0">${title}</h1>
<p style="line-height:1.6;color:#555">${description}</p>
<p><a href="${postUrl}" style="display:inline-block;padding:10px 20px;background:#8e68a0;color:white;text-decoration:none;border-radius:6px">Read more →</a></p>
<hr style="border:none;border-top:1px solid #eee;margin-top:32px">
<p style="font-size:12px;color:#aaa">You're receiving this because you subscribed at eagereyes.org. <a href="${unsubUrl}" style="color:#aaa">Unsubscribe</a></p>
</body></html>`,
        text: `${title}\n\n${description}\n\nRead more: ${postUrl}\n\nUnsubscribe: ${unsubUrl}`,
    };
}

function simplePage(title: string, message: string): string {
    return `<!DOCTYPE html><html><head><title>${title}</title></head>
<body style="font-family:sans-serif;max-width:500px;margin:80px auto;text-align:center;color:#333">
<h1 style="color:#8e68a0">${title}</h1><p>${message}</p>
<p><a href="${SITE_URL}" style="color:#8e68a0">← eagereyes.org</a></p>
</body></html>`;
}

// --- Handlers ---

async function handleSubscribe(event: APIGatewayProxyEventV2): Promise<APIGatewayProxyResultV2> {
    let body: Record<string, string>;
    try {
        const raw = event.body ?? '';
        const decoded = event.isBase64Encoded ? Buffer.from(raw, 'base64').toString('utf-8') : raw;
        const ct = event.headers['content-type'] ?? '';
        body = ct.includes('application/x-www-form-urlencoded')
            ? Object.fromEntries(new URLSearchParams(decoded))
            : JSON.parse(decoded);
    } catch {
        return jsonResponse(400, { error: 'Invalid request body' });
    }

    const { email, _timestamp, _hp } = body;

    // Honeypot — silent discard
    if (_hp) return jsonResponse(200, { ok: true });

    // Timing check
    if (!_timestamp || Date.now() - Number(_timestamp) < MIN_SUBMIT_MS) {
        return jsonResponse(400, { error: 'Submission too fast' });
    }

    if (!email || !EMAIL_RE.test(email)) {
        return jsonResponse(400, { error: 'Valid email address required' });
    }

    const normalizedEmail = email.toLowerCase().trim();

    // Check existing record
    const existing = await dynamo.send(new GetCommand({ TableName: TABLE, Key: { email: normalizedEmail } }));
    if (existing.Item) {
        if (existing.Item.confirmed && !existing.Item.unsubscribed) {
            return jsonResponse(200, { ok: true, already: true });
        }
        // Unconfirmed or previously unsubscribed — update token and resend
        if (existing.Item.unsubscribed) {
            // Re-subscribing: clear unsubscribed flag
            await dynamo.send(new UpdateCommand({
                TableName: TABLE,
                Key: { email: normalizedEmail },
                UpdateExpression: 'SET #t = :t, confirmed = :f, unsubscribed = :f, created_at = :now REMOVE unsubscribed_at',
                ExpressionAttributeNames: { '#t': 'token' },
                ExpressionAttributeValues: { ':t': crypto.randomUUID(), ':f': false, ':now': new Date().toISOString() },
            }));
        }
    }

    const token = crypto.randomUUID();
    await dynamo.send(new PutCommand({
        TableName: TABLE,
        Item: { email: normalizedEmail, token, confirmed: false, unsubscribed: false, created_at: new Date().toISOString() },
    }));

    const tmpl = confirmationEmail(token);
    await ses.send(new SendEmailCommand({
        Source: SES_FROM,
        Destination: { ToAddresses: [normalizedEmail] },
        Message: {
            Subject: { Data: tmpl.subject },
            Body: { Html: { Data: tmpl.html }, Text: { Data: tmpl.text } },
        },
    }));

    return jsonResponse(200, { ok: true });
}

async function handleConfirm(event: APIGatewayProxyEventV2): Promise<APIGatewayProxyResultV2> {
    const token = event.queryStringParameters?.token;
    if (!token) return htmlResponse(400, simplePage('Invalid link', 'No token provided.'));

    const result = await dynamo.send(new QueryCommand({
        TableName: TABLE,
        IndexName: 'token-index',
        KeyConditionExpression: '#t = :t',
        ExpressionAttributeNames: { '#t': 'token' },
        ExpressionAttributeValues: { ':t': token },
        Limit: 1,
    }));

    if (!result.Items?.length) {
        return htmlResponse(400, simplePage('Invalid link', 'This confirmation link is invalid or has already been used.'));
    }

    const { email } = result.Items[0];
    await dynamo.send(new UpdateCommand({
        TableName: TABLE,
        Key: { email },
        UpdateExpression: 'SET confirmed = :t, confirmed_at = :now',
        ExpressionAttributeValues: { ':t': true, ':now': new Date().toISOString() },
    }));

    return htmlResponse(302, '', { Location: `${SITE_URL}/?subscribed=1` });
}

async function handleUnsubscribe(event: APIGatewayProxyEventV2): Promise<APIGatewayProxyResultV2> {
    const token = event.queryStringParameters?.token;
    if (!token) return htmlResponse(400, simplePage('Invalid link', 'No token provided.'));

    const result = await dynamo.send(new QueryCommand({
        TableName: TABLE,
        IndexName: 'token-index',
        KeyConditionExpression: '#t = :t',
        ExpressionAttributeNames: { '#t': 'token' },
        ExpressionAttributeValues: { ':t': token },
        Limit: 1,
    }));

    if (!result.Items?.length) {
        return htmlResponse(400, simplePage('Invalid link', 'This unsubscribe link is invalid.'));
    }

    const { email } = result.Items[0];
    await dynamo.send(new UpdateCommand({
        TableName: TABLE,
        Key: { email },
        UpdateExpression: 'SET unsubscribed = :t, unsubscribed_at = :now',
        ExpressionAttributeValues: { ':t': true, ':now': new Date().toISOString() },
    }));

    return htmlResponse(200, simplePage('Unsubscribed', "You've been unsubscribed and won't receive any more emails."));
}

async function handleSend(event: APIGatewayProxyEventV2): Promise<APIGatewayProxyResultV2> {
    if (event.headers['x-send-key'] !== SEND_KEY) {
        return jsonResponse(403, { error: 'Forbidden' });
    }

    let body: { auto?: boolean; slug?: string } = {};
    try {
        const raw = event.body ?? '';
        const decoded = event.isBase64Encoded ? Buffer.from(raw, 'base64').toString('utf-8') : raw;
        if (decoded) body = JSON.parse(decoded);
    } catch {
        return jsonResponse(400, { error: 'Invalid request body' });
    }

    // Determine which post to send
    let postSlug: string;
    let postTitle: string;
    let postDescription: string;
    let postFeaturedImage: string | undefined;

    if (body.auto) {
        // Fetch blog-meta.json from the live site
        const metaRes = await fetch(`${SITE_URL}/blog-meta.json`);
        if (!metaRes.ok) return jsonResponse(500, { error: 'Failed to fetch blog metadata' });
        const posts: Array<{ slug: string; title: string; description: string; date: string; archived: boolean; featuredImage?: string }> = await metaRes.json();
        const latest = posts.find(p => !p.archived);
        if (!latest) return jsonResponse(200, { ok: true, sent: 0, reason: 'No posts found' });

        const year = latest.date.substring(0, 4);
        postSlug = `${year}/${latest.slug}`;

        // Check if already sent
        const lastSent = await dynamo.send(new GetCommand({ TableName: TABLE, Key: { email: '_last_sent' } }));
        if (lastSent.Item?.slug === postSlug) {
            return jsonResponse(200, { ok: true, sent: 0, reason: 'Already sent for this post' });
        }

        postTitle = latest.title;
        postDescription = latest.description;
        postFeaturedImage = latest.featuredImage;
    } else if (body.slug) {
        // Manual send for a specific slug (format: "2026/post-slug")
        const metaRes = await fetch(`${SITE_URL}/blog-meta.json`);
        if (!metaRes.ok) return jsonResponse(500, { error: 'Failed to fetch blog metadata' });
        const posts: Array<{ slug: string; title: string; description: string; date: string; archived: boolean; featuredImage?: string }> = await metaRes.json();
        const slugPart = body.slug.split('/').pop();
        const post = posts.find(p => p.slug === slugPart);
        if (!post) return jsonResponse(404, { error: 'Post not found' });

        postSlug = body.slug;
        postTitle = post.title;
        postDescription = post.description;
        postFeaturedImage = post.featuredImage;
    } else {
        return jsonResponse(400, { error: 'Provide auto:true or a slug' });
    }

    const postUrl = `${SITE_URL}/blog/${postSlug}`;

    // Gather confirmed, subscribed recipients (paginate)
    const subscribers: string[] = [];
    const tokenMap: Record<string, string> = {};
    let lastKey: Record<string, unknown> | undefined;
    do {
        const result = await dynamo.send(new ScanCommand({
            TableName: TABLE,
            FilterExpression: 'confirmed = :t AND (attribute_not_exists(unsubscribed) OR unsubscribed = :f)',
            ExpressionAttributeValues: { ':t': true, ':f': false },
            ExclusiveStartKey: lastKey,
        }));
        for (const item of result.Items ?? []) {
            if (item.email !== '_last_sent') {
                subscribers.push(item.email as string);
                tokenMap[item.email as string] = item.token as string;
            }
        }
        lastKey = result.LastEvaluatedKey as Record<string, unknown> | undefined;
    } while (lastKey);

    // Send emails
    let sent = 0;
    for (const email of subscribers) {
        const tmpl = newsletterEmail(tokenMap[email], postTitle, postDescription, postUrl, postFeaturedImage);
        try {
            await ses.send(new SendEmailCommand({
                Source: SES_FROM,
                Destination: { ToAddresses: [email] },
                Message: {
                    Subject: { Data: tmpl.subject },
                    Body: { Html: { Data: tmpl.html }, Text: { Data: tmpl.text } },
                },
            }));
            sent++;
        } catch (err) {
            console.error(`Failed to send to ${email}:`, err);
        }
    }

    // Update last-sent record
    await dynamo.send(new PutCommand({
        TableName: TABLE,
        Item: { email: '_last_sent', slug: postSlug, sent_at: new Date().toISOString() },
    }));

    return jsonResponse(200, { ok: true, sent });
}

// --- Main handler ---

export const handler = async (event: APIGatewayProxyEventV2): Promise<APIGatewayProxyResultV2> => {
    const method = getMethod(event);
    const path = getPath(event);

    if (method === 'OPTIONS') {
        return { statusCode: 204, headers: corsHeaders, body: '' };
    }

    if (path.endsWith('/subscribe') && method === 'POST') return handleSubscribe(event);
    if (path.endsWith('/confirm') && method === 'GET') return handleConfirm(event);
    if (path.endsWith('/unsubscribe') && method === 'GET') return handleUnsubscribe(event);
    if (path.endsWith('/send') && method === 'POST') return handleSend(event);

    return jsonResponse(404, { error: 'Not found' });
};
