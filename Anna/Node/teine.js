"use strict";
/// <reference path='algus.ts'/>
var Teine;
(function (Teine) {
    // Tere teine fail
    Algus.Loom.prindiHulk();
    var pealkiri = document.getElementById('pealkiri');
    var func = function () {
        if (pealkiri) {
            pealkiri.innerText += ' 1';
        }
    };
    if (pealkiri) {
        pealkiri.innerText = 'Tere tulemast';
        pealkiri.addEventListener('click', func);
    }
    var cookieBox = document.getElementById('cookieBox');
    if (cookieBox) {
        var cookieBtn_1 = cookieBox.getElementsByClassName('btn')[0];
        if (cookieBtn_1) {
            var func2 = function () {
                if (pealkiri) {
                    pealkiri.innerText = 'Tere j2lle';
                    cookieBtn_1.removeEventListener('click', func);
                    cookieBox.outerHTML = '';
                }
            };
            cookieBtn_1.addEventListener('click', func2);
        }
    }
})(Teine || (Teine = {}));
//# sourceMappingURL=teine.js.map