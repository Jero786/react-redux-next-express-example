// Resources
const API = 'cloud-api';

module.exports = (server) => {

	/**
	 * Response a awesome text.
	 */
	server.get(`/${API}`, (req, res) => {
			return res.send('I am a cloud API YEAH!!!');
	});
};
