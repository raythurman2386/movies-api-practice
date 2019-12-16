const movieRouter = require("express").Router();
const Stars = require("../../data/models/stars/stars.model");
const validateStars = require("../middleware/validateStars");

async function getAllStars(req, res) {
  try {
    const stars = await Stars.find();
    res.json(stars);
  } catch (err) {
    res.status(500).json(err);
  }
}

async function getStarsById(req, res) {
  try {
    const stars = await Stars.findBy({ id: req.params.id });
    res.json(stars[0]);
  } catch (error) {
    res.status(500).json(error);
  }
}

async function addNewStar(req, res) {
  try {
    const stars = await Stars.addStar(req.body);
    res.status(201).json(stars[0]);
  } catch (error) {
    res.status(500).json(error);
  }
}

async function updateStar(req, res) {
  try {
    const stars = await Stars.updateStar(req.params.id, req.body);
    res.json(stars[0]);
  } catch (error) {
    res.status(500).json(error);
  }
}

async function deleteStar(req, res) {
  try {
    const count = await Stars.deleteStar(req.params.id);
    res.json(count);
  } catch (error) {
    res.status(500).json(error);
  }
}

movieRouter
  .get("/", getAllStars)
  .get("/:id", getStarsById)
  .post("/", validateStars.validateNewStar, addNewStar)
  .put("/:id", validateStars.validateUpdateStar, updateStar)
  .delete("/:id", deleteStar);

module.exports = movieRouter;
