import { test, expect } from "@playwright/test";

test("matching multiple elements", async ({ page }) => {
  await page.goto("https://www.github.com/BakkappaN");
  const repositoryLinks = await page.$$('[class="repo"]');
  for (const link of repositoryLinks) {
    console.log(await link.textContent());
  }
  console.log("---------------");
  const repositoryLinksLocator = await page.locator('[class="repo"]').count();
  console.log(`Amount of links: ${repositoryLinksLocator}`);
  for (let index = 0; index < repositoryLinksLocator; index++) {
    console.log(
      index +
        1 +
        ": " +
        (await page.locator('[class="repo"]').nth(index).textContent()),
    );
  }
});
