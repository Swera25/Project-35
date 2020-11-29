//Create variables here

var dog, happyDog;
var database;
var foodS, foodStock;

function preload()
{
  //load images here
  
  dog = loadImage("Dog.png");
  happyDog = loadImage("happydog.png");
}

function setup() {


  createCanvas(500, 500);

  dog = createSprite(dog);

  foodStock = database.ref('Food');
  foodStock.on("value", readStock);
}


function draw() {
   background(46, 139, 87);
   
   if(keyWentDown(UP_ARROW)) {

    writeStock(foodS);
    dog.addImage(dogHappy, 250, 250, 10, 10);
   }

  drawSprites();

  //add styles here

  text("foodStock");
  textSize(10);
  fill("lightBlue");
  stroke();
}

function readStock(data) {

  foodS = data.val();
}

function writeStock(x) {

  if(x <= 0){
    x = 0;
  } else{
    x = x - 1;
  }

  database.ref('/').update({

    Food:x
  })
}

