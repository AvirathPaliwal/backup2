START = 1
PLAY = 2
FACTORY = 3
HOME = 4
END = 0

var bg, bg_img,bg2,bg2_img,bg3,bg3_img,bg4,bg4_img,bg5,bg5_img;
var bike, bike_img;

var house, house_img;

var man, man_wait, man_running,man_walking;

var ib;

var boy, girl, boy_img, girl_img;

var women, women_running, women_wait;

var choose, choose_img;

var story, story_img;

var names, name_img;

var viresGroup, maskGroup,sanitizerGroup,machineGroup;

var gameState = START

var Sound, jumpSound;

var gameover,restart,gameover_img,restart_img;

var flag=0;

var virus, virus_img, virus2_img, virus3_img;
var heart, heart2, heart3, heart_img, heart2_img, heart3_img;
var heartCount = 3,score = 0,maskCount = 0,sanitizerCount=0;
var funny1, funny1_img;
var mask, mask_img,mask2,mask2_img,sanitizer,sanitizer_img,sanitizer2,sanitizer2_img;

var machine,m1,m2,m3,m4,m5,m6,m7;

function preload() {
  bg_img = loadImage("background/sunrise.jpg");
  bg2_img = loadImage("background/background2.png");
  bg3_img = loadImage("background/background4.jpg");
  bg4_img = loadImage("background/night.png");
  bg5_img = loadImage("background/you win.jpg");
  man_wait = loadAnimation("wait.png");
  man_running = loadAnimation("run/run1.png", "run/run2.png", "run/run3.png", "run/run4.png", "run/run5.png", "run/run6.png", "run/run7.png",
"run/run8.png");
man_walking = loadAnimation("walk/walk1.png","walk/walk2.png","walk/walk3.png","walk/walk4.png","walk/walk5.png","walk/walk6.png",
"walk/walk7.png","walk/walk8.png","walk/walk9.png","walk/walk10.png","walk/walk11.png",);
  house_img = loadImage("background/background3.png");
  bike_img = loadAnimation("bike/bike1.png", "bike/bike2.png", "bike/bike3.png", "bike/bike4.png", "bike/bike5.png", "bike/bike6.png",
    "bike/bike7.png", "bike/bike8.png", "bike/bike9.png", "bike/bike10.png");
  boy_img = loadImage("boy.png");
  girl_img = loadImage("girl.png");
  women_wait = loadAnimation("girl/wait.png");
  women_running = loadAnimation("girl/girl1.png", "girl/girl2.png", "girl/girl3.png", "girl/girl4.png", "girl/girl5.png", "girl/girl6.png",
"girl/girl7.png", "girl/girl8.png", 
"girl/girl9.png");
  choose_img = loadImage("choose.png");
  story_img = loadImage("storyline.png");
  name_img = loadImage("name.png");
 //  Sound=loadSound("sound/backgroundsound.m4a");  
  jumpSound = loadSound("sound/jumpsound.m4a");

  virus_img = loadImage("viress/covid-19.png");
  virus2_img = loadImage("viress/vires.png");
  virus3_img = loadImage("viress/vires2.png");
  heart_img = loadImage("heart.png");
  funny1_img = loadImage("funny/abayega .png");
  mask_img = loadImage("protect/mask.png");
  mask2_img = loadImage("protect/mask2.png");
  sanitizer_img = loadImage("protect/santizer.png");
  sanitizer2_img = loadImage("protect/sanitizer2.png");
  m1 = loadImage("machine/machine1.png");
  m2 = loadImage("machine/machine2.png");
  m3 = loadImage("machine/machine3.png");
  m4 = loadImage("machine/machine4.png");
  m5 = loadImage("machine/machine5.png");
  m6 = loadImage("machine/machine6.png");
  m7 = loadImage("machine/machine7.png");
  gameover_img = loadImage("gameover.png");
  restart_img = loadImage("restart.png");
}

