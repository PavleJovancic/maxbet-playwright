import { Locator, expect, Page, test } from '@playwright/test';



test.describe("Login @login", () => {
    // let login: Login,
    //     loginSteps: LoginSteps;

        
    // test.beforeEach(async ({page}) => {
    //     login = new Login(page);
    //     loginSteps = new LoginSteps(page, login);
    //     header = new Header(page);
    //     headerSteps = new HeaderSteps(page, header, login, loginSteps);
       
    //     await page.goto(urls.login);
    //     await loginSteps.login(loginData.email, loginData.password);
    // });

    test("Login to Maxbet", async ({page}) => {
        await page.goto("https://www.maxbet.rs/", {waitUntil:'networkidle'});
        expect(page).toHaveURL('https://www.maxbet.rs/home')
    });

});