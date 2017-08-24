'use strict';
namespace Algus {
    // alert("Tere");
    console.log('Tere tulemast2!');

    /* muutujad ja tyybid */
    const kasOnMuutumatu = true;
    let kasOnMuudetav = true;
    // kasOnMuutumatu = false;
    kasOnMuudetav = true;

    let t6ene: boolean;
    t6ene = true;
    let arv: number;
    arv = 5;
    let s6ne: string;
    s6ne = 'Tere';

    let massiiv: number[];
    massiiv = [1, 2, 3];
    let tuple: [string, number];
    tuple = ['Hello', 12];
    enum V2rv {Roheline = 1, Punane, Kollane}
    const v2rv: V2rv = V2rv.Punane;

    // let suvaline: any;
    // void, null ja undefined, never

    /* operaatorid */
    arv = 5 + 2;
    arv = 5 - 2;
    arv = 5 * 2; // 10
    arv = 6 / 2; // 3
    console.log(arv);
    arv = arv + 4; // 7
    arv += 4; // 11
    arv %= 3; // 2 jääk
    console.log(arv);
    arv++; // 3
    ++arv; // 4
    arv--; // 3
    arv = (3 + 4) * 5; // 35
    arv = 10 ** 2; // 100 astmes eksperimentaalne
    console.log(arv);

    s6ne += ' sõne';
    s6ne += ` arv: ${arv}.`;
    console.log(s6ne);

    /* tingimuslaused */
    s6ne = arv === 100 ? 'Tere' : 'Headaega';
    console.log(s6ne);
    let a = 10;
    if (arv === 100) {
        // tslint:disable-next-line:no-shadowed-variable
        let a = 0; // potentsiaalne shadowed variable
        a = 0;
        s6ne = 'Tere';
    } else if (arv < 100) {
        s6ne = 'Headaega';
    } else {
        s6ne = '...';
    }
    console.log(a);

    switch (arv) {
    case 100:
        s6ne = 'Tere';
        break;
    case 102:
    case 90:
        s6ne = 'Headaega';
        break;
    default:
        s6ne = '...';
    }
    switch (v2rv) {
    case 1:
    case V2rv.Punane:
        s6ne = 'Roheline või Punane';
        break;
    default:
        s6ne = 'Muu värv';
    }

    if (s6ne !== 'Tere' && arv >= 0) { // &&-ja, ||-v6i
        s6ne = 'Tingimus täidetud';
    }
    // === on täpsem kui ==  sama ka !== !=

    /* Tsükklid */
    for (let i = 0; i < 5; ++i) {
        if (i === 3) { continue; }
        console.log(`Väärtus tsüklis ${i}`);
    }
    arv = 0;
    while (arv <= 10) {
        s6ne += '2';
        if (arv === 5) {
            s6ne += '3';
            break;
        }
        arv++;
    }
    console.log(s6ne);
    // do while

    const massiiv2 = [4, 5, 6];
    const esimene = massiiv2[0];
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < massiiv2.length; ++i) {
        console.log(massiiv2[i]);
    }
    for (const element of massiiv2) {
        console.log(element);
    }
    for (const index in massiiv2) {
        if (Number(index) < 0) { console.log(index); }
    }

    /* funktsioon */
    // tslint:disable-next-line:only-arrow-functions
    function liitmine(arv1: number, arv2: number) {
        if (arv1 === 10 || arv2 === 10) {
            return 10;
        }

        return arv1 + arv2;
    }
    arv = liitmine(2, arv);
    console.log(`Liitmine ${arv}`);

    // tslint:disable-next-line:arrow-return-shorthand
    let f = (arv1: number, arv2: number) => { return arv1 - arv2; };
    f = (arv1: number, arv2: number) => arv1 - arv2; // üherealised
    console.log(f(10, arv));
    let tulemus = f(11, arv);

    /* nullable types, undefined */
    let arv3: number | null;
    // tslint:disable-next-line:no-null-keyword
    arv3 = null; // seda ei ole soovituslik kasutada
    let muutuja: number;
    // soovituslik määramata tüübi kontroll
    if (typeof muutuja === 'undefined') {
        console.log(typeof muutuja);
    }
    /* typeof ja instanceof */
    // tslint:disable-next-line:no-any
    const kasOnNumber = (x: any): x is number => typeof x === 'number';
    console.log(kasOnNumber(4));

    /* objekt */
    const objekt = {eesnimi: 'Juku', perenimi: 'Tamm'};
    objekt.eesnimi = 'Kalle';

    /* interface */
    interface Isik {
        eesnimi: string;
        readonly perenimi: string;
        vanus?: number;
    }

    const isikutootlus = (isik: Isik) => {
        // isik.perenimi = 'Tamm';
        console.log(`Nimi: ${isik.eesnimi} ${isik.perenimi}`);
        if (isik.vanus) { console.log(`Vanus: ${isik.vanus}`); }
    };
    isikutootlus({eesnimi: 'Kalle', perenimi: 'Sarapuu'});
    isikutootlus({eesnimi: 'Juku', perenimi: 'Selge', vanus: 12});

    /* class */
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
    /* pärimine */
    class Koer extends Loom {
        private kondiOtsingul = false;
        constructor() {
            super('koer'); // vanema konstruktor
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
