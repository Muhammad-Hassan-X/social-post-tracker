import { chromium } from 'playwright';

// This is an async function because Playwright operations are asynchronous
async function runPlaywrightScript() {
    let browser; // Define browser outside the try block to access it in finally

    try {
        // --- 1. Launch the browser with specific options ---
        console.log('Launching browser...');
        browser = await chromium.launch({
            // headless: true -> Runs the browser in the background without a visible UI.
            // This is essential for running on a server and is generally faster.
            headless: false,

            // slowMo: 50 -> Slows down Playwright operations by 50 milliseconds.
            // This is incredibly useful for debugging, as it lets you see what's happening.
            // You should REMOVE this for production code.
            slowMo: 50,
        });


        // --- 2. Create a new context and page ---
        // A context is like a new browser profile (with its own cookies, etc.)
        const context = await browser.newContext({
            // Emulate a common desktop screen size
            viewport: { width: 1280, height: 800 },

            // Set a user agent to mimic a real browser, which helps avoid blocking
            userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36',

            // Set a default timeout for actions. If an action takes longer than this, it will fail.
            // This prevents your script from hanging indefinitely. (30 seconds)
            timeout: 30000
        });

        const page = await context.newPage();


        // --- 3. Navigate and interact with the page ---
        console.log('Navigating to example.com...');
        await page.goto('https://x.com/simplyutd/status/1868368437350940717?s=46');


        // --- 4. Perform your scraping actions ---
        console.log('Extracting page title...');
        const title = await page.title();
        console.log(`Success! The page title is: "${title}"`);

        // You could extract other data here
        // const heading = await page.locator('h1').innerText();
        // console.log(`The heading is: "${heading}"`);


    } catch (error) {
        // Log any errors that occur during the process
        console.error('An error occurred:', error);

    } finally {
        // --- 5. Ensure the browser is always closed ---
        // This is crucial to prevent leftover browser processes from running.
        if (browser) {
            console.log('Closing browser...');
            await browser.close();
        }
    }
}

// Run the script
runPlaywrightScript();
