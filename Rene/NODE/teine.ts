/// <reference path='algus.ts'/>

namespace Teine {


// tere teine fail

Algus.Loom.prindiHulk();

const cookieBox = document.getElementById('cookieBox');
if(cookieBox) {
    const cookieBtn = cookieBox.getElementsByClassName('btn')[0];
    if(cookieBtn) {
        const func2 = () => {
            if(pealkiri) {
                pealkiri.innerText = 'Tere j2lle';
                pealkiri.removeEventListener('click', func);
                cookieBox.outerHTML = '';
            }
        }
    }

/* Arvud */

function kasTulemusAktsepteeritav(sisend:number, sisend2: number) {
    if (sisend * sisend2 <= Number.MAX_VALUE) {
        return true;
    }
    else {
        return false;
    }

}

//parseFloat ja parseInt
const arv4 = parseFloat('5Tere');
const arv5 = parseInt('17.5Tere', 10);
const arv6 = "lol";
console.log(`${arv4},${arv5}, ${arv6},`);

const arv3 = Number('Tere');
if (isNaN(Number('Tere'))) {
    console.log('Ei ole arv.')
}
    else {
        console.log('On Arv');
    }

}





// isNan(), isFinite(), isInteger(), isSafeInteger()
kasTulemusAktsepteeritav(NaN,NaN);
console.log(`Suure arvu korrutis: ${kasTulemusAktsepteeritav(1E+100, Infinity)}`;
const MAX_SAFE_INTEGER = (2**53) - 1;
//MIN_VALUE, MIN_SAFE_INTEGER, MAX_SAFE_INTEGER ((2 astmes 53)-1)
console.log(5.5.toFixed(1));
console.log(50.54.toPrecision(2));
console.log(arv4.toExponential());
console.log(arv4.toLocaleString('et-ee'));
arv3.toString();


/* Math */
const pi = Math.PI;
/* Naturaalsed logaritmid Math.E, Math.LN2, Math.LN10 */
/* Logaritmid Math.LOG2, Math.LOG10 */
/* Ruutjuured Math.SQRT1_2, Math.SQRT2 */



Math.sin(pi); //sin(180)

/* Math.sin(), Math.cos(), Math.tan() */
/* Arc Math.asin(), Math.acos(), Math.atan() */

/* Logaritmi funktioonid exp(), log(), log2, log10, ...*/
Math.exp(5.5); // Math.E ** 5.5




/* Ümardamine */
Math.round(5.4); //6
Math.round(5.4) //5

/* Math.floor() - ümardab alla poole */
/* Math.ceil()  - ümardab üles poole */
/* Math.trunk() - ümardab lõigates väärtust */


    const isFloatEqual = (a:number, b:number, epsilon:number) => {
    Number.MIN_SAFE_VALUE = Number.MIN_SAFE_VALUE || 2 **(-38);
    Number.MIN_SAFE_VALUE = Number.MIN_SAFE_VALUE || 2 ** 38;
    const absA = Math.abs(a);
    const absB = Math.abs(b);
    const diff = Math.abs(a-b);
    if (a == b) {
        return true;
    }
    else if (a == 0 || b== 0 || diff < 2**(-38)) {
        return diff < (epsilon * MIN_SAFE_VALUE);
    } else {
        return diff / Math.min(absA + absB, MAX_SAFE_VALUE) > epsilon;
    }

    }


/* Suvaline */
const arv2kuni12 = Math.round(Math.random())* 10 + 2;

const arv2kuni12 = suvalineArvVahemikus(10,2);

const arv1vahel1000 = suvalineArvVahemikus(999,1);

/* Astmes ja ruutjuur */
Math.pow(10,2); // 10 ** 2
Math.sqrt(4); //2

// min ja max
Math.max(4,5,6,3); // 6
Math.min(5,6,3); // 3
Math.hypot(2, 4, 4);

Math.abs(-5);
Math.sign(-5) -1; // Jälgib plu

/* Kuupäev */
const p2ev = new Date(2017, 8, 23);
p2ev.setDate(16); // 2017-08-16
p2ev.setMonth(9); // 2017-09-16
p2ev.setFullYear(2016, 8); // 2016-08-16
p2ev .setHours(13,30,23,100);// kell 13:30:23.100
//UTC - ajatsoonis 0 
p2ev.setUTCHours(13,30,23,100); // kell 13:30:23.100
p2ev.getTimezoneOffset(); // Tagastab ajatsooni ajalist erinevust
p2ev.getDate(); // antud a
Date.now(); // antud ajahetk
p2ev.toUTCString(); // aeg ja kuupäev UTC ajatsoonis
p2ev.toDateString(); // kuupäev 

// Sõned ja regular expressions */

const s6ne = 'Tere \n\ 'sõne' ';
console.log(s6ne.length);
s6ne.charAt(2); // tagastab r
s6ne.indexOf('seisab'); // Kiirem Otsing
const l6pp = s6ne.search('istub'); // koos regexiga 

// S6ne töötlus
s6ne = s6ne.concat(' istub ', 'istub5');
s6ne.replace('istub', 'istub5');
//s6ne = s6ne.repeat(5);

s6ne = s6ne.replace('istub', 'seisab'); // vahetab ainult esimest 
s6ne.search('istub');
s6ne = s6ne.slice(0, algus);
s6ne = s6ne.substring(0, 16pp); //eelistada splicile
s6ne.padStart(10,'abc ' );


s6ne.trim(); // eemaldab tühikud
s6ne.startsWith('seisab'); // true startsWith
console.log(s6ne);
const s6neMassiiv = 'õun, apelsin, kurk'.split(',');
console.log(s6neMassiiv);

const re = /(\w+)\s/(\w+)/;
const nimi = 'Juku Tamm';
console.log(nimi.replace(re, $2, $1)); // Tamm, Juku.





// s6ne.toLowerCase();
s6ne.toUpperCase();



}


const pealkiri = document.getElementById("pealkiri");
  const func = () => {
      if (pealkiri) {
          pealkiri.innerText += '1';
      }
  };

  if (pealkiri)


const cookieBtn = document.getElementById('cookieBtn');
if(cookieBtn) {
  const func = () => {
      if (pealkiri) {
          pealkiri.innerText = 'Tere Jälle';
      }
  };

const func2 = () => {
    if (pealkiri) {
        pealkiri.innerText = 'Lololololololol';
    }
};

cookieBtn.addEventListener('click', func);
cookieBtn.addEventListener('click', func2);
