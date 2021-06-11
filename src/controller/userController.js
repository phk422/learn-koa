const faker = require("faker");

class UserController {
  /**
   * 获取用户
   * @param {*} ctx 
   * @param {*} next 
   */
  getUser(ctx, next) {
    const users = []
    const { num } = ctx.request.params;
    for (let i = 0; i < num; i++) {
      users.push({
        username: faker.name.findName(),
        address: faker.address.city(),
        company: faker.company.companyName(),
        birthday: faker.date.past(),
        avatar: faker.image.avatar()
      })
    }
    ctx.body = users;
  }

  /**
   * 获取图片
   * @param {*} ctx 
   * @param {*} next 
   */
  getImgs(ctx, next) {
    const { num } = ctx.request.params;
    const avatars = [];
    for(let i = 0; i < num; i++) {
      avatars.push(faker.image.image())
    }
    ctx.body = avatars;
  }
}

module.exports = new UserController();
