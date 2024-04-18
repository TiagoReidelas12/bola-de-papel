
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball

function preload()
{
	
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
var ground_options={
	isStatic:true
}
	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
ground=Bodies.rectangle(400,795,800,20,ground_options)
World.add(world,ground)

ball=Bodies.circle(200,50,40,ball_options)
World.add(world,ball)
right=Bodies.rectangle(450,770,20,60,ground_options)
World.add(world,right)
	Engine.run(engine);
  
	left=Bodies.rectangle(550,770,20,60,ground_options)
World.add(world,left)
}


function draw() {
  rectMode(CENTER);
  background(0);

  ellipse(ball.position.x,ball.position.y,40)

  rect(ground.position.x,ground.position.y,800,20)

  drawSprites();
rect(right.position.x,right.position.y,20,60) 

rect(left.position.x,left.position.y,20,60)

}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85})
	}
}

