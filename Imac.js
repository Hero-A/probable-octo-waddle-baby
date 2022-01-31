objectDetector = "";
img = "";
objects = [];
status = "";

function setup(){
    canvas = createCapture(400, 401);
    canvas.center()
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
}

function draw() {
    image(img, 0, 0, 440, 420);
    if (status != "") {
        for (var i = 0; i < objects.length; i++) {
            document.getElementById("status").innerHTML = "Status : Object Detection complete";
            fill(255, 0, 0);
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x, objects[i].y);
            noFill();
            stroke(255, 0, 0)
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}

function preload(){
    img = loadImage('Imac.jpeg');
}

function modelLoaded() {
    console.log("model loaded")
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results){
    if(error){
        console.error(error);
    }

    
        console.log(results);
        objects = results;
}

function to_home_screen(){

}