// 原型模式
function Person() {}
Person.prototype.name = 'naruto'
;(Person.prototype.age = 33),
  (Person.prototype.sayAge = function () {
    console.log(this.name)
  })

const person1 = new Person()
const status = person1.hasOwnProperty('name') // false
console.log(status)
person1.name = 'sasuky'
console.log(person1.hasOwnProperty('name')) // true

// 工厂模式
function Country(name, age, lang) {
  const countryProperty = new Object()
  countryProperty.name = name
  countryProperty.age = age
  countryProperty.lang = lang
  return countryProperty
}

const china = Country('china', 73, 'Chinese')
const america = Country('america', 246, 'English')
console.log(china, america)

// 构造函数模式

function University(name, age) {
  this.name = name
  this.age = age
  this.sayName = function () {
    console.log(this.name)
  }
}

const an = new University('ankang university', 58)
console.log(an)
an.sayName()

console.log(Object.getOwnPropertyDescriptors(person1, 'name'))

// 判断属性存在于原型中还是实例中

function hasPrototypeOwnProptery(obj, name) {
  // prettier-ignore
  return !obj.hasOwnProperty(name) && (name in obj)
}
console.log(hasPrototypeOwnProptery(person1, 'name'))

for (let i in Person.prototype) {
  // 返回原型上所有可枚举属性
  console.log(i)
}

console.log(Object.keys(Person.prototype)) // 返回原型上所有可枚举属性
console.log(Object.getOwnPropertyNames(Person.prototype)) // 返回原型上所有属性

function Map() {}
const map = new Map()
Map.prototype.say = function () {
  console.log('hi')
}
map.say()

function Fruit(name, size) {
  this.name = name
  this.size = size
  this.detail = [1, 2, 3]
}

Fruit.prototype = {
  constructor: Fruit,
  log: function () {
    console.log(this.name, this.size)
  },
}

const app = new Fruit('apple', 'middle')
const ban = new Fruit('banana', 'big')

app.log()
ban.log()

app.detail.push(4)
console.log(app.detail)
console.log(ban.detail)

function HI(name, age) {
  const o = new Object()
  o.name = name
  o.age = age
  return o
}

const hi = new HI('KL', 34)
console.log(hi, hi instanceof HI) // { name: 'KL', age: 34 } false

// 实现原型链基本模式

function SuperType() {
  this.supertype = 'super type'
}

SuperType.prototype.getPropertypeSuper = function () {
  return this.supertype
}

function SubType() {
  this.subtype = 'sub type'
}

// 继承了SuperType
SubType.prototype = new SuperType()
// SubType.prototype.constructor = SuperType

// SubType.prototype.getPropertySub = function () {
//   return this.subtype
// }

const sub = new SubType()

console.log(sub)
// console.log(sub.getPropertySub())
console.log(sub.getPropertypeSuper())
console.log(sub.__proto__ === SubType.prototype)
console.log(SubType.prototype.__proto__ === SuperType.prototype)
