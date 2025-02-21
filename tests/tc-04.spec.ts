import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

test.describe('New user', () => {

    test.use({ storageState: {} });
    test('Check Job Notification', async ({ page }) => {
      await page.goto('https://canary.inspeqt.ai/auth/signin');
      await page.getByLabel('Email').fill('rohan2010lather@gmail.com');
      await page.getByRole("textbox", { name: "Password" }).fill('12@auditor');
      await page.getByRole('button', { name: 'Sign in' }).click();
      await page.locator('.css-4bhf8b').click();
    });
  });