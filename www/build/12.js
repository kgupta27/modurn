webpackJsonp([12],{

/***/ 761:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SamplesPageModule", function() { return SamplesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__samples__ = __webpack_require__(804);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SamplesPageModule = /** @class */ (function () {
    function SamplesPageModule() {
    }
    SamplesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__samples__["a" /* SamplesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__samples__["a" /* SamplesPage */]),
            ],
        })
    ], SamplesPageModule);
    return SamplesPageModule;
}());

//# sourceMappingURL=samples.module.js.map

/***/ }),

/***/ 804:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SamplesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SamplesPage = /** @class */ (function () {
    function SamplesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SamplesPage.prototype.ionViewWillEnter = function () {
        console.log('ionViewDidLoad SamplesPage');
        this.samples = [
            {
                title: "ModUrn",
                description: "World first smart cremation urn combining design and technology.",
                image: "assets/img/Sample_1.jpg",
                cssClass: "title0"
            },
            {
                title: "Memento",
                description: "A beautiful memorial keepsake to honour a life and connect future generations.",
                image: "assets/img/Sample_2.jpg",
                cssClass: "title1"
            },
            {
                title: "Bespoke Urns",
                description: "Our range includes a Premium wood print Urn and custom opportunities for “bespoke” Urns.",
                image: "assets/img/Sample_3.jpg",
                cssClass: "title2"
            },
            {
                title: "Lux Urns",
                description: "Stylish, smart and compatable with your lifestyle.",
                image: "assets/img/Sample_4.jpg",
                cssClass: "title3"
            },
            {
                title: "Pet Urns",
                description: "Because our pets are family and deserve a stylish and modern way to be remembered.",
                image: "assets/img/Sample_5.jpg",
                cssClass: "title4"
            },
        ];
    };
    SamplesPage.prototype.slideChanged = function () {
        // this.slides.slideTo(2, 500);
        this.currentIndex = this.slides.getActiveIndex();
        console.log('Current index is', this.currentIndex);
    };
    SamplesPage.prototype.getStarted = function () {
        if (this.currentIndex == 4 || this.currentIndex == 5) {
            this.navCtrl.pop();
        }
        else {
            this.slides.slideNext(500);
        }
        // this.currentIndex++;
        console.log('Current index is', this.currentIndex);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* Slides */])
    ], SamplesPage.prototype, "slides", void 0);
    SamplesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-samples',template:/*ion-inline-start:"/Users/kanikagupta/Documents/Modurn/modurn 2/src/pages/settings/samples/samples.html"*/'<ion-content no-bounce>\n  <ion-slides pager (ionSlideDidChange)="slideChanged()">\n    <ion-slide *ngFor="let slide of samples" [ngStyle]="{\'background\' : \'url(\' + slide.image + \') center center no-repeat\'}" class="introslides">\n      <div class="slide-title" [innerHTML]="slide.title" [ngClass]="slide.cssClass"></div>\n      <p [innerHTML]="slide.description" [ngClass]="{\'description0\':(currentIndex==0),\'description1\':(currentIndex==1),\'description2\':(currentIndex==2),\'description3\':(currentIndex==3),\'description4\':(currentIndex==4) }"></p>\n      <!-- <img [src]="slide.image" class="slide-image"/> -->\n    </ion-slide>\n  </ion-slides>\n</ion-content>\n\n<ion-footer text-center (click)="getStarted()">\n  <ion-toolbar class="intro-toolbar">\n    <ion-title class="intro-footer">{{(currentIndex>3)?\'DONE\':\'NEXT\'}}</ion-title>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/kanikagupta/Documents/Modurn/modurn 2/src/pages/settings/samples/samples.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], SamplesPage);
    return SamplesPage;
}());

//# sourceMappingURL=samples.js.map

/***/ })

});
//# sourceMappingURL=12.js.map