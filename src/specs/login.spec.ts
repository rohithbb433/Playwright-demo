import { test, expect } from "@playwright/test";
import { LoginPage } from "../login-page/login.po";

let loginPage: LoginPage;

test(`Verify login functionality`, async ({ page }) => {
  loginPage = new LoginPage(page);

  await test.step(`Launch application`, async () => {
    await loginPage.launchApplication(
      "https://tricon.paywheel.net/paywheelnewui/login/login-card"
    );
  });

  await test.step(`Call Login Function`, async () => {
    await loginPage.loginModule("Rohith", "653655");
  });

  await test.step(`Verify error message`, async () => {
    await loginPage.warningMessage.waitFor({ state: "attached" });
    expect(await loginPage.warningMessage.isVisible()).toBeTruthy();
    await page.close();
  });
});
