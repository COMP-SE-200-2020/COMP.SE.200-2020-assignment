import chunk from "../src/chunk.js"

test('Basic test', () => {
    expect(chunk(['a', 'b', 'c', 'd'], 2)).toStrictEqual([['a', 'b'], ['c', 'd']])
})

test('size set larger than length of array', () => {
    expect(chunk(['a', 'b', 'c', 'd'], 5)).toStrictEqual([['a', 'b', 'c', 'd']])
})

test('size not set', () => {
    expect(chunk(['a', 'b', 'c', 'd'])).toStrictEqual([['a'], ['b'], ['c'],['d']])
})

test('size is a float', () => {
    expect(chunk(['a', 'b', 'c', 'd'], 1.5 )).toStrictEqual([['a', 'b'], ['c', 'd']])
})

test('array is empty', () => {
    expect(chunk([], 3 )).toStrictEqual([])
})

