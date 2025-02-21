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
        await page.getByPlaceholder('eg. abc@gmail.com').fill('ade@gmail.com');
        await page.getByPlaceholder('eg. 967 000 ####').click();
        await page.getByPlaceholder('eg. 967 000 ####').fill('9876543210');
        await page.getByPlaceholder('(+XX)').click();
        await page.locator('div').filter({ hasText: /^India \+91$/ }).click();
        await page.getByRole('button', { name: 'Add User' }).click();
      });
  });
  


  test.describe('Deactivate User', ()=>{
    test.use({ storageState: 'playwright/.auth/admin.json' });
    test('user', async ({ page }) => {
    await page.goto('https://canary.inspeqt.ai/admin/users');
    await page.getByRole('row', { name: 'Amit Singh Amit Singh Operations Manager Manager' }).getByRole('link').first().click();
    await page.locator('div').filter({ hasText: /^Deactivate$/ }).click();
    await page.locator('span').nth(2).click();
    await page.getByRole('button', { name: 'Deactivate' }).click();
    })
  })

  test.describe('Check for notification for manager', ()=> {
    test.use({ storageState: 'playwright/.auth/manager.json' });
    test('Check for deactivate notification', async ({ page }) => {
        await page.goto('https://canary.inspeqt.ai/admin/dashboard');
        await page.locator('.css-dfpqc0 > .chakra-icon').click();
        await expect(await page.getByText("Amit Singh's account has been deactivated in the system.").first().count()).toEqual(1);
      });
  });

  test.describe('Check for notification for admin', ()=> {
    test.use({ storageState: 'playwright/.auth/admin.json' });
    test('Check for deactivate notification', async ({ page }) => {
        await page.goto('https://canary.inspeqt.ai/admin/dashboard');
        await page.locator('.css-dfpqc0 > .chakra-icon').click();
        await expect(await page.getByText("Amit Singh's account has been deactivated in the system.").first().count()).toEqual(0);       
      });
  });

  test.describe('Reactivate User', ()=>{
    test.use({ storageState: 'playwright/.auth/admin.json' });
    test('Add user', async ({ page }) => {
    await page.goto('https://canary.inspeqt.ai/admin/users');
    await page.getByRole('row', { name: 'Amit Singh Amit Singh Operations Manager Manager' }).getByRole('link').first().click();
    await page.locator('div').filter({ hasText: /^Deactivate$/ }).click();
    await page.locator('span').nth(2).click();
    
    })
  })


  test.describe('Check for notification for manager', ()=> {
    test.use({ storageState: 'playwright/.auth/manager.json' });
    test('Check for reactivation notification', async ({ page }) => {
        await page.goto('https://canary.inspeqt.ai/admin/dashboard');
        await page.locator('.css-dfpqc0 > .chakra-icon').click();
        await expect(await page.getByText("Amit Singh's account has been deactivated in the system.").first().count()).toEqual(1);
      });
  });

  test.describe('Check for notification for admin', ()=> {
    test.use({ storageState: 'playwright/.auth/admin.json' });
    test('Check for reactivation notification', async ({ page }) => {
        await page.goto('https://canary.inspeqt.ai/admin/dashboard');
        await page.locator('.css-dfpqc0 > .chakra-icon').click();
        await expect(await page.getByText("Amit Singh's account has been reactivated in the system.").first().count()).toEqual(0);       
      });
  });


  test.describe('Remove User', ()=>{
    test.use({ storageState: 'playwright/.auth/admin.json' });
    test('Add user', async ({ page }) => {
    await page.goto('https://canary.inspeqt.ai/admin/users');
    await page.getByRole('row', { name: 'Amit Singh Amit Singh Operations Manager Manager' }).getByRole('link').first().click();
    await page.locator('.css-107sd67').click();
    await page.getByRole('textbox').click();
    await page.getByRole('textbox').fill('DELETE');
    await page.getByRole('button', { name: 'Delete Account' }).click();
   
    })
  })


  test.describe('Check for notification for manager', ()=> {
    test.use({ storageState: 'playwright/.auth/manager.json' });
    test('Check for remove notification', async ({ page }) => {
        await page.goto('https://canary.inspeqt.ai/admin/dashboard');
        await page.locator('.css-dfpqc0 > .chakra-icon').click();
        await expect(await page.getByText("Amit Singh's account has been removed in the system.").first().count()).toEqual(1);
      });
  });

  test.describe('Check for notification for admin', ()=> {
    test.use({ storageState: 'playwright/.auth/admin.json' });
    test('Check for remove notification', async ({ page }) => {
        await page.goto('https://canary.inspeqt.ai/admin/dashboard');
        await page.locator('.css-dfpqc0 > .chakra-icon').click();
        await expect(await page.getByText("Amit Singh's account has been removed in the system.").first().count()).toEqual(0);       
      });
  });





