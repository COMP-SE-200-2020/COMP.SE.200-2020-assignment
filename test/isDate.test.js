import isDate from "../src/isDate"

test('Date object is date', () => {
  expect(isDate(new Date())).toBe(true)
  expect(isDate(new Date("2020-01-01"))).toBe(true)
  expect(isDate(new Date("123"))).toBe(true)
})

test('null and undefined are not a Date', () => {
  expect(isDate(null)).toBe(false)
  expect(isDate(undefined)).toBe(false)
})

test('int is not a date', () => {
  expect(isDate(0)).toBe(false)
  expect(isDate(1)).toBe(false)
  expect(isDate(-1)).toBe(false)
})

test('string is not a date', () => {
  expect(isDate("")).toBe(false)
  expect(isDate("2020-01-01")).toBe(false)
})

test('array is not a date', () => {
  expect(isDate([])).toBe(false)
  expect(isDate([1])).toBe(false)
  expect(isDate([new Date()])).toBe(false)
})