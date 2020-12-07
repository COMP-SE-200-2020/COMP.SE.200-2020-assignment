import toInteger from "../src/toInteger"

test("converts proper values to finite numbers", () => {
  expect(toInteger([])).toBe(0)
  expect(toInteger("")).toBe(0)
  expect(toInteger(true)).toBe(1)
  expect(toInteger(false)).toBe(0)
  expect(toInteger("1.1")).toBe(1)
  expect(toInteger(1.1)).toBe(1)
  expect(toInteger(1.6)).toBe(2)
  expect(toInteger(123)).toBe(123)
  expect(toInteger(Number.MAX_VALUE)).toBe(Number.MAX_VALUE)
  expect(toInteger(Number.MIN_VALUE)).toBe(Number.MIN_VALUE)
})

test("converst infinite numbers to finite ones", () => {

  expect(toInteger(Infinity)).toBe(Number.MAX_VALUE)
  expect(toInteger(-Infinity)).toBe(-Number.MAX_VALUE)
})