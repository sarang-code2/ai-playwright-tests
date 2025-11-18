import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
  await page.goto('http://localhost:4173');
  await expect(page).toHaveTitle(/Todo App/);
});

test('Add a todo item', async ({ page }) => {
  await page.goto('/');

  await page.fill('#todo-input', 'Buy milk');
  await page.click('#add-todo-button');

  const item = await page.locator('.todo-item', { hasText: 'Buy milk' });
  await expect(item).toBeVisible();
});