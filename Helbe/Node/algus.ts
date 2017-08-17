'use strict';
// alert("Tere")
console.log('Tere tulemast');
/* muutujad ja tüübid */
const kasOnMuutumatu = true; // ei saa objekti muuta, konstant

let kasOnMuudetav = true; // let-i saab muuta
kasOnMuudetav = true;

let t6ene: boolean;
t6ene = true;
let arv: number;
arv = 5;
let s6na: string;
s6na = 'Tere';
let massiiv: number[];
massiiv = [1,2,3];
let tuple: [string, number]
tuple = ['Hello', 12];
enum V2rv {Roheline = 1, Punane, Kollane}
let v2rv: V2rv = V2rv.Punane;
let suvaline: any; // pole otseselt soovitatav kasutada
//muutujad void, null ja undefined kasut algväärtustamiseks, kasut funktsioonidega

/* operaatorid */
arv = 5 + 2;
arv = 5 - 2;
arv = 5 * 2;
arv = 6 / 2; // kirjutab 3
arv = arv + 4; // saab arvu 7
arv += 4 // saab arvu 11
console.log(arv);

arv %= 3; // protsent tagastab jäägi vastus 2
console.log(arv);
arv++; // vastus 3
++arv; // vastus 4 tehete jätjekord pikkades tehetes oluline 
arv--; // vastus 3
arv = 5 * (3 + 4); // vastus 35
arv = 10 ** 2; // 10 astmes 2 eksperimentaalne
console.log(arv);

s6na += ' tere ';
console.log(s6na);
s6na += `arv: ${ arv}.`; // Tere tere arv 100.
console.log(s6na);

/*tingimuslaused*/
s6na = arv === 100 ? 'Tere' : 'Head aega';
console.log(s6na);
if(arv === 100) {
    s6na = 'Tere';
} else if (arv < 100){
    s6na = 'Head aega!';
} else {
    s6na = '...';
}
console.log(s6na);

switch(arv) { //kasut arvudega
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
    s6na = 'muu värv'    
}
if(s6na !=='Tere' && arv >= 0) // && ja, ! eitus, ehk ei ole võrdne
    s6na = 'Tingimus täidetud';
// === on täpsem kui == , sama ka !== ja !=

/* Tsüklid */
for(let i = 0; i < 5; ++i) {
    console.log(`Väärtus tsüklis ${i}`); // kaldkriipsukesed jutumärkide asemel
}
arv = 0;
while(arv <= 10){
    s6na += '2 '; //hakkab nullist lugema, teeb seega 11 korda
    if(arv === 5){
        s6na +='3 ';
    }
    arv++;
}
console.log(s6na);

// do while teeb ühe korra ära ja siis vaatab kas on veel vaja

/* funktsioonid */
