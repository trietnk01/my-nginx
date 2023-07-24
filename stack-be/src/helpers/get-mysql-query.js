const mysql = require("mysql");
const util = require("util");
var conn = mysql.createConnection({
	host: process.env.NODE_ENV === "development" ? "localhost" : "host.docker.internal",
	user: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_DATABASE_NAME,
	port: process.env.DB_PORT
});
const query = util.promisify(conn.query).bind(conn);
module.exports = query;
