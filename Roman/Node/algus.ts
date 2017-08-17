'use strict';

// alert("Tere");
console.log('Tere tulemast2!');

/* muutujad ja tyybid */
const kasOnMuutumatu = true;
let kasOnMuudetav = true;
// kasOnMuutumatu = false;
kasOnMuudetav = true;

let t6ene: boolean;
t6ene = true;
let arv: number;
arv = 5;
let s6ne: string;
s6ne = 'Tere';

let massiiv: number[];
massiiv = [1, 2, 3];
let tuple: [string, number];
tuple = ['Hello', 12];
enum V2rv {Roheline = 1, Punane, Kollane}
let v2rv: V2rv = V2rv.Punane;

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
arv = 10 ** 2; // 100 astmes eksperimentaalne
console.log(arv);

s6ne += ' sõne';
s6ne += ` arv: ${arv}.`;
console.log(s6ne);
