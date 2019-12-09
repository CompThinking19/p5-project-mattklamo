let purplescarf;
let greenscarf;
let redtophat;
let blacktophat;
let carrot;
let santahat;
let greenredscarf;
let stick1;
let stick2;
let stick3;
let stick4;
let snowybackground;



function setup() {
  createCanvas(500, 500);
  purplescarf = loadImage('purplescarf.png');
  greenscarf = loadImage('greenscarf.png');
  redtophat = loadImage('redtophat.png');
  blacktophat = loadImage('blacktophat.png');
  carrot = loadImage('smallcarrot.png');
  santahat= loadImage('santahat.png');
  greenredscarf = loadImage('redgreenscarf.png');
  stick1 = loadImage('stick1.png');
  stick2 = loadImage('stick2.png');
  snowybackground = loadImage('snowybackground.png');

}

function draw() {
  background(220);
  rect(250, 0, 500, 500);
  push();
  fill(210);
  rect(250, 270, 300, 300);
  pop();
    push();
  fill(67);
  rect(250, 0, 130, 270);
  pop();
    push();
  fill(140);
  rect(380, 0, 130, 270);
  pop();
  ellipse(320, 100, 40, 40);
  ellipse(350, 139, 50, 50);
  ellipse(340, 40, 75, 75);
  ellipse(310, 210, 100, 100);

  push();
  fill(0);
  ellipse(400,200,25,25);
  ellipse(450,50,25,25);
  ellipse(430,90,25,25);
  ellipse(470,100,15,15);
  ellipse(410,150,15,15);
  ellipse(400,10,15,15);
  pop();

  image(purplescarf, 335, 280, purplescarf.width / 7, purplescarf.height / 7);
  image(greenscarf, 255, 280, greenscarf.width / 7, greenscarf.height / 7);
  image(redtophat, 415, 355, redtophat.width / 15, redtophat.height / 15);
  image(blacktophat, 255, 350, blacktophat.width / 28, blacktophat.height / 28);
  image(carrot, 340, 435, carrot.height / 2, carrot.width / 2);
  image(santahat, 330, 350, santahat.width / 2, santahat.height / 2);
  image(greenredscarf, 375, 235);
  image(stick1, 255, 400, stick1.width / 25, stick1.height / 25);
  image(stick2, 400, 400, stick2.width / 25, stick2.height / 25);
  image(snowybackground, 0, 410, snowybackground.width / 24, snowybackground.height/ 25);
}

function mousePressed() {

}

function mouseDragged() {


}

function mouseReleased() {

}
