"use strict";
/// <reference path='algus.ts'/>
var Teine;
(function (Teine) {
    // tere teine fail
    // Algus.Loom.prindiHulk();
    var pealkiri = document.getElementById('pealkiri');
    if (pealkiri) {
        pealkiri.innerText = "Tere tulemast!";
    }
    var cookieBox = document.getElementById('cookieBox');
    if (cookieBox) {
        var cookieBtn = document.getElementsByClassName('btn')[0];
        if (cookieBtn) {
            cookieBtn.addEventListener('click', function () {
                if (pealkiri) {
                    pealkiri.innerText = 'Tere jälle';
                    cookieBox.outerHTML = '';
                }
            });
        }
    }
})(Teine || (Teine = {}));
//# sourceMappingURL=teine.js.map