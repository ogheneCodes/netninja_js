//timestamps
const now = new Date();
const before = new Date('February 1 2019 7:30:59');
const nowGetTime = now.getTime(); //to get timestamp
const beforeGetTime = before.getTime(); //to get timestamp
console.log(`Beforetime: ${beforeGetTime}, Nowtime: ${nowGetTime}`);

const diff = now.getTime()  - before.getTime();
console.log(`difference between present time and before time is: ${diff}`);

const mins = Math.round(diff / 1000 / 60);
const hours = Math.round(mins / 60);
const days = Math.round(hours / 24);

console.log(`mins: ${mins}, hours:${hours}, days:${days}`);
console.log(`the blog was written ${days} days ago`);

//converting timestamps into objects
const timestamps = 1645462829804;
console.log(new Date(timestamps));

//building a Digital Clock
const clock = document.querySelector('.clock');

const tick = () =>{
    const now = new Date();
    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getMinutes();

    const html = `
        <span>${h}</span>:
        <span>${m}</span>:
        <span>${s}</span>
    `;
    clock.innerHTML= html;
};
setInterval(tick, 1000);