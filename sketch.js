

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine , world;
var groundSprite;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

function setup() {
	createCanvas(480,800);
	//rectMode(CENTER);
    engine = Engine.create();
	  world = engine.world;

   groundSprite = new Ground(240,795,500,20);

     Engine.run(engine);
   }

	
	
 
  



function draw() {
  rectMode(CENTER);
  background("black");

  for(var k = 0; k<= width; k=k+80){
	   divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight))
   }

   for(var j=40; j<=width; j=j+50)
   {
     plinkos.push(new Plinko(j,75));
   }

 groundSprite.display();
  drawSprites();

 
 
}




