import capitalize from "../src/capitalize.js"


test('Different strings',()=>{
    expect(capitalize('hello')).toBe('Hello')
    expect(capitalize('HELLO')).toBe('Hello')
    expect(capitalize('hello world')).toBe('Hello world')
    expect(capitalize('heLLo')).toBe('Hello')
    expect(capitalize('hELLO')).toBe('Hello')
})

test('A number as a input value',()=>{
    expect(capitalize(new Number(1))).toThrow(TypeError)
})

test('Empty string as an input value',()=>{
    expect(capitalize('')).toBe('')
})

test('Multiple parameters',()=>{
    expect(capitalize('hello', 'world')).toThrow(TypeError)
})


