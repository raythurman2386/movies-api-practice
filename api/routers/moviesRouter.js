const movieRouter = require("express").Router();
const Movies = require("../../data/models/movies/movies.model");

async function getAllMovie(req, res) {
  try {
    const movies = await Movies.find();
    res.json(movies);
  } catch (err) {
    res.status(500).json(err);
  }
}

async function getMovieById(req, res) {
  try {
    const movie = await Movies.findBy({ id: req.params.id });
    res.json(movie);
  } catch (error) {
    res.status(500).json(error);
  }
}

movieRouter.get("/movies", getAllMovie);

module.exports = movieRouter;
