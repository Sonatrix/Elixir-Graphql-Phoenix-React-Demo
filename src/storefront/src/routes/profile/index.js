import { h, Component } from 'preact';
import { connect } from 'preact-redux';
import Button from 'preact-material-components/Button';
import 'preact-material-components/Button/style.css';
import style from './style';

import { getProduct } from '../../redux/actions/actions';

const mapStateToProps = state => ({
  products: state,
});

class Profile extends Component {

	// gets called when this route is navigated to
	componentDidMount() {
		this.props.dispatch(getProduct(this.props.matches.user));
	}

	// Note: `user` comes from the URL, courtesy of our router
	render({ user }, { time, count }) {
		const {
	      products: {
	        product: { products, error, loading },
	      },
    	} = this.props;

    	 if (error) {
	      return <div>Error! {error.message}</div>;
	    }

	    if (loading) {
	      return <div>Loading...</div>;
	    }

		return (
			<div class={style.profile}>
				<h1>{products[0].name}</h1>
				<img src={products[0].external_images[0]} />
				<p>{products[0].description}.</p>
			</div>
		);
	}
}

export default connect(mapStateToProps)(Profile);