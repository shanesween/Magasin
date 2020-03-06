import axios from 'axios';

//ACTION TYPES

const SET_PRODUCT = 'SET_PRODUCT';

// ACTION CREATORS

const setProduct = product => {
  return { type: SET_PRODUCT, product };
};

// THUNK CREATORS

export const fetchProduct = id => {
  return async dispatch => {
    try {
      const { data } = await axios.get(`/api/products/${id}`);
      dispatch(setProduct(data));
    } catch (err) {
      console.log(err);
    }
  };
};

// REDUCER

export default function(product = {}, action) {
  switch (action.type) {
    case SET_PRODUCT:
      return action.product;
    default:
      return product;
  }
}
