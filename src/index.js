const Koa = require("koa");
const userRouter = require("./router/userRouter.js");

const app = new Koa();

app.use(userRouter.routes()).listen(3000, () => console.log("服务器启动了~"));
