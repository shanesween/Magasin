import axios from 'axios';

//ACTION TYPES

const SHOW_SINGLE_USER_ORDERS = 'SHOW_SINGLE_USER_ORDERS';

// ACTION CREATORS

const showSingleUserOrders = ord => {
  return { type: SHOW_SINGLE_USER_ORDERS, ord };
};

// THUNK CREATORS

export const fetchOrders = () => {
  return async dispatch => {
    try {
      const { data } = await axios.get(`/api/users/orders`);
      console.log(data);

      dispatch(showSingleUserOrders(data));
    } catch (err) {
      console.error('Error in fetchSingleUser thunk', err);
    }
  };
};

// REDUCER

export default function(orders = [], action) {
  switch (action.type) {
    case SHOW_SINGLE_USER_ORDERS:
      return action.ord;

    default:
      return orders;
  }
}
