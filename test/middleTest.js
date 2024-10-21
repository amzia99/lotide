// middleTest code refactored for chai 
const middle = require('../middle');
const { assert } = require('chai');

// middleTest test code for chai
describe('middle', () => {
  // odd length array
  it('should return [3] for [1, 2, 3, 4, 5]', () => {
    const result = middle([1, 2, 3, 4, 5]);
    assert.deepEqual(result, [3]);
  });
  // even length array
  it('should return [2, 3] for [1, 2, 3, 4]', () => {
    const result = middle([1, 2, 3, 4]);
    assert.deepEqual(result, [2, 3]); 
  });
  // array 2 elements
  it('should return [] for [1, 2]', () => {
    const result = middle([1, 2]);
    assert.deepEqual(result, []); 
  });
  // empty array
  it('should return [] for []', () => {
    const result = middle([]);
    assert.deepEqual(result, []); 
  });
});