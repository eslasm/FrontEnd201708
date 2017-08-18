/// <reference path='algus.ts'/>
namespace Teine {
    // Tere teine fail
    Algus.Loom.prindiHulk();

    const pealkiri = document.getElementById('pealkiri');
    const func = () => {
            if (pealkiri) {
                pealkiri.innerText += ' 1';
        }
    };
    if (pealkiri) {
        pealkiri.innerText = 'Tere tulemast';
        pealkiri.addEventListener('click', func);
    }
    const cookieBox = document.getElementById('cookieBox');
    if (cookieBox) {
        const cookieBtn = cookieBox.getElementsByClassName('btn') [0];
        if (cookieBtn) {
            const func2 = () => {
            if (pealkiri) {
                pealkiri.innerText = 'Tere j2lle';
                cookieBtn.removeEventListener('click', func);
                cookieBox.outerHTML = '';
            }
        };
        cookieBtn.addEventListener('click', func2);
        }
    }
}
