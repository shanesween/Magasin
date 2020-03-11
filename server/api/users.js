const router = require('express').Router();
const { User, OrderItem, Order, Product, Review } = require('../db/models');
const { checkAdmin } = require('./middleware');
module.exports = router;
// checkAdmin,
router.get('/', checkAdmin, async (req, res, next) => {
  try {
    const users = await User.findAll({
      order: [['id', 'ASC']],
      attributes: ['id', 'email', 'isAdmin', 'address'],
    });
    res.json(users);
  } catch (err) {
    next(err);
  }
});
router.get('/admin/:userId', checkAdmin, async (req, res, next) => {
  try {
    const singleUser = await User.findByPk(req.params.userId, {
      include: [{ model: Review }, { model: Order }],
    });
    res.json(singleUser);
  } catch (err) {
    next(err);
  }
});

router.put('/admin/:userId', checkAdmin, async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.userId);
    const updatedUser = await user.update(req.body);
    res.json(updatedUser);
  } catch (err) {
    next(err);
  }
});

router.delete('/admin/:userId', checkAdmin, async (req, res, next) => {
  try {
    await User.destroy({
      where: {
        id: req.params.userId,
      },
    });
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

router.get('/orders', async (req, res, next) => {
  try {
    const orders = await Order.findAll({
      where: { userId: req.user.id, status: 'completed' },
      include: [{ model: Product }],
    });
    res.json(orders);
  } catch (err) {
    next(err);
  }
});

router.get('/orders/:orderId', async (req, res, next) => {
  try {
    const orders = await OrderItem.findAll({
      where: { orderId: req.params.orderId },
    });
    res.json(orders);
  } catch (err) {
    next(err);
  }
});

router.put('/profile', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.user.id);
    const updatedUser = await user.update(req.body.singleUserParams);
    res.json(updatedUser);
  } catch (err) {
    next(err);
  }
});

router.get('/profile', async (req, res, next) => {
  try {
    const singleUser = await User.findByPk(req.user.id, {
      include: [{ model: Review }, { model: Order }],
    });
    res.json(singleUser);
  } catch (err) {
    next(err);
  }
});
