/// <reference path='algus.ts'/>
namespace Teine {
    // Tere teine fail
    Algus.Loom.prindiHulk();

    const pealkiri = document.getElementById('pealkiri');
    const func = () => {
            if (pealkiri) {
                pealkiri.innerText += ' 1';
        }
    };
    if (pealkiri) {
        pealkiri.innerText = 'Tere tulemast';
        pealkiri.addEventListener('click', func);
    }
    const cookieBox = document.getElementById('cookieBox');
    if (cookieBox) {
        const cookieBtn = cookieBox.getElementsByClassName('btn') [0];
        if (cookieBtn) {
            const func2 = () => {
            if (pealkiri) {
                pealkiri.innerText = 'Tere j2lle';
                cookieBtn.removeEventListener('click', func);
                cookieBox.outerHTML = '';
            }
        };
        cookieBtn.addEventListener('click', func2);
        }
    }
  /* Arvud Number */
  function kasTulemusAksepteeritav(sisend: number, sisend2: number) {
    if  (sisend * sisend2 <= Number.MAX_VALUE) {
        return true;
  } else {
      return false;
    }
  }
    // ParseFloat ja parseInt
    const arv4 = parseFloat('5.5Tere');
    const arv5 = parseInt('17.5Tere', 10);
    const arv6 = parseInt('17.5Tere', 16);
    const arv3 = Number('Tere');
    console.log(`${arv4}, ${arv5}, ${arv3},`);
    if (isNaN(arv3)) {
        console.log('Ei ole arv');
    } else {
        console.log('On arv');
    }
    // IsNan(), isFinite(), isInteger(), isSafeInteger()
    kasTulemusAksepteeritav(NaN, NaN);
    console.log(`Suure arvu korrutis: ${kasTulemusAksepteeritav (1E+100, Infinity)}`);
    console.log(Number.MAX_VALUE);

    // Const MAX_SAFE_INTEGER = (2 ** 53) - 1;
    // MIN.VALUE, MIN_SAFE_INTEGER, MAX_SAFE_INTEGER ((2 astmes 53)-1)
    console.log(5.54.toFixed(1));
    console.log(50.54.toPrecision(2));
    console.log(arv4.toExponential());
    console.log(arv4.toLocaleString('et-ee'));
    arv3.toString();

    /* Math */
    const pi = Math.PI;
    /* Naturaalsed logaritmid Math.E, Math.LN2, Math.LN10 */
    /* Logaritmid Math.LOG2E, Math.LOG10E */
    /* Ruutjuured Math.SQRT1_2, Math.SQRT2 */

    Math.abs(-5);
    // A Math.sign(-5) -1 tagastab positiivset või negatiivset märki

    Math.sin(pi); // sin(180)
    /* Math.sin(), Math.cos(), Math.tan() */
    /* Arc Mathc.asin(), Math.acos(), Math.atan() */

    /* Logaritmi funktsioonid exp(), log(), log2, log10, */
    Math.exp(5.5); // Math.E ** 5.5

