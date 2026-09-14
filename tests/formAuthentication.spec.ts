import { test, expect } from "@playwright/test";

test("Read credentials from env file", async ({ page }) => {
  await page.goto(`${process.env.url}`);
  await page.getByText("Form Authentication", { exact: true }).click();
  await page
    .getByLabel("Username", { exact: true })
    .fill(`${process.env.username}`);
  await page
    .getByLabel("Password", { exact: true })
    .fill(`${process.env.password}`);
  await page.locator("[type='submit']").click();
});
