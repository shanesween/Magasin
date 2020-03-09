import axios from "axios";

//ACTION TYPES

const SET_PRODUCT = "SET_PRODUCT";
const UPDATE_PRODUCT = "UPATE_PRODUCT";

// ACTION CREATORS

const setProduct = product => {
  return { type: SET_PRODUCT, product };
};
const updateProduct = product => ({ type: UPDATE_PRODUCT, product });
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
export const editedProduct = (id, productParams) => {
  return async dispatch => {
    try {
      const { data } = await axios.put(`/api/products/${id}`, {
        productParams
      });
      dispatch(setProduct(data));
    } catch (err) {
      console.error("Error in editProduct thunk", err);
    }
  };
};
export const createReview = review => {
  return async dispatch => {
    try {
      let { data } = await axios.put(`/api/reviews/`, { review });
    } catch (err) {
      console.log(err);
    }
  };
};

// REDUCER

export default function(state = {}, action) {
  switch (action.type) {
    case SET_PRODUCT:
      return action.product;

    default:
      return state;
  }
}
