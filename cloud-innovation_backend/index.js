const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());

const dataFilePath = path.join(__dirname, 'db.json');

const readJsonFile = (filePath) => {
  return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
};

app.get('/movies', (req, res) => {
  const data = readJsonFile(dataFilePath);
  let movies = data.movies;

  // Filter by rating
  if (req.query.rating) {
    const ratings = req.query.rating.split(',').map(Number); // Convert to array of numbers
    movies = movies.filter(movie => ratings.includes(movie.rating));
  }

  // Sort by year
  if (req.query.order) {
    const order = req.query.order.toLowerCase();
    if (order === 'asc' || order === 'desc') {
      movies = movies.sort((a, b) => {
        if (order === 'asc') {
          return parseInt(a.Year) - parseInt(b.Year);
        } else {
          return parseInt(b.Year) - parseInt(a.Year);
        }
      });
    }
  }

  res.json(movies);
});

app.get('/movie/:id', (req, res) => {
  const data = readJsonFile(dataFilePath);
  const movie = data.movies.find(m => m.id === parseInt(req.params.id, 10));
  if (movie) {
    res.json(movie);
  } else {
    res.status(404).json({ message: 'Movie not found' });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
