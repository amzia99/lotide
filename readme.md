# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @amzia99/lotide`

**Require it:**

`const _ = require('@amzia99/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `assertArraysEqual(arr1, arr2)`: if two arrays are equal.
- `assertEqual(actual, expected)`: if two values are equal.
- `assertObjectsEqual(obj1, obj2)`: if two objects are equal.
- `countLetters(string)`: count occurence of each letter in a string.
- `countOnly(array, itemsToCount)`: count specific element in an array.
- `eqArrays(arr1, arr2)`: compare two arrays for quality.
- `eqObjects(obj1, obj2)`: compare two objects for equality.
- `findKey(object, callback)`: return first key for callback to return truthy value.
- `findKeyByValue(object, value)`: find first key in the object for a specific function.
- `flatten(array)`: flatten nested arrray into single level array
- `head(array)`: returns first element of an array.
- `letterPositions(string)`: returns the indices of each letter in the string. return indices of each letter in the string.
- `map(array, callback)`: create new array with results calling function on every element in the original array.
- `middle(array)`: return middle element of an array. Returns the middle element(s) of an array.
- `recursiveEqArrays(arr1, arr2)`: recursive comparing two arrays for equality.
- `recursiveEqObjects(obj1, obj2)`: recursive comparing two objects for equality.
- `tail(array)`: return all array elements except the first one. 
- `takeUntil(array, callback)`: collect items from an array until the truthy value returns from the callback. 
- `without(source, itemsToRemove)`: return new array with specific elements removed from original array.
