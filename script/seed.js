'use strict'

const db = require('../server/db')
const {User, Product, Order} = require('../server/db/models')
const faker = require('faker/index')

//create products

const catagories = ['coffee', 'tea', 'other'],
  randomCatagory = () => catagories[Math.floor(Math.random() * 3)]

let prodCount = 111
const products = []
while (prodCount) {
  products.push({
    title: faker.fake('{{commerce.productName}}'),
    description: faker.fake('{{lorem.sentence}}'),
    price: faker.fake('{{commerce.price}}'),
    stock: faker.fake('{{random.number}}'),
    imageUrl: undefined,
    category: randomCatagory(),
    origin: faker.fake('{{address.country}}')
  })
  --prodCount
}

// create users
let userCount = 99
const users = []
while (userCount) {
  users.push({
    email: faker.fake('{{internet.email}}'),
    password: faker.fake('{{internet.password}}')
  })
  --userCount
}

// create orders // random num items that ramdomly choose exist. order id
let orderCount = 44
const orders = []
while (orderCount) {
  orders.push({
    status: 'pending'
  })
  --orderCount
}

// create reviews
let reviewCount = 22
const reviews = []
while (reviewCount) {
  reviews.push({
    text: faker.fake('{{lorem.paragraph}}'),
    rating: Math.floor(Math.random() * 5)
  })
  --reviewCount
}

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  // seed users
  await Promise.all(users.map(user => User.create(user)))
  console.log(`seeded ${users.length} users`)

  // seed products
  await Promise.all(products.map(product => Product.create(product)))
  console.log(`seeded ${products.length} products`)

  // seed orders
  await Promise.all(
    orders.map(order => Order.create(order, {include: [Product]}))
  )
  console.log(`seeded ${orders.length} orders`)

  // seed reviews
  await Promise.all(reviews.map(review => User.create(review)))
  console.log(`seeded ${reviews.length} reviews`)

  console.log(`seeded successfully`)
}

// function repeat(times) {

//   times && --times && repeat(func, times);
// }
// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await db.sync({force: true})
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
