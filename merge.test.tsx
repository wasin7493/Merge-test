// merge.test.ts
import { merge } from './merge';

describe('merge', () => {
  it('should merge two sorted collections', () => {
    const collection1 = [1, 3, 5];
    const collection2 = [2, 4, 6];
    const merged = merge(collection1, collection2);
    expect(merged).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it('should merge when one collection is empty', () => {
    const collection1 = [];
    const collection2 = [1, 2, 3];
    const merged = merge(collection1, collection2);
    expect(merged).toEqual([1, 2, 3]);
  });

  it('should merge when both collections are empty', () => {
    const collection1 = [];
    const collection2 = [];
    const merged = merge(collection1, collection2);
    expect(merged).toEqual([]);
  });
});

