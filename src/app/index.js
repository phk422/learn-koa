const Koa = require("koa");
const userRouter = require("../router/userRouter.js");

const app = new Koa();
app.use(userRouter.routes());

module.exports = app;
