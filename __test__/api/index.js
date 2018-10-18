// Libs
const express = require('express');
const apiServices = require('../../api');

// initialize different port of app
const PORT = 3001;

// local server instance to handler init/close
let server;

/**
 * Initialize custom Express server to isolate Express with NextJS
 * and only for testing propose.
 * @returns {*|Function}
 */
function init() {
	const app = express();

// initialize api
	apiServices(app);

	server = app.listen(PORT, (err) => {
		if (err) throw err;
	});
	return app;
}

/**
 * stop testing server.
 */
function close() {
	if (server) {
		server.close();
	}
}

module.exports = {
	init,
	close
};
