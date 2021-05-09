const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var hour;

var bg ;

function preload() {
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    if(backgroundImg){
        background(backgroundImg);
    }


    Engine.update(engine);

    // write code to display time in correct format here
    textSize(30);
    fill(255)
    text("time:"+hour, 100, 50);


}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    //change the data in JSON format
    var responseJson= await response.json();
    // write code slice the datetime
    var dateTime=responseJson.datetime;
    hour=dateTime.slice(11, 13);

    // add conditions to change the background images from sunrise to sunset
    if(hour>=0 && hour<=6){
        bg="sunset11.png";
    }
    else if(hour>=6 && hour<=7){
        bg="sunrise3.png";
    }
    else if(hour>=7 && hour<=8){
        bg="sunrise4.png";
    }
    else if(hour>=9 && hour<=14){
        bg="sunrise5.png";
    }
    else if(hour>=14 && hour<=16){
        bg="sunrise6.png";
    }
    else if(hour>=16 && hour<=17){
        bg="sunset7.png";
    }
    else if(hour>=17 && hour<=18){
        bg="sunset8.png";
    }
    else if(hour>=18 && hour<=19){
        bg="sunset9.png";
    }
    else if(hour>=19 && hour<=20){
        bg="sunset10.png";
    }
    else{
        bg="sunset12.png";
    }

    //load the image in backgroundImg variable here
    backgroundImg=loadImage(bg);
}
