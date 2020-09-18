const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground1,ground2;
var polygon,slingshot;

var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16;
var backgroundImg,bg;

var score = 0;

function preload(){
 // backgroundImg = loadImage("towers.png");
  getTime();
}



function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  Engine.run(engine);

  ground1 = new Ground(600,height,1200,20);
  ground2 = new Ground(490,305,220,13);

  polygon = new Polygon(100,200,50,50);

  //level1
  box1 = new Box(400,275,30,40);
  box2 = new Box(430,275,30,40);
  box3 = new Box(460,275,30,40);
  box4 = new Box(490,275,30,40);
  box5 = new Box(520,275,30,40);
  box6 = new Box(550,275,30,40);
  box7 = new Box(580,275,30,40);
  
  //level2
  box8 = new Box(430,235,30,40);
  box9 = new Box(460,235,30,40);
  box10 = new Box(490,235,30,40);
  box11 = new Box(520,235,30,40);
  box12 = new Box(550,235,30,40);
  
  //level4
  box13 = new Box(460,195,30,40);
  box14 = new Box(490,195,30,40);
  box15 = new Box(520,195,30,40);
  
  //level15
  box16 = new Box(490,155,30,40);

  slingshot = new Slingshot(polygon.body,{x:100,y:200});



}

function draw() {
  if(backgroundImg){
  background(backgroundImg);  
  }
  
  ground1.display();
  ground2.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
 

  box1.score()
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score();
  box13.score();
  box14.score();
  box15.score();
  box16.score();
  
  polygon.display();
  slingshot.display();

  text( score, 400,100);

  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body,{x: mouseX, y:mouseY})
}

function mouseReleased(){
  slingshot.fly();
}

function keyPressed() {
  if(keyCode === 32){
    slingshot.attach(polygon.body);
  }

}

async function getTime(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJson = await response.json();
  var dateTime = responseJson.datetime;
  var hour = dateTime.slice(11,13);

  if(hour >= 06 && hour <= 18){
      bg = ("daytime.jpeg"); 
  }
  else{
      bg = ("nighttime.jpeg");
  }

  backgroundImg = loadImage(bg);
  //console.log(hour);
}