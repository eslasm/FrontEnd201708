/// <reference path='algus.ts'/>
namespace Teine {
    // tere teine fail
    // Algus.Loom.prindiHulk();

    const pealkiri = document.getElementById ('pealkiri');
    if(pealkiri){
        pealkiri.innerText = "Tere tulemast!";
    }
    const cookieBox = document.getElementById('cookieBox');
    if (cookieBox) {
        const cookieBtn = document.getElementsByClassName('btn')[0];
        if (cookieBtn) {
            cookieBtn.addEventListener('click', () => {
                if (pealkiri) {
                    pealkiri.innerText = 'Tere jälle';
                    cookieBox.outerHTML = '';
                }
            });
        }
    }        
}