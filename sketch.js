var dog;
var dogHappy;
var database; 
var foodS;
var foodStock;
var lastFed;
var fedTime;
var foodObj;

function preload()
{
  this.image = loadImage ("images/doglmg.png");
  this.image2 = loadImage ("images/doglmg1.png");
}

function setup() {
	createCanvas(500, 500);
  foodStock = dataBase.ref ("Food");
 foodStock.on ("value",readStock);

feed = createButton ("Feed The Dog");
feed.position (700,95);
feed.mousePressed (feedDog);

addFood = createButton ("Add Food");
addFood.position (800,95);
addFood.mousePressed(addFoods);

}


function draw() {  
 backGround (46, 139, 87);
 if(KeyWentDown(UP_ARROW)){
writeStock(foodS);
dog.addImage (dogHappy)
 }
  drawSprites();
  
textSize (20)
Stroke (5);
Fill (10);

if (lastFed>=12){
  text("Last Feed ;" + lasteFed%12 + "PM" ,350,30);
}else if (lastFed==0){
  text ("Last Feed : 12 AM ",350,30);
}else{
  text ("Last Feed:" + lastFed + "AM",350,30);
}

}


function readStock (data){
foodS = data.val ();
}

function writeStock (x){
if (x<-0){
x-0;
}else{
  x = x-1;
}
  database.ref ('/').update({
  Food:x
})
}

