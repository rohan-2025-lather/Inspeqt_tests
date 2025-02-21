import { test, expect } from '@playwright/test';

test('Switch Between Users and Maintain Context', async ({ browser }) => {
  
  const user1Context = await browser.newContext({
    storageState: 'playwright/.auth/auditor.json',
  });
  const user1Page = await user1Context.newPage();
  await user1Page.goto('https://canary.inspeqt.ai/admin/dashboard');
  
  
  const user1PrevCount = await user1Page.locator('.css-ga13lk').innerText();
  console.log(`User 1 notification count: ${user1PrevCount}`);

  
  const user2Context = await browser.newContext({
    storageState: 'playwright/.auth/admin.json',
  });
  const user2Page = await user2Context.newPage();
  await user2Page.goto('https://canary.inspeqt.ai/admin/dashboard');
  
  
  await user2Page.goto('https://canary.inspeqt.ai/admin/jobs');
await user2Page.getByRole('row', { name: 'MKL-19X9O3G11F84 MK Logistics' }).locator('path').click();
// console.log(`Clicked on SVG successfully`);
  await user2Page.getByRole('button', { name: 'View Job' }).click();
  // await user2Page.getByRole('row', { name: 'MKL-19X9O3G11F84 MK Logistics' }).locator('path').click();
  
  await user2Page.locator('label span').first().click();
  await user2Page.getByRole('button', { name: 'Confirm' }).click();

  await user2Page.waitForTimeout(3000); 
  await user1Page.bringToFront(); 
  const user1NewCount = await user1Page.locator('.css-ga13lk').innerText();
  console.log(`User 1 new notification count: ${user1NewCount}`);


  await user1Context.close();
  // await user2Context.close();
});
