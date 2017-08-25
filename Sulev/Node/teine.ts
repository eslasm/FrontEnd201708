/// <reference path='algus.ts'/>


namespace Teine{
    Algus.Loom.kuvaHulk();

    const pealkiri = document.getElementById('pealkiri');

    const funkts = () => {
            if(pealkiri){
                pealkiri.innerText += ' 1';
            }
    };

    if(pealkiri){
        pealkiri.innerText = "Pealkiri Typescripti failist";
        pealkiri.addEventListener('click', funkts);
    }
    
    const cookieBox = document.getElementById('cookieBox');
    
    if(cookieBox){
        const cookieBtn = document.getElementsByClassName('btn')[0];
        if(cookieBtn){
            const funkts2 = () => {
                if(pealkiri){
                    pealkiri.innerText = 'Pealkiri muutus ';
                    pealkiri.removeEventListener('click', funkts);
                    cookieBox.outerHTML = '';
                }
            };
            cookieBtn.addEventListener('click', funkts2);
            
        }  
    }

    /* Arvud */ 
    const arv3 = parseFloat('5Kodu');
    const arv4 = parseInt('siga 5');
    const arv6 = parseInt('B2siga 5', 16); // hexadecimal numbers
    const arv5 = parseFloat('6.5siga');

    function kasTulemusAktsepteeritav(sisend: number, sisend2: number){
        
        console.log(`${arv3} ${arv4} ${arv5} ${arv6}`);
        if(sisend * sisend2 <= Number.MAX_VALUE){
            return true;
        }else{
            return false;
        }
    }
    console.log(Number('Tere'));
    /*  Number.*  isNaN(), isFinite(), isInteger(), isSafeInteger()  */
    console.log('Kas tulemus on väiksem kui ' + Number.MAX_VALUE); // MIN_VALUE, MIN_SAFE_INTEGER, MAX_SAFE_INTEGER
    console.log(kasTulemusAktsepteeritav(1E+308, 1E+100));
    //parseFloat ja parseInt
    console.log(4.88.toFixed(1)) //toFixed(n) ümardab n-nda komakohani
    console.log(arv5.toExponential()); // annab arvu vormis ntx: 6.5e+0
    console.log(arv5.toLocaleString('et-ee'));
    console.log(551.1.toPrecision(2)); // toPrecision(n) ümardab n-nda arvuni (mitte komakohani)
    /* Math */ 
    const pi = Math.PI;
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
    console.log(Math.random()* 10 + 2); // suvaline arv 2 ja 12-ne vahel (ümardamate)
    console.log(Math.round(Math.random()* 10) + 2); //Math.round ümardab
    /* Math.floor() ümardab alati alla poole
    Math.ceil() ümardab alati ülespoole 
    Math.trunk() - ümardab lõigates väärtust
    */
    const suvalineArvVahemikus = (vahemikuSuurus: number, niheNullist: number) => {
        return Math.round((Math.random() * vahemikuSuurus) + niheNullist);
    }
    const arv1ja1000vahel = suvalineArvVahemikus(1000, 0);

    const isFloatEqual = (a: number, b: number, epsilon = 0.00001) => {
        const MIN_SAFE_VALUE = Number.MIN_SAFE_VALUE || 2** (-38);
        const MAX_SAFE_VALUE = Number.MAX_SAFE_VALUE || 2** (-38);
        const absA = Math.abs(a);
        const absB = Math.abs(b);
        const diff = Math.abs(a - b);
        if (a == b) {
            return true
        } else if (a == 0 || b == 0 || diff < MIN_SAFE_VALUE) {
            return diff < (epsilon * MIN_SAFE_VALUE); // võrdleb nulli lähedaseid arve
        } else {
            return diff / Math.min(absA + absB, MAX_SAFE_VALUE) < epsilon;
        }
    };

    /* min max ja hüpotenuus */
    Math.min(1, 5, 6, 80); // 1
    Math.max(1, 5, 6, 80); // 80
    //Math.hypot(2, 3, 4); // ruutjuur (2**2 + 3**2 + 4**2)
    
    /* Kuupäev */
    const p2ev = new Date(2017, 8, 23);
    p2ev.setDate(16); // 2017-08-16
    p2ev.setMonth(9); // 2017-09-16
    p2ev.setFullYear(2017, 8, 23) // 2017-08-23
    p2ev.getTimezoneOffset(); // tagastab ajatsooni ajalise erinevuse
    Date.now; // praegune aeg
    p2ev.toUTCString(); // aeg ja kuupäev UTC ajatsoonis.
    p2ev.toString(); // aeg ja kuupäev
    p2ev.toTimeString(); // aeg
    p2ev.toDateString(); // kuupäev
    p2ev.toLocaleDateString('et-ee'); // lokaalses formaadis kuupäev ja kell
    /* Sõnad ja regular expressions */
    let s6na = 'Tere sõna';
    console.log(s6na + s6na.length);
    s6na.charAt(2); // r
    
