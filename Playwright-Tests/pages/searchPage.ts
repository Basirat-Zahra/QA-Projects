import { Page, expect } from '@playwright/test';

export class SearchResultsPage {
  constructor(private page: Page) {}

  async applyBrandFilter(brandName: string) {
    const brandCheckbox = this.page.locator(`label:has-text("${brandName}")`);
    await brandCheckbox.waitFor({ state: 'visible', timeout: 80000 });
    await brandCheckbox.scrollIntoViewIfNeeded();
    await brandCheckbox.click();
  }

  async setPriceRange(min: string, max: string) {
    await this.page.fill("input[placeholder='Min']", min);
    await this.page.fill("input[placeholder='Max']", max);
    await this.page.locator("button[class='ant-btn css-1bkhbmc app ant-btn-primary ant-btn-icon-only yUcnk']").click();
  }

  async assertResultsFound() {
    const resultText = await this.page.locator('span:has-text("items found")').first().innerText();
    const match = resultText.match(/(\d+)\s+items found/);
    const productCount = match ? parseInt(match[1]) : 0;
    expect(productCount).toBeGreaterThan(0);
  }

  async selectProductBySku(sku: string) {
    await this.page.locator(`.Bm3ON[data-sku-simple='${sku}']`).click();
  }
}
