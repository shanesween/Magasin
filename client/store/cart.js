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

// const addedProduct = product => {
//   return {
//     type: ADD_PRODUCT,
//     product
//   };
// };

// const removedProduct = productId => {
//   return {
//     type: REMOVE_PRODUCT,
//     productId
//   };
// };

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

export const addProduct = (userId, productId, quantity = 1) => {
  return async dispatch => {
    try {
      const { data } = await axios.put(`/api/cart/addItem/${userId}`, {
        productId,
        quantity
      });
      dispatch(setCart(data));
    } catch (err) {
      console.error("Error in addProduct thunk", err);
    }
  };
};

export const removeProduct = (userId, productId) => {
  return async dispatch => {
    try {
      let { data } = await axios.put(`/api/cart/removeItem/${userId}`, {
        productId
      });
      dispatch(setCart(data));
    } catch (err) {
      console.error("Error in removeProduct thunk", err);
    }
  };
};

export default function(cart = {}, action) {
  // console.log("action", action);
  // console.log("cart", cart);

  switch (action.type) {
    case SET_CART:
      return action.cart;

    // case ADD_PRODUCT:
    //   let newArray = [...cart.products, action.product];
    //   cart.products = newArray;
    //   return cart;

    // case REMOVE_PRODUCT:
    //   let newArr = cart.products.filter(
    //     product => product.id !== action.productId
    //   );
    //   cart.products = newArr;
    //   return cart;

    default:
      return cart;
  }
}
