import TestActionTypes from "./test.types";

//import utils
import { incrementCounter, decrementCounter } from "./test.utils";

const INITIAL_STATE = {
  count: 1,
};

const testReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TestActionTypes.INCREMENT_COUNTER:
      return {
        ...state,
        count: incrementCounter(state.count),
      };
    case TestActionTypes.DECREMENT_COUNTER:
      return {
        ...state,
        count: decrementCounter(state.count),
      };
    default:
      return state;
  }
};

export default testReducer;
