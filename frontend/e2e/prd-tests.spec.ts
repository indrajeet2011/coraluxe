import { test, expect } from "@playwright/test";

test.describe("PRD Requirements", () => {
  test("TC001: Home page should be clickable", async ({ page }) => {
    await page.goto("/");
    await page.locator('nav a:has-text("Home")').first().click();
    await expect(page.locator("nav")).toBeVisible();
  });

  test("Newsletter SignUp: validation prompts for missing email", async ({ page }) => {
    await page.goto("/");
    const newsletter = page.locator("form:has(button:has-text('SignUp'))").first();
    await newsletter.scrollIntoViewIfNeeded();
    await newsletter.getByRole("button", { name: /sign.?up/i }).click();
    const emailInput = newsletter.locator('input[type="email"]');
    const validation = await emailInput.evaluate((el: HTMLInputElement) => el.validationMessage);
    expect(validation).toBeTruthy();
  });

  test("TC004: Send Message without Name and Email shows validation prompts", async ({ page }) => {
    await page.goto("/");
    const form = page.locator("form:has(button:has-text('Send Message'))").first();
    await form.scrollIntoViewIfNeeded();
    await form.locator("#mobile").fill("1234567890");
    await form.locator("#subject").fill("Test Subject");
    await form.locator("#message").fill("Test message body");
    await form.getByRole("button", { name: /send message/i }).click();
    const nameVal = await form.locator("#name").evaluate((el: HTMLInputElement) => el.validationMessage);
    const emailVal = await form.locator("#email").evaluate((el: HTMLInputElement) => el.validationMessage);
    expect(nameVal || emailVal).toBeTruthy();
  });
});
