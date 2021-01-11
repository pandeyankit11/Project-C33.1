const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles =[];
var plinkos =[];
var divisions =[];
var divisionHeight =300;
var score = 0;
var particle;
var gameState ="play";
var count=0;
function setup(){
    var canvas = createCanvas(1442,715);
    engine = Engine.create();
    world = engine.world;
    
ground =new Ground(width/2,height,width,30);
for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
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


function draw(){
    background(0);
    textSize(45);
   text("Score :"+score,0,45);
    fill("yellow");
    fill("orange");
   textSize(40);
   text("600",7,450);
   text("600",87,450);
   text("600",167,450);
   fill("green");
   text(40);
   text("500",247,450);
   text("500",327,450);
   text("500",407,450);
   fill("cream");
   textSize(40);
   text("400",487,450);
   text("400",567,450);
   text("400",647,450);
   fill("red");
   textSize(40);
   text("300",727,450);
   text("300",807,450);
   text("300",887,450);
   fill("yellow");
   textSize(40);
   text("200",967,450);
   text("200",1047,450);
   text("200",1127,450);
   fill("pink");
   textSize(40);
   text("100",1207,450);
   text("100",1287,450);
   text("100",1367,450);

    Engine.update(engine);
    ground.display();
    if(gameState==="end"){
       textSize(105);
       text("Game Over",450,263);
    }
    
   
   
    for (var i = 0; i < plinkos.length; i++) {
     
        plinkos[i].display();
        
      }
      
      if(particle!=null){
         particle.display();
   
         if(particle.body.position.y>680)
         {
          if(particle.body.position.x<247){
             score=score+600;
             particle=null;
             if(count>=5) gameState="end";
          }
          else if(particle.body.position.x<427&&particle.body.position.x>247){
          score=score+500;
          particle=null;
          if(count>=5) gameState="end";
          }
         else if(particle.body.position.x<675&&particle.body.position.x>407){
         score=score+400;
         particle=null;
         if(count>=5) gameState="end";
         }
         else if(particle.body.position.x<917&&particle.body.position.x>647){
            score=score+300;
            particle=null;
            if(count>=5) gameState="end";
            }
            else if(particle.body.position.x<1157&&particle.body.position.x>887){
               score=score+200;
               particle=null;
               if(count>=5) gameState="end";
               }
               else if(particle.body.position.x<1410&&particle.body.position.x>1127){
                  score=score+100;
                  particle=null;
                  if(count>=5) gameState="end";
                  }
      }
    }
    
     
      for (var k = 0; k < divisions.length; k++) {
        
        divisions[k].display();
      }
    }
function mousePressed(){
   if(gameState!=="end"){
      count++;
      particle =new Particle(mouseX,10,10,10);

   }
}
