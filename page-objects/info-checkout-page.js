const SELECTORS = {
    android: {
        fullNameInput: '~Full Name* input field',
        addressLine1Input: '~Address Line 1* input field',
        cityInput: '~City* input field',
        zipCodeInput: '~Zip Code* input field',
        countryInput: '~Country* input field',
        toPaymentButton: '~To Payment button'
    },
    ios: {
        fullNameInput: '//XCUIElementTypeTextField[@value="Rebecca Winter"]',
        addressLine1Input: '//XCUIElementTypeTextField[@value="Mandorley 112"]',
        cityInput: '//XCUIElementTypeTextField[@value="Truro"]',
        zipCodeInput: '//XCUIElementTypeTextField[@value="89750"]',
        countryInput: '//XCUIElementTypeTextField[@value="United Kingdom"]',
        toPaymentButton: '//XCUIElementTypeButton[@name="To Payment"]'
    }
};

class InfoCheckoutPage {
    get platform() {
        return driver.isAndroid ? 'android' : 'ios';
    }

    get fullNameInput() {
        return $(SELECTORS[this.platform].fullNameInput);
    }

    get addressLine1Input() {
        return $(SELECTORS[this.platform].addressLine1Input);
    }

    get cityInput() {
        return $(SELECTORS[this.platform].cityInput);
    }

    get zipCodeInput() {
        return $(SELECTORS[this.platform].zipCodeInput);
    }

    get countryInput() {
        return $(SELECTORS[this.platform].countryInput);
    }

    get toPaymentButton() {
        return $(SELECTORS[this.platform].toPaymentButton);
    }

    async fillCheckoutForm() {
        await this.fullNameInput.setValue('My Name');
        await this.addressLine1Input.setValue('Street 123');
        await this.cityInput.setValue('New York');
        await this.zipCodeInput.setValue('10001');
        await this.countryInput.setValue('United States');
    }

    async clickToPaymentButton() {
        await this.toPaymentButton.click();
    }
}

module.exports = new InfoCheckoutPage();
