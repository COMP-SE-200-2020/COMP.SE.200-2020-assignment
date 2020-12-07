import isObject from '../src/isObject'

test('valid objects are objects', () => {
  expect(isObject(new Date())).toBe(true)
  expect(isObject(new Number(1))).toBe(true)
  expect(isObject(new String("123"))).toBe(true)
  expect(isObject(new Object())).toBe(true)
  expect(isObject({})).toBe(true)
  expect(isObject({"a": 1})).toBe(true)
  expect(isObject([])).toBe(true)
  expect(isObject([1,2,3])).toBe(true)
  expect(isObject(/.*/)).toBe(true)
  expect(isObject(() => {})).toBe(true)
  expect(isObject(Function)).toBe(true)
})

test('NaN, null and undefined are not objects',  () => {
  expect(isObject(NaN)).toBe(false)
  expect(isObject(null)).toBe(false)
  expect(isObject(undefined)).toBe(false)
})

test('primitives are not objects', () => {
  expect(isObject("123")).toBe(false)
  expect(isObject(1)).toBe(false)
  expect(isObject(true)).toBe(false)
  expect(isObject(false)).toBe(false)
  expect(isObject(1.1)).toBe(false)
})