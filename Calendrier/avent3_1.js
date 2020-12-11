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
  var blou =forest[i].repeat(35);
  gdeForest.push(blou);
}

let count = 0;
let number = 0;
for (j=0; j<gdeForest.length; j++){
  if(gdeForest[j].charAt(number) == "#"){
    count ++;
    console.log(count+gdeForest[j].charAt(number));
  }
  number += 3;
}

console.log(count);
