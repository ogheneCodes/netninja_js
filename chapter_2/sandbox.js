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
// template strings
const title = "Code with Javascript";
const author = "Ebobo";
const likes = "10";
const result = `The book titled ${title} is authoured by ${author} and has ${likes} likes`;
// document.write(result);
//creating html templates
let html = `
<p style="color: red">The book titled</p> 
<h2>${title}</h2>
is authoured by ${author} and has ${likes} likes`
document.write(html);
//Arrays 
let ninja = ['max','sixtus','chibike','terry','john'];
console.log(ninja[3]);
//overiding a position
ninja[3] = "Dan";
console.log(ninja[3]);
//arrays with some properties
console.log(ninja.join('-')); //using the join properties.
console.log(ninja.length); //using the length properties.
// let result1 = ninja.pop();//to remove the last item.
// ninja.push('Matthew');// adding an item to the array
// let result1 = ninja.shift('Dan');
// let result1 = ninja.indexOf('sixtus');  to show the index number of sixtus
// let result1 = ninja.concat('max', 'Matthew'); to add to string together.
let result1 = ninja.includes('sixtus');   //assertian if a value is inluded
console.log(result1);
// console.log(resultB);

// Boolean
let a = 1;
let b = 2;
console.log(b==='2');  //using strict comparison
console.log(b !=='2');  //using strict comparison
console.log(b !== 2);   //using strict comparison