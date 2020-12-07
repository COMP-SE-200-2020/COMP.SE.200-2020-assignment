import isEmpty from "../src/isEmpty"

test('null and undefined are empty', () => {
  expect(isEmpty(null)).toBe(true)
  expect(isEmpty(undefined)).toBe(true)
})

test('number values are empty', () => {
  expect(isEmpty(1)).toBe(true)
  expect(isEmpty(1.1)).toBe(true)
  expect(isEmpty(-5)).toBe(true)
  expect(isEmpty(-1.1)).toBe(true)
})

test('boolean values are empty', () => {
  expect(isEmpty(false)).toBe(true)
  expect(isEmpty(true)).toBe(true)
})

test('empty collections, strings, sets, maps and objects are empty', () => {
  expect(isEmpty([])).toBe(true)
  expect(isEmpty(new Set)).toBe(true)
  expect(isEmpty(new Map)).toBe(true)
  expect(isEmpty(Object.create(null))).toBe(true)
  expect(isEmpty({})).toBe(true)
  expect(isEmpty("")).toBe(true)
})

/*
 * from the docs:
 * Objects are considered empty if they have no own enumerable string keyed
 * properties.
 */
test('non string keyed objects are empty', () => {
  expect(isEmpty({true:"a"})).toBe(true)
  expect(isEmpty({1:"a"})).toBe(true)
})

test('string keyed objects are not empty', () => {
  expect(isEmpty({"a": "a"})).toBe(false)
})

test('non empty collections, strings, sets, maps and objects are not empty', () => {
  expect(isEmpty([1])).toBe(false)
  expect(isEmpty([1,2,3])).toBe(false)
  expect(isEmpty(new Set([1]))).toBe(false)
  expect(isEmpty(new Set([1,2,3]))).toBe(false)
  expect(isEmpty("test")).toBe(false)

  const obj = {
    "name": "",
    "getName": function () {
      return this.name
    }
  }
  const inst = Object.create(obj)
  inst.name = "name"
  expect(isEmpty(inst)).toBe(false)

  const map = new Map
  map.set("key", "value")
  expect(isEmpty(map)).toBe(false)
})