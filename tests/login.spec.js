// @ts-check
import { test, expect } from "@playwright/test";
test.describe("Login Page", () => {
  test("Login form", async ({ page }) => {
    await page.goto("/login");
    await page.fill('input[name="email"]', process.env.TEST_USERNAME);
    await page.fill('input[name="password"]', process.env.TEST_PASSWORD);
    await page.click('button[type="submit"]');
    await page.waitForURL("/");
    await expect(page.getByRole("button", { name: "Logout" })).toBeVisible();
  });
  test("Invalid credentials", async ({ page }) => {
    await page.goto("/login");
    await page.fill('input[name="email"]', process.env.TEST_USERNAME);
    await page.fill('input[name="password"]', "wrongpassword");
    await page.click('button[type="submit"]');
    await expect(page.getByRole("alert")).toHaveText(
      "Invalid email or password",
    );
  });
});
