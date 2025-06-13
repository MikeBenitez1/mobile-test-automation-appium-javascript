const SELECTORS = {
    android: {
        enterPaymentMethodText: 'android=new UiSelector().text("Enter a payment method")',
        reviewOrderButton: '~Review Order button'
    },
    ios: {
        enterPaymentMethodText: 'Enter a payment method',
        reviewOrderButton: '//XCUIElementTypeStaticText[@label="Review Order"]'
    }
};

class PaymentCheckoutPage {
    get platform() {
        return driver.isAndroid ? 'android' : 'ios';
    }

    get enterPaymentMethodText() {
        return $(SELECTORS[this.platform].enterPaymentMethodText);
    }

    get reviewOrderButton() {
        return $(SELECTORS[this.platform].reviewOrderButton);
    }

    async EnterPaymentMethodTextIsDisplayed() {
        await expect(this.enterPaymentMethodText).toBeDisplayed();
    }

    async ReviewOrderButtonIsDisplayed() {
        await expect(this.reviewOrderButton).toBeDisplayed();
    }
}

module.exports = new PaymentCheckoutPage();
