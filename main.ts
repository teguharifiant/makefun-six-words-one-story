import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const text =
  "Grandma's recipe called for one grandchild.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
