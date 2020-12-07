import upperFirst from '../src/upperFirst'

test("upperFirst with various inputs", () => {
  expect(upperFirst("up")).toBe("Up")
  expect(upperFirst("Up")).toBe("Up")
  expect(upperFirst("UP")).toBe("UP")
})

test("invalid inputs", () => {
  expect(() => upperFirst([])).toThrow(TypeError)
  expect(() => upperFirst(123)).toThrow(TypeError)
  expect(() => upperFirst({})).toThrow(TypeError)
})
