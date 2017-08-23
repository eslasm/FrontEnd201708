"use strict";
/// <reference path='algus.ts'/>
var Teine;
(function (Teine) {
    Algus.Loom.kuvaHulk();
    var pealkiri = document.getElementById('pealkiri');
    var funkts = function () {
        if (pealkiri) {
            pealkiri.innerText += ' 1';
        }
    };
    if (pealkiri) {
        pealkiri.innerText = "Pealkiri Typescripti failist";
        pealkiri.addEventListener('click', funkts);
    }
    var cookieBox = document.getElementById('cookieBox');
    if (cookieBox) {
        var cookieBtn = document.getElementsByClassName('btn')[0];
        if (cookieBtn) {
            var funkts2 = function () {
                if (pealkiri) {
                    pealkiri.innerText = 'Pealkiri muutus ';
                    pealkiri.removeEventListener('click', funkts);
                    cookieBox.outerHTML = '';
                }
            };
            cookieBtn.addEventListener('click', funkts2);
        }
    }
    /* Arvud */
    var arv3 = parseFloat('5Kodu');
    var arv4 = parseInt('siga 5');
    var arv6 = parseInt('B2siga 5', 16); // hexadecimal numbers
    var arv5 = parseFloat('6.5siga');
    function kasTulemusAktsepteeritav(sisend, sisend2) {
        console.log(arv3 + " " + arv4 + " " + arv5 + " " + arv6);
        if (sisend * sisend2 <= Number.MAX_VALUE) {
            return true;
        }
        else {
            return false;
        }
    }
    console.log(Number('Tere'));
    /*  Number.*  isNaN(), isFinite(), isInteger(), isSafeInteger()  */
    console.log('Kas tulemus on väiksem kui ' + Number.MAX_VALUE); // MIN_VALUE, MIN_SAFE_INTEGER, MAX_SAFE_INTEGER
    console.log(kasTulemusAktsepteeritav(1E+308, 1E+100));
    //parseFloat ja parseInt
    console.log(4.88.toFixed(1)); //toFixed(n) ümardab n-nda komakohani
    console.log(arv5.toExponential()); // annab arvu vormis ntx: 6.5e+0
    console.log(arv5.toLocaleString('et-ee'));
    console.log(551.1.toPrecision(2)); // toPrecision(n) ümardab n-nda arvuni (mitte komakohani)
    /* Math */
    var pi = Math.PI;
    /* Naturaalsed logaritmid: Mathe.E, Math.LN2, Math.LN10  */
    /* Logaritmid Math.LOG2E, Math.LOG10E */
    /* Juureduured Math.SQRT1_2, Math.SQRT2 */
    Math.abs(-5); // Absoluutväärtus
    //Math.sign(-54); //tagastab positiivse või negatiivse märgi
    Math.sin(pi); //sin(180)
    /* Math.*  sin(), cos(), tan() */
    /* Math.* asin(), acos(), atan() */
    /* Logaritm funktsioonid Math.* exp(), log(), log2(), log10() ... */
    Math.exp(5.5); // Math.E ** 5.5
    /* Astmed */
    Math.pow(10, 2); // 10 ** 2
    Math.sqrt(4); // 2
    console.log(Math.random() * 10 + 2); // suvaline arv 2 ja 12-ne vahel (ümardamate)
    console.log(Math.round(Math.random() * 10) + 2); //Math.round ümardab
    /* Math.floor() ümardab alati alla poole
    Math.ceil() ümardab alati ülespoole
    Math.trunk() - ümardab lõigates väärtust
    */
    var suvalineArvVahemikus = function (vahemikuSuurus, niheNullist) {
        return Math.round((Math.random() * vahemikuSuurus) + niheNullist);
    };
    var arv1ja1000vahel = suvalineArvVahemikus(1000, 0);
    var isFloatEqual = function (a, b, epsilon) {
        if (epsilon === void 0) { epsilon = 0.00001; }
        var MIN_SAFE_VALUE = Number.MIN_SAFE_VALUE || Math.pow(2, (-38));
        var MAX_SAFE_VALUE = Number.MAX_SAFE_VALUE || Math.pow(2, (-38));
        var absA = Math.abs(a);
        var absB = Math.abs(b);
        var diff = Math.abs(a - b);
        if (a == b) {
            return true;
        }
        else if (a == 0 || b == 0 || diff < MIN_SAFE_VALUE) {
            return diff < (epsilon * MIN_SAFE_VALUE); // võrdleb nulli lähedaseid arve
        }
        else {
            return diff / Math.min(absA + absB, MAX_SAFE_VALUE) < epsilon;
        }
    };
    /* min max ja hüpotenuus */
    Math.min(1, 5, 6, 80); // 1
    Math.max(1, 5, 6, 80); // 80
    //Math.hypot(2, 3, 4); // ruutjuur (2**2 + 3**2 + 4**2)
    /* Kuupäev */
    var p2ev = new Date(2017, 8, 23);
    p2ev.setDate(16); // 2017-08-16
    p2ev.setMonth(9); // 2017-09-16
    p2ev.setFullYear(2017, 8, 23); // 2017-08-23
    p2ev.getTimezoneOffset(); // tagastab ajatsooni ajalise erinevuse
    Date.now; // praegune aeg
    p2ev.toUTCString(); // aeg ja kuupäev UTC ajatsoonis.
    p2ev.toString(); // aeg ja kuupäev
    p2ev.toTimeString(); // aeg
    p2ev.toDateString(); // kuupäev
    p2ev.toLocaleDateString('et-ee'); // lokaalses formaadis kuupäev ja kell
    /* Sõnad ja regular expressions */
    var s6na = 'Tere sõna';
    console.log(s6na + s6na.length);
    s6na.charAt(2); // r
    /* Sõna töötlus */
    s6na = s6na.concat(' Tere ', 'Abiline ', 'Koobas');
    s6na = s6na.replace('Tere', 'Head aega');
    var koht = s6na.search('Abiline');
    var s6naMassiiv = s6na.split(' ');
    //s6na = s6na.slice(koht, (koht + 7));
    //s6na = s6na.substring(koht, (koht + 7));
    s6na.trim(); // eemaldab tühikud ja reavahetused lause algusest ja jõpust
    //s6na.startsWith('Tere'); // true endsWith() otsib antud stringi algusest või lõppust
    //s6na.includes(); // otsib stringi lausest
    //s6na.indexOf('aega');// sarnane search-ga aga natuke kiirem
    s6na.localeCompare('Tere', 'et-ee');
    s6na.match('Tere'); // ainult regex
    console.log(s6na);
    console.log(s6naMassiiv);
    s6na.toLocaleLowerCase(); // tagastab stringi ainult väikeste tähtedega
    s6na.toLocaleUpperCase(); // tagastab stringi kõik tähed suurtena
    /* Regex */
    var reg = /(\w+)\s(\w+)/;
    var nimi = 'Sulev Pakkas';
    console.log(nimi.replace(reg, '$2, $1')); // Pakkas, Sulev
})(Teine || (Teine = {}));
//# sourceMappingURL=teine.js.map