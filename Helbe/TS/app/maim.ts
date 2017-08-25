/// <reference path='helper.ts' />
/// <reference path='home.ts' />
console.log('main.ts'); // kui veebilehel on midagi viga siis siit näeb kus viga

class App{
    private _navLinks = [{name:'Pealeht', link:'#home'}];
    private page: Page;

    constructor() {
        this._bibdEvents;
        this._setup();
    }
    private _bindEvents() {
       // window.addEventListener('hashchange', this._urlChanged.bind(this))
    }
    private _setup() {
        if(window.location.hash === '') {
            window.location.hash = this._navLinks[0].link;
        }
        const nav = new Navigation(this._navLinks);
    }
}
let app = new App();
