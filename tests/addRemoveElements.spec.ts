import { test, expect } from "@playwright/test";

test("Verify button is added and removed", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/");
  await page.getByText("Add/Remove Elements", { exact: true }).click();
  await page.getByRole("button", { name: "Add Element" }).click();
  await expect(page.getByRole("button", { name: "Delete" })).toBeVisible();
  await page.getByRole("button", { name: "Delete" }).click();
  await expect(page.getByRole("button", { name: "Delete" })).toBeVisible({
    visible: false,
  });
});
