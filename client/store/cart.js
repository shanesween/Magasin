import axios from "axios";

const SET_CART = "SET_CART";
const ADD_PRODUCT = "ADD_PRODUCT";
const REMOVE_PRODUCT = "REMOVE_PRODUCT";

const setCart = cart => {
  return {
    type: SET_CART,
    cart
  };
};

const addedProduct = product => {
  return {
    type: ADD_PRODUCT,
    product
  };
};

const removedProduct = productId => {
  return {
    type: REMOVE_PRODUCT,
    productId
  };
};

export const fetchCart = userId => {
  return async dispatch => {
    try {
      const { data } = await axios.get(`/api/cart/${userId}`);
      dispatch(setCart(data));
    } catch (err) {
      console.error("Error in fetchCart thunk", err);
    }
  };
};

export const addProduct = (userId, productParams) => {
  return async dispatch => {
    try {
      const { data } = await axios.put(
        `/api/cart/addItem/${userId}`,
        productParams
      );
      dispatch(addedProduct(data));
    } catch (err) {
      console.error("Error in addProduct thunk", err);
    }
  };
};

export const removeProduct = (orderId, productParams) => {
  return async dispatch => {
    try {
      await axios.put(`/api/cart/removeItem/${orderId}`, productParams);
      dispatch(removedProduct(productParams.id));
    } catch (err) {
      console.error("Error in removeProduct thunk", err);
    }
  };
};

export default function(cart = [], action) {
  switch (action.type) {
    case SET_CART:
      return action.cart;

    case ADD_PRODUCT:
      return [...cart, action.product];

    case REMOVE_PRODUCT:
      return cart.filter(product => product.id !== action.productId);

    default:
      return cart;
  }
}
