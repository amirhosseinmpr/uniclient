import { combineReducers } from "redux";

import user from "./user";

// ? Combine all of the reducers
const rootReducer = combineReducers({
  userReducer: user,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
