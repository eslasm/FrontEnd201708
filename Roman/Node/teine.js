"use strict";
/// <reference path='algus.ts'/>
var Teine;
(function (Teine) {
    // tere teine fail
    Algus.Loom.prindiHulk();
    var pealkiri = document.getElementById('pealkiri');
    var func = function () {
        if (pealkiri) {
            pealkiri.innerText += ' 1';
        }
    };
    if (pealkiri) {
        pealkiri.innerText = 'Tere tulemast';
        pealkiri.addEventListener('click', func);
    }
    var cookieBox = document.getElementById('cookieBox');
    if (cookieBox) {
        var cookieBtn = cookieBox.getElementsByClassName('btn')[0];
        if (cookieBtn) {
            var func2 = function () {
                if (pealkiri) {
                    pealkiri.innerText = 'Tere j2lle';
                    pealkiri.removeEventListener('click', func);
                    cookieBox.outerHTML = '';
                }
            };
            cookieBtn.addEventListener('click', func2);
        }
    }
    /* Arvud Number */
    function kasTulemusAksepteeritav(sisend, sisend2) {
        if (sisend * sisend2 <= Number.MAX_VALUE) {
            return true;
        }
        else {
            return false;
        }
    }
    // parseFloat() ja parseInt()
    var arv4 = parseFloat('5.54Tere');
    var arv5 = parseInt('17.5Tere', 10);
    var arv6 = parseInt('A7.5Tere', 16);
    var arv3 = Number('Tere');
    console.log(arv4 + ", " + arv5 + ", " + arv6 + ",");
    if (isNaN(arv3)) {
        console.log('Ei ole arv');
    }
    else {
        console.log('On arv');
    }
    // isNaN(), isFinite(), isInteger(), isSafeInteger()
    kasTulemusAksepteeritav(NaN, NaN);
    console.log("Suure arvu korrutis: " + kasTulemusAksepteeritav(1.27E+100, Infinity));
    console.log(Number.MAX_VALUE);
    // a MIN_VALUE, MIN_SAFE_INTEGER, MAX_SAFE_INTEGER ((2 astmes 53)-1)
    // const MAX_SAFE_INTEGER = (2 ** 53) - 1;
    console.log(50.54.toFixed(1));
    console.log(50.54.toPrecision(2));
    console.log(arv4.toExponential());
    console.log(arv4.toLocaleString('et-ee'));
    arv3.toString();
    /* Math */
    var pi = Math.PI;
    /* Naturaalsed logarimid Math.E, Math.LN2, Math.LN10 */
    /* Logaritmid Math.LOG2E, Math.LOG10E */
    /* Ruutjuured Math.SQRT1_2, Math.SQRT2 */
    Math.abs(-5);
    // a Math.sign(-5) -1 tagastab positiivset või negatiivset märki
    /* Ümardamine */
    Math.round(5.5); // 6
    Math.round(5.4); // 5
    /* Math.floor() - ümardab alla poole
    Math.ceil() - ümardab üles poole
    Math.trunk() - ümardab lõigates väärtust
    Math.fround(1.337); - see ümardab arvu konkreetseks 1.3370000123977661
    */
    var isFloatEqual = function (a, b, epsilon) {
        if (epsilon === void 0) { epsilon = 0.00001; }
        var MIN_SAFE_VALUE = Number.MIN_SAFE_VALUE || Math.pow(2, (-38));
        var MAX_SAFE_VALUE = Number.MAX_SAFE_VALUE || Math.pow(2, 38);
        var absA = Math.abs(a);
        var absB = Math.abs(b);
        var diff = Math.abs(a - b);
        // tslint:disable-next-line:triple-equals
        if (a == b) {
            return true;
            // tslint:disable-next-line:triple-equals
        }
        else if (a == 0 || b == 0 || diff < MIN_SAFE_VALUE) {
            return diff < (epsilon * MIN_SAFE_VALUE); // võrdleb nulli lähedaseid arve
        }
        else {
            return diff / Math.min(absA + absB, MAX_SAFE_VALUE) < epsilon;
        }
    };
    /* Suvaline */
    var suvalineArvVahemikus = function (vahemikusSuurus, niheNullist) {
        return Math.round(Math.random() * vahemikusSuurus) + niheNullist;
    };
    var arv2vahel12 = suvalineArvVahemikus(10, 2);
    var arv1vahel1000 = suvalineArvVahemikus(999, 1);
    /* Astmes ja ruutjuur */
    Math.pow(10, 2); // 10 ** 2
    Math.sqrt(4); // 2
    /* min ja max, hüpotenuus */
    Math.max(4, 5, 6, 3); // 6
    Math.min(5, 6, 3); // 3
    //Math.hypot(2, 3, 4); 
    // ruutjuur (2**2 + 3**2 + 4**2)
    Math.sin(pi); // sin(180)
    /* Math.sin(), Math.cos(), Math.tan() */
    /* Arc Math.asin(), Math.acos(), Math.atan() */
    /* Logaritmi funktsioonid exp(), log(), log2(), log10(), ... */
    Math.exp(5.5); // a Math.E ** 5.5
    /* Kuupäev */
    var p2ev = new Date(2017, 8, 23);
    p2ev.setDate(16); // 2017-08-16
    p2ev.setMonth(9); // 2017-09-16
    p2ev.setFullYear(2016, 8); // 2016-08-16
    p2ev.setHours(13, 30, 23, 100); // kell 13:30:23.100 +2 ja suveaeg
    // UTC - ajatsoonis 0
    p2ev.setUTCHours(13, 30, 23, 100); // kell 10:30:23.100 +0
    p2ev.getTimezoneOffset(); // tagastab ajatsooni ajalist erinevust
    p2ev.getDate(); // kuupäeva tagastab arvuna
    Date.now(); // antud ajahetk
    p2ev.toUTCString(); // aeg ja kuupäev UTC ajatsoonis
    p2ev.toString(); // aeg ja kuupäev
    p2ev.toTimeString(); // aeg
    p2ev.toDateString(); // kuupäev
    p2ev.toLocaleString('et-ee'); // lokaalses formaadis kuupäev kellaajaga
    /* sõned ja regular expressions */
    var s6ne = '   Tere \n\'sõne\' ';
    console.log(s6ne.length);
    /* Otsing */
    s6ne.charAt(2); // tagastab r
    s6ne = s6ne.replace('istub', 'seisab'); // vahetab ainult esimest
    s6ne.indexOf('istub', 3); // kiirem otsing
    s6ne.lastIndexOf('istub'); // alustab tagant poolt
    var l6pp = s6ne.search('istub'); // koos regexiga
    s6ne.match('istub'); // ainult regexiga
    /* Tere
    'sõne' seisab istub5 */
    // s6ne.endsWith('seisab'); // true statrsWith('') otsib antud algus või lõppuga sõne
    // s6ne.includes('seisab'); otsib keskel ka
    s6ne.localeCompare('Tere', 'et-ee');
    /* S6ne töötlus */
    // s6ne + 'istub ' + 'istub5 '
    s6ne = s6ne.concat('istub ', 'istub5 ');
    // s6ne = s6ne.repeat(5);
    s6ne = s6ne.trim(); // eemaldab tühikud äärtest
    // s6ne = s6ne.substr(0, l6pp - 1); //argumentideks on algus ja s6ne pikkus
    // s6ne = s6ne.slice(0, l6pp); //argumentideks on algus ja s6ne lõpp
    s6ne = s6ne.substring(0, 15); // eelistada splicile
    /* Tere
    'sõne' seisab */
    // s6ne.padStart(10, 'abc '); // või padEnd()
    /*abc abc abTere
    'sõne' seisab */
    // s6ne.toLowerCase();
    s6ne = s6ne.toUpperCase();
    var len = s6ne.length;
    s6ne = s6ne.substring(0, 1).toLowerCase() + s6ne.substring(1, len);
    console.log(s6ne);
    var s6neMassiiv = 'õun, apelsin, kurk'.split(', ');
    console.log(s6neMassiiv);
    /* regex */
    var re = /(\w+)\s(\w+)/;
    var nimi = 'Juku Tamm';
    console.log(nimi.replace(re, '$2, $1')); /* Tamm, Juku */
    /* Massiivid */
    var massiiv = ['õun', 'pirn', 'banaan', 'sidrun'];
    var massiiviPikkus = massiiv.length;
    // const massiiv2 = Array.from(massiiv);
    var massiiv3 = new Array('õun', 'pirn', 'banaan', 'sidrun');
    // const massiiv3 = Array.of('õun', 'pirn', 'banaan', 'sidrun');
    // ühe elemendi puhul esimene loob ikka massiivi aga teine tagastab sama elemendi
    Array.isArray(massiiv); // kas on massiiv
    massiiv3 = massiiv3.concat(massiiv);
    // massiiv3 = massiiv3.slice(2, 5); // kopeerib osa elemente
    massiiv = massiiv3.splice(2, 3); // eemaldatud elemendid lisatakse teise massiivi
    // massiiv3.copyWithin(2, 1, 3); // kopeerib juba massiivi sees
    massiiv.fill('', 0, 10);
    console.log(massiiv3);
    // lisamine ja eemaldamine
    massiiv3.push('apelsin'); // lisab lõppu
    massiiv3.pop(); // apelsin
    massiiv3.unshift('ploom');
    massiiv3.shift(); // ploom
    // otsing
    massiiv3.includes('sidrun', 2); // true
    massiiv3.indexOf('sidrun', 2); // asukoht 4
    massiiv3.lastIndexOf('sidrun');
    console.log(massiiv3.findIndex(function (element) { return element.startsWith('ba'); }));
    console.log(massiiv3.find(function (element) { return element.startsWith('ba'); }));
    // kuvamine
    massiiv3.toString();
    massiiv3.toLocaleString();
    console.log(massiiv3.join('-:-'));
    // muu massiiv
    massiiv3.every(function (element) { return element[0] === element[0].toLowerCase(); }); // kõik elemendid
    massiiv3.some(function (element) { return element[0] === element[0].toUpperCase(); }); // vähemalt üks
    // sorteerimine
    massiiv3.sort(); // sorteerib arv > suur täht > väike täht
    var numbrid = [2, 4, 5, 1, 7];
    numbrid.sort(function (a, b) {
        console.log("a: " + a + ", b: " + b);
        return b - a;
    });
    console.log(numbrid);
    massiiv3.reverse(); // pöörab olema oleva massiivi pahupidi
    // reduce reduceRight
    var astemesNumbrid2 = [[1, 2], [4, 7], [8, 9]];
    var numbrid2 = astemesNumbrid2.reduceRight(function (a, b) { return a.concat(b); });
    // map, filter
    numbrid2 = numbrid2.map(Math.sqrt);
    numbrid2 = numbrid2.filter(function (arv) { return arv > 2; });
    // keys, values, entries
    var iterator = numbrid.entries();
    console.log(iterator.next().value);
    console.log(iterator.next().value);
    var iterator2 = numbrid.keys();
    console.log(iterator2.next().value);
    console.log(iterator2.next().value);
    var iterator3 = numbrid.values();
    console.log(iterator3.next().value);
    console.log(iterator3.next().value);
    // numbrid.forEach((element) => { console.log(element); });
    console.log(numbrid2);
    /* Map ja Set */
    var map = new Map([['T', 25], ['P', 32], ['L', 21]]);
    map.set('S', 5);
    map.set('P', 21);
    map.delete('L');
    // map.clear(); //kustutab kõik
    map.has('T'); // true
    map.get('T'); // 25
    // map.forEach((el) => { });
    // values and entries sarnaselt arrayle
    for (var _i = 0, _a = Array.from(map); _i < _a.length; _i++) {
        var _b = _a[_i], key = _b[0], value = _b[1];
        console.log(key + ": " + value);
    }
    console.log(map.size); // elementide arv
    /* functions */
    function funk(param, param2, param3) {
        return param + param2 + param3;
    }
    console.log(funk.name + " " + funk.length);
    var See = (function () {
        function See() {
            this.samm = 5;
            // kasutada ainult kui vaja manipuleerida this
            funk.apply(this, [3, 2, 1]); // need ei kutsu funktsiooni
            funk.bind(undefined, 1, 3, 2); // need ei kutsu funktsiooni
            funk.call(this, 1, 2, 3); // see kutsub, funk(1,2,3);
            // () => { }
        }
        return See;
    }());
    /* DOM */
    var element = document.getElementById('pealkiri');
    var elements = document.getElementsByClassName('btn-cancel');
    var elements1 = document.getElementsByTagName('article');
    var element2 = document.querySelector('body article'); // tagastab esimest elementi
    var elements2 = document.querySelectorAll('body article'); // css queryde abil
    // $('body article'); //jquery
    elements.item(0);
    elements1.item(0);
    // halvemad alternatiivid eventlisteneritele
    elements.item(0).onclick = function (event) { alert(event); };
})(Teine || (Teine = {}));
//# sourceMappingURL=teine.js.map