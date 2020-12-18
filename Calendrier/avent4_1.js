const fs = require("fs");
const originalData = fs
  .readFileSync(`${__dirname}/input4.txt`)
  .toString()

var data = originalData.split("\n\n");
let valid = 0;

for (i=0; i<data.length; i++){
  morceau = data[i].toString().split(/\n|\s/);
  if (morceau.length == 8){
      valid += 1;
  } else {
    if (!morceau.toString().includes("cid")&&morceau.length==7){
      valid +=1;
    } else { //atom rajoute une ligne vide à la fin de input qui se traduit par un elment vide à la fin du dernierr tableau
      if (morceau.length > 8){
        valid += 1;
      }
    }
  }
}

console.log(valid);
