var div = document.getElementById ('termo');
var t = prompt ("Cate grade sunt? :");
//-20..0 -> frig
//0..10 -> normal
// 11..50 -> cald
if( t < -20 || t > 50 || t===null || t===""){ // null p/u cancel in prompt, "pentru ok"
    div.innerHTML = "ERROR 404";
}else{
    div.innerHTML = '<div>-20| -10| 0| 10| 20| 30| 40| 50</div>';
    var w = (+t+20) *2.8;
    div.innerHTML += '<div style="background: red; height: 5px; width:'+w+'px;"></div>';

if( t >= -20 && t <=0 ) {
    div.innerHTML +="rece";
}else if( t <=10 ){
    div.innerHTML += "normal";
}else{
    div.innerHTML += "cald";
}
}
