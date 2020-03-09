const router = require("express").Router();
const { Order, User } = require("../db/models");
const { checkAdmin } = require("./middleware");
module.exports = router;

//route for all orders
router.get("/", checkAdmin, async (req, res, next) => {
  try {
    const orders = await Order.findAll({
      order: [["updatedAt", "ASC"]]
    });
    res.json(orders);
  } catch (err) {
    next(err);
  }
});

//route for single order
router.get("/:orderId", checkAdmin, async (req, res, next) => {
  try {
    const order = await Order.findByPk(req.params.orderId, {
      include: [{ model: User }]
    });
    res.json(order);
  } catch (err) {
    next(err);
  }
});
