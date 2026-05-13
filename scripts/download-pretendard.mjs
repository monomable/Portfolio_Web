import { createWriteStream, existsSync, mkdirSync, statSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { pipeline } from "node:stream/promises";

const PRETENDARD_VERSION = "1.3.9";
const FONT_URL = `https://unpkg.com/pretendard@${PRETENDARD_VERSION}/dist/web/variable/woff2/PretendardVariable.woff2`;
const OUTPUT_PATH = resolve("assets/fonts/pretendard/PretendardVariable.woff2");

mkdirSync(dirname(OUTPUT_PATH), { recursive: true });

const response = await fetch(FONT_URL);

if (!response.ok || !response.body) {
  throw new Error(
    `Failed to download Pretendard ${PRETENDARD_VERSION}: ${response.status} ${response.statusText}`
  );
}

await pipeline(response.body, createWriteStream(OUTPUT_PATH));

if (!existsSync(OUTPUT_PATH) || statSync(OUTPUT_PATH).size === 0) {
  throw new Error(`Downloaded font is empty: ${OUTPUT_PATH}`);
}

console.log(`Downloaded Pretendard ${PRETENDARD_VERSION} to ${OUTPUT_PATH}`);
