const Koa = require("koa");
const userRouter = require("./router/userRouter.js");
const dotenv = require("dotenv");

dotenv.config();

const app = new Koa();

app.use(userRouter.routes()).listen(process.env.PORT, () => console.log("服务器启动了~"));
