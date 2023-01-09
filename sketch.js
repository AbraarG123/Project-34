const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;

var ball
var net

function preload(){
  net = loadImage ('net.jpg');
  ball = loadImage ('ball.jpg');
  blower = loadImage('blower.jpg');
}

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
  var ball = createSprite (200,100);
  ball.scale = 0.5;

  var net = createSprite (200,300);
  net.scale = 0.5;

  var blower = createSprite (400,400);
  blower.scale = 0.5;
}


function draw() 
{
  background(51);
  Engine.update(engine);

  if (blower.mouseClicked){
    ball++
  }

  if (ball.isTouching (net)){
    gameOver();
  }
}

