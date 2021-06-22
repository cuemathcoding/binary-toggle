let num = "00000000";

let byte = [];
let message;

function mousePressed(){
  for (let i = 0; i < 8; i++){
    byte[i].toggle(mouseX, mouseY);
  }
}

function preload(){
  img = loadImage("arrow.jpg");
}
function setup() {
  createCanvas(600, 600);
  input = createInput();
  input.position(100, 500);
  input.size(200, 50);
  input.style('font-size', '40px')
  button = createButton('Submit');
  button.size(100, 50);
  button.position(410, 500);
  button.style('font-size', '20px')
  button.mousePressed(decimalToBinary);
  let w = width / 8
  for (let i = 0; i < 8; i++){
    byte[i] = new Bit(w/2 + i*w, 50, w - 4);
    byte[i].setState(num.charAt(i));
  }
  message = '';
}

function draw() {
  background(220);
  num = ''
  for (let i = 0; i < byte.length; i++){
    byte[i].show()
    num += byte[i].state ? '1' : '0';
  }
  textSize(60);
  textAlign(CENTER);
  text(binaryToDecimal(num), 400, 400);
  text(num, 400, 200);
  textAlign(LEFT);
  text('Binary:', 50, 200);
  text('Decimal:', 50, 400);
  image(img, 250, 210);
  textSize(20);
  textAlign(CENTER);
  text(message,300, 450);
}

function binaryToDecimal(val){
  let sum = 0
  for (let i = 0; i < val.length; i++){
    let bit = val.charAt(val.length - i - 1)
    sum += parseInt(bit)*pow(2, i)
  }
  return sum;
}

function decimalToBinary(){
  let dec = parseInt(input.value());
  if ((dec > 255)||(dec < 0)){
    message = "Please enter a number between 0 and 255";
    input.value('');
    return "00000000";
  }
  message = '';
  bin = dec.toString(2);
  bin = bin.padStart(8,'0');
  for (let i = 0; i < 8; i++){
    byte[i].setState(bin.charAt(i));
  }
  return bin;
}