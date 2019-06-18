var stage = document.getElementById('stage');

function addCoin (){
    let div = document.createElement ('div');
    let img = document.createElement ('img');
    img.className = "rotating";
    div.className = "coin falling rotating";
    div.style.left = Math.round( Math.random() * 100 ) + '%';
    div.style.transform = 'scale(' + (Math.random() * 1.5 + 0.2) + ')';
    img.src = "coin.png";
    img.addEventListener('animationend', function(e) {
        if(e.animationName == 'rot'){
        e.target.className = 'rotX';
        }
    });
    div.appendChild(img);
    stage.appendChild(div);


//     stage.innerHTML +=
//
//     `<div class="coin">
//         <img src="coin.png" alt="">
//     </div>`;
//
}

function removeCoin () {

}
