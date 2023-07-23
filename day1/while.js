//  while(条件表达式) {
//    循环体代码
//  }


let num = 1
while (num <= 4) {
  num++
}
// 里面需要有操作表达式 避免死循环
console.log(num);

// while先判断条件表达式是否成立 先判断再执行循环体语句
// do while不管条件表达式是否成立，先直接执行依次循环体语句再进行判断
//   do{
//     循环体代码
//   } while(条件表达式);

do {
  num ++
} while (num < 4);