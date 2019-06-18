//setTimeout(f,interval);
//setInterval(f,interval);
//clearTimeout (id);
//clearInterval (id);

function addFlake(){
    var div_map = document.getElementById(`map`);
    var l = randomLeft();
        div_map.innerHTML = `<div style="left: ${l}px;" class="flake"></div>`;
}

addFlake();

function randomLeft(){
    var window_width = innerWidth;
    var left = Math.floor( Math.random() * window_width );
    return left; //returnam valoare inapoi
}
randomLeft();

setInterval ( addFlake, 500);
