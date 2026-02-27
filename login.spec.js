const { test, expect } = require('@playwright/test');

test('Успешный вход', async ({ page }) => {
  await page.goto('/login');

  await page.fill('input[name="email"]', 'test@test.com');
  await page.fill('input[name="password"]', 'Password123!');

  await page.click('button[type="submit"]');

  await expect(page).toHaveURL(/dashboard|profile|home/);
});

test('Ошибка при неверном пароле', async ({ page }) => {
  await page.goto('/login');

  await page.fill('input[name="email"]', 'test@test.com');
  await page.fill('input[name="password"]', 'wrongpassword');

  await page.click('button[type="submit"]');

  await expect(page.locator('text=Неверный')).toBeVisible();
});
