import { test, expect } from '@playwright/test';

const today = new Date();
const day = today.getDate();
const dayName = today.toLocaleDateString('en-US', { weekday: 'long' });
const monthName = today.toLocaleDateString('en-US', { month: 'long' });
const formatedDate=today.toISOString().split('T')[0]
test.describe('Create Job', ()=> {
  test.use({ storageState: 'playwright/.auth/manager.json' });
  test('create job', async ({ page }) => {
        // test.setTimeout(0000);
          await page.goto('https://canary.inspeqt.ai/admin/jobs');
          await page.locator('.css-1ezub8v',{hasText:'+ Create New Job'}).click();
          await page.getByPlaceholder('eg. ABC Bank Inspection').click();
          await page.getByPlaceholder('eg. ABC Bank Inspection').fill('ABC');
          await page.getByPlaceholder('Select').first().click();
          await page.locator('div').filter({ hasText: /^Onn Nutrition India$/ }).first().click();
          await page.locator('.css-1afp10f').click();
          await page.getByText('Location Name:Neer Remote Warehouse LimitedLocation Code:AGNEXT/SBM/').click();
          await page.locator('div').filter({ hasText: /^Priority\*CriticalHighMediumLow$/ }).getByPlaceholder('Select').click();
          await page.locator('div').filter({ hasText: /^Critical$/ }).first().click();
          await page.getByRole('button', { name: 'Select' }).click();
          await page.getByPlaceholder('Search Workflow').click();
          await page.getByPlaceholder('Search Workflow').fill('Lee');
          await page.locator('div').filter({ hasText: /^Leegality Test import$/ }).nth(2).click();
          await page.getByRole('button', { name: 'Select WorkFlow' }).click();
          await page.getByPlaceholder('Select').nth(2).click();
          await page.getByText('Amit Singh').click();
          await page.locator('.css-1lfef8a').nth(0).click();
          await page.locator('.DateDP', { hasText: `${day}` }).first().click();
          await page.locator('.css-1lfef8a').nth(1).click();
          await page.locator('.DateDP', { hasText: `${day}` }).nth(1).click();
  
          await page.getByRole('button', { name: '+ Add Job' }).click(); 
        });
});

test.describe('Job Submission by Auditor', ()=> {
  test.use({ storageState: 'playwright/.auth/auditor.json' });
  test('Check for Location Add notification', async ({ page }) => {
      await page.goto('https://canary.inspeqt.ai/admin/dashboard');
      await page.locator('.css-dfpqc0 > .chakra-icon').click();
      await page.goto('https://canary.inspeqt.ai/admin/inspection-menu?tab=0');
      await page.getByText(`Onn Nutrition IndiacontainercriticalStart Date${dayName}, ${day} ${monthName} 2025Due`).first().click();
      await page.getByRole('button', { name: 'Start Inspection' }).click();
      await page.locator('div').filter({ hasText: /^Email\*$/ }).locator('div').nth(2).click();
      await page.getByPlaceholder('Email').fill('abc@gmail.com');
      await page.getByPlaceholder('Mobile').click();
      await page.getByPlaceholder('Mobile').fill('9876543210');
      await page.locator('textarea[name="tbxl0k0yjrbqtrdb"]').click();
      await page.locator('textarea[name="tbxl0k0yjrbqtrdb"]').fill('hlo');
      await page.getByRole('button', { name: 'Submit' }).click();
      await page.getByRole('button', { name: 'Yes, Submit' }).click(); 


    });
});

test.describe('Check for notification', ()=> {
  test.use({ storageState: 'playwright/.auth/manager.json' });
  test('Add client', async ({ page }) => {
       await page.goto('https://canary.inspeqt.ai/admin');
       await page.locator('.css-dfpqc0 > .chakra-icon').click();
       await expect(await page.getByText('A task is submitted by Amit Singh.').first().count()).toEqual(1);
    });
});




