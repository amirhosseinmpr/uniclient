export function splitArrayIntoChunksOfLen(
  arr: Array<string>,
  len: number
): Array<Array<string>> {
  var chunks = [],
    i = 0,
    n = arr.length;
  while (i < n) {
    chunks.push(arr.slice(i, (i += len)));
  }
  return chunks;
}
