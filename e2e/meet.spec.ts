import { expect, test } from "@playwright/test";

test("skipping the muted CEO drops the burn", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: "MeetBurn" })).toBeVisible();
  await expect(page.getByTestId("author-credit")).toContainText("Alessandro Alghisi");
  await expect(page.getByTestId("cost")).toHaveText("698 lei");
  await page.getByTestId("toggle-ceo").click();
  await expect(page.getByTestId("cost")).toHaveText("398 lei");
});
