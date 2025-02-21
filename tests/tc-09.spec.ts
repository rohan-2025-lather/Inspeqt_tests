import { test, expect } from '@playwright/test';


test.describe('Triggering a Notification', () => {

  test.use({ storageState: {} });
  test('Check Job Notification', async ({ page }) => {
    await page.goto('https://canary.inspeqt.ai/auth/signin');
    await page.getByLabel('Email').fill('rohan2010lather@gmail.com');
    await page.getByRole("textbox", { name: "Password" }).fill('12@auditor');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.locator('.css-4bhf8b').click();
  });
});
test.describe('Auditor checks the highlighted notifications ', () => {

    test.use({ storageState: 'playwright/.auth/auditor.json' });
    test('Check for count of highlighted Notifications in notification panel', async ({ page }) => {
      await page.goto('https://canary.inspeqt.ai/auth/dashboard');
      const user1PrevCount = await page.locator('.css-ga13lk').innerText();
      console.log(`User 1 notification count depicted on the bell icon: ${user1PrevCount}`);
      await page.locator('.css-4bhf8b').click();
      const highlighted_count=await page.locator('.css-fvj1qr').count();
      console.log(`the actual highlited notifications are ${highlighted_count}`);

      
      
    });
  });