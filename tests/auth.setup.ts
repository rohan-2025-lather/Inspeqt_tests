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

const user1 = { email: process.env.ADMIN_EMAIL, password: process.env.ADMIN_PASSWORD };
const user2 = { email: process.env.AUDITOR_EMAIL, password: process.env.AUDITOR_PASSWORD };

setup('authenticate for User 1', async ({ page }) => {
  // Login as User 1
  await login(page, user1.email, user1.password);
  // Store the signed-in state for User 1
  await page.context().storageState({ path: 'playwright/.auth/admin.json' });
});

setup('authenticate for User 2', async ({ page }) => {
  // Login as User 2
  await login(page, user2.email, user2.password);
  await page.context().storageState({ path: 'playwright/.auth/auditor.json' });
});


