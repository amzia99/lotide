// tailTest code
import { assert } from 'chai';
import tail from '../tail.js'; 

describe('tail', () => {
  it('returns [2, 3] for [1, 2, 3]', () => {
    const result = tail([1, 2, 3]);
    assert.deepEqual(result, [2, 3]);
 });

  it('returns an empty array for an array with one element', () => {
    const result = tail([5]);
    assert.deepEqual(result, []);
 });

  it('returns an empty array for an empty array', () => {
    const result = tail([]);
    assert.deepEqual(result, []);
 });
});

