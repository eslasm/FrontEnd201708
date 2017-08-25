/// <reference path='helper.ts'/>
/// <reference path='navigation.ts'/>
/// <reference path='home.ts'/>
console.log('main.ts');

class App {
    private _navLinks: INavLink[] = [{name:'Pealeht', link:'#home'}];
    private page: Page;

    constructor(){
        this._bindEvents();
        this._setup();
    }

    private _bindEvents() {
        window.addEventListener('hashchange', this._urlChanged.bind(this));
    }

    private _setup() {
        if(window.location.hash === ''){
            window.location.hash = this._navLinks[0].link;
        } 
        const nav = new Navigation(this._navLinks);
    }
    private _urlChanged() {
        this._navLinks.forEach(
            (value: INavLink) => {
                if(window.location.hash === value.link) {
                    if(value.link === this._navLinks[0].link){
                        this.page = new Home();
                    }
                }
            }
        );
    }  
}
let app = new App();