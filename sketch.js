var purpledragging = false;
var greendragging = false;
var redtopdragging = false;
var blacktopdragging = false;
var carrotdragging = false;
var santadragging = false;
var greenreddragging = false;
var stick1dragging = false;
var stick2dragging = false;

let purplescarf;
let greenscarf;
let redtophat;
let blacktophat;
let carrot;
let santahat;
let greenredscarf;
let stick1;
let stick2;
let song;

let snowybackground;

var purpleX, purpleY, greenX, greenY, redtopX, redtopY, redtopX, redtopY, santaX, santaY, carrotX, carrotY, greenredX, greenredY, stick1X, stick1Y, stick2X, stick2Y;

var offsetX, offsetY, offsetX2, offsetY2, offsetX3, offsetY3, offsetX4, offsetY4, offsetX5, offsetY5, offsetX6, offsetY6, offsetX7, offsetY7, offsetX8, offsetY8, offsetX9, offsetY9;

function preload(){
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

  song = loadSound('Frosty the Snowman.mp3');

}
function setup() {
  createCanvas(600, 500);
  song.loop();
  purpleX = 360;
  purpleY = 30;
  greenX = 470;
  greenY = 30;
  redtopX = 480;
  redtopY = 240;
  blacktopX = 350;
  blacktopY = 235;
  carrotX = 420;
  carrotY = 420;
  santaX = 400;
  santaY = 310;
  greenredX = 340;
  greenredY = 90;
  stick1X = 355;
  stick1Y = 400;
  stick2X = 500;
  stick2Y = 400;
}

function draw() {
  background(30, 144, 255);
  rect(350, 0, 500, 500);

  image(snowybackground, 0, 400, 350, 100);

  ellipse(180, 410, 150, 150);
  ellipse(180, 300, 130, 130);
  ellipse(180, 210, 100, 100);

  push();
  fill(0);
  ellipse(180,390,25,25);
  ellipse(180,280,25,25);
  ellipse(180,330,25,25);

  ellipse(160,190,15,15);
  ellipse(200,190,15,15);

  ellipse(150,220,13,13);
  ellipse(165,230,13,13);
  ellipse(190,230,13,13);
  ellipse(210,220,13,13);
  pop();



  image(purplescarf, purpleX, purpleY, purplescarf.width / 4, purplescarf.height / 4);

    image(greenscarf, greenX, greenY, greenscarf.width / 4, greenscarf.height / 4);

  image(redtophat, redtopX, redtopY, redtophat.width / 10, redtophat.height / 10);

  image(blacktophat, blacktopX, blacktopY, blacktophat.width / 18, blacktophat.height / 18);
  image(carrot, carrotX, carrotY, 100, 100);
  image(santahat, santaX, santaY, 150, 150);
  image(greenredscarf, greenredX, greenredY, 210,200);
  image(stick1, stick1X, stick1Y, stick1.width / 25, stick1.height / 25);
  image(stick2, stick2X, stick2Y, stick2.width / 25, stick2.height / 25);

   if (purpledragging) {
    purpleX = mouseX + offsetX;
    purpleY = mouseY + offsetY;
  }
   if (greendragging) {
    greenX = mouseX + offsetX2;
    greenY = mouseY + offsetY2;
  }

      if (redtopdragging) {
    redtopX = mouseX + offsetX3;
    redtopY = mouseY + offsetY3;
  }
        if (blacktopdragging) {
    blacktopX = mouseX + offsetX4;
    blacktopY = mouseY + offsetY4;
  }
        if (santadragging) {
    santaX = mouseX + offsetX5;
    santaY = mouseY + offsetY5;
  }
        if (carrotdragging) {
    carrotX = mouseX + offsetX6;
    carrotY = mouseY + offsetY6;
  }
        if (greenreddragging) {
    greenredX = mouseX + offsetX7;
    greenredY = mouseY + offsetY7;
  }
        if (stick1dragging) {
    stick1X = mouseX + offsetX8;
    stick1Y = mouseY + offsetY8;
  }
        if (stick2dragging) {
    stick2X = mouseX + offsetX9;
    stick2Y = mouseY + offsetY9;
  }
}
function mousePressed() {
  if (mouseX > purpleX && mouseX < purpleX + 100 && mouseY > purpleY && mouseY < purpleY + 100) {
    purpledragging = true;
    offsetX = purpleX-mouseX;
    offsetY = purpleY-mouseY;
  }
  if (mouseX > greenX && mouseX < greenX + 100 && mouseY > greenY && mouseY < greenY + 100) {
    greendragging = true;

    offsetX2 = greenX-mouseX;
    offsetY2 = greenY-mouseY;
  }
    if (mouseX > redtopX && mouseX < redtopX + 75 && mouseY > redtopY && mouseY < redtopY + 75) {
    redtopdragging = true;

    offsetX3 = redtopX-mouseX;
    offsetY3 = redtopY-mouseY;
  }

      if (mouseX > blacktopX && mouseX < blacktopX + 75 && mouseY > blacktopY && mouseY < blacktopY + 75) {
    blacktopdragging = true;

    offsetX4 = blacktopX-mouseX;
    offsetY4 = blacktopY-mouseY;
  }
      if (mouseX > carrotX && mouseX < carrotX + 100 && mouseY > carrotY && mouseY < carrotY + 100) {
    carrotdragging = true;

    offsetX6 = carrotX-mouseX;
    offsetY6 = carrotY-mouseY;
  }
      if (mouseX > santaX && mouseX < santaX + 100 && mouseY > santaY && mouseY < santaY + 100) {
    santadragging = true;

    offsetX5 = santaX-mouseX;
    offsetY5 = santaY-mouseY;
  }
      if (mouseX > greenredX && mouseX < greenredX + 199 && mouseY > greenredY && mouseY < greenredY + 200) {
    greenreddragging = true;

    offsetX7 = greenredX-mouseX;
    offsetY7 = greenredY-mouseY;
  }
      if (mouseX > stick1X && mouseX < stick1X + stick1.width / 25 && mouseY > stick1Y && mouseY < stick1Y + stick1.height / 25) {
    stick1dragging = true;

    offsetX8 = stick1X-mouseX;
    offsetY8 = stick1Y-mouseY;
  }
      if (mouseX > stick2X && mouseX < stick2X + stick2.width / 25 && mouseY > stick2Y && mouseY < stick2Y + stick2.height / 25) {
    stick2dragging = true;

    offsetX9 = stick2X-mouseX;
    offsetY9 = stick1Y-mouseY;
  }

}

function mouseReleased() {
  // Quit dragging
  purpledragging = false;
  greendragging = false;
  redtopdragging = false;
  santadragging = false;
  carrotdragging = false;
  blacktopdragging = false;
  greenreddragging = false;
  stick1dragging = false;
  stick2dragging = false;
}
