#!/usr/bin/env npx tsx
/**
 * Show subscriber counts by status.
 *
 * Usage:
 *   cd lambda-newsletter
 *   npx tsx scripts/stats.ts
 */

import 'dotenv/config';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, ScanCommand } from '@aws-sdk/lib-dynamodb';

const TABLE = process.env.DYNAMODB_TABLE;
if (!TABLE) {
    console.error('Error: DYNAMODB_TABLE env var is not set.');
    process.exit(1);
}

const dynamo = DynamoDBDocumentClient.from(new DynamoDBClient({}));

let confirmed = 0, unconfirmed = 0, unsubscribed = 0;
let lastKey: Record<string, unknown> | undefined;

do {
    const result = await dynamo.send(new ScanCommand({
        TableName: TABLE,
        ExclusiveStartKey: lastKey,
    }));
    for (const item of result.Items ?? []) {
        if (item.email === '_last_sent') continue;
        if (item.unsubscribed) unsubscribed++;
        else if (item.confirmed) confirmed++;
        else unconfirmed++;
    }
    lastKey = result.LastEvaluatedKey as Record<string, unknown> | undefined;
} while (lastKey);

const total = confirmed + unconfirmed + unsubscribed;
console.log(`Confirmed:   ${confirmed}`);
console.log(`Unconfirmed: ${unconfirmed}`);
console.log(`Unsubscribed:${unsubscribed}`);
console.log(`─────────────────`);
console.log(`Total:       ${total}`);
