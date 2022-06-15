var canvas,back,database;
var form,game,player,playerImg,playerCount;
var gameState=0,kScore=3,lScore=3;
var keyImg,kLogo,k,lifeImg,lLogo,life;
var stoneGroup,stoneImg,stone1,stone2,stone3,stone4,stone5,stone6,stone7,stone8,stone9,stone10;
var stone11,stone12,stone13,stone14,stone15,stone16,stone17,stone18,stone19,stone20,stone;
var thornsImg,thorns,treasureImg,treasure;

function preload() {
  back=loadImage("cave.jpg");
  playerImg=loadImage("hunter.png");
  keyImg=loadImage("key.png");
  lifeImg=loadImage("heart.png");
  stoneImg=loadImage("stone.png");
  thornsImg=loadImage("thorns.png");
  treasureImg=loadImage("chest.png");
}

function setup() {
  canvas = createCanvas(700, 450);
  database = firebase.database();
  game = new Game();
  game.start();
}

function draw() {

  background(back);

  switch (gameState) {
    case 0:
      fill("red");
      textSize(30);
      text("Treasure Hunter",225,150);    
    break;

    case 1:
      fill("yellow");
      textSize(25);
      text("Hello " + this.form.input.value(),25,100);
      text("You have been assigned to go in the cave and collect",25,135);
      text("the treasures and the most precious Ruby. To reach there",25,170);
      text("use the arrow keys to control the player. Each time you fall",25,205);
      text("1 life gets destroyed. To open the treasure box you have",25,240);
      text("to collect 3 keys. But beware it will not be that easy.",25,275);

      game.display();
    break;

    case 2:
      push();
        fill("yellow");
        textSize(25);
        text(""+kScore,550,28);
        text(""+lScore,625,28);
      pop();
      
      fill("yellow");
      text("" + this.form.input.value(),player.x-25,player.y-55);
      
      game.play();

      if(stone.x===550){
        stone.velocityX=0;
        stone1.velocityX=0;
        stone2.velocityX=0;
        stone3.velocityX=0;
        stone4.velocityX=0;
        stone5.velocityX=0;
        stone6.velocityX=0;
        stone7.velocityX=0;
        stone8.velocityX=0;
        stone9.velocityX=0;
        stone10.velocityX=0;
        stone11.velocityX=0;
        stone12.velocityX=0;
        stone13.velocityX=0;
        stone14.velocityX=0;
        stone15.velocityX=0;
        stone16.velocityX=0;
        stone17.velocityX=0;
        stone18.velocityX=0;
        stone19.velocityX=0;
        stone20.velocityX=0;
        k.velocityX=0;
        life.velocityX=0;
        thorns.velocityX=0;
        treasure.velocityX=0;
        if(kScore>=3){
          textSize(20);
          fill("red");
          text("Congrates You have found the treasure",50,100);
          text("In level 2 you will use the weapon to fight against the skulls",50,125);
          text("to reach till the ruby",50,150);
          text("Press N to into the Level 2",50,175);
          if(keyDown("n")){
          gameState=5;
        }
        if(kScore<3){
          fill("#DE711F");
          rect(500,5,10,325);
          textSize(25);
          fill("red");
          text("Ohh No You don't have enough keys",90,200);
        }
      }

      if(player.isTouching(k)||k.x<0){
        kScore+=1;
        k.position.x=2125;
        k.position.y=150;
      }

      if(player.isTouching(life)||life.x<0){
        if(player.isTouching(life)&&lScore<3){
         lScore+=1;
        }
        life.position.x=3600;
        life.position.y=200;
      }

      if(player.y>450||player.y<0||player.x<0||player.x>700){
        lScore-=1;
        gameState=3;
      }
      
      if(player.isTouching(thorns)){
        lScore-=1;
        gameState=3;
      }

      if(keyDown("r")){
        gameState=2;
      }

      if(thorns.x<0){
        if(thorns.y===225){
          thorns.x=4200;
          thorns.y=300;
        }
        thorns.x=2325;
        thorns.y=225;
      }

      if(lScore===0){
        gameState=4;
      }
    break;

    case 3:
      textSize(25);
      fill("yellow");   
      text("Press R to restart",350,200);

      player.position.x=50;
      player.position.y=250;
      life.position.x=1500;
      k.position.x=580;
      k.position.y=125;
      thorns.position.x=700;
      thorns.position.y=175;
      stone1.position.x=48;
      stone2.position.x=275;
      stone3.position.x=500;
      stone4.position.x=700;
      stone5.position.x=925;
      stone6.position.x=1225;
      stone7.position.x=1500;
      stone8.position.x=1800;
      stone9.position.x=2125;
      stone10.position.x=2400;

      stone11.position.x=2700;
      stone12.position.x=3025;
      stone13.position.x=3300;
      stone14.position.x=3600;
      stone15.position.x=3925;
      stone16.position.x=4200;
      stone17.position.x=4500;
      stone18.position.x=4825;
      stone19.position.x=5100;
      stone20.position.x=5350;
      stone.position.x=5850;

      kScore=0;

      if(keyDown("r")){
        gameState=2;
      }


    break;

    case 4:
      background("black");
      textSize(25);
      fill("red");
      text("Sorry "+this.form.input.value()+" Game Over",200,200);
      stoneGroup.destroyEach();
      kLogo.destroy();
      k.destroy();
      lLogo.destroy();
      life.destroy();
      thorns.destroy();
    break;

    case 5:

    break;

    default:

    break;
  }

  drawSprites();

  if(gameState!=0){
   fill("red");
   textSize(20);
   text("Treasure Hunter",3,18);
  }
  
}