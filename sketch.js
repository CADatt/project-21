
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var ground;
var wall1,wal2;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);
    

	engine = Engine.create();
	world = engine.world;
	ground =new Ground(600,500,1200,20);
    ball=Bodies.circle(200,200,30,ball_options);
    World.add(world,ball);
	wall1 = new Ground(900,420,20,120);
	wall2 = new Ground(1100,420,20,120);
	//wall1=Bodies.rectangle(900,300,20,120);
	//World.add(world,wall1);
	//wall2=Bodies.rectangle(1100,600,20,120);
	//World.add(world,wall2);

	//Create the Bodies Here.
   
	var ball_options={
		isStatic : false,
		restitution:0.5,
		friction:0.1,
		
	}

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,30);
  ground.show();
  wall1.show();
  wall2.show();
  drawSprites();
  //rect(wall2.position.x,wall1.position.y,20,200);
  //rect(wall1.position.x,wall1.position.y,20,200);
  hf();
 
}

function hf(){

  if (keyCode === UP_ARROW) {
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.01,y:0});}
}

function lf()
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:0.01});
}




