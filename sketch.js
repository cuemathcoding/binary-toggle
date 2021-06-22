let dots = []
let decimal = "0"

function setup() {
  input = createInput()
  input.input(onText);
  createCanvas(400, 400);
	for(let i=0;i<5;i++){
  w = 50
   dots.push(new Dot(1.5*i*w+1.5*w/2, 50, w, i)) 
  }

}

function onText(){
 	
  dec = input.value();
  decimal = dec
  
  for(let d of dots){
   	
    if(dec%2){
    d.on = true
    }
    else{
     d.on = false 
    }
    
    dec = (dec-dec%2)/2
    
  }
  
  
  
  
}


function setText(){
 
      let v = 0;
  for(let d of dots){
   

    if(d.on){
      v += pow(2,d.value)

      
    }
  }
  
  
  decimal = str(v)
  
}




function mousePressed(){
 
  for(let d of dots){
    
   if(dist(d.x,d.y,mouseX, mouseY) < d.width/2){
    	console.log(dist(d.x,d.y,mouseX, mouseY))
     d.on = !d.on
     setText()
     return
     
     
   }
    
  }
  
  
}

function draw() {
  background(220);
  
  for(let d of dots){
    
   
    d.draw()
  }
  
  textSize(100)
  text(decimal, 150, 200)
}