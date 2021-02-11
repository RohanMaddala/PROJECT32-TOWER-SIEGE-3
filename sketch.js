const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var slingshot,polygon;
var score = 0;
var gameState = "onSling"

var bg = "#382C2C"

function preload()
{
	getBackgroundImg()
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  invisibleground = new invisible(width/2,700,width,10)
	ground1 = new Ground(1000,650,320,20)
	ground2 = new Ground(1300,300,240,20)
  
  polygon = new Polygon();
	slingshot = new SlingShot(polygon.body,{x:200,y:350})

	//ground1 row 1
	bbox1 = new BBox(1000,610);
	bbox2 = new BBox(1000+40,610);
	bbox3 = new BBox(1000-40,610);
	bbox4 = new BBox(1000+80,610);
	bbox5 = new BBox(1000-80,610);
	bbox6 = new BBox(1000+120,610);
	bbox7 = new BBox(1000-120,610);

	//ground1 row2
	pbox1 = new PBox(1000,560);
	pbox2 = new PBox(1000+40,560);
	pbox3 = new PBox(1000-40,560);
	pbox4 = new PBox(1000+80,560);
	pbox5 = new PBox(1000-80,560);

	//ground1 row3
	cbox1 = new CBox(1000,500);
	cbox2 = new CBox(1000+40,500);
	cbox3 = new CBox(1000-40,500);

	//ground1 row4
	gbox1 = new GBox(1000,480);

	//ground2 row 1
	bbox8 = new BBox(1300,260);
	bbox9 = new BBox(1300+40,260);
	bbox10 = new BBox(1300-40,260);
	bbox11 = new BBox(1300+80,260);
	bbox12 = new BBox(1300-80,260);

	//ground2 row2
	cbox4 = new CBox(1300,220);
	cbox5 = new CBox(1300+40,220);
	cbox6 = new CBox(1300-40,220);

	//ground2 row3
	pbox6 = new PBox(1300,180);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bg);
  
  noStroke();
  fill("white")
  textSize(20)
  text("Press Space for another chance",1200,50)
  text("Score : "+score,50,50)
  
  ground1.display();
  ground2.display();
  invisibleground.display();

  polygon.display();
  slingshot.display();

  //ground1 row1 display
  bbox1.display();
  bbox2.display();
  bbox3.display();
  bbox4.display();
  bbox5.display();
  bbox6.display();
  bbox7.display();

  //ground1 row2 display
  pbox1.display();
  pbox2.display();
  pbox3.display();
  pbox4.display();
  pbox5.display();
  
  //ground1 row3 display
  cbox1.display();
  cbox2.display();
  cbox3.display();

  //ground1 row3 display
  gbox1.display();

  //ground1 row1 display
  bbox8.display();
  bbox9.display();
  bbox10.display();
  bbox11.display();
  bbox12.display();

  //ground2 row2 display
  cbox4.display();
  cbox5.display();
  cbox6.display();

  //ground2 row3 display
  pbox6.display();
  
  //ground1 row1 score
  bbox1.score();
  bbox2.score();
  bbox3.score();
  bbox4.score();
  bbox5.score();
  bbox6.score();
  bbox7.score();

  //ground1 row2 score
  pbox1.score();
  pbox2.score();
  pbox3.score();
  pbox4.score();
  pbox5.score();
  
  //ground1 row3 score
  cbox1.score();
  cbox2.score();
  cbox3.score();

  //ground1 row3 score
  gbox1.score();

  //ground1 row1 score
  bbox8.score();
  bbox9.score();
  bbox10.score();
  bbox11.score();
  bbox12.score();

  //ground2 row2 score
  cbox4.score();
  cbox5.score();
  cbox6.score();

  //ground2 row3 score
  pbox6.score();

  drawSprites(); 
}

function mouseDragged(){
  if (gameState !== "lunched"){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY})
  }
    
}


function mouseReleased(){
  slingshot.fly();
  gameState = "lunched"
}

function keyPressed(){
    if(keyCode === 32){
       Matter.Body.setPosition(polygon.body,{x:200,y:50});
       slingshot.attach(polygon.body); 
       gameState = "onSling"
    }
}

async function getBackgroundImg() {
  var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();
  var date = responseJSON.datetime;
  var hour = date.slice(11, 13);
  if(hour>=06 && hour<=19){
      bg = "#382C2C"
  } else {
      bg = "black"
  }
  backgroundImg = loadImage(bg);
}
