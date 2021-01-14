var paper,dustbin,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
dustbin = new DustBin(600,600,200,150);
paper = new Ball(50,600,30,30);
ground = new Ground(400,680,800,20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  drawSprites();
 
 dustbin.display();
 paper.display();
 ground.display();
}



function keyPressed(){
	if(keyDown(UP_ARROW)){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:40,y:-40})
	}
}