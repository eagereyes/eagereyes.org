#!/usr/bin/env npx tsx
/**
 * List all subscribers with their status.
 *
 * Usage:
 *   cd lambda-newsletter
 *   npx tsx scripts/list.ts
 *   npx tsx scripts/list.ts confirmed      # only confirmed
 *   npx tsx scripts/list.ts unconfirmed    # only unconfirmed
 *   npx tsx scripts/list.ts unsubscribed   # only unsubscribed
 */

import 'dotenv/config';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, ScanCommand } from '@aws-sdk/lib-dynamodb';

const TABLE = process.env.DYNAMODB_TABLE;
if (!TABLE) {
    console.error('Error: DYNAMODB_TABLE env var is not set.');
    process.exit(1);
}

const filter = process.argv[2]?.toLowerCase();
const validFilters = ['confirmed', 'unconfirmed', 'unsubscribed'];
if (filter && !validFilters.includes(filter)) {
    console.error(`Unknown filter "${filter}". Valid options: ${validFilters.join(', ')}`);
    process.exit(1);
}

const dynamo = DynamoDBDocumentClient.from(new DynamoDBClient({}));

const rows: Array<{ email: string; status: string }> = [];
let lastKey: Record<string, unknown> | undefined;

do {
    const result = await dynamo.send(new ScanCommand({
        TableName: TABLE,
        ExclusiveStartKey: lastKey,
    }));
    for (const item of result.Items ?? []) {
        if (item.email === '_last_sent') continue;
        const status = item.unsubscribed ? 'unsubscribed'
            : item.confirmed ? 'confirmed'
            : 'unconfirmed';
        if (!filter || status === filter) {
            rows.push({ email: item.email as string, status });
        }
    }
    lastKey = result.LastEvaluatedKey as Record<string, unknown> | undefined;
} while (lastKey);

rows.sort((a, b) => a.email.localeCompare(b.email));

for (const { email, status } of rows) {
    console.log(`${status.padEnd(14)} ${email}`);
}
console.log(`\n${rows.length} subscriber(s)${filter ? ` (${filter})` : ''}`);
