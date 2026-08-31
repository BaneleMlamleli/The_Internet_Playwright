import { test, expect } from "@playwright/test";

test("testing", async ({ page }) => {
  await page.goto("https://www.google.com");
});
