import toFinite from "../src/toFinite"

test("converts proper values to finite numbers", () => {
  expect(toFinite([])).toBe(0)
  expect(toFinite("")).toBe(0)
  expect(toFinite(true)).toBe(1)
  expect(toFinite(false)).toBe(0)
  expect(toFinite("1.1")).toBe(1.1)
  expect(toFinite(1.1)).toBe(1.1)
  expect(toFinite(123)).toBe(123)
  expect(toFinite(Number.MAX_VALUE)).toBe(Number.MAX_VALUE)
  expect(toFinite(Number.MIN_VALUE)).toBe(Number.MIN_VALUE)
})

test("converst infinite numbers to finite ones", () => {

  expect(toFinite(Infinity)).toBe(Number.MAX_VALUE)
  expect(toFinite(-Infinity)).toBe(-Number.MAX_VALUE)
})