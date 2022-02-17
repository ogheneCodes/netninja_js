//Filter Method

// const scores = [10, 20, 30, 12, 40, 80, 100, 90, 60, 70];

// const filteredScores = scores.filter((score)=>{
//     return score > 69;
// })
// console.log(scores);
// console.log(filteredScores);
// console.log(filteredScores.length);

// const users = [
//     {name: 'Max', status : true},
//     {name: 'John', status: false},
//     {name: 'kosi', status: false},
//     {name: 'Oghene', status: true},
//     {name: 'Joy', status: false},
//     {name: 'philip', status: false}
// ];
// const filterUsers = users.filter(user=>user.status)
// console.log(filterUsers);
// console.log(filterUsers.length);
 
// Map Method
 const prices = [10, 30, 40, 50, 60, 70, 80, 90, 100];
 const pricesSlash = prices.map(price =>price / 2);
 const pricesIncrease = prices.map(price=> price * 2);
console.log(prices);
 console.log(pricesSlash);
 console.log(pricesIncrease);

const products = [
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
