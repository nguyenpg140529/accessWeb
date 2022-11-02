const fs = require('fs');
const puppeteer = require('puppeteer');
const random_name = require('node-random-name');
const mailJs = require('@cemalgnlts/mailjs');
fs.readFile('addmember-telegram-master/data/user/channel.json', (err, data) => {
    if (err) console.log(err);
    let user = JSON.parse(data);
    for(let i = 0; i< user.length; i++){
    (async () => {
        const mailJsObj = new mailJs();
        const jsonObj = await mailJsObj.createOneAccount();
        const mailUserName = await jsonObj.data.username;
        const Name = (random_name({ random: Math.random, female: true }) + " " + random_name({ last: true }));
        const userName = await user[i].username;
        const browser = await puppeteer.launch({
            headless: true,
            args: [
                '--start-maximized'
            ]
        });
        const page = await browser.newPage();
        await page.setViewport({ width: 1366, height: 768 });
        await page.goto('https://vrlps.co/j30pfkd/cp');
        await new Promise(function (resolve) { setTimeout(resolve, 3000) });
        const elementHandle = await page.$(
            'iframe[src="https://app.viral-loops.com/client/embedForm/embedForm.min.html"]',
        );
        const frame = await elementHandle.contentFrame();
        await frame.type('#firstname', Name);
        await frame.type('#lastname', `@${userName}`);
        await frame.type('#email', mailUserName);
        await frame.click('#participationSubmitNoReferrer');
        console.log(`ref: ${i + 1}`);
        await browser.close();
        await new Promise(function (resolve) { setTimeout(resolve, 2000) });

    })();
    }
});
