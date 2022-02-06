const article = document.querySelector('article');
console.log(article.children); //.children is to get child element
// to convert this to an array now
console.log(Array.from(article.children));

Array.from(article.children).forEach(child => {
    child.classList.add('article-element');
})
// console.log(article.classList);
const title = document.querySelector('h3');
title.classList.add('title');
console.log(title.className);
console.log(title.parentElement); //.parentElement to get the parent element
console.log(title.parentElement.parentElement);
console.log(title.previousSibling);
console.log(title.nextSibling);
console.log(title.nextElementSibling);

//Event Basics
const event1 = document.querySelector('h1');
event1.style.color="blue";

console.log(event1);
const Todo = document.getElementById('Todo');
Todo.style.color="red";

//to remove the item
const ul = document.querySelector('ul');
// ul.remove();

// const list = document.querySelectorAll('li');
// list.forEach(li => {
//     li.classList.add('liTag');
// })
// console.log(list.classList);

//addEventListener (click)

const button = document.querySelector('button');
button.addEventListener('click', () =>{
    // console.log('just clicked now');
    // alert('just clicked')

    //to add an item in the already made item in the list
// ul.innerHTML += "<li>something here</li>"

//to add using another style

const li = document.createElement('li');
li.textContent += 'write something...';
//to show below
ul.append(li); 
//to show above
// ul.prepend(li);
});


//addEventListener in action on TodoList

const items = document.querySelectorAll('li');
items.forEach(item =>{
    item.addEventListener('click', e =>{
        console.log('just clicked')
        // console.log(e.target); 
        // e.target.style.textDecoration= "line-through"; // to put a line on the text
        // e.target.remove();
    });
});

