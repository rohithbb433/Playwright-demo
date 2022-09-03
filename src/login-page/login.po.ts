import { Locator, Page } from "@playwright/test";
let page: Page;

export class LoginPage {
  readonly userName: Locator;
  readonly passWord: Locator;
  readonly loginButton: Locator;
  readonly warningMessage: Locator;
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
    this.userName = page.locator("[name='userName']");
    this.passWord = page.locator("[name='passWord']");
    this.loginButton = page.locator("text='Sign In'");
    this.warningMessage = page.locator(
      "text='Provided username or password is incorrect'"
    );
  }

  async launchApplication(url: string): Promise<void> {
    await this.page.goto(url);
  }

  async loginModule(username: string, password: string): Promise<void> {
    await this.userName.fill(username);
    await this.passWord.fill(password);
    await this.loginButton.click();
  }
}
