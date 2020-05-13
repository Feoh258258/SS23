const currencyYear = 2020;
const euroRate = 1.09;

// 1 Task
let name = prompt('Task2');
alert(`Hello, ${name}!`);


// 2 Task
let age = prompt('When were you born? (Please, indicate the year of birth)');
    age = parseInt(age);

if (isNaN(age) || age < 1900 || age > 2020) {
  alert("Try again"); // я так и не понял как вернуть его обратно к вводу года рождения. Циклом. Но как - пока не понял
} 

else {
  YearOfBird = currencyYear - age;
  alert('You are: ' + YearOfBird);
}
// End of 2 Task

// 3 Task
let square = prompt('enter the side of the square');
square = parseInt(square);
if (isNaN(square)) {
  alert("Try again");
} 

else {
  sSquare = 4 * square;
  alert('The square area is  ' + sSquare);
}
// End of 3 Task

// 4 Task
let circleRadius = prompt('enter circle radius');
circleRadius = parseInt(circleRadius);
if (isNaN(circleRadius)) {
  alert("Try again");
} 

else {
  circleArea = 3.14 * (circleRadius ** 2);
  alert('circle area is  ' + circleArea);
}
// End of 4 Task

// 5 Task
let distance = prompt('enter distance from Kharkiv to Kyiv');
let time = prompt('how much time do you want to spend on a trip');
distance = parseInt(distance);
time = parseInt(time);

let speed = distance / time;
alert("You have to drive at a speed " + speed + "km/h");
//End of  5 Task

// 6 Task
let dollarsSum = prompt('how many dollars do you want to convert to euros?');
dollarsSum = parseInt(dollarsSum);
let rateValue = euroRate * dollarsSum;
alert("You will get " + rateValue + " Euros");
// End of 6 Task


let oneProject = 820;
let gbFlashDriver = prompt('how many GB in your Flash Driver?');
gbFlashDriver = parseInt(gbFlashDriver);
let gbToMb = gbFlashDriver * 1000;
let valueTimesOf = gbToMb / oneProject;
alert(parseInt(gbToMb/oneProject)); //метод parseInt скругляет к целому числу, без остатка
// End of 7 Task

// 8 Task
let moneyInWallet = prompt('how many money in your wallet?');
let chololatesCost = prompt('how much a chocolate cost?');
moneyInWallet = parseInt(moneyInWallet);
chololatesCost = parseInt(chololatesCost);
alert("You may to buy " + parseInt(moneyInWallet/chololatesCost) + " chocolate(s). Your change is " + (moneyInWallet%chololatesCost));
// End of 8 Task

// 9 Task
let threeDigitNumber = prompt('Please, enter three-digit number');
threeDigitNumber = parseInt(threeDigitNumber);
alert(('' + threeDigitNumber).split('').reverse().join(''));
//End of  9 Task
