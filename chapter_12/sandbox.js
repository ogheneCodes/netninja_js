const getTodos = (resource, callback)=>{
    const request = new XMLHttpRequest();
// console.log(request);


//to track the progress of an event in async JavaScript
request.addEventListener('readystatechange', ()=>{
    if(request.readyState === 4 && request.status === 200){
        const data = JSON.parse(request.responseText)
        callback(undefined, data);
    }else if(request.readyState === 4){
        callback('could not fetch data', undefined);
    }
});

request.open('GET', resource);

request.send();

};

getTodos('todos/sixtus.json', (err, data) => {
    console.log(data);
    getTodos('todos/max.json', (err, data) => {
        console.log(data);
        getTodos('todos/terry.json', (err, data) => {
            console.log(data);
        });
    });
});