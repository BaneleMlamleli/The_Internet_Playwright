import { test } from "@playwright/test";

// Using the getByRole locator
test("getByRole locator", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/");
});

// Using the getByRole locator
test("getByLabel locator", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/");
});

// Using the getByRole locator
test("getByPlaceholder locator", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/");
});

// Using the getByRole locator
test("getByText locator", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/");
});

// Using the getByRole locator
test("getByTestId locator", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/");
});

// Using the getByRole locator
test("getByLocator locator", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/");
});

// Using the getByRole locator
test("getByAltText locator", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/");
});
