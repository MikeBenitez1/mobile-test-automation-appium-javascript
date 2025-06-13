const SELECTORS = {
    android: {
        FirstItemButton: '-android uiautomator:new UiSelector().text("Sauce Labs Backpack")'
    },
    ios: {
        FirstItemButton: '~Sauce Lab Back Packs'
    }
};

class ProductsPage {
    get platform() {
        return driver.isAndroid ? 'android' : 'ios';
    }

    get firstItemButton() {
        return $(SELECTORS[this.platform].FirstItemButton);
    }

    async clickFirstItem() {
        return await this.firstItemButton.click();
    }
}

module.exports = new ProductsPage();
