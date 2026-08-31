import { test, expect } from "@playwright/test";

test("Take screenshot for a page", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/");
  await page.getByRole("link", { name: "A/B Testing" }).click();
  await page.screenshot({ path: "./screenshots/pageScreenshot.png" });
});
