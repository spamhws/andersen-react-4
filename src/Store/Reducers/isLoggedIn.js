const isLoggedInReducer = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_LOG_IN':
      return !state;
    default:
      return state;
  }
};

export default isLoggedInReducer;
