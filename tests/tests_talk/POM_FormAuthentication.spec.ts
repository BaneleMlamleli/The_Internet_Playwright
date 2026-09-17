import { test, expect } from "@playwright/test";
import { HomePage } from "../../pages/HomePage";
import { FormAuthentication } from "../../pages/FormAuthentication";

test("Enter login credentials", async ({ page }) => {
  const homePage = new HomePage(page);
  const formAuthentication = new FormAuthentication(page);
  await homePage.gotoPageUrl();
  await homePage.clickOnLink();
  console.info("Text is visible: " + homePage.verifyHeadingIsVisible());
  await expect(homePage.verifyHeadingIsVisible()).toBeTruthy();
  await formAuthentication.enterUsername(`${process.env.username}`);
  await formAuthentication.enterPassword(`${process.env.password}`);
  await formAuthentication.clickLoginButton();
});
