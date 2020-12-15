export function fetchProducts() {
    return dispatch => {
      dispatch(fetchProductsBegin());
      return fetch("https://fakestoreapi.com/products")
        .then(handleErrors)
        .then(res => res.json())
        .then(json => {
          dispatch(fetchProductsSuccess(json.products));
          return json.products;
        })
        .catch(error => dispatch(fetchProductsFailure(error)));
    };
  }

  /**
   * Handels valid and invalid responses
   * @param {*} response 
   * 
   */
  const handleErrors=(response) =>{
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }

export const FETCH_PRODUCTS_BEGIN   = 'FETCH_PRODUCTS_BEGIN';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';

export const fetchProductsBegin = () => ({
  type: FETCH_PRODUCTS_BEGIN
});

export const fetchProductsSuccess = products => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: { products }
});

export const fetchProductsFailure = error => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: { error }
});

export default fetchProducts;