import isBoolean from "../src/isBoolean.js"

test('true and false are boolean values', () => {
  expect(isBoolean(false)).toBe(true)
  expect(isBoolean(true)).toBe(true)
})

test('Boolean objects are boolean values', () => {
  expect(isBoolean(new Boolean(true))).toBe(true)
  expect(isBoolean(new Boolean(false))).toBe(true)
})

test('int to not be a boolean value', () => {
  expect(isBoolean(0)).toBe(false)
  expect(isBoolean(1)).toBe(false)
  expect(isBoolean(-1)).toBe(false)
})

test('string to not be a boolean value', () => {
  expect(isBoolean("")).toBe(false)
  expect(isBoolean("true")).toBe(false)
  expect(isBoolean("false")).toBe(false)
  expect(isBoolean("test")).toBe(false)
})

test('array to not be a boolean value', () => {
  expect(isBoolean([])).toBe(false)
  expect(isBoolean([1])).toBe(false)
  expect(isBoolean([true])).toBe(false)
  expect(isBoolean([false])).toBe(false)
  expect(isBoolean([1,2,3])).toBe(false)
})

test('null and undefined not to be a boolean value', () => {
  expect(isBoolean(null)).toBe(false)
  expect(isBoolean(undefined)).toBe(false)
})