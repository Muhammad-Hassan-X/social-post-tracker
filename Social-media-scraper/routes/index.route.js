import express from 'express';
// Assuming your mock data is in a file at the root level, adjust path if needed.
import mockData from '../sample.data.js'; 

const indexRoute = express.Router();

// --- Main route for the dashboard ---
indexRoute.get('/', (req, res) => {
    // This route now correctly renders 'dashboard.ejs' and provides 'currentPage'.
    res.render('dashboard', {
        data: mockData,
        currentPage: 'dashboard' // This tells the template which page we're on.
    });
});

// --- Route for platform-specific pages ---
indexRoute.get('/:platform', (req, res) => {
    const platform = req.params.platform.toLowerCase();

    // Check if it's a valid platform to avoid errors with favicon.ico requests etc.
    const validPlatforms = ['instagram', 'youtube', 'tiktok', 'x', 'users'];
    if (!validPlatforms.includes(platform)) {
        return res.status(404).send('Page not found');
    }
    
    // Filter the data based on the platform from the URL.
    const filteredData = mockData.filter(p => p.platform.toLowerCase() === platform);
    
    res.render('dashboard', {
        // Show filtered data. If no posts for that platform, 'data' will be an empty array.
        data: filteredData,
        currentPage: platform // Pass the current platform to highlight the sidebar link.
    });
});


// --- Route to handle the POST request from the "Fetch New Post" form ---
indexRoute.post('/fetch', (req, res) => {
    const { postUrl } = req.body;
    console.log(`URL Submitted for scraping: ${postUrl}`);
    
    // --- SCRAPER LOGIC GOES HERE ---
    // 1. Call your scraper function with postUrl.
    // 2. Wait for the data to be returned.
    // 3. Save the data to your database.
    
    // Redirect back to the homepage to see the updated list.
    res.redirect('/');
});


// --- Route to handle the GET request from the "Search Posts" form ---
indexRoute.get('/search', (req, res) => {
    const { query } = req.query;
    console.log(`Search query received: ${query}`);

    // --- SEARCH LOGIC GOES HERE ---
    // 1. Query your database for posts matching the username or link.
    // 2. Render the 'main' template with the search results.

    // For now, just redirecting to the homepage.
    res.redirect('/');
});



export default indexRoute;
