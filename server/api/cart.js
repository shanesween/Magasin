const router = require("express").Router();
const { Product, Order, User, OrderItem } = require("../db/models");
module.exports = router;

router.get("/:userId", async (req, res, next) => {
  try {
    const userCart = await Order.findOne({
      where: { userId: req.params.userId, status: "pending" },
      include: { model: Product }
    });
    if (userCart) {
      res.json(userCart);
    } else {
      res.json({});
    }
  } catch (err) {
    next(err);
  }
});

router.put("/addItem/:userId", async (req, res, next) => {
  try {
    let userCart = await Order.findOne({
      where: { userId: req.params.userId, status: "pending" }
    });
    if (userCart) {
      const product = await Product.findByPk(req.body.productId);
      await OrderItem.create({
        productId: product.id,
        orderId: userCart.id,
        quantity: req.body.quantity
      });
      let updatedCart = await Order.findByPk(userCart.id, {
        include: {
          model: Product
        }
      });
      res.json(updatedCart);
    } else {
      let newCart = await Order.create();
      let user = await User.findByPk(req.params.userId);
      await user.addOrder(newCart);
      const product = await Product.findByPk(req.body.productId);
      await OrderItem.create({
        productId: product.id,
        orderId: newCart.id,
        quantity: req.body.quantity
      });
      let updatedCart = await Order.findByPk(newCart.id, {
        include: {
          model: Product
        }
      });
      res.json(updatedCart);
    }
  } catch (err) {
    next(err);
  }
});

router.put("/removeItem/:orderId", async (req, res, next) => {
  try {
    console.log("in Route")
    const orderItem = await OrderItem.findOne({
      where: { orderId: req.params.orderId, productId: req.body.productId }
    });
    orderItem.destroy();
    let updatedCart = await Order.findByPk(req.params.orderId)

    res.json(updatedCart);
  } catch (err) {
    next(err);
  }
});
