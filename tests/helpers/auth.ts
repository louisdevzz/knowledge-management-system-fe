import { Page } from '@playwright/test';

export async function login(page: Page, email: string, password: string) {
  await page.goto('/login');
  await page.getByPlaceholder(/email/i).fill(email);
  await page.getByPlaceholder(/password/i).fill(password);
  await page.getByRole('button', { name: /login/i }).click();
  // Wait for navigation or success state
  await page.waitForURL('/documents/my-documents');
}

export async function signup(page: Page, email: string, password: string) {
  await page.goto('/signup');
  await page.getByPlaceholder(/email/i).fill(email);
  await page.getByPlaceholder(/password/i).fill(password);
  await page.getByRole('button', { name: /sign up/i }).click();
  // Wait for navigation or success state
  await page.waitForURL('/documents/my-documents');
} 