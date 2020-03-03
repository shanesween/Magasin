const Sequelize = require('sequelize')
const db = require('../db')
const product = require('./product')

const OrderItem = db.define('cartItem', {
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  price: {
    type: Sequelize.DECIMAL(10, 2),
    defaultValue: 0.0
  },
  hooks: {
    afterUpdate: orderItem => {
      const singleProduct = product.findByPk(orderItem.productId)
      OrderItem.price = this.quantity * singleProduct.price
    }
  }
})

module.exports = OrderItem
