import { ADD_USER, REMOVE_USER, SET_USERS } from "../../utils/types";
import { AppDispatch } from "../store";

export const addUser = (user: string) => (dispatch: AppDispatch) =>
  dispatch({
    type: ADD_USER,
    payload: user,
  });

export const removeUser = (user: string) => (dispatch: AppDispatch) =>
  dispatch({
    type: REMOVE_USER,
    payload: user,
  });

export const setUsers = (users: Array<string>) => (dispatch: AppDispatch) =>
  dispatch({
    type: SET_USERS,
    payload: {
      users,
      count: users.length,
    },
  });
