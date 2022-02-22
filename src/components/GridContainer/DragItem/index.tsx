import React, { memo, useRef } from "react";
import { useDispatch } from "react-redux";
import { useDrag, useDrop } from "react-dnd";

import { moveItem } from "../../../redux/actions/user";

interface DragItemProps {
  id: number;
  children: any;
}

const DragItem = ({ id, children }: DragItemProps) => {
  const ref = useRef(null);
  const dispatch = useDispatch();

  // ? Gets isDragging, and connectDrag variables
  // ? using 'useDrag' hook
  const [{ isDragging }, connectDrag] = useDrag({
    type: "ITEM",
    item: () => ({ id }),
    collect: (monitor: any) => {
      return {
        isDragging: monitor.isDragging(),
      };
    },
  });

  // ? Gets connectDrop using 'useDrop' hook
  const [, connectDrop] = useDrop({
    accept: "ITEM",
    // ? Handles drop event
    drop(hoveredOverItem: any) {
      if (hoveredOverItem.id !== id) {
        // ? Send index to move the item
        dispatch(moveItem(hoveredOverItem.id - 1, id - 1));
      }
    },
  });

  // ? Connects the ref to drag, and drop
  connectDrag(ref);
  connectDrop(ref);

  // ? Set opacity of the item according to dragging
  const opacity = isDragging ? 0.3 : 1;
  const containerStyle = { opacity };

  // ? Return a cloned child or children with
  // ? forwardedRef, and style props
  return React.Children.map(children, (child) =>
    React.cloneElement(child, {
      forwardedRef: ref,
      style: containerStyle,
    })
  );
};

export default memo(DragItem);
