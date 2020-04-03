webpackJsonp([14],{

/***/ 757:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnboardingModule", function() { return OnboardingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__onboarding__ = __webpack_require__(800);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OnboardingModule = /** @class */ (function () {
    function OnboardingModule() {
    }
    OnboardingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__onboarding__["a" /* OnboardingPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__onboarding__["a" /* OnboardingPage */]),
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__onboarding__["a" /* OnboardingPage */]]
        })
    ], OnboardingModule);
    return OnboardingModule;
}());

//# sourceMappingURL=onboarding.module.js.map

/***/ }),

/***/ 800:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OnboardingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_authentication_authentication__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Utility_Constant__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OnboardingPage = /** @class */ (function () {
    function OnboardingPage(navCtrl, navParams, storage, event) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.event = event;
        this.splash = true;
        this.isFromSetting = navParams.data.isSettings;
    }
    OnboardingPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad OnboardingPage');
        setTimeout(function () {
            _this.splash = false;
        }, 7000);
        this.slides = [
            {
                title: "Share Your Legacy",
                description: "Every life has a story to tell, wisdom to share and journey to record for loved one’s and future generations to explore.",
                image: "assets/img/onboarding1.png",
            },
            {
                title: "Sample Life Stories",
                description: "Connect with family and friends to help build a rich tapestry of your life.",
                image: "assets/img/onboarding4.png",
            },
            {
                title: "Preserve Your Memories",
                description: "Save experiences, interests and passions, photographs and media from a life story.",
                image: "assets/img/onboarding2.png",
            },
            {
                title: "Contribute",
                description: "Create, share and collaborate with family and friends to help build a rich tapestry and life record.",
                image: "assets/img/onboarding3.png",
            },
            {
                title: "A Pet's Life",
                description: "A place to capture and record your family pet’s life journey.  ",
                image: "assets/img/onboarding5.png",
            }
        ];
    };
    OnboardingPage.prototype.getStarted = function () {
        this.storage.set("onboardingStatus", true);
        if (this.isFromSetting) {
            this.navCtrl.popToRoot();
            this.event.publish(__WEBPACK_IMPORTED_MODULE_4__Utility_Constant__["d" /* KEY_NOTIFF */].DismissSetting);
        }
        else {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__auth_authentication_authentication__["a" /* AuthenticationPage */]);
        }
    };
    OnboardingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-onboarding',template:/*ion-inline-start:"/Users/kanikagupta/Documents/Modurn/modurn 2/src/pages/onboarding/onboarding.html"*/'<div id="splash-overlay" *ngIf="!isFromSetting" [style.display]="splash ? \'flex\': \'none\'">  \n  <img src="assets/img/ModURN.gif">\n</div>\n\n<ion-content no-bounce>\n  <ion-slides pager>\n    <ion-slide *ngFor="let slide of slides" [ngStyle]="{\'background\' : \'url(\' + slide.image + \') center center no-repeat\'}" class="introslides">\n      <div class="slide-title" [innerHTML]="slide.title"></div>\n      <p [innerHTML]="slide.description"></p>\n      <!--<img [src]="slide.image" class="slide-image"/>-->\n    </ion-slide>\n  </ion-slides>\n</ion-content>\n\n<ion-footer text-center (click)="getStarted()">\n  <ion-toolbar class="intro-toolbar">\n    <ion-title class="intro-footer">{{isFromSetting ? \'GO BACK\' :\'GET STARTED\'}}</ion-title>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/kanikagupta/Documents/Modurn/modurn 2/src/pages/onboarding/onboarding.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */]])
    ], OnboardingPage);
    return OnboardingPage;
}());

//# sourceMappingURL=onboarding.js.map

/***/ })

});
//# sourceMappingURL=14.js.map