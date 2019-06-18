function play(song){ //argument
    var div_player = document.getElementById('player');
    if ( song == 1 ){
        var url =`https://www.youtube.com/embed/E9eAshaPvYw`
    }else if ( song == 2 ){
    var url =`https://www.youtube.com/embed/lD-NcoXJbsU`
}else if ( song == 3 ){
    var url =`https://www.youtube.com/embed/htjBJDojdbA`
}else if ( song == 4 ){
    var url =`https://www.youtube.com/embed/KDxQkTQhmRE`
}else if( song == 5 ){
var url =`https://www.youtube.com/embed/RVonJchNPEA`
}
    var iframe=`<iframe width="560" height="315" src="${url}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    div_player.innerHTML = iframe;
}
