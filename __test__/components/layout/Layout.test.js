import React from 'react';
import {expect} from 'chai';
import {render} from 'enzyme';
import Layout from 'components/Layout';

describe('Layout', () => {

  it('should exist', () => {
    expect((<Layout />)).to.exist;
  });

  it('should have the properly classnames', () => {
		const wrapper = render(<Layout><div /></Layout>);

    expect(wrapper.hasClass('wit-layout')).to.be.true;
  });

});
