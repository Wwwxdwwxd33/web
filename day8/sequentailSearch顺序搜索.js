Array.prototype.sequentailSearch = function (item) {
  for (let i = 0; i < this.length; i++) {
    if (this[i] === item) {
      return i;
    }
  }
  return -1;
};
const res = [5, 4, 3, 6, 33, 5].sequentailSearch(33);
