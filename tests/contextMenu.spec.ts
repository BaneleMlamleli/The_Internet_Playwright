import { test, expect } from "@playwright/test";

test("Test right clicking on a mouse", async ({ page }) => {
  await page.goto(`${process.env.url}`);
  await page.getByRole("link", { name: "context menu" }).click();
  await expect(
    page.getByRole("heading", { name: "Context Menu" }),
  ).toBeVisible();
  await expect(page.locator("#hot-spot")).toBeVisible();
  await page.locator("#hot-spot").click({ button: "right" });

  page.on("dialog", async (dialog) => {
    console.log(`Dialog message: ${dialog.message()}`);
    await dialog.accept();
  });
});
