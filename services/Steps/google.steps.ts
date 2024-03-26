import { Page } from 'playwright';
import { delay } from '../../utils/utils';
import GooglePage from '../Pages/google.page';

export default class GooglePageSteps {
   constructor(page: Page, googlePage: GooglePage) {
      this.page = page;
      this.googlePage = googlePage;
   }

   private page: Page;

   private googlePage: GooglePage;

   /* 'Steps' are using Service class to get elements and over them call automated playwright functions */
   async searchOnGoogle(searchTestData: string) {
      await this.googlePage.getSearchInput().fill(searchTestData);
      await this.page.keyboard.press('Enter');
      await delay(2000);
   }
}
