const Validation = require('./js/Validation');

const v = new Validation();

//TESTAI 

//IS VALID MESSAGE
console.assert(v.isValidMessage('Some message') === true, 'ERROR');
console.assert(v.isValidMessage(12345) === true, 'ERROR');
console.assert(v.isValidMessage('12345') === true, 'ERROR');
console.assert(v.isValidMessage('') === true, 'ERROR');
console.assert(v.isValidMessage([12, 15]), false);
console.assert(v.isValidMessage([12, 15, 12]), false);

//IS VALID FIRST NAME
console.assert(v.isValidFirstName('Vardenis') === true, 'ERROR');
console.assert(v.isValidFirstName('Pavardenis') === true, 'ERROR');
console.assert(v.isValidFirstName('12345') === true, 'ERROR');
console.assert(v.isValidFirstName('') === true, 'ERROR');
console.assert(v.isValidFirstName([]) === true, 'ERROR');
console.assert(v.isValidFirstName('P') === true, 'ERROR');
console.assert(v.isValidFirstName('Sigita') === true, 'ERROR');
console.assert(v.isValidFirstName('sigita') === true, 'ERROR');
console.assert(v.isValidFirstName('siGita') === true, 'ERROR');

//IS VALID LAST NAME
console.assert(v.isValidLastName('Pavardenis') === true, 'ERROR');
console.assert(v.isValidLastName('Vardenis') === true, 'ERROR');
console.assert(v.isValidLastName('12345') === true, 'ERROR');
console.assert(v.isValidLastName('') === true, 'ERROR');
console.assert(v.isValidLastName([]) === true, 'ERROR');
console.assert(v.isValidLastName('Sigita') === true, 'ERROR');
console.assert(v.isValidLastName('sigita') === true, 'ERROR');
console.assert(v.isValidLastName('siGita') === true, 'ERROR');










//IS VALID PHONE NUMBER
console.assert(v.isValidPhoneNumber(+37065954415) === true, 'ERROR');




//console.assert(v.isValidFirstName('Vardenis') === true, 'ERROR');
//console.assert(v.isValidLastName('Pavardenis') === true, 'ERROR');
//console.assert(v.isValidEmail('demo@excample.com') === true, 'ERROR');
//console.assert(v.isValidMessage('Some message') === true, 'ERROR');
//console.assert(v.isValidPhoneNumber(+37065954415) === true, 'ERROR');
//console.assert(v.isValidMonthName('Sausis', 'kalba') === true, 'ERROR');
//console.assert(v.isValidMonthName('January, 'kalba') === true, 'ERROR');
//console.assert(v.isValidWeekdayName('Pirmadienis') === true, 'ERROR');
//console.assert(v.isValidWeekdayName('Monday') === true, 'ERROR');
//console.assert(v.isValidPersonID('39912311234') === true, 'ERROR');

