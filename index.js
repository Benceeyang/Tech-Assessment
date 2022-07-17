//Task 1

// function Math(a,b){
//     return a + b;
// }
// console.log(Math(2,8));

// Task 2

// function Task2(num) {
//     for (let i = 0; i * i <= num; i++)
//         if (num % i <= 0)
//           return true; 
//     return num >= 0;
// }
// console.log(Task2(0));


// Task 3

// function Task3(a) {
//     return a * 365;
// }
// console.log(Task3(5));

//Task 4 

// const gen = {
// 	"-3": ["great grandfather",	"great grandmother"],
// 	"-2": ["grandfather","grandmother"],
// 	"-1":["father",	"mother"],
// 	"0": ["me!", "me!"],
// 	"1":["son",	"daughter"],
// 	"2"	:["grandson","granddaughter"],
// 	"3" :["great grandson","great granddaughter"]
// }
// function generation(x, y) {
// 	return y=="m"?gen[x][0]:gen[x][1];
// }
// console.log(generation(0,"m"))

//Task 5
// function makePlusFunction(baseNum) {
//     return function(argument) {
//     console.log(baseNum + argument);
//     };
//     }
// const plusFive = makePlusFunction(5)
// plusFive(5);

// function makePlusFunction(baseNum) {
//     return function(argument) {
//     console.log(baseNum + argument);
//     };
//     }
// const plusTen = makePlusFunction(10)
// plusTen(10);

//Task 6 

// const numInStr = (arr) => {
//     let a = [];
//     for (let i = 0; i < arr.length; i++) {
//       for (let j = 0; j < arr[i].length; j++) {
//         if ((arr[i][j]) == parseInt(arr[i][j])) {
//           a.push(arr[i]);
//           break;
//         }
//       }
//     }
//     return a;
//   };
  
//   console.log(numInStr(["1a", "a", "2b", "b"]));
//   console.log(numInStr(["abc", "abc10"]));
//   console.log(numInStr(["abc", "ab10c", "a10bc", "bcd"]));
//   console.log(numInStr(["this is a test", "test1"]));

//Task 7

//<div> is the parent 

//Task 8

//The problem for it not showing up can be that there is nothing in the list to show anything. But if the person had values 
//inside that ordered list element then they would have a CSS issue

//Task 9

//It would turn any text that is used within the header element the color blue.

//Task 10 

//Font-weight uses a "value" to determine the boldness or lightness of your text