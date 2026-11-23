// Writes public/files/cv.pdf: a one-page placeholder with NO metadata
// (no /Info dictionary, no XMP, no producer/creator/author fields).
// Replace with the real CV later, stripping its metadata first.
import { writeFileSync } from "node:fs";

const lines = [
  "Boaz King - CV (placeholder)",
  "",
  "This is a placeholder file. The real CV has not been added yet.",
  "Replace public/files/cv.pdf with the real CV, and strip its",
  "metadata (author, software, edit history) before committing.",
];
const esc = (s) => s.replace(/[\()]/g, (c) => "\\" + c);
let y = 760;
const text = lines.map((l, i) => `BT /F1 ${i === 0 ? 18 : 11} Tf 72 ${(y -= i === 0 ? 0 : 22)} Td (${esc(l)}) Tj ET`).join("\n");

const objs = [
  "<< /Type /Catalog /Pages 2 0 R >>",
  "<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
  "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>",
  "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
  `<< /Length ${Buffer.byteLength(text)} >>\nstream\n${text}\nendstream`,
];
let pdf = "%PDF-1.4\n";
const offsets = [];
objs.forEach((o, i) => {
  offsets.push(Buffer.byteLength(pdf));
  pdf += `${i + 1} 0 obj\n${o}\nendobj\n`;
});
const xref = Buffer.byteLength(pdf);
pdf += `xref\n0 ${objs.length + 1}\n0000000000 65535 f \n`;
for (const off of offsets) pdf += `${String(off).padStart(10, "0")} 00000 n \n`;
pdf += `trailer\n<< /Size ${objs.length + 1} /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF\n`;
writeFileSync("public/files/cv.pdf", pdf);
console.log("wrote public/files/cv.pdf", Buffer.byteLength(pdf), "bytes");
