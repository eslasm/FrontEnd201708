/// <reference path='helper.ts' />
/// <reference path='page.ts' />
console.log('gallery.ts');

interface IPicture {
    title: string;
    description: string;
    link: string;
}

class Gallery extends Page {

    private _pictures: IPicture[] = [{title: 'Auto', description: 'üks auto', link: 'Auto.jpg'},
                                    {title: 'Taevas', description: 'üks Taevas', link: 'Taevas.jpg'},
                                    {title: 'Taevas2', description: 'üks Taevas2', link: 'Taevas2.jpg'},
                                    {title: 'Tilgad', description: 'üks Tilgad', link: 'Tilgad.jpg'},
                                    {title: 'Tilk', description: 'üks Tilk', link: 'Tilk.jpg'},
                                    {title: 'TuhmSulps', description: 'üks TuhmSulps', link: 'TuhmSulps.jpg'},
                                    {title: 'TuhmSulps2', description: 'üks TuhmSulps2', link: 'TuhmSulps2.jpg'},
                                    {title: 'VeeSulps', description: 'üks VeeSulps', link: 'VeeSulps.jpg'},
                                    {title: 'VeeSulps2', description: 'üks VeeSulps2', link: 'VeeSulps2.jpg'},
                                    {title: 'VeeT6us', description: 'üks VeeT6us', link: 'VeeT6us.jpg'}];
    private _template: string;
    private _microTemplate: string;
    private _picsModule : Element;
    private _list: Element;

    constructor() {
        super();
        this._cacheDOM();
        this._bindEvents();
        this._render();
    }

    protected _cacheDOM() {
        this._template = Helper.getHTMLTemplate('templates/gallery-template.html');
        this._picsModule = document.querySelector('main');
        this._picsModule.outerHTML = this._template;
        this._picsModule = document.getElementById('gallery');this._button = this._homeModule.querySelec
        this._microTemplate = this._picsModule.querySelector('script').innerText;
        this._list = this._picsModule.querySelector('#images');

    }
    protected _bindEvents() {
        // this._button.addEventListener('click', this._refresh.bind(this));
    }
    protected _render() {
        let pics = '';
        this._pictures.forEach(
            (value: IPicture) => {
                const parsePass1 = Helper.parseHTMLString(this._microTemplate, '{{caption}}', value.title);
                const parsePass2 = Helper.parseHTMLString(parsePass1, '{{source}}', `images/${value.link}`);
                const parsePass3 = Helper.parseHTMLString(parsePass2, '{{alternative}}', value.description);
                pics += parsePass3;
            }
        );
        this._list.innerHTML = pics;

}
