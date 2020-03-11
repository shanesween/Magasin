import axios from 'axios';

//ACTION TYPES

const SET_ORDER_ITEM = 'SET_ORDER_ITEM';

// ACTION CREATORS

const setItem = orderItem => {
  return { type: SET_ORDER_ITEM, orderItem };
};

// THUNK CREATORS

export const fetchOrderItem = id => {
  return async dispatch => {
    try {
      const { data } = await axios.get(`/api/users/orders/${id}`);
      console.log(data);

      dispatch(setItem(data));
    } catch (err) {
      console.error('Error in fetchSingleUser thunk', err);
    }
  };
};

// REDUCER

export default function(orderItem = [], action) {
  switch (action.type) {
    case SET_ORDER_ITEM:
      return action.orderItem;

    default:
      return orderItem;
  }
}
