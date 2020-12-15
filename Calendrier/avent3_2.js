const fs = require("fs");
const forest = fs
.readFileSync(`${__dirname}/input2.txt`)
.toString()
.split("\n");

let gdeForest = [];

for (i=0; i<10; i++){
  gdeForest.push(forest[i]);
}
for (i=10; i<forest.length; i++){
  var blou =forest[i].repeat(100);
  gdeForest.push(blou);
}

let count = 0;
let number = 0;
for (j=0; j<gdeForest.length; j++){
  if(gdeForest[j].charAt(number) == "#"){
    count ++;
  }
  number += 3;
}

console.log(count);

let count1 = 0;
let number1 = 0;
for (j=0; j<gdeForest.length; j++){
  if(gdeForest[j].charAt(number1) == "#"){
    count1 ++;
  }
  number1 += 1;
}

console.log(count1);

let count3 = 0;
let number3 = 0;
for (j=0; j<gdeForest.length; j++){
  if(gdeForest[j].charAt(number3) == "#"){
    count3 ++;
  }
  number3 += 5;
}

console.log(count3);

let count4 = 0;
let number4 = 0;
for (j=0; j<gdeForest.length; j++){
  if(gdeForest[j].charAt(number4) == "#"){
    count4 ++;
  }
  number4 += 7;
}

console.log(count4);

let count5 = 0;
let number5 = 0;
for (j=0; j<gdeForest.length; j+=2){
  if(gdeForest[j].charAt(number5) == "#"){
    count5 ++;
  }
  number5 += 1;
}

console.log(count5);
console.log(count*count1*count3*count4*count5);
