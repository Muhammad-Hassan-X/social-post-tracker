// Import necessary core modules and libraries
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// Import your configuration and root router
import { PORT } from './config/env.js';
import indexRoute from './routes/index.route.js';

// --- INITIAL SETUP ---
const app = express();
// This creates a reliable __dirname equivalent in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// --- MIDDLEWARE SETUP ---
// Parse incoming JSON and URL-encoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Correctly serve static files (CSS, images, client-side JS) from a 'public' directory
// This is more secure than serving the 'views' folder.
app.use(express.static(path.join(__dirname, 'public')));


// --- VIEW ENGINE SETUP ---
// Set EJS as the template engine
app.set('view engine', 'ejs');
// Tell Express where to find the view files, using a reliable path
app.set('views', path.join(__dirname, 'views'));


// --- ROUTING ---
// Remove the app.get('/') from here.
// Use the imported router file to handle all application routes.
// This keeps your app.js clean and all route logic in one place.
app.use('/', indexRoute);


// --- SERVER INITIALIZATION ---
app.listen(PORT, () => {
  console.log(`Server is running........`);
});
