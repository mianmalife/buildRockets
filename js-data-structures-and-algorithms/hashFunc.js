// 哈希函数 字符串转为较大的数字 这个较大的数字也就是hashCode
// 再将这个较大数字压缩到数组范围之内
// str 要转的字符串 size 数组的长度
function hashFunc(str, size) {
  let hashCode = 0
  for (let i = 0; i < str.length; i++) {
    // 霍纳法则算法
    hashCode = 37 * hashCode + str.charCodeAt(i)
  }
  // 取余 结果为数组下标
  return hashCode % size
}

console.log(hashFunc('naruto', 17))
console.log(hashFunc('sasuki', 17))
console.log(hashFunc('obito', 17))
console.log(hashFunc('kuna', 17))
