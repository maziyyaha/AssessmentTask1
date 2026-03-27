import { Page, expect } from '@playwright/test';

export class CheckoutPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async fillCheckoutInfo(firstName: string, lastName: string, postalCode: string) {
    await this.page.fill('#first-name', firstName);
    await this.page.fill('#last-name', lastName);
    await this.page.fill('#postal-code', postalCode);
    await this.page.click('#continue');
  }

  async finishPurchase() {
    await this.page.click('#finish');
  }

  async verifyOrderSuccess() {
    await expect(this.page.locator('.complete-header')).toHaveText('Thank you for your order!');
  }
}