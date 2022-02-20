//Filter Method
const scores = [10, 20, 30, 12, 40, 80, 100, 90, 60, 70];


const filteredScores = scores.filter((score)=>{
    return score > 69;
})
console.log(scores);
console.log(filteredScores);
console.log(filteredScores.length);

const users = [
    {name: 'Max', status : true},
    {name: 'John', status: false},
    {name: 'kosi', status: false},
    {name: 'Oghene', status: true},
    {name: 'Joy', status: false},
    {name: 'philip', status: false}
];
const filterUsers = users.filter(user=>user.status)
console.log(filterUsers);
console.log(filterUsers.length);
 
// Map Method
 const prices = [10, 30, 40, 50, 60, 70, 80, 90, 100];
 const pricesSlash = prices.map(price =>price / 2);
 const pricesIncrease = prices.map(price=> price * 2);
console.log(prices);
 console.log(pricesSlash);
 console.log(pricesIncrease);

const products = [  //this date is also used in the chaining method
    {name: 'gold star', price: 35},
    {name: 'mushroom', price: 40},
    {name: 'green pills', price: 50},
    {name: 'banana skin', price: 90},
    {name: 'red shells', price: 30}
];

const salesProduct = products.map((product)=>{
    if(product.price > 35){
        return {name: product.name, name: product.price / 2};
    }else{
        return product;
    };
});
console.log(salesProduct);

// reduce method
let sum = scores.reduce((accumulator, currentValue)=>{
    return accumulator + currentValue;
}, 0);

// another reduce method
const scores2 = [
    {player: 'max', score: 50},
    {player: 'moses', score: 30},
    {player: 'james', score: 40},
    {player: 'john', score: 10},
    {player: 'max', score: 50},
    {player: 'moses', score: 30},
    {player: 'james', score: 40},
    {player: 'john', score: 10},
];
const maxTotal = scores2.reduce((accumulator, currentValue)=>{
   if(currentValue.player === 'max'){
        accumulator+=currentValue.score;
   }
    return accumulator;

}, 0);
console.log(maxTotal);

//Find Method
const scores3 = [20, 30, 40, 11, 32, 19, 50, 60, 70, 80, 100];
const firstScores3 = scores3.find(score=> score > 20);
console.log(firstScores3);

//Sort Method
const score4 = [20, 30, 40, 50, 60, 70];
const score5 = ['max', 'john', 'sixtus', 'lorry', 'terry'];

score4.sort((a, b)=> b-a);
// score4.sort(); //sort() method sorts the elements of an array in place and returns the sorted array.
// score4.reverse(); //The reverse() method reverses an array in place. The first array element becomes the last, and the last array element becomes the first
score5.sort();
score5.reverse()
console.log('for sorting and reverse')
console.log(score4)
console.log(score5)

const players2 = [
    {player: 'max', score: 50},
    {player: 'moses', score: 30},
    {player: 'james', score: 40},
    {player: 'john', score: 10},
    {player: 'max', score: 50},
    {player: 'moses', score: 30},
    {player: 'james', score: 40},
    {player: 'john', score: 10},
];
// players2.sort((a, b)=>{
//     if(a.score > b.score){
//         return -1
//     }else if(b.score > a.score){
//         return 1;
//     }else{
//         return 0;
//     }
// });
// players2.reverse(); 
console.log(players2);
console.log('using short method');// short sort method
players2.sort((a, b)=>a.score - b.score);
console.log(players2);


// chaining arrays and methods
const promos = products  //we want to give promo price to product price greater than 20
    .filter(product => product.price > 20)
    .map(product => `the ${product.name} is ${product.price / 2} pounds`);


// another method to chain arrays but longer way

// filtered = products.filter(product => product.price > 20);

// const promos = filtered.map(product=>{
//     return `the ${product.name} is ${product.price / 2} pounds`;
// });

console.log(promos);