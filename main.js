noseX=0;
noseY=0;
difference=0;
leftWristY=0;
rightWristX=0;


function setup()
{
    video = createCapture(VIDEO);
    video.size(500, 500);

     canvas = createCanvas(500, 500);
     canvas.position(560, 100);

     poseNet = ml5.poseNet(video, modelLoaded);
     poseNet.on('pose', gotPoses);

}
function draw()
{
    background('#0000FF');

    document.getElementById("text").innerHTML = "Width And Height of the Text will be = " + difference + "px";
    fill('#F90093');
    stroke('#F90093');
    text('Jafri', 100, difference);

}

function modelLoaded()
{
    console.log("PoseNet Is Initialized");
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = resuls[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX +"noseY = " + noseY );

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference= floor(leftWristX - rightWristX);

        console.log(" leftWristX = " + leftWristX + " rightWristX = " + rightWristX + " difference = " + difference);
    }
}

