<<<<<<< HEAD
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import user from './user';
import product from './singleProduct';
import products from './products';
import cart from './cart';
import users from './users';
import singleUser from './singleUser';
import orders from './order';
import orderItem from './orderItem';
import singleOrder from './singleOrder';
=======
import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import user from "./user";
import product from "./singleProduct";
import products from "./products";
import cart from "./cart";
import users from "./users";
import singleUser from "./singleUser";
import orders from "./orders";
import singleOrder from "./singleOrder";
import productFilter from "./productFilter";
>>>>>>> ead983f22bf84dc850d97a99fba5167884e40e56

const reducer = combineReducers({
  user,
  product,
  products,
  cart,
  users,
  singleUser,
  orders,
<<<<<<< HEAD
  orderItem,
  singleOrder,
=======
  singleOrder,
  productFilter
>>>>>>> ead983f22bf84dc850d97a99fba5167884e40e56
});
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);
const store = createStore(reducer, middleware);

export default store;
<<<<<<< HEAD
export * from './user';
export * from './singleProduct';
export * from './singleUser';
export * from './orders';
export * from './singleOrder';
=======
export * from "./user";
export * from "./singleProduct";
export * from "./singleUser";
export * from "./orders";
export * from "./singleOrder";
export * from "./productFilter";
>>>>>>> ead983f22bf84dc850d97a99fba5167884e40e56
