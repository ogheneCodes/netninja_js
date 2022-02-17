//building a popup
const button = document.querySelector('button');
const popwrap = document.querySelector('.popup-wrapper');
const popupclose = document.querySelector('.popup-close');

button.addEventListener('click', e=>{
    popwrap.style.display='block';
});
popupclose.addEventListener('click', e=>{
    popwrap.style.display='none';
});
popwrap.addEventListener('click', e=>{
    popwrap.style.display='none';
});
