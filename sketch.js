let sample = [];
let animation = [];
let num;
let img;
const alphabets = `abcdefghijklmnopqrstuvwxyz`.split('');

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

//連想配列の中にクラス定義をすることで，keyTypedの条件分岐処理をループでまとめられるようになっています．
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
        this.x = int(random(width*(25/26), width));
        this.y = int(random(height));
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
        this.x = int(random(width*(24/26), width*(25/26)));
        this.y = int(random(height));
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
        this.x = int(random(width*(23/26), width*(24/26)));
        this.y = int(random(height));
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
        this.x = int(random(width*(22/26), width*(23/26)));
        this.y = int(random(height));
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
        rect(0, 0, 3, length);
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
        this.x = int(random(width*(21/26), width*(22/26)));
        this.y = int(random(height));
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
        rect(0, 0, 4, length);
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
        this.x = int(random(width*(20/26), width*(21/26)));
        this.y = int(random(height));
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
        rect(0, 0, 5, length);
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
        this.x = int(random(width*(19/26), width*(20/26)));
        this.y = int(random(height));
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
        rect(0, 0, 6, length);
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
        this.x = int(random(width*(19/26), width*(20/26)));
        this.y = int(random(height));
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
        rect(0, 0, 6, length);
        pop();
      }
      this.fadeout += 1;
    }
  },
  h: class{
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
        this.x = int(random(width*(18/26), width*(19/26)));
        this.y = int(random(height));
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
        rect(0, 0, 6, length);
        pop();
      }
      this.fadeout += 1;
    }
  },
  i: class{
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
        this.x = int(random(width*(17/26), width*(18/26)));
        this.y = int(random(height));
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
        rect(0, 0, 6, length);
        pop();
      }
      this.fadeout += 1;
    }
  },
  j: class{
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
        this.x = int(random(width*(16/26), width*(17/26)));
        this.y = int(random(height));
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
        rect(0, 0, 6, length);
        pop();
      }
      this.fadeout += 1;
    }
  },
  k: class{
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
        this.x = int(random(width*(15/26), width*(16/26)));
        this.y = int(random(height));
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
        rect(0, 0, 6, length);
        pop();
      }
      this.fadeout += 1;
    }
  },
  l: class{
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
        this.x = int(random(width*(14/26), width*(15/26)));
        this.y = int(random(height));
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
        rect(0, 0, 6, length);
        pop();
      }
      this.fadeout += 1;
    }
  },
  m: class{
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
        this.x = int(random(width*(13/26), width*(14/26)));
        this.y = int(random(height));
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
        rect(0, 0, 6, length);
        pop();
      }
      this.fadeout += 1;
    }
  },
  n: class{
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
        this.x = int(random(width*(12/26), width*(13/26)));
        this.y = int(random(height));
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
        rect(0, 0, 6, length);
        pop();
      }
      this.fadeout += 1;
    }
  },
  o: class{
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
        this.x = int(random(width*(11/26), width*(12/26)));
        this.y = int(random(height));
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
        rect(0, 0, 6, length);
        pop();
      }
      this.fadeout += 1;
    }
  },
  p: class{
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
        this.x = int(random(width*(10/26), width*(11/26)));
        this.y = int(random(height));
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
        rect(0, 0, 6, length);
        pop();
      }
      this.fadeout += 1;
    }
  },
  q: class{
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
        this.x = int(random(width*(9/26), width*(10/26)));
        this.y = int(random(height));
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
        rect(0, 0, 6, length);
        pop();
      }
      this.fadeout += 1;
    }
  },
  r: class{
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
        this.x = int(random(width*(8/26), width*(9/26)));
        this.y = int(random(height));
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
        rect(0, 0, 6, length);
        pop();
      }
      this.fadeout += 1;
    }
  },
  s: class{
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
        this.x = int(random(width*(7/26), width*(8/26)));
        this.y = int(random(height));
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
        rect(0, 0, 6, length);
        pop();
      }
      this.fadeout += 1;
    }
  },
  t: class{
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
        this.x = int(random(width*(6/26), width*(7/26)));
        this.y = int(random(height));
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
        rect(0, 0, 6, length);
        pop();
      }
      this.fadeout += 1;
    }
  },
  u: class{
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
        this.x = int(random(width*(5/26), width*(6/26)));
        this.y = int(random(height));
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
        rect(0, 0, 6, length);
        pop();
      }
      this.fadeout += 1;
    }
  },
  v: class{
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
        this.x = int(random(width*(4/26), width*(5/26)));
        this.y = int(random(height));
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
        rect(0, 0, 6, length);
        pop();
      }
      this.fadeout += 1;
    }
  },
  we: class{
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
        this.x = int(random(width*(3/26), width*(4/26)));
        this.y = int(random(height));
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
        rect(0, 0, 6, length);
        pop();
      }
      this.fadeout += 1;
    }
  },
  x: class{
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
        this.x = int(random(width*(2/26), width*(3/26)));
        this.y = int(random(height));
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
        rect(0, 0, 6, length);
        pop();
      }
      this.fadeout += 1;
    }
  },
  y: class{
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
        this.x = int(random(width*(1/26), width*(2/26)));
        this.y = int(random(height));
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
        rect(0, 0, 6, length);
        pop();
      }
      this.fadeout += 1;
    }
  },
  z: class{
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
        this.x = int(random(width*(1/26)));
        this.y = int(random(height));
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
        rect(0, 0, 6, length);
        pop();
      }
      this.fadeout += 1;
    }
  }
}
