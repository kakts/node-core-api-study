const assert = require('assert').strict;

assert(1, 'no')
// assert(0, 'error');


// fail because 1 !== '1'
// assert.deepStrictEqual({a: 1}, {a: '1'})
// The following objects don't have own properties
const date = new Date();
const object = {};
const fakeDate = {};
Object.setPrototypeOf(fakeDate, Date.prototype);

// AssertionError [ERR_ASSERTION]: Input A expected to strictly deep-equal input B:
// + expected - actual

// - {}
// + Date {}
// assert.deepStrictEqual(object, fakeDate);

// AssertionError [ERR_ASSERTION]: Input A expected to strictly deep-equal input B:
// + expected - actual

// - 2019-08-26T16:28:12.403Z
// + Date {}
// assert.deepStrictEqual(date, fakeDate);

// OK, because of the SameValue comparison
// assert.deepStrictEqual(NaN, NaN);

// Ok
assert.deepStrictEqual(new Number(1), new Number(1))

// Different unwrapped numbers:
// assert.deepStrictEqual(new Number(1), new Number(2))
// AssertionError [ERR_ASSERTION]: Input A expected to strictly deep-equal input B:
// + expected - actual

// - [Number: 1]
// + [Number: 2]

// OK because the object and the string are identical when unwrapped.
assert.deepStrictEqual(new String('foo'), Object('foo'));

// OK
assert.deepStrictEqual(-0, -0);

// Different zeros using the SameValue Comparison:
// assert.deepStrictEqual(0, -0);
// AssertionError [ERR_ASSERTION]: Input A expected to strictly deep-equal input B:
// + expected - actual

// - 0
// + -0


const symbol1 = Symbol();
const symbol2 = Symbol();

// OK, because it is the same symbol on both objects.
assert.deepStrictEqual({ [symbol1]: 1}, { [symbol1]: 1});

// 
// assert.deepStrictEqual({ [symbol1]: 1}, {[symbol2]: 1});
// AssertionError [ERR_ASSERTION]: Inputs identical but not reference equal:
//
// {
//   [Symbol()]: 1
// }


// assert.deepEqual(1, 2, 'test')