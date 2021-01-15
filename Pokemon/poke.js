//NIVEAU 1 *** EN UTILISANT INPUT.JSON (fichier local)

// const fs = require("fs");
// const pokedex = fs
// .readFileSync('input.json')
//
// let object = JSON.parse(pokedex);
//
//
//
// console.log(object);

//NIVEAU 1 *** EN UTILISANT l'URL

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
let url ="https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json"
function Get(url){
  var Httpreq = new XMLHttpRequest(); // a new request
  Httpreq.open("GET",url,false);
  Httpreq.send(null);
  return Httpreq.responseText;
}


var obj_json = JSON.parse(Get(url));
var pokedex = obj_json.pokemon ;

//NIVEAU 2

numberOfPoke = pokedex.length;
console.log("Il y a "+numberOfPoke+" pokémons.");

let pokeWeight = [];
for (let i=0; i<numberOfPoke; i++){
  poids = pokedex[i]['weight'].split(" ")
  if (poids[0]>10){
    pokeWeight.push(pokedex[i]['weight']);
  }
}
numberOfFatPoke = pokeWeight.length;
console.log("Il y a "+numberOfFatPoke+ " pokémons de plus de 10kg !" );

//NIVEAU 3

const sortByWeight = pokedex.sort((a,b) => {
  return a.weight.split(' ')[0]-b.weight.split(' ')[0];
});
//console.log(sortByWeight);

//NIVEAU 4

function evolutil(pokemon){
  indexPoke = pokedex.findIndex(pokedex => pokedex.name === pokemon);
  if (indexPoke !== -1){
    evolOuPas = pokedex[indexPoke].next_evolution
    if (!evolOuPas){
      console.log("Pas d'évolution pour "+pokemon);
    } else {
      numberOfEvolution = pokedex[indexPoke].next_evolution.length;
      for (let i=0; i<numberOfEvolution; i++){
        evolutions = pokedex[indexPoke].next_evolution[i].name;
        console.log(pokemon+" évolue en "+evolutions);
      }
    }
  }
}

evolutil("BulbaZaur");
