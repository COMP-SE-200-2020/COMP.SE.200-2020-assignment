import castArray from "../src/castArray.js"

test('Basic test', () => {
    expect(castArray(2)).toStrictEqual([2])
})

test('array as an input value', () => {
    expect(castArray([1,2,3])).toStrictEqual([1,2,3])
})

test('null as an input value', () => {
    expect(castArray(null)).toStrictEqual([null])
})

