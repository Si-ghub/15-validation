const Validation = require('./js/Validation');

const v = new Validation();

//TESTAI 

//IS VALID MESSAGE
console.log(v.isValidMessage('Some message'), true);
console.log(v.isValidMessage(12345), false);
console.log(v.isValidMessage('12345'), true);
console.log(v.isValidMessage(true), false);
console.log(v.isValidMessage([12, 15]), false);
console.log(v.isValidMessage([12, 15, 12]), false);

//IS VALID FIRST NAME
console.log(v.isValidFirstName('Vardenis'), true);
console.log(v.isValidFirstName('Pavardenis'), false);
console.log(v.isValidFirstName('12345'), false);
console.log(v.isValidFirstName(''), false);
console.log(v.isValidFirstName([]), false);
console.log(v.isValidFirstName('P'), false);
console.log(v.isValidFirstName('Sigita'), true);
console.log(v.isValidFirstName('sigita'), false);
console.log(v.isValidFirstName('siGita'), false);



//IS VALID LAST NAME
console.log(v.isValidLastName('Pavardenis'), true);
console.log(v.isValidLastName('Vardenis'), false);
console.log(v.isValidLastName('12345'), false);
console.log(v.isValidLastName(''), false);
console.log(v.isValidLastName([]), false);
console.log(v.isValidLastName('Sigita'), true);
console.log(v.isValidLastName('sigita'), false);
console.log(v.isValidLastName('siGita'), false);










//IS VALID PHONE NUMBER
console.log(v.isValidPhoneNumber(+37065954415), true);




//console.log(v.isValidFirstName('Vardenis'), true);
//console.log(v.isValidLastName('Pavardenis'), true);
//console.log(v.isValidEmail('demo@excample.com'), true);
//console.log(v.isValidMessage('Some message'), true);
//console.log(v.isValidPhoneNumber(+37065954415), true);
//console.log(v.isValidMonthName('Sausis', 'kalba'), true);
//console.log(v.isValidMonthName('January, 'kalba'), true);
//console.log(v.isValidWeekdayName('Pirmadienis'), true);
//console.log(v.isValidWeekdayName('Monday'), true);
//console.log(v.isValidPersonID('39912311234'), true);

