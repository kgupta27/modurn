webpackJsonp([20],{

/***/ 750:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewLifeStorie1Module", function() { return NewLifeStorie1Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__new_life_storie1__ = __webpack_require__(793);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NewLifeStorie1Module = /** @class */ (function () {
    function NewLifeStorie1Module() {
    }
    NewLifeStorie1Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__new_life_storie1__["a" /* NewLifeStorie1Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__new_life_storie1__["a" /* NewLifeStorie1Page */]),
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__new_life_storie1__["a" /* NewLifeStorie1Page */]]
        })
    ], NewLifeStorie1Module);
    return NewLifeStorie1Module;
}());

//# sourceMappingURL=new-life-storie1.module.js.map

/***/ }),

/***/ 793:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewLifeStorie1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_usercommon_services__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_toast_service_toast_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NewLifeStorie1Page = /** @class */ (function () {
    function NewLifeStorie1Page(navCtrl, navParams, storage, loadingCtrl, commonServices, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.commonServices = commonServices;
        this.toastCtrl = toastCtrl;
        this.userName = 'Troy Pearson';
        this.progress = 25;
    }
    NewLifeStorie1Page.prototype.openStoryPage2 = function (userType) {
        localStorage.setItem("createStoryType", "1");
        this.navCtrl.push('NewLifeStorie2Page', { userType: userType });
    };
    NewLifeStorie1Page.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get("userData").then(function (result) {
            if (result) {
                _this.userName = result.userInfoModel.userName;
            }
            else {
                console.log("else result");
            }
        });
    };
    NewLifeStorie1Page.prototype.openPetStory = function (petType) {
        console.log(petType);
        localStorage.setItem("createStoryType", "2");
        this.navCtrl.push('PetStoryPage', { userType: petType });
    };
    NewLifeStorie1Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-new-life-storie1',template:/*ion-inline-start:"/Users/kanikagupta/Documents/Modurn/modurn 2/src/pages/lifestory/lifeStoryCreation/new-life-storie1/new-life-storie1.html"*/'<ion-header no-border>\n\n  <ion-navbar>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding class="story-outer">\n <div class="story-cont">\n  <h1>Hi, {{userName}}</h1>\n  <p>Let\'s create a life story</p>\n  </div>\n  <ion-list class="story-inner-cont">\n    <li>\n      <button ion-item (click)="openStoryPage2(\'1\')">\n        <ion-icon class="icon icon-pink-arrow" item-right></ion-icon>\n        Human\n      </button>\n    </li>\n    <li>\n      <button ion-item (click)="openPetStory(\'2\')">\n       <ion-icon class="icon icon-pink-arrow pet-clr" item-right></ion-icon>\n        Pet\n      </button>\n    </li>\n  </ion-list>\n  \n  \n</ion-content>\n<!--<ion-footer>\n  <progress max="100" [value]="progress" class="progressbar"></progress>\n</ion-footer>-->'/*ion-inline-end:"/Users/kanikagupta/Documents/Modurn/modurn 2/src/pages/lifestory/lifeStoryCreation/new-life-storie1/new-life-storie1.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["j" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1__providers_usercommon_services__["a" /* UserCommonServices */],
            __WEBPACK_IMPORTED_MODULE_3__providers_toast_service_toast_service__["a" /* ToastServiceProvider */]])
    ], NewLifeStorie1Page);
    return NewLifeStorie1Page;
}());

//# sourceMappingURL=new-life-storie1.js.map

/***/ })

});
//# sourceMappingURL=20.js.map