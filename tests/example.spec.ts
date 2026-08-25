import { test, expect, Page } from "@playwright/test";

test.describe("Test hooks", () => {
  test.beforeAll(async () => {
    console.log("Setup: Initiating web startup");
  });

  test.beforeEach(async ({ page }) => {
    await page.goto("https://playwright.dev/");
  });

  test("has title", async ({ page }) => {
    console.log("running \'has title\' test");
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Playwright/);
  });

  test("get started link", async ({ page }) => {
    console.log("running \'get started link\' test");
    // Click the get started link.
    await page.getByRole("link", { name: "Get started" }).click();
    // Expects page to have a heading with the name of Installation.
    await expect(
      page.getByRole("heading", { name: "Installation" }),
    ).toBeVisible();
  });

  test.afterEach(async () => {
    console.log("running \'afterEach\' test");
  });

  test.afterAll(async () => {
    console.log("Setup: Closing web run");
  });
});
