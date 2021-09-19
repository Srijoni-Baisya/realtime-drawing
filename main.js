function setup(){
    //create the canvas
    canvas = createCanvas(550,500);
    canvas.position(900,150);

    //access the webcam
    video = createCapture(VIDEO);
    video.size(550,550);
    video.position(200,120)

    //initialize the poseNet model
    poseNet = ml5.poseNet(video, modelLoaded);

    //execute the poseNet model
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet is initialized!');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
    }
}

function draw(){
    background('#FF69B4');
}