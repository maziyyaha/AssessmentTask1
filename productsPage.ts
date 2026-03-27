import { Page, expect } from '@playwright/test';

export class ProductsPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async addFirstProductToCart() {
    const productName = await this.page.locator('.inventory_item_name').first().innerText();
    await this.page.locator('.inventory_item').first().locator('button').click();
    return productName;
  }

  async goToCart() {
    await this.page.click('.shopping_cart_link');
  }
}