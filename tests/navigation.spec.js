// @ts-check
import { test, expect } from "@playwright/test";

test.describe("Navigation", () => {
  test("View venue", async ({ page }) => {
    await page.goto("/");
    const firstVenue = await page.locator("#venue-container > a:nth-child(1)");
    await firstVenue.click();
    await page.waitForURL("/venue/?id=*");
    await expect(
      page.getByRole("heading", { name: "Venue details" }),
    ).toBeVisible();
  });
});
