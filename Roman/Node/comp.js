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
    console.log('Tere tulemast2!');
    /* muutujad ja tyybid */
    var kasOnMuutumatu = true;
    var kasOnMuudetav = true;
    // kasOnMuutumatu = false;
    kasOnMuudetav = true;
    var t6ene;
    t6ene = true;
    var arv;
    arv = 5;
    var s6ne;
    s6ne = 'Tere';
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
    arv = Math.pow(10, 2); // 100 astmes eksperimentaalne
    console.log(arv);
    s6ne += ' sõne';
    s6ne += " arv: " + arv + ".";
    console.log(s6ne);
    /* tingimuslaused */
    s6ne = arv === 100 ? 'Tere' : 'Headaega';
    console.log(s6ne);
    var a = 10;
    if (arv === 100) {
        // tslint:disable-next-line:no-shadowed-variable
        var a_1 = 0; // potentsiaalne shadowed variable
        a_1 = 0;
        s6ne = 'Tere';
    }
    else if (arv < 100) {
        s6ne = 'Headaega';
    }
    else {
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
    if (s6ne !== 'Tere' && arv >= 0) {
        s6ne = 'Tingimus täidetud';
    }
    // === on täpsem kui ==  sama ka !== !=
    /* Tsükklid */
    for (var i = 0; i < 5; ++i) {
        if (i === 3) {
            continue;
        }
        console.log("V\u00E4\u00E4rtus ts\u00FCklis " + i);
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
    var massiiv2 = [4, 5, 6];
    var esimene = massiiv2[0];
    // tslint:disable-next-line:prefer-for-of
    for (var i = 0; i < massiiv2.length; ++i) {
        console.log(massiiv2[i]);
    }
    for (var _i = 0, massiiv2_1 = massiiv2; _i < massiiv2_1.length; _i++) {
        var element = massiiv2_1[_i];
        console.log(element);
    }
    for (var index in massiiv2) {
        if (Number(index) < 0) {
            console.log(index);
        }
    }
    /* funktsioon */
    // tslint:disable-next-line:only-arrow-functions
    function liitmine(arv1, arv2) {
        if (arv1 === 10 || arv2 === 10) {
            return 10;
        }
        return arv1 + arv2;
    }
    arv = liitmine(2, arv);
    console.log("Liitmine " + arv);
    // tslint:disable-next-line:arrow-return-shorthand
    var f = function (arv1, arv2) { return arv1 - arv2; };
    f = function (arv1, arv2) { return arv1 - arv2; }; // üherealised
    console.log(f(10, arv));
    var tulemus = f(11, arv);
    /* nullable types, undefined */
    var arv3;
    // tslint:disable-next-line:no-null-keyword
    arv3 = null; // seda ei ole soovituslik kasutada
    var muutuja;
    // soovituslik määramata tüübi kontroll
    if (typeof muutuja === 'undefined') {
        console.log(typeof muutuja);
    }
    /* typeof ja instanceof */
    // tslint:disable-next-line:no-any
    var kasOnNumber = function (x) { return typeof x === 'number'; };
    console.log(kasOnNumber(4));
    /* objekt */
    var objekt = { eesnimi: 'Juku', perenimi: 'Tamm' };
    objekt.eesnimi = 'Kalle';
    var isikutootlus = function (isik) {
        // isik.perenimi = 'Tamm';
        console.log("Nimi: " + isik.eesnimi + " " + isik.perenimi);
        if (isik.vanus) {
            console.log("Vanus: " + isik.vanus);
        }
    };
    isikutootlus({ eesnimi: 'Kalle', perenimi: 'Sarapuu' });
    isikutootlus({ eesnimi: 'Juku', perenimi: 'Selge', vanus: 12 });
    /* class */
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
        return Loom;
    }());
    Loom.hulk = 0;
    Algus.Loom = Loom;
    /* pärimine */
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
Algus.Loom.prindiHulk();
/// <reference path='algus.ts'/>
// tere teine fail
Algus.Loom.prindiHulk();
//# sourceMappingURL=tsc.js.map