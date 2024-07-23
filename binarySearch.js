// const binarySearch = (arr, target) => {
//   let start = 0;
//   let end = arr.length - 1;
//   let middle = Math.floor((start + end) / 2);
//   console.log("initail index: start, middle, end", start, middle, end);
//   while (arr[middle] !== target && start <= end) {
//     if (target < arr[middle]) {
//       end = middle - 1;
//     } else {
//       start = middle + 1;
//     }
//     middle = Math.floor((start + end) / 2);
//   }
//   if (arr[middle] === target) {
//     return middle;
//   }
//   return -1;
// };

// console.log(binarySearch([1, 2, 4, 3, 5, 6, 7, 8, 9, 10], 3));
