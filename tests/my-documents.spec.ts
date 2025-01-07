import { test, expect } from '@playwright/test';

test.describe('MyDocuments Page', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the my-documents page before each test
    await page.goto('/documents/my-documents');
  });

  test('should display three document cards', async ({ page }) => {
    // Check if there are exactly 3 document cards
    const documentCards = page.locator('div[class*="bg-white border"]');
    await expect(documentCards).toHaveCount(3);
  });

  test('should display correct document titles', async ({ page }) => {
    // Check if document titles are correctly displayed
    for (let i = 1; i <= 3; i++) {
      const documentTitle = page.locator(`text=Document ${i}`);
      await expect(documentTitle).toBeVisible();
    }
  });

  test('should display correct document descriptions', async ({ page }) => {
    // Check if document descriptions are correctly displayed
    for (let i = 1; i <= 3; i++) {
      const documentDesc = page.locator(`text=This is a description of document ${i}`);
      await expect(documentDesc).toBeVisible();
    }
  });

  test('should have hover effects on document cards', async ({ page }) => {
    // Get the first document card
    const firstCard = page.locator('div[class*="bg-white border"]').first();
    
    // Check if the card has the correct hover classes
    const hasHoverClasses = await firstCard.evaluate((el) => {
      const classes = el.className;
      return classes.includes('hover:-translate-y-2') && 
             classes.includes('hover:shadow-xl');
    });
    
    expect(hasHoverClasses).toBeTruthy();
  });
}); 