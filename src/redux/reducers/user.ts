import { ADD_USER, REMOVE_USER, SET_USERS } from "../../utils/types";

interface State {
  users: Array<string>;
  count: number;
}

interface Action {
  type: string;
  payload: { users: Array<string>; count: number } | string | undefined;
}

const initialState: State = {
  users: ["1", "2", "3", "4"],
  count: 4,
};

const userReducer = (state: State = initialState, action: Action): State => {
  const payload = action?.payload;

  switch (action.type) {
    case ADD_USER:
      return typeof payload === "string"
        ? { users: state.users.concat(payload), count: state.users.length + 1 }
        : state;
    case REMOVE_USER:
      return typeof payload === "string"
        ? {
            users: [...state.users.filter((user) => user !== payload)],
            count: state.users.length - 1,
          }
        : state;
    case SET_USERS:
      return payload && typeof payload === "object" ? { ...payload } : state;
    default:
      return state;
  }
};

export default userReducer;
