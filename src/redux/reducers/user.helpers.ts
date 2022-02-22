// ? User reducer helper functions

// ? Move one user in the array, and return
// ? a new array with the changes
function move(array: Array<any>, oldIndex: number, newIndex: number) {
  if (newIndex >= array.length) {
    newIndex = array.length - 1;
  }
  array.splice(newIndex, 0, array.splice(oldIndex, 1)[0]);
  return [...array];
}

// ? Move the user to a new position in the array
// ? using 'move' function
export function moveUser(array: Array<any>, index: number, offset: number) {
  const newIndex = index + offset;
  return move(array, index, newIndex);
}
