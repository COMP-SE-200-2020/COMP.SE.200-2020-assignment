import words from "..src/words"

test("words without pattern", () => {
  expect(words("two words")).toStrictEqual(["two", "words"])
  expect(words("two, words")).toStrictEqual(["two", "words"])
  expect(words("three, one & words")).toStrictEqual(["two", "words"])
  expect(words("three, one, & words")).toStrictEqual(["two", "words"])
  expect(words("one")).toStrictEqual(["one"])
  expect(words("one ")).toStrictEqual(["one"])
  expect(words("one &")).toStrictEqual(["one"])
  expect(words("one,")).toStrictEqual(["one"])
  expect(words("one, &")).toStrictEqual(["one"])
})

test("invalid input", () => {
  expect(words([1,2])).toStrictEqual([])
  expect(words([])).toStrictEqual([])
  expect(words(123)).toStrictEqual([])
  expect(words({})).toStrictEqual([])
  expect(words({"a":"b"})).toStrictEqual([])
})