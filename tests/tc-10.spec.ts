import { test, expect } from '@playwright/test';

test.describe('Auditor checks the highlighted notifications and makes one unread to read', () => {

    test.use({ storageState: 'playwright/.auth/auditor.json' });
    test('Check Notification', async ({ page }) => {
      await page.goto('https://canary.inspeqt.ai/auth/dashboard');

      const user1PrevCount = await page.locator('.css-ga13lk').innerText();
      console.log(`User 1 notification count depicted on the bell icon: ${user1PrevCount}`);
      
      await page.locator('.css-4bhf8b').click();
      const highlighted_count=await page.locator('.css-fvj1qr').count();
      console.log(`the actual highlited notifications are ${highlighted_count}`);

      await page.locator('.css-fvj1qr').nth(0).click();
      await page.waitForTimeout(2000);
      const new_highlighted_count=await page.locator('.css-fvj1qr').count();
      console.log(`the actual highligted notifications after reading one notification is ${new_highlighted_count}`);
      await page.getByLabel('Close').click();
      const Count = await page.locator('.css-ga13lk').innerText();
      console.log(`User 1 notification count depicted on the bell icon afterwards: ${Count}`);    
    });
  });