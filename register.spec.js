const { test, expect } = require('@playwright/test');

test('Успешная регистрация', async ({ page }) => {
  await page.goto('/signup');

  const email = `user${Date.now()}@test.com`;

  await page.fill('input[name="email"]', email);
  await page.fill('input[name="password"]', 'Password123!');
  await page.fill('input[name="passwordConfirmation"]', 'Password123!');

  await page.click('button[type="submit"]');

  await expect(page).toHaveURL(/dashboard|profile|home/);
});

test('Ошибка при несовпадении паролей', async ({ page }) => {
  await page.goto('/signup');

  await page.fill('input[name="email"]', `user${Date.now()}@test.com`);
  await page.fill('input[name="password"]', 'Password123!');
  await page.fill('input[name="passwordConfirmation"]', 'wrong');

  await page.click('button[type="submit"]');

  await expect(page.locator('text=Пароли')).toBeVisible();
});
