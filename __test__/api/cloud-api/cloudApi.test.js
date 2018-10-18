// Libs
import {expect} from 'chai';

const request = require('supertest');

// Sources
const app = require('../index');

let server;

describe('cloud-ui', () => {

	beforeEach(() => {
			if (!server) {
				server = app.init();
			}
	});

	afterEach(() => {
		if (server) {
			app.close();
		}
	});

	test('should say hello', (done) => {
		request(server)
			.get('/cloud-api')
			.then((response) => {
				expect(response.status).to.equal(200);
				expect(response.text).to.equal('I am a cloud API YEAH!!!');
				done();
		});
	});
});
