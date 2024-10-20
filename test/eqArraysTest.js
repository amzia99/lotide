// eqArraysTest code refactored
const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual'); 


// NEW TEST CODE for eqArrays
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertEqual(eqArrays([1, [2, 3]], [1, [2, 3]]), true);
assertEqual(eqArrays([1, [2, 3]], [1, [2, 4]]), false);