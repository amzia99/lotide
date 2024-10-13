// map function 
const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
}
  return results;
};

// eqArrays code
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

// assertArraysEqual code
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// map test code
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, (word) => word[0]);
assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);

const numbers = [1, 2, 3, 4, 5];
const results2 = map(numbers, (num) => num * 2);
assertArraysEqual(results2, [2, 4, 6, 8, 10]);

const boolArray = [true, false, true];
const results3 = map(boolArray, (bool) => !bool);
assertArraysEqual(results3, [false, true, false]);