function setup() {
  createCanvas(1300, 700);

  // background
  bg = createSprite(700, 300, 10, 10);
  bg.addImage("backgrounds", bg_img);
  bg.visible = false;
  bg.scale = 3.2
  bg2 = createSprite(1600,430,10,10);
  bg2.addImage("bg2",bg2_img);
  bg2.visible=false;
  bg2.scale=1;
  bg3 = createSprite(800,300,10,10);
  bg3.addImage("bg3",bg3_img);
  bg3.visible=false;
  bg3.scale=3
  bg4 = createSprite(800,30,10,10);
  bg4.addImage("bg4",bg4_img);
  bg4.visible=false;
  bg4.scale=0.7
  bg5 = createSprite(650,350,10,10);
  bg5.addImage("bg5",bg5_img);
  bg5.visible=false;
  bg5.scale =2.2
  // house
  house = createSprite(350, 500, 10, 10);
  house.addImage("h", house_img)
  house.visible = false;
  house.scale = 2.5
  house.lifetime = 2010
  // man
  man = createSprite(100, 600, 10, 10);
  man.addAnimation("wait", man_wait);
  man.visible = false
  man.addAnimation("run", man_running);
  man.addAnimation("walk",man_walking);
  // ib 
  ib = createSprite(700, 680, 1400, 5);
  ib.visible = false;
  ib.shapeColor = "red"
  // women
  women = createSprite(100, 615, 10, 10);
  women.addAnimation("wait2", women_wait);
  women.visible = false;
  women.addAnimation("run2", women_running);

  choose = createSprite(650, 250, 10, 10);
  choose.addImage("c", choose_img);
  choose.scale = 0.6

  story = createSprite(700, 500, 10, 10);
  story.addImage("storytime", story_img);
  story.scale = 0.7

  names = createSprite(650, 70, 10, 10);
  names.addImage("name", name_img);
  names.scale = 0.6
  heart = createSprite(469, 34, 10, 10);
  heart.scale = 0.09;
  heart.visible = false;
  mask2 = createSprite(661,33,10,10);
  mask2.addImage("mask2",mask2_img);
  mask2.visible=false;
  mask2.scale=0.2
  sanitizer2 = createSprite(829,33,10,10);
  sanitizer2.addImage("sanitizer2",sanitizer2_img);
  sanitizer2.visible=false;
  sanitizer2.scale=0.10
  gameover = createSprite(640,242,10,10);
  gameover.addImage("game",gameover_img);
  gameover.scale=0.5
  gameover.visible=false
  restart = createSprite(620,348,10,10);
  restart.addImage("restart",restart_img);
  restart.scale=0.5
  restart.visible=false


  funny1 = createSprite(1100, 500, 10, 10);
  funny1.addImage("f1", funny1_img);
  funny1.scale = 0.09
  swanpboy()
  swanpgirl()



  virusGroup = createGroup();
  maskGroup = createGroup();
  sanitizerGroup = createGroup();
  machineGroup = createGroup();

}

