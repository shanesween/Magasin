const { User, OrderItem, Product, Session } = require("../db/models");

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

const loggedIn = async (req, res, next) => {
  if (!req.session.user) {
    console.log("req.session.id", req.session.id);
    let user = await User.create({
      googleId: req.session.id
    });
    console.log("user", user);
    req.session.user = user;
    next();
  } else {
    // let user = await User.findByPk(req.user.id)
    // user.googleId = req.session.id
    // await user.save()
    next();
  }
};

// const stockCheck = async (req, res, next) => {
//   const { token } = req.body;
//   let orderItems = await OrderItem.findAll({
//     where: { orderId: token.cartId }
//   });

//   let productsArray = orderItems.filter(async orderItem => {
//     let productFound = await Product.findByPk(orderItem.productId);
//     // productFound
//     if (Number(orderItem.quantity) > Number(productFound.stock)) {
//       return productFound.id;
//     }
//   });
//   console.log("productsArray", productsArray);
//   if (productsArray.length) {
//     res.sendStatus(400);
//   } else {
//     next();
//   }
// };

module.exports = { checkAdmin, loggedIn };
