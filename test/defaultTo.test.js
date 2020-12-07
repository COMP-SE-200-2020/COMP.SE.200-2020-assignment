import defaultTo from "../src/defaultTo.js"

test('Testing with numbers', () => {
    expect(defaultTo(Number(1), Number(2))).toBe(1)
    expect(defaultTo(Number(2), Number(1))).toBe(2)
})

test('first parameter as a undefined', () => {
    expect(defaultTo(undefined, Number(2))).toBe(2)
})

test('first parameter as a null', () => {
    expect(defaultTo(null, Number(1))).toBe(1)
})

test('first parameter as a NaN', () => {
    expect(defaultTo(NaN, Number(1))).toBe(1)
})

test('first and second parameter as a undefined, null and NaN', () => {
    expect(defaultTo(undefined, undefined)).toBe(undefined)
    expect(defaultTo(null, null)).toBe(null)
    expect(defaultTo(NaN, NaN)).toBe(NaN)
})
