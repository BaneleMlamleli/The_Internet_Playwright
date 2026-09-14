import { test, expect } from "@playwright/test";
import testData from "../../test-data/credentials.json";
import { parse } from "csv-parse/sync";
import fs from "fs";
import path from "path";

test.describe("Read data from env, json, csv, and excel", () => {
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

  // ----- CSV -----
  type TestRecords = {
    environment: string;
    url: string;
    username: string;
    password: string;
  };

  const records = parse(
    fs.readFileSync(path.join(__dirname, "../../test-data/credentials.csv")),
    {
      columns: true,
      skip_empty_lines: true,
      trim: true,
    },
  ) as TestRecords[];

  for (const record of records) {
    test("Read credentials from csv file", async ({ page }) => {
      // const record = records[0];
      await page.goto(`${record.url}`);
      await page.getByText("Form Authentication", { exact: true }).click();
      await page.getByLabel("Username", { exact: true }).fill(record.username);
      await page.getByLabel("Password", { exact: true }).fill(record.password);
      await page.locator("[type='submit']").click();
    });
  }
});
