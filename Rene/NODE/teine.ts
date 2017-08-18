/// <reference path='algus.ts'/>

namespace Teine {


// tere teine fail

Algus.Loom.prindiHulk();

const cookieBox = document.getElementById('cookieBox');
if(cookieBox) {
    const cookieBtn = cookieBox.getElementsByClassName('btn')[0];
    if(cookieBtn) {
        const func2 = () => {
            if(pealkiri) {
                pealkiri.innerText = 'Tere j2lle';
                pealkiri.removeEventListener('click', func);
                cookieBox.outerHTML = '';
            }
        }
    }
}


const pealkiri = document.getElementById("pealkiri");
  const func = () => {
      if (pealkiri) {
          pealkiri.innerText += '1';
      }
  };

  if (pealkiri)


const cookieBtn = document.getElementById('cookieBtn');
if(cookieBtn) {
  const func = () => {
      if (pealkiri) {
          pealkiri.innerText = 'Tere Jälle';
      }
  };

const func2 = () => {
    if (pealkiri) {
        pealkiri.innerText = 'Lololololololol';
    }
};

cookieBtn.addEventListener('click', func);
cookieBtn.addEventListener('click', func2);