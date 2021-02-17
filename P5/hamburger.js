let steak;
let tomate;
let oignon;
let fromage;
let ingredients= [];

function setup() {
  createCanvas(700,700)
  var coucou = createElement('h2','Que veux tu dans ton hamburger ?');
  coucou.position(20,10)
  this.name = function(name){
    this.name = name
  }
  steak = createCheckbox('steak', false);
  steak.position(20, 90);
  steak.changed(myCheckedEvent);
  steak.name = 'steak';


  tomate = createCheckbox('tomate', false);
  tomate.position(20, 105);
  tomate.changed(myCheckedEvent);
  tomate.name = 'tomate';

  oignon = createCheckbox('oignon', false);
  oignon.position(20, 60);
  oignon.changed(myCheckedEvent);
  oignon.name = 'oignon';

  fromage = createCheckbox('fromage', false);
  fromage.position(20, 75);
  fromage.changed(myCheckedEvent);
  fromage.name = 'fromage'
}

function myCheckedEvent() {
  if (this.checked()) {
    ingredients.push(this.name)
  } else {
    for (let i =0; i<ingredients.length; i++) {
    if (ingredients[i] === this.name){
      console.log(ingredients[i])
      delete ingredients[i];
     }
    }
  }
}

function pain(){
  fill(225, 182, 95)
  noStroke()
  rect(200, 230, 255, 55, 30)
  rect(200, 400, 255, 55, 30)


}

function createBurger(array){
  pain()

  for (let i =0; i<array.length; i++) {
    if (array[i] ==='tomate'){
      noStroke()
      fill(225, 56, 22);
      ellipse(320, 315, 200, 20);
    };
    if (array[i] ==='steak'){
      noStroke()
      fill(88, 41, 0);
      rect(200, 350, 255, 40, 20);
    };
    if (array[i] ==='oignon'){
      stroke(200)
      fill(224, 225, 191);
      ellipse(370, 295, 100, 15);
      ellipse(280, 295, 100, 15);
    };
      if (array[i] ==='fromage'){
      fill(247, 233, 40);
      rect(200, 330, 255, 10, 20);
    };
  }
}

function draw(){
  background(300);
   createBurger(ingredients)
}
