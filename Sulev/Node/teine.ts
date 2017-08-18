/// <reference path='algus.ts'/>


namespace Teine{
    Algus.Loom.kuvaHulk();

    const pealkiri = document.getElementById('pealkiri');

    const funkts = () => {
            if(pealkiri){
                pealkiri.innerText += ' 1';
            }
    };

    if(pealkiri){
        pealkiri.innerText = "Pealkiri Typescripti failist";
        pealkiri.addEventListener('click', funkts);
    }
    
    const cookieBox = document.getElementById('cookieBox');
    
    if(cookieBox){
        const cookieBtn = document.getElementsByClassName('btn')[0];
        if(cookieBtn){
            const funkts2 = () => {
                if(pealkiri){
                    pealkiri.innerText = 'Pealkiri muutus ';
                    pealkiri.removeEventListener('click', funkts);
                    cookieBox.outerHTML = '';
                }
            };
            cookieBtn.addEventListener('click', funkts2);
            
        }  
    }
}