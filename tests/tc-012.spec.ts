import { test, expect } from '@playwright/test';
test.describe('Auditor checks the highlighted notifications when dropdown is open ', () => {
    test('Switch Between Users and Maintain Context', async ({ browser }) => {
        const user1Context = await browser.newContext({
          storageState: 'playwright/.auth/auditor.json',
        });
        const user1Page = await user1Context.newPage();
        await user1Page.goto('https://canary.inspeqt.ai/admin/dashboard');
        await user1Page.locator('.css-4bhf8b').click();
        const highlighted_count=await user1Page.locator('.css-fvj1qr').count();
        console.log(`the actual highlited notifications are ${highlighted_count}`); 
        const user2Context = await browser.newContext({
          storageState: {},
        });
        const user2Page = await user2Context.newPage();
        await user2Page.goto('https://canary.inspeqt.ai/admin/signin');
        await user2Page.getByLabel('Email').fill('rohan2010lather@gmail.com');
        await user2Page.getByRole("textbox", { name: "Password" }).fill("12@auditor");
        await user2Page.getByRole('button', { name: 'Sign in' }).click();
        await user2Page.getByRole('link', { name: 'Inspection Detail Logo' }).click();
        await user1Page.bringToFront(); 
        const new_highlighted_count=await user1Page.locator('.css-fvj1qr').count();
        console.log(`the actual new highlited notifications are ${new_highlighted_count}`);
        await user1Context.close();
        await user2Context.close();
      });
      
  });
