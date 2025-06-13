const SELECTORS = {
    android: {
        CheckoutButton: '~Proceed To Checkout button'
    },
    ios: {
        CheckoutButton: '~ProceedToCheckout'
    }
};

class CartPage {
    get platform() {
        return driver.isAndroid ? 'android' : 'ios';
    }

    get CheckoutButton() {
        return $(SELECTORS[this.platform].CheckoutButton);
    }

    async clickCheckoutButton() {
        return await this.CheckoutButton.click();
    }
}

module.exports = new CartPage();
