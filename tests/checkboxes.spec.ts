import { test, expect } from "@playwright/test";

test("Verify checkboxes", async ({ page }) => {
  await page.goto(`${process.env.url}`);
  await page.getByRole("link", { name: "Checkboxes" }).click();
  const chckBox1 = await page.getByRole("checkbox").first();
  const chckBox2 = await page.getByRole("checkbox").nth(1);
  // 1. assert checkbox 1 is not checked
  await expect(chckBox1).not.toBeChecked();
  await expect(chckBox1).toBeChecked({ checked: false });

  // 2. check checkbox 1 and verify is checked
  chckBox1.check();
  await expect(chckBox1).toBeChecked();

  // 3. assert checkbox 2 is checked
  await expect(chckBox2).toBeChecked();
  await expect(chckBox2).toBeChecked();

  // 4. uncheck checkbox 2 and verify is unchecked
  chckBox2.uncheck();
  await expect(chckBox2).not.toBeChecked();
});
