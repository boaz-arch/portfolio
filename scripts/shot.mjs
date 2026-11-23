// Screenshot helper: node scripts/shot.mjs <outDir> <path> [path...]
// Takes full-page dark-theme shots at 375px and 1440px from a running server
// (BASE_URL, default http://localhost:3000). Also reports horizontal overflow
// and console errors so each screenshot round doubles as a quick check.
import { chromium } from "@playwright/test";
import { mkdirSync } from "node:fs";
import { join } from "node:path";

const [outDir = "shots", ...paths] = process.argv.slice(2);
const base = process.env.BASE_URL ?? "http://localhost:3000";
const widths = (process.env.WIDTHS ?? "375,1440").split(",").map(Number);
const theme = process.env.THEME ?? "dark";
mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch();
for (const path of paths.length ? paths : ["/"]) {
  for (const width of widths) {
    const context = await browser.newContext({ viewport: { width, height: 900 }, colorScheme: "dark" });
    await context.addInitScript((t) => localStorage.setItem("theme", t), theme);
    const page = await context.newPage();
    const errors = [];
    page.on("console", (m) => m.type() === "error" && errors.push(m.text()));
    page.on("pageerror", (e) => errors.push(e.message));
    await page.goto(base + path, { waitUntil: "load" });
    if (process.env.ACTION) await page.evaluate(process.env.ACTION);
    await page.waitForTimeout(Number(process.env.WAIT ?? 800));
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    const name = `${path === "/" ? "home" : path.replace(/^\//, "").replace(/\//g, "_")}-${width}-${theme}.png`;
    await page.screenshot({ path: join(outDir, name), fullPage: process.env.FULL !== "0" });
    console.log(`${name}  overflow:${overflow}px  errors:${errors.length}${errors.length ? "\n  " + errors.join("\n  ") : ""}`);
    await context.close();
  }
}
await browser.close();
