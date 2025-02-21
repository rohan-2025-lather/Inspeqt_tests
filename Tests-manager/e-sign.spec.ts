import { test, expect } from '@playwright/test';
import { fetchLatestEmail } from '../utils/email-utils';
import { format } from 'path/win32';

const today = new Date();
const day = today.getDate();
const dayName = today.toLocaleDateString('en-US', { weekday: 'long' });
const monthName = today.toLocaleDateString('en-US', { month: 'long' });
const formatedDate=today.toISOString().split('T')[0]

test.describe('E-signature testing', ()=>{
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

test.describe('Completing Inspection', ()=> {
  test.use({ storageState: 'playwright/.auth/auditor.json' });
  test('Complete the inspection at the location by location inspector/auditor', async ({ page }) => {
      await page.goto('https://canary.inspeqt.ai/admin/dashboard');
      await page.getByRole('link', { name: 'Scheduled' }).click();
      await page.getByText(`Onn Nutrition IndiacontainercriticalStart Date${dayName}, ${day} ${monthName} 2025Due`).first().click();
      await page.getByRole('button', { name: 'Start Inspection' }).click();
      await page.locator('div').filter({ hasText: /^Email\*$/ }).locator('div').nth(2).click();
      await page.getByPlaceholder('Email').fill('rohan2010lather@gmail.com');
      await page.locator('div').filter({ hasText: /^Section 1Email\*Contact\*India \+91UAE \+971About\*Submit$/ }).first().click();
      await page.getByPlaceholder('Mobile').click();
      await page.getByPlaceholder('Mobile').fill('9306674985');
      await page.locator('textarea[name="tbxl0k0yjrbqtrdb"]').click();
      await page.locator('textarea[name="tbxl0k0yjrbqtrdb"]').fill('Hlo');
      await page.getByRole('button', { name: 'Submit' }).click();
      await page.getByRole('button', { name: 'Yes, Submit' }).click();
    });
});

test.describe('Approval of inspection by Manager', ()=> {
  test.use({ storageState: 'playwright/.auth/manager.json' });
  test('Pending approval by manager', async ({ page }) => {
      await page.goto('https://canary.inspeqt.ai/admin/pendingApprovals');
      await page.getByRole('row', { name: `${formatedDate} Onn Nutrition India Neer Remote... AGNEXT/SBM/0015 Bidyanandapur Amit Singh Review Pending`, exact: true }).first().getByRole('link').click();
      await page.getByRole('button', { name: 'Approve' }).click();
      await page.getByRole('button', { name: 'Submit' }).click(); 
  })
})

// THIS test case needs to be implemented 
test.describe('Sign on Leegality Portal', ()=> {
  test.use({ storageState: 'playwright/.auth/manager.json' });
  test('Sign on Leegality Portal', async ({ page }) => {
      const emailLink = await fetchLatestEmail();
      console.log("Extracted Link:", emailLink);
      await page.goto(emailLink);
      await page.getByRole('button', { name: 'Proceed' }).click();
      await page.getByPlaceholder('Enter OTP').click();
      await page.getByPlaceholder('Enter OTP').fill('313680');
      await page.getByRole('button', { name: 'Proceed' }).click();
      await page.locator('div:nth-child(2) > .text-center > .x-large').click();
      await page.locator('.pl-3').first().click();
      await page.getByRole('button', { name: 'Proceed' }).click();
      await page.locator('.form-group > div').click();
      await page.getByRole('button', { name: 'Sign Document' }).click();
   })
})



