import { test, expect } from "@playwright/test";
import { HomePage } from "../../pages/HomePage";
import { FormAuthentication } from "../../pages/FormAuthentication";

test("Enter login credentials", async ({ page }) => {
  const homePage = new HomePage(page);
  const formAuthentication = new FormAuthentication(page);
  await homePage.gotoPageUrl();
  await homePage.clickOnLink();
  await expect(homePage.verifyHeadingIsVisible()).toBeTruthy();
  await formAuthentication.login(
    `${process.env.username}`,
    `${process.env.password}`,
  );
});
