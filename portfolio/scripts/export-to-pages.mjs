import { cp, writeFile, readdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
const output = new URL("../out/", import.meta.url);
const root = new URL("../../", import.meta.url);
for (const entry of await readdir(output))
  await cp(new URL(entry, output), new URL(entry, root), { recursive: true });
await writeFile(new URL(".nojekyll", root), "");
console.log(
  `Static export copied to ${fileURLToPath(root)}. Existing tools and pages preserved.`,
);
