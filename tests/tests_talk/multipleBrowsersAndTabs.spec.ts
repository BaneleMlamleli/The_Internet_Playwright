import { test, expect } from "@playwright/test";

test("Multiple browsers and tabs", async ({ page, browser }) => {
  await page.goto("https://the-internet.herokuapp.com/");
  await page.getByRole("link", { name: "A/B Testing" }).click();
  await expect(page.getByRole("paragraph")).toContainText(
    "Also known as split testing. This is a way in which businesses are able to simultaneously test and learn different versions of a page to see which text and/or functionality works best towards a desired outcome (e.g. a user action such as a click-through).",
  );

  const context1 = await browser.newContext();
  const page1 = await context1.newPage();
  await page1.goto("https://the-internet.herokuapp.com/");
  await page1.getByRole("link", { name: "A/B Testing" }).click();
  await expect(page1.getByRole("paragraph")).toContainText(
    "Also known as split testing. This is a way in which businesses are able to simultaneously test and learn different versions of a page to see which text and/or functionality works best towards a desired outcome (e.g. a user action such as a click-through).",
  );

  const newTabForPage1 = await context1.newPage();
  await newTabForPage1.goto("https://the-internet.herokuapp.com/");
  await newTabForPage1
    .getByText("Add/Remove Elements", { exact: true })
    .click();
  await newTabForPage1.getByRole("button", { name: "Add Element" }).click();
  await expect(
    newTabForPage1.getByRole("button", { name: "Delete" }),
  ).toBeVisible();
  // TODO: Add assertion to see if button is added and visible
  await newTabForPage1.getByRole("button", { name: "Delete" }).click();
  await expect(
    newTabForPage1.getByRole("button", { name: "Delete" }),
  ).toBeVisible({
    visible: false,
  });
});
