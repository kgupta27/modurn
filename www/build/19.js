webpackJsonp([19],{

/***/ 751:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewLifeStorie2Module", function() { return NewLifeStorie2Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__new_life_storie2__ = __webpack_require__(794);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NewLifeStorie2Module = /** @class */ (function () {
    function NewLifeStorie2Module() {
    }
    NewLifeStorie2Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__new_life_storie2__["a" /* NewLifeStorie2Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__new_life_storie2__["a" /* NewLifeStorie2Page */]),
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__new_life_storie2__["a" /* NewLifeStorie2Page */]]
        })
    ], NewLifeStorie2Module);
    return NewLifeStorie2Module;
}());

//# sourceMappingURL=new-life-storie2.module.js.map

/***/ }),

/***/ 794:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewLifeStorie2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_toast_service_toast_service__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewLifeStorie2Page = /** @class */ (function () {
    function NewLifeStorie2Page(navCtrl, navParams, toastProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastProvider = toastProvider;
        this.storyAlreadyAddded = false;
        this.userType = navParams.data.userType;
        this.progress = 50;
    }
    NewLifeStorie2Page.prototype.ionViewDidLoad = function () {
        //debugger
        console.log('ionViewDidLoad NewLifeStorie2Page');
        var lifeStoryData = JSON.parse(localStorage.getItem('lifeStoryData'));
        console.log("LifestoryData = ", lifeStoryData);
        // console.log(" ", lifeStoryData['relationShip']);
        if (lifeStoryData['relationShip'] == "Self") {
            this.storyAlreadyAddded = true;
        }
    };
    NewLifeStorie2Page.prototype.openMyselfStory = function () {
        if (this.storyAlreadyAddded) {
            this.toastProvider.create("Your life story is already created!");
        }
        else {
            this.navCtrl.push('NewLifeStorie3Page', { userType: this.userType });
        }
    };
    NewLifeStorie2Page.prototype.openSomeoneElseStory = function () {
        this.navCtrl.push('NewLifeStorie4Page', { userType: this.userType });
    };
    NewLifeStorie2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-new-life-storie2',template:/*ion-inline-start:"/Users/kanikagupta/Documents/Modurn/modurn 2/src/pages/lifestory/lifeStoryCreation/new-life-storie2/new-life-storie2.html"*/'<ion-header no-border>\n\n  <ion-navbar>\n    <title></title>\n    \n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="story-outer">\n  <div class="story-cont">\n    <h1>Who is the life story about?</h1>\n  </div>\n  <ion-list class="story-inner-cont">\n    <li>\n      <button ion-item (click)="openMyselfStory()">\n       <ion-icon class="icon icon-pink-arrow" item-right></ion-icon>\n        Myself\n      </button>\n    </li>\n    <li>\n      <button ion-item (click)="openSomeoneElseStory()">\n        <ion-icon class="icon icon-pink-arrow" item-right></ion-icon>\n        Someone else\n      </button>\n    </li>\n  </ion-list>\n</ion-content>\n<div class="progressbar">\n  <div class="progress">\n    <div class="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style="width:25%">\n    </div>\n  </div>\n</div>'/*ion-inline-end:"/Users/kanikagupta/Documents/Modurn/modurn 2/src/pages/lifestory/lifeStoryCreation/new-life-storie2/new-life-storie2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_toast_service_toast_service__["a" /* ToastServiceProvider */]])
    ], NewLifeStorie2Page);
    return NewLifeStorie2Page;
}());

//# sourceMappingURL=new-life-storie2.js.map

/***/ })

});
//# sourceMappingURL=19.js.map