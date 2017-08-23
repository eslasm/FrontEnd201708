/// <reference path='algus.ts'/>
namespace Teine {
    // tere teine fail
    Algus.Loom.prindiHulk();

    const pealkiri = document.getElementById('pealkiri');
    const func = () => {
        if (pealkiri) {
            pealkiri.innerText += '1';
        }
    };
    if (pealkiri) {
        pealkiri.innerText = 'Tere tulemast';
        pealkiri.addEventListener('click', func);
    }
    const cookieBox = document.getElementById('cookieBox');
    if (cookieBox) {
        const cookieBtn = cookieBox.getElementsByClassName('btn')[0];
        if (cookieBtn) {
            const func2 = () => {
                if (pealkiri) {
                    pealkiri.innerText = 'Tere j2lle';
                    pealkiri.removeEventListener('click', func);
                    cookieBox.outerHTML = '';
            }
        };
            cookieBtn.addEventListener('click', func2);
        }
    }

    /* Arvud Number*/
    // tslint:disable-next-line:only-arrow-functions
    function kasTulemusAksepteeritav(sisend: number, sisend2: number) {
        if (sisend * sisend2 <= Number.MAX_VALUE) {
            return true;
        } else {
          return false;
        }
    }
    // parseFloat() ja parseInt()
    const arv4 = parseFloat('5.5Tere');
    const arv5 = parseInt('17.5Tere', 10);
    const arv6 = parseInt('17.5Tere', 16);
    const arv3 = Number ('Tere');
    console.log(`${arv4}, ${arv5}, ${arv6}`);

    // isNaN(), isFinite(),isIneger(), isSafeInteger()
    kasTulemusAksepteeritav(NaN, NaN);
    console.log(`Suure arvu korrutis: ${kasTulemusAksepteeritav(1.27E+100, Infinity)}`);
    console.log(Number.MAX_VALUE);

    // a MIN_VALUE, MIN_SAFE_INTEGER, MAX_SAFE_INTEGER ((2 astmes 53)-1)
    // const MAX_SAFE_INTEGER = (2 ** 53) - 1;
    console.log(50.54.toFixed(1));
     console.log(50.54.toPrecision(2));
    console.log(arv4.toExponential());
    console.log(arv4.toLocaleString('et-ee'));
    arv3.toString();

    /* Math */
    const pi = Math.PI;
    /* Naturaalsed logarimind Math.E, Math.LN2, Math.LN10 */
    /* Logaritmid Math.LOG2E, Math.LOG10E */
    /* Ruutjuured Math.SQRT1_2, Math.SQRT2 */

    /* Ümardamine*/
    Math.round(5.5); // 6
    Math.round(5.4); // 5
    /* Math.floor() - ümarda alla poole
    Math.ceil() - ümardab üles poole
    Math.trunk() - ümardab lõigates väärtust
    Math.fround(1.337); - see ümardab arvu konkreetseks 1.3370000123977661
    */
    const isFloatEqual = (a: number, b: number, epsilon = 0.00001) => {
        const MIN_SAFE_VALUE = Number.MIN_SAFE_VALUE || 2 ** (-38);
        const MAX_SAFE_VALUE = Number.MAX_SAFE_VALUE || 2 ** 38;
        const absA = Math.abs(a);
        const absB = Math.abs(b);
        const diff = Math.abs(a - b);
        if (a === b) {
            return true;

        } else if (a === 0 || b === 0 || diff < MIN_SAFE_VALUE) {
            return diff <  (epsilon * MIN_SAFE_VALUE); // võrdleb nulli lähedaseid arve
        } else {
            return diff / Math.min(absA + absB, MAX_SAFE_VALUE) < epsilon;
        }
    };

    /* Suvaline */
    const suvalineArvVahemikus = (vahemikusSuurus: number, niheNullist: number) => {
        return Math.round(Math.random() * vahemikusSuurus) + niheNullist;
    };
    const arv2vahel12 = suvalineArvVahemikus(10, 2);
    const arv1vahel1000 = suvalineArvVahemikus(999, 1);

    /* Astmes ja ruutjuur */
    Math.pow(10, 2); // 10 ** 2
    Math.sqrt(4); // 2

