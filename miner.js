//coordinates
const MINE_1 = 3;
const MINE_2 = 7;
const MINE_3 = 9;

var miner  =   Math.floor(Math.random() * 10) + 1;
var miner_health = 5; // vieti are minerul , de fiecare data cand minerul nimereste peste bomba, variabila trebuie sa cada cate un punct si variabila ei sa fie scrisa in score
// 1)var miner random()
//2)sa afisem minele show(minele)
//3)if() limits (sa nu disprata minerul)
var miner_row =Math.floor(Math.random() * 10) + 1;
var miner_col =Math.floor(Math.random() * 10) + 1;
function action (){
  console.log ( event );
  if ( event.code == "ArrowRight") {
    moveRight();}
  if ( event.code == "ArrowLeft") {
    moveLeft();
  }
  if ( event.code == "ArrowDown") {
    moveDown();
  }
  if ( event.code == "ArrowUp") {
    moveUp();
  }
}

function moveLeft(){
  if (miner_col>1) {
    miner_col--;
  } else {
    miner_col=10;
  }
  show();
}

function moveRight(){
  if (miner_col<10) {
    miner_col++;
  } else {
    miner_col=1;
  }
  show();
}

function moveUp(){
  if (miner_row>1) {
    miner_row--;
  } else {
    miner_row=10;
  }
  show();
}

function moveDown(){
  if (miner_row<10) {
    miner_row++;
  } else {
    miner_row=1;
  }
  show();
}

function show(){
  var div = document.getElementById('map'); //conectam div cu elem
    div.innerHTML=``;
for(var row = 1; row<=10; row++ ){
for(var col = 1; col<=10; col++ ){
var content =``;
  if ( miner_row == row && miner_col == col ){
    content =`<div class="miner"></div>`;
  } //template string
  div.innerHTML += `<div class="grass"> ${content}</div>`
  }
}
 }

show();
