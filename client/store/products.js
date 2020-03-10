import axios from "axios";

const GET_PRODUCTS = "GET_PRODUCTS";
const ADDED_NEW_PRODUCT = "ADDED_NEW_PRODUCT";

const getProducts = products => {
  return {
    type: GET_PRODUCTS,
    products
  };
};

const addedNewProduct = product => {
  return {
    type: ADDED_NEW_PRODUCT,
    product
  };
};

export const fetchProducts = () => {
  return async dispatch => {
    try {
      let { data } = await axios.get("/api/products");
      dispatch(getProducts(data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const filterProducts = value => {
  return async dispatch => {
    try {
      let filteredProducts;
      if (value === "all") {
        let { data } = await axios.get("/api/products");
        filteredProducts = data;
      } else {
        let { data } = await axios.get(`/api/products/filter/${value}`);
        filteredProducts = data;
      }
      dispatch(getProducts(filteredProducts));
    } catch (err) {
      console.log(err);
    }
  };
};

export const addNewProduct = productParams => async dispatch => {
  const { data } = await axios.post("/api/products", productParams);
  dispatch(addedNewProduct(data));
};

export default function(state = [], action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return action.products;
    case ADDED_NEW_PRODUCT:
      return [...state, action.product];
    default:
      return state;
  }
}
