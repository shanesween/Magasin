const router = require("express").Router();
const { Product, Review } = require("../db/models");
const { checkAdmin } = require("./middleware");
module.exports = router;

//route for all products
router.get("/", async (req, res, next) => {
  try {
    const products = await Product.findAll({
      order: [["id", "ASC"]]
    });
    // const test = [{title: "cheese", imageUrl: 'https://cdn4.vectorstock.com/i/1000x1000/26/83/coffee-bag-mock-up-black-half-side-view-vector-22532683.jpg', price: 33}, {title:"bob", imageUrl: 'https://cdn4.vectorstock.com/i/1000x1000/26/83/coffee-bag-mock-up-black-half-side-view-vector-22532683.jpg', price: 55}]
    res.json(products);
  } catch (err) {
    next(err);
  }
});

//route for single product
router.get("/:productId", async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.productId, {
      include: [{ model: Review }]
    });
    res.json(product);
  } catch (err) {
    next(err);
  }
});

router.put("/:productId", function(req, res, next) {
  console.log(req.body);
  let newProduct = req.body.productParams;
  Product.update(newProduct, {
    where: { id: req.params.productId },
    returning: true, // needed for affectedRows to be populated
    plain: true // makes sure that the returned instances are just plain objects
  })
    .then(function(rowsUpdated) {
      res.json(rowsUpdated);
    })
    .catch(next);
});

router.delete("/:productId", checkAdmin, async (req, res, next) => {
  Product.destroy({
    where: {
      id: req.params.userId
    }
  })
    .then(() => res.sendStatus(204))
    .catch(err => next(err));
});
