import isBuffer from '../src/isBuffer'

test('Buffer is a buffer', () => {
  expect(isBuffer(Buffer.from("123"))).toBe(true)
})

test('ArrayBuffer is not a buffer', () => {
  expect(isBuffer(new ArrayBuffer(5))).toBe(false)
})

test('array is not a buffer', () => {
  expect(isBuffer([])).toBe(false)
  expect(isBuffer([1,2,3])).toBe(false)
})

test('null and undefined are not a buffer', () => {
  expect(isBuffer(null)).toBe(false)
  expect(isBuffer(undefined)).toBe(false)
})