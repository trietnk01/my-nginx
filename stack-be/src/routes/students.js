var express = require("express");
var jwt = require("jsonwebtoken");
var immer = require("immer");
var path = require("path");
const fs = require("fs");
var uploadImage = require("@helpers/upload-image");
const query = require("@helpers/get-mysql-query");
var checkAuthorization = require("@helpers/check-authorization");
var getDomain = require("@helpers/get-domain");
var StudentsModel = require("@models/students");
var router = express.Router();

router.get("/list", async (req, res) => {
	const valid = await checkAuthorization(req);
	if (valid) {
		const sqlGetList = "SELECT hs.id,hs.code ,hs.ho_ten , hs.nam_hoc , th.name as ten_truong , lh.ten_lop   FROM hoc_sinh hs inner join lop_hoc lh on hs.lop_hoc_id = lh.id   join truong_hoc th on lh.truong_hoc_id = th.id ";
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
router.get("/show/:id", async (req, res) => {
	const valid = await checkAuthorization(req);
	if (valid) {
		const item = Object.assign({}, req.params);
		const id = item.id ? parseInt(item.id) : 0;
		const sql = "SELECT id , code , ho_ten , nam_hoc , avatar , lop_hoc_id  FROM hoc_sinh WHERE id = ?";
		query(sql, [id], (err, dataResult) => {
			if (dataResult && dataResult.length > 0) {
				res.status(200).json({ status: true, item: dataResult[0] });
			} else {
				res.status(200).json({ status: false });
			}
		});
	} else {
		res.status(200).json({ status: false, message: "Invalid token" });
	}
});
router.post("/create", uploadImage.single("avatar"), async (req, res) => {
	const valid = await checkAuthorization(req);
	if (valid) {
		let item = Object.assign({}, req.body);
		if (req.file && req.file.originalname) {
			item.avatar = req.file.originalname;
		}
		StudentsModel.create(item)
			.then(dataResult => {
				if (parseInt(dataResult.affectedRows) > 0) {
					res.status(200).json({ status: true, insert_id: dataResult.insertId });
				} else {
					res.status(200).json({ status: false });
				}
			})
			.catch(() => {
				res.status(200).json({ status: false });
			});
	} else {
		res.status(200).json({ status: false, message: "Invalid token" });
	}
});
router.post("/update/:id", uploadImage.single("avatar"), async (req, res) => {
	const valid = await checkAuthorization(req);
	if (valid) {
		let item = Object.assign({}, req.body);
		if (req.params.id) {
			item.id = parseInt(req.params.id);
		}
		if (req.file && req.file.originalname) {
			item.avatar = req.file.originalname;
		}
		const sql = "SELECT avatar FROM hoc_sinh WHERE id = ?";
		query(sql, [item.id])
			.then(dataSelected => {
				if (dataSelected && dataSelected.length > 0) {
					const oldAvatar = dataSelected[0].avatar ? dataSelected[0].avatar : null;
					StudentsModel.update(item)
						.then(() => {
							if (req.body.removed_avatar && req.body.removed_avatar === "true" && oldAvatar) {
								const avatarPath = path.join(__IMAGES, oldAvatar);
								if (fs.existsSync(avatarPath)) {
									fs.unlink(avatarPath, err => {
										if (!err) {
											res.status(200).json({ status: true });
										} else {
											res.status(200).json({ status: false, message: "Remove avatar failure" });
										}
									});
								} else {
									res.status(200).json({ status: false, message: "File does not exists" });
								}
							} else {
								res.status(200).json({ status: true });
							}
						})
						.catch(() => {
							res.status(200).json({ status: false });
						});
				}
			})
			.catch(() => {
				res.status(200).json({ status: false, message: "User detail shows failure" });
			});
	} else {
		res.status(200).json({ status: false, message: "Invalid token" });
	}
});
router.delete("/delete/:id", async (req, res) => {
	const valid = await checkAuthorization(req);
	if (valid) {
		id = req.params.id ? parseInt(req.params.id) : 0;
		const sql = "delete from students where id = ?";
		query(sql, [id], (err, dataResult) => {
			if (dataResult.affectedRows) {
				res.status(200).json({ status: true });
			} else {
				res.status(200).json({ status: false });
			}
		});
	} else {
		res.status(200).json({ status: false, message: "Invalid token" });
	}
});
module.exports = router;
