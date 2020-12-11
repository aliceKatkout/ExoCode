const fs = require("fs");
const inputTab = fs
.readFileSync(`${__dirname}/input.txt`)
.toString()
.split("\n");

let line;
let occurence;
let lettre;
let password;
let numberMin;
let numberMax;
let count;
let result = 0;


for (let i = 0; i<inputTab.length-1; i++){
   line = inputTab[i].split(" ");
   occurence =line[0].split("-");
   lettre =line[1][0];
   password =line[2];
   numberMin = parseInt(occurence[0]);
   numberMax = parseInt(occurence[1]);
   count = 0;
  for(let j = 0; j< password.length; j++){
    if(password.charAt(j) === lettre){
      count ++;
    }
  }
  if (numberMin <= count && count <= numberMax){
    result += 1;
  }
}
  console.log(result);

  // @see string to number conversion https://gomakethings.com/converting-strings-to-numbers-with-vanilla-javascript/
