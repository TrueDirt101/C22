
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var radius = 40;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);

	
	engine = Engine.create();
	world = engine.world;

	ground = new roof (400,200,500,30)
	ball = new Bob (200,400,40)
	ball2 = new Bob (280,400,40)
	ball3 = new Bob (360,400,40)
	ball4 = new Bob (440,400,40)
	ball5 = new Bob (520,400,40)
	Rope1 = new Rope(ball.body,{x:360, y:200}, -radius*4);
	Rope2 = new Rope(ball2.body,{x:360, y:200}, -radius*2);
	Rope3 = new Rope(ball3.body,{x:360, y:200}, radius*0);
	Rope4 = new Rope(ball4.body,{x:360, y:200}, radius*2);
	Rope5 = new Rope(ball5.body,{x:360, y:200}, radius*4);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();
  ball.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  Rope1.display();
  Rope2.display();
  Rope3.display();
  Rope4.display();
  Rope5.display();
  
  drawSprites();
 
}


function keyPressed()
{
	if(keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(ball.body,ball.body.position,{x: -75,y: -200})
	}
}

