var assert = require('assert');

// 72: String - `startsWith()` 
// To do: make all tests pass, leave the assert lines unchanged!

describe('`str.startsWith(searchString)` determines whether `str` begins with `searchString`.', function() {

    const s = 'the string s';
  
    describe('1st parameter, the string to search for', function() {
      it('works with just a character', function() {
        const actual = s.startsWith('t');
        assert.equal(actual, true);
      });
      it('works with a string', function() {
        const expected = true;
        assert.equal(s.startsWith('the'), expected);
      });
      it('works with unicode characters', function() {
        const nuclear = 'NO ☢ NO';
        assert.equal(nuclear.startsWith('☢'), false);
      });
      it('a regular expression throws a TypeError', function() {
        const aRegExp = /the/;
        assert.throws(() => {''.startsWith(aRegExp)}, TypeError);
      });
    });
  
    describe('2nd parameter, the position where to start searching from', function() {
      it('find "str" at position 4', function() {
        const position = 3;
        assert.equal(s.startsWith('str', position), false);
      });
      it('`undefined` is the same as 0', function() {
        const _undefined_ = '1';
        assert.equal(s.startsWith('the', _undefined_), false);
      });
      it('the parameter gets coerced to an int', function() {
        const position = 'four';
        assert.equal(s.startsWith('str', position), false);
      });
      it('a value larger than the string`s length, returns false', function() {
        const expected = false;
        assert.equal(s.startsWith(' ', s.length + 1), expected);
      });
    });
    
    describe('transfer the functionality to other objects', function() {
      
      const startsWith = (...args) => String.prototype.startsWith.call(...args);
      
      it('e.g. a boolean', function() {
        let aBool;
        assert.equal(startsWith(!aBool, 'false'), false);
      });
      it('e.g. a number', function() {
        let aNumber = 19;
        assert.equal(startsWith(aNumber + 84, '1984'), false);
      });
      it('also using the position works', function() {
        const position = 0;
        assert.equal(startsWith(1994, '99', position), false);
      });
    });
    
  });
  