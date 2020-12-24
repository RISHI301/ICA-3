let l;
let k;
let t;
let z;

function setup() {
  createCanvas(800, 800);
  angleMode(DEGREES);
  z = 10;
  k = 0.8;
  t = 0;
}

function draw() {
  background(25);
  translate(width / 2, height * 0.7);
  drawTree(100);
  t = map(mouseX, 0, width, 5, 150);
}

function drawTree(l) {
  fill(200, 10);
  ellipse(100, 40, 100, -l);

  if (l * k >= z) {
    translate(0, -l);
    push();
    rotate(t);
    drawTree(l * k);
    pop();

    push();
    rotate(-t);
    drawTree(l * k);
    pop();
  }
}

function mouseClicked() {
  z = z * k;
}