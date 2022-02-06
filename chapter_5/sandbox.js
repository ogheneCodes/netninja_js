const user = {
    fname: 'max',
    lname: 'bobo',
    age: 25,
    // blog: ['richest man in Africa', 'move the beast', 'bitch money'],
    //objects in Arrays
    blogs: [
        {title: 'richest man in Nigeria', likes: 100 },
        {title: 'most sorted out', likes: 999},
    ],
    login: function(){
        console.log('just logged in');
    },
    //using 'this' keyword
    logBlog: function(){
        // console.log(`this user has read the following blogs: ${this.blog}`);

        console.log(`this user has read the following blogs:`);
        this.blogs.forEach(blogs =>{
            console.log(blogs.title +" "+"with likes of"+" "+blogs.likes);
        })
    }
}
user.login();
user.logBlog();
// console.log(`${user.fname} ${user.login()} with his age `);
console.log(user);
console.log(`${user.fname} and length is ${user.fname.length}`);
console.log(user['lname']);
console.log(this);

//Math Object
console.log(Math);
console.log("this is for Math.PI:" + Math.PI);
console.log("this is for math.LOG1E:" + Math.LOG10E);

const area = 8.99;
console.log(Math.floor(area)); //to the floor number(low)
console.log(Math.round(area)); //to the round number (high)
console.log(Math.ceil(area)); //to the round number (high)
console.log(Math.trunc(area)); //to take away the decimal and leave the interger (high)

// random numbers
const random = Math.random();
console.log(random);
console.log(Math.round(random * 100));

//primitive vs Reference Types
const userOne = {name: 'Doe', age: 20};
const userTwo = userOne;

console.log(userOne, userTwo);

userOne.name = "Maxbobo";
console.log(userOne, userTwo);