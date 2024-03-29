const initialState = false;

// Reducer
const clickReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CLICK_ACTION":
      return !state;
    default:
      return state;
  }
};

export default clickReducer;
