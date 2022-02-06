const name = 'maxwell';

//function
const greeting = () => "hello there!";
let greet = greeting
console.log(greet);

// alert(greeting);

//method
let resultName1 = name.toUpperCase();
console.log(resultName1);

//foreach && callback function
let people = ['max', 'tosin', 'yemi', 'dan', 'sixtus'];
//long method
people.forEach(function(person){
    console.log(person);
    console.log(person.length);
})
//short method using arrow

//get a reference to the 'ul'
const ul = document.querySelector('.people1');
const people1 = ['mario', 'yemi', 'chike'];
let html =``;
people1.forEach(people1 =>{
    //create html template
    html += `<li style="color: purple">${people1}</li>`;
});
console.log(html);
// ul.innerHTML = html;
