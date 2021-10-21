const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer, pedra, rubber, ferro;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);

    pedra = new Pedra(700,320,100,100)
    ferro = new Ferro(300,350);
    rubber = new Rubber(900,450,70)
   


  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rubber.display();
    ferro.display();
    pedra.display();

    
 
}