const Sequelize = require('sequelize')
const db = require('../db')

const Product = db.define('product', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  stock: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue:
      'https://cdn4.vectorstock.com/i/1000x1000/26/83/coffee-bag-mock-up-black-half-side-view-vector-22532683.jpg',
    validate: {
      isUrl: true
    }
  },
  category: {
    type: Sequelize.ENUM('coffee', 'tea', 'other'),
    allowNull: false
  },
  origin: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = Product
