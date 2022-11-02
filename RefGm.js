const puppeteer = require('puppeteer');
const random_name = require('node-random-name');

(async () => {
    const Name = (random_name({ random: Math.random, female: true }) + " " + random_name({ last: true }));
    const mailName = random_name({last:true});
    const browser = await puppeteer.launch({
        headless: true,
        args: [
            '--start-maximized'
        ]
    });
    const page = await browser.newPage();
    await page.setViewport({ width: 1366, height: 768 });
    await page.goto('https://www.joingm.xyz//?ref=hrwb0b');
    await new Promise(function (resolve) { setTimeout(resolve, 2000) });
    await page.click('.text-buton');
    await new Promise(function (resolve) { setTimeout(resolve, 1000) });
    await page.type('#name', Name);
    await page.type('#email-2', `${mailName}@gmail.com`);
    await page.click('input[type="submit"]');
    await new Promise(function (resolve) { setTimeout(resolve, 1000) });
    console.log("ref success");
    await browser.close();
})();
