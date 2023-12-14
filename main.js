noseX = 0 ;
noseY = 0 ;
difference = 0 ;
leftWristX = 0 ;
rightWristX = 0 ;

function setup() {
    video = createCapture(VIDEO) ;
    video.size(550 , 500) ;

    canvas = createCanvas(500 , 470) ;
    canvas.position(800 , 90) ;

    poseNet = ml5.poseNet(video , modelLoaded) ;
    poseNet.on('pose' , gotPoses) ;
} 

function modelLoaded() {
    console.log('PoseNet Is Initialised.') ;
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results) ;
        noseX = results[0].pose.nose.x ;
        noseY = results[0].pose.nose.y ;
        console.log("Nose X : " + noseX + " Nose Y : " + noseY) ;

        leftWristX = results[0].pose.leftWrist.x ;
        rightWristX = results[0].pose.rightWrist.y ;
        difference = floor(leftWristX - rightWristX) ;
        console.log("Left Wrist X : " + leftWristX + " Right Wrist X : " + rightWristX + " Difference : " + difference) ;
    }
}

function draw() {
    document.getElementById("square_side").innerHTML = "The Side Of The Square Will Be : " + difference + "px" ;

    background('#969A97') ;
    fill('#87CEEB') ;
    stroke('#87CEEB') ;
    square(noseX , noseY , difference) ;
}