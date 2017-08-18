"use strict";
/// <reference path='algus.ts'/>
var Teine;
(function (Teine) {
    // tere teine fail
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
        var cookieBtn = cookieBox.getElementsByClassName('btn')[0];
        if (cookieBtn) {
            var func2 = function () {
                if (pealkiri) {
                    pealkiri.innerText = 'Tere j2lle';
                    pealkiri.removeEventListener('click', func);
                    cookieBox.outerHTML = '';
                }
            };
            cookieBtn.addEventListener('click', func2);
        }
    }
})(Teine || (Teine = {}));
//# sourceMappingURL=teine.js.map