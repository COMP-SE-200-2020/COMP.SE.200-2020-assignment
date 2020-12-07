import isLenght from '../src/isLength'

test('zero value / positive non overflowing integers are lengths', () => {
  expect(isLenght(0)).toBe(true)
  expect(isLenght(1)).toBe(true)
  expect(isLenght(Number.MAX_SAFE_INTEGER)).toBe(true)
})

test('negative and too large integers are not lengths', () => {
  expect(isLenght(Infinity)).toBe(false)
  expect(isLenght(Number.MAX_SAFE_INTEGER+1)).toBe(false)
  expect(isLenght(-1)).toBe(false)
})

test('NaN, null and undefined are not lengths', () => {
  expect(isLenght(null)).toBe(false)
  expect(isLenght(undefined)).toBe(false)
  expect(isLenght(NaN)).toBe(false)
})

test('arrays and strings are not lenghts', () => {
  expect(isLenght([])).toBe(false)
  expect(isLenght([1])).toBe(false)
  expect(isLenght("")).toBe(false)
  expect(isLenght("1")).toBe(false)
})
