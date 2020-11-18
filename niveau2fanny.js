const morseTable = { 
    ".-":"a",
    "-...":"b",
    "-.-.":"c",
    "-..":"d",
    ".":"e",
    "..-.":"f",
    "--.":"g",
    "....":"h",
    "..":"i",
    ".---":"j",
    "-.-":"k",
    ".-..":"l",
    "--":"m",
    "-.":"n",
    "---":"o",
    ".--.":"p",
    "--.-":"q",
    ".-.":"r",
    "...":"s",
    "-":"t",
    "..-":"u",
    "...-":"v",
    ".--":"w",
    "-..-":"x",
    "-.--":"y",
    "--..":"z",
    ".----":"1",
    "..---":"2",
    "...--":"3",
    "....-":"4",
    ".....":"5",
    "-....":"6",
    "--...":"7",
    "---..":"8",
    "----.":"9",
    "-----":"0",
    "   ": " "
} 

let reponse = "";

function afficherValeur(valeurRecue,index,tab){ 
  trad = morseTable[valeurRecue];
  reponse += trad;
  //console.log (trad);
}   

function decoder(chaineMorse){ 
  arrayOfChaineMorse = chaineMorse.split(" "); 
  arrayOfChaineMorse.forEach(afficherValeur); 

  return reponse;
   }

  console.log(decoder("-... --- -. .--- --- ..- .-." )); 

//arrayOfChaineMorse.forEach(function (morseLetter){ 
//   console.log(morseLetter); 
//      if (morseLetter === "...") { 
//      console.log("s"); 
//  }if(morseLetter === "---"){
 //      console.log("o"); 
//      } 
//   }); 
