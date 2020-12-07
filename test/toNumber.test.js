import toNumber from "../src/toNumber"

test("converts proper values to finite numbers", () => {
  expect(toNumber([])).toBe(0)
  expect(toNumber("")).toBe(0)
  expect(toNumber(true)).toBe(1)
  expect(toNumber(false)).toBe(0)
  expect(toNumber("1.1")).toBe(1.1)
  expect(toNumber(1.1)).toBe(1.1)
  expect(toNumber(1.6)).toBe(1.6)
  expect(toNumber(123)).toBe(123)
  expect(toNumber(Number.MAX_VALUE)).toBe(Number.MAX_VALUE)
  expect(toNumber(Number.MIN_VALUE)).toBe(Number.MIN_VALUE)
  expect(toNumber(Infinity)).toBe(Infinity)
  expect(toNumber(-Infinity)).toBe(-Infinity)
})