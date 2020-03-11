const { User, Order, OrderItem, Product, Session } = require("../db/models");

const checkAdmin = async (req, res, next) => {
  if (!req.session.passport) {
    res.sendStatus(403);
  } else {
    const user = await User.findByPk(req.session.passport.user);
    if (user.isAdmin) {
      next();
    } else {
      res.sendStatus(403);
    }
  }
};

// const loggedIn = async (req, res, next) => {
//   if (!req.user) {
//     if (!req.session.cart) {
//       let order = await Order.create();
//       req.session.cartId = order.id;
//     }
//     next();
//   } else {
//     // let user = await User.findByPk(req.user.id)
//     // user.googleId = req.session.id
//     // await user.save()
//     next();
//   }
// };

const stockCheck = async (req, res, next) => {
  const { token } = req.body;
  let orderItems = await OrderItem.findAll({
    where: { orderId: token.cartId }
  });
  let productsArray = [];
  orderItems.forEach(async orderItem => {
    let productFound = await Product.findByPk(orderItem.productId);
    // productFound
    console.log("stock", productFound.stock, "quantity", orderItem.quantity);
    if (Number(productFound.stock) < Number(orderItem.quantity)) {
      productsArray.push(productFound.id);
    }
  });
  // console.log(productsArray.length);
  if (productsArray.length) {
    let status = "failure";
    res.json({ status });
  } else {
    next();
  }
};

module.exports = { checkAdmin, stockCheck };
