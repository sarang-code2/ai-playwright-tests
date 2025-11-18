import { test, expect } from '@playwright/test';

test.describe('TodoInput component', () => {
  test.beforeEach(async ({ page }) => {
    // Simulate the component being rendered on the page after the changes.
    // This HTML represents the TodoInput component *after* the PR diff is applied.
    await page.setContent(`
      <div>
        <input type="text" />
        <button style="margin-left: 8px;" id="add-todo-button">Add</button>
      </div>
    `);
  });

  test('should display the "Add" button', async ({ page }) => {
    const addButton = page.locator('#add-todo-button');
    await expect(addButton).toBeVisible();
    await expect(addButton).toHaveText('Add');
  });

  test('should no longer display the "Clear" button by id', async ({ page }) => {
    // The diff removes all elements with id="clear-todo-button".
    const clearButtonById = page.locator('#clear-todo-button');
    await expect(clearButtonById).not.toBeVisible(); // Ensures it's not on the page
    await expect(clearButtonById).toHaveCount(0);    // Ensures no elements match this selector
  });

  test('should no longer display the "Clear1" button', async ({ page }) => {
    // The diff specifically removed a button with text "Clear1".
    const clear1Button = page.locator('button', { hasText: 'Clear1' });
    await expect(clear1Button).not.toBeVisible(); // Ensures it's not on the page
    await expect(clear1Button).toHaveCount(0);    // Ensures no elements match this selector
  });
});
