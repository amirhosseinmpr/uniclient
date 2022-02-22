// ? Gets an array, and smash it into smaller
// ? arrays with length of 'len'
export function splitArrayIntoChunksOfLen(
  arr: Array<string>,
  len: number
): Array<Array<string>> {
  var chunks = [],
    i = 0,
    n = arr.length;
  // ? Slice the array into smaller chunks, and
  // ? Adds them to 'chunk'
  while (i < n) {
    chunks.push(arr.slice(i, (i += len)));
  }
  return chunks;
}
