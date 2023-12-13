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

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results) ;
    }
}