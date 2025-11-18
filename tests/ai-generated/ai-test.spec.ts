import { test, expect } from '@playwright/test';

test.describe('TodoInput component', () => {
  test.beforeEach(async ({ page }) => {
    // Assuming the TodoInput component is rendered on the root path for testing purposes
    // In a real application, you might navigate to a specific route or mount the component
    await page.goto('/');
  });

  test('should display the "Clear" button', async ({ page }) => {
    const clearButton = page.locator('#clear-todo-button');
    await expect(clearButton).toBeVisible();
    await expect(clearButton).toHaveText('Clear');
  });

  test('should clear the input field when the "Clear" button is clicked', async ({ page }) => {
    const todoInput = page.locator('#todo-input');
    const clearButton = page.locator('#clear-todo-button');

    // Type some text into the input
    await todoInput.fill('This is a test todo');
    await expect(todoInput).toHaveValue('This is a test todo');

    // Click the clear button
    await clearButton.click();

    // Assert that the input field is empty
    await expect(todoInput).toHaveValue('');
  });
});