    /* Ümardamine */
    Math.round(5.5); // 6
    Math.round(5.4); // 5
    /* Math.floor() - ümardab allapoole
    Math.ceil() - ümardab ülespoole
    Math.trunk() - ümardab lõigates väärtust
    Math.fround(1.337); - ümardab arvu konkreetseks 1.3370000123977661
    */
   const isFloatEqual = (a: number, b: number, epsilon: 0.00001) => {
        Number.MIN_SAFE_VALUE = Number.MIN_SAFE_VALUE || 2 ** (-38);
        Number.MAX_SAFE_VALUE = Number.MAX_SAFE_VALUE || 2 ** 38;
        const absA = Math.abs(a);
        const absB = Math.abs(b);
        const diff = Math.abs(a - b);
        // tslint:disable-next-line:triple-equals
        if(a == b) { // Infinity
            return true;
        // tslint:disable-next-line:triple-equals
        } else if (a == 0 || b == 0 || diff < Number.MIN_SAFE_VALUE) {
            return diff < (epsilon * MIN_SAFE_VALUE); // Võrdleb nullilähedaseid arve
        } else {
            return diff / Math.min(absA + absB, MAX_SAFE_VALUE) < epsilon;
        }
    /* Suvaline */
    const suvalineArvVahemikus = (vahemikusSuurus: number, niheNullist: number) => {
        return Math.round(Math.random() * vahemikusSuurus) + niheNullist;
    };
    const arv2vahel12 = suvalineArvVahemikus(10, 2);
    const arv1vahel1000 = suvalineArvVahemikus(999, 1);

     /* Astmes ja ruutjuur */
    Math.pow(10, 2); // 10**2
    Math.sqrt(4); // 2

    /* Min ja max, hüpotenuus */
    Math.max(4, 5, 6, 3); // 6
    Math.min(5, 6, 3); // 3
    // Math.hypot(2, 3, 4);
    // Ruutjuur (2**2 + 3**2 + 4**2)

    /* Kuupäev */
    const p2ev = new Date(2017, 8, 23);
    p2ev.setDate(16); // Muutub 2017-08-16
    p2ev.setMonth(9); // Muutub 2017-09-16
    p2ev.setFullYear(2016, 8); // Muutub 2016-08-16
    p2ev.setHours(13, 30, 23, 100); // Määrab kellaaja 13:30:23.100 +2 ja suveaeg
    // UTC - ajatsoonis 0
    p2ev.setUTCHours(13, 30, 23, 100); // Määrab kellaaja 10:30:23.100 +0
    p2ev.getTimezoneOffset(); // Tagastab ajatsooni ajalist erinevust
    p2ev.getDate(); // Tagastab kuupäeva
    Date.now(); // Antud ajahetk
    p2ev.toUTCString(); // Aeg ja kuupäev UTC ajatsoonis
    p2ev.toString(); // Aeg ja kuupäev
    p2ev.toTimeString(); // Aeg
    p2ev.toDateString(); // Kuupäev
    p2ev.toLocaleString('et-ee'); // Lokaalses formaadis kuupäev kellaajaga

    /* Sõned ja regular expressions */

let s6ne = 'Tere \n\'sõne\' ';
console.log(s6ne.length);

/* Otsing*/
s6ne.charAt (2); // Tagastab r
s6ne = s6ne.replace('istub', 'seisab'); // Vahetab ainult esimest
s6ne.indexOf('seisab'); // Kiirem otsingust
s6ne.lastIndexOf('seisab'); // Alustab tagant poolt
const l6pp = s6ne.search('istub'); // Koos regexiga
// S6ne.match('istub'); // Ainult regexiga
/* Tere
'sõne' seisab istub5 */
// S6ne.endsWith('seisab'); // Tagastab true, startWith('') otsib antud algus või lõpuga sõne
// S6ne.includes('seisab'); otsib keskel ka
s6ne.localeCompare('Tere', 'et-ee');
// S6ne töötlus
// S6ne + 'istub ' + 'istub5 '
s6ne = s6ne.concat('istub ', 'istub5 ');
// S6ne.repeat(5); kordab sõna 5 korda
s6ne = s6ne.trim(); // Eemaldab tühikud äärtest

// S6ne = s6ne.substr(0, l6pp - 1); // Argumentideks on algus ja s6ne pikkus
// S6ne = s6ne.slice(0, l6pp); // Argumentideks on algus ja s6ne lõpp
s6ne = s6ne.substring(0, 15); // Eelistada slicele

/* Tere
'sõne' seisab */
// S6ne.padStart(10, 'abc'); // või padEnd()
/* abc abc abTere
'sõne' seisab */

// S6ne.toLowerCase();
s6ne = s6ne.toUpperCase();
const len = s6ne.length;
s6ne = s6ne.substring(0, 1).toLowerCase() + s6ne.substring(1, len);
console.log(s6ne);
const s6neMassiiv = 'õun, apelsin, kurk'.split(', ');
console.log(s6neMassiiv);

/* regex */
const re = /(\w+)\s(\w+)/;
const nimi = 'Anna Lytsepp';
console.log(nimi.replace(re, '$2, $1')); /* Tamm, Juku */
