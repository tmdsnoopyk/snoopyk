let search_history = [
    "Kak ubiti Nicu?",
    "Chisinau pizza",
    "Facebook",
    "XXX",
    "Znakomstva 999.md"
]
let input = document.querySelector('input');
    input.addEventListener('click',showHistory);
let form = document.querySelector ('form');
    form.addEventListener('submit',save_history);
function save_history(e){
    search_history.unshift(input.value); // 2) de prevenit dublarea !! case, lower, upper 3) de prevenit  adaugarea valorilor goale , spatile de prisos
    e.preventDefault();

}
function showHistory(){
    var search = document.getElementsByClassName('dropdown-menu')[0];
        // search.innerHTML = '';
        $(search).empty(); // 1)while( children.length - .removeChild() )
    for ( var i=0; i<search_history.length; i++){
        var a = document.createElement('a');
        a.innerHTML=`<span id="s-${i}" class="badge badge-primary" onclick="remove(event)">x </span><span>` + search_history[i]+'</span>';// de eliminat acest span din search
        a.className ="dropdown-item";
        if (search_history.length - i==3) {
            a.style.opacity =0.8;
        }

        if (search_history.length - i==2) {
            a.style.opacity =0.7;
        }

        if (search_history.length - i==1) {
            a.style.opacity =0.6;
        }
        a.addEventListener('click', select);
        search.appendChild(a);
        }
}

function select(e){
    console.log(e.target.tagName);
    if (e.target.tagName == "SPAN") {
        input.value = e.target.innerText;
    } if (e.target.tagName == "A") {
    input.value = e.target.lastElementChild.innerText;
    }
}

function remove(e){
    e.stopPropagation(); //nu transmite click-ul parintelui
    let index = e.target.id.replace('s-','');
    search_history.splice(index,1);
    console.log (e.target);
    showHistory();
}

showHistory();
