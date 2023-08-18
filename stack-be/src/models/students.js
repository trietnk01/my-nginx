const query = require("@helpers/get-mysql-query");
module.exports = {
	create: item => {
		let colData = [];
		let questionData = [];
		let params = [];
		if (item.code) {
			colData.push("code");
			params.push(item.code);
			questionData.push("?");
		}
		if (item.ho_ten) {
			colData.push("ho_ten");
			params.push(item.ho_ten);
			questionData.push("?");
		}
		if (item.nam_hoc) {
			colData.push("nam_hoc");
			params.push(item.nam_hoc);
			questionData.push("?");
		}
		if (item.lop_hoc_id) {
			colData.push("lop_hoc_id");
			params.push(item.lop_hoc_id);
			questionData.push("?");
		}
		if (item.avatar) {
			colData.push("avatar");
			params.push(item.avatar);
			questionData.push("?");
		}
		const colTxt = colData.join(",");
		const questionTxt = questionData.join(",");
		const sql = "insert into hoc_sinh (" + colTxt + ") values (" + questionTxt + ")";
		return query(sql, params);
	},
	update: item => {
		let colData = [];
		let params = [];
		if (item.code) {
			colData.push("code = ?");
			params.push(item.code);
		}
		if (item.ho_ten) {
			colData.push("ho_ten = ?");
			params.push(item.ho_ten);
		}
		if (item.nam_hoc) {
			colData.push("nam_hoc = ?");
			params.push(item.nam_hoc);
		}
		if (item.lop_hoc_id) {
			colData.push("lop_hoc_id = ?");
			params.push(item.lop_hoc_id);
		}
		if (item.avatar) {
			colData.push("avatar = ?");
			params.push(item.avatar);
		}
		if (item.removed_avatar && item.removed_avatar === "true") {
			colData.push("avatar = null");
		}
		params.push(item.id);
		const colTxt = colData.join(" , ");
		const sql = "update hoc_sinh set " + colTxt + " where id = ?";
		return query(sql, params);
	}
};
