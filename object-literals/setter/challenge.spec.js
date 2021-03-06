var assert = require('assert');

// 67: object-literal - setter
// To do: make all tests pass, leave the assert lines unchanged!

describe('An object literal can also contain setters', () => {

    describe('defining: a setter', function() {
      it('by prefixing the property with `set` (and make it a function)', function() {
        let theX = null;
        const obj = {
          set x(newX) { theX = newX; }
        };
        
        obj.x = 'the new X';
        assert.equal(theX, 'the new X');
      });
      it('must have exactly one parameter', function() {
        let setterCalledWith = 'new value';
        const obj = {
          x(setterCalledWith) { // <<<<=== it's not a setter yet! 
            if (arguments.length === 1) {
              setterCalledWith = arguments[0];
            }
          }
        };
        
        assert.equal(obj.x = 'new value', setterCalledWith);
      });
      it('can be a computed property (an expression enclosed in `[]`)', function() {
        const publicPropertyName = 'x';
        const privatePropertyName = '_' + publicPropertyName;
        const obj = {
          [privatePropertyName]: null
          // write the complete setter to make the assert below pass :)
  
        };
        
        obj.x = 'axe';
        assert.equal(obj._x, 'axe');
      });
    });
  
    describe('working with/on the setter', function() {
    
      it('you can use `delete` to remove the property (including it`s setter)', function() {
        let setterCalled = false;
        const obj = {
          set x(param) { setterCalled = true; }
        };
        delete obj.x;
        obj.x = true;
        assert.equal(setterCalled, false);
      });
    });  
  });
  