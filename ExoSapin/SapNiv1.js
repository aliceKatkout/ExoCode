const prompt = require("prompt-sync")();
n = prompt("Donne un chiffre !");

function sapin(n){
  let space = [" "];
  let spaceLove;
  for (s=0;s<n;s++){
    space[s]=[" "];
    spaceLove = space.join("");

}
console.log(spaceLove+" +");
console.log(spaceLove+"/*\\");
  let tabStar = [];
  for (i=0;i<n;i++){
    spaceLove = spaceLove.substring(0, spaceLove.length - 1);
    tabStar[i]="**"
    let stars = tabStar.join("");
    console.log(spaceLove+"/*"+stars+"\\");
  }

}
sapin(n);
