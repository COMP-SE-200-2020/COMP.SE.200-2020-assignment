import add from "../src/add.js"

test('positive primitive integers', () => {
  expect(add(1,2)).toBe(3);
})

test('negative primitive integers', () => {
  expect(add(-1, -2)).toBe(-3)
})

test('positive Number types', () => {
  expect(add(new Number(123), new Number(123))).toBe(246)
})

test('mixed primitive integers', () => {
  expect(add(1, -2)).toBe(-1)
})

test('mixed Number types', () => {
  expect(add(new Number(123), new Number(-123))).toBe(0)
})

test('zeroes', () => {
  expect(add(0, 0)).toBe(0)
})

test('empty Numbers', () => {
  expect(add(new Number, new Number)).toBe(0)
})

test('primitive floats', () => {
  expect(add(1.1,2.3)).toBe(3.4);
})

test('binary floating point precision with primitive floats', () => {
  expect(add(0.1,0.2)).toBe(0.3)
})

test('binary floating point precicison using the Number type', () => {
  expect(add(new Number(0.1), new Number(0.2))).toBe(0.3)
})

test('invalid input of type array', () => {
  expect(() => add([], 2)).toThrow(TypeError)
  expect(() => add([], [])).toThrow(TypeError)
  expect(() => add([1], 2)).toThrow(TypeError)
  expect(() => add(["a"], 2)).toThrow(TypeError)
  expect(() => add([], 2)).toThrow(TypeError)
  expect(() => add([1,2,3], 2)).toThrow(TypeError)
  expect(() => add(["c","b","a"], 2)).toThrow(TypeError)
})


test('invalid input of type string', () => {
  expect(() => add("test", "strings")).toThrow(TypeError)
  expect(() => add(123, "strings")).toThrow(TypeError)
  expect(() => add("test", 123)).toThrow(TypeError)
  expect(() => add(String(1), String(23))).toThrow(TypeError)
  expect(() => add(1, String(23))).toThrow(TypeError)
  expect(() => add(String(1), 23)).toThrow(TypeError)
})

test('invalid input of null and undefined', () => {
  expect(() => add(null, null)).toThrow(TypeError)
  expect(() => add(null, undefined)).toThrow(TypeError)
  expect(() => add(undefined, null)).toThrow(TypeError)
  expect(() => add(undefined, undefined)).toThrow(TypeError)
})
