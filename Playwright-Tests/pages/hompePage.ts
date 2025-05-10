import { Page } from '@playwright/test';

export class HomePage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('https://www.daraz.pk/#?', { timeout: 60000 });
  }

  async searchFor(term: string) {
    await this.page.fill('#q', term);
    await this.page.click('.search-box__button--1oH7');
  }
}
