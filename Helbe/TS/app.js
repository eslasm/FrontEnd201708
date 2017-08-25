"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Helper;
(function (Helper) {
    console.log('helper.ts');
    Helper.getHTMLTemplate = function (file) {
        var templateHTML = 'fail';
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                templateHTML = this.responseText;
            }
        };
        xmlHttp.open('GET', file.false);
        xmlHttp.send();
        return templateHTML;
    };
    Helper.parseHTMLString = function (target, mustache, content) {
        return target.replace(mustache, content);
    };
})(Helper || (Helper = {}));
console.log('page.ts');
/* page */
var Page = (function () {
    function Page() {
        //tyhi
    }
    //tslint:disable-next-line:prefer-function-over-method
    Page.prototype._cacheDOM = function () {
        //tyhi
    };
    Page.prototype._bindEvents = function () {
        //tyhi
    };
    Page.prototype._render = function () {
        //tyhi
    };
    return Page;
}());
/// <reference path='helper.ts' />
/// <reference path='page.ts' />
console.log('home.ts');
var Home = (function (_super) {
    __extends(Home, _super);
    function Home() {
        var _this = _super.call(this) || this;
        _this._cacheDOM();
        _this._bindEvents();
        _this._render();
        return _this;
    }
    Home.prototype._cacheDOM = function () {
        this._template = Helper.getHTMLTemplate("Templates/home-template.html");
        this._homeModule = document.querySelector('main');
        this._homeModule = this._template;
        this._homeModule = document.getElementById('home');
    };
    Home.prototype._render = function () {
        this._list;
    };
    return Home;
}(Page));
/// <reference path='helper.ts' />
/// <reference path='home.ts' />
console.log('main.ts'); // kui veebilehel on midagi viga siis siit näeb kus viga
var App = (function () {
    function App() {
        this._navLinks = [{ name: 'Pealeht', link: '#home' }];
        this._bibdEvents;
        this._setup();
    }
    App.prototype._bindEvents = function () {
        // window.addEventListener('hashchange', this._urlChanged.bind(this))
    };
    App.prototype._setup = function () {
        if (window.location.hash === '') {
            window.location.hash = this._navLinks[0].link;
        }
        var nav = new Navigation(this._navLinks);
    };
    return App;
}());
var app = new App();
/// <reference path='helper.ts' />
console.log('navigation.ts');
var Navigation = (function () {
    function Navigation() {
        _this = _super.call(this) || this;
        this._cacheDOM();
        this._bindEvents();
        this._render();
    }
    Navigation.prototype._cacheDOM = function () {
        this._template = Helper.getHTMLTemplate("Templates/nav-template.html");
        this._navModule = document.querySelector('main');
        this._navModule = this._template;
        this._navModule = document.getElementById('mainMenu');
    };
    Navigation.prototype._bindEvents = function () {
        window.addEventListener('hashchange', this._url);
    };
    Navigation.prototype._render = function () {
        var navLinks = '';
    };
    return Navigation;
}());
//# sourceMappingURL=app.js.map