const dotenv = require("dotenv");

// 将配置文件注入到process.env中
dotenv.config();

module.exports = {
  PORT
} = process.env;