import { ElementHandle, Locator, Page } from 'playwright';
import * as googleSelectors from '../../selectors/google-selectors.json';

export default class GooglePage {
   constructor(page: Page) {
      this.page = page;
   }

   private page: Page;

   /* Getter for single element */
   public getSearchInput(): Locator {
      return this.page.locator(googleSelectors.seachInput);
   }

   /* Getter for list of elements */
   public getListOfItems() {
      return this.page.locator(googleSelectors.listOfElements);
   }
}
