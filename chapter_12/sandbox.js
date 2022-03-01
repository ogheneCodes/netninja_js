const getTodos = (resource, callback) => {


  return new Promise((resolve, reject) => {    //using a promise function here
    const request = new XMLHttpRequest();
    // console.log(request);

    //to track the progress of an event in async JavaScript
    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        resolve(data); //rather than callback, we use resolve
      } else if (request.readyState === 4) {
        reject('error getting resource') //rather than callback we use reject
      }
    });

    request.open("GET", resource);
    request.send();
  });
};
getTodos('todos/max.json').then(data => {
    console.log('promise resolved:', data);
}).catch((err)=>{
    console.log('promise rejected:',err);
});





// getTodos('todos/sixtus.json', (err, data) => {
//     console.log(data);
//     getTodos('todos/max.json', (err, data) => {
//         console.log(data);
//         getTodos('todos/terry.json', (err, data) => {
//             console.log(data);
//         });
//     });
// });
