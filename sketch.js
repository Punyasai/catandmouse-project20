var bcgr;
var together;
var cat, catImg1,catImg2;
var mouse, mouseImg1,mouseImg2;


function preload() {
    //load the images here

    bcgr = loadImage("images/garden.png");
    catImg1= loadAnimation("images/cat1.png");
    catImg2=loadAnimation("images/cat2.png","images/cat3.png");
    catLastImg= loadAnimation("images/cat4.png");
    mouseImg1=loadAnimation("images/mouse1.png");
    mouseImg2= loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseLastImg=loadAnimation("images/mouse4.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    cat = createSprite(870, 600);
    cat.addAnimation("catSleeping", catImg1);
    cat.scale = 0.08;

    mouse = createSprite(200, 600);
    mouse.addAnimation("mouseStanding", mouseImg1);
    mouse.scale = 0.10;



}

function draw() {

    background(bcgr);
    //Write condition here to evalute if tom and jerry collide


    if(cat.x - mouse.x < (cat.width - mouse.width)/2)
    { 
        cat.velocityX=0;
        cat.addAnimation("catLastImage", catLastImg);
        cat.x =300;
        cat.scale = 0.08;
        cat.changeAnimation("catLastImage");

        if(cat.isTouching(mouse)){
            mouse.addAnimation("mouseLastImg",mouseLastImg);
            mouse.changeAnimation("mouseLastImg");

        }
        
    }
    
    







    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if(keyCode === LEFT_ARROW){
    cat.velocityX = -5; 
    cat.addAnimation("catRunning", catImg2);
    cat.changeAnimation("catRunning");

    mouse.addAnimation("mouseImg2",mouseImg2);
    mouse.changeAnimation("mouseImg2");
    
    
}


}
