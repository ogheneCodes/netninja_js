const copy = document.querySelector('.copy-me');

copy.addEventListener('copy', e=>{
    console.log('Oh! content is been copied');
});

const box = document.querySelector('.box');

box.addEventListener('mouseover', e=>{
    // console.log(e);
    console.log(e.offsetX, e.offsetY);
    //to write the offsetX and offsetY inside the box
    box.textContent = `x pos = ${e.offsetX}, y pos = ${e.offsetY}`;
});
document.addEventListener('wheel', e=>{
    console.log(e.pageX, e.pageY);
})
