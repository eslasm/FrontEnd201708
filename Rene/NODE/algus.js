'use strict';
// A alert("Tere")
console.log("Tere Tulemast");
// Muutujad ja tüübid
var kasOnMuutumatu = true;
var kasOnMuudetav = true;
// kasOnMuutumatu = false;
kasOnMuudetav = true;
var t6ene;
t6ene = true;
var arv;
arv = 5;
var s6ne;
s6ne = "tere";
var masiiv;
masiiv = [1, 2, 3];
var tuple;
tuple = ["hello", 12];
var V2rv;
(function (V2rv) {
    V2rv[V2rv["Roheline"] = 0] = "Roheline";
    V2rv[V2rv["Punane"] = 1] = "Punane";
    V2rv[V2rv["Kollane"] = 2] = "Kollane";
})(V2rv || (V2rv = {}));
var v2rv = V2rv.Punane;
// let suvaline: any;
// void, null ja undefined, never
// operaatorid
arv = 5 + 2;
arv = 5 - 2;
arv = 5 * 2;
arv = 6 / 2;
console.log(arv);
arv = arv + 4; // 7
arv += 4; // 11
arv %= 3; // 2 jääk
arv++; // 3
++arv; // 4
arv--; // 3
arv = Math.pow(10, 2);
console.log(arv);
s6ne += ' sõne';
console.log(s6ne);
s6ne += 'arv: ${arv}.';
console.log(s6ne);
/* Tingimuslaused */
s6ne = arv === 100 ? 'Tere' : 'Headaega';
console.log(s6ne);
if (arv === 100) {
    s6ne = "Tere";
}
else if (arv < 100) {
    s6ne = "Headaega";
}
else {
    var a = 0;
    s6ne = '';
}
document.write(s6ne);
switch (arv) {
    case 100:
        s6ne = "Tere";
        break;
    case 102:
    case 90:
        s6ne = "Headaega";
        break;
    default:
        s6ne = "...";
}
if (s6ne !== 'Tere' && arv >= 0) {
    s6ne = 'Tingimus täidetud';
}
// === on täpsem kui == sama ka !== !=
/* Tsüklid */
for (var i = 0; i < 5; ++i) {
    if (i === 3) {
        continue;
    }
    console.log("V\u00E4\u00E4rtus Ts\u00FCklis " + i);
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
console.log();
//# sourceMappingURL=algus.js.map