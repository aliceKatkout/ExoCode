const fs = require("fs");
const inputTab = fs
.readFileSync(`${__dirname}/input.txt`)
.toString()
.split("\n");

let line;
let occurence;
let lettre;
let password;
let number1;
let number2;
let count;
let result = 0;


for (let i = 0; i<inputTab.length-1; i++){
   line = inputTab[i].split(" ");
   occurence =line[0].split("-");
   lettre =line[1][0];
   password =line[2];
   number1 = parseInt(occurence[0])-1;
   number2 = parseInt(occurence[1])-1;
   count = 0;

   if(password.charAt(number1) === lettre){
     count += 1;

   }

  if(password.charAt(number2) === lettre){
       count += 1;

     }
     if (count === 1){
       console.log(password+" "+lettre+" n1="+number1+" n2="+number2);
       result +=1;
     }
     }


   console.log(result);
