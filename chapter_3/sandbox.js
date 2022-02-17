//for loops
for(let i = 0; i < 5; i++){
    document.write('i in for loop is less than:', i + "<br><br>")
}

// const names = ['max', 'sixtus', 'chibike', 'Terry'];
// // using for_loop
//  for(e=0; e < name.length; e++){
//     let html = `<div>my name is ${name[e]}</div>`
//     document.write(html);
//  }
 //using while_loops
// let e = 0;
// while(e < name.length){
    // document.write(name[e]);
    // console.log(`${name[e]}`);
// e++;
// }

// if statements
const ninja = ['Oghene', 'joy', 'Suo', 'vivian'];
if(ninja.length == 5){
    console.log(`${ninja}`);
}else{
    console.log("ninjas does not exit");
}
//Logical operators using OR ||, AND &&
 const schools = ["UNN", "Delsu", "ABU","school" ];
 const churches = ["Winners", "CAC", "JW"];
 const schoolL = schools.length;
 const churcheL = churches.length;
 const total = schoolL +  churcheL;
//  console.log(`The total num is ${churcheL}`);
 if(churcheL > 2){
     console.log(`Total: ${churches} is  above 2 `);
 }
 else(
     console.log(`Total: ${total} is below 2`) 
 );
//  Logical Not
console.log("True here is now:"+ !true); //to be false
console.log("False here is now:"+!false) ; //to be true
// break and continue
const scores =[40, 30, 20, 0, 50, 80, 100];
for(let s=0; s < scores.length; s++){
    if(scores[s] === 0){
    continue;
    }
    console.log('your score: ', scores[s]);

    if(scores[s]===100){
        console.log('congrats, you got to the top');
        break;
    }
}
//using switch statemnt
const grade ='g';

switch(grade){
    case 'A':
        console.log('you got A');
        break;
    case 'B':
        console.log('you got B');
        break;
    case 'C':
        console.log('you got C');
        break;
    case 'D':
        console.log('you got D');
    default:
        console.log('No Grade');
}
//variables & block scope
let age = 30;
let name ='oghene';

if(true){
    let age = 40;
    let name = 'max';
    // console.log('inside 1st code block:', age, name);
console.log(`outside the block, age is ${age} and name is ${name}`);
    if(true){
        const age = 55;
        const name = 'bobo';
        // console.log('inside 2nd code block:', age, name);
console.log(`outside the block, age is ${age} and name is ${name}`);
    }
}
// console.log('outside code block :', age);
console.log(`outside the block, age is ${age} and name is ${name}`);
