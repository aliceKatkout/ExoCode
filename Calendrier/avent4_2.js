const fs = require("fs");
const originalData = fs
  .readFileSync(`${__dirname}/input4.txt`)
  .toString()

var data = originalData.split("\n\n");
let valid = 0;
let validPass =[]

for (i=0; i<data.length; i++){
  morceau = data[i].toString().split(/\n|\s/);
  if (morceau.length == 8){
      valid += 1;
      validPass.push(morceau);
  } else {
    if (!morceau.toString().includes("cid")&&morceau.length==7){
      valid +=1;
      validPass.push(morceau);
       //atom rajoute une ligne vide à la fin de input qui se traduit par un elment vide à la fin du dernierr tableau
    } else if (morceau.length > 8){
        valid += 1;
        morceau.pop();
        validPass.push(morceau);
      }
    }
  }


let line;
let tabPass =[];
for (i=0; i<validPass.length; i++){
  line = validPass[i].toString().split(",");
  tabPass.push(line.sort());


}

//for (i=0; i<tabPass.length; i++){
  for (keyValue of tabPass){
    split = keyValue[0].split(":");
    if (split[1] >= 1920 && split[1]<=2002){
    console.log("coucou "+split);
  }else{
  console.log(keyValue);
  }

}


  //}



//miniLine = line[j].toString().split(":");


  // byr (Birth Year) - four digits; at least 1920 and at most 2002.
  // iyr (Issue Year) - four digits; at least 2010 and at most 2020.
  // eyr (Expiration Year) - four digits; at least 2020 and at most 2030.
  // hgt (Height) - a number followed by either cm or in:
  // If cm, the number must be at least 150 and at most 193.
  // If in, the number must be at least 59 and at most 76.
  // hcl (Hair Color) - a # followed by exactly six characters 0-9 or a-f.
  // ecl (Eye Color) - exactly one of: amb blu brn gry grn hzl oth.
  // pid (Passport ID) - a nine-digit number, including leading zeroes.
  // cid (Country ID) - ignored, missing or not.
