"use strict";
/// <reference path='algus.ts'/>
var Teine;
(function (Teine) {
    // tere teine fail
    // Algus.Loom.prindiHulk();
    var pealkiri = document.getElementById('pealkiri');
    if (pealkiri) {
        pealkiri.innerText = "Tere tulemast!";
    }
    var cookieBox = document.getElementById('cookieBox');
    if (cookieBox) {
        var cookieBtn = document.getElementsByClassName('btn')[0];
        if (cookieBtn) {
            cookieBtn.addEventListener('click', function () {
                if (pealkiri) {
                    pealkiri.innerText = 'Tere jälle';
                    cookieBox.outerHTML = '';
                }
            });
        }
    }
    /* Arvud */
    /* Number.MAX_VALUE - so max arv mida javacsript suudab käsitleda */
    function kasTulemusAktsepteeritav(sisend, sisend2) {
        if (sisend * sisend2 <= Number.MAX_VALUE) {
            return true;
        }
        else {
            return false;
        }
    }
    console.log("Suure arvu korrutis: " + kasTulemusAktsepteeritav(1.27E+100, 1E+100)); //st 1 astmes 300 st 127 ja 97 nulli
    console.log(Number.MAX_VALUE);
    /* infinity - suurem kui max value */
    /* NaN - not a nmber */
    /* isNaN(), isFinite()  - saab kontrollida kas on number või ...*/
    var arv3 = Number("Tere");
    //const arv3 = 3;
    if (isNaN(arv3)) {
        console.log("Ei ole arv");
    }
    else {
        console.log("On arv");
    }
    //MIN_VALUE, MIN_SAFE_INTEGER, MAX_SAFE_INTEGER ((2 astmes 53)-1) 
    // const MAX_SAFE_INTEGER = (2**53) -1; saab ona max safe integeri teha
    //isInteger(), isSafeInteger() funktsioonid, mis kontrollivad, kas arv on komakohata või näiteks mitte liiga suur komakohata arv
    // parseFloat() ja parseInt() - float komakohtadega arv, ülesanne otsida teksti seest arv, leiab algusest ainult
    var arv4 = parseFloat("5.5Tere");
    var arv5 = parseInt("17.5Tere", 10); // 10-nd süsteemis
    var arv6 = parseInt("A7.5Tere", 16); // 16-nd süsteemis
    console.log(arv4 + ", " + arv5 + ", " + arv6);
    console.log(arv5);
    console.log(5.5.toFixed(0)); //fixed ümardab sulgudes oleva komakohani 
    console.log(50.54.toFixed(1)); // komakohti 1
    console.log(50.54.toPrecision(2)); // ümardab, kuid loeb kõik numbrid alates vasakult, näiteks kui on ekraanil fikseetitud ruum
    console.log(5.5.toExponential()); // tagastab teadusliku arvu
    console.log(arv4.toLocaleString('et-ee')); // tagastab arvu nii nagu kohalikul kombel kirjutatakse, antud juhul komaga
    /* Math */
    var Euler = Math.E; // Euleri konstant
    var pi = Math.PI;
    /* Naturaalsed logaritmid konstandid Math.E, Math.LN2, Math.LN10 */
    /* Logaritmid konstandid Math.LOG2E, Math.LOG10E */
    /* Ruutjuured Math.SQRT1_2 - ruutjuur 0.5-st, Math.SQRT2 - ruutjuur 2-st */
    Math.abs(-5); //teeb absoluutarvuks, ehk need pole negatiivsed teeb -5-st 5 ja 5 jääb 5-ks
    /*Math.sign(-5); tagastab -1  positiivsus, negatiivsus märki*/
    Math.sin(pi); // sulgudesse radiaanides sin(180) kraadi
    /* Math.sin(), Math.cos(), Math.tan() */
    /* Arc Math.asin()... jne */
    /* Logaritmi funktsioonid Math.exp(), Math.log(), Math.log2(), Math.log10() - nendega arvutatakse välja */
    Math.exp(5.5); // exponentional 
    /* Astmed */
    Math.pow(10, 2); //10 ** 2 -ehk see arvutab 10 astmes 2
    Math.sqrt(4); // ruutjuur 4 on 2
    /* Suvaline */
    Math.random(); //annab suvalise arvu vahemikus 0-st 1- ni
    var arv2kuni12 = Math.round(Math.random() * 10) + 2;
    var suvalineArvVahemikus = function (vahemikusSuurus, niheNullist) {
        returm;
        Math.round(Math.random() * vahemikusSuurus) + niheNullist; // sellise valemiga arvutatakse näiteks suvaline arv 1 - 1000
    };
    /* Ümardamine */
    Math.round(5.5); // 6
    Math.round(5.4); // 5
    Math.floor(5.5); // ümardab  koik alla poole 5.6 on 5, -5.3 ümardab -5
    /* Math.ceil(); ümardab koik üles poole 5.1 saab 6
     Math.trunk(); ümardab lõigates väärtust
     Math.fround(); see ümardab arvu konkreetseks näit Math.fround(1.337) -st saab 1.3370000123977661 */
    /*töötamiseks komakohaga arvudega */
    var isFloatEqual = function (a, b, epsilon) {
        if (epsilon === void 0) { epsilon = 0.00001; }
        var MIN_SAFE_VALUE = Number.MIN_SAFE_VALUE || Math.pow(2, (-38));
        var MAX_SAFE_VALUE = Number.MAX_SAFE_VALUE || Math.pow(2, 38);
        var absA = Math.abs(a);
        var absB = Math.abs(b);
        var diff = Math.abs(a - b);
        if (a == b) {
            return true;
        }
        else if (a == 0 || b == 0 || diff < Math.pow(2, (-38))) {
            return diff < (epsilon * MIN_SAFE_VALUE); // vordleb nullilähedasi arve
        }
        else {
            return diff / Math.min(absA + absB, MAX_SAFE_VALUE) < epsilon;
        }
        /* min, max ja hüpotenuus*/
        Math.max(4, 5, 6, 3); // tagastab suurima arvu 6
        Math.min(4, 5, 6, 3); // 3
        Math.hypot(2, 3, 4); // hüpotenuus, ruutjuur(2**2 + 3**2 + 4**2)   2**2 - 2 astmes 2
    };
    /* Kuupäev */
    var p2ev = new Date(2017, 8, 23); // date funktsioon
    p2ev.setDate(16); // 2017-08-16
    p2ev.setMonth(9); // 2017-09-16
    p2ev.setFullYear(2017, 8, 23); // 2017-08-23
    p2ev.setHours(13, 30, 23, 100); // see määrb kellaaja 100 millisekundi täpsusega kell 13:30:23:100 +2 ja suveaeg
    // UTC ajatsoonis 0
    p2ev.setUTCHours(13, 30, 23, 100); // siis 10:30:23:100 +0
    p2ev.getTimezoneOffset(); // tagastab ajatsooni ajalist erinevust
    p2ev.getDate(); // tagastab kuupäeva
    Date.now(); // tagastab praegust aega
    p2ev.toUTCString(); // aeg ja kuupäev UTC ajatsoonis - vajalik rahvusvahelises firmas krüpteerimisel näiteks
    p2ev.toString; // aeg ja kuupäev
    p2ev.toLocaleString('et-ee'); //lokaalses formaadis kuupäev kellaajaga
    /* sõnad */
    var s6na = '   Tere \nsõna '; // \n viib uuele reale, loetakse üheks tähemärgiks
    console.log(s6na + s6na.length); //tagastab sõna pikkuse koos tühikutega jms
    s6na.charAt(2); // tagastab r
    /* sõna töötlus */
    s6na = s6na.concat('istub ', 'istub5 ');
    s6na = s6na.repeat(5);
    s6na = s6na.replace('istub ', 'seisab '); //vahetab esimese 'istub ' välja, paneb aemele 'seisab '
    var lopp = s6na.search('istub'); // search otsib valitud sõna
    s6na.indexOf('seisab'); //kiirem otsing, muidu sarnane eelmisele,
    s6na.lastIndexOf('seisab'); // alustab tagantpoolt
    s6na = s6na.slice(0, lopp); // slice lõikab välja, tagastab ülejäänu, argumentideks on algus ja s6na lopp
    s6na = s6na.substring(0, lopp); // soovituslik, sama mmis slice aga kiirem, kergem hallata
    s6na = s6na.substr(0, lopp - 1); // argumentideks on algus ja s6na pikkus
    s6na = s6na.trim(); // eemaldab mõlemalt poolt tühikud
    s6na.endsWith('seisab'); // true - sõna lõpeb 'seisab'-ga
    s6na.startsWith(); // saab otsida näiteks klasssinimedest kõiki ühenimelisi container näiteks
    s6na.includes(); // otsib igalt poolt
    console.log(s6na);
    var s6naMassiiv = 'õun, apelsin, kurk'.split(', ');
    console.log(s6naMassiiv);
    s6na = s6na.padStart(10, 'abc '); // peks tulema "abc abc abTere sõna seisab" st 9 tähemärki algusesse
    s6na.localeCompare('Tere', 'et-ee');
    s6na.match('istub'); // ainult regexiga, sarnane searchile
    // s6na.toLowerCase(); teeb väiketähtedeks
    //const len = s6na.length;
    // s6na = s6na.substring(0, 1).toLowerCase + s6na.substring(1, len);
    s6na = s6na.toUpperCase(); // teeb suurtähtedeks
    console.log(s6na);
    var re = /(\w+)\s(\w+)/; // regexi rükike word space word ?
    var nimi = 'Juku Tamm';
    console.log(nimi.replace(re, '$2, $1')); // kirjutab teise osa enne ja siis esimese
    // regex on väga efektiivne otsingusüsteemis, aga keerline
    /* Massiivid */
    var massiiv = ['õun', 'pirn', 'banaan', 'sidrun']; // ilma array-ta ja array annavad sama tulemuse
    // const massiiviPikkus = massiiv.length;
    // const massiiv2 = Array.from(massiiv) tekst tähe kaupa
    //const massiiv3 = new Array ('õun', 'pirn', 'banaan', 'sidrun'); //Array on massiiv, kasut keerulisema vormingu puhul
    var massiiv3 = Array.of('õun', 'pirn', 'banaan', 'sidrun');
    // ühe elemendi puhul array loob ikka massiivi aga Array.fo tagastab elemendi
    //const massiiv3 = new Array<string>('õun', 'pirn', 'banaan', 'sidrun'); //üks kasutus, et ära määrata sisu tüübid, string näiteks
    Array.isArray(massiiv); // kontrollib kas tegu on massiiviga
    massiiv3 = massiiv3.concat(massiiv);
    console.log(massiiv3);
    massiiv3 = massiiv.splice(2, 3); // mõjutab massiivi ennast eemaldab elemente ja lisab need teise massiivi
    console.log(massiiv);
    console.log(massiiv3);
    // massiiv3 = massiiv.slice(2,3); // mõjutab massiivi ennast eemaldab elemente ja kustutab need!
    var massiiv3 = massiiv3.concat(massiiv); //loodab massiivid
    // massiiv3.copyWithin(2, 1, 3); // lubab kopeerida ümber seda väärtust mis on massiivi sees, teeb seda juba massiivis
    console.log(massiiv3);
    massiiv.fill('kass', 0, 10); // täiadb kohast kohani
    console.log(massiiv);
    massiiv3.push('apelsin '); // lisab loppu
    console.log(massiiv3);
    massiiv3.pop(); // eemaldab lopust
    console.log(massiiv3);
    massiiv3.unshift('loom'); //lisab algusesse
    console.log(massiiv3);
    massiiv3.shift(); // eemaldab algusest
    console.log(massiiv3);
    /* otsing */
    massiiv3.includes('sidrun', 2); // kas massiiv sisaldab seda elementi
    massiiv3.indexOf('sidrun', 2); // asukoht 4
    massiiv3.lastIndexOf('sidrun'); // kui vaja otsida viimati lisatud elemente
    massiiv3.findIndex(function (element) { return element.startsWith('ba'); });
    ; // findIndex tagastab elemendi mis algab ba selle koha
    console.log(massiiv3.find(function (element) { return element.startsWith('ba'); })); //find tagastab elemendi mis algab ba
    /* kuvamine */
    console.log(massiiv3.toString()); // kasut kuvamiseks
    console.log(massiiv3.toLocaleString());
    console.log(massiiv3.join('-:-')); // näitab kuidas kuvada
    /* muu massiiv */
    massiiv3.every(function (element) { return typeof element === 'string'; }); // kontrollib kas koik elemendid vastavad tingimustele
    massiiv3.every(function (element) { return element[0] === element[0].toLowerCase(); }); // every kontrollib kas koik elemendid algavad väiketähega, käib koik elemendid läbi
    massiiv3.some(function (element) { return element[0] === element[0].toLowerCase(); }); //some kontrollib kas vähemalt üks vastab tingimustele, some on kiirem
    /* sorteerimine */
    massiiv3.sort(); // vaikimisi sorteerib koigepealt numbrid, siis suurtähed ja siis väiketähed tähestiku järjekorras
    console.log(massiiv3.reverse()); // pöörab massiivi pahupidi 
    var numbrid = [2, 4, 5, 1, 7];
    numbrid.sort(function (a, b) { return a - b; });
    console.log(numbrid);
    var numbreid = [2, 4, 5, 1, 7]; // näide kuidas sorteerida
    numbrid.sort(function (a, b) {
        console.log("a: " + a + ", " + b);
        return b - a;
    });
    console.log(numbreid);
    //numbrid.forEach((element) => {console.log(element); });
    // reduce reduceRight - teeb maatriksist massiivi
    var astmesnumbrid2 = [[1, 2], [4, 7], [8, 9]];
    var numbrid2 = astmesnumbrid2.reduceRight(function (a, b) { return a.concat(b); });
    console.log(numbrid2);
    // map, filter
    numbrid2 = numbrid2.map(Math.sqrt); //map ei rakendu enne kuiselle kutsume välja
    numbrid2 = numbrid2.filter(function (arv) { return arv > 2; }); //filtreerib välja spetsiifiliste tingimustega asjad
    console.log(numbrid2);
    // keys, values, entries
    var iterator = numbrid.entries(); //iterator massiivi sisse ehitatud päis, mis asub mingi elemendi kohal, seda nihutatakse. 
    console.log(iterator.next().value); //näitab mitmes koht ja selle väärtus, next liigub iga kord edasi 
    console.log(iterator.next().value);
    console.log(iterator.next().value);
    var iterator2 = numbrid.keys(); //
    console.log(iterator2.next().value); // ainult kohad
    console.log(iterator2.next().value);
    console.log(iterator2.next().value);
    var iterator3 = numbrid.values(); //
    console.log(iterator3.next().value); // ainult sisu
    console.log(iterator3.next().value);
    console.log(iterator3.next().value);
    /* Map ja Set */
    var map = new Map([['T', 25], ['P', 32], ['L', 21]]); // need on natuke erinevad massivist näit võti T sellele vastab väärtus 25
    map.set('S', 5);
    map.set('P', 21);
    map.delete('L');
    //map.clear(); //kustutab kõik
    for (var _i = 0, _a = Array.from(map); _i < _a.length; _i++) {
        var _b = _a[_i], key = _b[0], value = _b[1];
        console.log(key + ": " + value);
    }
    console.log(map.size); // map.size annab elementide arvu
    map.has('T'); // true,  vaatab kas on mapis, tagastab booleani
    map.get('T'); // 25, annab T väärtuse
    // map.forEach((el) => {});
    // values ja entries käituvad sarnaselt arrayle
    // set ja map peaaegu samad
    /* functions*/
    function funk(param, param2, param3) {
        return param + param2 + param3;
    }
    console.log(funk.name + " " + funk.length); //tagastab nime ja argumentide arvu
    var See = (function () {
        function See() {
            this.samm = 5;
            // kasutad aainult kui manipuleerida this 
            funk.apply(this, [3, 2, 1]); // kautab arrayd
            funk.bind(this, 1, 3, 2); // need ei kutsu funktsiooni, lihtsalt rakendab
            funk.call(this, 1, 2, 3); // this kasut nuppudega tegeledes, saab konteksti määrata
            // () => {}
        }
        return See;
    }());
    //funk.call(1, 2, 3); //funk(1, 2, 3)
    /* DOM - document object model */
    var element = document.getElementById('pealkiri'); // tagastab ühe elemendi
    var elements = document.getElementsByClassName('btn-cancel'); // tagastab listi
    var elements1 = document.getElementsByTagName('article'); // tagastab listi
    var element2 = document.querySelector('body article'); // tagastab esimese elemendi 
    var elements2 = document.querySelectorAll('body article'); // scc queryde abil
    // $('body article') // jquery element, toimib samamoodi kui eelmine
    elements.item(0);
    elements1.item(0);
    // events näit my event listener ja halvemad alternatiivis sellele
    elements.item(0).onclick = function (event) { alert(event); };
})(Teine || (Teine = {}));
//# sourceMappingURL=teine.js.map