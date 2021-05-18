const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

   ground= Bodies.rectangle(200,380,400,20, ground_options);
    World.add(world,ground);


    var ball_options = {
        restitution: 0.8
    }
   ball = Bodies.circle(200,30,60, ball_options);
   World.add(world, ball);



    //console.log(ground);
}

function draw(){
    background("white");
    Engine.update(engine);
    rectMode(CENTER);
    fill("red")
    rect(ground.position.x,ground.position.y,400,20);

    fill("yellow");
    ellipseMode(RADIUS)
    ellipse(ball.position.x, ball.position.y, 60, 60)

}