function draw() {
 // Sound.play();
  background(0);
  drawSprites();
  textSize(20);
  fill("black");
  text("DISTANCE   :  " + score, 1000, 45);
  heart.addImage("h", heart_img);

  textSize(20);
  fill("black")
  text("   " + heartCount, 485, 36);
  text(mouseX + "," + mouseY, mouseX, mouseY)


  textSize(20);
  fill("black");
  text("   " + maskCount, 679, 43);

  textSize(20);
  fill("black");
  text("   " + sanitizerCount,837,43);
  if (gameState === START) {

    if (mousePressedOver(boy)) {
      man.visible = true;
      bg.visible = true;
      house.visible = true;
      bg.velocityX = -6;
      boy.visible = false;
      girl.visible = false;
      choose.visible = false;
      story.visible = false;
      names.visible = false;
      heart.visible = true;
      funny1.visible = false;
      sanitizer2.visible=true
      mask2.visible=true;
      gameState = PLAY;
    }

    if (mousePressedOver(girl)) {
      women.visible = true;
      bg.visible = true;
      house.visible = true;
      bg.velocityX = -6;
      mask2.visible=true;
      sanitizer2.visible=true;
      boy.visible = false;
      girl.visible = false;
      choose.visible = false;
      story.visible = false;
      names.visible = false;
      heart.visible = true;
      funny1.visible = false;
      gameState = PLAY;
    }

  }

  if (gameState === PLAY) {
    seanpbike();
    swapmask();
    swapsanitizer();
    score = score + Math.round(getFrameRate()/60);
    if (keyDown("space")) {
      jumpSound.play();
      man.velocityY = -10
      women.velocityY = -10
    }
    man.velocityY += 0.5;
    women.velocityY += 0.5;

    swapvirus()
    if (keyDown(UP_ARROW)) {
      man.changeAnimation("run", man_running);
      women.changeAnimation("run2", women_running);
      house.velocityX = -3

    }

    for (var i = 0; i < virusGroup.length; i++) {
      if (virusGroup.get(i).isTouching(man) && virusGroup.isTouching(women) ) {
        virusGroup.get(i).destroy();
       // heartCount -= 1;
        maskCount -= 1;
        sanitizerCount-=1;
       // flag=2;
      }
      
    }
    if(maskCount === 0 && virusGroup.isTouching(man)){
           heartCount-=1;
    }
  

    for (var d = 0; d < maskGroup.length; d++) {
      if (maskGroup.get(d).isTouching(man) && maskGroup.isTouching(women)) {
        maskGroup.get(d).destroy();
        maskCount += 1
      }
    }
    for(var j = 0; j <sanitizerGroup.length; j++){
       if(sanitizerGroup.get(j).isTouching(man) && sanitizerGroup.isTouching(women)){
          sanitizerGroup.get(j).destroy();
          sanitizerCount+=1

       }
    }
    

    if(score > 1200){
       bg2.visible=true
       bg2.velocityX=-4
    }
    if(score > 1300){
       bg.visible=false;
       bg2.visible=false;
       bg3.visible=true;
       bg3.velocityX = -6;
       
       gameState = FACTORY;
    }


 }
if (heartCount === 0) {
    gameState = END;
  }

  if (gameState === END) {
    bg.velocityX = 0
    bg2.velocityX = 0
    bg3.velocityX = 0
    bg4.velocityX = 0
    bg5.velocityX = 0
    man.velocityY = 0
    man.changeAnimation("wait", man_wait);
    women.velocityX = 0
    women.changeAnimation("wait2", women_wait);
    virusGroup.setVelocityXEach(0)
    machineGroup.setVelocityXEach(0);
    machineGroup.destroyEach();
    maskGroup.setVelocityXEach(0);
    maskGroup.destroyEach();
    sanitizerGroup.setVelocityXEach(0);
    santizerGroup.destroyEach();
    gameover.visible = true;
    restart.visible = true;

    if (mousePressedOver(restart)) {
      reset();

    }

 }

  if(gameState === FACTORY){
   textSize(20);
   fill("yellow");
   text("DISTANCE   :  " + score, 1000, 45);
   heart.addImage("h", heart_img);
    swanpmachine();
    swapmask();
    swapsanitizer();
    score = score + Math.round(getFrameRate()/60);
    if (keyDown("space")) {
      jumpSound.play();
      man.velocityY = -10
      women.velocityY = -10
    }
    man.velocityY += 0.5;
    women.velocityY += 0.5;

    swapvirus()
    if (keyDown(UP_ARROW)) {
      man.changeAnimation("run", man_running);
      women.changeAnimation("run2", women_running);
      house.velocityX = -3

    }

    for (var i = 0; i < virusGroup.length; i++) {
      if (virusGroup.get(i).isTouching(man) && virusGroup.isTouching(women)) {
        virusGroup.get(i).destroy();
        heartCount -= 1;
        maskCount -= 1;
        sanitizerCount-=1;
      }
    }
    //if (maskCount === 0 && virusGroup.isTouching(man)) {

    //}


     for(var m = 0; m<machineGroup.length; m++){
        if(machineGroup.get(m).isTouching(man) && machineGroup.isTouching(women)){
           machineGroup.get(m).destroy();
           heartCount -=1

        }
     }

   if (bg3.x < 0) {
      bg3.x = bg3.width / 2;
    }

    if(score>900){
      bg3.visible=false;
      bg4.visible=true;
      bg4.velocityX=-6
      gameState = HOME;
    }

  } 

  if(gameState === HOME){
    textSize(20);
   fill("yellow");
   text("DISTANCE   :  " + score, 1000, 45);

   textSize(20);
  fill("yellow")
  text("   " + heartCount, 485, 36);
   heart.addImage("h", heart_img);
   man.changeAnimation("walk",man_walking);
   score = score + Math.round(getFrameRate()/60);
    if (keyDown("space")) {
      jumpSound.play();
      man.velocityY = -10
      women.velocityY = -10
    }
    man.velocityY += 0.5;
    women.velocityY += 0.5;

    swapvirus()
    

    for (var i = 0; i < virusGroup.length; i++) {
      if (virusGroup.get(i).isTouching(man) && virusGroup.isTouching(women)) {
        virusGroup.get(i).destroy();
        heartCount-=1
       
      }
    }
     if(bg4.x < 0){
       bg4.x = bg4.width / 2;
     }

     
     if(score>1200){
       bg5.visible = true;
       virusGroup.destroyEach();
       man.destroy();
       women.destroy();
       heart.visible=false;
       heartCount.visible=false;
       score.visible=false;
       textSize(20);
   text("DISTANCE   :  " + score, 1390, 45);

     }

  }




 

  if (bg.x < 0) {
    bg.x = bg.width / 2;
  }

  man.collide(ib);
  women.collide(ib);

}

