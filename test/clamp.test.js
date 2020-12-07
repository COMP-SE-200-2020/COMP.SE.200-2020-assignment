import clamp from "../src/clamp.js"


test('every number is the same', () => {
    expect(clamp(1,1,1)).toBe(1)
})

test('two of the same number', () => {
    expect(clamp(2,1,1)).toBe(1)
})

test('Too many parameters', () => {
    expect(clamp(1,2,3,4)).toThrow(TypeError)
})

test('Basic test', () => {
    expect(clamp(2,1,3)).toBe(2)
})

test('Invalid input string', () => {
    expect(clamp('Hello',1,2)).toThrow(TypeError)
})

test('Invalid input array', () => {
    expect(clamp([1],2,3)).toThrow(TypeError)
})
