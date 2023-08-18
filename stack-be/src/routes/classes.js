var express = require("express");
var jwt = require("jsonwebtoken");
var immer = require("immer");
var path = require("path");
const fs = require("fs");
var uploadImage = require("@helpers/upload-image");
const query = require("@helpers/get-mysql-query");
var checkAuthorization = require("@helpers/check-authorization");
var getDomain = require("@helpers/get-domain");
var UsersModel = require("@models/users");
var router = express.Router();
router.get("/list", async (req, res) => {
	const valid = await checkAuthorization(req);
	if (valid) {
		const sqlGetList = "select id , ten_lop from lop_hoc";
		query(sqlGetList, (errGetList, dataResult) => {
			if (dataResult) {
				res.status(200).json({ status: true, items: dataResult });
			} else {
				res.status(200).json({ status: false });
			}
		});
	} else {
		res.status(200).json({ status: false, message: "Invalid token" });
	}
});
module.exports = router;
