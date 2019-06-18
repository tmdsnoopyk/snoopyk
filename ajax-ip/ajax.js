function getInformation(e){
    e.preventDefault();
    // ca sa nu faca refresh
    //gasiti input - scoateit textul din inp si alert
    var input = e.target.firstElementChild.lastElementChild;
    console.log( input.value );
    var xhr = new XMLHttpRequest();
    xhr.open("GET",`http://ip-api.com/line/${input.value}`);
    xhr.send();
    xhr.onload = function (){
        let div = document.getElementById('result');
        div.innerHTML = xhr.responseText;
        console.log(xhr.responseText.split("\n")[1]);
    }
}