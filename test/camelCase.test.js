import camelCase from "../src/camelCase.js"


test('--Hello-- tested',()=>{
    expect(camelCase('--Hello--')).toBe('hello')
})

test('--Hello--World-- tested',()=>{
    expect(camelCase('--Hello--World--')).toBe('helloWorld')
})

test('--hello--world-- tested',()=>{
    expect(camelCase('--hello--world--')).toBe('helloWorld')
})

test('Hello World tested',()=>{
    expect(camelCase('Hello World')).toBe('helloWorld')
})

test('--HELLO-- tested',()=>{
    expect(camelCase('--HELLO--')).toBe('hello')
})

test('HELLO--WORLD-- tested',()=>{
    expect(camelCase('HELLO--WORLD--')).toBe('helloWorld')
})

test('invalid input number',()=>{
    expect(camelCase(new Number(1))).toThrow(TypeError)
})

test('too many parameters',()=>{
    expect(camelCase('hello','world')).toThrow(TypeError)
})

test('Foo Bar tested', () => {
    expect(camelCase('Foo Bar')).toBe('fooBar');
})

test('--foo-bar-- tested', () => {
    expect(camelCase('--foo-bar--')).toBe('fooBar');
})

test('__FOO_BAR__ tested', () => {
    expect(camelCase('__FOO_BAR__')).toBe('fooBar');
})