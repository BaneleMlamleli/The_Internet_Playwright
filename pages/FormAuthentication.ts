import { Page, Locator } from "@playwright/test";

export class FormAuthentication {
  readonly page: Page;
  readonly txtUsername: Locator;
  readonly txtPassword: Locator;
  readonly btnLogin: Locator;

  constructor(page: Page) {
    this.page = page;
    this.txtUsername = page.getByLabel("Username", { exact: true });
    this.txtPassword = page.getByLabel("Password", { exact: true });
    this.btnLogin = page.locator("[type='submit']");
  }

  async enterUsername(username: string) {
    this.txtUsername.fill(username);
  }

  async enterPassword(password: string) {
    this.txtPassword.fill(password);
  }

  async clickLoginButton() {
    this.btnLogin.click();
  }
}
