import at from "../src/at.js"

test('positive primitive integers', () => {
    const object = { 'a': [{ 'b': { 'c': 3 } }, 4] }
    expect(at(object, ['a[0].b.c', 'a[1]'])).toStrictEqual([3, 4]);
})
  
test('positive primitive integers', () => {
    const object = { 'a': [{ 'b': { 'c': null } }, 4] }
    expect(at(object, ['a[0].b.c', 'a[1]'])).toStrictEqual([null,4]);
})

test('positive primitive integers', () => {
    expect(at(new Number(1), ['a[0]'])).toThrow(TypeError);
})

