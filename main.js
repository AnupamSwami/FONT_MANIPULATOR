leftWristX = 0 ;
rightWristX = 0 ;
difference = 0 ;

function setup() {
    canvas = createCanvas(400 , 400) ;
    canvas.position(850 , 153) ;
    video = createCapture(VIDEO) ;
    video.size(500 , 475) ;
    video.position(100 , 117) ;

    poseNet = ml5.poseNet('pose' , modelLoaded) ;
    poseNet.on(video , gotPoses) ;
}

function modelLoaded() {
    console.log('PoseNet Is Initialised') ;
}

function gotPoses(results,error){
    if(error){
        console.error(error);
    }
    if(results.length > 0){
        console.log(results);

        leftWrist_x = results[0].pose.leftWrist.x;
        rightWrist_x = results[0].pose.rightWrist.x;

        difference = floor(leftWrist_x - rightWrist_x);

        console.log("rightWrist_x = "+results[0].pose.rightWrist.x + " rightWrist_y = "+results[0].pose.rightWrist.y);
        console.log("leftWrist_x = "+results[0].pose.leftWrist.x + " leftWrist_y = "+results[0].pose.leftWrist.y);
    }
}

function draw() {
    background('#87CEEB') ;
    document.getElementById("span_size").innerHTML = "Font Size Of The Text Will Be = "+difference+"px";
    textSize(difference);
    fill("#000000");
    text('Anupam',180,200);
}