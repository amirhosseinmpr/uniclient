import { ADD_USER, MOVE_USER, REMOVE_USER, SET_USERS } from "../../utils/types";
import { AppDispatch } from "../store";

// ? Action - To add new user
export const addUser = (user: string) => (dispatch: AppDispatch) =>
  dispatch({
    type: ADD_USER,
    payload: user,
  });

// ? Action - To remove a user
export const removeUser = (user: string) => (dispatch: AppDispatch) =>
  dispatch({
    type: REMOVE_USER,
    payload: user,
  });

// ? Action - To set all of store users at once
export const setUsers = (users: Array<string>) => (dispatch: AppDispatch) =>
  dispatch({
    type: SET_USERS,
    payload: {
      users,
      count: users.length,
    },
  });

// ? Action - To move a user from one index to another
export const moveItem =
  (sourceIndex: number, destinationIndex: number) =>
  (dispatch: AppDispatch) => {
    dispatch({
      type: MOVE_USER,
      payload: {
        sourceIndex,
        destinationIndex,
      },
    });
  };
