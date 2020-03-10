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
import orders from './orders';
import singleOrder from './singleOrder';
import productFilter from './productFilter';
import orderItem from './orderItem';

const reducer = combineReducers({
  user,
  product,
  products,
  cart,
  users,
  singleUser,
  orders,
  orderItem,
  singleOrder,

  productFilter,
});
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);
const store = createStore(reducer, middleware);

export default store;
export * from './user';
export * from './singleProduct';
export * from './singleUser';
export * from './orders';
export * from './singleOrder';
export * from './productFilter';
