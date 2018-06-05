import { h, Component } from 'preact';
import { connect } from 'preact-redux';
import Card from 'preact-material-components/Card';
import 'preact-material-components/Card/style.css';
import 'preact-material-components/Button/style.css';
import style from './style';
import { loadProducts } from '../../redux/actions/actions';
import Item from '../../components/product/Item';
import LayoutGrid from 'preact-material-components/LayoutGrid';
import 'preact-material-components/LayoutGrid/style.css';

const mapStateToProps = state => ({
  products: state,
});

class Home extends Component {
	componentDidMount() {
	   console.log(this.props);
	   this.props.dispatch(loadProducts());
	}
	render() {
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
	    	<div class={style.home}>
	    	<LayoutGrid>
	    		<LayoutGrid.Inner>
	    	{products.map(
          (product) =>
            product && product.description && (
              <Item key={product._id} id={product._id} image={product.external_images[0]} name={product.name} price={product.price} description={product.description}/>
            )
        )}
        </LayoutGrid.Inner>
        </LayoutGrid>
        </div>
	   )
	}
}

export default connect(mapStateToProps)(Home);