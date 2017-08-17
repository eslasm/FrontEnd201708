'use strict';
// alert("Tere");
var i = 0;
do {
    i++;
    console.log('Tere tulemast!' + ' ' + i);
} while (i < 5);
// muutujad ja tyybid;
var kasOnMuutmatu = true;
var kasOnMuudetav = true;
// kasOnMuutmatu = false;
kasOnMuudetav = false;
var t6ene;
t6ene = true;
var arv;
arv = 2;
var s6na;
s6na = 'Tere';
var massiiv;
massiiv = [1, 32, 5];
var tuple;
tuple = ['hello', 12];
tuple.forEach(function (element) {
    console.log(element);
});
var V2rv;
(function (V2rv) {
    V2rv[V2rv["Roheline"] = 0] = "Roheline";
    V2rv[V2rv["Punane"] = 1] = "Punane";
    V2rv[V2rv["Kollane"] = 2] = "Kollane";
})(V2rv || (V2rv = {}));
var v2rv = V2rv.Punane;
// let suvaline: any = 5;
// void, null ja undefinded, never;
/* operaatorid */
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
arv = Math.pow(10, 2); // 100 astmed. eksperimentaalne
console.log(arv);
s6na += ' sõna';
s6na += " arv: " + arv + ".";
console.log(s6na);
//# sourceMappingURL=algus.js.map