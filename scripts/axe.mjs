// Accessibility check: node scripts/axe.mjs <path> [path...]
// Runs axe-core (WCAG 2.0/2.1/2.2 A + AA) in both themes at 375 and 1440.
// Optional ACTION env: JS evaluated before the scan (e.g. to open a layer).
import { chromium } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const base = process.env.BASE_URL ?? "http://localhost:3000";
const paths = process.argv.slice(2);
const browser = await chromium.launch();
let total = 0;
for (const path of paths.length ? paths : ["/"]) {
  for (const theme of ["dark", "light"]) {
    for (const width of [375, 1440]) {
      const ctx = await browser.newContext({ viewport: { width, height: 900 } });
      await ctx.addInitScript((t) => localStorage.setItem("theme", t), theme);
      const page = await ctx.newPage();
      await page.goto(base + path, { waitUntil: "load" });
      if (process.env.ACTION) {
        await page.evaluate(process.env.ACTION);
        await page.waitForTimeout(Number(process.env.WAIT ?? 1500));
      }
      const r = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa", "best-practice"])
        .analyze();
      total += r.violations.length;
      const label = `${path} ${theme} ${width}`;
      if (!r.violations.length) console.log(`PASS ${label}`);
      for (const v of r.violations) {
        console.log(`FAIL ${label}  ${v.id} (${v.impact}): ${v.help}`);
        for (const n of v.nodes.slice(0, 4)) console.log(`   ${n.target.join(" ")}  ${n.failureSummary?.split("\n")[1] ?? ""}`);
      }
      await ctx.close();
    }
  }
}
await browser.close();
process.exit(total ? 1 : 0);
