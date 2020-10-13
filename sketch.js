
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground, ballSprite, ballBody, ballState, holder1, holder2, holder3, dustbin, dustbinImg;
var engine, world;

function preload() 
{
	dustbinImg = loadImage("dustbinImage.png");
}

function setup() {
	createCanvas(1420, 600);
	engine = Engine.create();
	world = engine.world;
	ballState = "normal";

	dustbin = createSprite(1020,390,10,10);
	dustbin.addImage(dustbinImg);	
	dustbin.scale = 1.3;

	//Create the Bodies Here.
	ground = new Floor(710,570,1420,30);
	World.add(world, ground);

	ballBody = new Ball(100,100, 65);
	ballBody.shapeColor = "pink";
	ballBody.scale = 0.01;
	World.add(world, ballBody);
	
	holder1 = new Bin(1020,510,300,30);
	World.add(world, holder1);
	holder2 = new Bin(880,352,30,345);
	World.add(world, holder2);
	holder3 = new Bin(1160,352,30,345);
	World.add(world, holder2);

	Engine.run(engine);
  
}


function draw() {
  background(255);
  ground.display();
  ballBody.display();
  holder1.display();
  holder2.display();
  holder3.display();
//  ground.display();
  text(mouseX + "," + mouseY,20,20);
  
  drawSprites();
 
}

function keyPressed() 
{
	if (keyCode === UP_ARROW && ballState === "normal") 
	{
		Matter.Body.applyForce(ballBody.body, ballBody.body.position, {x:520,y: -690});
		ballState = "throw";
	}
}