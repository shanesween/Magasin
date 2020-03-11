const SET_FILTER = "SET_FILTER";

export const setFilter = filter => {
  return {
    type: SET_FILTER,
    filter
  };
};

export default function(filter = "all", action) {
  switch (action.type) {
    case SET_FILTER:
      return action.filter;
    default:
      return filter;
  }
}
