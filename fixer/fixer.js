const KEY = '27eaa74dac903bf98202a2ee26a8a1bb';

// utilizand Fetch in loc de Ajax
function getCurrenciesForToday(){
    fetch(`http://data.fixer.io/api/latest?access_key=${KEY}`)
        .then(function (response) { 
            return response.json();
        }).then( function(data) {
             drawCurrenciesForToday( data );
        })
}
getCurrenciesForToday();


// desenarea graficului 

function drawCurrenciesForToday( currencies ){
    console.log( currencies );
    var ctx=document.getElementById('latest-currencies');
    var latestChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: Object.keys( currencies.rates ).slice(0,15),
            datasets: [
                {   
                    label: "Currencies for Today",
                    data: Object.values( currencies.rates ).slice(0,15),
                }
            ]
        },
        options: {}
    });
} 