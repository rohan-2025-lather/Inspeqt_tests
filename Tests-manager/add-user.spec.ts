import { test, expect } from '@playwright/test';

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
        await page.getByPlaceholder('eg. abc@gmail.com').fill('abcde@gmail.com');
        await page.getByPlaceholder('eg. 967 000 ####').click();
        await page.getByPlaceholder('eg. 967 000 ####').fill('9876543210');
        await page.getByPlaceholder('(+XX)').click();
        await page.locator('div').filter({ hasText: /^India \+91$/ }).click();
        await page.getByRole('button', { name: 'Add User' }).click();
       
      });
  });

  test.describe('Check for notification for manager', ()=> {
    test.use({ storageState: 'playwright/.auth/manager.json' });
    test('Check for user added notification', async ({ page }) => {
        await page.goto('https://canary.inspeqt.ai/admin/dashboard');
        await page.locator('.css-dfpqc0 > .chakra-icon').click();
        await page.waitForTimeout(2000); 
        await expect(await page.getByText('Amit Singh has joined Inspeqt as manager').first().count()).toEqual(1);
      });
  });

  test.describe('Check for notification for admin', ()=> {
    test.use({ storageState: 'playwright/.auth/admin.json' });
    test('Check for user added notification', async ({ page }) => {
        await page.goto('https://canary.inspeqt.ai/admin/dashboard');
        await page.locator('.css-dfpqc0 > .chakra-icon').click();
        await page.waitForTimeout(2000);
        await expect(await page.getByText('Amit Singh has joined Inspeqt as manager.').first().count()).toEqual(1);       
      });
  });
  
  

