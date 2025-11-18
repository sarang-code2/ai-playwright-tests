import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30 * 1000,
  retries: 0,
  use: {
    headless: true,
    baseURL: 'http://localhost:5173', // change based on your app
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
});
