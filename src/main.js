const { PORT } = require("./app/config.js");
const app = require("./app");

app.listen(PORT, () => {
  console.log(`服务已启动~端口：${PORT}`);
});
