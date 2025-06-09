import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { PORT } from './config/env.js';
import indexRoute from './routes/index.route.js';
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));



app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.use('/', indexRoute);


app.listen(PORT, () => {
  console.log(`Server is running........`);
});
