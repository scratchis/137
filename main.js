img="";
statusa="";
function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector("cocossd",modalLoaded);
    document.getElementById("status").innerHTML="Status : Detecting Objects";
}
function preload(){
    img= loadImage("images.jpg");
}
function modalLoaded(){
    console.log("Modal Loaded!");
    statusa=true;
    objectDetector.detect(img,gotResult);
}
function gotResult(error,results){
    if(error){
        console.log
    }
    console.log(results)
}
function draw(){
    image(img,0,0,640,420);
    fill("#FF0000");
    text("Apple",45,75)
    noFill();
    stroke("#FF0000")
    rect(30,60,200,200);
    
    fill("#FF0000");
    text("Orange",400,80)
    noFill();
    stroke("#FF0000")
    rect(390,60,230,200);
}