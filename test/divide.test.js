import divide from "../src/divide.js"

test('basic test', () => {
    expect(divide(6, 4)).toBe(1.5);
})

test('try to divide with string', () => {
    expect(divide('a', 'b')).toThrow(TypeError);
})

test('try to divide with zero', () => {
    expect(divide(6, 0)).toBe(0);
})

test('try to divide zero with zero', () => {
    expect(divide(0, 0)).toBe(0);
})
