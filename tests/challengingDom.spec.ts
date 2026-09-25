import { test, expect } from "@playwright/test";

test("Verify 'Challenging DOM' functionality", async ({ page }) => {
  await page.goto(`${process.env.url}`);
  await page.getByRole("link", { name: "Challenging DOM" }).click();

  // assert the heading and its text is available/visible
  await expect(
    page.getByRole("heading", { name: "Challenging DOM" }),
  ).toBeVisible();
  await expect(page.locator("div[class='example'] p")).toBeVisible();
  // assert the 'Answer' div is available/visible
  await expect(page.locator("#canvas")).toBeVisible();

  // first blue button: a[@class='button']
  // middle red button: a[@class='button alert']
  // Third green button: a[@class='button success']
});
