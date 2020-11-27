const Engine =Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
var myEngine,myWorld;
var object, ball, ball1


function setup() {
  createCanvas(800,400);
  myEngine = Engine.create();
  myWorld = myEngine.world
  var option = {
    isStatic : true
  }
  var opt = {
    restitution : 1
  }
  object = Bodies.rectangle(400,380,800,20,option)
  World.add(myWorld,object)
  console.log(object)
  console.log(object.position.y)
  ball = Bodies.circle(400,100,20,opt)
  World.add(myWorld,ball)
  console.log(ball)
  ball1 = Bodies.circle(300,100,20,opt)
  World.add(myWorld,ball1)
  console.log(ball1)
}

function draw() {
  background("black");  
  Engine.update(myEngine)
 rectMode(CENTER)
 rect(object.position.x,object.position.y,800,20)

  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20)
  ellipse(ball1.position.x,ball1.position.y,20,20)
}