function swanpboy() {
  boy = createSprite(200, 200, 10, 10);
  boy.addImage("b", boy_img);
}

function seanpbike() {
  if (frameCount % 1300 === 0) {
    bike = createSprite(0, 450, 20, 20);
    bike.addAnimation("b", bike_img);
    bike.scale = 2
    bike.velocityX = 6
    bike.lifetime = 500;
  }
}

function swanpgirl() {
  girl = createSprite(1100, 200, 10, 10);
  girl.addImage("girl", girl_img);
  girl.scale = 0.5
}

function swapvirus() {
  if (frameCount % 200 === 0) {
    virus = createSprite(1300, 600, 10, 10);
    virus.y = Math.round(random(400,600));
    virus.velocityX = -(3+2*score/100);
    virus.scale = 0.2;
    var v = Math.round(random(1, 3))
    switch (v) {
      case 1: virus.addImage("b", virus_img);
        break;
      case 2 : virus.addImage("b2", virus2_img);
        break;
      case 3 : virus.addImage("b3", virus3_img);
        break;
      default:
        break;

    }
    virus.lifetime = 500;
    virusGroup.add(virus);
  }

}

function swapmask() {
  if (frameCount % 100 === 0) {
    mask = createSprite(1350, 500, 10, 10);
    mask.y = Math.round(random(100, 500));
    mask.addImage("mask", mask_img);
    mask.scale = 0.09;
    mask.velocityX = -6;
    //time = distance/speed   
    mask.lifetime = 500;
    maskGroup.add(mask);
  }
}

function swapsanitizer(){
    if(frameCount%1100 === 0){
       sanitizer = createSprite(1350,500,10,10);
       sanitizer.y = Math.round(random(200,400));
       sanitizer.addImage("sanitizer",sanitizer_img);
       sanitizer.scale=0.20;
       sanitizer.velocityX = -6;
       sanitizer.lifetime = 500;
       sanitizerGroup.add(sanitizer);
    }

}

function swanpmachine(){
   if(frameCount%290 ===0){
   machine = createSprite(1350,600,10,10);
   machine.y = Math.round(random(450,600));
   machine.velocityX = -(3+2*score/100);
   var m = Math.round(random(1,7));
   switch(m){
      case 1 : machine.addImage("m1_img",m1);
      break;
      case 2 : machine.addImage("m2_img",m2);
      break;
      case 3 : machine.addImage("m3_img",m3);
      break;
      case 4 : machine.addImage("m4_img",m4);
      break;
      case 5 : machine.addImage("m5_img",m5);
      break;
      case 6 : machine.addImage("m6_img",m6);
      break;
      case 7 : machine.addImage("m7_img",m7);
      break;
      default:
      break

   }
   machine.lifetime=500;
   machineGroup.add(machine);
}
}

function reset(){
  gameState = START;
  gameover.visible=false;
  restart.visible=false;
  virusGroup.destroyEach();
  machineGroup.destroyEach();
  man.changeAnimation("wait",man_wait);
  women.changeAnimation("wait2",women_wait);
  bg.visible=false;
  boy.visible=true;
  girl.visible=true;
  man.visible=false;
  women.visible=false;
  mask2.visible=false;
  sanitizer2.visible=false
  house.visible=false;
  choose.visible = true;
  story.visible = true;
  names.visible = true;
  heart.visible = false;
  funny1.visible = true;
  score=0;
  heartCount=6;

}

