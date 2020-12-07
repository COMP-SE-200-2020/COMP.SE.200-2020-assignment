import countBy from "../src/countBy.js"

test('Basic test with active status', () => {
    const users = [{ 'user': 'barney', 'active': true },
    { 'user': 'betty', 'active': true },
    { 'user': 'fred', 'active': false }]
    expect(countBy(users, value => value.active)).toStrictEqual({ 'true': 2, 'false': 1 })
})

test('Basic test with active status, all true', () => {
    const users = [{ 'user': 'barney', 'active': true },
    { 'user': 'betty', 'active': true },
    { 'user': 'fred', 'active': true }]
    expect(countBy(users, value => value.active)).toStrictEqual({ 'true': 3, 'false': 0 })
})


test('Testing users', () => {
    const users = [{ 'user': 'barney', 'active': true },
    { 'user': 'betty', 'active': true },
    { 'user': 'fred', 'active': true }]
    expect(countBy(users, value => value.user)).toStrictEqual({ 'barney': 1, 'betty': 1, 'fred': 1 })
})


