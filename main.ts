import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const text =
  "Grandma's recipe called for one grandchild.";

// Guard: the entry must be exactly six non-empty words.
const words = text.split(/\s+/).filter(Boolean);
if (words.length !== 6) {
  throw new Error(
    `entry must be exactly six words, got ${words.length}: ${JSON.stringify(text)}`,
  );
}
if (!text.trim()) {
  throw new Error("entry must not be empty");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
