const router = require("express").Router();
const { Product, Order, User, OrderItem } = require("../db/models");
const { loggedIn } = require("../api/middleware");
module.exports = router;

router.get("/", async (req, res, next) => {
  // console.log(req.session);
  try {
    let userCart;
    if (!req.user) {
      if (!req.session.cartId) {
        userCart = await Order.create();
        req.session.cartId = userCart.id;
        await req.session.save();
      } else {
        userCart = await Order.findByPk(req.session.cartId, {
          where: { status: "pending" },
          include: { model: Product }
        });
      }
    } else {
      userCart = await Order.findOne({
        where: { userId: req.user.id, status: "pending" },
        include: { model: Product }
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
        let newItems = items.map(item => {
          return {
            orderId: userCart.id,
            productId: item.dataValues.productId,
            quantity: item.dataValues.quantity
          };
        });
        await OrderItem.bulkCreate(newItems);
        // console.log("usercart", userCart);
      }
      userCart = await Order.findOne({
        where: { userId: req.user.id, status: "pending" },
        include: { model: Product }
      });
      req.session.cartId = null;
      await req.session.save();
    }
    res.json(userCart);
  } catch (err) {
    next(err);
  }
});

router.put("/addItem", async (req, res, next) => {
  try {
    //adding to cart now
    let cartId;
    if (req.user) {
      let cart = await Order.findOne({
        where: { userId: req.user.id }
      });
      cartId = cart.id;
    } else if (req.session.cartId) {
      cartId = req.session.cartId;
    } else {
      let userCart = await Order.create();
      cartId = userCart.id;
      req.session.cartId = userCart.id;
      await req.session.save();
    }
    // let cartId = req.cartId;
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
    const { orderItem } = req.body;
    const orderItemToDestroy = await OrderItem.findOne({
      where: { orderId: orderItem.orderId, productId: orderItem.productId }
    });
    await orderItemToDestroy.destroy();
    let updatedCart = await Order.findByPk(orderItem.orderId, {
      include: { model: Product, order: [["id", "ASC"]] }
    });

    res.json(updatedCart);
  } catch (err) {
    next(err);
  }
});
