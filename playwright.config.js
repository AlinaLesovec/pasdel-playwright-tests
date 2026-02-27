const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',

  reporter: [
    ['list'],
    ['allure-playwright']
  ],

  use: {
    baseURL: 'https://pre.pasdel.ru',
    headless: true,
    screenshot: 'only-on-failure'
  }
});
