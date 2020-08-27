const Engine = Matter.Engine
const World  =  Matter.World  
const Bodies  =   Matter.Bodies  
const Constraint =  Matter.Constraint

var world,engine
var backgroundimg;



var hour,response,responseJSON,datetime;

var Score  =  0;

var bg = "bg.jpg";

function preload(){
 getBackgroundImg()
}

function setup() {
  engine = Engine.create()
  world = engine.world     

  Canvas = createCanvas(1200,800);

  //bg = loadImage("bg2.jpg");

  ground = new Ground(200,790,2000,20);
  ground2 = new Ground(510,720,300,20);

  hexagon = new Hexagon(200,200,50);
  
  box1 = new Box(430,700);
  box2 = new Box(450,700);
  box3 = new Box(470,700);
  box4 = new Box(490,700);
  box5 = new Box(510,700);
  box6 = new Box(530,700);
  box7 = new Box(550,700);
  box8 = new Box(570,700);
  box9 = new Box(590,700);

  box10 = new Box(470,680);
  box11 = new Box(490,680);
  box12 = new Box(510,680);
  box13 = new Box(530,680);
  box14 = new Box(550,680);

  box15 = new Box(490,660);
  box16 = new Box(510,660);
  box17 = new Box(530,660);

  box18 = new Box(510,640);

  chain1 = new Chainclass(hexagon.body,{x:200,y:400});
}

function draw() {
  
 if(backgroundimg){
  background(backgroundimg);


 }

  Engine.update(engine)


  //console.log(hour)

  textSize(35)
  text("score" + Score,40,40)
 // console.log(Score)

    
 ground.display();
 ground2.display();

 hexagon.display();

 box1.display();
 box1.score();
 box2.display();
 box2.score()
 box3.display();
 box3.score()
 box4.display();
 box4.score()
 box5.display();
 box5.score()
 box6.display()
 box6.score();
 box7.display();
 box7.score()
 box8.display();
 box8.score()
 box9.display();
 box9.score()

 box10.display();
 box10.score()
 box11.display();
 box11.score()
 box12.display();
 box12.score()
 box13.display();
 box13.score()
 box14.display();
 box14.score()

 box15.display();
 box15.score()
 box16.display();
 box16.score()
 box17.display();
 box17.score()

 box18.display();
 box18.score()

 chain1.display()
}

function mouseDragged(){
  Matter.Body.setPosition(hexagon.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
   chain1.fly()
}

function keyPressed(){
  if(keyCode === 32){
   chain1.attach(hexagon.body)
   
  }
}

async function getBackgroundImg(){
   response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
   responseJSON = await response.json();

   datetime = responseJSON.datetime;
   hour = datetime.slice(11,13);

  if(hour>=06 && hour <= 19){
      bg = "bg.jpg";
  }
  else{
      bg = "bg3.jpg";
  }

  backgroundimg = loadImage(bg);
  console.log(backgroundimg);
}

  