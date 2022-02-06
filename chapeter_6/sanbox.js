//querySelector && querySelectorAll
const para = document.querySelector('div.error');
console.log(para);

const paras = document.querySelectorAll('p');
paras.forEach(paras =>{
    console.log(paras);
})
console.log(paras[0]);
console.log(paras);

//getElementById
const title = document.getElementById('#title');
console.log(title);
//getElementByClass
const titles = document.getElementsByClassName('titles');
console.log(titles);
//getElementByElement
const titleE = document.getElementsByTagName('li')
console.log(titleE);
console.log(titleE[0]);

const headerTitle = document.getElementById('headerTitle');
const space = " ";
headerTitle.innerHTML += `${space}manipulation in js`;
console.log(headerTitle.innerHTML);
//adding and changing content
const thirdDiv = document.querySelector('#thirdDiv');
// console.log(thirdDiv.innerHTML);
thirdDiv.innerHTML = 'This content was changed';

//getAttribute and setAttribute
//get attribute
const link = document.querySelector('a');
console.log(link.getAttribute('href'));
console.log(link.setAttribute('href', 'wwww.facebook.com'));

const mssg = document.querySelector('p');
console.log(mssg.getAttribute('class'));
mssg.setAttribute('class', 'state');
thirdDiv.setAttribute('style', 'background-color:green');

//changing css styles
const style = document.querySelector('#style');
// document.getElementById('#style')
// style.setAttribute('style','background-color:red');
style.style.backgroundColor='yellow';
style.style.color='red';
style.borderRadius="20px";
style.width="100";
style.style.size='800px';
style.classList.add('error', 'names', 'ages'); //to add to the class list
console.log(style.classList); //classList is use to get classes of an element
style.classList.remove('ages'); //to remove
style.classList.replace('error', 'blessing');
console.log(style);
//Assignment
const assignment = document.querySelectorAll('p');
assignment.forEach(p => {
    if(p.textContent.includes('error')){
        p.classList.add('error');
    }
    if(p.innerHTML.includes('success')){
        p.classList.add('success');
    }
    if(p.innerHTML.includes('good')){
        p.classList.add('good');
    }
    if(p.innerHTML.includes('best')){
        p.classList.add('best');
    }
})
assignment.forEach(p =>{
    console.log(p.className)
})

//node relations(parent, children, siblings)

