import express from 'express';
import mockData from '../sample.data.js';


const router = express.Router();

// Main route to display the dashboard
router.get('/', (req, res) => {
    res.render('main', {
        data: mockData 
    });
});

// The platform-specific routes can also show filtered data in the future
router.get('/:platform', (req, res) => {
    const platform = req.params.platform;
    // Example: Filter data based on the route
    const filteredData = mockData.filter(p => p.platform.toLowerCase() === platform.toLowerCase());
    res.render('main', {
        data: filteredData.length > 0 ? filteredData : mockData // Show filtered or all
    });
});


// Route to handle the form submission
router.post('/fetch', (req, res) => {
    const { postUrl } = req.body;
    console.log(`URL Submitted for scraping: ${postUrl}`);
    
    // --- SCRAPER LOGIC GOES HERE ---
    // 1. Call your scraper function with postUrl.
    // 2. Wait for the data to be returned.
    // 3. Save the data to your database (Firebase/Sheets).
    
    // Redirect back to the homepage to see the updated list
    res.redirect('/');
});


export default router;
