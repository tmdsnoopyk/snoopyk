function showQuestion( index ){
    let form = document.createElement ('form');
    let h2 = document.createElement ('h2');
    h2.innerHTML = questions[index].question;
    form.appendChild(h2);
    let hr = document.createElement ('hr');
    form.appendChild(hr);
    for(let a=0; a<questions[index].answers.length; a++){

        let label1 = document.createElement ('label');
        let input1 = document.createElement ('input');
        let text = document.createTextNode(questions[index].answers[a]);
        input1.type = "checkbox";
        label1.appendChild(input1);
        label1.appendChild (text);
        form.appendChild (label1);
    }
    // let label2 = document.createElement ('label');
    // let input2 = document.createElement ('input');
    // input2.type = "checkbox";
    // let text2 = document.createTextNode(questions[index].answers[0]);
    // input2.innerHTML = "Varianta2";
    // label2.appendChild(input2);
    // label2.appendChild (text2);
    // form.appendChild (label2);
    let div = document.getElementById('content');
    div.innerHTML = '';
    div.appendChild(form);
    let span = document.getElementById('number');
    span.innerHTML = (current_question + 1);
}
// <form>
//         <h2>Intrebarea?
//         </h2>
//         <hr>
//         <label><input type="checkbox"> Varianta1</label>
//         <br>
//         <label><input type="checkbox"> Varianta2</label>
// </form>
var current_question = 0;

    var bn = document.getElementById ('next');
    var bp = document.getElementById ('prev');
function prevQuestion () {
    if ( current_question > 0) {
        current_question--;
        showQuestion (current_question);
        }
            if ( current_question == 0) {
                bp.disabled = true;
            } else {
                bp.disabled = false;
            }
            bn.disabled = false;
}

function nextQuestion () {
    if ( current_question < questions.length - 1) {
    current_question++;
    showQuestion (current_question);
}
    if ( current_question == questions.length - 1) {
        bn.disabled = true;
    } else {
        bn.disabled = false;
    }
    bp.disabled = false;
}
showQuestion ( current_question );
