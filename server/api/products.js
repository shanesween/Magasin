const router = require('express').Router()
const {Product, Review} = require('../db/models')
module.exports = router

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
