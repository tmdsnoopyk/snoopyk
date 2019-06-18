function loadPage(n){
    // obiectul prin care comunicam
    var xhr = new XMLHttpRequest();
    // setam adresa
    if(n==1){
        xhr.open("GET", "pages/1.html");
        // incepem schimbul de date
         } else if(n==2){
        xhr.open("GET", "pages/2.html");
        // incepem schimbul de date
       } else if(n==3){
        xhr.open("GET", "pages/3.html");
    }
    xhr.send();
    //cand apare evenimentul "datele s-au incarcat"
    xhr.onload = function () {
        let div = document.getElementById('content');
        div.innerHTML = xhr.responseText;
        // raspunsul din partea serverului

    }

}