import { test, expect } from "@playwright/test";

// Using the link role
test("verify test control text", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/");
  await page.getByRole("link", { name: "A/B Testing" }).click();
  await expect(page.getByRole("paragraph")).toContainText(
    "Also known as split testing. This is a way in which businesses are able to simultaneously test and learn different versions of a page to see which text and/or functionality works best towards a desired outcome (e.g. a user action such as a click-through).",
  );
});
