class Dot{
  
 constructor(x,y, w, v){
   
  this.x = x;
  this.y = y;
   this.value = v;
   
  this.on = false;
   this.width = w;
 }
  
  
  
  draw(){
   
  if(this.on){
   
    fill(255)
    
  }
    
    else{
      
     fill(0) 
    }
  
    ellipseMode(CENTER, CENTER)
  ellipse(this.x,this.y, this.width)

    
    
  }
  
  
  
  
}