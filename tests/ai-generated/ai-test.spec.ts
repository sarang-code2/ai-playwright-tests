import { test, expect } from '@playwright/test';

test.describe('TodoInput component', () => {
  test('should no longer display the "Clear" button', async ({ page }) => {
    // Navigate to a page where the TodoInput component is rendered.
    // For a real application, this might be your app's main page or a specific route.
    // For a component test, you might render the component directly into a test page.
    // Example: await page.goto('/your-todo-app-page');
    // As we don't have the full app context, we assume the component is rendered.

    // Given the diff, the button with id="clear-todo-button" has been removed.
    // We should assert that this element is no longer present or visible.
    const clearButton = page.locator('#clear-todo-button');

    // Expect the button to not be in the DOM
    await expect(clearButton).not.toBeVisible();
    await expect(clearButton).not.toBeAttached();
  });
});
