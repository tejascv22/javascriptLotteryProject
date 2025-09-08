console.log("printing the body mass imdex");
let myname = prompt("enter your name");
let weight = Number(prompt("enter your weight(meters)"));
let height = Number(prompt("enter your height(kg)"));

console.log("name is =", myname);
console.log("weight is =", weight);
console.log("height is =", height);

let heightInMeters = height / 100;

let bmi = (weight / heightInMeters ** 2).toFixed(2);
console.log("bmi", +bmi);

// if (bmi < 18.5) {
//   console.log("thin");
// } else if (bmi > 25) {
//   console.log("fat");
// } else {
//   console.log("normal");
// }

bmi < 18.5 ? conaole.log("thin"):bmi >25? console.log("fat"):console.log("normal");