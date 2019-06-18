const EMPTY = 0;
const CUCUMBER = 1;
const MELON = 2;
const TOMATO = 3;
const RAT=4;
const TRAP=5;

const RAT_PRICE = 30;
const CUCUMBER_PRICE = 40;
const MELON_PRICE = 20;
const TOMATO_PRICE = 30;
const TRAP_PRICE = 50;
var money=100;

var rat_r = 0;
var rat_c = 0;
var rat_dir = "right";
var trap_r =1;
var trap_c = 0;

var garden = [  //index
    [4,5,0,0,3,0,0,0,0,1],
    [0,1,0,0,0,3,0,0,2,0],
    [1,0,0,0,3,0,0,0,0,0],
    [0,0,0,3,0,0,0,1,0,0],
    [0,0,2,0,1,2,0,0,0,0],
    [0,1,0,0,0,0,0,0,0,3],
    [0,0,0,0,0,2,0,0,0,0],
    [3,0,2,0,0,0,0,0,0,3],
    [0,0,0,0,0,1,0,0,0,0],
    [0,0,1,0,3,0,0,0,2,0],
];

//miscarile guzganului
function moveRatRight(){
    if (rat_c<9){
      garden[rat_r][rat_c] = EMPTY;
    garden[rat_r][++rat_c] = RAT;

    show();
    }

}
function moveRatLeft(){
    if (rat_c>0){
    garden[rat_r][rat_c] = EMPTY;
    garden[rat_r][--rat_c] = RAT;
    show();
    }
}
function moveRatUp(){
    if (rat_r>0){
    garden[rat_r][rat_c] = EMPTY;
    garden[--rat_r][rat_c] = RAT;
    show();
    }
}
function moveRatDown(){
    if (rat_r<9){
    garden[rat_r][rat_c] = EMPTY;
    garden[++rat_r][rat_c] = RAT;
    show();
}
}
function randomDirection(){
    var directions = ["right","left","up","down"];
    return directions [Math.round(Math.random()*3)];
}
function moveRat(){

    // schimbarea directiei aliatoriu
    if( Math.round( Math.random() * 100 ) %5 == 0){
    rat_dir = randomDirection();
    }
    if (rat_dir=="right"){
        moveRatRight();
    }
    if (rat_dir=="left"){
        moveRatLeft();
    }
    if (rat_dir=="up"){
        moveRatUp();
    }
    if (rat_dir=="down"){
        moveRatDown();
    }

}
setInterval(moveRat,2000);
function show(){
    var div = document.getElementById('garden');
    div.innerHTML ='';
    var coin= document.getElementById('money');
    coin.innerHTML=money + '<div class="coin"></div>';
    for ( var r=0; r<=9; r++){
        for ( var c=0; c<=9; c++){
        if ( garden[r][c] == MELON ) {
            div.innerHTML+= '<div class="melon" onclick="gather(MELON, '+r+","+c+');"></div>';
        }
        if ( garden[r][c] == CUCUMBER){
            div.innerHTML+= '<div class="cucumber" onclick="gather(CUCUMBER,'+r+","+c+');"></div>';
        }
        if ( garden[r][c] == TOMATO){
            div.innerHTML+= '<div class="tomato" onclick="gather(TOMATO,'+r+","+c+');"></div>';
        }
        if ( garden[r][c] == EMPTY){
            div.innerHTML+= '<div class="empty" onclick="gather(EMPTY,'+r+","+c+');"></div>';
        }
        if ( garden[r][c] == RAT ) {
            div.innerHTML+= '<div class="rat" onclick="gather(RAT, '+r+","+c+');"></div>';
        }
        if ( garden[r][c] == TRAP ) {
            div.innerHTML+= '<div class="trap"></div>';
        }
    }
}
}
show ();
function gather( vegetable, r,c ){

    if (vegetable == MELON){
    garden[r][c] = EMPTY;
    money=money+ MELON_PRICE;
    show();
    }
    if (vegetable == TOMATO){
    garden[r][c] = EMPTY;
    money= money+ TOMATO_PRICE;
    show();
    }
    if (vegetable == CUCUMBER){
    garden[r][c] = EMPTY;
    money= money+ CUCUMBER_PRICE;
    show();
    }
    if (vegetable == RAT){
    garden[r][c] = EMPTY;
    money= money- RAT_PRICE;
    show();
    }

    if (vegetable == EMPTY){
    garden[r][c] = prompt("Ce plantam: ?");
    show();
    }
    if(rat_c==trap_c && rat_r==trap_r){
      garden[r][c] = EMPTY;
      money=money+ TRAP_PRICE;
      show();
    }
      coin.innerHTML=money + '<div class="coin"></div>';
}
