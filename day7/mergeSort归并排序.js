Array.prototype.mergeSort = function () {
  const rec = (arr) => {
    // 递归 不断把arr分成数组直到分成单独的数
    if (arr.length === 1) {
      return arr;
    }
    const mid = Math.floor(arr.length / 2);
    // slice() 方法返回一个新的数组对象，这一对象是一个由 start 和 end 决定的原数组的浅拷贝（包括 start，不包括 end）
    const left = arr.slice(0, mid);
    const right = arr.slice(mid, arr.length);
    const orderLeft = rec(left);
    const orderRight = rec(right);
    // 定义一个空数组 装排序好的数组 不断进行合并排序
    const res = [];
    console.log(orderLeft.length,orderRight.length);
    while (orderLeft.length || orderRight.length) {
      if (orderLeft.length && orderRight.length) {
        res.push(
          orderLeft[0] < orderRight[0] ? orderLeft.shift() : orderRight.shift()
        );
      } else if (orderLeft.length) {
        res.push(orderLeft.shift());
      } else if (orderRight.length) {
        res.push(orderRight.shift());
      }
    }
    return res
  };
  rec(this);
};
const res = [5,4,3,2,1].mergeSort();

// function mergeSort(arr) {
//   if (arr.length === 1) return arr;
//   const midIndex = Math.floor(arr.length / 2);
//   const leftOrder = mergeSort(arr.slice(0,midIndex))
//   const rightOrder = mergeSort(arr.slice(midIndex))
//   return merge(leftOrder, rightOrder)
// }

// function merge(leftArr,rightArr) {
//   let temp = []
//   while(leftArr.length > 0 && rightArr.length > 0) {
//     if(leftArr[0] < rightArr[0]) {
//       temp.push(leftArr.shift())
//     } else {
//       temp.push(rightArr.shift())
//     }
//   }
//   return temp.concat(leftArr).concat(rightArr)
// }

// let s = [5,4,3,2,1]
// let arr = mergeSort(s)
// console.log(arr);

