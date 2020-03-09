const router = require("express").Router();
const { Product, Order, User, OrderItem } = require("../db/models");
const { loggedIn } = require("../api/middleware");
module.exports = router;

router.get("/", async (req, res, next) => {
  // console.log(req.session.user);
  try {
    let userCart;
    if (req.user) {
      userCart = await Order.findOne({
        where: { userId: req.user.id, status: "pending" },
        include: { model: Product, order: [["id", "ASC"]] }
      });
      if (req.session.cartId) {
        let items = await OrderItem.findAll({
          where: { orderId: req.session.cartId }
        });
        // console.log("items on logged out user", items);
        items.map(async item => {
          try {
            return await OrderItem.create({
              orderId: userCart.id,
              productId: item.dataValues.productId,
              quantity: item.dataValues.quantity
            });
          } catch (err) {
            console.log(err);
          }
        });
      }
      userCart = await Order.findOne({
        where: { userId: req.user.id, status: "pending" },
        include: { model: Product, order: [["id", "ASC"]] }
      });
    } else {
      userCart = await Order.findByPk(req.session.cartId, {
        where: { status: "pending" },
        include: { model: Product, order: [["id", "ASC"]] }
      });
    }
    if (userCart) {
      res.json(userCart);
    } else {
      res.json({});
    }
  } catch (err) {
    next(err);
  }
});

router.put("/addItem", async (req, res, next) => {
  try {
    let userCart;
    if (!req.user) {
      if (!req.session.cartId) {
        userCart = await Order.create();
        req.session.cartId = userCart.id;
        // console.log("usercart", userCart);
      } else {
        userCart = await Order.findByPk(req.session.cartId, {
          where: { status: "pending" }
        });
      }
    } else {
      userCart = await Order.findOne({
        where: { userId: req.user.id, status: "pending" }
      });
      if (!userCart) {
        userCart = await Order.create({
          userId: req.user.id
        });
      }
      if (req.session.cartId) {
        let items = await OrderItem.findAll({
          where: { orderId: req.session.cartId }
        });
        // console.log("items on logged out user", items);
        items.map(async item => {
          try {
            return await OrderItem.create({
              orderId: userCart.id,
              productId: item.dataValues.productId,
              quantity: item.dataValues.quantity
            });
          } catch (err) {
            console.log(err);
          }
        });
      }
    }
    req.cartId = userCart.id;
    next();
  } catch (err) {
    next(err);
  }
});

router.put("/addItem", async (req, res, next) => {
  try {
    //adding to cart now
    let cartId = req.cartId;
    const product = await Product.findByPk(req.body.productId);
    const orderItem = await OrderItem.findOne({
      where: { productId: product.id, orderId: cartId }
    });
    if (orderItem) {
      req.body.quantity
        ? (orderItem.quantity = req.body.quantity)
        : orderItem.quantity++;
      await orderItem.save();
    } else {
      await OrderItem.create({
        productId: product.id,
        orderId: cartId,
        quantity: req.body.quantity ? req.body.quantity : 1
      });
    }
    let updatedCart = await Order.findByPk(cartId, {
      include: {
        model: Product,
        order: [["id", "ASC"]]
      }
    });
    res.json(updatedCart);
  } catch (err) {
    next(err);
  }
});

router.put("/removeItem", async (req, res, next) => {
  try {
    // console.log("in Route");
    let userCart = await Order.findOne({
      where: { userId: req.session.user.id, status: "pending" }
    });
    const orderItem = await OrderItem.findOne({
      where: { orderId: userCart.id, productId: req.body.productId }
    });
    await orderItem.destroy();
    let updatedCart = await Order.findByPk(userCart.id, {
      include: { model: Product, order: [["id", "ASC"]] }
    });

    res.json(updatedCart);
  } catch (err) {
    next(err);
  }
});
