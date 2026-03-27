import { Page, expect } from '@playwright/test';

export class CartPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async verifyProductInCart(productName: string) {
    const cartItem = this.page.locator('.cart_item .inventory_item_name');
    await expect(cartItem).toHaveText(productName);
  }

  async checkout() {
    await this.page.click('#checkout');
  }
}