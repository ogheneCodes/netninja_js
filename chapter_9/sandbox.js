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