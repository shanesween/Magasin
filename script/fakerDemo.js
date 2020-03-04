const faker = require('faker/index');

//create products

const catagories = ['coffee', 'tea', 'other'],
  randomCatagory = () => catagories[Math.floor(Math.random() * 3)];

let prodCount = 111;
const products = [];
while (prodCount) {
  products.push({
    title: faker.fake('{{commerce.productName}}'),
    description: faker.fake('{{lorem.sentence}}'),
    price: faker.fake('{{commerce.price}}'),
    stock: faker.fake('{{random.number}}'),
    // imageUrl: undefined,
    category: randomCatagory(),
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

// create reviews
let reviewCount = 22;
const reviews = [];
while (reviewCount) {
  reviews.push({
    text: faker.fake('{{lorem.paragraph}}'),
    rating: Math.floor(Math.random() * 5),
    userId: Math.floor(Math.random() * users.length + 1),
    productId: Math.floor(Math.random() * products.length + 1)
  });
  --reviewCount;
}

console.log(reviews);
