// // myName = prompt('what\'s your name? ');
// // herName = prompt('what\'s her/his name? ');

// let loveScore = Math.random();
// loveScore *= 100;
// loveScore = Math.floor(loveScore) + 1;

// if (loveScore < 30) {
//   alert(`Your Love score is Low: ${loveScore} %`);
// } else if (loveScore >= 30 && loveScore < 60) {
//   alert(`Your Love score is average: ${loveScore} %`);
// } else {
//   alert(`Your Love score is high: ${loveScore} %`);
// }

// //Leap Year Challenge
// function isLeap(year) {
//   if (year % 4 === 0) {
//     if(year % 100 === 0) {
//       if(year % 400 === 0) {
//         console.log(`Leap year.`);
//       } else {
//         console.log(`Not leap year.`);
//       }
//     } else{
//       console.log(`Leap year.`);
//     }
//   } else {
//     console.log(`Not leap year.`);
//   }
// }
//  isLeap(2100);

// // Arrays
// let guestList = ['Angela', 'Jack', 'Pam', 'James', 'Lara', 'Jason'];
// console.log(guestList);
// console.log(guestList.length);
// console.log(guestList[0]);
// console.log(guestList.includes('Pam'));

// let guestName = prompt(`What's your name? `);
// if(guestList.includes(guestName)) {
//   console.log('Welcome');
// } else{
//   console.log('Next Time');
// }

// Fizz Buzz Challenge
let output = [];

function fizzBuzz() {
  for (let i = 1; i <= 100; i++) { // Start from 1 to include only positive numbers
    if (i % 3 === 0 && i % 5 === 0) { 
      output.push('Fizz Buzz'); // Both divisible by 3 and 5
    } else if (i % 3 === 0) {
      output.push('Fizz'); // Divisible by 3
    } else if (i % 5 === 0) {
      output.push('Buzz'); // Divisible by 5
    } else {
      output.push(i); // Neither divisible by 3 nor 5
    }
  }
  console.log(output);
}

fizzBuzz();

//Buying Lunch Challenge:
let names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];

function whosPaying(names) {
  // Generate a random index based on the length of the array
  let randomIndex = Math.floor(Math.random() * names.length);

  // Select the name from the array using the random index
  let name = names[randomIndex];

  // Return the message with the selected name
  return `${name} is going to buy lunch today!`;
}

console.log(whosPaying(names));


// While Loops
let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

// 99 Bottles Challenge
function singBottle() {
  let a = 100;
  while (a > 0) {
    console.log(`${a} bottles of beer on the wall, ${a} bottles of beer`);
    a--;
    console.log(`Take one down and pass it around, ${a} bottles of beer on the wall`);
  };
};
singBottle();


