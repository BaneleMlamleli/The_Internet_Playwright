import { test, expect } from "@playwright/test";

test("Radio button", async ({ page }) => {
  await page.goto("https://jqueryui.com/checkboxradio/");
  const iframe = await page.frameLocator("[class='demo-frame']");
  await expect(iframe.locator("label[for='radio-1']")).not.toBeChecked();
  await iframe.locator("label[for='radio-1']").check();
  await expect(iframe.locator("label[for='radio-1']")).toBeChecked();
});

test("Checkbox button", async ({ page }) => {
  await page.goto("https://jqueryui.com/checkboxradio/");
  const iframe = await page.frameLocator("[class='demo-frame']");
  await expect(iframe.locator("label[for='checkbox-1']")).not.toBeChecked();
  await iframe.locator("label[for='checkbox-1']").check();
  await expect(iframe.locator("label[for='checkbox-1']")).toBeChecked();
});
