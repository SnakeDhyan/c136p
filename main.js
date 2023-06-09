video = "";
function preload()
{
  video = createCapture();
  video.hide();
}
function setup(){
    canvas=createCanvas(450,330);
    canvas.center();
}
function draw(){
    image(video,0,0,450,330);
}
function start(){
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Status = Detecting Objects";
}
function modelLoaded(){
    console.log("Model Loaded!!");
    status=true;
}