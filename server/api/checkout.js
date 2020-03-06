const router = require("express").Router();
const { Product, Order, User, OrderItem } = require("../db/models");
const stripe = require("stripe")("sk_test_rxtsARxWfn5RXhJGnCNLdzgB");
const { uuid } = require("uuidv4");
const cors = require("cors");

router.use(cors());
module.exports = router;

router.post("/", async (req, res, next) => {
  //   console.log("Request:", req.body.token.total);
  let error;
  let status;
  try {
    const { token } = req.body;
    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id
    });
    const idempotencyKey = uuid();
    const charge = await stripe.charges.create(
      {
        amount: token.total * 100,
        currency: "usd",
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
            postal_code: token.card.address_zip
          }
        }
      },
      {
        idempotencyKey
      }
    );
    // console.log("Charge:", { charge });
    status = "success";
    req.hi = "hi";
    console.log("end of checkout route");
    next();
  } catch (error) {
    console.error("Error:", error);
    status = "failure";
  }
  res.json({ error, status });
});

router.post("/", async (req, res, next) => {
  console.log("beginning of new checkout route");
  console.log(req.hi);
});
