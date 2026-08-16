import playwright from "playwright";

export default async function handler(req, res) {
  const browser = await playwright.chromium.launch({ headless: true });
  const page = await browser.newPage();

  await page.goto("https://gold.tanaka.co.jp/commodity/souba/index.php", {
    waitUntil: "networkidle"
  });

  const content = await page.content();
  await browser.close();

  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.status(200).send(content);
}
