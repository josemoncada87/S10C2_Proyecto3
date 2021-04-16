/*// variables y constantes
 let variable = 10;
 const constantes = 5;
 let arreglo = [];
 // if else switch
 // for while

 // JSON
// JavaScript Object Notation

// Literal
let bolaLiteral = {
  x:20,
  y:50,
  mostrar: function() {
    fill(255,255,0)
    ellipse(this.x,this.y,20,20);    
  }
};

// Notación con función constructora
let BolaFunction = function(x, y){
  return{
    x : x,
    y : y,
    mostrar : function(){
      fill(0,255,0)
      ellipse(this.x,this.y,20,20);    
    }
  }
};

// Otra versión de función constructora
function BolaFunctionComp(x,y) {
  let obj = {};
  obj.x = x;
  obj.y = y;
  obj.mostrar = function() {
    fill(255,0,255)
    ellipse(this.x,this.y,20,20);
  }
  return obj;
}

// función simplificada
function BolaFunct(x,y) {
  this.x = x;
  this.y = y;
  this.mostrar = function() {
    fill(255,0,0)
    ellipse(this.x,this.y,20,20);
  };
}*/

//  Notación con clases


/*let bola2 = new BolaFunction(200,200);
let bola3 = new BolaFunctionComp(300,300);
let bola4 = new BolaFunct(300,100);*/


let bola = new Bola(100,100);

function setup() {
  createCanvas(400, 400);
  
}

function draw() {
  background(220);
  //bolaLiteral.mostrar();
  bola.mostrar();
  bola.mover();
  console.log(bola.getY());  
  /*bola2.mostrar();  
  bola3.mostrar();  
  bola4.mostrar();*/
}

