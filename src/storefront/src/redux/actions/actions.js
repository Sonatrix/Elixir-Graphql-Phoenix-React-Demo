import axios from 'axios';
// const url = "http://localhost:5000/api/"
const url =
  process.env.NODE_ENV === 'production'
    ? '/api/'
    : 'http://localhost:5000/api/';

export function loadProducts() {
  return dispatch => {
    axios
      .get(`${url}products`)
      .then(res => {
        const products = res.data;
        dispatch({ type: 'LOAD_PRODUCTS', products });
      })
      .catch(err => {
        console.log(err);
      });
  };
}

export function getProduct(product_id) {
  return dispatch => {
    axios
      .get(`${url}product/${product_id}`)
      .then(res => {
        const product = res.data;
        dispatch({ type: 'VIEW_PRODUCT', product });
      })
      .catch(err => console.log(err));
  };
}
