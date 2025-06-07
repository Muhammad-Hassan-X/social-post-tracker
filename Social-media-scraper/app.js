import express from 'express';

const app = express();
const PORT = 3000;


app.use(express.json());


app.get('/', (req, res) => {
  res.send('Hello, Express with ES6!');
});


app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
