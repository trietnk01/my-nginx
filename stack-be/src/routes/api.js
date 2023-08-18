/*
 *	@openapi
 *	/list:
 *	get:
 *		tag:
 *			- getList
 *				description: Responds if the app is up and running
 *				responses:
 *					200:
 *						description: App is up and running
 */
var express = require("express");
var router = express.Router();
router.use("/users", require("./users"));
router.use("/students", require("./students"));
router.use("/classes", require("./classes"));
module.exports = router;
