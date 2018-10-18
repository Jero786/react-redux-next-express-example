// Libs
const express = require('express');
const next = require('next');
const {parse} = require('url');

// Resources
const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();
const getRoutes = require('./routes');
const apiServices = require('./api');

const routes = getRoutes();

app.prepare()

	.then(() => {
		// initialize express for custom rest api call
		// and custom routes
		const server = express();

		// initialize api
		apiServices(server);

		server.get('*', (req, res) => {
			const parsedUrl = parse(req.url, true);
			const {pathname, query = {}} = parsedUrl;
			const route = routes[pathname];

			if (route) {
				return app.render(req, res, route.page, query);
			}
			return handle(req, res);
		});

		server.listen(port, (err) => {
			if (err) throw err;
		})
	});

module.exports = app;
