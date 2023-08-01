img="";
statusa="";
objects=[];
function setup(){
    canvas=createCanvas(380,380);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(380,380)
    video.hide();
}
function start(){
    objectDetector=ml5.objectDetector("cocossd",modalLoaded);
    document.getElementById("status").innerHTML="Status : Detecting Objects";
}
function preload(){
    img= loadImage("images.jpg");
}
function modalLoaded(){
    console.log("Modal Loaded!");
    statusa=true;
    
}
function gotResult(error,results){
    if(error){
        console.log;
    }
    console.log(results);
    objects=results;
}
function draw(){
    image(video,0,0,380,380);
    //fill("#FF0000");
    //text("Apple",45,75)
    //noFill();
    //stroke("#FF0000")
    //rect(30,60,200,200);
    
    //fill("#FF0000");
    //text("Orange",400,80)
    //noFill();
    //stroke("#FF0000")
    //rect(390,60,230,200);
    if (statusa !=""){
        r=random(255);
        g=random(255);
        b=random(255);
        objectDetector.detect(video,gotResult);
        for(i=0;i<objects.length;i++){
            document.getElementById("status").innerHTML="Status:Object Detected";
            document.getElementById("number_of_object").innerHTML="Number Of Objects Detected Are: "+objects.length;
            fill(r,b,g);
            percent=floor(objects[i].confidence*100);
            noFill();
            stroke(r,b,g);
            rect(objects[i].x,objects[i].width,objects[i].height)
            text(objects[i].label+" "+percent+"%",objects[i].x+15,objects[i].y+150)
        }    
    }
}