class Bola{
    // variables y constantes ... 
    constructor(x,y) {
      this.x = x;
      this.y = y;
      this.diametro = 40;
    }
    mostrar(){
      fill(255,0,0)
      ellipse(this.x,this.y,this.diametro,this.diametro);
    }
   mover(){
     this.x += 1;
     if(this.x > 400){
      this.x = 0;
     }
   }
   getX(){
    return this.x;
   }
   getY(){
    return this.y;
   }
}