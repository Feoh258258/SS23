document.addEventListener("DOMContentLoaded", function() {
//   const dom = {
//     palindromEnter : document.getElementById('palindromEnter'),
//     palindromInput : document.getElementById('palindromInput').value
    
//   } 


//   palindromEnter.onclick = function(str) {
//     palindromReverse = str.split('').reverse().join('');
//     if(palindromReverse == str) {
//       return 'Yes';
//     }else {
//       return 'No';
//     }
// }  WHY IT DOES`N WORK?


const MinValueforEachArr = [
  [1, 2, 3, 4, 5],       // minimum value of row is 1
  [5, 6, 7, 8, 9],       // minimum value of row is 5
  [20, 21, 34, 56, 100]  // minimum value of row is 20
];

function summMin(e) {
 let sumArr = 0;

 for(let i=0; i < e.length; i++) {
   sumArr +=Math.min.apply(null, e[i]);
 }
return sumArr;
}

console.log(summMin(MinValueforEachArr));


//Таск 3

const allRaw = [
  ['bitcoin take over the world maybe who knows perhaps'],
  ['turns out random test cases are easier than writing out basic ones'],
  ['lets talk about javascript the best language'],
  ['i want to travel the world writing code one day'],
  ['Lets all go on holiday somewhere very cold']
]; 


for (let i=0; i<allRaw.length; i++){
  let newRaw = allRaw[i][0].split(' ');

  let minElOfArr = 100;
    for(let j = 0; j<newRaw.length; j++){
        if(newRaw[j].length < minElOfArr){
           minElOfArr = newRaw[j].length;
        }
    }
    console.log(minElOfArr);
  
}


//Task 2

const newTwoOldestAges = [1, 2, 10, 8];
  let newTwoOldestA = newTwoOldestAges.sort(function(a, b){return b - a});
console.log(newTwoOldestA[1], newTwoOldestA[0]);

//Task 5
const ConctrucrorBtn = document.getElementById('ConctrucrorBtn');
ConctrucrorBtn.onclick = function() {
  let changeColor = document.getElementById('baColorConstructor').value;
  let changeHeight = document.getElementById('HeightConstrucror').value;
  let changeCircle = document.getElementById('circleConstructor');
  

  changeCircle.style.backgroundColor = changeColor;
  changeCircle.style.height = changeHeight +'px';
  changeCircle.style.width = changeHeight +'px';
}




});//End DOMContentLoaded