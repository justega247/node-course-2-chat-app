const expect = require('expect');

const {isRealString} = require('./validation');

describe('isRealString', () => {
    it('should reject non-string values', () => {
        var str = 234;
        var myString = isRealString(str);

        expect(myString).toBe(false);
    });

    it('should reject string with only spaces', () => {
        var str = '  ';
        var myString = isRealString(str);

        expect(myString).toBe(false);
    });

    it('should allow strings with non-space characters', () => {
        var str = ' hello world ';
        var myString = isRealString(str);

        expect(myString).toBe(true);
    });
});