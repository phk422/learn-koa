const faker = require("faker/locale/zh_CN");

console.log(faker.name.findName());
console.log(faker.phone.phoneNumber());

console.log(faker.animal.dog());

console.log(faker.image.avatar());