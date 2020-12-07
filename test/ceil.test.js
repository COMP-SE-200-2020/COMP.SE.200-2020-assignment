import ceil from "../src/ceil.js"

test('Testing how far the ceil will reach', () => {
    expect(ceil(1)).toBe(1)
    expect(ceil(1.70)).toBe(2)
    expect(ceil(1.0000000000000007)).toBe(2)
    expect(ceil(1.00000000000000007)).toBe(2)//this one fails
})

test('Invalid input of type string', () => {
    expect(ceil('Hello World')).toThrow(TypeError)
})

test('testing 1', () => {
    expect(ceil(1, -3)).toBe(1000)
})

test('testing 1.0005', () => {
    expect(ceil(1.0005, 3)).toBe(1.001)
})

