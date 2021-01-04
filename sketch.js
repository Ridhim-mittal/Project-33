var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];

var particle;

var divisionHeight=300;
var score =0;
var turn =0;
var gameState = "play";
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  
  mousePressed();


  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 8, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(25)
  fill("grey")
  stroke("white")
  text("Score : "+score,20,30);
  textSize(20);
  noStroke();
  fill("gold")
  text("500",25,525);
  text("500",105,525);
  text("500",185,525);
  text("500",265,525);
  fill("white");
  text("100",345,525);
  text("100",425,525);
  text("100",505,525);
  fill("lightgreen");
  text("200",585,525);
  text("200",665,525);
  text("200",745,525);

  Engine.update(engine);
  
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }

   

   //if(frameCount%60===0){
     //particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     
   //}
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   ground.display();

   

   if (particle != null){

    particle.display();
      if(particle.body.position.y > 760){

      if(particle.body.position.x < 300){
             
          score = score+500;
          particle.body.position.x = 850
          if(turn>= 7) gameState = "end";
            }

      if(particle.body.position.x > 300 && particle.body.position.x < 600){
             
      score = score+100;
     particle.body.position.x = 850
      if(turn>= 7) gameState= "end" 
                }
            
      if(particle.body.position.x > 600 && particle.body.position.x < 800){
             
        score = score+200;
        particle.body.position.x = 850;
        
        if(turn>= 7) gameState= "end"

                    }


            }
            }



            if(gameState === "end"){
            
              fill("white");
              textSize(45);
              textFont("georgia")
              text("GAME OVER",280,240);



            }
            }




function mousePressed(){
   if(gameState !== "end"){
     turn++;
    particle = new Particle(mouseX,10,10,10);



   }



}