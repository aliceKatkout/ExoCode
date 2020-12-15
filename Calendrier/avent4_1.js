const fs = require("fs");
const originalData = fs
  .readFileSync(`${__dirname}/input4.txt`)
  .toString()

var data = originalData.split("\n\n");

bloubi = data.forEach((item,i) => {
    round1 = item.split("\n");
    console.log(round1);
      round1.forEach((item2, i) => {
        console.log(item2);
        
        item2.replace(/\s/g, "'','");

    });
  });




console.log(bloubi);
