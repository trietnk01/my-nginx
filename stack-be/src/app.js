var http = require("http");
require("dotenv").config();
var express = require("express");
var cors = require("cors");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var bodyParser = require("body-parser");
require("module-alias/register");
global.__IMAGES = path.join(__dirname, "public/images");
global.__DOCUMENTS = path.join(__dirname, "public/documents");
var apiRoute = require("@routes/api");
var app = express();
app.use("/", express.static("public"));
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());
app.use("/api", apiRoute);

app.get("*", function (req, res) {
	res.sendFile("index.html", { root: path.join(__dirname, "public") });
});
var debug = require("debug")("bookstore:server");

/**
 * Get port from environment and store in Express.
 */
var port = 8000;
app.set("port", port);
var server = http.createServer(app);
/**
 * Create HTTP server.
 */

const { Server } = require("socket.io");
const io = new Server(server, {
	cors: { origin: "*" }
});
io.on("connection", socket => {
	socket.on("CLIENT_RETURN_MESSAGE", data => {
		socket.emit("SERVER_RETURN_MESSAGE", data);
	});
	socket.on("disconnect", () => {
		console.log("User disconnected = ", socket.id);
	});
});
/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on("error", onError);
server.on("listening", onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
	var port = parseInt(val, 10);

	if (isNaN(port)) {
		// named pipe
		return val;
	}

	if (port >= 0) {
		// port number
		return port;
	}

	return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
	if (error.syscall !== "listen") {
		throw error;
	}

	var bind = typeof port === "string" ? "Pipe " + port : "Port " + port;

	// handle specific listen errors with friendly messages
	switch (error.code) {
		case "EACCES":
			console.error(bind + " requires elevated privileges");
			process.exit(1);
			break;
		case "EADDRINUSE":
			console.error(bind + " is already in use");
			process.exit(1);
			break;
		default:
			throw error;
	}
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
	var addr = server.address();
	var bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
	debug("Listening on " + bind);
}
