import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import DragItem from "./DragItem";
import GridItem from "./GridItem";
import { RootState } from "../../redux/reducers";
import { splitArrayIntoChunksOfLen } from "../../utils/array";

const GridContainer = () => {
  const [colCount, setColCount] = useState<number>(0);
  const [displayItems, setDisplayItems] = useState<Array<Array<string>>>();
  const users = useSelector((state: RootState) => state.userReducer.users);

  // ? Sets colCount, and displayItems whenever
  //? the 'users' changes
  useEffect(() => {
    // ? Computes the count of columns
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
          // ? Sets the item height according to the length of displayItems
          style={{ height: `${100 / displayItems.length}%` }}>
          {/* {JSON.stringify(item, null, 4)} */}
          {items?.map((item, index) => (
            // ? Sets the col-x class according to the columns count
            <div key={index} className={`h-100 col-${12 / colCount}`}>
              <DragItem id={users.indexOf(item) + 1}>
                <GridItem item={item} />
              </DragItem>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default GridContainer;
