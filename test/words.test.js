import words from "../src/words"

test("words without pattern", () => {
  expect(words("two words")).toStrictEqual(["two", "words"])
  expect(words("two, words")).toStrictEqual(["two", "words"])
  expect(words("three, one & words")).toStrictEqual(["three", "one", "words"])
  expect(words("three, one, & words")).toStrictEqual(["three", "one", "words"])
  expect(words("one")).toStrictEqual(["one"])
  expect(words("one ")).toStrictEqual(["one"])
  expect(words("one &")).toStrictEqual(["one"])
  expect(words("one,")).toStrictEqual(["one"])
  expect(words("one, &")).toStrictEqual(["one"])
})

test("invalid input", () => {
  expect(() => words([1,2])).toThrow(TypeError)
  expect(() => words([])).toStrictEqual(TypeError)
  expect(() => words(123)).toStrictEqual(TypeError)
  expect(() => words({})).toStrictEqual(TypeError)
  expect(() => words({"a":"b"})).toStrictEqual(TypeError)
})