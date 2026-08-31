import { test, expect } from "@playwright/test";

test("Take screenshot for an element", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/");
  await page.getByRole("link", { name: "A/B Testing" }).click();
  await page
    .getByRole("paragraph")
    .screenshot({ path: "./screenshots/elementScreenshot.png" });
});
