import axios from 'axios';

//ACTION TYPES

const SHOW_SINGLE_ORDERS = 'SHOW_SINGLE_ORDERS';

// ACTION CREATORS

const showSingleUserOrders = order => {
  return { type: SHOW_SINGLE_ORDERS, order };
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

export default function(order = [], action) {
  switch (action.type) {
    case SHOW_SINGLE_ORDERS:
      return action.order;

    default:
      return order;
  }
}
