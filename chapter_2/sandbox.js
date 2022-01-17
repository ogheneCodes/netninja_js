// Using Emojis
document.getElementById("emoji").innerHTML = "&#x1F603"+" "+"I love you";
//  let name ="max";
//  let age ="23";
//  alert(`name is age`);

// stings concatenation
let firstName = "Oghenemaga";
let lastName = "Ebobo";
let fullName = firstName + " " + lastName;
console.log(fullName);
// getting characters
console.log(fullName[14]);
// string length
console.log(fullName.length);
// string methods
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
console.log(fullName.lastIndexOf('b'));
let realName = fullName.toUpperCase();
// slice and substr methods comes with two arguments.
console.log(realName.slice(3, 10));
console.log(realName.substr(3, 10));
console.log(realName.split(2));
console.log(realName.indexOf('g'));
console.log(fullName.indexOf('g'));
console.log(firstName.indexOf('g'));
console.log(lastName.replace('E', 'O'));
// NUMBERS
let num1 = 10;
// same values
let num2 = num1 + 1;
num2++;
let num3 = num1 - 1;
num3--;
let num4 = num1 + 10;
num4+=10;
let num5 = num1 - 10;
// num5-=10;
console.log(num5);