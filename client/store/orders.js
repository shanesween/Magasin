import axios from "axios";

const SHOW_ORDERS = "SHOW_ORDERS";
const DELETE_ORDER = "DELETE_ORDER";

const showOrders = orders => ({ type: SHOW_ORDERS, orders });
const deleteOrders = id => ({ type: DELETE_ORDER, id });

export const fetchOrders = () => async dispatch => {
  try {
    const { data } = await axios.get("/api/orders/");
    dispatch(showOrders(data));
  } catch (err) {
    console.error("Error in fetchOrders thunk", err);
  }
};

export const deletedUser = id => {
  return async dispatch => {
    try {
      await axios.delete(`/api/orders/${id}`);
      dispatch(deleteOrders(id));
    } catch (err) {
      console.error("Error in deleteOrders thunk", err);
    }
  };
};

export default function(orders = [], action) {
  switch (action.type) {
    case SHOW_ORDERS:
      return action.orders;
    case DELETE_ORDER:
      return orders.filter(user => user.id !== action.id);
    default:
      return orders;
  }
}
