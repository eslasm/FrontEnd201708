'use strict';
// alert("Tere");
let i: number = 0;
/* do{
    i++;
    console.log('Tere tulemast!' + ' ' + i);
}while(i<5) */
// muutujad ja tyybid;
const kasOnMuutmatu = true;
let kasOnMuudetav = true;
// kasOnMuutmatu = false;
kasOnMuudetav = false;
let t6ene: boolean;
t6ene = true;
let arv: number;
arv = 2;
let s6na: string;
s6na = 'Tere';
let massiiv: number[];
massiiv=[1, 32, 5];
let tuple: [string, number];
tuple = ['hello', 12];

tuple.forEach(element => {
    console.log(element);
});
enum V2rv {Roheline, Punane, Kollane}
let v2rv: V2rv= V2rv.Punane;

// let suvaline: any = 5;
// void, null ja undefinded, never;
/* operaatorid */
arv = 5 + 2;
arv = 5 - 2;
arv = 5 * 2;
arv = 6 / 2;
console.log(arv);
arv = arv + 4;  // 7
arv += 4; // 11
arv %= 3; // 2 jääk
arv++; // 3
++arv; // 4
arv--; // 3
arv = 10 ** 2; // 100 astmed. eksperimentaalne
console.log(arv);
s6na += ' sõna';
s6na += ` arv: ${arv}.`;
console.log(s6na);

/* Tingimus laused */
s6na = arv === 100 ? 'Tere' : 'Head aega';
console.log(s6na);
if(arv === 100){
    s6na = 'Tere2';
}else if(arv < 100){
    s6na = 'Headaega2';
}else{
    s6na = 'Meh';
}
switch(arv){
    case 100:
        s6na = 'Tere3';
        break;
    case 102:
        s6na = 'Ter3';
        break;
    case 90:
        s6na = 'T3';
        break;
    default:
        s6na = '...';
}

/* Tsüklid */
for(let i = 0; i < 5; i++){
    console.log ("Väärtus = " + i);
}
arv = 0;
while(arv <= 10){
    arv++;
}

/* Funktsioonid */