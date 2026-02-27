const { test, expect } = require('@playwright/test');

test('Стартовая страница соответствует snapshot', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveScreenshot('home.png', {
    fullPage: true
  });
});
