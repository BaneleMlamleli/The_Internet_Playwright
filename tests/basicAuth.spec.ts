import { test, expect } from "@playwright/test";

test("verify login credentials are correct", async ({ page }) => {
  await page.goto(
    `https://${process.env.herokuapp_username}:${process.env.herokuapp_password}@the-internet.herokuapp.com/basic_auth`,
  );
  await expect(page.getByRole("heading")).toContainText("Basic Auth");
  await expect(page.getByRole("paragraph")).toContainText(
    "Congratulations! You must have the proper credentials.",
  );
});
