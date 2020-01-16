let sample = [];
let animation = [];
let num;
let img;
const alphabets = `abcdefg`.split('');

function preload() {
  for(let i=0; i<alphabets.length; i++){
    //sample[i] = loadSound(`./sounds/se${i}.wav`);
  }
  img = loadImage(`./photos/photo.jpg`);
}

function setup() {
  createCanvas(img.width, img.height);
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
      //sample[i].play();
      animation.push(new animations[alphabets[i]]);
      break;
    }
  }
  if (animation.length > 20) {
    animation.shift();
  }
}

const animations = {
  a: class{
    constructor() {
      this.x = 0;
      this.y = 0;
      this.color = {
        r: 0,
        g: 0,
        b: 0
      }
      this.fadeout = 0;
    }
    draw() {
      for(let i=0; i<100; i++){
        this.x = int(random(width*0.9, width));
        this.y = int(random(height*0.9, height));
        let col = img.get(this.x, this.y);
        this.color.r = red(col) - this.fadeout;
        this.color.g = green(col) - this.fadeout;
        this.color.b = blue(col) - this.fadeout;
        noStroke();
        let rotation = map(saturation(col), 0, 255, 0, 360);
        let length = map(brightness(col), 0, 255, 0, 100);
        fill(this.color.r, this.color.r, this.color.b, 128);
    
        push();
        translate(this.x, this.y);
        rotate(radians(rotation));
        rect(0, 0, 2, length);
        pop();
      }
      this.fadeout += 1;
    }
  },
  b: class{
    constructor() {
      this.x = 0;
      this.y = 0;
      this.color = {
        r: 0,
        g: 0,
        b: 0
      }
      this.fadeout = 0;
    }
    draw() {
      for(let i=0; i<100; i++){
        this.x = int(random(width*0.8, width*0.9));
        this.y = int(random(height*0.9, height));
        let col = img.get(this.x, this.y);
        this.color.r = red(col) - this.fadeout;
        this.color.g = green(col) - this.fadeout;
        this.color.b = blue(col) - this.fadeout;
        noStroke();
        let rotation = map(saturation(col), 0, 255, 0, 360);
        let length = map(brightness(col), 0, 255, 0, 100);
        fill(this.color.r, this.color.r, this.color.b, 128);
    
        push();
        translate(this.x, this.y);
        rotate(radians(rotation));
        rect(0, 0, 2, length);
        pop();
      }
      this.fadeout += 1;
    }
  },
  c: class{
    constructor() {
      this.x = 0;
      this.y = 0;
      this.color = {
        r: 0,
        g: 0,
        b: 0
      }
      this.fadeout = 0;
    }
    draw() {
      for(let i=0; i<100; i++){
        this.x = int(random(width*0.7, width*0.8));
        this.y = int(random(height*0.9, height));
        let col = img.get(this.x, this.y);
        this.color.r = red(col) - this.fadeout;
        this.color.g = green(col) - this.fadeout;
        this.color.b = blue(col) - this.fadeout;
        noStroke();
        let rotation = map(saturation(col), 0, 255, 0, 360);
        let length = map(brightness(col), 0, 255, 0, 100);
        fill(this.color.r, this.color.r, this.color.b, 128);
    
        push();
        translate(this.x, this.y);
        rotate(radians(rotation));
        rect(0, 0, 2, length);
        pop();
      }
      this.fadeout += 1;
    }
  },
  d: class{
    constructor() {
      this.x = 0;
      this.y = 0;
      this.color = {
        r: 0,
        g: 0,
        b: 0
      }
      this.fadeout = 0;
    }
    draw() {
      for(let i=0; i<100; i++){
        this.x = int(random(width*0.6, width*0.7));
        this.y = int(random(height*0.9, height));
        let col = img.get(this.x, this.y);
        this.color.r = red(col) - this.fadeout;
        this.color.g = green(col) - this.fadeout;
        this.color.b = blue(col) - this.fadeout;
        noStroke();
        let rotation = map(saturation(col), 0, 255, 0, 360);
        let length = map(brightness(col), 0, 255, 0, 100);
        fill(this.color.r, this.color.r, this.color.b, 128);
    
        push();
        translate(this.x, this.y);
        rotate(radians(rotation));
        rect(0, 0, 2, length);
        pop();
      }
      this.fadeout += 1;
    }
  },
  e: class{
    constructor() {
      this.x = 0;
      this.y = 0;
      this.color = {
        r: 0,
        g: 0,
        b: 0
      }
      this.fadeout = 0;
    }
    draw() {
      for(let i=0; i<100; i++){
        this.x = int(random(width*0.5, width*0.6));
        this.y = int(random(height*0.9, height));
        let col = img.get(this.x, this.y);
        this.color.r = red(col) - this.fadeout;
        this.color.g = green(col) - this.fadeout;
        this.color.b = blue(col) - this.fadeout;
        noStroke();
        let rotation = map(saturation(col), 0, 255, 0, 360);
        let length = map(brightness(col), 0, 255, 0, 100);
        fill(this.color.r, this.color.r, this.color.b, 128);
    
        push();
        translate(this.x, this.y);
        rotate(radians(rotation));
        rect(0, 0, 2, length);
        pop();
      }
      this.fadeout += 1;
    }
  },
  f: class{
    constructor() {
      this.x = 0;
      this.y = 0;
      this.color = {
        r: 0,
        g: 0,
        b: 0
      }
      this.fadeout = 0;
    }
    draw() {
      for(let i=0; i<100; i++){
        this.x = int(random(width*0.4, width*0.5));
        this.y = int(random(height*0.9, height));
        let col = img.get(this.x, this.y);
        this.color.r = red(col) - this.fadeout;
        this.color.g = green(col) - this.fadeout;
        this.color.b = blue(col) - this.fadeout;
        noStroke();
        let rotation = map(saturation(col), 0, 255, 0, 360);
        let length = map(brightness(col), 0, 255, 0, 100);
        fill(this.color.r, this.color.r, this.color.b, 128);
    
        push();
        translate(this.x, this.y);
        rotate(radians(rotation));
        rect(0, 0, 2, length);
        pop();
      }
      this.fadeout += 1;
    }
  },
  g: class{
    constructor() {
      this.x = 0;
      this.y = 0;
      this.color = {
        r: 0,
        g: 0,
        b: 0
      }
      this.fadeout = 0;
    }
    draw() {
      for(let i=0; i<100; i++){
        this.x = int(random(width*0.3, width*0.4));
        this.y = int(random(height*0.9, height));
        let col = img.get(this.x, this.y);
        this.color.r = red(col) - this.fadeout;
        this.color.g = green(col) - this.fadeout;
        this.color.b = blue(col) - this.fadeout;
        noStroke();
        let rotation = map(saturation(col), 0, 255, 0, 360);
        let length = map(brightness(col), 0, 255, 0, 100);
        fill(this.color.r, this.color.r, this.color.b, 128);
    
        push();
        translate(this.x, this.y);
        rotate(radians(rotation));
        rect(0, 0, 2, length);
        pop();
      }
      this.fadeout += 1;
    }
  }
}
