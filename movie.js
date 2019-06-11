const KEY_V3 = 'bf1ed2af5e03bee7427b854a76d6bdb5';
const KEY_V4 = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZjFlZDJhZjVlMDNiZWU3NDI3Yjg1NGE3NmQ2YmRiNSIsInN1YiI6IjVjZmZjNzYyMGUwYTI2MzMzYWNiYTQwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HOdjWUrNYRl4LYG7PgaQbg_Qd2e5OAhiyO9op-RrMfY';

const URL_V3 = 'https://api.themoviedb.org/3/'
const URL_V4 = 'https://api.themoviedb.org/4/'

// JSON.parse ("string") - structured data
// JSON.stringify ( structured data) - "string"

// Filme populare 

function get_popular_movies(){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", URL_V3 + 'movie/popular?api_key=' + KEY_V3);
    xhr.onload = function(){
        var data = JSON.parse(xhr.responseText);
        for (var i=0; i<5; i++){

            console.log(data.results[i]);
            let div = document.createElement('div');
            div.className = "card";
            let img = document.createElement('img');
            img.src = 'https://image.tmdb.org/t/p/w500/' + data.results[i].poster_path;
            img.className = "card-img-top";
            div.appendChild(img);
            let div2 = document.createElement('div2');
            div2.className = "card-body";
            let h5 = document.createElement('h5');
            h5.className = "card-title";
            h5.innerHTML = data.results[i].title;
            div2.appendChild(h5);
            let p = document.createElement('p');
            p.className = "card-text";
            p.innerHTML = "...";
            div2.appendChild(p);
            let a = document.createElement('a');
            a.href = "#";
            a.className = "btn btn-primary";
            a.innerHTML = "Go somewhere";
            div2.appendChild(a);
            div.appendChild(div2);
            let bug = document.querySelector('.popular-movies');
            bug.appendChild(div);
        }

        $('.popular-movies').slick({
            dots: true
        });
    }
    xhr.send();
}
get_popular_movies();
