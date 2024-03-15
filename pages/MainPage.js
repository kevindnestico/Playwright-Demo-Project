const { expect } = require("@playwright/test");

exports.MainPage = class MainPage {
  /**
   * @param {import('@playwright/test').Page} page
   */

  constructor(page) {
    this.page = page;
    this.cookieOkBtn = page.getByRole("link", { name: "OK" });
    this.nameInput = page.locator("#name");
    this.emailInput = page.locator("#email");
    this.phoneInput = page.locator("#phone");
    this.addressInput = page.locator("//*[@id='textarea']");
    this.maleRadioButton = page.getByLabel("Male", { exact: true });
    this.femaleRadioButton = page.getByLabel("Female");
    this.openCartLink = page.locator("//a[normalize-space()='open cart']");
    this.dragBox = page.locator(
      "//p[normalize-space()='Drag me to my target']"
    );
    this.dropHereBox = page.locator("//div[@id='droppable']");
  }

  async gotoMainPage() {
    await this.page.goto("https://testautomationpractice.blogspot.com");
  }

  async acceptCookiesMainPage() {
    await this.cookieOkBtn.click();
  }

  async inputContactInfo(name, email, phone, address) {
    await this.nameInput.fill(name);
    await this.emailInput.fill(email);
    await this.phoneInput.fill(phone);
    await this.addressInput.fill(address);
  }

  async selectsMaleGender() {
    const maleBtn = this.maleRadioButton;
    await maleBtn.click();
    expect(this.maleRadioButton).toBeChecked;
  }

  async selectsFemaleGender() {
    const femaleBtn = this.femaleRadioButton;
    await femaleBtn.click();
    expect(this.femaleGenderSelect).toBeChecked;
  }

  async clickOpencartLink() {
    const openCart = this.openCartLink;
    await openCart.click();
  }

  async dragBoxIntoDropHere() {
    const box = this.dragBox;
    const container = this.dropHereBox;
    await page.locator(box).hover();
    await page.mouse.down();
    await page.locator(container).hover();
    await page.mouse.up();
  }
};
