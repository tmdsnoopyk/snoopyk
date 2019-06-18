var bullets = 10; // patroane

//
function addDuck(){
  var lake = document.getElementById('lake');
  var duck = `<div id="duck" class="duck" onclick="killDuck();"></div>`;
  lake.innerHTML = duck;
}
function moveDuck(){
  var duck= document.getElementById('duck');
      duck.style.bottom=randomButtom()+'px';
}

function randomButtom(){
  var bot = Math.floor(Math.random()*200);
  return bot; // returneaza valoare in script
}

setInterval (moveDuck, 2000);
function killDuck(){
  audioQuack();
}

function audioQuack(){
  var aux= document.getElementById('aux');
  var audio= `<audio controls src="/media/examples/t-rex-roar.mp3" autoplay></audio>`;
  aux.innerHTML = audio;
}
///////////////////////// Start DUCK //////////////////////////
addDuck();

function bullet(){
  bullets--;
  if (bullets>=1){
    alert('Ti-o mai ramas ' + bullets + " patroane");
  }else {
    alert("Out of bullets");
    document.location.reload();
  }
}
