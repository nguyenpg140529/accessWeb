const fs = require('fs');
const puppeteer = require('puppeteer-extra')
const random_name = require('node-random-name');
const mailJs = require('@cemalgnlts/mailjs');
const randomUseragent = require('random-useragent');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());
const AdblockerPlugin = require('puppeteer-extra-plugin-adblocker')
puppeteer.use(AdblockerPlugin({ blockTrackers: true }));
puppeteer.launch({
    headless: true,
    args: ['--start-maximized', '--proxy-server=127.0.0.1:10005'],
    executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
}).then(async browser => {
    const mailJsObj = new mailJs();
    const jsonObj = await mailJsObj.createOneAccount();
    const mailUserName = await jsonObj.data.username;
    const Name = (random_name({ random: Math.random, female: true }) + "" + random_name({ last: true }));
    const random_User = randomUseragent.getRandom();
    const page = await browser.newPage();
    await page.setUserAgent(random_User);
    await page.setViewport({ width: 1366, height: 768 });
    await page.goto('https://form.waitlistpanda.com/go/wzWpBC8gAoDiC1LA19N1?ref=bOUCqRlFpM3ApxmRyXgu');
    await new Promise(function (resolve) { setTimeout(resolve, 2000) });
    await page.type('input[placeholder ="Type your email"]', mailUserName);
    await page.type('input[placeholder="@username"]', `@${Name}`);
    await page.click('#container > div.sc-7aac5ce1-1.bOYnzf > div.sc-7aac5ce1-2.IDtUl > div.sc-554f1795-0.cCbvjP > div.sc-bd2a64c9-0.gzSzEc > div:nth-child(4) > div > div.sc-35d848be-2.zqbVm > div > div.sc-673ad69e-2.dMSNVm > div');
    await page.click('#container > div.sc-7aac5ce1-1.bOYnzf > div.sc-7aac5ce1-2.IDtUl > div.sc-554f1795-0.cCbvjP > div.sc-bd2a64c9-0.gzSzEc > div.sc-ea90bab6-3.fMIZpx > button');
    await new Promise(function (resolve) { setTimeout(resolve, 18000) });
    console.log("Ref Success! ");
    await browser.close();

});