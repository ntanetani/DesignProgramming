let sample = [];
let animation = [];
let num;
let img;
let lastkeys = ["a", "a", "a"];
let isAnswerShowed = false;
const alphabets = `abcdefghijklmnopqrstuvwxyz`.split('');

function preload() {
  for(let i=0; i<alphabets.length; i++){
    sample[i] = loadSound(`./sounds/se${i}.wav`);
  }
  img = loadImage(`./photos/photo.jpg`);
}

function setup() {
  createCanvas(img.width, img.height);
}

function draw() {
  if(lastkeys[2] =="c" && lastkeys[1] == "a" && lastkeys[0] == "t"){
    background(img);
  }else{
    background(0);
  }
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
  //タイプしたキーを最近3つまで保存しておく
  lastkeys[2] = lastkeys[1];
  lastkeys[1] = lastkeys[0];
  lastkeys[0] = key;
  if (animation.length > 26) {
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
      this.fadeout += 3;
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
        let diameter = map(brightness(col), 0, 255, 1, 80);
        fill(this.color.r, this.color.r, this.color.b, 128);
        ellipse(this.x, this.y, diameter);
      }
      this.fadeout += 3;
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
      this.fadeout += 3;
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
      this.fadeout += 3;
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
      this.fadeout += 3;
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
      this.fadeout += 3;
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
      this.fadeout += 3;
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
      this.fadeout += 3;
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
      this.fadeout += 3;
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
      for(let x=width*(17/26); x<width*(18/26); x+=10){
        for(let y=0; y<height; y+=10){
          this.x = x;
          this.y = y;
          let col = img.get(this.x, this.y);
          this.color.r = red(col) - this.fadeout;
          this.color.g = green(col) - this.fadeout;
          this.color.b = blue(col) - this.fadeout;
          noStroke();
          fill(this.color.r, this.color.r, this.color.b, 128);
          ellipse(this.x, this.y, 10);
        }
      }
      this.fadeout += 3;
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
      this.fadeout += 3;
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
        rect(0, 0, 7, length);
        pop();
      }
      this.fadeout += 3;
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
        rect(0, 0, 3, length);
        pop();
      }
      this.fadeout += 3;
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
      for(let i=0; i<50; i++){
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
        rect(0, 0, 2, length);
        pop();
      }
      this.fadeout += 3;
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
      for(let x=width*(12/26); x<width*(13/26); x+=10){
        for(let y=0; y<height; y+=10){
          this.x = x;
          this.y = y;
          let col = img.get(this.x, this.y);
          this.color.r = red(col) - this.fadeout;
          this.color.g = green(col) - this.fadeout;
          this.color.b = blue(col) - this.fadeout;
          noStroke();
          fill(this.color.r, this.color.r, this.color.b, 128);
          rect(this.x, this.y, 10, 10)
        }
      }
      this.fadeout += 3;
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
      this.fadeout += 3;
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
      for(let x=width*(10/26); x<width*(11/26); x+=20){
        for(let y=0; y<height; y+=20){
          this.x = x;
          this.y = y;
          let col = img.get(this.x, this.y);
          this.color.r = red(col) - this.fadeout;
          this.color.g = green(col) - this.fadeout;
          this.color.b = blue(col) - this.fadeout;
          noStroke();
          fill(this.color.r, this.color.r, this.color.b, 128);
          ellipse(this.x, this.y, 30, 20)
        }
      }
      this.fadeout += 3;
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
        rect(0, 0, 4, length);
        pop();
      }
      this.fadeout += 3;
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
      this.fadeout += 3;
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
        rect(0, 0, 10, length);
        pop();
      }
      this.fadeout += 3;
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
      for(let i=0; i<700; i++){
        this.x = int(random(width*(6/26), width*(7/26)));
        this.y = int(random(height));
        let col = img.get(this.x, this.y);
        this.color.r = red(col) - this.fadeout;
        this.color.g = green(col) - this.fadeout;
        this.color.b = blue(col) - this.fadeout;
        noStroke();
        fill(this.color.r, this.color.r, this.color.b, 128);
        //円を描画
        ellipse(this.x, this.y, 10);
      }
      this.fadeout += 3;
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
      this.fadeout += 3;
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
      for(let i=0; i<300; i++){
        this.x = int(random(width*(4/26), width*(5/26)));
        this.y = int(random(height));
        let col = img.get(this.x, this.y);
        this.color.r = red(col) - this.fadeout;
        this.color.g = green(col) - this.fadeout;
        this.color.b = blue(col) - this.fadeout;
        noStroke();
        fill(this.color.r, this.color.r, this.color.b, 128);
        //円を描画
        ellipse(this.x, this.y, 10);
      }
      this.fadeout += 3;
    }
  },
  w: class{
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
      for(let i=0; i<200; i++){
        this.x = int(random(width*(3/26), width*(4/26)));
        this.y = int(random(height));
        let col = img.get(this.x, this.y);
        this.color.r = red(col) - this.fadeout;
        this.color.g = green(col) - this.fadeout;
        this.color.b = blue(col) - this.fadeout;
        noStroke();
        fill(this.color.r, this.color.r, this.color.b, 128);
        ellipse(this.x, this.y, 5);
      }
      this.fadeout += 3;
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
        fill(this.color.r, this.color.r, this.color.b, 128);
        triangle(this.x, this.y, this.x+10, this.y+10, this.x+10, this.y-10);
        
      }
      this.fadeout += 3;
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
        fill(this.color.r, this.color.r, this.color.b, 128);
        quad(this.x, this.y, this.x-10, this.y+10, this.x+5, this.y+10, this.x+5, this.y);
      }
      this.fadeout += 3;
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
        let diameter = map(brightness(col), 0, 255, 1, 80);
        fill(this.color.r, this.color.r, this.color.b, 128);
        ellipse(this.x, this.y, diameter);
      }
      this.fadeout += 3;
    }
  }
}
