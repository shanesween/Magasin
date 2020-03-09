import axios from "axios";

//ACTION TYPES

const SET_ORDER = "SET_ORDER";
const UPDATE_ORDER = "UPATE_ORDER";

// ACTION CREATORS

const setOrder = order => {
  return { type: SET_ORDER, order };
};
const updateOrder = order => ({ type: UPDATE_ORDER, order });
// THUNK CREATORS

export const fetchOrder = id => {
  return async dispatch => {
    try {
      const { data } = await axios.get(`/api/orders/admin/${id}`);
      dispatch(setOrder(data));
    } catch (err) {
      console.log(err);
    }
  };
};
export const editedOrder = (id, orderParams) => {
  return async dispatch => {
    try {
      const { data } = await axios.put(`/api/orders/admin/${id}`, {
        orderParams
      });
      dispatch(updateOrder(data));
    } catch (err) {
      console.error("Error in editOrder thunk", err);
    }
  };
};

// REDUCER

export default function(order = {}, action) {
  switch (action.type) {
    case SET_ORDER:
      return action.order;
    case UPDATE_ORDER:
      if (order && order.id === action.order.id) {
        return action.order;
      }
    default:
      return order;
  }
}
