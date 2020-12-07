import isSymbol from '../src/isSymbol'

test('valid Symbols are Symbols', () => {

  expect(isSymbol(Symbol())).toBe(true)
  expect(isSymbol(Symbol.iterator)).toBe(true)
})

test('object symbols are symbols', () => {
  const s = Symbol()
  const obj = Object(s)

  expect(isSymbol(obj)).toBe(true)
})

test('NaN, null and undefined are not Symbols',  () => {
  expect(isSymbol(NaN)).toBe(false)
  expect(isSymbol(null)).toBe(false)
  expect(isSymbol(undefined)).toBe(false)
})

test('primitives are not Symbols', () => {
  expect(isSymbol("123")).toBe(false)
  expect(isSymbol(1)).toBe(false)
  expect(isSymbol(true)).toBe(false)
  expect(isSymbol(false)).toBe(false)
  expect(isSymbol(1.1)).toBe(false)
})
