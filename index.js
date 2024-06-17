import puppeteer from "puppeteer";


async function main() {
    const browser = await puppeteer.launch({});
    console.log("Buscando dados...");

    const page = await browser.newPage();
    await page.goto("https://www.tiktok.com/@criascript?lang=pt-BR");

    const elementFollowers = await page.waitForSelector("strong[data-e2e='followers-count']");
    const elementLikes = await page.waitForSelector("strong[data-e2e='likes-count']");
    const followingsElement = await page.waitForSelector("strong[data-e2e='following-count']");

    const followers = await elementFollowers.evaluate(element => element.textContent);
    const likes = await elementLikes.evaluate(element => element.textContent);
    const followings = await followingsElement.evaluate(element => element.textContent);

    console.log("\n");
    console.log(`Número de seguidores: ${followers}`);
    console.log(`Seguindo: ${followings}`);
    console.log(`Número de likes: ${likes}`);

    await browser.close();
}

main();