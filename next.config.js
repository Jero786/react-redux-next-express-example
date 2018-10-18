const withSass = require('@zeit/next-sass');
const getRoutes = require('./routes');

module.exports = {
  // some configuration
  assetPrefix: process.env.NODE_ENV === 'production' ? '/{reponame}' : '',
  // another configuration
	exportPathMap: getRoutes
};

module.exports = withSass();
