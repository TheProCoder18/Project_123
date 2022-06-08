
difference = 0;
rightWristX = 0;
leftWristX = 0;
function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Intialized!');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + rightWristX +" noseY = " + noseY);

        

        console.log("leftWristX = " + leftWristX + " rightWristX = "+ rightWristX + "diffrence = " + difference);

    }
}

function draw() {
    background('#6C91C2');

    document.getElementById("font_size").innerHTML = "Font size of the text will be  = " + difference + "px";
    textSize(diffrence);
    fill('#FFE787');
    
    text('Peter', 50, 400);
}

