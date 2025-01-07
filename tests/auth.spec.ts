import { test, expect } from '@playwright/test';

test.describe('Authentication Flow', () => {
  test.describe('Signup Page', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/signup');
    });

    test('should display signup form', async ({ page }) => {
      await expect(page.getByRole('heading', { name: /sign up/i })).toBeVisible();
      await expect(page.getByPlaceholder(/email/i)).toBeVisible();
      await expect(page.getByPlaceholder(/password/i)).toBeVisible();
      await expect(page.getByRole('button', { name: /sign up/i })).toBeVisible();
    });

    test('should show validation errors for empty fields', async ({ page }) => {
      await page.getByRole('button', { name: /sign up/i }).click();
      await expect(page.getByText(/email is required/i)).toBeVisible();
      await expect(page.getByText(/password is required/i)).toBeVisible();
    });

    test('should navigate to login page', async ({ page }) => {
      await page.getByRole('link', { name: /already have an account/i }).click();
      await expect(page).toHaveURL('/login');
    });
  });

  test.describe('Login Page', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/login');
    });

    test('should display login form', async ({ page }) => {
      await expect(page.getByRole('heading', { name: /login/i })).toBeVisible();
      await expect(page.getByPlaceholder(/email/i)).toBeVisible();
      await expect(page.getByPlaceholder(/password/i)).toBeVisible();
      await expect(page.getByRole('button', { name: /login/i })).toBeVisible();
    });

    test('should show validation errors for empty fields', async ({ page }) => {
      await page.getByRole('button', { name: /login/i }).click();
      await expect(page.getByText(/email is required/i)).toBeVisible();
      await expect(page.getByText(/password is required/i)).toBeVisible();
    });

    test('should navigate to signup page', async ({ page }) => {
      await page.getByRole('link', { name: /don't have an account/i }).click();
      await expect(page).toHaveURL('/signup');
    });
  });
}); 