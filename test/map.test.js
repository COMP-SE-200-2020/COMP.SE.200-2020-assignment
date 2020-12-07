import map from "../src/map"

const fn = (val, idx, arr) => {
  return val+idx+arr[idx]
} 
test('valid input, all input to iteratee are passed correctly', () => {
  const values = ["A", "B", "C"]
  const expected = ["A0A", "B1B", "C2C"]

  expect(map(values, fn)).toStrictEqual(expected)
  expect(map([], fn)).toStrictEqual([])
})

test('Will throw TypeError on invalid input', () => {
  
  expect(() => map([1,2,3], "not a function")).toThrow(TypeError)
  expect(() => map({"a": 1, "b": 2}, fn)).toThrow(TypeError)
  expect(() => map(1, fn)).toThrow(TypeError)
  expect(() => map("not an array", fn)).toThrow(TypeError)
})

test("Will accept iteratee functions with any amount of input parameters", () => {

  expect(map([1,2,3], () => {return 1})).toStrictEqual([1,1,1])
  expect(map([1,2,3], (a=1,b=1,c=1,d=1) => {return 1})).toStrictEqual([1,1,1])
})
