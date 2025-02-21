import { test, expect } from '@playwright/test';
test.describe('Create Client', ()=> {
    test.use({ storageState: 'playwright/.auth/admin.json' });
    test('Add client', async ({ page }) => {
        await page.goto('https://canary.inspeqt.ai/admin/clients');
        await page.getByRole('button', { name: '+ Add Client' }).click();
        await page.getByPlaceholder('Select').click();
        await page.locator('div').filter({ hasText: /^India$/ }).click();
        await page.getByPlaceholder('eg. ABC Pvt Ltd').click();
        await page.getByPlaceholder('eg. ABC Pvt Ltd').fill('AVC');
        await page.getByPlaceholder('eg. abc@gmail.com').click();
        await page.getByPlaceholder('eg. abc@gmail.com').fill('abc@gmail.com');
        await page.getByPlaceholder('eg. 876 000 ####').click();
        await page.getByPlaceholder('eg. 876 000 ####').fill('9876543211');
        await page.getByRole('button', { name: '+ Add Address' }).click();
        await page.getByPlaceholder('eg. 1234 Design Avenue').click();
        await page.getByPlaceholder('eg. 1234 Design Avenue').fill('hospital');
        await page.getByPlaceholder('eg. Near ABC Shop').click();
        await page.getByPlaceholder('eg. Near ABC Shop').fill('Sweet SHOP');
        await page.getByPlaceholder('Select').nth(1).click();
        await page.getByText('Andaman and Nicobar Islands').click();
        await page.getByRole('button').nth(2).click();
        await page.getByPlaceholder('Select').nth(2).click();
        await page.locator('div').filter({ hasText: /^Betapur$/ }).click();
        await page.getByPlaceholder('eg. 160XXX').click();
        await page.getByPlaceholder('eg. 160XXX').fill('123789');
        await page.getByRole('button', { name: 'Add Address' }).click();
        await page.getByRole('button', { name: '+ Add Client' }).click();    
      });
  });

test.describe('Check for notification for manager', ()=> {
    test.use({ storageState: 'playwright/.auth/manager.json' });
    test('Check for Client added notification', async ({ page }) => {
        await page.goto('https://canary.inspeqt.ai/admin/dashboard');
        await page.locator('.css-dfpqc0 > .chakra-icon').click();
        await expect(await page.getByText('A new client AVC is added in Inspeqt.').first().count()).toEqual(1);
      });
  });

  test.describe('Check for notification for admin', ()=> {
    test.use({ storageState: 'playwright/.auth/admin.json' });
    test('Check for Location added notification', async ({ page }) => {
        await page.goto('https://canary.inspeqt.ai/admin/dashboard');
        await page.locator('.css-dfpqc0 > .chakra-icon').click();
        await expect(await page.getByText('A new client AVC is added in Inspeqt.').first().count()).toEqual(1);       
      });
  });
  
  

