'use strict';
// alert("Tere");
console.log('Tere tulemast2!');
// muutujad ja tyybid
var kasOnMuutumatu = true;
var kasOnMuudetav = true;
// kasOnMuutumatu = true;
kasOnMuudetav = true;
var t6ene = true;
t6ene = true;
var arv;
arv = 5;
var s6ne;
s6ne = 'Tere';
var massiiv;
massiiv = [1, 2, 3,];
var tuple;
tuple = ['Hello', 12];
var V2rv;
(function (V2rv) {
    V2rv[V2rv["Roheline"] = 1] = "Roheline";
    V2rv[V2rv["Punane"] = 2] = "Punane";
    V2rv[V2rv["Kollane"] = 3] = "Kollane";
})(V2rv || (V2rv = {}));
var v2rv = V2rv.Punane;
// let suvaline: any;
// void, null ja underfined
/* operaatorid */
arv = 5 + 2;
arv = 5 - 2;
arv = 5 * 2;
arv = 6 / 2;
console.log(arv); /*muutujate ümber jutumärke ei panda*/
arv = arv + 4; //7
arv += 4; //11
arv %= 3; // 2 jääk
console.log(arv);
arv++; // 3
++arv; // 4
arv--; // 3
arv = (3 + 4) * 5; // 35
arv = Math.pow(10, 2); // 100 astmes eksperimentaalne
console.log(arv);
s6ne += ' sõne';
s6ne += " arv: " + arv + ".";
console.log(s6ne);
/* tingimuslaused */
s6ne = arv === 100 ? 'Tere' : 'Headaega';
console.log(s6ne);
var a = 10;
if (arv === 100) {
    var a_1 = 0; // potensiaalne shadowed variable
    s6ne = 'Tere';
}
else if (arv < 100) {
    s6ne = 'Headaega';
}
else {
    s6ne = '...';
}
console.log(s6ne);
switch (arv) {
    case 1:
        s6ne = 'Tere';
        break;
    case 102:
    case 90:
        s6ne = 'Headaega';
    default:
        s6ne = 'Muu värv';
}
if (s6ne !== 'Tere' && arv >= 0) {
    s6ne = 'Tingimus täiedetud';
}
// === on täpsem kui == sama ka !== !=
/* Tsüklid */
for (var i = 0; i < 5; ++i) {
    if (i === 3) {
        continue;
    }
    console.log("V\u00E4\u00E4rtus ts\u00FCklis " + i);
}
arv = 0;
while (arv <= 10) {
    s6ne += '2';
    if (arv === 5) {
        s6ne += '3';
        break;
    }
    arv++;
}
console.log(s6ne);
//# sourceMappingURL=algus.js.map