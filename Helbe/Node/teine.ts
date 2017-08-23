/// <reference path='algus.ts'/>
namespace Teine {
    // tere teine fail
    // Algus.Loom.prindiHulk();

    const pealkiri = document.getElementById ('pealkiri');
    if(pealkiri){
        pealkiri.innerText = "Tere tulemast!";
    }
    const cookieBox = document.getElementById('cookieBox');
    if (cookieBox) {
        const cookieBtn = document.getElementsByClassName('btn')[0];
        if (cookieBtn) {
            cookieBtn.addEventListener('click', () => {
                if (pealkiri) {
                    pealkiri.innerText = 'Tere jälle';
                    cookieBox.outerHTML = '';
                }
            });
        }
    }  
    
    
    /* Arvud */
    /* Number.MAX_VALUE - so max arv mida javacsript suudab käsitleda */
    function kasTulemusAktsepteeritav(sisend: number, sisend2: number) {
        if (sisend*sisend2 <= Number.MAX_VALUE) {
            return true;
        } else {
            return false;
        }
    }
     console.log(`Suure arvu korrutis: ${kasTulemusAktsepteeritav(1.27E+100, 1E+100)}`)    //st 1 astmes 300 st 127 ja 97 nulli
     console.log(Number.MAX_VALUE);
     /* infinity - suurem kui max value */
     /* NaN - not a nmber */
    /* isNaN(), isFinite()  - saab kontrollida kas on number või ...*/
    const arv3 = Number (`Tere`);
    //const arv3 = 3;
    if (isNaN(arv3)) {
        console.log(`Ei ole arv`);
    } else {
        console.log(`On arv`);
    }
    //MIN_VALUE, MIN_SAFE_INTEGER, MAX_SAFE_INTEGER ((2 astmes 53)-1) 
    // const MAX_SAFE_INTEGER = (2**53) -1; saab ona max safe integeri teha
    //isInteger(), isSafeInteger() funktsioonid, mis kontrollivad, kas arv on komakohata või näiteks mitte liiga suur komakohata arv
    // parseFloat() ja parseInt() - float komakohtadega arv, ülesanne otsida teksti seest arv, leiab algusest ainult
    const arv4 = parseFloat(`5.5Tere`);
    const arv5 = parseInt(`17.5Tere`, 10); // 10-nd süsteemis
    const arv6 = parseInt(`A7.5Tere`, 16); // 16-nd süsteemis
    console.log(`${arv4}, ${arv5}, ${arv6}`);
    console.log(arv5);
    console.log(5.5.toFixed(0)); //fixed ümardab sulgudes oleva komakohani 
    console.log(50.54.toFixed(1)); // komakohti 1
    console.log(50.54.toPrecision(2)); // ümardab, kuid loeb kõik numbrid alates vasakult, näiteks kui on ekraanil fikseetitud ruum
    console.log(5.5.toExponential()); // tagastab teadusliku arvu
    console.log(arv4.toLocaleString('et-ee')); // tagastab arvu nii nagu kohalikul kombel kirjutatakse, antud juhul komaga

    /* Math */
    const Euler = Math.E; // Euleri konstant
    const pi = Math.PI;
    /* Naturaalsed logaritmid konstandid Math.E, Math.LN2, Math.LN10 */
    /* Logaritmid konstandid Math.LOG2E, Math.LOG10E */
    /* Ruutjuured Math.SQRT1_2 - ruutjuur 0.5-st, Math.SQRT2 - ruutjuur 2-st */
    Math.abs(-5); //teeb absoluutarvuks, ehk need pole negatiivsed teeb -5-st 5 ja 5 jääb 5-ks
    /*Math.sign(-5); tagastab -1  positiivsus, negatiivsus märki*/
    Math.sin(pi) // sulgudesse radiaanides sin(180) kraadi
    /* Math.sin(), Math.cos(), Math.tan() */
    /* Arc Math.asin()... jne */
    /* Logaritmi funktsioonid Math.exp(), Math.log(), Math.log2(), Math.log10() - nendega arvutatakse välja */
    Math.exp(5.5); // exponentional 
    /* Astmed */
    Math.pow(10, 2) //10 ** 2 -ehk see arvutab 10 astmes 2
    Math.sqrt(4); // ruutjuur 4 on 2
    /* Suvaline */
    Math.random() //annab suvalise arvu vahemikus 0-st 1- ni
    const arv2kuni12 = Math.round(Math.random() * 10) +2;
    const suvalineArvVahemikus = (vahemikusSuurus: number, niheNullist: number) => {
        returm Math.round(Math.random()*vahemikusSuurus) + niheNullist; // sellise valemiga arvutatakse näiteks suvaline arv 1 - 1000
    }

