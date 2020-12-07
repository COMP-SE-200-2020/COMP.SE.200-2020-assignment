import defaultToAny from "../src/defaultToAny.js"


test('Basic test', () => {
    expect(defaultToAny(1, 10, 20)).toBe(1)
})

test('testing with undefined, null and nan', () => {
    expect(defaultToAny(undefined, 10, 20)).toBe(10)
    expect(defaultToAny(null, 10, 20)).toBe(10)
    expect(defaultToAny(NaN, 10, 20)).toBe(10)
})

test('4 parameters', () => {
    expect(defaultToAny(null, undefined, null, 3)).toBe(3);
})

test('only null', () => {
    expect(defaultToAny(null)).toBe(null);
})