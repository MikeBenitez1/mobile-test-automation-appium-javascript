const { Given, When, Then } = require('@wdio/cucumber-framework');
const LoginPage = require('../../page-objects/login-page');
const ProductsPage = require('../../page-objects/products-page');
const ProductPage = require('../../page-objects/product-page');
const CartPage = require('../../page-objects/cart.page');
const InfoCheckoutPage = require('../../page-objects/info-checkout-page');
const paymentCheckoutPage = require('../../page-objects/payment-checkout-case');

When('user clicks on the {string} button', async (buttonName) => {
    if (buttonName === 'first item') {
        await ProductsPage.clickFirstItem();    
    }
    if (buttonName === 'cart') {
        await ProductPage.clickCartButton();
    }
    if (buttonName === 'checkout') {
        await CartPage.clickCheckoutButton();
    }
    if (buttonName === 'to payment') {
        await InfoCheckoutPage.clickToPaymentButton();
    }
});

When('user adds {string} to the cart', async (itemsNumber) => {
    if (itemsNumber === '2 items') {
        await ProductPage.clickAddToCartButtonNTimes(2);
    }
});

When('user login with valid credentials', async () => {
    await LoginPage.login();
});

When('user fills the checkout form with valid data', async () => {
    await InfoCheckoutPage.fillCheckoutForm();
});

Then('user should see the {string} page', async (text) => {
    if (text === 'payment checkout') {
        await paymentCheckoutPage.EnterPaymentMethodTextIsDisplayed();
    }
});

Then('user should see the {string} button', async (buttonName) => {
   if (buttonName === 'review order') {
       await paymentCheckoutPage.ReviewOrderButtonIsDisplayed();
    }
});

