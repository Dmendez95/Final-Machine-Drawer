let hue
function setup() {
  createCanvas(750,350);
  background(220, 100, 100);
  colorMode(HSB,360);
  imageMode(CENTER);

  function preload(){
    background1 = LoadImage("asset/background1")
  }
hue=0

  strokeWeight(5);
  noFill();
}

function draw() {

  if(hue>360){
    hue=0
  }else{
    hue++
  }

if (mouseIsPressed){

  background(220, 50, 133, 1);

  noStroke(map(mouseX, 0, 600, 0, 355, true))
  fill(hue, 255,255);
  line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
  line(mouseX, mouseY, pmouseX, pmouseY);
  ellipse(mouseX,mouseY,40,20);

}

}

function keyTyped(){

  if(key === 's'){
  // save this image
  saveCanvas('fileName', 'png');
} else if (key === 'c'){
  //clear the image
  clear();
}

beginShape();
for(let i = 0; i < array.length; i++){
  curveVertex(array[i][0], array[i][1])
}
endShape()

  }
