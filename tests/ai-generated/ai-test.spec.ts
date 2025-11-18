import { test, expect } from '@playwright/experimental-ct-react';
import TodoInput from '../src/components/TodoInput'; // Adjust path as necessary for your test setup

test.describe('TodoInput', () => {
  test('should render a Clear button', async ({ mount }) => {
    const component = await mount(<TodoInput onAdd={() => {}} />);

    const clearButton = component.locator('#clear-todo-button');
    await expect(clearButton).toBeVisible();
    await expect(clearButton).toHaveText('Clear');
  });

  // Depending on how 'clear' function is implemented (which is not in this diff),
  // you might add a test to ensure it clears the input.
  // Example (if an input field is present and 'clear' should reset it):
  /*
  test('should clear the input field when Clear button is clicked', async ({ mount }) => {
    let inputText = '';
    const component = await mount(<TodoInput onAdd={(text) => { inputText = text; }} />);

    const inputField = component.locator('input[type="text"]');
    await inputField.fill('New Todo Item');
    await expect(inputField).toHaveValue('New Todo Item');

    await component.locator('#clear-todo-button').click();
    await expect(inputField).toHaveValue(''); // Assuming 'clear' function resets the input
  });
  */
});
