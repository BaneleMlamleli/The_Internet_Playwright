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
    this.btnLogin = page.getByRole("button", { name: "Login" });
  }

  async login(username: string, password: string) {
    this.txtUsername.fill(username);
    this.txtPassword.fill(password);
    this.btnLogin.click();
  }
}
