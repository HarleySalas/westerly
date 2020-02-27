import TestActionTypes from "./test.types";

export const incrementCounter = count => ({
  type: TestActionTypes.INCREMENT_COUNTER,
  payload: count,
});

export const decrementCounter = count => ({
  type: TestActionTypes.DECREMENT_COUNTER,
  payload: count,
});
