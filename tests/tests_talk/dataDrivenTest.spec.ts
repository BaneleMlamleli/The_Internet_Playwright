import { test, expect } from "@playwright/test";
import testData from "../../test-data/credentials.json";

test.describe("Read data from env, json, and csv/excel", () => {
  // ----- ENV -----
  // Read credentials from env file
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

  // ----- JSON -----
  // Read credentials from json file
  type jsonTestDataType = {
    test_data: {
      environment: string;
      url: string;
      username: string;
      password: string;
    };
  };

  const jsonTestData = testData as jsonTestDataType;
  for (const key in jsonTestData) {
    const credentials = jsonTestData[key as keyof jsonTestDataType];

    test("Read credentials from json file", async ({ page }) => {
      await page.goto(`${credentials.url}`);
      await page.getByText("Form Authentication", { exact: true }).click();
      await page
        .getByLabel("Username", { exact: true })
        .fill(`${credentials.username}`);
      await page
        .getByLabel("Password", { exact: true })
        .fill(`${credentials.password}`);
      await page.locator("[type='submit']").click();
    });
  }

  // ----- CSV/EXCEL -----
  // Read credentials from env file
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
};);
