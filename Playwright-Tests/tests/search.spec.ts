import { test } from '@playwright/test';
import { HomePage } from '../pages/hompePage';
import { SearchResultsPage } from '../pages/searchPage';
import { ProductPage } from '../pages/productPage';

test('Apply Filter and check free shipping of a produt', async ({ page }, testInfo) => {
  testInfo.setTimeout(60000);

  const home = new HomePage(page);
  const searchResults = new SearchResultsPage(page);
  const product = new ProductPage(page);

  await home.goto();
  await home.searchFor('electronics');

  await searchResults.applyBrandFilter('SKMEI');
  await searchResults.setPriceRange('500', '5000');
  await searchResults.assertResultsFound();
  await searchResults.selectProductBySku('413630143_PK-1971603039');

  await product.closePopupIfVisible();
  await product.assertFreeShipping();
});
