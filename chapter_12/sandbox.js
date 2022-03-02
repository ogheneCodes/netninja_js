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
// getTodos('todos/sixtus.json').then(data => {
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

// async & await
const getTodos = async () =>{
    const response = await fetch('todos/max.json');
    const data = await response.json();
    // console.log(data);
    return data;
};
console.log(1);
console.log(2)
getTodos()
    .then(data => console.log('resolved:', data));
console.log(3)
console.log(4)


// getTodos('todos/sixtus.json', (err, data) => {
//     console.log(data);
//     getTodos('todos/max.json', (err, data) => {
//         console.log(data);
//         getTodos('todos/terry.json', (err, data) => {
//             console.log(data);
//         });
//     });
// });
