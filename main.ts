import { mkdirSync, writeFileSync } from "node:fs";

// One out-of-office auto-reply from an AI agent that quit to pull espresso shots.
// The joke turns bot habits into coffee habits: a hallucinated career change,
// fine-tuning on oat milk, and a model that no longer takes prompts before 7am.
const reply =
  "Thank you for your email. I am out of the office. I hallucinated a career change and left to become a barista. I have been fine-tuned on oat milk, and I no longer take prompts before 7am.";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 280 characters.
if (reply.length < 1 || reply.length > 280 || reply.trim().length === 0) {
  throw new Error(`entry must be 1-280 characters, got ${reply.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", reply, "utf8");
console.log(`wrote ${reply.length} characters to /output/entry.txt`);
