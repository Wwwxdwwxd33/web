Array.prototype.selectionSort = function () {
  for (let i = 0; i < this.length; i++) {
    let indexMin = i;
    for (let j = i + 1; j < this.length; j++) {
      if (this[j] < this[indexMin]) {
        indexMin = j;
      }
    }
    if (indexMin !== i) {
      const temp = this[i];
      this[i] = this[indexMin];
      this[indexMin] = temp;
    }
  }
};

const arr = [5, 4, 3, 4, 1, 2];
arr.selectionSort();
