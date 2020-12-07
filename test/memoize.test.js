import memoize from "../src/memoize"

const sq = x => x*x

test("memoization applies input function", () => {
  const square = memoize(sq)
  expect(square(2)).toBe(4)
  expect(square(6)).toBe(36)
  expect(square(6)).toBe(36)
})

test("cache instance can be changed at runtime", () => {
  const square = memoize(sq)
  expect(square(2)).toBe(4)
  expect(square(6)).toBe(36)
  square.cache = new Map
  expect(square(6)).toBe(36)
})

test("memoization cache can be modified", () => {

  const square = memoize(sq)
  expect(square(6)).toBe(36)
  square.cache.set(6, 16)
  expect(square(6)).toBe(16)
})

test("custom cache keys can be used", () => {
  const resolver = (...args) => "A"+args[0]
  const square = memoize(sq, resolver)
  expect(square(6)).toBe(36)
  square.cache.set("A6", 16)
  expect(square(6)).toBe(16)
})

test("won't memoize non functions", () => {
  expect(() => memoize()).toThrow(TypeError)
  expect(() => memoize([])).toThrow(TypeError)
  expect(() => memoize({})).toThrow(TypeError)
  expect(() => memoize(1)).toThrow(TypeError)
  expect(() => memoize(null)).toThrow(TypeError)
  expect(() => memoize(undefined)).toThrow(TypeError)
})