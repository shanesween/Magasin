import axios from "axios";

const SET_CART = "SET_CART";

const setCart = cart => {
  return {
    type: SET_CART,
    cart
  };
};

export const fetchCart = () => {
  return async dispatch => {
    try {
      const { data } = await axios.get(`/api/cart`);
      dispatch(setCart(data));
    } catch (err) {
      console.error("Error in fetchCart thunk", err);
    }
  };
};

export const addProduct = (productId, quantity) => {
  return async dispatch => {
    try {
      const { data } = await axios.put(`/api/cart/addItem`, {
        productId,
        quantity
      });
      dispatch(setCart(data));
    } catch (err) {
      console.error("Error in addProduct thunk", err);
    }
  };
};

export const updateProduct = (productId, quantity) => {
  return async dispatch => {
    try {
      const { data } = await axios.put(`/api/cart/addItem`, {
        productId,
        quantity
      });
      dispatch(setCart(data));
    } catch (err) {
      console.error("Error in updateProduct thunk", err);
    }
  };
};

export const removeProduct = orderItem => {
  // console.log("orderItem in thunk", orderItem);
  return async dispatch => {
    try {
      let { data } = await axios.put(`/api/cart/removeItem`, {
        orderItem
      });
      dispatch(setCart(data));
    } catch (err) {
      console.error("Error in removeProduct thunk", err);
    }
  };
};

export default function(cart = {}, action) {
  switch (action.type) {
    case SET_CART:
      return action.cart;

    default:
      return cart;
  }
}
