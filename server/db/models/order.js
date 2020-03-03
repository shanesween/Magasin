const Sequelize = require('sequelize')
const db = require('../db')
const orderItem = require('./orderItem')

const Order = db.define('order', {
  status: {
    type: Sequelize.ENUM('pending', 'completed'),
    defaultValue: 'pending'
  },
  total: {
    type: Sequelize.DECIMAL(10, 2),
    defaultValue: 0.0
  }
  // hooks: {
  //   afterUpdate: order => {
  //     order.total = 0
  //     const items = orderItem.findAll(order.id)
  //     order.total += items.forEach(item => item.price)
  //   }
  // }
})

module.exports = Order
