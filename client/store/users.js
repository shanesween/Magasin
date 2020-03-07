import axios from "axios";

const SHOW_USERS = "SHOW_USERS";

const showUsers = users => ({ type: SHOW_USERS, users });

export const fetchUsers = () => async dispatch => {
  try {
    const { data } = await axios.get("/api/users/");
    dispatch(showUsers(data));
  } catch (err) {
    console.error("Error in fetchUsers thunk", err);
  }
};

export default function(users = [], action) {
  switch (action.type) {
    case SHOW_USERS:
      return action.users;
    default:
      return users;
  }
}
