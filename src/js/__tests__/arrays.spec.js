const map = require('../arrays');

describe('Array functions', () => {
  describe('map()', () => {
    it('should return new array edited by callback', () => {
      expect(map([1, 2, 3], (item) => item * 3)).toStrictEqual([3, 6, 9]);
    })
  })
});
