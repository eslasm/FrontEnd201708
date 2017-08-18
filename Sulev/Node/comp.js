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
    // alert("Tere");
    /*
    let i: number = 0;
     do{
        i++;
        console.log('Tere tulemast!' + ' ' + i);
    }while(i<5) */
    // muutujad ja tyybid;
    var kasOnMuudetav = true;
    // kasOnMuutmatu = false;
    kasOnMuudetav = false;
    var t6ene;
    t6ene = true;
    var arv;
    arv = 2;
    var s6na;
    s6na = 'Tere';
    var massiiv;
    massiiv = [1, 32, 5];
    var tuple;
    tuple = ['hello', 12];
    tuple.forEach(function (element) {
        console.log(element);
    });
    var V2rv;
    (function (V2rv) {
        V2rv[V2rv["Roheline"] = 0] = "Roheline";
        V2rv[V2rv["Punane"] = 1] = "Punane";
        V2rv[V2rv["Kollane"] = 2] = "Kollane";
    })(V2rv || (V2rv = {}));
    var v2rv = V2rv.Punane;
    v2rv = V2rv.Kollane;
    // let suvaline: any = 5;
    // void, null ja undefinded, never;
    /* operaatorid */
    arv = 5 + 2;
    arv = 5 - 2;
    arv = 5 * 2;
    arv = 6 / 2;
    console.log(arv);
    arv = arv + 4; // 7
    arv += 4; // 11
    arv %= 3; // 2 jääk
    arv++; // 3
    ++arv; // 4
    arv--; // 3
    arv = Math.pow(10, 2); // 100 astmed. eksperimentaalne
    console.log(arv);
    s6na += ' sõna';
    s6na += " arv: " + arv + ".";
    console.log(s6na);
    /* Tingimus laused */
    s6na = arv === 100 ? 'Tere' : 'Head aega';
    console.log(s6na);
    if (arv === 100) {
        s6na = 'Tere2';
    }
    else if (arv < 100) {
        s6na = 'Headaega2';
    }
    else {
        s6na = 'Meh';
    }
    switch (arv) {
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
    for (var i = 0; i < 5; i++) {
        // console.log ("Väärtus = " + i);
    }
    arv = 0;
    while (arv <= 10) {
        arv++;
    }
    var massiiv2 = [4, 5, 6];
    for (var i = 0; i < massiiv2.length; i++) {
        console.log(massiiv2[i]);
    }
    for (var _i = 0, massiiv2_1 = massiiv2; _i < massiiv2_1.length; _i++) {
        var element = massiiv2_1[_i];
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
    }
    */
    // console.table(integerMatrix);
    /* Funktsioonid */
    function liitmine(arv1, arv2) {
        if (arv1 === 10 || arv2 === 10) {
            return 10;
        }
        return arv1 + arv2;
    }
    arv = liitmine(7, arv);
    console.log("liitmine  " + arv);
    var f = function (arv1, arv2) { return arv1 - arv2; };
    // loogelisi sulge poe vaja kui on ühelrealine funktsioon nt: let f = (arv1: number, arv2:number) => arv1 - arv2; 
    console.log(f(10, arv));
    var tulemus = f(11, 3);
    tulemus = 0;
    /* nullable types */
    var arv3;
    arv3 = null; // Pole soovituslik kasutada
    /*
    let muutuja: number;
     if(muutuja === undefined){
        console.log(typeof muutuja);
    } */
    /* typeof ja instanceof */
    var kasOnNumber = function (x) { return typeof x === 'number'; };
    console.log(kasOnNumber(5));
    var objekt = { eesnimi: 'Juku', perenimi: 'Tamm' };
    objekt.eesnimi = 'Kalle';
    console.log(objekt.eesnimi); //tundub, et objektid töötavad natuke teisiti konstantide puhul.
    var isikutootlus = function (isik) {
        console.log("Eesnimi " + isik.eesnimi + " Perekonnanimi " + isik.perenimi);
        if (isik.vanus) {
            console.log("Vanus: " + isik.vanus);
        }
    };
    isikutootlus({ eesnimi: 'Kalle', perenimi: 'Taavi', vanus: 15 });
    isikutootlus({ eesnimi: 'Olle', perenimi: 'Ta' });
    /* Class */
    var Loom = (function () {
        function Loom(nimetus) {
            this.nimetus = 'Loom';
            this.nimetus = nimetus ? nimetus : this.nimetus;
            Loom.hulk++;
        }
        Loom.prototype.muudaNimetus = function (uusNimetus) {
            this.nimetus = uusNimetus;
        };
        Loom.prototype.kuvaNimetus = function () {
            console.log(this.nimetus);
        };
        Loom.kuvaHulk = function () {
            console.log(Loom.hulk);
        };
        Loom.hulk = 0;
        return Loom;
    }());
    Algus.Loom = Loom;
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
        Koer.prototype.kasOtsibKonti = function () {
            console.log(this.kondiOtsingul);
        };
        return Koer;
    }(Loom));
    Algus.minuKass = new Loom('kaslane'); //saab asju kasutada namespace-st väljaspool
    Algus.minuKass.muudaNimetus('kass');
    Algus.minuKass.kuvaNimetus();
    if (Algus.minuKass instanceof Loom) {
        Algus.minuKass.kuvaNimetus();
    }
    var minuKoer = new Koer();
    minuKoer.kuvaNimetus();
    minuKoer.viskaKont();
    minuKoer.kasOtsibKonti();
    Loom.kuvaHulk();
})(Algus || (Algus = {}));
Algus.minuKass.kuvaNimetus();
/// <reference path='algus.ts'/>
// Tere teine
Algus.Loom.kuvaHulk();
//# sourceMappingURL=tsc.js.map