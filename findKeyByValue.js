// assertEqual code
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// findKeyByValue code
const findKeyByValue = function(obj, val) {
  for (const key in obj) {
    if (obj[key] === val) {
      return key;
    }
  }
  return undefined;
};

// TEST code for findKeyByValue
const bestTVShowByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

assertEqual(findKeyByValue(bestTVShowByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowByGenre, "That '70s Show"), undefined);

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

// Some more test cases
assertEqual("Hello", "Hello");
assertEqual("Hello", "hello");
assertEqual(5, 5);
assertEqual(5, 10);