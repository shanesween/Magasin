const router = require('express').Router()
const {Product, Review} = require('../db/models')
module.exports = router

//route for all products
router.get('/', async (req, res, next) => {
  try {
    const products = await Product.findAll()
    // const test = [{title: "cheese", imageUrl: 'https://cdn4.vectorstock.com/i/1000x1000/26/83/coffee-bag-mock-up-black-half-side-view-vector-22532683.jpg', price: 33}, {title:"bob", imageUrl: 'https://cdn4.vectorstock.com/i/1000x1000/26/83/coffee-bag-mock-up-black-half-side-view-vector-22532683.jpg', price: 55}]
    res.json(products)
  } catch (err) {
    next(err)
  }
})

//route for single product
router.get('/:productId', async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.productId, {
      include: [{model: Review}]
    })
    res.json(product)
  } catch (err) {
    next(err)
  }
})
