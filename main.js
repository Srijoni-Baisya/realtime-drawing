//define two variables for holding nose x and y coordinates
noseX = 0;
noseY = 0;

//define two variables to hold x coordinates of left and right wrists
leftWristX = 0;
rightWristX = 0;

//define a variable for holding the difference between the x and y coordinates of left and right wrists
difference = 0;

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

        //fetch the x and y coordinates of the nose and print them on console
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("Nose x coordinate : " + noseX + " , Nose y coordinate :" + noseY);

        //fetch the x coordinates of the left and right wrists 
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;

        //find the difference between x coordinates of left and right wrists
        difference = floor(leftWristX - rightWristX);
        
        //display the x coordinates of the left and right wrists along with their difference on console
        console.log("Left Wrist x coordinate : " + leftWristX + " , Right Wrist x coordinate : " + rightWristX + " , Difference : " + difference)
    }
}

function draw(){
    background('#FF69B4');

    //draw a square
    fill('#00FFFF');
    stroke('#00008B');
    square(noseX-10, noseY-10, difference);

    //display the width and height of the square on the webpage
    document.getElementById("square_side").innerHTML = "Width and Height of the Square Will Be " + difference + " px";
}