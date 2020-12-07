import drop from "../src/drop.js"

test('Basic tests', () => {
    expect(drop([1, 2, 3])).toBe([2, 3])
    expect(drop([1, 2, 3], 2)).toBe([3])
    expect(drop([1, 2, 3], 5)).toBe([])
    expect(drop([1, 2, 3], 0)).toBe([1, 2, 3])
})

