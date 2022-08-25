canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
rover_width=100;
rover_height=100;
rover_x=10;
rover_y=10;
background_image="mars.jpg";
rover_image="rover.png";

function add(){
    background_imgTag=new Image();
    background_imgTag.onload=uploadBackground;
    background_imgTag.src=background_image;

    rover_imgTag=new Image();
    rover_imgTag.onload=uploadrover;
    rover_imgTag.src=rover_image;
}

function uploadBackground(){
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}

function uploadrover(){
    ctx.drawImage(rover_imgTag,rover_x,rover_y,rover_width,rover_height);
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);

    if(keyPressed=='38'){
        up();
        console.log("up");

    }
    if(keyPressed=='40'){
        down();
        console.log("down");

    }
    if(keyPressed=='37'){
        left();
        console.log("left");

    }
    if(keyPressed=='39'){
        right();
        console.log("right");

    }
}

function up(){
    if(rover_y >=0){
        rover_y = rover_y - 10;
        console.log("When Up arrow is pressed, x = " + rover_x + ",y = " +rover_y);
        uploadBackground();
        uploadrover();
    }
}
function down(){
    if(rover_y <=500){
        rover_y = rover_y + 10;
        console.log("When Down arrow is pressed, x = " + rover_x + ",y = " +rover_y);
        uploadBackground();
        uploadrover();
    }
}
function left(){
    if(rover_x >=0){
        rover_x = rover_x - 10;
        console.log("When left arrow is pressed, x = " + rover_x + ",y = " +rover_y);
        uploadBackground();
        uploadrover();
    }
    
}
function right(){
    if(rover_x <=700){
        rover_x = rover_x + 10;
        console.log("When Up arrow is pressed, x = " + rover_x + ",y = " +rover_y);
        uploadBackground();
        uploadrover();
    }
}

var nasa_array=["http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG","http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FRB_486265257EDR_F0481570FHAZ00323M_.JPG","http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/rcam/RLB_486265291EDR_F0481570RHAZ00323M_.JPG","http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/rcam/RRB_486265291EDR_F0481570RHAZ00323M_.JPG","http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044631300503690E01_DXXX.jpg","http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044631300305227E03_DXXX.jpg","http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044631290503689E01_DXXX.jpg","http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044631290305226E03_DXXX.jpg","http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044631280503688E0B_DXXX.jpg","http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044631280305225E03_DXXX.jpg","http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044631270503687E03_DXXX.jpg","http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044631270305224E03_DXXX.jpg"];
var random_number=Math.floor(Math.random()*12);
background_image=nasa_array[random_number];
console.log("background_image=" + background_image);