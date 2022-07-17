function SuperType(name) {
  this.name = name
  this.phone = ['huawei', 'apple', 'xiaomi', 'oppo']
}

SuperType.prototype.print = function () {
  return this.phone
}

function SubType(name, type) {
  SuperType.call(this, name)
  this.type = type
}

function inhreitPrototype(subType, superType) {
  const prototype = Object.create(superType.prototype)
  prototype.constructor = subType
  subType.prototype = prototype
}

inhreitPrototype(SubType, SuperType)

SubType.prototype.printType = function () {
  return this.type
}

const subType1 = new SubType('ztc', 'internet phone1')
console.log(subType1.name) // ztc
console.log(subType1.type) // internet phone1
console.log(subType1.printType()) // internet phone1
console.log(subType1.print()) // [ 'huawei', 'apple', 'xiaomi', 'oppo' ]
subType1.phone.push('ztc')
console.log(subType1.print()) // [ 'huawei', 'apple', 'xiaomi', 'oppo', 'ztc' ]

const subType2 = new SubType('vivo', 'internet phone2')
console.log(subType2.name) // vivo
console.log(subType2.type) // internet phone2
console.log(subType2.printType()) // internet phone2
console.log(subType2.print()) // [ 'huawei', 'apple', 'xiaomi', 'oppo' ]
subType2.phone.push('vivo')
console.log(subType2.print()) // [ 'huawei', 'apple', 'xiaomi', 'oppo', 'vivo' ]

console.log(subType2 instanceof SubType, subType2 instanceof SubType) // true true
console.log(SubType.prototype.isPrototypeOf(subType1)) // true
