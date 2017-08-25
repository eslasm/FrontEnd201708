/// <reference path='helper.ts' />

console.log('navigation.ts');
interface IGreeting {
    name: string;
    link: string;
}

class Navigation {
    private _nav: InavLink[];
    private _template: string;
    private _microTemplate: string;
    private _homeModule: HTMLElement;
    private _list: Element;

    constructor() {
        super()
        this._cacheDOM();
        this._bindEvents();
        this._render();
    }

    protected _cacheDOM() {
        this._template = Helper.getHTMLTemplate("Templates/nav-template.html");
        this._navModule = document.querySelector('main');
        this._navModule = this._template;
        this._navModule = document.getElementById('mainMenu');

    }
    private _bindEvents(){
        window.addEventListener('hashchange', this._url)
    }
    private _render() {
       let navLinks = '';
       
        
    }

}