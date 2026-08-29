const { test } = require('node:test');
const assert = require('node:assert');
const lib = require('../src/index.js');
test('returns 42', () => assert.strictEqual(lib(), 42));
