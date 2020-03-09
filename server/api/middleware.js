const { User, OrderItem, Product } = require("../db/models");

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

const userCheck = (req, res, next) => {
  if (Number(req.user.id) === Number(req.params.userId)) {
    next();
  } else {
    res.sendStatus(403);
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

module.exports = { checkAdmin, userCheck };
