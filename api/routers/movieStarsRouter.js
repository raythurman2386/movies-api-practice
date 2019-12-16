const movieStarsRouter = require("express").Router();
const MovieStars = require("../../data/models/movie-stars/movies-stars.model");
const Movies = require("../../data/models/movies/movies.model");

async function addStarToMovie(req, res) {
  try {
    const movie = await MovieStars.addStarToMovie({
      movie_id: req.params.movie_id,
      stars_id: req.params.stars_id
    });
    const returnedMovie = await Movies.findBy({ id: req.params.movie_id });
    console.log(returnedMovie);
    res.status(201).json(returnedMovie[0]);
  } catch (error) {
    res.status(500).json(error);
  }
}

async function deleteStarToMovie(req, res) {
  try {
    const movie = await MovieStars.removeStarFromMovie(
      req.params.movie_id,
      req.params.stars_id
    );
    res.json(movie);
  } catch (error) {
    res.status(500).json(error);
  }
}

movieStarsRouter
  .post("/:movie_id/:stars_id", addStarToMovie)
  .delete("/:movie_id/:stars_id", deleteStarToMovie);

module.exports = movieStarsRouter;
