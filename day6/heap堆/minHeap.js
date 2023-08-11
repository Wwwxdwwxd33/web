class MinHeap {
  constructor() {
    this.heap = [];
  }
  //交换节点
  swap(i1, i2) {
    const temp = this.heap[i1];
    this.heap[i1] = this.heap[i2];
    this.heap[i2] = temp;
  }
  // 获取父节点index
  getParentIndex(i) {
    return (i - 1) >> 1;
  }
  // 获取左右侧节点
  getLeftIndex(i) {
    return i * 2 + 1;
  }
  getRightIndex(i) {
    return i * 2 + 2;
  }
  // 检验是否堆顶为最小元素
  shiftUp(index) {
    if (index == 0) {
      return;
    }
    const parentIndex = this.getParentIndex(index);
    if (this.heap[parentIndex] > this.heap[index]) {
      this.swap(parentIndex, index);
      this.shiftUp(parentIndex);
    }
  }
  shiftDown(index) {
    const leftIndex = this.getLeftIndex(index)
    const rightIndex = this.getRightIndex(index)
    if(this.heap[leftIndex] < this.heap[index]) {
      this.swap(leftIndex,index)
      this.shiftDown(leftIndex)
    }
    if(this.heap[rightIndex] < this.heap[index]) {
      this.swap(rightIndex,index)
      this.shiftDown(rightIndex)
    }
  }
  // 插入
  insert(value) {
    this.heap.push(value);
    this.shiftUp(this.heap.length - 1);
  }
  //删除栈顶元素
  pop() {
    this.heap[0] = this.heap.pop();
    this.shiftDown(0);
  }
  // 获取堆顶
  peek(){
    return this.heap[0]
  }
  // 获取堆大小
  size() {
    return this.heap.length
  }
}

const h = new MinHeap();
h.insert(3);
h.insert(4);
h.insert(5);
h.insert(1);
h.pop()
