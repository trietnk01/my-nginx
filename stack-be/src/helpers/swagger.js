var express = require("express");
var swaggerJsdoc = require("swagger-jsdoc");
var swaggerUi = require("swagger-ui-express");
const options = {
	definition: {
		openapi: "3.0.0",
		info: {
			title: "REST API DOCS",
			version: "3.0"
		},
		components: {
			securitySchemas: {
				bearerAuth: {
					type: "http",
					scheme: "bearer",
					bearerFormat: "JWT"
				}
			}
		},
		security: [
			{
				bearerAuth: []
			}
		]
	},
	apis: ["./../routes/api.js"]
};
const swaggerSpec = swaggerJsdoc(options);
const swaggerDocs = (app, port) => {
	app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
	app.get("docs.json", (req, res) => {
		res.setHeader("Content-Type", "application/json");
		res.send(swaggerSpec);
	});
};
module.exports = swaggerDocs;
