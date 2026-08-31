import { test } from "@playwright/test";

test("Take screenshot for the full page", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/");
  await page.screenshot({
    path: "./screenshots/fullPageScreenshot.png",
    fullPage: true,
  });
});
