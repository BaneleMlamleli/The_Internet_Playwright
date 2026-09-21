import { test, expect, Locator } from "@playwright/test";

test("Verify and list broken images", async ({ page }) => {
  await page.goto(`${process.env.url}`);
  await page.getByRole("link", { name: "Broken Images" }).click();
  const imgCounter = await page.locator("div[class='example'] img").count();

  for (let index = 0; index < imgCounter; index++) {
    const imageValue = await page
      .locator("div[class='example'] img")
      .nth(index)
      .getAttribute("src");
    // console.log(`Image value: ${imageValue}`);
    if (!imageValue?.includes("img/")) {
      console.log(`Image ${imageValue} is broken`);
    }
  }
});
