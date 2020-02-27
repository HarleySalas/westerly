import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

//import reducers
import testReducer from "./test/test.reducer";

//whitelist of reducers which should be persisted in local storage
/**
 * whitelist contains reducers which should be persisted in local storage
 */
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["test"],
};

const rootReducer = combineReducers({
  test: testReducer,
});

export default persistReducer(persistConfig, rootReducer);
