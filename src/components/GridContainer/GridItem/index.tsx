import React, { useCallback } from "react";
import { useDispatch } from 'react-redux';

import DeleteIcon from '@mui/icons-material/Delete';

import { removeUser } from '../../../redux/actions/user';

import styles from './style.module.css';

interface GridItemProps {
  item: string;
}

const GridItem = ({ item }: GridItemProps) => {
  const dispatch = useDispatch();

  const handleRemoveUser = useCallback(() => {
    dispatch(removeUser(item));
  }, [item, dispatch]);

  return (
    <div className={`${styles['grid-item']} position-relative`}>
      <button
        onClick={handleRemoveUser}
        className={`btn ${styles['grid-item__remove-btn']} position-absolute`}
      >
        <DeleteIcon fontSize='large' />
      </button>
      <span className={`${styles['grid-item__user']} position-absolute`}>
        User {item}
      </span>
    </div>
  );
};

export default GridItem;
