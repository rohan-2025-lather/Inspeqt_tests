import { test, expect } from '@playwright/test';

test.describe('Log out and re-Login as different user', () => {

    test.use({ storageState: {} });
    test('Check Job Notification', async ({ page }) => {
      await page.goto('https://canary.inspeqt.ai/auth/signin');
      
     
      await page.getByLabel('Email').fill('vikasing@gmail.com');
      await page.getByRole("textbox", { name: "Password" }).fill("test@4321");
      await page.getByRole('button', { name: 'Sign in' }).click();
      await page.getByRole('listitem').getByRole('img').click();
      await page.getByRole('button', { name: 'Logout' }).click();
      await page.getByLabel('Email').fill('rohan2010lather@gmail.com');
      await page.getByRole("textbox", { name: "Password" }).fill("12@auditor");
      await page.getByRole('button', { name: 'Sign in' }).click();
      await page.getByRole('link', { name: 'Inspection Detail Logo' }).click();
    
    });


  });