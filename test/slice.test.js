import slice from "../src/slice"

test("returns slices with proper input", () => {
  const arr = [1,2,3,4,5]
  expect(slice(arr, 0)).toStrictEqual([1,2,3,4,5])
  expect(slice(arr, 1)).toStrictEqual([2,3,4,5])
  expect(slice(arr, 0, 2)).toStrictEqual([1,2])
  expect(slice(arr, 1, 2)).toStrictEqual([2])
  expect(slice(arr, -2, 2)).toStrictEqual([])
  expect(slice(arr, -2)).toStrictEqual([4,5])
  expect(slice(arr, -2,-1)).toStrictEqual([4])
  expect(slice(arr, -5,2)).toStrictEqual([1,2])
})

test("throws type error with invalid input types", () => {
  expect(() => slice(null, 0, 1)).toThrow(TypeError)
  expect(() => slice(undefined, 0, 1)).toThrow(TypeError)
  expect(() => slice(1, 0, 1)).toThrow(TypeError)
  expect(() => slice("not an array", 0, 1)).toThrow(TypeError)
})
