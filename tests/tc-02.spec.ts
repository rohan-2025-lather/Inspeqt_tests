import { test, expect } from '@playwright/test';
import { fetchLatestEmail } from './email-utils';

// Test for User 1

// change the user mail id every time you run the test
test.describe('Create User', ()=> {
  test.use({ storageState: 'playwright/.auth/admin.json' });
  test('Add user', async ({ page }) => {
      await page.goto('https://canary.inspeqt.ai/admin/users');
      await page.getByRole('button', { name: 'Add User' }).click();
      await page.getByRole('menuitem', { name: 'icon Create New User' }).click();
      await page.locator('div').filter({ hasText: /^Department\*OperationsManagement$/ }).getByPlaceholder('Select').click();
      await page.locator('div').filter({ hasText: /^Operations$/ }).click();
      await page.getByPlaceholder('eg. Manager').click();
      await page.getByPlaceholder('eg. Manager').fill('Manager');
      await page.locator('div').filter({ hasText: /^Roles\*ManagerAdminAuditor$/ }).getByPlaceholder('Select').click();
      await page.locator('li').filter({ hasText: 'Manager' }).click();
      await page.getByPlaceholder('eg. Amit').click();
      await page.getByPlaceholder('eg. Amit').fill('Amit');
      await page.getByPlaceholder('eg. Singh').click();
      await page.getByPlaceholder('eg. Singh').fill('Singh');
      await page.locator('div').filter({ hasText: /^GendermalefemaleotherPrefer Not To Answer$/ }).getByPlaceholder('Select').click();
      await page.locator('div').filter({ hasText: /^male$/ }).click();
      await page.getByPlaceholder('eg. abc@gmail.com').click();
      await page.getByPlaceholder('eg. abc@gmail.com').fill('rohan2010lather+7@gmail.com');
      await page.getByPlaceholder('eg. 967 000 ####').click();
      await page.getByPlaceholder('eg. 967 000 ####').fill('9876543210');
      await page.getByPlaceholder('(+XX)').click();
      await page.locator('div').filter({ hasText: /^India \+91$/ }).click();
      await page.getByRole('button', { name: 'Add User' }).click();
     
    });
});

test.describe('User Tests', () => {
  test.use({ storageState: 'playwright/.auth/admin.json' });
  test('Get Email for Set password', async () => {
    const latestEmail =  await fetchLatestEmail();
      console.log(latestEmail.subject);
  });
});

test.describe('User 1 Tests', () => {
  test.use({ storageState: 'playwright/.auth/admin.json' });
  test('Deactivate a user', async ({ page }) => {
    await page.goto('https://canary.inspeqt.ai/admin/users');
    await page.getByRole('row', { name: 'Amit Singh Amit Singh' }).getByRole('link').first().click();
    await page.locator('div').filter({ hasText: /^Deactivate$/ }).click();
    await page.locator('span').nth(2).click();
    await page.getByRole('button', { name: 'Deactivate' }).click();
    await page.waitForTimeout(2000); 
    const latestEmail = await fetchLatestEmail();
    console.log(latestEmail.subject);
    
  });
});

test.describe('User Tests', () => {
    test.use({ storageState: 'playwright/.auth/admin.json' });
    test('Activate a user', async ({ page }) => {
      await page.goto('https://canary.inspeqt.ai/admin/users');
      await page.getByRole('row', { name: 'Amit Singh Amit Singh' }).getByRole('link').first().click();
      await page.locator('span').nth(1).click();
      await page.waitForTimeout(5000); 
      const latestEmail = await fetchLatestEmail();
        console.log(latestEmail.subject);
    });
  });

  test.describe('User 1 Tests', () => {
    test.use({ storageState: 'playwright/.auth/admin.json' });
  
    test('Delete a user', async ({ page }) => {
      await page.goto('https://canary.inspeqt.ai/admin/users');
      await page.getByRole('row', { name: 'Amit Singh Amit Singh ' }).getByRole('link').first().click();
      await page.locator('.css-107sd67').click();
      await page.getByRole('textbox').click();
      await page.getByRole('textbox').fill('DELETE');
      await page.getByRole('button', { name: 'Delete Account' }).click();
      await page.waitForTimeout(5000); 
      const latestEmail = await fetchLatestEmail();
      console.log(latestEmail.subject);
      
    });
  });