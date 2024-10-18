// assertEqual code
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// recursiveeqObjects code
const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    const val1 = object1[key];
    const val2 = object2[key];

    if (Array.isArray(val1) && Array.isArray(object2(val2))) {
      if (!eqArrays(val1, val2)) 
        return false;
    }
   else if (typeof val1 === 'object' && val1 !== null && typeof val2 === 'object' && val2 !== null) {
    if (!eqObjects(val1, val2)) return false;
   }
   else if (val1 !== val2) {
    return false;
  }
}
  return true;
};

// TEST code for recursiveeqObjects
const obj1 = { a: { z: 1 }, b: 2 };
const obj2 = { a: { z: 1 }, b: 2 };
assertEqual(eqObjects(obj1, obj2), true); // ✅

const obj3 = { a: { y: 0, z: 1 }, b: 2 };
const obj4 = { a: { z: 1 }, b: 2 };
assertEqual(eqObjects(obj3, obj4), false); // 🛑

const nestedObj1 = { a: { b: { c: { d: 5 } } } };
const nestedObj2 = { a: { b: { c: { d: 5 } } } };
assertEqual(eqObjects(nestedObj1, nestedObj2), true); // ✅

const nestedObj3 = { a: { b: { c: { d: 5 } } } };
const nestedObj4 = { a: { b: { c: { d: 6 } } } };
assertEqual(eqObjects(nestedObj3, nestedObj4), false); // 🛑

console.log("Recursive tests passed");