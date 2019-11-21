const INITIAL_STATE = {
  exampleProperty: null
};

const exampleReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "EXAMPLE_ACTION":
      return {
        ...state,
        exampleProperty: action.payload
      };
    default:
      return state;
  }
};

export default exampleReducer;
