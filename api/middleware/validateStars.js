const Stars = require("../../data/models/stars/stars.model");

async function validateNewStar(req, res, next) {
  if (!!req.body.name) {
    return res
      .status(400)
      .json({ message: "Please provide name, director, and metascore please" });
  }

  const star = await Stars.findBy({ title: req.body.name });
  // star is an Array

  if (star.length > 0) {
    return res.status(400).json({ message: "The star already exists" });
  }

  next();
}

async function validateUpdateStar(req, res, next) {
  const star = await Stars.findBy({ name: req.body.name });

  if (star.length > 0) {
    res.status(400).json({ message: "Something went wrong" });
  }

  next();
}

module.exports = { validateNewStar, validateUpdateStar };
