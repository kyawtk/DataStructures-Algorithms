function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let middle = Math.floor(arr.length / 2);

  let leftSide = arr.slice(0, middle);
  let rightSide = arr.slice(middle);

  let sortedLeft = mergeSort(leftSide);
  let sortedRight = mergeSort(rightSide);

  return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
  let sortedArr = [];

  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      sortedArr.push(left[leftIndex]);
      leftIndex++;
    } else {
      sortedArr.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return sortedArr
    .concat(right.slice(rightIndex))
    .concat(left.slice(leftIndex));
}

export default mergeSort