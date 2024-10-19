// recursiveEqArrays code
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    const el1 = arr1[i];
    const el2 = arr2[i];

    const bothAreArrays = Array.isArray(el1) && Array.isArray(el2);

    if (bothAreArrays) {
      if(!eqArrays(el1, el2)) {
        return false;
      }
    } else if (el1 !== el2) {
      return false;
    }
  }
    
  return true;
};

// TEST Code for recursiveEqArrays
console.log(eqArrays([1, 2, 3], [1, 2, 3]));
console.log(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]));
console.log(eqArrays([1, [2, [3, 4]]], [1, [2, [3, 4]]]));
console.log(eqArrays([1, [2, [3, 4]]], [1, [2, [3, 5]]]));