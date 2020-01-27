const fasterFlattenDeep = require('./faster-flatten-deep');

test('takes a simple nested array and return a flattened array', () => {
	expect(fasterFlattenDeep( [ 1, [ 2, [ 3 ] ], 4 ])).toStrictEqual([1,2,3,4]);
});

test('takes a more complex nested array and return a flattened array', () => {
	expect(fasterFlattenDeep( [ 1, [ 2, [ 3 ] ], 4, [[5, [6, 7]],[[[[[8]]]]]] ])).toStrictEqual([1,2,3,4,5,6,7,8]);
});
