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

const reducer = combineReducers({
  user,
  product,
  products,
  cart,
  users,
  singleUser
});
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);
const store = createStore(reducer, middleware);

export default store;
export * from "./user";
export * from "./singleProduct";
export * from "./singleUser";
