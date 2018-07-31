var expect = require('chai').expect;
var names = require('./index');


describe('names', function() {
    it('should work', function() {
        expect(true).to.be.true;
    });

    describe('all', function() {
        it('should be an array of strings', function() {
            expect(names.all).to.satisfy(isArrayOfStrings);

            function isArrayOfStrings(array) {
                return array.every(function(item) {
                    return typeof item === 'string';
                });
            }
        });

        it('should contain bmac', function() {
            expect(names.all).to.include('bmac');
        })
    })

    describe('random', function() {
        it('should return a random name', function() {
            var randomName = names.random();

            expect(names.all).to.include(randomName);
        })
    })

})

