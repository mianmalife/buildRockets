const str = '{[()]}['
const str1 = '{[()]}'
const validBrackcets = function (str) {
  const patch = {
    '{': '}',
    '[': ']',
    '(': ')',
  }
  const stack = []
  for (let i = 0; i < str.length; i++) {
    const ch = str[i]
    if (patch[ch]) {
      stack.push(ch)
    } else {
      if (!stack.length || patch[stack.pop()] !== ch) {
        return false
      }
    }
  }
  return !stack.length
}
const v1 = validBrackcets(str)
console.log(v1) //false
const v2 = validBrackcets(str1)
console.log(v2) //true
