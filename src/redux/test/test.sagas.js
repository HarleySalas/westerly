import { all, call, takeLatest } from "redux-saga/effects";

import TestActionTypes from "./test.types";

const logUpdate = () => {
  console.log("Count updated.");
};

export function* onCountChange() {
  yield takeLatest(
    [TestActionTypes.INCREMENT_COUNTER, TestActionTypes.DECREMENT_COUNTER],
    logUpdate
  );
}

export function* testSagas() {
  yield all([call(onCountChange)]);
}
