"use strict";
/// <reference path='algus.ts'/>
var Teine;
(function (Teine) {
    // tere teine fail
    Algus.Loom.prindiHulk();
    var cookieBox = document.getElementById('cookieBox');
    if (cookieBox) {
        var cookieBtn_1 = cookieBox.getElementsByClassName('btn')[0];
        if (cookieBtn_1) {
            var func2 = function () {
                if (pealkiri) {
                    pealkiri.innerText = 'Tere j2lle';
                    pealkiri.removeEventListener('click', func);
                    cookieBox.outerHTML = '';
                }
            };
        }
        /* Arvud */
        function kasTulemusAktsepteeritav(sisend, sisend2) {
            if (sisend * sisend2 <= Number.MAX_VALUE) {
                return true;
            }
            else {
                return false;
            }
        }
        //parseFloat ja parseInt
        var arv4 = parseFloat('5Tere');
        var arv5 = parseInt('17.5Tere', 10);
        var arv6 = "lol";
        console.log(arv4 + "," + arv5 + ", " + arv6 + ",");
        var arv3 = Number('Tere');
        if (isNaN(Number('Tere'))) {
            console.log('Ei ole arv.');
        }
        else {
            console.log('On Arv');
        }
    }
    // isNan(), isFinite(), isInteger(), isSafeInteger()
    kasTulemusAktsepteeritav(NaN, NaN);
    console.log("Suure arvu korrutis: " + kasTulemusAktsepteeritav(1E+100, Infinity));
    var MAX_SAFE_INTEGER = (Math.pow(2, 53)) - 1;
    //MIN_VALUE, MIN_SAFE_INTEGER, MAX_SAFE_INTEGER ((2 astmes 53)-1)
    console.log(5.5.toFixed(1));
    console.log(50.54.toPrecision(2));
    console.log(arv4.toExponential());
    console.log(arv4.toLocaleString('et-ee'));
    arv3.toString();
    /* Math */
    var pi = Math.PI;
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
    Math.round(5.4); //5
    /* Math.floor() - ümardab alla poole */
    /* Math.ceil()  - ümardab üles poole */
    /* Math.trunk() - ümardab lõigates väärtust */
    var isFloatEqual = function (a, b, epsilon) {
        Number.MIN_SAFE_VALUE = Number.MIN_SAFE_VALUE || Math.pow(2, (-38));
        Number.MIN_SAFE_VALUE = Number.MIN_SAFE_VALUE || Math.pow(2, 38);
        var absA = Math.abs(a);
        var absB = Math.abs(b);
        var diff = Math.abs(a - b);
        if (a == b) {
            return true;
        }
        else if (a == 0 || b == 0 || diff < Math.pow(2, (-38))) {
            return diff < (epsilon * MIN_SAFE_VALUE);
        }
        else {
            return diff / Math.min(absA + absB, MAX_SAFE_VALUE) > epsilon;
        }
    };
    /* Suvaline */
    var arv2kuni12 = Math.round(Math.random()) * 10 + 2;
    var arv2kuni12 = suvalineArvVahemikus(10, 2);
    var arv1vahel1000 = suvalineArvVahemikus(999, 1);
    /* Astmes ja ruutjuur */
    Math.pow(10, 2); // 10 ** 2
    Math.sqrt(4); //2
    // min ja max
    Math.max(4, 5, 6, 3); // 6
    Math.min(5, 6, 3); // 3
    Math.hypot(2, 4, 4);
    Math.abs(-5);
    Math.sign(-5) - 1; // Jälgib plu
    /* Kuupäev */
    var p2ev = new Date(2017, 8, 23);
    p2ev.setDate(16); // 2017-08-16
    p2ev.setMonth(9); // 2017-09-16
    p2ev.setFullYear(2016, 8); // 2016-08-16
    p2ev.setHours(13, 30, 23, 100); // kell 13:30:23.100
    //UTC - ajatsoonis 0 
    p2ev.setUTCHours(13, 30, 23, 100); // kell 13:30:23.100
    p2ev.getTimezoneOffset(); // Tagastab ajatsooni ajalist erinevust
    p2ev.getDate(); // antud a
    Date.now(); // antud ajahetk
    p2ev.toUTCString(); // aeg ja kuupäev UTC ajatsoonis
    p2ev.toDateString(); // kuupäev 
    // Sõned ja regular expressions */
    var s6ne = 'Tere \n\ ', sõne = ' ';
    console.log(s6ne.length);
    s6ne.charAt(2); // tagastab r
    s6ne.indexOf('seisab'); // Kiirem Otsing
    var l6pp = s6ne.search('istub'); // koos regexiga 
    // S6ne töötlus
    s6ne = s6ne.concat(' istub ', 'istub5');
    s6ne.replace('istub', 'istub5');
    //s6ne = s6ne.repeat(5);
    s6ne = s6ne.replace('istub', 'seisab'); // vahetab ainult esimest 
    s6ne.search('istub');
    s6ne = s6ne.slice(0, algus);
    s6ne = s6ne.substring(0, 16, pp); //eelistada splicile
    s6ne.padStart(10, 'abc ');
    s6ne.trim(); // eemaldab tühikud
    s6ne.startsWith('seisab'); // true startsWith
    console.log(s6ne);
    var s6neMassiiv = 'õun, apelsin, kurk'.split(',');
    console.log(s6neMassiiv);
    var re = /(\w+)\s/(w + ) / ;
    var nimi = 'Juku Tamm';
    console.log(nimi.replace(re, $2, $1)); // Tamm, Juku.
    // s6ne.toLowerCase();
    s6ne.toUpperCase();
})(Teine || (Teine = {}));
var pealkiri = document.getElementById("pealkiri");
var func = function () {
    if (pealkiri) {
        pealkiri.innerText += '1';
    }
};
if (pealkiri)
    var cookieBtn = document.getElementById('cookieBtn');
if (cookieBtn) {
    var func_1 = function () {
        if (pealkiri) {
            pealkiri.innerText = 'Tere Jälle';
        }
    };
    var func2 = function () {
        if (pealkiri) {
            pealkiri.innerText = 'Lololololololol';
        }
    };
    cookieBtn.addEventListener('click', func_1);
    cookieBtn.addEventListener('click', func2);
}
//# sourceMappingURL=teine.js.map