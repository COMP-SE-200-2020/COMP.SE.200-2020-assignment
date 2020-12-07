import compact from "../src/compact.js"


test('one false in array', () => {
    expect(compact([0,1,2,'hello', false])).toStrictEqual([0,1,2,'hello'])
})


test('only false in array', () => {
    expect(compact([false])).toStrictEqual([])
})


test('wrong input ', () => {
    expect(compact(new Number(1))).toThrow(TypeError)
})


