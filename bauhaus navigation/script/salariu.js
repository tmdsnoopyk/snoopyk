// munca unui dev timp de o luna
// 1..31 (Ianuarie)
// 1 - luni
// luni-vineri (8ore)
// sambata (4ore)
// per ora - 10 $ / ora (luni-vineri) , 15 $ / ora (weekend)

// 1) Calculam ce salariu a primit pentru aceasta luna
// 2) de calculat impozitul pe venit (ajutam FISC) 12 %
//
var div = document.getElementById ('salariu');
var date = 1;
var salariu = 0.00; //$
var ore_l_v = prompt("CAte ore pe zi (Luni-Vineri)?");
var ore_s = prompt ("Cate ore pe zi (Sambata)?");
const REMUNERARE_L_V = 10;
const REMUNERARE_S = 15;
const IMPOZIT = 0.12;
document.write ( '<table border="1">' );
while ( date <= 31 ){
    if ( date % 7 == 6 || date % 7 == 0 ) {
        document.write( '<tr><td bgcolor="red">' + date + '</td></tr>' );
        if ( date % 7 == 6 ) {
            salariu += ore_s * REMUNERARE_S;
        }
    }else{
        document.write( '<tr><td>' + date + '</td></tr>' );
        salariu += ore_s * REMUNERARE_L_V;
    }
    date++;
}
document.write ( '</table>' );
document.write ("Salariu lunar: " + salariu + "$" + '<br>');
document.write ( "Trebuie  sa achiti pentru impozit:" + salariu * IMPOZIT + "$" + '<br>');
document.write ( "Ramane:" + salariu = salariu - salariu * IMPOZIT);
