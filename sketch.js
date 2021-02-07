const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground1

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;
function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  ground1 = new Ground(0,800,1000,20);

//Divisions
  for (var i = 0;i <=width; i = i + 80){
    divisions.push(new Divisions(i , height-divisionHeight/2, 10, divisionHeight));
  }
//Plinkos
  for(var k = 40;k<=width;k=k+50){
    plinkos.push(new Plinko(k, 75));
  }
  for(var k = 15;k<=width-10;k=k+50){
    plinkos.push(new Plinko(k, 175));
  } 
  for(var k = 40;k<=width;k=k+50){
    plinkos.push(new Plinko(k, 275));
  }  
  for(var k = 15;k<=width-10;k=k+50){
    plinkos.push(new Plinko(k, 375));
  } 
}

function draw() {
  background(0,0,0); 
  Engine.update(engine);

  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10, width/2+10), 10,10))
  }

//Divisions  
  for(var i = 0;i < divisions.length;i++){
    divisions[i].display();
  }
//Plinkos
  for(var k = 0;k<plinkos.length;k++){
    plinkos[k].display();
  }  
//Particles
  for(var j = 0;j<particles.length;j++){
    particles[j].display();
  }
  
  ground1.display();

}