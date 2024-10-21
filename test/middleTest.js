// middleTest code
const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

// middleTest test code
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);