    /* min ja max, hüpotenuus */
    Math.max(4, 5, 6, 3); // 6
    Math.min(5, 6, 3); // 3
    // a Math.hypot(2, 3, 4); // ruutjuur (2**2 + 3**2 + 4**2)
    // ruutjuur (2**2 + 3**2 + 4**2)

    /* Astmes */
    Math.pow(10, 2); // 10 ** 2 kümme astmes kaks
    Math.abs(-5);
    // a Math.sign(-5) -1 tagastab positiivset või negatiivset märki
    Math.sin(pi); // sin(180)
    /* Math sin(), Math cos(), Math tan() */
    /* Arc Math.asin(), Math.acos(), Math.atan() */

    /* Logaritmi funktsioonid exp(), log(), log2(), log10(), ... */
    Math.exp(5.5); // a Math.E ** 5.5

    /* Kuupäev*/
    const p2ev = new Date(2017, 8, 23);
    p2ev.setDate(16);  // 2017-08-16
    p2ev.setMonth(9); // 2017-09-16
    p2ev.setFullYear(2017, 8, 23); // 2017-08-23
    p2ev.setHours(13, 30, 23, 100); // kell 13:30:23.100 +2 ja suveaeg
    // a UTC - ajatsoonis 0
    p2ev.setUTCHours(13, 30, 23, 100); // kell 10:30:23.100 +0
    p2ev.getTimezoneOffset(); // tagastab ajatsooni ajalist erinevust
    p2ev.getDate(); // tagastab kuupäeva
    Date.now(); // antud ajahetk
    p2ev.toUTCString(); // aeg ja kuupäev UTC ajatsoonis
    p2ev.toString(); // aeg ja kuupäev
    p2ev.toString(); // aeg
    p2ev.toDateString(); // kuupäev
    p2ev.toLocaleString('et-ee'); // lokaalses formaadis kuupäev kellaajaga

    /* sõned ja regular expressions*/
    let s6ne = '    Tere \n\'sõne\'\ ';
    console.log(s6ne + s6ne.length);
    s6ne.charAt(2); // tagastab R

    // s6ne töötlus
    // s6ne + 'istub ' + 'istub5 '
    s6ne = s6ne.concat('istub ', 'istub5 ');
    // s6ne.repeat(5); kordab 5 korda
    s6ne = s6ne.replace('istub', 'seisab'); // vahetab ainult esimest
    s6ne.indexOf('seisab', 3); // kiirem otsing
    s6ne.lastIndexOf('seisab'); // alustab tagant poolt
    const l6pp = s6ne.search('istub'); // koos regexiga
    // s6ne.match('istub'); ainult regexiga
    /*Tere
    'sõne' seisab istub5 */
    s6ne = s6ne. substr(0, l6pp - 1); // argumentideks on algus ja s6ne pikkus
    // s6ne = s6ne.slice(0, l6pp); // argumentideks on algus ja s6ne lõpp
    s6ne = s6ne.substring(0, 15); // eelistada slicele

    /* Tere
    'sõne' seisab*/
    // s6ne.padStart(10, 'abc '); // või padEnd()
     /*abc abc abTere
    'sõne' seisab*/
    s6ne = s6ne.trim(); // eemaldab tühikud äärtest

    /* otsing */
    // s6ne.endsWith('seisab'); // true starsWith('') otsib antud algus või lõpuga sõne
    // s6ne.includes('seisab'); otsib keskel ka
    s6ne.localeCompare('Tere', 'et-ee');

    // s6ne.toLowerCase();
    s6ne = s6ne.toLocaleUpperCase();
    const len = s6ne.length;
    s6ne = s6ne.substring(0, 1).toLowerCase() + s6ne.substring(1, len);
    console.log(s6ne);
    const s6neMassiiv = 'õun, apelsin, kurk'.split(', ');
    console.log(s6neMassiiv);

    /* regex */
    const re = /(\w+)\s(\w+)/;
    const nimi = 'M2rt Eslas';
    console.log(nimi.replace(re, '$2, $1')); /* Eslas, M2rt */

}
