function binarySearch(arr, n) {
    let start = 0;
    let end = arr.length - 1;
  
    while (start <= end) {
      let middle = Math.floor((start + end) / 2);
  
      if (arr[middle] === n) {
        return middle; // Target found, return the index
      } else if (n < arr[middle]) {
        end = middle - 1; // Target is in the left half
      } else {
        start = middle + 1; // Target is in the right half
      }
    }
  
    return -1; // Target not found
  }
  
console.log(binarySearch([1,2,3,4,5,6,7,8,9], 3))
