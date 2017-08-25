/// <reference path='helper.ts' />
/// <reference path='page.ts' />
console.log('home.ts');
interface IGreeting {
    id: number;
    content: string;
}

class Home extends Page {

    private _template: string;
    private _restJSON: IGreeting;
    private _homeModule: Element;
    private _button: HTMLButtonElement;
    private _list: Element;

    constructor() {
        super()
        this._cacheDOM();
        this._bindEvents();
        this._render();
    }

    protected _cacheDOM() {
        this._template = Helper.getHTMLTemplate("Templates/home-template.html");
        this._homeModule = document.querySelector('main');
        this._homeModule = this._template;
        this._homeModule = document.getElementById('home');

    }

    protected _render() {
        this._list
    }

}