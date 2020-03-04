'use strict';

const db = require('../server/db');
const {
  User,
  Product,
  Order,
  OrderItem,
  Review
} = require('../server/db/models');
const faker = require('faker/index');

//create products

const categories = ['coffee', 'tea', 'other'],
  randomCategory = () => categories[Math.floor(Math.random() * 3)];

let prodCount = 333;
const products = [];
while (prodCount) {
  products.push({
    title: faker.fake('{{commerce.productName}}'),
    description: faker.fake('{{lorem.sentence}}'),
    price: faker.fake('{{commerce.price}}'),
    stock: faker.fake('{{random.number}}'),
    // imageUrl: undefined,
    category: randomCategory(),
    origin: faker.fake('{{address.country}}')
  });
  --prodCount;
}

// create users
let userCount = 99;
const users = [];
while (userCount) {
  users.push({
    email: faker.fake('{{internet.email}}'),
    password: faker.fake('{{internet.password}}')
  });
  --userCount;
}

// create orders // random num items that ramdomly choose exist. order id
let orderCount = 44;
const orders = [];
while (orderCount) {
  orders.push({
    userId: Math.floor(Math.random() * users.length + 1),
    status: 'completed'
  });
  --orderCount;
}

let orderItems = [];
// create orderItems and populate orders
let singleOrderItems = [];
// set var to total number of orders
let populateOrders = orders.length;
// iterate through the number of orders
while (populateOrders) {
  // set the amount of items on current order
  let orderItemCount = Math.floor(Math.random() * 10) + 1;
  // push an order item into the singleOrderItems array and decrement orderItemsCount
  // let productsCopy = [...products];
  // let randomProductId = Math.floor(Math.random() * productsCopy.length + 1);

  while (orderItemCount) {
    singleOrderItems.push({
      productId: orderItems.length + 1,
      quantity: faker.fake('{{random.number}}'),
      price: faker.fake('{{commerce.price}}')
    });

    --orderItemCount;
  }
  let orderIdCounter = 1;
  singleOrderItems.forEach(orderItem => {
    orderItem.orderId = orderIdCounter;
    orderItems.push(orderItem);
    ++orderIdCounter;
  });
  // orderItems.push(singleOrderItems);
  singleOrderItems = [];
  --populateOrders;
}

// create reviews
let reviewCount = 22;
const reviews = [];
while (reviewCount) {
  reviews.push({
    text: faker.fake('{{lorem.paragraph}}'),
    rating: Math.floor(Math.random() * 5) + 1,
    userId: Math.floor(Math.random() * users.length + 1),
    productId: Math.floor(Math.random() * products.length + 1)
  });
  --reviewCount;
}

async function seed() {
  await db.sync({ force: true });
  console.log('db synced!');

  // seed users
  await Promise.all(users.map(user => User.create(user)));
  console.log(`seeded ${users.length} users`);

  // seed products
  await Promise.all(products.map(product => Product.create(product)));
  console.log(`seeded ${products.length} products`);

  // seed orders
  await Promise.all(orders.map(order => Order.create(order)));
  console.log(`seeded ${orders.length} orders`);

  // seed orderItems
  await Promise.all(orderItems.map(orderItem => OrderItem.create(orderItem)));
  console.log(`seeded ${orderItems.length} orderItems`);

  // seed reviews
  await Promise.all(reviews.map(review => Review.create(review)));
  console.log(`seeded ${reviews.length} reviews`);

  console.log(`seeded successfully`);
}

// function repeat(times) {

//   times && --times && repeat(func, times);
// }
// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...');
  try {
    await db.sync({ force: true });
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log('closing db connection');
    await db.close();
    console.log('db connection closed');
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
