'use strict';
namespace Algus{
    // alert("Tere");
    /*
    let i: number = 0;
     do{
        i++;
        console.log('Tere tulemast!' + ' ' + i);
    }while(i<5) */
    // muutujad ja tyybid;
    let kasOnMuudetav = true;
    // kasOnMuutmatu = false;
    kasOnMuudetav = false;
    let t6ene: boolean;
    t6ene = true;
    let arv: number;
    arv = 2;
    let s6na: string;
    s6na = 'Tere';
    let massiiv: number[];
    massiiv= [1, 32, 5];
    let tuple: [string, number];
    tuple = ['hello', 12];

    tuple.forEach(element => {
        console.log(element);
    });
    enum V2rv {Roheline, Punane, Kollane}
    let v2rv: V2rv= V2rv.Punane;
    v2rv = V2rv.Kollane;

    // let suvaline: any = 5;
    // void, null ja undefinded, never;
    /* operaatorid */
    arv = 5 + 2;
    arv = 5 - 2;
    arv = 5 * 2;
    arv = 6 / 2;
    console.log(arv);
    arv = arv + 4;  // 7
    arv += 4; // 11
    arv %= 3; // 2 jääk
    arv++; // 3
    ++arv; // 4
    arv--; // 3
    arv = 10 ** 2; // 100 astmed. eksperimentaalne
    console.log(arv);
    s6na += ' sõna';
    s6na += ` arv: ${arv}.`;
    console.log(s6na);

    /* Tingimus laused */
    s6na = arv === 100 ? 'Tere' : 'Head aega';
    console.log(s6na);
    if (arv === 100) {
        s6na = 'Tere2';
    } else if (arv < 100){
        s6na = 'Headaega2';
    } else {
        s6na = 'Meh';
    }
    switch(arv){
        case 100:
            s6na = 'Tere3';
            break;
        case 102:
            s6na = 'Ter3';
            break;
        case 90:
            s6na = 'T3';
            break;
        default:
            s6na = '...';
    }

    /* Tsüklid */
    for ( let i = 0; i < 5; i++) {
        // console.log ("Väärtus = " + i);
    }
    arv = 0;
    while (arv <= 10) {
        arv++;
    }
    const massiiv2 = [4, 5, 6];
    for (let i = 0; i < massiiv2.length; i++){
        console.log(massiiv2[i]);    
    }
    for (let element of massiiv2) {
        console.log(element);
    }

    /* Maatrixid */
    /*
    let integerMatrix: number[][];
    integerMatrix= [[1, 2 ,3], [9, 8 ,5], [9, 3 ,5]];
    for ( let i = 0; i < integerMatrix.length; i++) {
       for ( let j = 0; j < integerMatrix[i].length; j++) {
            console.log (integerMatrix[i] + ' ');
        }
        console.log('\n');
    }
    */
    // console.table(integerMatrix);
    



    /* Funktsioonid */

    function liitmine (arv1: number, arv2:number) {
        if (arv1 === 10 || arv2 === 10) {
            return 10;
        }
        return arv1 + arv2;
    }
    arv = liitmine (7, arv);
    console.log(`liitmine  ${arv}`);
    let f = (arv1: number, arv2:number) => { return arv1 - arv2; } 
    // loogelisi sulge poe vaja kui on ühelrealine funktsioon nt: let f = (arv1: number, arv2:number) => arv1 - arv2; 
    console.log(f(10, arv));
    let tulemus = f(11, 3);
    tulemus = 0;

    /* nullable types */

    let arv3 : number | null;
    arv3 = null; // Pole soovituslik kasutada
    /*
    let muutuja: number;
     if(muutuja === undefined){
        console.log(typeof muutuja);
    } */

    /* typeof ja instanceof */
    let kasOnNumber = (x: any) => typeof x === 'number';
    console.log(kasOnNumber(5));

    const objekt = {eesnimi: 'Juku', perenimi: 'Tamm'};
    objekt.eesnimi = 'Kalle';
    console.log(objekt.eesnimi);//tundub, et objektid töötavad natuke teisiti konstantide puhul.

    /* interface */
    interface Isik {
        eesnimi: string;
        perenimi: String;
        vanus?: number;
    }
    let isikutootlus = (isik: Isik) => {
        console.log(`Eesnimi ${isik.eesnimi} Perekonnanimi ${isik.perenimi}`);
        if(isik.vanus){
            console.log(`Vanus: ${isik.vanus}`);
        }
    }
    isikutootlus({eesnimi: 'Kalle', perenimi: 'Taavi', vanus: 15});
    isikutootlus({eesnimi: 'Olle', perenimi: 'Ta'});

    /* Class */
    export class Loom{
        private nimetus = 'Loom';
        private static hulk = 0;
        constructor(nimetus?: string){
            this.nimetus = nimetus ? nimetus : this.nimetus;
            Loom.hulk++;
        }
        public muudaNimetus(uusNimetus: string){
            this.nimetus = uusNimetus;
        }
        public kuvaNimetus(){
            console.log(this.nimetus);
        }
        public static kuvaHulk(){
            console.log(Loom.hulk);
        }
    }
    class Koer extends Loom{
        private kondiOtsingul = false;
        constructor(){
            super('koer');// vanema konstruktor
        }
        public viskaKont(){
            this.kondiOtsingul = true;
        }
        public kasOtsibKonti(){
            console.log(this.kondiOtsingul);
        }
    }

    export const minuKass = new Loom('kaslane'); //saab asju kasutada namespace-st väljaspool
    minuKass.muudaNimetus('kass');
    minuKass.kuvaNimetus();
    if(minuKass instanceof Loom) {
        minuKass.kuvaNimetus();
    }
    const minuKoer = new Koer();
    minuKoer.kuvaNimetus();
    minuKoer.viskaKont();
    minuKoer.kasOtsibKonti();
    Loom.kuvaHulk();
}