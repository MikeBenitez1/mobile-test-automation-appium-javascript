require('dotenv').config();

const SELECTORS = {
    android: {
        usernameInput: '~Username input field',
        passwordInput: '~Password input field',
        loginButton: '~Login button'
    },
    ios: {
        usernameInput: '//XCUIElementTypeTextField',
        passwordInput: '//XCUIElementTypeSecureTextField',
        loginButton: '//XCUIElementTypeButton[@name="Login"]'
    }
};

class LoginPage {
    get platform() {
        return driver.isAndroid ? 'android' : 'ios';
    }

    get usernameInput() {
        return $(SELECTORS[this.platform].usernameInput);
    }

    get passwordInput() {
        return $(SELECTORS[this.platform].passwordInput);
    }

    get loginButton() {
        return $(SELECTORS[this.platform].loginButton);
    }

    async login() {
        const username = process.env.LOGIN_USERNAME;
        const password = process.env.LOGIN_PASSWORD;
        await this.usernameInput.setValue(username);
        await this.passwordInput.setValue(password);
        if (this.platform === 'ios') {
            await driver.hideKeyboard('pressKey', 'Return');
        }
        await this.loginButton.click();
    }

}

module.exports = new LoginPage();
