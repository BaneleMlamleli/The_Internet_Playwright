import { test, expect } from "../fixtures/globalBeforeAndAfterHooks.ts";

test("verify disappearing element work", async ({ page }) => {
  //   await page.goto(`${process.env.url}`);
  await page.getByRole("link", { name: "Disappearing Elements" }).click();
  await expect(
    page.getByText("Disappearing Elements", { exact: true }),
  ).toBeVisible();
  await page.locator("a[href]").first().click();
  //   const headerList = await page.locator("a[href]");
  //   const headerListArr = ["Home", "About", "Contact Us", "Portfolio", "Gallery"];
  //   for (const key in headerList) {
  //     console.log("Key: " + key);
  //   }
});
