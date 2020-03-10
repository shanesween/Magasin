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

//route for add product
router.post("/", async (req, res, next) => {
  try {
    const product = await Product.create(req.body);
    res.json(product);
  } catch (err) {
    next(err);
  }
});

router.put("/admin/:productId", function(req, res, next) {
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

router.delete("/admin/:productId", checkAdmin, async (req, res, next) => {
  Product.destroy({
    where: {
      id: req.params.userId
    }
  })
    .then(() => res.sendStatus(204))
    .catch(err => next(err));
});
