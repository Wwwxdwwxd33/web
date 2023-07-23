// 集合Set 是一种无序且唯一的数据结构

// 去重
let arr = [345,345,33,44,33,67]
let a = [{name:'Bob'},{name:'Bob'}]
let arr2 = [...new Set(arr)] // [345, 33, 44, 67]
let a2 = [...new Set(a)] // 

// 判断是否存在
let set = new Set(arr)
let has = set.has(2) //false

// 求交集
let set2 = new Set([22,33,44,57654,33,22])
let set3 = new Set([...set].filter(item => set2.has(item)))