import isObjectLike from '../src/isObject'

test('valid objects are objectLikes', () => {
  expect(isObjectLike(new Date())).toBe(true)
  expect(isObjectLike(new Number(1))).toBe(true)
  expect(isObjectLike(new String("123"))).toBe(true)
  expect(isObjectLike(new Object())).toBe(true)
  expect(isObjectLike({})).toBe(true)
  expect(isObjectLike({"a": 1})).toBe(true)
  expect(isObjectLike([])).toBe(true)
  expect(isObjectLike([1,2,3])).toBe(true)
  expect(isObjectLike(/.*/)).toBe(true)
  expect(isObjectLike(() => {})).toBe(true)
})

test('behaves as documented', () => {
  expect(isObjectLike(Function)).toBe(false)
})

test('NaN, null and undefined are not objectLikes',  () => {
  expect(isObjectLike(NaN)).toBe(false)
  expect(isObjectLike(null)).toBe(false)
  expect(isObjectLike(undefined)).toBe(false)
})

test('primitives are not objectLikes', () => {
  expect(isObjectLike("123")).toBe(false)
  expect(isObjectLike(1)).toBe(false)
  expect(isObjectLike(true)).toBe(false)
  expect(isObjectLike(false)).toBe(false)
  expect(isObjectLike(1.1)).toBe(false)
})
