function preload(){

}

function setup(){
    canvas=createCanvas (700, 500);
    canvas.position(150, 250);
    video=createCapture(VIDEO);
    video.hide();
   

}

function draw(){
    image(video,0,0,700,500);
    fill("red");
    stroke("red");
    circle(50,50,80);

    circle(650,50,80);

    circle(50,450,80);

    circle(650,450,80);
  
}


function take_snapshot(){
    save("image1.png");
}
