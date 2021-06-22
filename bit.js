class Bit{
  constructor(x, y, d){
    this.x = x;
    this.y = y;
    this.diameter = d;
    this.state = false;
  }
  
  show(){
    stroke(255);
    fill(255*this.state);
    ellipse(this.x, this.y, this.diameter);
    if (this.state){
      fill(0);
    }
    else{
      fill(1);
    }
  }
  setState(state){
    this.state = Boolean(parseInt(state));
  }
  
  toggle(x,y){
    let d = dist(x, y, this.x, this.y);
    if (d < this.diameter/2){
      this.state = !this.state;
    }
  }
}