import { Page, Locator } from "@playwright/test";

export class HomePage {
  readonly page: Page;
  readonly link: Locator;
  readonly heading: Locator;

  constructor(page: Page) {
    this.page = page;
    this.link = page.getByRole("link", { name: "Form Authentication" });
    this.heading = page.getByRole("heading", {
      name: "Welcome to the-internet",
    });
  }

  async gotoPageUrl() {
    await this.page.goto(`${process.env.url}`);
  }

  async clickOnLink() {
    await this.link.click();
  }

  async verifyHeadingIsVisible() {
    return await this.heading.isVisible();
  }
}
