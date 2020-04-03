webpackJsonp([23],{

/***/ 740:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PetExperienceCreatorModule", function() { return PetExperienceCreatorModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__petexperience_creator__ = __webpack_require__(783);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PetExperienceCreatorModule = /** @class */ (function () {
    function PetExperienceCreatorModule() {
    }
    PetExperienceCreatorModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__petexperience_creator__["a" /* PetExperienceCreatorPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__petexperience_creator__["a" /* PetExperienceCreatorPage */]),
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__petexperience_creator__["a" /* PetExperienceCreatorPage */]]
        })
    ], PetExperienceCreatorModule);
    return PetExperienceCreatorModule;
}());

//# sourceMappingURL=petexperience-creator.module.js.map

/***/ }),

/***/ 783:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PetExperienceCreatorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PetExperienceCreatorPage = /** @class */ (function () {
    function PetExperienceCreatorPage(navCtrl, navParams, storage, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.modalCtrl = modalCtrl;
        this.user = {
            coverImage: 'assets/img/topBannerpet.jpg'
        };
        this.ownerId = 0;
        this.urnType = 0;
        this.ownerId = navParams.data.ownerId;
        this.urnType = navParams.data.urnType;
    }
    PetExperienceCreatorPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MyProfilePage');
    };
    PetExperienceCreatorPage.prototype.addExperience = function () {
        // this.navCtrl.pop();
        var modal = this.modalCtrl.create("AddExperiencePage", { ownerId: this.ownerId, urnType: this.urnType });
        modal.present();
        //this.storage.set("experience", JSON.stringify(true));
    };
    PetExperienceCreatorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'pet-page-experience-creator',template:/*ion-inline-start:"/Users/kanikagupta/Documents/Modurn/modurn 2/src/pages/addstory/petexperience-creator/petexperience-creator.html"*/'<ion-content class="story-outer">\n\n  <div id="profile-bg" [ngStyle]="{\'background-image\': \'url(\' + user.coverImage +\')\'}"></div>\n  <div padding class="story-outer">\n    <div class="story-cont">\n      <h1>What is an experience all about?</h1>\n    </div>\n    <p class="expContent">\n        Storytelling is a wonderful way to share our pets unique journey.<br><br>\n        Experiences is a place to easily capture a memory and create a story using dates, location, people whom shared the experience, images and videos.<br><br>\n        It can also be used as a tool to capture a significant time or place in a pet’s life.<br><br>\n        By sharing experiences, we have the opportunity to connect, share and feel closer to each other’s journey.</p>\n        \n\n    <button ion-button class="mr-t50 button_color" full color="dark" (click)="addExperience()">CONTINUE</button>\n  </div>\n\n\n</ion-content>'/*ion-inline-end:"/Users/kanikagupta/Documents/Modurn/modurn 2/src/pages/addstory/petexperience-creator/petexperience-creator.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */]])
    ], PetExperienceCreatorPage);
    return PetExperienceCreatorPage;
}());

//# sourceMappingURL=petexperience-creator.js.map

/***/ })

});
//# sourceMappingURL=23.js.map