    /* Ümardamine */
    Math.round(5.5); // 6
    Math.round(5.4); // 5
    Math.floor(5.5); // ümardab  koik alla poole 5.6 on 5, -5.3 ümardab -5
   /* Math.ceil(); ümardab koik üles poole 5.1 saab 6
    Math.trunk(); ümardab lõigates väärtust 
    Math.fround(); see ümardab arvu konkreetseks näit Math.fround(1.337) -st saab 1.3370000123977661 */
    /*töötamiseks komakohaga arvudega */ 
    const isFloatEqual = (a: number, b: number, epsilon: = 0.00001) => { // epsilon minimaalne aksepteeritud väärtus, näit 1 sent so 0.01 
        const MIN_SAFE_VALUE = Number.MIN_SAFE_VALUE || 2 ** (-38);
        const MAX_SAFE_VALUE = Number.MAX_SAFE_VALUE || 2 ** 38;
        const absA = Math.abs(a);
        const absB = Math.abs(b);
        const diff = Math.abs(a-b);
        if(a == b){ // infinity
            return true;
        } else if (a == 0 || b == 0 || diff < 2**(-38)){
            return diff < (epsilon * MIN_SAFE_VALUE); // vordleb nullilähedasi arve
        } else{
            return diff / Math.min(absA+absB, MAX_SAFE_VALUE) < epsilon;
        }
        /* min, max ja hüpotenuus*/
        Math.max(4, 5, 6, 3); // tagastab suurima arvu 6
        Math.min(4, 5, 6, 3); // 3
        Math.hypot(2, 3, 4); // hüpotenuus, ruutjuur(2**2 + 3**2 + 4**2)   2**2 - 2 astmes 2
    }
    /* Kuupäev */
    const p2ev = new Date(2017, 8, 23)  // date funktsioon
    p2ev.setDate(16); // 2017-08-16
    p2ev.setMonth(9); // 2017-09-16
    p2ev.setFullYear(2017, 8, 23) // 2017-08-23
    p2ev.setHours (13, 30, 23, 100) // see määrb kellaaja 100 millisekundi täpsusega kell 13:30:23:100 +2 ja suveaeg
    // UTC ajatsoonis 0
    p2ev.setUTCHours (13, 30, 23, 100) // siis 10:30:23:100 +0
    p2ev.getTimezoneOffset(); // tagastab ajatsooni ajalist erinevust
    p2ev.getDate(); // tagastab kuupäeva
    Date.now(); // tagastab praegust aega
    p2ev.toUTCString(); // aeg ja kuupäev UTC ajatsoonis - vajalik rahvusvahelises firmas krüpteerimisel näiteks
    p2ev.toString; // aeg ja kuupäev
    p2ev.toLocaleString('et-ee'); //lokaalses formaadis kuupäev kellaajaga
   
    /* sõnad */
    let s6na = '   Tere \nsõna '; // \n viib uuele reale, loetakse üheks tähemärgiks
    console.log(s6na + s6na.length); //tagastab sõna pikkuse koos tühikutega jms
    s6na.charAt(2); // tagastab r
    /* sõna töötlus */
    s6na = s6na.concat('istub ', 'istub5 ');
    s6na = s6na.repeat(5);
    s6na = s6na.replace('istub ', 'seisab '); //vahetab esimese 'istub ' välja, paneb aemele 'seisab '
    const lopp = s6na.search('istub'); // search otsib valitud sõna
    s6na.indexOf('seisab'); //kiirem otsing, muidu sarnane eelmisele,
    s6na.lastIndexOf('seisab'); // alustab tagantpoolt
    s6na = s6na.slice(0, lopp); // slice lõikab välja, tagastab ülejäänu, argumentideks on algus ja s6na lopp
    s6na = s6na.substring(0, lopp); // soovituslik, sama mmis slice aga kiirem, kergem hallata
    s6na = s6na.substr(0, lopp -1); // argumentideks on algus ja s6na pikkus
    s6na = s6na.trim(); // eemaldab mõlemalt poolt tühikud
    s6na.endsWith('seisab') // true - sõna lõpeb 'seisab'-ga
    s6na.startsWith() // saab otsida näiteks klasssinimedest kõiki ühenimelisi container näiteks
    s6na.includes() // otsib igalt poolt
    console.log(s6na); 
    const s6naMassiiv = 'õun, apelsin, kurk' .split(', ');
    console.log(s6naMassiiv);
    s6na = s6na.padStart(10, 'abc '); // peks tulema "abc abc abTere sõna seisab" st 9 tähemärki algusesse
    s6na.localeCompare('Tere', 'et-ee');
    s6na.match('istub'); // ainult regexiga, sarnane searchile
    // s6na.toLowerCase(); teeb väiketähtedeks
    //const len = s6na.length;
    // s6na = s6na.substring(0, 1).toLowerCase + s6na.substring(1, len);
    s6na =s6na.toUpperCase(); // teeb suurtähtedeks
    console.log(s6na);
    const re = /(\w+)\s(\w+)/; // regexi rükike word space word ?
    const nimi = 'Juku Tamm';
    console.log(nimi.replace(re, '$2, $1')); // kirjutab teise osa enne ja siis esimese
    // regex on väga efektiivne otsingusüsteemis, aga keerline
} 