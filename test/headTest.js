const assert = require('chai').assert;
const head   = require('../head');

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });
});

// assertEqual(head([1,2], 1));
// assertEqual(head([4,5,6,7,8], 4));
// assertEqual(head(['hi', 'LHL'], 'hi'));

