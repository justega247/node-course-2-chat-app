var socket = io();

socket.on('connect', function () {
    console.log('Connected to server');

    // socket.emit('createEmail', {
    //     to: 'joe@example.com',
    //     text: 'Joe how far?'
    // });

    socket.emit('createMessage', {
        from: 'Othello',
        text: 'Arise oh sleeping giants'
    })
});
            
socket.on('disconnect', function () {
    console.log('Disconnected from server');
});

// socket.on('newEmail', function (email) {
//     console.log('New email', email);
// });

socket.on('newMessage', function (message) {
    console.log('Got a new message', message);
});