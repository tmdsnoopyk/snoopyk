class Table{
  constructor(w,h,b){
    this.w=w;
    this.h=h;
    this.b=b; //grosimea chenarului
    this.hole= [
      new Basket(1, -b*0.5 ,-b*0.5, b ), // var b = new Basket
      new Basket(2, 0.5*w -b ,-b*0.5 , b),
      new Basket(3, w -b*0.5, -b*0.5, b),
      new Basket(4,w-b*0.5,h-b*0.5,b),
      new Basket(5,0.5*w-b*0.5,h-b*0.5,b),
      new Basket(6,-b*0.5,h-b*0.5,b)
    ];  // lista de cosuri
    this.balls= []; // lista de bile
  }
  addBall(b){
    this.balls.push(b);
  }
  render(){
    var html=`
    <div id="table" style="width: ${this.w}px; height: ${this.h}px; border-width: ${this.b}px">

    </div>`;
    document.body.innerHTML +=html;
    for(var i=0; i<this.hole.length; i++){
      this.hole[i].render();
    }
    for(var i=0; i<this.balls.length; i++){
      this.balls[i].render();
    }
  }
}
