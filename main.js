function preload(){
mustache = loadImage('Mustachos.jpg');
}

function setup(){
canvas = createCanvas(500,500);
canvas.position(450,200);
video = createCapture(VIDEO);
video.size(500,500);
video.hide();
poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}

function modelLoaded(){
console.log('PoseNet is intialized');
}

function gotPoses(results){
if(results.length>0){
console.log(results);
console.log("nose X = " + results[0].pose.nose.x);
console.log("nose Y = " + results[0].pose.nose.y);
}
}

function draw(){
image(video , 0 , 0 , 500,500);
}

function takesnapshot(){
save('project.png');
}
