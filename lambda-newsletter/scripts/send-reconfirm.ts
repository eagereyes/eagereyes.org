#!/usr/bin/env npx tsx
/**
 * Send a re-confirmation email to all unconfirmed subscribers.
 *
 * Usage:
 *   cd lambda-newsletter
 *   npx tsx scripts/send-reconfirm.ts message.txt "Subject line"
 *
 * message.txt: plain text file with your intro message.
 *   Paragraphs are separated by blank lines and rendered as <p> tags.
 *
 * Requires a .env file with DYNAMODB_TABLE, SES_FROM, and LAMBDA_BASE_URL set,
 * plus AWS credentials in the environment or ~/.aws/credentials.
 */

import { readFileSync } from 'node:fs';
import 'dotenv/config';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, ScanCommand } from '@aws-sdk/lib-dynamodb';
import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';

const TABLE = process.env.DYNAMODB_TABLE;
const SES_FROM = process.env.SES_FROM;
const LAMBDA_BASE_URL = process.env.LAMBDA_BASE_URL;

if (!TABLE || !SES_FROM || !LAMBDA_BASE_URL) {
    console.error('Error: DYNAMODB_TABLE, SES_FROM, and LAMBDA_BASE_URL must all be set in .env');
    process.exit(1);
}

const messageFile = process.argv[2];
const subject = process.argv[3];

if (!messageFile || !subject) {
    console.error('Usage: npx tsx scripts/send-reconfirm.ts <message.txt> "<Subject line>"');
    process.exit(1);
}

const messageText = readFileSync(messageFile, 'utf-8').trim();

// Convert plain text paragraphs to HTML <p> tags
const messageHtml = messageText
    .split(/\n\n+/)
    .map(p => `<p style="line-height:1.6;color:#555">${p.replace(/\n/g, '<br>')}</p>`)
    .join('\n');

const dynamo = DynamoDBDocumentClient.from(new DynamoDBClient({}));
const ses = new SESClient({});

// Scan for all unconfirmed, non-unsubscribed records
const subscribers: Array<{ email: string; token: string }> = [];
let lastKey: Record<string, unknown> | undefined;

do {
    const result = await dynamo.send(new ScanCommand({
        TableName: TABLE,
        FilterExpression: 'confirmed = :f AND (attribute_not_exists(unsubscribed) OR unsubscribed = :f)',
        ExpressionAttributeValues: { ':f': false },
        ExclusiveStartKey: lastKey,
    }));
    for (const item of result.Items ?? []) {
        if (item.email !== '_last_sent') {
            subscribers.push({ email: item.email as string, token: item.token as string });
        }
    }
    lastKey = result.LastEvaluatedKey as Record<string, unknown> | undefined;
} while (lastKey);

console.log(`Found ${subscribers.length} unconfirmed subscriber(s).`);

if (subscribers.length === 0) {
    console.log('Nothing to send.');
    process.exit(0);
}

let sent = 0;
let failed = 0;

for (const { email, token } of subscribers) {
    const confirmUrl = `${LAMBDA_BASE_URL}/confirm?token=${token}`;
    const unsubUrl = `${LAMBDA_BASE_URL}/unsubscribe?token=${token}`;

    const html = `<!DOCTYPE html><html><body style="font-family:sans-serif;max-width:560px;margin:40px auto;color:#333">
<h2 style="color:#8e68a0;margin-bottom:4px">eagereyes</h2>
<hr style="border:none;border-top:1px solid #eee;margin-bottom:24px">
${messageHtml}
<p style="margin-top:24px">
  <a href="${confirmUrl}" style="display:inline-block;padding:10px 20px;background:#8e68a0;color:white;text-decoration:none;border-radius:6px">
    Confirm subscription →
  </a>
</p>
<hr style="border:none;border-top:1px solid #eee;margin-top:32px">
<p style="font-size:12px;color:#aaa">
  You're receiving this because you previously subscribed to eagereyes.<br>
  If you don't want to receive future emails, just ignore this — or <a href="${unsubUrl}" style="color:#aaa">unsubscribe</a>.
</p>
</body></html>`;

    const text = `${messageText}\n\nConfirm your subscription: ${confirmUrl}\n\nTo unsubscribe: ${unsubUrl}`;

    try {
        await ses.send(new SendEmailCommand({
            Source: SES_FROM,
            Destination: { ToAddresses: [email] },
            Message: {
                Subject: { Data: subject },
                Body: { Html: { Data: html }, Text: { Data: text } },
            },
        }));
        console.log(`  ✓ ${email}`);
        sent++;
    } catch (err: any) {
        console.error(`  ✗ ${email}: ${err.message}`);
        failed++;
    }
}

console.log(`\nDone: ${sent} sent, ${failed} failed.`);
