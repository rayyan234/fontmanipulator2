function preload(){

}

function setup(){
video = createCapture(VIDEO);
video.size(500,500);
canvas = createCanvas(600,450);
canvas.position(550,100);
posenet=ml5.poseNet(video,modelLoaded);
posenet.on('pose',gotPoses);
}

function draw(){
background('#77eb34');
}

function modelLoaded(){
    console.log("posenet is initialised");
}

function gotPoses(results){
if(results.length>0){
    console.log(results);
}
}
