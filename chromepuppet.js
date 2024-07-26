const puppeteer = require("puppeteer-extra");
const StealthPlugin = require("puppeteer-extra-plugin-stealth");

puppeteer.use(StealthPlugin());

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
  });
  const page = await browser.newPage();

  //add __dirname
  await page.goto(__dirname + "/open.html");

  // page.waitForTimeout() is deprecated in latest module
  // await page.waitForTimeout(300000);
  // await browser.close();

  const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

  (async () => {
    await sleep(100000);
    await browser.close();
  })();
})();
