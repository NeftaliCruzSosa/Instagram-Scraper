const jsonData = require('./config')
const puppeteer = require("puppeteer");
const download = require('image-downloader');

const user = jsonData.user;
const pass = jsonData.pass;
const profile = jsonData.profile;

(async () => {
  const browser = await puppeteer.launch({ headless: false });

  const page = await browser.newPage();
  await page.setViewport({
    width: 1200,
    height: 800,
  });

  await page.goto("https://google.com/");
  await page.goto("https://www.instagram.com/");
  await page.waitForSelector(".bIiDR");
  await page.click(".bIiDR");
  await page.waitForTimeout(1500);
  await page.waitForSelector('[name="username"]');
  await page.click('[name="username"]');
  await page.keyboard.type(user);
  await page.click('[name="password"]');
  await page.keyboard.type(pass);
  await page.waitForTimeout(1500);
  await page.click('[type="submit"]');
  await page.waitForSelector('[class="_acan _acap _acas"]');
  await page.click('[class="_acan _acap _acas"]');
  await page.waitForSelector("._a9_1");
  await page.waitForTimeout(1000);
  await page.click("._a9_1");
  await page.goto(`https://www.instagram.com/${profile}/`);

  await page.waitForSelector(".x5yr21d");

  const links = await autoScroll(page);
  await page.goto("https://memeculture69.tumblr.com/");
  const cleanURL = await removeDuplicates(links);
  downloadImages(cleanURL);
  await browser.close();

})();

const autoScroll = async (page) => {
  const b = await page.evaluate(async () => {
    const a = await new Promise((resolve) => {
      const tmpLinks = [];
      let totalHeight = 0;
      let distance = 800;
      let timer = setInterval(() => {
        const imgObjects = document.querySelectorAll("._aagv img");
        for (img of imgObjects) {
          tmpLinks.push(img.src);
        }
        let scrollHeight = document.body.scrollHeight;
        window.scrollBy({ top: distance, left: 0, behavior: "smooth" });
        totalHeight += distance;
        if (totalHeight >= scrollHeight) {
          clearInterval(timer);
          resolve(tmpLinks);
        }
      }, 1000);
    });
    return a;
  });
  return b;
};

function removeDuplicates(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j]) {
        array.splice(j, 1);
        j--;
      }
    }
  }
  return array;
}

async function downloadImages(array) {
  const options = {}
  for (let i = 0; i < array.length; i++){
    options.url = array[i];
    options.dest = `../../images/photo${i}.jpg`;
    download.image(options)
      .then(({ filename }) => {
        console.log('Saved to', filename);
      })
      .catch((err) => console.error(err));
  }
  return;
}
