let sample = [];
let animation = [];
let num;
const alphabets = 'asdfg'.split('');

function preload() {
  for(let i=0; i<alphabets.length; i++){
    sample[i] = loadSound(`./sounds/se${i}.wav`);
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  if (animation.length > 0) {
    for (let i = 0; i < animation.length; i++) {
      animation[i].draw();
    }
  }
}

function keyTyped() {
  for(let i=0; i<alphabets.length; i++){
    if (key == alphabets[i]) {
      sample[i].play();
      animation.push(new animations[alphabets[i]]);
      break;
    }
  }
  if (animation.length > 10) {
    animation.shift();
  }
}

const animations = {
  a: class{
    constructor() {
      this.x = width / 2;
      this.y = height / 2;
      this.diameter = 0;
      this.speed = 10;
    }
    draw() {
      noStroke();
      fill(0, 127, 255, 127);
      ellipse(this.x, this.y, this.diameter, this.diameter);
      this.diameter += this.speed;
    }
  },
  s: class{
    constructor() {
      this.width = 0;
      this.speed = 80;
    }
    draw() {
      noStroke();
      fill(255, 0, 0, 127);
      rectMode(CORNER);
      rect(0, 0, this.width, height);
      this.width += this.speed;
    }
  },
  d: class{
    constructor() {
      this.rotate = 0;
      this.size = 0;
      this.speed = 50;
    }
    draw() {
      push();
      fill(255, 255, 0, 127);
      noStroke();
      translate(width / 2, height / 2);
      rotate(radians(this.rotate));
      rectMode(CENTER);
      rect(0, 0, this.size, this.size);
      pop();
      this.rotate += this.speed;
      this.size += this.speed;
    }
  },
  f: class{
    constructor() {
      this.bgColor = 255;
      this.speed = -2;
    }
    draw() {
      noStroke();
      fill(this.bgColor);
      rect(0, 0, width, height);
      this.bgColor += this.speed;
    }
  },
  g: class{
    constructor() {
      this.diameter = {x: 0, y: 0};
      this.speed = 10;
    }
    draw() {
      noStroke();
      fill(255, 0, 0, 127);
      ellipse(window.width/2, window.height/2, this.diameter.x, this.diameter.y);
      this.diameter.x += this.speed * 4;
      this.diameter.y += this.speed * 2;
    }
  }
}
