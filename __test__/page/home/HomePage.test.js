// Libs
import React from 'react';
import {expect} from 'chai';
import {render} from 'enzyme';

// Components
import {HomeRedditView} from 'pages/index';

describe('HompePageHome', () => {

	it('should exist', () => {
		expect((<HomeRedditView />)).to.exist;
	});

	it('should have the properly main classnames', () => {
		const wrapper = render(<HomeRedditView />);

		expect(wrapper.hasClass('wit-home')).to.be.true;
	});

	it('should have the sidebar element', function () {
		const wrapper = render(<HomeRedditView />);

		expect(wrapper.find('.wit-home__sidebar')).to.not.null;
	});

	it('should have the content element', function () {
		const wrapper = render(<HomeRedditView />);

		expect(wrapper.find('.wit-home__content')).to.not.null;
	});
});
