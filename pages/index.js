// Libs
import './index.scss';
import React from 'react';
import {fetchTopEntries} from 'actions/home/homeActions';
import {connect} from 'react-redux';

// Components
import Layout from 'components/Layout';

export class HomeRedditView extends React.PureComponent {

	static async getInitialProps({isServer, store}) {
		await store.dispatch(fetchTopEntries());
		return {isServer}
	}

	render() {
		return (
  <div className="wit-home">
    <Layout title="WIT-UI">
      <div className="wit-home__sidebar">
						SIDEBAR WIT
      </div>
      <div className="wit-home__content">
						CONTENT
      </div>
    </Layout>
  </div>
		);
	}
}

HomeRedditView.propTypes = {};

const mapStateToProps = () => {
};
const mapDispatchToProps = () => {
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeRedditView);
