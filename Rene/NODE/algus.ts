'use strict'

// A alert("Tere")
console.log("Tere Tulemast");

// Muutujad ja tüübid
const kasOnMuutumatu = true;
let kasOnMuudetav = true;
// kasOnMuutumatu = false;

kasOnMuudetav = true;

let t6ene: boolean;
t6ene = true;
let arv: number;
arv = 5;
let s6ne: string;
s6ne = "tere";
let masiiv: number [];
masiiv = [1, 2, 3];
let tuple: [string, number];
tuple = ["hello", 12];
enum V2rv {Roheline, Punane, Kollane}
let v2rv: V2rv = V2rv.Punane;

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
arv = 10 ** 2;
console.log(arv);

s6ne += ' sõne';
console.log(s6ne);

s6ne += 'arv: ${arv}.';
console.log(s6ne); 

/* Tingimuslaused */

s6ne = arv === 100 ? 'Tere' : 'Headaega';
console.log(s6ne);

if (arv === 100) {
    s6ne = "Tere"
} else if(arv < 100) {
    s6ne = "Headaega"
} else {
    let a = 0;
    s6ne = '';
}

document.write(s6ne);

switch(arv) {
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

if(s6ne !== 'Tere' && arv >= 0) { // &&  - ja , || - v6i  
    s6ne = 'Tingimus täidetud';
}

// === on täpsem kui == sama ka !== !=


/* Tsüklid */

for (let i = 0; i < 5; ++i) {
    if (i === 3) { continue; }
    console.log(`Väärtus Tsüklis ${i}`);
}


arv = 0;

while (arv <= 10) {
    s6ne+= '2';
    if(arv === 5) {
        s6ne += '3';
        break;
    }
    arv++;
}

console.log();

// Do while

/* funktsioon */


