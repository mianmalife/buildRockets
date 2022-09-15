function ListCache(entries) {
  var index = -1,
    length = entries == null ? 0 : entries.length
  this.clear()
  while (++index < length) {
    var entry = entries[index]
    this.set(entries[0], entries[1])
  }
  ListCache.prototype.clear = function () {
    this.__data__ = []
    this.size = 0
  }
  ListCache.prototype.set = function (key, value) {
    // var data = this.__data__,
    // index =
  }
}

function arrayEach(array, iteratee) {
  var index = -1,
    length = array == null ? 0 : array.length

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break
    }
  }
  return array
}

function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      configurable: true,
      enumerable: true,
      value: value,
      writable: true,
    })
  } else {
    object[key] = value
  }
}

function eq(value, other) {
  return value === other || (value !== value && other !== other)
}

function assignValue(object, key, value) {
  var objValue = object[key]
  if (
    !(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
    (value === undefined && !(key in object))
  ) {
    baseAssignValue(object, key, value)
  }
}

function eq(value, other) {
  return value === other || (value !== value && other !== other)
}

const a1 = { a: 1 }
const a2 = { a: 2 }
console.log(eq(a1, a2))
