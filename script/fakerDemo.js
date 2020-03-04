const faker = require('faker/index')

// console.log(faker.fake("{{name.lastName}}"))

// let userCount = 111;
// const users = [];
// while (userCount) {
//   users.push({
//     email: faker.fake("{{internet.email}}"),
//     password: faker.fake("{{internet.password}}"),
//   })
//   --userCount
// }
// console.log(users)

const catagories = ['coffee', 'tea', 'other'],
  randomCatagory = () => catagories[Math.floor(Math.random() * 3)]
// console.log(randomCatagory())

let prodCount = 111
const products = []
while (prodCount) {
  products.push({
    title: faker.fake('{{commerce.productName}}'),
    description: faker.fake('{{lorem.sentence}}'),
    price: faker.fake('{{commerce.price}}'),
    stock: faker.fake('{{random.number}}'),
    imageUrl: faker.fake('{{random.image}}'),
    category: randomCatagory(),
    origin: faker.fake('{{address.country}}')
  })
  --prodCount
}
console.log(products)
