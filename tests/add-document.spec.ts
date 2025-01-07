import { test, expect } from '@playwright/test';

test.describe('Add Document Page', () => {
  test.beforeEach(async ({ page }) => {
    // TODO: Add login steps here when authentication is implemented
    await page.goto('/documents/add-document');
  });

  test('should display add document form', async ({ page }) => {
    await expect(page.getByRole('heading', { name: /add document/i })).toBeVisible();
    await expect(page.getByPlaceholder(/title/i)).toBeVisible();
    await expect(page.getByPlaceholder(/description/i)).toBeVisible();
    await expect(page.getByRole('button', { name: /submit|add|create/i })).toBeVisible();
  });

  test('should show validation errors for empty fields', async ({ page }) => {
    await page.getByRole('button', { name: /submit|add|create/i }).click();
    await expect(page.getByText(/title is required/i)).toBeVisible();
    await expect(page.getByText(/description is required/i)).toBeVisible();
  });

  test('should successfully add a document', async ({ page }) => {
    const testTitle = 'Test Document';
    const testDescription = 'Test Description';

    await page.getByPlaceholder(/title/i).fill(testTitle);
    await page.getByPlaceholder(/description/i).fill(testDescription);
    await page.getByRole('button', { name: /submit|add|create/i }).click();

    // Assuming successful submission redirects to my-documents page
    await expect(page).toHaveURL('/documents/my-documents');
  });

  test('should have cancel button that redirects to my documents', async ({ page }) => {
    await page.getByRole('button', { name: /cancel/i }).click();
    await expect(page).toHaveURL('/documents/my-documents');
  });
}); 