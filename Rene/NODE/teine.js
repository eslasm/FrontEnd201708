"use strict";
/// <reference path='algus.ts'/>
var Teine;
(function (Teine) {
    // tere teine fail
    Algus.Loom.prindiHulk();
    var cookieBox = document.getElementById('cookieBox');
    if (cookieBox) {
        var cookieBtn_1 = cookieBox.getElementsByClassName('btn')[0];
        if (cookieBtn_1) {
            var func2 = function () {
                if (pealkiri) {
                    pealkiri.innerText = 'Tere j2lle';
                    pealkiri.removeEventListener('click', func);
                    cookieBox.outerHTML = '';
                }
            };
        }
    }
    var pealkiri = document.getElementById("pealkiri");
    var func = function () {
        if (pealkiri) {
            pealkiri.innerText += '1';
        }
    };
    if (pealkiri)
        var cookieBtn = document.getElementById('cookieBtn');
    if (cookieBtn) {
        var func_1 = function () {
            if (pealkiri) {
                pealkiri.innerText = 'Tere Jälle';
            }
        };
        var func2 = function () {
            if (pealkiri) {
                pealkiri.innerText = 'Lololololololol';
            }
        };
        cookieBtn.addEventListener('click', func_1);
        cookieBtn.addEventListener('click', func2);
    }
})(Teine || (Teine = {}));
//# sourceMappingURL=teine.js.map