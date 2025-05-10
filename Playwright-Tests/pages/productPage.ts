import { Page, expect } from '@playwright/test';

export class ProductPage {
  constructor(private page: Page) {}

  async closePopupIfVisible() {
    const popupClose = this.page.locator('.sfo__close > .next-icon');
    if (await popupClose.isVisible({ timeout: 3000 }).catch(() => false)) {
      await popupClose.click();
    }
  }

  async assertFreeShipping() {
    const shippingText = this.page.getByText('FREE', { exact: true });
  }
}
