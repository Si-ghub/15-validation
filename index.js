const Validation = require('./js/Validation');

const v = new Validation();

console.log(v.isValidMessage('Some message'), true);
console.log(v.isValidMessage(12345), false);
console.log(v.isValidMessage('12345'), true);
console.log(v.isValidMessage(true), false);
console.log(v.isValidMessage([12, 15]), false);
console.log(v.isValidMessage([12, 15, 12]), false);


//console.log(v.isValidFirstName('Vardenis'), true);
//console.log(v.isValidLastName('Pavardenis'), true);
//console.log(v.isValidEmail('demo@excample.com'), true);
//console.log(v.isValidMessage('Some message'), true);
//console.log(v.isValidPhoneNumber(+37065954415), true);
//console.log(v.isValidMonthName('Sausis'), true);
//console.log(v.isValidMonthName('January'), true);
//console.log(v.isValidWeekdayName('Pirmadienis'), true);
//console.log(v.isValidWeekdayName('Monday'), true);
//console.log(v.isValidPersonID('39912311234'), true);
//
