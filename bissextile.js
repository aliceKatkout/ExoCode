var year = 1900;

const prompt = require("prompt-sync")();

year = prompt("Quelle année veux-tu tester ?");

function bissextile(year){
  if (year%4 == 0 && year%100 !== 0) {
    result = true;
    console.log(year +" est une année bissextile !");
  }
  else if (year%400 == 0){
    result = true;
    console.log(year +" est une année bissextile !");
  }
  else {
    result = false;
    console.log(year +" n'est pas une année bissextile !")
  }
}

bissextile(year);
