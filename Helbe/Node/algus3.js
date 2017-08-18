'use strict';
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Algus;
(function (Algus) {
    // alert("Tere")
    console.log('Tere tulemast');
    /* muutujad ja tüübid */
    var kasOnMuutumatu = true; // ei saa objekti muuta, konstant
    var kasOnMuudetav = true; // let-i saab muuta
    kasOnMuudetav = true;
    var t6ene;
    t6ene = true;
    var arv;
    arv = 5;
    var s6na;
    s6na = 'Tere';
    var massiiv;
    massiiv = [1, 2, 3];
    var tuple;
    tuple = ['Hello', 12];
    var V2rv;
    (function (V2rv) {
        V2rv[V2rv["Roheline"] = 1] = "Roheline";
        V2rv[V2rv["Punane"] = 2] = "Punane";
        V2rv[V2rv["Kollane"] = 3] = "Kollane";
    })(V2rv || (V2rv = {}));
    var v2rv = V2rv.Punane;
    var suvaline; // pole otseselt soovitatav kasutada
    //muutujad void, null ja undefined kasut algväärtustamiseks, kasut funktsioonidega
    /* operaatorid */
    arv = 5 + 2;
    arv = 5 - 2;
    arv = 5 * 2;
    arv = 6 / 2; // kirjutab 3
    arv = arv + 4; // saab arvu 7
    arv += 4; // saab arvu 11
    console.log(arv);
    arv %= 3; // protsent tagastab jäägi vastus 2
    console.log(arv);
    arv++; // vastus 3
    ++arv; // vastus 4 tehete jätjekord pikkades tehetes oluline 
    arv--; // vastus 3
    arv = 5 * (3 + 4); // vastus 35
    arv = Math.pow(10, 2); // 10 astmes 2 eksperimentaalne
    console.log(arv);
    s6na += ' tere ';
    console.log(s6na);
    s6na += "arv: " + arv + "."; // Tere tere arv 100.
    console.log(s6na);
    /*tingimuslaused*/
    s6na = arv === 100 ? 'Tere' : 'Head aega';
    console.log(s6na);
    if (arv === 100) {
        s6na = 'Tere';
    }
    else if (arv < 100) {
        s6na = 'Head aega!';
    }
    else {
        s6na = '...';
    }
    console.log(s6na);
    switch (arv) {
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
            s6na = 'muu värv';
    }
    if (s6na !== 'Tere' && arv >= 0)
        s6na = 'Tingimus täidetud';
    // === on täpsem kui == , sama ka !== ja !=
    /* Tsüklid */
    for (var i = 0; i < 5; ++i) {
        console.log("V\u00E4\u00E4rtus ts\u00FCklis " + i); // kaldkriipsukesed jutumärkide asemel
    }
    arv = 0;
    while (arv <= 10) {
        s6na += '2 '; //hakkab nullist lugema, teeb seega 11 korda
        if (arv === 5) {
            s6na += '3 ';
        }
        arv++;
    }
    console.log(s6na); //arv on 10
    // do while teeb ühe korra ära ja siis vaatab kas on veel vaja
    /* funktsioonid */
    function liitmine(arv1, arv2) {
        if (arv1 === 10 || arv2 === 10) {
            return 10;
        }
        return arv1 + arv2;
    }
    arv = liitmine(2, arv);
    console.log("Liitmine " + arv);
    var f = function (arv1, arv2) { return arv1 - arv2; };
    console.log(f(10, arv));
    var tulemus = f(11, arv);
    console.log(f(10, arv));
    /* nullable types */
    var arv3;
    arv3 = null; // nullväärtus tähendab asi ei ole defineeritud ei ole soovituslik kasutada
    var muutuja; // defineerimata muutuja, kontrollib tüüpi, aga number tüüp ei rakendu enne kui antakse mingi väärtus talle
    if (typeof muutuja === 'undefined') {
        console.log(typeof muutuja);
    }
    /* typeof ja instanceof */
    var kasOnNumber = function (x) { return typeof x === 'number'; }; // kas muutuja tüüp on võrdne numbriga, typeof tagastab stringi
    console.log(kasOnNumber(4));
    console.log(typeof massiiv);
    /* objekti loomine */
    var objekt = { eesnimi: 'Juku', perenimi: 'Tamm' }; //const ei lase muuta isikut, voib muuta nime jne
    objekt.eesnimi = 'Kalle';
    var isikutootlus = function (isik) {
        console.log("Nimi: " + isik.eesnimi + " " + isik.perenimi);
        if (isik.vanus) {
            console.log("Vanus " + isik.vanus + " ");
        }
    };
    isikutootlus({ eesnimi: 'Kalle', perenimi: 'Sarapuu' });
    isikutootlus({ eesnimi: 'Juku', perenimi: 'Selge', vanus: 12 });
    /* class */
    var kass = new Loom('kaslane');
    kass.muudaNimetus('kass');
    kass.kuvaNimetus();
    //for tsükkel
    var massiiv2 = [4, 5, 6];
    var esimene = massiiv2[0];
    for (var i = 0; i < massiiv2.length; ++i) {
        console.log(massiiv2[i]);
    }
    for (var index in massiiv2) {
        if (Number(index) > 0) {
            console.log(index);
        }
    }
    /* export const minukass = new Loom('kaslane');
    minukass.muudaNimetus('kass');
    if (minukass instanceof Loom) {
        minukass.kuvaNimetus();
    }*/
    var Loom = (function () {
        function Loom(nimetus) {
            this.nimetus = 'loom';
            Loom.hulk++;
            this.nimetus = nimetus ? nimetus : this.nimetus;
        }
        Loom.prindiHulk = function () {
            console.log(Loom.hulk);
        };
        Loom.prototype.muudaNimetus = function (uusNimetus) {
            if (uusNimetus === void 0) { uusNimetus = 'loom2'; }
            this.nimetus = uusNimetus;
        };
        Loom.prototype.kuvaNimetus = function () {
            console.log(this.nimetus);
        };
        Loom.hulk = 0;
        return Loom;
    }());
    Algus.Loom = Loom;
    /*pärimine*/
    var Koer = (function (_super) {
        __extends(Koer, _super);
        function Koer() {
            var _this = _super.call(this, 'koer') || this;
            _this.kondiOtsingul = false;
            return _this;
        }
        Koer.prototype.viskaKont = function () {
            this.kondiOtsingul = true;
        };
        Koer.prototype.kasKontiOtsib = function () {
            console.log(this.kondiOtsingul);
        };
        return Koer;
    }(Loom));
    var minukass = new Loom('kaslane');
    minukass.muudaNimetus('kass');
    if (minukass instanceof Loom) {
        minukass.kuvaNimetus();
    }
    var minuKoer = new Koer();
    minuKoer.kuvaNimetus();
    minuKoer.viskaKont();
    minuKoer.kasKontiOtsib();
})(Algus || (Algus = {}));
// static staatiline element, mis kehtib näit koigi loomade kohta
// namespace ei näita konsoolis kogu sisu vaid ainult väljundit
Algus.minukass.kuvaNimetus();
Algus.Loom.prindiHulk();
//# sourceMappingURL=algus3.js.map