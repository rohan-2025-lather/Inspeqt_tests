import { test as setup, expect } from '@playwright/test'
import dotenv from 'dotenv';

dotenv.config();
async function login(page, email, password) {
  await page.goto('https://canary.inspeqt.ai/auth/signin');
  await page.getByLabel('Email').fill(email);
  await page.getByRole("textbox", { name: "Password" }).fill(password);
  await page.getByRole('button', { name: 'Sign in' }).click();
  
  await page.waitForURL('https://canary.inspeqt.ai/admin/dashboard');
}

const manager = { email: 'MANAGER_EMAIL', password: process.env.MANAGER_PASSWORD };
const auditor = { email: 'AUDITOR_EMAIL', password: process.env.AUDITOR_PASSWORD };
const user1 = { email: 'ADMIN_EMAIL', password: process.env.ADMIN_PASSWORD };

setup('authenticate for admin', async ({ page }) => {
  // Login as User 1
  await login(page, user1.email, user1.password);
  // Store the signed-in state for User 1
  await page.context().storageState({ path: 'playwright/.auth/admin.json' });
});


setup('authenticate for Manager', async ({ page }) => {

  await login(page, manager.email, manager.password);

  await page.context().storageState({ path: 'playwright/.auth/manager.json' });
});

setup('authenticate for auditor', async ({ page }) => {

  await login(page, auditor.email, auditor.password);
  await page.context().storageState({ path: 'playwright/.auth/auditor.json' });
});

