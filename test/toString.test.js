import toString from "../src/toString"

test("toString with various inputs", () => {
  expect(toString(null)).toBe("")
  expect(toString(undefined)).toBe("")
  expect(toString([])).toBe("")
  expect(toString([1,2,3])).toBe("1,2,3")
  expect(toString(1.1)).toBe("1.1")
  expect(toString(-0)).toBe("-0")
  expect(toString("str")).toBe("str")
})