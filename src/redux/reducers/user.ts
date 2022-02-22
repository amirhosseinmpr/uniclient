import { ADD_USER, REMOVE_USER, SET_USERS, MOVE_USER } from "../../utils/types";
import { moveUser } from "./user.helpers";

interface State {
  users: Array<string>;
  count: number;
}

interface Action {
  type: string;
  payload:
    | { users: Array<string>; count: number }
    | { sourceIndex: number; destinationIndex: number }
    | string
    | undefined;
}

// ? User reducer's default data
const initialState: State = {
  // ? Array of users id
  users: ["1", "2", "3", "4"],
  // ? users count
  count: 4,
};

const userReducer = (state: State = initialState, action: Action): State => {
  const payload: any = action?.payload;

  switch (action.type) {
    case ADD_USER:
      // ? Concat the received user to the users
      return typeof payload === "string"
        ? { users: state.users.concat(payload), count: state.users.length + 1 }
        : state;
    case REMOVE_USER:
      // ? remove the received user from the users
      return typeof payload === "string"
        ? {
            users: [...state.users.filter((user) => user !== payload)],
            count: state.users.length - 1,
          }
        : state;
    case MOVE_USER:
      // ? move the received user to another index, and
      // ? store a new array of users with new values
      if (payload && typeof payload === "object") {
        const offset: number = payload.destinationIndex - payload.sourceIndex;
        // ? Create a new users array with required user movement
        const newUsers: Array<string> = moveUser(
          state.users,
          payload.sourceIndex,
          offset
        );
        return { users: newUsers, count: newUsers.length };
      } else return state;
    case SET_USERS:
      // ? Set received users to the store
      return payload && typeof payload === "object" ? { ...payload } : state;
    default:
      // ? Returns state value
      return state;
  }
};

export default userReducer;
