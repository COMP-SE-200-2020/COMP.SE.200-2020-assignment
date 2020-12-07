import keys from '../src/keys'

test('keys of an object, string or array', () => {
  expect(keys({"a":1, "b": 1, "1":1})).toStrictEqual(["a", "b", "1"].sort())

  const obj = new Object({"a": 1, "b": 1})
  expect(keys(obj)).toStrictEqual(["a", "b"])
  

  expect(keys({1:'a', 2:'b'})).toStrictEqual(["1", "2"])
  expect(keys([5,6])).toStrictEqual(["0", "1"])

  function Foo() {
    this.a = 1
    this.b = 1
  }
  Foo.prototype.c = 3
  expect(keys(new Foo)).toStrictEqual(["a", "b"])

  expect(keys([])).toStrictEqual([])
  expect(keys({})).toStrictEqual([])


  expect(keys("string")).toStrictEqual(["0","1","2","3","4","5"])
})

test('non object input will return empty array', () => {
  expect(keys(1)).toStrictEqual([])
  expect(keys(-1)).toStrictEqual([])
  expect(keys(NaN)).toStrictEqual([])
  expect(keys(null)).toStrictEqual([])
  expect(keys(undefined)).toStrictEqual([])
})
