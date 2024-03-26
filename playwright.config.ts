import { PlaywrightTestConfig } from '@playwright/test'
import * as envURLs from './environments.json'


const env = {
    dev: envURLs.dev,
    prod: envURLs.prod
}

export const config: PlaywrightTestConfig = {
    expect: {
        timeout: 2000
    },


    forbidOnly: !!process.env.CI,

    reporter: [['junit', { outputFile: 'reports/results-junit.xml' }], ['html', { outputFolder: 'reports/html/' }]],

    use: {
        viewport: {width:1920,height:1080},
        baseURL: env[process.env.ENV],
        screenshot: 'on',
        acceptDownloads: true,
        trace: 'on',
        headless: false,
        browserName: 'chromium'
        
    },

    grep: [new RegExp(process.env.TAGS)],
    retries: 0
};

export default config;