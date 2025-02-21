import { test, expect } from '@playwright/test';

test.describe('Create User', ()=> {
    test.use({ storageState: 'playwright/.auth/admin.json' });
    test('Add workflow', async ({ page }) => {
        await page.goto('https://canary.inspeqt.ai/admin/workflows');
        await page.getByRole('button', { name: '+ Create Workflow' }).click();
        await page.getByRole('button', { name: 'Save' }).click();
        // This test case usually fails due to long loading time of page
      });
  });

  test.describe('Check for notification for manager', ()=> {
    test.use({ storageState: 'playwright/.auth/manager.json' });
    test('Check for workflow added notification', async ({ page }) => {
        await page.goto('https://canary.inspeqt.ai/admin/dashboard');
        await page.locator('.css-dfpqc0 > .chakra-icon').click();
        await expect(await page.getByText('A new workflow Workflow has been created and is in').first().count()).toEqual(1);
      });
  });

  test.describe('Check for notification for admin', ()=> {
    test.use({ storageState: 'playwright/.auth/admin.json' });
    test('Check for workflow added notification', async ({ page }) => {
        await page.goto('https://canary.inspeqt.ai/admin/dashboard');
        await page.locator('.css-dfpqc0 > .chakra-icon').click();
        await expect(await page.getByText('A new workflow Workflow has been created and is in').first().count()).toEqual(1);       
      });
  });
  