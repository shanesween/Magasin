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
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const results = {};
    if (startIndex > 0) {
      results.previous = {
        page: page - 1,
        limit: limit
      };
    }
    if (endIndex < products.length) {
      results.next = {
        page: page + 1,
        limit: limit
      };
    }
    results.result = products.slice(startIndex, endIndex);
    res.json(results.result);
    // res.json(products);
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
router.post("/admin", checkAdmin, async (req, res, next) => {
  try {
    const product = await Product.create(req.body);
    res.json(product);
  } catch (err) {
    next(err);
  }
});

router.put("/admin/:productId", checkAdmin, async (req, res, next) => {
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
  await Product.destroy({
    where: {
      id: req.params.userId
    }
  })
    .then(() => res.sendStatus(204))
    .catch(err => next(err));
});

router.get("/filter/:filter", async (req, res, next) => {
  try {
    let products = await Product.findAll({
      where: { category: req.params.filter },
      order: [["id", "ASC"]]
    });
    res.json(products);
  } catch (err) {
    next(err);
  }
});
