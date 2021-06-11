const Router = require("koa-router");

const router = new Router({prefix: "/user"});
const { getUser, getImgs } = require('../controller/userController.js');

router.get("/:num", getUser);
router.get("/img/:num", getImgs);

module.exports = router;
