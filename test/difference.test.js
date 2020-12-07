import difference from "../src/difference.js"

test('basic test', () => {
    expect(difference([2, 1], [2, 3])).toBe([1]);
})

test('Basic test with null', () => {
    expect(difference([null],[0])).toBe([null,0]);
})

test('Invalid input', () => {
    expect(difference(new Number(1))).toThrow(TypeError);
})

test('array of strings', () => {
    expect(difference(['a','b'],['a','c'])).toBe(['b']);
})

test('differen sized arrays', () => {
    expect(difference([1,2,3,4],[1,2])).toBe([3,4]);
})

