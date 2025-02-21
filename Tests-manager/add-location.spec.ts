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
      await page.getByPlaceholder('eg. 1234 Design Avenue').fill('ABC');
      await page.getByPlaceholder('eg. Near ABC Shop').click();
      await page.getByPlaceholder('eg. Near ABC Shop').fill('ABC SHOP');
      await page.getByPlaceholder('Select').nth(1).click();
      await page.getByText('Andaman and Nicobar Islands').click();
      await page.getByPlaceholder('Select').nth(2).click();
      await page.locator('div').filter({ hasText: /^Betapur$/ }).click();
      await page.getByPlaceholder('eg. 160XXX').click();
      await page.getByPlaceholder('eg. 160XXX').fill('128940');
      await page.getByRole('button', { name: 'Add Address' }).click();
      await page.getByRole('button', { name: '+ Add Client' }).click();

     
    });
});
test.describe('Add Location in an existing client', ()=> {
  test.use({ storageState: 'playwright/.auth/admin.json' });
  test('Add Location in an existing client', async ({ page }) => {
      await page.goto('https://canary.inspeqt.ai/admin/clients');
      await page.getByRole('row', { name: 'Avc Avc Port Blair, Andaman' }).getByRole('link').nth(1).click();
      await page.getByRole('button', { name: '+ Add Location' }).click();
      await page.getByPlaceholder('eg. ABC Location').click();
      await page.getByPlaceholder('eg. ABC Location').fill('ABC');
      await page.getByPlaceholder('eg. Amit Singh').click();
      await page.getByPlaceholder('eg. Amit Singh').fill('AMIT');
      await page.locator('div').filter({ hasText: /^Location Type\*warehousecontainertruckrakekitchenshopmandimarketplace$/ }).getByPlaceholder('Select').click();
      await page.locator('div').filter({ hasText: /^warehouse$/ }).click();
      await page.getByPlaceholder('eg. BIHI0001035, 7ot0001064,').click();
      await page.getByPlaceholder('eg. BIHI0001035, 7ot0001064,').fill('BIHI0001035');
      await page.getByRole('textbox', { name: 'eg. abc@gmail.com' }).click();
      await page.getByRole('textbox', { name: 'eg. abc@gmail.com' }).fill('abc@gmail.com');
      await page.getByPlaceholder('eg. 967 000 ####').click();
      await page.getByPlaceholder('eg. 967 000 ####').fill('9876543210');
      await page.getByRole('textbox', { name: '(+XX)' }).click();
      await page.getByLabel('Add Location').getByText('India +').click();
      await page.getByPlaceholder('eg. 1234 Design Avenue').click();
      await page.getByPlaceholder('eg. 1234 Design Avenue').fill('ABC');
      await page.getByPlaceholder('eg. Near ABC Shop').click();
      await page.getByPlaceholder('eg. Near ABC Shop').fill('AMC');
      await page.getByPlaceholder('Select').nth(2).click();
      await page.getByText('Andaman and Nicobar Islands', { exact: true }).click();
  
      await page.getByPlaceholder('Select').nth(3).click();
      await page.locator('div').filter({ hasText: /^Betapur$/ }).click();
      await page.getByPlaceholder('eg. 160XXX').click();
      await page.getByPlaceholder('eg. 160XXX').fill('160012');
      await page.getByRole('button', { name: 'Add Location' }).click();

    });
});

test.describe('Check for notification', ()=> {
  test.use({ storageState: 'playwright/.auth/manager.json' });
  test('Check for Location Add notification by manager', async ({ page }) => {
      await page.goto('https://canary.inspeqt.ai/admin/dashboard');
      await page.locator('.css-dfpqc0 > .chakra-icon').click();
      await expect(await page.getByText('A new location BIHI0001035 is').first().count()).toEqual(1);
      
    });
});

test.describe('Check for notification', ()=> {
  test.use({ storageState: 'playwright/.auth/admin.json' });
  test('Check for Location Add notification by admin', async ({ page }) => {
      await page.goto('https://canary.inspeqt.ai/admin/dashboard');
      await page.locator('.css-dfpqc0 > .chakra-icon').click();
      await expect(await page.getByText('A new location BIHI0001035 is').first().count()).toEqual(1);
      
    });
});





