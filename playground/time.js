const moment = require('moment');

var createdAt = 1235;
var date = moment(createdAt);
// date.add(100,'y');
// console.log(date.format('MMM Do, YYYY'));

var someTimestamp = moment().valueOf();
console.log(someTimestamp);

console.log(date.format('h:mm a'));