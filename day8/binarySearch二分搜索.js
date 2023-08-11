// Array.prototype.binarySearch = function (item) {
//   // 如果数组无序，需变成有序数组
//   this.sort();
//   // 最小下标与最大小标 初始为数组的中间值 如果中间值不是想要搜索的值，从 左边/右边 中的值找
//   let low = 0;
//   let high = this.length - 1;
//   // 当最小下标>最大小标时 说明数组中无要搜索的值 退出循环
//   while (low <= high) {
//     const mid = Math.floor((low + high) / 2);
//     const element = this[mid];
//     if (element < item) {
//       low = mid + 1;
//     } else if (element > item) {
//       high = mid - 1;
//     } else {
//       return mid;
//     }
//   }
//   return -1;
// };
// const res = [3,2, 3, 6, 5,3].binarySearch(3);

// 当有重复值时 ，查找最左边/最右边的与搜索值相同的值
Array.prototype.LeftbinarySearch = function (item) {
  this.sort();
  let low = 0;
  let high = this.length - 1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (item > this[mid]) {
      low = mid + 1;
    } else if (item < this[mid]) {
      high = mid - 1;
    } else {
// 最左边
      // if (mid === 0 || this[mid - 1] < item) {
      //   return mid;
      // }
      // high= mid-1
 // 最右边
      if (mid === this.length - 1 || this[mid + 1] > item) {
        return mid;
      }
      low = mid + 1;
    }
  }
  return -1;
};
const res1 = [3, 2, 3, 6, 5, 3].LeftbinarySearch(3);
