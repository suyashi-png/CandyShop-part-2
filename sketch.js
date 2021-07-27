var gameState = 1
var form
var candiesCollected=0
var level = 0
function preload(){
  //load images here
  bg11 = loadImage ("images/bg1.jpg")
  bg12 = loadImage ("images/B1.Jpg")
  bg13 = loadImage ("images/B2.jpg")
  bg14 = loadImage ("images/B3.jpg")
  c1 = loadImage ("images/C1.jpg")
  c2 = loadImage ("images/c2.jpg")
  c3 = loadImage ("images/C3.jpg")
  c4 = loadImage ("images/c4.jpg")
  c5 = loadImage ("images/chocolate-fountain.jpg")
  bg1 = loadImage ("images/firstbg.jpg")
  police1 = loadImage ("images/policemen1.jpg")
  police2 = loadImage ("images/policemen2.jpg")
  police3= loadImage ("images/policemen3.jpg")
  bg2 = loadImage ("images/secondbg.jpg")
  theifImage = loadImage ("images/theif.jpg")







}

function setup() {
  createCanvas(displayWidth,displayHeight);
  form = new Form()
  

  player = createSprite(80,90,300,30)
  player.shapeColor = "red"
  player.addImage(theifImage)
  player.scale =0.5

  policemen1= createSprite(600,500,20,20);
  policemen1.addImage(police1)
  policemen1.scale =0.5
  policemen3= createSprite(600,300,20,20);
  policemen3.addImage(police3)
  policemen3.scale =0.3

  block0 = createSprite(400, 0, 550, 20);
  block1 = createSprite(400, 200, 550, 20);
  block2 = createSprite(400, 400, 550, 20);
  block3 = createSprite(400, 600, 550, 20);
  block4 = createSprite(400, 800, 550, 20);
  block5 = createSprite(400, 1000, 550, 20);
  
  block0 = createSprite(1300, 0, 525, 20);
  block1 = createSprite(1300, 200, 525, 20);
  block2 = createSprite(1300, 400, 525, 20);
  block3 = createSprite(1300, 600, 525, 20);
  block4 = createSprite(1300, 800, 525, 20);
  block5 = createSprite(1300, 1000, 525, 20);
  

  candiesGroup= createGroup()

}

function draw() {
  background(255,255,255); 
  //game Start
  if(gameState === 0){
    form.display();
  } 
  
  //play game
  if(gameState === 1){
    if(level ==0){
        player.collide(block0)
        player.collide(block1)
        player.collide(block2) 
        player.collide(block3)
        player.collide(block4)
        player.collide(block5)
        
        //moving player up
        if(keyDown("up")){
          player.y-=20
        }
        spawncandies()
        if(keyDown("down")){
          player.y+=20
        }

    if(keyDown ("left")){
      player.x-=20
      
    }
    if(keyDown ("right")){
      player.x+=20
    }

    if(frameCount% 30 ===0){
      policemen3.x = random(0,1800)
      policemen3.y = random(0,920)
      policemen1.x = random(0,1800)
      policemen1.y = random(0,920)
    }
    if(player.isTouching(policemen3)||player.isTouching(policemen1) ){
    level =1  
    }
    
    if(player.isTouching(candiesGroup)){
      candiesCollected+=1
      candiesGroup.destroyEach()
    }
  }
    if(level == 1){
      textSize(40)
      text("game over/n you are caught", 400,400)    
    }
 
  }

  else if(gameState === 2){
    //story
    textSize(55)
    fill("yellow")
    text("",100,200)
    //form.button1.show()
  }

  else if (gameState === 3){
    //how to play
    textSize(55)
    fill("yellow")
    text("",100,400)
  }

  else if (gameState === 4){
    //select bg

  }

  else if (gameState === 5){
    //rules
    textSize(45)
    fill("yellow")
    text("RULES: ",600,100)
    text("",50,160)
  }
  


  drawSprites();
  textSize(50)
  text("candies Collected  "+candiesCollected,displayWidth-500,100 )
  text(mouseX +","+mouseY,mouseX,mouseY)
}

//function to make candies
function spawncandies(){
  if(frameCount %200 ===0){
    candies = createSprite(random(0,1800),random(0,920),250,250)    
    //candies .velocityX = -6
    candies .lifetime = 400
    var r  = Math.round(random(1,5))
    console.log(r)
    switch(r){
      case 1: candies.addImage(c1)
      break;
      case 2: candies.addImage(c2)
      break;
      case 3: candies.addImage(c3)
      break;
      case 4: candies.addImage(c4)
      break;
      case 5: candies.addImage(c5)
      break;
      default: break;
    }
    candies.scale =0.2
    candiesGroup.add(candies)
  }
}

//function to move police



//homework
//1) make the layout of maze game
//2) make player bounce off all the blocks
//3) make player move with up, down, left keys
//4) load all images
