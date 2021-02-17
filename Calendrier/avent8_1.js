const fs = require("fs");

const data = fs.readFileSync('./input8.txt').toString().split("\n");

var acc = 0;
var dataMatrix = []

data.forEach((item,i) => {
  item = item.split(" ");
  let opCode = item[0];
  let offset = parseInt(item[1]);
  dataMatrix.push([0, opCode, offset]);
});

let item;

for (let i = 0; i < dataMatrix.length; i++) {
  item = dataMatrix[i];
  console.log("actual = "+item)
  if (item[1]== "acc") acc += item[2]
  if (item[1]=="jmp") i += item[2]-1
  if (item[0]== 0) item[0] = 1
  else break
}
console.log("acc = "+acc);
