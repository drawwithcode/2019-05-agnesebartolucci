var mic;
var x = 10;
var y = 15;
var colorList = ['#fe4365', '#fc9d9a', '#f9cdad', '#c8c8a9', '#83af9b'];

function preload(){
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  background(0, 20);

  textFont("Roboto Mono");
  textAlign (LEFT)
  textSize(20);
  fill(255);
  noStroke();
  var myText1 = "Use keyboard arrow keys and make noise";
  text(myText1, width/2 - 250, height/2);

  var vol = mic.getLevel();

  if (keyIsDown(LEFT_ARROW)) {
      x -= 5 * random();
    }
  if (keyIsDown(RIGHT_ARROW)) {
      x += 5 * random();
    }

  if (keyIsDown(UP_ARROW)) {
      y -= 5 * random();
    }

  if (keyIsDown(DOWN_ARROW)) {
      y += 5 * random();
    }

  noStroke();
  fill(color(random(colorList)));
  ellipse(x, y, vol * 50, vol * 50);
}
