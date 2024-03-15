import { test, expect } from "@playwright/test";
import { MainPage } from "../pages/MainPage";

test.beforeEach("Login and accept cookies", async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.gotoMainPage();
  await mainPage.acceptCookiesMainPage();
});

test("Input contact information", async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.inputContactInfo(
    "Kevin",
    "Kevin@gmail.com",
    "1231231234",
    "Test 123, Int 7"
  );
});

test("Select Male Gender", async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.selectsMaleGender();
});

test("Select Female Gender", async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.selectsFemaleGender();
});

test("Input Date", async ({ page }) => {
  const mainPage = new MainPage(page);
  await page.locator("#datepicker").fill("01/01/2022");
});

test("Go to Open Cart Page", async ({ page }) => {
  const mainPage = new MainPage(page);
  mainPage.clickOpencartLink;
});

test("drag and drop", async ({ page }) => {
  const mainPage = new MainPage(page);
  mainPage.dragBoxIntoDropHere;
  expect("//div[@id='droppable']").toBeTruthy;
});

test("Select days of the weekend", async ({ page }) => {
  await page.getByLabel("Saturday").check();
  await page.getByLabel("Sunday").check();
  await page.getByLabel("Saturday").uncheck();
  await page.getByLabel("Sunday").uncheck();
});

test("Select days of the week", async ({ page }) => {
  await page.getByLabel("Monday").check();
  await page.getByLabel("Tuesday").check();
  await page.getByLabel("Wednesday").check();
  await page.getByLabel("Thursday").check();
  await page.getByLabel("Friday").check();
});

test("Dropdown country selection", async ({ page }) => {
  await page.getByLabel("Country:").selectOption("japan");
  await page.getByLabel("Country:").selectOption("canada");
  await page.getByLabel("Country:").selectOption("uk");
  await page.getByLabel("Country:").selectOption("germany");
  await page.getByLabel("Country:").selectOption("france");
  await page.getByLabel("Country:").selectOption("australia");
  await page.getByLabel("Country:").selectOption("japan");
  await page.getByLabel("Country:").selectOption("china");
  await page.getByLabel("Country:").selectOption("brazil");
  await page.getByLabel("Country:").selectOption("india");
});
