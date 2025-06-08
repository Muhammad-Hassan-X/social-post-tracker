import express, { urlencoded } from 'express';
import { PORT } from './config/env.js';

const app = express();


app.use(express.json());
app.use(urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static('views'));

app.get('/', (req, res) => {
  res.render("dashboard");
});


app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
