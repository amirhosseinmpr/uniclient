import React, { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../redux/actions/user";

import { RootState } from "../../redux/reducers";

import styles from "./style.module.css";

const AddButton = () => {
  const users = useSelector((state: RootState) => state.userReducer.users);
  const usersCount = useSelector((state: RootState) => state.userReducer.count);
  const dispatch = useDispatch();

  const handleAddUser = () => {
    if (usersCount < 12) {
      let index: number = 1,
        user: string = "";
      while (!user) {
        const newUser: string = String(index++);
        if (users.indexOf(newUser) === -1) user = newUser;
      }
      dispatch(addUser(user));
    }
  };

  return (
    <div className={`${styles["add-btn-wrapper"]} w-100`}>
      <div className='mx-auto'>
        <button className='btn' onClick={handleAddUser}>
          +
        </button>
      </div>
    </div>
  );
};

export default AddButton;
