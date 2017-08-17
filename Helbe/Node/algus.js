'use strict';
// alert("Tere")
console.log('Tere tulemast');
/* muutujad ja tüübid */
var kasOnMuutumatu = true; // ei saa objekti muuta, konstant
var kasOnMuudetav = true; // let-i saab muuta
kasOnMuudetav = true;
var t6ene;
t6ene = true;
var arv;
arv = 5;
var s6na;
s6na = 'Tere';
var massiiv;
massiiv = [1, 2, 3];
var tuple;
tuple = ['Hello', 12];
var V2rv;
(function (V2rv) {
    V2rv[V2rv["Roheline"] = 1] = "Roheline";
    V2rv[V2rv["Punane"] = 2] = "Punane";
    V2rv[V2rv["Kollane"] = 3] = "Kollane";
})(V2rv || (V2rv = {}));
var v2rv = V2rv.Punane;
var suvaline; // pole otseselt soovitatav kasutada
//muutujad void, null ja undefined kasut algväärtustamiseks, kasut funktsioonidega
/* operaatorid */
arv = 5 + 2;
arv = 5 - 2;
arv = 5 * 2;
arv = 6 / 2; // kirjutab 3
arv = arv + 4; // saab arvu 7
arv += 4; // saab arvu 11
console.log(arv);
arv %= 3; // protsent tagastab jäägi vastus 2
console.log(arv);
arv++; // vastus 3
++arv; // vastus 4 tehete jätjekord pikkades tehetes oluline 
arv--; // vastus 3
arv = 5 * (3 + 4); // vastus 35
arv = Math.pow(10, 2); // 10 astmes 2 eksperimentaalne
console.log(arv);
s6na += ' tere ';
console.log(s6na);
s6na += "arv: " + arv + "."; // Tere tere arv 100.
console.log(s6na);
/*tingimuslaused*/
s6na = arv === 100 ? 'Tere' : 'Head aega';
console.log(s6na);
if (arv === 100) {
    s6na = 'Tere';
}
else if (arv < 100) {
    s6na = 'Head aega!';
}
else {
    s6na = '...';
}
console.log(s6na);
switch (arv) {
    case 100:
        s6na = 'Tere';
        break;
    case 102:
    case 90:
        s6na = 'Heada ega';
        break;
    default:
        s6na = '...';
}
switch (v2rv) {
    case 1:
    case V2rv.Punane:
        s6na = 'roheline või punane';
        break;
    default:
        s6na = 'muu värv';
}
if (s6na !== 'Tere' && arv >= 0)
    s6na = 'Tingimus täidetud';
// === on täpsem kui == , sama ka !== ja !=
/* Tsüklid */
for (var i = 0; i < 5; ++i) {
    console.log("V\u00E4\u00E4rtus ts\u00FCklis " + i); // kaldkriipsukesed jutumärkide asemel
}
arv = 0;
while (arv <= 10) {
    s6na += '2 '; //hakkab nullist lugema, teeb seega 11 korda
    if (arv === 5) {
        s6na += '3 ';
    }
    arv++;
}
console.log(s6na);
//# sourceMappingURL=algus.js.map