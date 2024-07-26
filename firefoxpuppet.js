const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    product: "firefox",
    defaultViewport: null, //set viewport
    protocol: 'webDriverBiDi' //set protocol
  });
  const page = await browser.newPage();

  try {
    //add file:// protocol, __dirname
    await page.goto("file://" + __dirname + "/open.html");
  } catch (error) {
    console.error('Navigation Timeout Error:', error.message);
  }

  // page.waitForTimeout() is deprecated in latest module
  // await page.waitForTimeout(300000);
  // await browser.close();

  const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

  (async () => {
    try {
      await sleep(100000);
      await browser.close();
    } catch (error) {
      console.log("error:", error);
    }
  })();
})();