    /* Sõna töötlus */
    s6na = s6na.concat(' Tere ', 'Abiline ', 'Koobas');
    s6na = s6na.replace('Tere', 'Head aega');
    const koht = s6na.search('Abiline');
    const s6naMassiiv: string[] = s6na.split(' ');
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
    const reg = /(\w+)\s(\w+)/;
    const nimi = 'Sulev Pakkas';
    console.log(nimi.replace(reg, '$2, $1')); // Pakkas, Sulev
    
    /* Massiivid */
    const massiiv = ['õun', 'pirn', 'apelsin', 'banaan', 'sidrun'];
    const massiiviPikkus = massiiv.length;
    // const massiiv2 = Array.from(massiiv);
    let massiiv3 = new Array ('õun', 'pirn', 'apelsin', 'banaan', 'sidrun');
    // const massiiv4 = Array.of('õun', 'pirn', 'apelsin', 'banaan', 'sidrun');
    Array.isArray(massiiv3); //Kas tegu on massiiviga

    massiiv3 = massiiv3.concat(massiiv);
    massiiv3.splice(2, 3); // eemaldab massiivist alates asukohats 2, kolm elementi ja tagastab nad
    massiiv3.slice(2, 3); // kopeerib elemendid indexiga 2 kuni elemendini indeksiga 3
    //massiiv3.copyWithin(1, 3, 4);  pole aimugi kuidas se midagi teed, phmtsl kopeerib 
    //ja asendab mingeid elemente millegi järgi
    massiiv.fill('naan');
    
    massiiv.push('laim'); // lisab elemendi massiivi lõppu
    massiiv.pop(); // tagastab viimase elemendi ja eemaldab selle massiivist
    massiiv.unshift('ploom'); //lisab elemendi massiivi algusesse
    massiiv.shift();// tagastab esimese elemendi ja eemaldab selle massiivist
    massiiv.includes('naan', 2); // hakkab otsima elementi naan alates kolmandast elemendist
    console.log(massiiv3.find((element) => element.startsWith('ap')));
    console.log(massiiv);
    
    console.log(massiiv3.toLocaleString());
    console.log(massiiv3.join(', '));

    /* Muu massiivi töötlus */
    massiiv3.every((element)=> element[0] === element[0].toUpperCase());
    massiiv3.some((element)=> element[0] === element[0].toUpperCase());
    
    /* Sorteerimine */
    massiiv3.sort(); //defaultis sorteerib Ascii kasvavas järjekorras
    massiiv3.reverse(); // pöörab massiivi järjekorra tagurpidi

    // reduce reduceRight
    const astmesNumbrid2 = [[1, 2], [4, 7], [9,5]];
    let numbrid2 = astmesNumbrid2.reduce((a: number[], b: number[]) => a.concat(b));
    let ruudud = [9, 100, 81, 64, 49];
    console.log(numbrid2);
    numbrid2.forEach((element) => console.log(element));
    
    console.log(ruudud.map(Math.sqrt));
    numbrid2 = ruudud.filter((arv) => arv > 10);
    // enries, values, keys
    const iterator = numbrid2.entries();
    console.log(iterator.next().value);
    console.log(iterator.next().value);

    const iterator2 = numbrid2.keys();
    console.log(iterator2.next().value);
    console.log(iterator2.next().value);
    /*
    const iterator3 = numbrid2.values();
    console.log(iterator3.next().value);
    console.log(iterator3.next().value);
    */
    /* Map ja Set */

    const map = new Map([['T', 25], ['P', 55], ['C', 896]]);
    map.set('S', 84123);
    map.set('P', 3);
    map.delete('C');
    console.log(map.size); // annab mapis olevate elementide arvu
    map.has('P'); // kontrollib kas map-s on element võtmega P ja tagastab true/false
    map.get('P'); // 3
    for(const [key, value] of Array.from(map)){
        console.log(key + ': ' + value);
    }

    /* Functions */

    function funk(param: number, param2: number, param3: number) {
        //console.log(this.samm);
        return param + param2 + param3;
    }
    
    console.log(`${funk.name} ${funk.length}`);
    
    class See{
        public samm = 5;
        constructor(){
            // kasuta ainult kui vaja manipuleerida "this"
            funk.apply(this, [3, 2 ,7]); // ei kutsu funktsiooni
            funk.bind(undefined, 9, 5, 3); // ei kutsu funktsiooni
            funk.call(this, 1, 2, 3); // kutsub funktsiooni, võrdväärne funk(1,2,3);
        }
    }
        /* DOM (Document Object Model) */
        /* Elementide kättesaamine */
        let element = document.getElementById('pealkiri') as HTMLHeadingElement;
        let elements = document.getElementsByClassName('btn-cancel');
        let elements1 = document.getElementsByTagName('article');
        let element2 =document.querySelector('body article'); // otsiva css queryde abil tagastab ainult esimese nimetatud elemendi
        let elements2 = document.querySelectorAll('body article'); // otsiva css queryde abil tagastab listi
        // $('body article'); // jquery
        elements.item(0);
        elements1.item(0);

        //Halvemad alternatiivid eventlistenerile
        (elements.item(0)as HTMLElement).onclick = (event) => { alert(event); };
        

}