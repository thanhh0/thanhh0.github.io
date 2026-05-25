// One-shot script: render the certificate PDF to PNG + WebP for the
// site. Re-run only when the source PDF changes:
//
//   node scripts/render-cert.mjs
//
// Outputs into /public so the cert modal can serve a static image
// instead of relying on browser PDF rendering (which is flaky on iOS).

import { pdf } from "pdf-to-img";
import { writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

const src = join(root, "public", "certificate-4dqhfoa6xhsp-1777281299.pdf");
const outPng = join(root, "public", "certificate.png");

const doc = await pdf(src, { scale: 2.5 });

let i = 0;
for await (const page of doc) {
  if (i === 0) {
    await writeFile(outPng, page);
    console.log("wrote", outPng);
  }
  i++;
}
console.log(`rendered ${i} page(s)`);
