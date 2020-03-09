const router = require('express').Router();
const { Product, Order, User, OrderItem } = require('../db/models');
const stripe = require('stripe')('sk_test_rxtsARxWfn5RXhJGnCNLdzgB');
const { uuid } = require('uuidv4');
const cors = require('cors');

router.use(cors());
module.exports = router;

router.post('/', async (req, res) => {
  console.log('Request:', req.body);
  let error;
  let status;
  try {
    const { cartObj, token } = req.body;
    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    });
    const idempotencyKey = uuid();
    const charge = await stripe.charges.create(
      {
        amount: 137550 * 100,
        currency: 'usd',
        customer: customer.id,
        receipt_email: token.email,
        description: `Purchased`,
        shipping: {
          name: token.card.name,
          address: {
            line1: token.card.address_line1,
            line2: token.card.address_line2,
            city: token.card.address_city,
            country: token.card.address_country,
            postal_code: token.card.address_zip,
          },
        },
      },
      {
        idempotencyKey,
      }
    );
    console.log('Charge:', { charge });
    status = 'success';
  } catch (error) {
    console.error('Error:', error);
    status = 'failure';
  }
  // next();
  res.json({ error, status });
});

// router.post("/", async (req, res, next) => {});
