// @ts-check
import { test, expect } from '@playwright/test';

test('Demo case 01', async ({ page }) => {
  await page.goto('https://seleniumbase.io/coffee/');
  await page.locator('[data-test="Espresso"]').click();
  await page.locator('[data-test="Espresso_Macchiato"]').click();
  await page.getByRole('link', { name: 'Cart page2' }).click();
  await page.locator('[data-test="checkout"]').click();
  await page.getByRole('textbox', { name: 'Name' }).fill('sdfsdfs');;
  await page.getByRole('textbox', { name: 'Email' }).fill('fsdfsdf');
  await page.getByRole('button', { name: 'Submit' }).click();
});
