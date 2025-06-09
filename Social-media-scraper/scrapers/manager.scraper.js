// This file decides which scraper to run based on the URL.

// Import your specialist scrapers from their dedicated folders.
import { scrapeInstagram } from './instagram/instagramScraper.js';
import { scrapeTikTok } from './tiktok/tiktokScraper.js';
// import { scrapeX } from './x/xScraper.js';
// import { scrapeYouTube } from './youtube/youtubeScraper.js';


export async function runMainScraper(url) {
    if (url.includes('instagram.com')) {
        console.log('Detected Instagram URL. Running Instagram scraper...');
        return await scrapeInstagram(url);

    } else if (url.includes('tiktok.com')) {
        console.log('Detected TikTok URL. Running TikTok scraper...');
        return await scrapeTikTok(url);

    } else if (url.includes('twitter.com') || url.includes('x.com')) {
        console.log('Detected X/Twitter URL. Running X scraper...');
        // return await scrapeX(url);
        return { message: "X scraper not implemented yet."}; 

    } else if (url.includes('youtube.com')) {
        console.log('Detected YouTube URL. Running YouTube scraper...');
        // return await scrapeYouTube(url);
        return { message: "YouTube scraper not implemented yet."}; // Placeholder

    } else {
        console.error('URL from unknown platform:', url);
        throw new Error('Unsupported platform.');
    }
}
