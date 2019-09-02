const generator = require('../js/randomNumberGenerator.js');

test('generates a positive number', () => {
  expect(generator()).toBeGreaterThanOrEqual(0);
});

test('generates a specific number by range', () => {
  expect(generator(6543,6543)).toBe(6543);
});
