import React, { LegacyRef, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import DeleteIcon from '@mui/icons-material/Delete';
import { removeUser } from '../../../redux/actions/user';

import styles from './style.module.css';

interface GridItemProps {
  item: string;
  forwardedRef?: LegacyRef<HTMLDivElement>;
  style?: Object;
}

const GridItem = ({ item, forwardedRef, style }: GridItemProps) => {
  const dispatch = useDispatch();

  // ? Remove button event handler
  const handleRemoveUser = useCallback(() => {
    dispatch(removeUser(item));
  }, [item, dispatch]);

  return (
    <div
      // ? Set the received ref and style to the element
      ref={forwardedRef}
      style={style}
      className={`${styles['grid-item']} position-relative`}
    >
      <button
        onClick={handleRemoveUser}
        className={`btn ${styles['grid-item__remove-btn']} position-absolute`}
      >
        <DeleteIcon />
      </button>
      <span className={`${styles['grid-item__user']} position-absolute`}>
        User {item}
      </span>
    </div>
  );
};

export default GridItem;
