// Adapted from test/csv-stream.test.mjs to import the installed package.
import assert from "node:assert/strict";
import { test } from "node:test";
import { csvRows } from "@red-cup-engineering/csv-stream-triage-service/csv-stream";

const collect = async (chunks) => { const rows = []; for await (const row of csvRows(chunks)) rows.push(row); return rows; };
const text = 'a,b,c\r\n1,"x, ""y""",3\r\n"line\nbreak",,\n\n4,5,6';
const expected = [["a", "b", "c"], ["1", 'x, "y"', "3"], ["line\nbreak", "", ""], ["4", "5", "6"]];

test("CSV-STREAM-QUICKSTART", async () => {
  assert.deepEqual(await collect([text]), expected);
});
