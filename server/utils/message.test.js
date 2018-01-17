var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate the correct message object', () => {
        var from = 'Andrew';
        var text = 'Hello guys';
        var message = generateMessage(from, text);

        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({from, text});

    });
});

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        var from = 'jen';
        var latitude = 1;
        var longitude = 2;
        var url = 'https://www.google.com/maps?q=1,2';
        var locationMessage = generateLocationMessage(from, latitude, longitude);

        expect(locationMessage).toInclude({from, url});
        expect(locationMessage.createdAt).toBeA('number');
    });
});