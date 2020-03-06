import axios from "axios";
import history from "../history";

//ACTION TYPES
const GET_USER = "GET_USER";
const REMOVE_USER = "REMOVE_USER";
const UPDATE_USER = "UPATE_USER";
const DELETE_USER = "DELETE_USER";

// INITIAL STATE

const defaultUser = {};

// ACTION CREATORS

const getUser = user => ({ type: GET_USER, user });
const removeUser = () => ({ type: REMOVE_USER });
const updateUser = user => ({ type: UPDATE_USER, user });
const deleteUser = id => ({ type: DELETE_USER, id });

// THUNK CREATORS

export const me = () => async dispatch => {
  try {
    const res = await axios.get("/auth/me");
    dispatch(getUser(res.data || defaultUser));
  } catch (err) {
    console.error(err);
  }
};

export const auth = (email, password, method) => async dispatch => {
  let res;
  try {
    res = await axios.post(`/auth/${method}`, { email, password });
  } catch (authError) {
    return dispatch(getUser({ error: authError }));
  }

  try {
    dispatch(getUser(res.data));
    history.push("/home");
  } catch (dispatchOrHistoryErr) {
    console.error(dispatchOrHistoryErr);
  }
};

export const logout = () => async dispatch => {
  try {
    await axios.post("/auth/logout");
    dispatch(removeUser());
    history.push("/login");
  } catch (err) {
    console.error(err);
  }
};

export const editedUser = (id, userParams) => {
  return async dispatch => {
    try {
      const { data } = await axios.put(`/api/users/${id}`, userParams);
      dispatch(updateUser(data));
    } catch (err) {
      console.error("Error in editUser thunk", err);
    }
  };
};

export const deletedUser = id => {
  return async dispatch => {
    try {
      await axios.delete(`/api/users/${id}`);
      dispatch(deleteUser(id));
    } catch (err) {
      console.error("Error in deleteUser thunk", err);
    }
  };
};

// REDUCER

export default function(state = defaultUser, action) {
  switch (action.type) {
    case GET_USER:
      return action.user;
    case REMOVE_USER:
      return defaultUser;
    case UPDATE_USER:
      return state.filter(user =>
        user.id !== action.user.id ? action.user : user
      );
    case DELETE_USER:
      return state.filter(user => user.id !== action.id);
    default:
      return state;
  }
}
