// // Convert minutes to seconds

// let minutes = 80;

// let seconds = 60 * minutes;

// console.log(80 * 60);

// // Convert celcius to farenheit

// let celcius = 45;

// newCelTempFarenheit = (celcius * 9) / 5;

// console.log(newCelTempFarenheit);

// // Make for loop that prints numbers 1 to 100

// let numbers = 1;
// for (let i = 0; i < 100; i++) {
//   console.log((numbers += 1));
// }

// // for all the numbers if it's divisible by 4 console.log('Match')

// // for (let i = 1; i <= 100; i++) {
// //   if (i % 4 == 0 && i % 6 == 0) {
// //     console.log('Good Match');
// //   } else if (i % 6 == 0) {
// //     console.log('Good');
// //   } else if (i % 4 == 0) {
// //     console.log('Match');
// //   } else {
// //     console.log(i);
// //   }
// // }

// //Loop through array and only push even numbers into an empty array
// let array = [24, 53, 109, 60, 18];
// let empArr = [];

// for (let i = 0; i < array.length; i++) {
//   if (i % 2 == 0) {
//     empArr.push(array[i]);
//   }
// }
// console.log(empArr);

// //how to reverse a string

// let namae = 'Nabilah';
// let reverse = '';

// for (let i = 0; i < namae.length; i++) {
//   reverse = namae[i] + reverse;
// }
// console.log(reverse);

// The Matrix HW (Oct 27)

let arrayMatrix = [
  [1, 2, ''],
  ['', 16, 32],
  [64, '', 256], 
  [512, 1024, ''],
  [4096, '', 16384],
];

let counter = 0;

for (let i = 0; i < arrayMatrix.length; i++) {
  for (let j = 0; j < arrayMatrix[i].length; j++) {
    //j represents each element in the subarrays
    // console.log(arrayMatrix[i][j]);
    if (arrayMatrix[i][j] == '') {
      arrayMatrix[i][j] = 2 ** counter;
    }
    counter += 1;
  }
}
console.log(arrayMatrix);
   