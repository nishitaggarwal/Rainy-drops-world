
var r1,r2,r3,r4,r5,r6,r7

function preload () {
 dropsIMG = loadImage("cloudOfDrops.png")
 d1 = loadImage("drop1.png")
 d2 =  loadImage("drop3.jpg")
}

function setup() {
  createCanvas(800,400);
 // createSprite(400, 200, 50, 50);

r1 = createSprite(700,150,50,50)
r1.addImage(dropsIMG)
r1.scale = 1

r2 = createSprite(200,150,50,50)
r2.addImage(dropsIMG)
r2.scale = 1

r3 = createSprite(500,150,50,50)
r3.addImage(dropsIMG)
r3.scale = 1

//r1.visible = false ;

//r2 = createprite()

//r2 = createSprite(700,100,50,50)
//r3.addImage(d1)
//r3.scale = 1
//r3.visible = false;

//r4 = createSprite(700,100,50,50)
//r4.addImage(d1)
//r4.scale = 1
//r4.visible = false;


//r5 = createSprite(700,100,50,50)
//r5.addImage(d1)
//r//5.scale = 1
//r5.visible = false;

}

function draw() {
  background(d2);  

  drawSprites();
}
function keyPressed() {
  
  if (keyCode === DOWN_ARROW) {
  //   Matter.Body.setStatic(canonBody,false);
  
  // r1.visible = true;
//r2.visible = true;
//r3.visible = true;


   }
 }
 