const router = require('express').Router();
const { Product, Review } = require('../db/models');
const checkAdmin = require('./middleware');
module.exports = router;

//route for all products
router.put('/', async (req, res, next) => {
  try {
    console.log(req.body);
    const review = await Review.create(req.body.review);
    res.sendStatus(200);
  } catch (err) {
    next(err);
  }
});
