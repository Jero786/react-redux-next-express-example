// APIs
const cloudApi = require('./cloud-api/cloudApi');

/**
 * Initialize all api services.
 *
 * @param server
 */
module.exports = (server) => {
	cloudApi(server);
};
