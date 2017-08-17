'use strict';
// alert("Tere");
console.log('Tere tulemast2!');
/* muutujad ja tyybid */
var kasOnMuutumatu = true;
var kasOnMuudetav = true;
// kasOnMuutumatu = false;
kasOnMuudetav = true;
var t6ene;
t6ene = true;
var arv;
arv = 5;
var s6ne;
s6ne = 'Tere';
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
// let suvaline: any;
// void, null ja undefined, never
/* operaatorid */
arv = 5 + 2;
arv = 5 - 2;
arv = 5 * 2; // 10
arv = 6 / 2; // 3
console.log(arv);
arv = arv + 4; // 7
arv += 4; // 11
arv %= 3; // 2 jääk
console.log(arv);
arv++; // 3
++arv; // 4
arv--; // 3
arv = 5 * (3 + 4); // 35
arv = Math.pow(10, 2); // 100 astmes eksperimentaalne
console.log(arv);
s6ne += ' sõne';
s6ne += " arv: " + arv + ".";
console.log(s6ne);
//# sourceMappingURL=algus.js.map