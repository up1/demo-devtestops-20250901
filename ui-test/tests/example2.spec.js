// @ts-check
import { test, expect } from '@playwright/test';

test('Demo case 01', async ({ page }) => {
  await page.goto('https://seleniumbase.io/coffee/');
  await page.locator('[data-test="Espresso"]').click();
  await page.locator('[data-test="Espresso"]').click();

  await expect(page.locator('#app > div:nth-child(3) > ul > li:nth-child(1)')).toHaveScreenshot();
});
