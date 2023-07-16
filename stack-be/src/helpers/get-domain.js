const getDomain = req => {
	const protocol = req.protocol;
	const host = req.get("host");
	const domainName = `${protocol}://${process.env.DB_HOST}:${process.env.PORT}`;
	return domainName;
};
module.exports = getDomain;
