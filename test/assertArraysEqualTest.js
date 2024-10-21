// assertArraysEqual code
const assertArraysEqual = require('../assertArraysEqual');

// assertArraysEqual test code
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);

module.exports = assertArraysEqual;