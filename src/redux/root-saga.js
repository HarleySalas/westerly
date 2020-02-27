import { all, call } from "redux-saga/effects"

//import sagas
import { testSagas } from "./test/test.sagas"

//call all sagas
export default function* rootSaga() {
  yield all([call(testSagas)])
}
