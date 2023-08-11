Array.prototype.insertSort = function () {
  for (let i = 1; i < this.length; i++) {
    let temp = this[i];
    let j = i;
    while (j > 0) {
      if (this[j - 1] > temp) {
        // 因为前一位比temp大 所以把前一位往后移
        this[j] = this[j - 1];
      } else {
        // 如果不比temp大的话直接结束循环
        break;
      }
      // 因为前一位比temp大 所以把前一位往后移 然后j-1 此时j就继续往前循环查看是否有值比temp更大 继续把temp往前放
      j--;
    }
    this[j] = temp;
  }
};

const arr = [5, 4, 3, 4, 1, 2];
arr.insertSort();
