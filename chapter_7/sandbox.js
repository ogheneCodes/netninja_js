const form = document.querySelector('.signup-form');
// const usernames = document.querySelector('#usernames');
const feedback = document.querySelector('.feedback');
const usernamePattern = /^[a-zA-Z]{6,12}$/;
const username = form.usernames.value;

form.addEventListener('submit', e=>{
    e.preventDefault(); //for the page to work without reloading
    // document.write(usernames.value);
    // console.log(usernames.value);

    //To test for validation

if(usernamePattern.test(username)){
    //feedback good info
    feedback.textContent = 'That username is valid';
    console.log(form.usernames.value);
    console.log(form.usernames.value.length);
}else{
    //feedback help info
    feedback.textContent = 'That username is not valid';
    console.log(form.usernames.value)
    console.log(form.usernames.value.length);
}
});

//Regular Expression
//note that as strings is in quote(""), Reg expression are in slash(//)
// testing RegEx


// const username = "Maxwell";
// const pattern = /^[a-z]{6,}$/;
// let result = pattern.test(username);
// // console.log(result);
// if(result){
//     console.log('RegEx passed');
// }else{
//     console.log('RegEx failed:(');
// }


//keyboard Events for live feedback
form.usernames.addEventListener('keyup', e => {
    if(usernamePattern.test(e.target.value)){
        usernames.style.color='green';
        //or use the Attribute to target your styling
        form.usernames.setAttribute('class', 'success');
        console.log('passed');
    }else{
        usernames.style.color='red';
         //or use the Attribute to target your styling
         form.usernames.setAttribute('class', 'error');
        console.log('failed')
    }
});
