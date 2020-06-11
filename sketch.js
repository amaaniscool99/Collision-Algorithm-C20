
var fixedrect, moveablerect;

function setup() {
createCanvas(800,400);

movablerect =   createSprite(400, 200, 50, 50);
fixedrect = createSprite(200,200, 50, 50);
}

function draw() {
  background(255,255,255);  
  movablerect.x = World.mouseX; 
  movablerect.y = World.mouseY; 
  console.log(movablerect.x-fixedrect.x); 
  if(movablerect.x - fixedrect.x < movablerect.width/2 + fixedrect.width/2 &&
     fixedrect.x - movablerect.x < fixedrect.width /2 + movablerect.width/2 &&
      movablerect.y - fixedrect.y < movablerect.height/2 + fixedrect.height/2 && 
      fixedrect.y - movablerect.y < fixedrect.height/2 + movablerect.height/2) 
      {
         fixedrect.shapeColor = "red";
        movablerect.shapeColor = "red";
      } 
      else { 
        fixedrect.shapeColor = "green"; 
      movablerect.shapeColor = "green"; 
    }
  drawSprites();
}