"use strict";
/// <reference path='algus.ts'/>
var Teine;
(function (Teine) {
    Algus.Loom.kuvaHulk();
    var pealkiri = document.getElementById('pealkiri');
    var funkts = function () {
        if (pealkiri) {
            pealkiri.innerText += ' 1';
        }
    };
    if (pealkiri) {
        pealkiri.innerText = "Pealkiri Typescripti failist";
        pealkiri.addEventListener('click', funkts);
    }
    var cookieBox = document.getElementById('cookieBox');
    if (cookieBox) {
        var cookieBtn = document.getElementsByClassName('btn')[0];
        if (cookieBtn) {
            var funkts2 = function () {
                if (pealkiri) {
                    pealkiri.innerText = 'Pealkiri muutus ';
                    pealkiri.removeEventListener('click', funkts);
                    cookieBox.outerHTML = '';
                }
            };
            cookieBtn.addEventListener('click', funkts2);
        }
    }
})(Teine || (Teine = {}));
//# sourceMappingURL=teine.js.map