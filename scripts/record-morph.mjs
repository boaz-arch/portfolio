// Records the project → case study morph and back (BRIEF.md: Connected transitions).
// Output: a real-time video and a slowed frame sequence in screenshots/step2/morph/.
// Usage: node scripts/record-morph.mjs   (server on BASE_URL, default http://localhost:3000)
import { chromium } from "@playwright/test";
import { mkdirSync, readdirSync, renameSync, rmSync } from "node:fs";
import { join } from "node:path";

const base = process.env.BASE_URL ?? "http://localhost:3000";
const out = "screenshots/step2/morph";
rmSync(out, { recursive: true, force: true });
mkdirSync(out, { recursive: true });

const browser = await chromium.launch();
const viewport = { width: 1440, height: 900 };

// 1) Real-time video: /work → Project one → Back.
{
  const ctx = await browser.newContext({ viewport, recordVideo: { dir: out, size: viewport } });
  const page = await ctx.newPage();
  await page.goto(base + "/work", { waitUntil: "load" });
  await page.waitForTimeout(800);
  await page.getByRole("link", { name: /Project one\s*: case study/ }).click();
  await page.waitForURL("**/placeholder-project-one");
  await page.waitForTimeout(1200);
  await page.goBack();
  await page.waitForURL("**/work");
  await page.waitForTimeout(1200);
  await ctx.close();
  const video = readdirSync(out).find((f) => f.endsWith(".webm"));
  if (video) renameSync(join(out, video), join(out, "morph-and-back-1440.webm"));
}

// 2) Frame sequence with animations slowed 10×, so the in-between states are visible.
async function frames(label, action) {
  const ctx = await browser.newContext({ viewport });
  const page = await ctx.newPage();
  await page.goto(base + "/work", { waitUntil: "load" });
  await page.waitForTimeout(600);
  if (label === "back") {
    await page.getByRole("link", { name: /Project one\s*: case study/ }).click();
    await page.waitForURL("**/placeholder-project-one");
    await page.waitForTimeout(1000);
  }
  const cdp = await ctx.newCDPSession(page);
  await cdp.send("Animation.enable");
  await cdp.send("Animation.setPlaybackRate", { playbackRate: 0.1 });
  await action(page);
  for (let i = 0; i < 8; i++) {
    await page.screenshot({ path: join(out, `${label}-${String(i).padStart(2, "0")}.png`) });
    await page.waitForTimeout(600); // 600ms real = 60ms of animation time at 0.1×
  }
  await ctx.close();
}

await frames("forward", (page) => page.getByRole("link", { name: /Project one\s*: case study/ }).click());
await frames("back", (page) => page.goBack());

await browser.close();
console.log("written:", readdirSync(out).join(", "));
