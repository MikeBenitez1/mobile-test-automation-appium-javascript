const SELECTORS = {
    android: {
        CounterPlusButton: '~counter plus button',
        AddToCartButton: '~Add To Cart button',
        CartButton: '~cart badge'
    },
    ios: {
        CounterPlusButton: '~AddPlus Icons',
        AddToCartButton: '~AddToCart',
        CartButton: '~Cart-tab-item'
    }
};

class ProductPage {
    get platform() {
        return driver.isAndroid ? 'android' : 'ios';
    }

    get CounterPlusButton() {
        return $(SELECTORS[this.platform].CounterPlusButton);
    }

    get AddToCartButton() {
        return $(SELECTORS[this.platform].AddToCartButton);
    }

    get cartButton() {
        return $(SELECTORS[this.platform].CartButton);
    }

    async clickAddToCartButtonNTimes(n) {
        for (let i = 1; i < n; i++) {
            await this.CounterPlusButton.click();
        }
        await this.AddToCartButton.click();
    }

    async clickCartButton() {
        return await this.cartButton.click();
    }
}

module.exports = new ProductPage();