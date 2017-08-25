'use strict';
namespace Algus {
    // alert("Tere")
    console.log('Tere tulemast');
    /* muutujad ja tüübid */
    const kasOnMuutumatu = true; // ei saa objekti muuta, konstant

    let kasOnMuudetav = true; // let-i saab muuta
    kasOnMuudetav = true;

    let t6ene: boolean;
    t6ene = true;
    let arv: number;
    arv = 5;
    let s6na: string;
    s6na = 'Tere';
    let massiiv: number[];
    massiiv = [1,2,3];
    let tuple: [string, number]
    tuple = ['Hello', 12];
    enum V2rv {Roheline = 1, Punane, Kollane}
    let v2rv: V2rv = V2rv.Punane;
    let suvaline: any; // pole otseselt soovitatav kasutada
    //muutujad void, null ja undefined kasut algväärtustamiseks, kasut funktsioonidega

    /* operaatorid */
    arv = 5 + 2;
    arv = 5 - 2;
    arv = 5 * 2;
    arv = 6 / 2; // kirjutab 3
    arv = arv + 4; // saab arvu 7
    arv += 4 // saab arvu 11
    console.log(arv);

    arv %= 3; // protsent tagastab jäägi vastus 2
    console.log(arv);
    arv++; // vastus 3
    ++arv; // vastus 4 tehete jätjekord pikkades tehetes oluline 
    arv--; // vastus 3
    arv = 5 * (3 + 4); // vastus 35
    arv = 10 ** 2; // 10 astmes 2 eksperimentaalne
    console.log(arv);

    s6na += ' tere ';
    console.log(s6na);
    s6na += `arv: ${ arv}.`; // Tere tere arv 100.
    console.log(s6na);

    /*tingimuslaused*/
    s6na = arv === 100 ? 'Tere' : 'Head aega';
    console.log(s6na);
    if(arv === 100) {
        s6na = 'Tere';
    } else if (arv < 100){
        s6na = 'Head aega!';
    } else {
        s6na = '...';
    }
    console.log(s6na);

    switch(arv) { //kasut arvudega
        case 100:
            s6na = 'Tere';
            break;
        case 102:
        case 90:
            s6na = 'Heada ega';
            break;
        default:
            s6na = '...';
    }

    switch (v2rv) {
        case 1:
        case V2rv.Punane:
            s6na = 'roheline või punane';
            break;
        default:
        s6na = 'muu värv'    
    }
    if(s6na !=='Tere' && arv >= 0) // && ja, ! eitus, ehk ei ole võrdne
        s6na = 'Tingimus täidetud';
    // === on täpsem kui == , sama ka !== ja !=

    /* Tsüklid */
    for(let i = 0; i < 5; ++i) {
        console.log(`Väärtus tsüklis ${i}`); // kaldkriipsukesed jutumärkide asemel
    }
    arv = 0;
    while(arv <= 10){
        s6na += '2 '; //hakkab nullist lugema, teeb seega 11 korda
        if(arv === 5){
            s6na +='3 ';
        }
        arv++;
    }
    console.log(s6na); //arv on 10

    // do while teeb ühe korra ära ja siis vaatab kas on veel vaja

    /* funktsioonid */
    function liitmine(arv1: number, arv2: number){
        if (arv1 === 10 || arv2 === 10) { // kui üks arvudest on 10
            return 10;
            }
        return arv1 + arv2;
    }
    arv = liitmine(2, arv);
    console.log(`Liitmine ${arv}`);

    let f = (arv1: number, arv2: number) => { return arv1 - arv2; }
    console.log(f(10, arv));
    let tulemus = f(11, arv);
    console.log(f(10, arv));

    /* nullable types */

    let arv3 : number | null;
    arv3 = null; // nullväärtus tähendab asi ei ole defineeritud ei ole soovituslik kasutada
    let muutuja: number; // defineerimata muutuja, kontrollib tüüpi, aga number tüüp ei rakendu enne kui antakse mingi väärtus talle
    if(typeof muutuja === 'undefined'){
        console.log(typeof muutuja);
    }

    /* typeof ja instanceof */
    let kasOnNumber = (x: any): x is number => typeof x === 'number'; // kas muutuja tüüp on võrdne numbriga, typeof tagastab stringi
    console.log(kasOnNumber(4));
    console.log(typeof massiiv);

    /* objekti loomine */
    const objekt = {eesnimi: 'Juku', perenimi: 'Tamm'}; //const ei lase muuta isikut, voib muuta nime jne
    objekt.eesnimi = 'Kalle';

    /* interface */
    interface Isik {
        eesnimi: string;
        readonly perenimi: string; // readonly ei luba seda muuta
        vanus?: number; // ? valikuline vastus
    }
    let isikutootlus = (isik: Isik) => {
        console.log(`Nimi: ${isik.eesnimi} ${isik.perenimi}`);
        if (isik.vanus) { console.log(`Vanus ${isik.vanus} `); }
    }
    isikutootlus ({eesnimi:'Kalle', perenimi: 'Sarapuu'});
    isikutootlus ({eesnimi:'Juku', perenimi: 'Selge', vanus: 12});
    /* class */

    
    const kass = new Loom ('kaslane')
    kass.muudaNimetus('kass');
    kass.kuvaNimetus();

    //for tsükkel
    const massiiv2 = [4, 5, 6]
    const esimene = massiiv2[0];
    for (let i = 0; i < massiiv2.length; ++i){
        console.log (massiiv2[i]); 
    }
    for (const index in massiiv2) {
        if (Number(index) > 0){ console.log(index);}
    }

    /* export const minukass = new Loom('kaslane');
    minukass.muudaNimetus('kass');
    if (minukass instanceof Loom) {
        minukass.kuvaNimetus();
    }*/
     export class Loom {
        private static hulk = 0;
        private nimetus = 'loom';

        public static prindiHulk() {
            console.log(Loom.hulk);
        }

        constructor(nimetus?: string) {
            Loom.hulk++;
            this.nimetus = nimetus ? nimetus : this.nimetus;
        }
        public muudaNimetus(uusNimetus = 'loom2') {
            this.nimetus = uusNimetus;
        }
        public kuvaNimetus() {
            console.log(this.nimetus);
        }
    }
    
    /*pärimine*/
    class Koer extends Loom {
        private kondiOtsingul = false;
        constructor() {
            super('koer'); // vanem
        }
        public viskaKont() {
            this.kondiOtsingul = true;
        }
        public kasKontiOtsib() {
            console.log(this.kondiOtsingul);
        }
    }
    
    const minukass = new Loom('kaslane');
    minukass.muudaNimetus('kass');
    if (minukass instanceof Loom) {
        minukass.kuvaNimetus();
    }
    const minuKoer = new Koer();
    minuKoer.kuvaNimetus();
    minuKoer.viskaKont();
    minuKoer.kasKontiOtsib();
}

// static staatiline element, mis kehtib näit koigi loomade kohta
// namespace ei näita konsoolis kogu sisu vaid ainult väljundit

Algus.minukass.kuvaNimetus();
Algus.Loom.prindiHulk();
