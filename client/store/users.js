import axios from "axios";

const SHOW_USERS = "SHOW_USERS";
const DELETE_USER = "DELETE_USER";

const showUsers = users => ({ type: SHOW_USERS, users });
const deleteUser = id => ({ type: DELETE_USER, id });

export const fetchUsers = () => async dispatch => {
  try {
    // const { data } = await axios.get(`/api/users?page=${page}&limit=${limit}`);
    // console.log("data result!", data);
    // console.log("axios", await axios.get("/api/users/"));
    const { data } = await axios.get("/api/users/");
    dispatch(showUsers(data));
  } catch (err) {
    console.error("Error in fetchUsers thunk", err);
  }
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

export default function(users = [], action) {
  switch (action.type) {
    case SHOW_USERS:
      return action.users;
    case DELETE_USER:
      return users.filter(user => user.id !== action.id);
    default:
      return users;
  }
}
