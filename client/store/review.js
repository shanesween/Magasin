import axios from 'axios';

const GET_REVIEWS = 'GET_REVIEWS';

const getReviews = reviews => {
  return {
    type: GET_REVIEWS,
    reviews,
  };
};

export const fetchReviews = id => {
  return async dispatch => {
    try {
      let { data } = await axios.get(`/api/products/review/${id}`);
      dispatch(getReviews(data));
    } catch (err) {
      console.log(err);
    }
  };
};

export default function(state = [], action) {
  switch (action.type) {
    case GET_REVIEWS:
      return action.reviews;
    default:
      return state;
  }
}
