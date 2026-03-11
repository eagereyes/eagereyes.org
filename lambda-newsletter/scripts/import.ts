#!/usr/bin/env npx tsx
/**
 * Import existing email subscribers into DynamoDB as unconfirmed.
 *
 * Usage:
 *   cd lambda-newsletter
 *   npx tsx scripts/import.ts emails.txt
 *
 * The emails.txt file should have one email address per line.
 * Blank lines and lines starting with # are ignored.
 * Existing records are NOT overwritten (preserves confirmed status).
 *
 * Requires a .env file with DYNAMODB_TABLE set, plus AWS credentials
 * in the environment or ~/.aws/credentials.
 */

import { readFileSync } from 'node:fs';
import 'dotenv/config';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, PutCommand } from '@aws-sdk/lib-dynamodb';

const TABLE = process.env.DYNAMODB_TABLE;
if (!TABLE) {
    console.error('Error: DYNAMODB_TABLE env var is not set. Create a .env file from .env.example.');
    process.exit(1);
}

const file = process.argv[2];
if (!file) {
    console.error('Usage: npx tsx scripts/import.ts <emails.txt>');
    process.exit(1);
}

const dynamo = DynamoDBDocumentClient.from(new DynamoDBClient({}));

const lines = readFileSync(file, 'utf-8').split('\n');
const emails = [...new Set(
    lines
        .map(l => l.trim().toLowerCase())
        .filter(l => l && !l.startsWith('#') && l.includes('@'))
)];

console.log(`Found ${emails.length} unique email(s) to import.`);

let imported = 0;
let skipped = 0;

for (const email of emails) {
    try {
        await dynamo.send(new PutCommand({
            TableName: TABLE,
            Item: {
                email,
                token: crypto.randomUUID(),
                confirmed: false,
                unsubscribed: false,
                created_at: new Date().toISOString(),
            },
            ConditionExpression: 'attribute_not_exists(email)',
        }));
        console.log(`  ✓ ${email}`);
        imported++;
    } catch (err: any) {
        if (err.name === 'ConditionalCheckFailedException') {
            console.log(`  – ${email} (already exists, skipped)`);
            skipped++;
        } else {
            console.error(`  ✗ ${email}: ${err.message}`);
        }
    }
}

console.log(`\nDone: ${imported} imported, ${skipped} skipped.`);
