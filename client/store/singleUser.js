import axios from 'axios';

//ACTION TYPES

const SHOW_SINGLE_USER = 'SHOW_SINGLE_USER';
const UPDATE_USER = 'UPATE_USER';

// ACTION CREATORS

const showSingleUser = singleUser => {
  return { type: SHOW_SINGLE_USER, singleUser };
};
const updateUser = singleUser => ({ type: UPDATE_USER, singleUser });

// THUNK CREATORS

export const fetchSingleUser = id => {
  return async dispatch => {
    try {
      const { data } = await axios.get(`/api/users/admin/${id}`);
      dispatch(showSingleUser(data));
    } catch (err) {
      console.error('Error in fetchSingleUser thunk', err);
    }
  };
};

export const editedUser = (id, singleUserParams) => {
  return async dispatch => {
    try {
      const { data } = await axios.put(
        `/api/users/admin/${id}`,
        singleUserParams
      );
      dispatch(updateUser(data));
    } catch (err) {
      console.error('Error in editUser thunk', err);
    }
  };
};

// REDUCER

export default function(singleUser = {}, action) {
  switch (action.type) {
    case SHOW_SINGLE_USER:
      return action.singleUser;
    case UPDATE_USER:
      if (singleUser && singleUser.id === action.singleUser.id) {
        return action.singleUser;
      }
    default:
      return singleUser;
  }
}
