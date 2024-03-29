// const getTodos = (resource, callback) => {


//   return new Promise((resolve, reject) => {    //using a promise function here
//     const request = new XMLHttpRequest();
//     // console.log(request);

//     //to track the progress of an event in async JavaScript
//     request.addEventListener("readystatechange", () => {
//       if (request.readyState === 4 && request.status === 200) {
//         const data = JSON.parse(request.responseText);
//         resolve(data); //rather than callback, we use resolve
//       } else if (request.readyState === 4) {
//         reject('error getting resource') //rather than callback we use reject
//       }
//     });

//     request.open("GET", resource);
//     request.send();
//   });
// };

// chaining promises
// getTodos('todos/sixties.json').then(data => {
//     console.log('promise 1 resolved:', data);
//     return getTodos('todos/max.json');
// }).then(data =>{
//     console.log('promise 2 resolve:', data);
//     return getTodos('todos/terry.json');
// }).then(data =>{
//     console.log('promise 3 resolved:', data);
// }).catch(err=>{
//     console.log('promise rejected:',err);
// });

// chaining promise using fetch API
// fetch('todos/max.json').then((response)=>{
//     console.log('resolved 1:', response);
//     return response.json();
// }).then(data=>{
//     console.log(data);
    
//     }).catch((err)=>{
//     console.log('rejected:', err);
// });

// Throwing and catching Errors
const getTodos = async () =>{
    const response = await fetch('todos/max.json');
    
    if(response.status !== 200){
        throw new Error('can not fetch the data'); // throw new Error() is use to define our own error
    }
    const data = await response.json();
    // console.log(data);
    return data;
};
getTodos()
    .then(data => console.log('resolved:', data)).catch((err)=>{
        console.log('rejected', err.message)
    });


getTodos('todos/sixtus.json', (err, data) => {
    console.log(data);
    getTodos('todos/max.json', (err, data) => {
        console.log(data);
        getTodos('todos/terry.json', (err, data) => {
            console.log(data);
        });
    });
});
