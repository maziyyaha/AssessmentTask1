import { test } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { ProductsPage } from '../pages/productsPage';
import { CartPage } from '../pages/cartPage';
import { CheckoutPage } from '../pages/checkoutPage';

test('Swag Labs End-to-End Purchase Flow', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  // 1. Navigate to login page
  await loginPage.goto();

  // 2. Login
  await loginPage.login('standard_user', 'secret_sauce');

  // 3. Verify products page
  await loginPage.verifyProductsPage();

  // 4. Add first product to cart
  const productName = await productsPage.addFirstProductToCart();

  // 5. Go to cart & verify
  await productsPage.goToCart();
  await cartPage.verifyProductInCart(productName);

  // 6. Proceed to checkout
  await cartPage.checkout();

  // 7. Fill checkout info
  await checkoutPage.fillCheckoutInfo('Mzyyh', 'Test', '31000');

  // 8. Finalize purchase & verify success
  await checkoutPage.finishPurchase();
  await checkoutPage.verifyOrderSuccess();
});