import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import GridItem from "./GridItem";
import { RootState } from "../../redux/reducers";
import { splitArrayIntoChunksOfLen } from "../../utils/array";

const GridContainer = () => {
  const [colCount, setColCount] = useState<number>(0);
  const [displayItems, setDisplayItems] = useState<Array<Array<string>>>();
  const users = useSelector((state: RootState) => state.userReducer.users);

  useEffect(() => {
    const colCount = Math.floor(Math.sqrt(users.length + 1));
    setColCount(colCount);
    setDisplayItems(splitArrayIntoChunksOfLen(users, colCount));
  }, [users]);

  return (
    <div className='h-100'>
      {displayItems?.map((items, key) => (
        <div
          key={key}
          className='row'
          style={{ height: `${100 / displayItems.length}%` }}>
          {/* {JSON.stringify(item, null, 4)} */}
          {items?.map((item, key) => (
            <div key={key} className={`h-100 col-${12 / colCount}`}>
              <GridItem item={item} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default GridContainer;
