import { test, expect } from "@playwright/test";

test("Accept alert", async ({ page }) => {
  await page.goto(
    "https://www.selenium.dev/documentation/webdriver/interactions/alerts/",
  );

  page.once("dialog", (dialog) => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.accept();
  });

  await page.getByText("See an example alert", { exact: true }).click();
});

test("Dismiss alert", async ({ page }) => {
  await page.goto("https://www.selenium.dev/selenium/web/alerts.html#");
  page.once("dialog", (dialog) => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.locator("#alert").click();
});

test("Enter text in the popup box", async ({ page }) => {
  await page.goto(
    "https://www.selenium.dev/documentation/webdriver/interactions/alerts/",
  );
  page.once("dialog", async (dialog) => {
    console.log(`Dialog message: ${dialog.message()}`);
    await dialog.accept("playwright");
  });
  await page.getByAltText("See a sample prompt", { exact: true }).click();
});

// https://www.jqueryui.com