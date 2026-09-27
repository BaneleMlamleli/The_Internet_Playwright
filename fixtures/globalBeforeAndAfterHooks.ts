import { test as base } from "@playwright/test";

export const test = base.extend<{}>({
  page: async ({ page }, use) => {
    test.info().annotations.push({
      description: new Date().toISOString(),
      type: "",
    });
    test.beforeAll("launch browser", async () => {
      await page.goto(`${process.env.url}`);
    });
    await use(page);
    test.info().annotations.push({
      description: new Date().toISOString(),
      type: "",
    });
  },
});
  
export { expect } from "@playwright/test";
