import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const line =
  "I gave my plants names so I'd feel guilty. They died anyway, and now I owe rent to a fern named Gerald.";

// One line, no setup, no explanation: the joke lands entirely on its own.
const here = dirname(fileURLToPath(import.meta.url));
const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
