const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var paper;
var ground;
var rect1,rect2,rect3;
var dustbin;
//var engine,world

function preload()
{
	//dustbin=loadImage("images/dustbin.png");
}

function setup() {
	createCanvas(1200, 700);
	engine = Engine.create();
	world = engine.world;
	//console.log(paper.properties);
	ground=new Ground(600,650,1300,10);
	paper=new Ball(200,400);
	//ellipse(paper.x,paper.y,10,10);
	
	rect1=new Binbox(900,585,10,120);
	rect2=new Bin(950,640,90,10);
	//rect2.addImage(dustbin);
	rect3=new Binbox(1000,585,10,120);
	hand=new Hand(paper.body,{x:200,y:300})

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  
	//rectMode(CENTER);
  background(240);
  Engine.update(engine);
   //jump();
   paper.display();
  ground.display();
  rect1.display();
  rect3.display();
  rect2.display();
  hand.display();
  //textSize(20);
  //text("press the up and down arrow keys to control the ball",400,100);
// console.log(paper.body.position.x,paper.body.position.y);
  //drawSprites();
 
}

/*function jump(){
	if(keyDown(UP_ARROW)){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:15,y:-25});
	}
}*/
function mouseDragged(){
	//hand.x=mouseX;
	//hand.y=mouseY;
	Matter.Body.setPosition(paper.body,{x:mouseX,y:mouseY});
	
}

function mouseReleased(){
	hand.fly();
	Matter.Body.applyForce(paper.body,paper.body.position,{x:25,y:-25});
}



