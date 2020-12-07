import isTypedArray from '../src/isTypedArray'

test('Typed arrays are typed arrays', () => {
  expect(isTypedArray(new Uint8Array([1,2,3]))).toBe(true)
  expect(isTypedArray(new Uint8Array())).toBe(true)
  expect(isTypedArray(new Uint8ClampedArray())).toBe(true)
  expect(isTypedArray(new Int8Array())).toBe(true)
  expect(isTypedArray(new Int16Array())).toBe(true)
  expect(isTypedArray(new Int32Array())).toBe(true)
  expect(isTypedArray(new Float32Array())).toBe(true)
  expect(isTypedArray(new Float64Array())).toBe(true)
  expect(isTypedArray(new BigInt64Array())).toBe(true)
  expect(isTypedArray(new BigUint64Array())).toBe(true)
})

test('Subtypes are typed arrays', () => {
  expect(isTypedArray(Buffer.from('123'))).toBe(true)
})

test('arrays and objects are not typed arrays', () => {
  expect(isTypedArray([])).toBe(false)
  expect(isTypedArray([1,2])).toBe(false)
  expect(isTypedArray({})).toBe(false)
  expect(isTypedArray({1:2})).toBe(false)
  expect(isTypedArray(new Array())).toBe(false)
})

test('NaN, null and undefined are not typed array',  () => {
  expect(isTypedArray(NaN)).toBe(false)
  expect(isTypedArray(null)).toBe(false)
  expect(isTypedArray(undefined)).toBe(false)
})

test('primitives are not typed array', () => {
  expect(isTypedArray("123")).toBe(false)
  expect(isTypedArray(1)).toBe(false)
  expect(isTypedArray(true)).toBe(false)
  expect(isTypedArray(false)).toBe(false)
  expect(isTypedArray(1.1)).toBe(false)
})
