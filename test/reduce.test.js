import reduce from '../src/reduce'

const sumAddIndexAndFirst = (acc, val, idx, collection) => {
  return acc+val+idx+collection[0];
}

test("reduce with valid input, with accumulator", () => {
  const input = ["a","b","c"]
  const inputString = "abc"
  const inputObject = {"0":"a", "1":"b", "2":"c"}
  const expected = "xa0ab1ac2a"
  expect(reduce(input, sumAddIndexAndFirst, 'x')).toStrictEqual(expected)
  expect(reduce(inputString, sumAddIndexAndFirst, 'x')).toStrictEqual(expected)
  expect(reduce(inputObject, sumAddIndexAndFirst, 'x')).toStrictEqual(expected)
})

test("reduce with valid input, without accumulator", () => {
  const input = ["a","b","c"]
  const inputString = "abc"
  const inputObject = {"0":"a", "1":"b", "2":"c"}
  const expected = "ab1ac2a"
  expect(reduce(input, sumAddIndexAndFirst)).toStrictEqual(expected)
  expect(reduce(inputString, sumAddIndexAndFirst)).toStrictEqual(expected)
  expect(reduce(inputObject, sumAddIndexAndFirst)).toStrictEqual(expected)
})

test("invalid input iteratee should throw a TypeError", () => {
  expect(() => reduce([1,2,3], 123)).toThrow(TypeError)
  expect(() => reduce([1,2,3], NaN)).toThrow(TypeError)
  expect(() => reduce([1,2,3], null)).toThrow(TypeError)
  expect(() => reduce([1,2,3], undefined)).toThrow(TypeError)
})

test("invalid input collection should throw a TypeError", () => {
  expect(() => reduce(123, sumAddIndexAndFirst)).toThrow(TypeError)
  expect(() => reduce(NaN, sumAddIndexAndFirst)).toThrow(TypeError)
  expect(() => reduce(null, sumAddIndexAndFirst)).toThrow(TypeError)
  expect(() => reduce(undefined, sumAddIndexAndFirst)).toThrow(TypeError)
})
