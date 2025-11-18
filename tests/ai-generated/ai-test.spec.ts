import { test, expect } from '@playwright/test';

test.describe('TodoInput component', () => {

  // Assuming a page setup where TodoInput is rendered and an input field exists
  // For a full application test, navigate to the page containing TodoInput
  // For a component test, you might use a library like Playwright Component Testing
  // For this example, we'll simulate interactions assuming standard HTML elements.

  test.beforeEach(async ({ page }) => {
    // This setup assumes a basic page where TodoInput is present.
    // In a real application, you'd navigate to the appropriate URL.
    // For a simple test scaffold:
    await page.setContent(`
      <div>
        <input type="text" id="todo-input" value="" />
        <button id="add-todo-button">Add</button>
        <button id="clear-todo-button">Clear</button>
      </div>
      <script>
        // Simulate the clear functionality for the test environment
        document.getElementById('clear-todo-button').addEventListener('click', () => {
          document.getElementById('todo-input').value = '';
        });
      </script>
    `);
  });

  test('should display the Clear button', async ({ page }) => {
    const clearButton = page.locator('#clear-todo-button');
    await expect(clearButton).toBeVisible();
    await expect(clearButton).toHaveText('Clear');
  });

  test('should clear the input field when the Clear button is clicked', async ({ page }) => {
    const todoInput = page.locator('#todo-input');
    const clearButton = page.locator('#clear-todo-button');

    // Type some text into the input field
    await todoInput.fill('Buy groceries');
    await expect(todoInput).toHaveValue('Buy groceries');

    // Click the Clear button
    await clearButton.click();

    // Assert that the input field is now empty
    await expect(todoInput).toHaveValue('');
  });
});
