webpackJsonp([21],{

/***/ 749:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThirdPageModule", function() { return ThirdPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile__ = __webpack_require__(792);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ThirdPageModule = /** @class */ (function () {
    function ThirdPageModule() {
    }
    ThirdPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */]),
            ],
        })
    ], ThirdPageModule);
    return ThirdPageModule;
}());

//# sourceMappingURL=profile.module.js.map

/***/ }),

/***/ 792:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
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


var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, navParams, app, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
        this.modalCtrl = modalCtrl;
        this.ownerID = 0;
        this.lifeStoryData = [];
        // //debugger;
        this.ownerID = navParams.data.ownerId;
        this.urnType = navParams.data.urnType;
        this.lifeStoryData = navParams.data;
        this.role = this.lifeStoryData.roleId;
        console.log('lifestorydata =', this.lifeStoryData);
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ThirdPage');
    };
    ProfilePage.prototype.interestspassion = function () {
        var modal = this.modalCtrl.create("InterestsPassionsPage", { ownerId: this.ownerID, urnType: this.urnType, isProfile: true });
        modal.present();
    };
    ProfilePage.prototype.careeracademics = function () {
        var modal = this.modalCtrl.create("CareerAcademicPage", { ownerId: this.ownerID, isProfile: true });
        modal.present();
    };
    ProfilePage.prototype.healthJourney = function () {
        var modal = this.modalCtrl.create("HealthJourneyPage", { ownerId: this.ownerID, isProfile: true, urnType: this.urnType, ownerName: this.lifeStoryData.ownerName });
        modal.present();
        //this.app.getRootNav().push(HealthJourneyPage);
    };
    ProfilePage.prototype.charityUrl = function () {
        var modal = this.modalCtrl.create("FavoriteCharityPage", { ownerId: this.ownerID });
        modal.present();
        //this.app.getRootNav().push(AddFavoriteCharityPage);
    };
    ProfilePage.prototype.petInterests = function () {
        var modal = this.modalCtrl.create("HealthJourneyPage", { ownerId: this.ownerID, isProfile: true, urnType: this.urnType, ownerName: this.lifeStoryData.ownerName });
        modal.present();
    };
    ProfilePage.prototype.petTraining = function () {
        var modal = this.modalCtrl.create("CompetitionsTrainingPage", { storyData: this.lifeStoryData, isProfile: true });
        modal.present();
    };
    ProfilePage.prototype.document = function () {
        var modal = this.modalCtrl.create("DocumentsPage", { ownerId: this.ownerID, urnType: this.urnType, isProfile: true, role: this.role });
        modal.present();
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"/Users/kanikagupta/Documents/Modurn/modurn 2/src/pages/lifestory/life-story/LifeStoryTab/profile/profile.html"*/'<ion-content padding class="story-outer">\n\n  <div class="health-outer" *ngIf="lifeStoryData.currentLocation">\n    <div class="helth-title">Current location</div>\n    <div class="p_content">\n      {{lifeStoryData.currentLocation}}\n    </div>\n\n  </div>\n\n\n  <ion-list *ngIf="urnType == 1" class="story-inner-cont">\n\n    <li (click)="interestspassion()">\n      <button ion-item>\n         <ion-icon class="icon icon-pink-arrow" item-right></ion-icon>\n         Interests & passions\n       </button>\n    </li>\n    <li (click)="careeracademics()">\n      <button ion-item>\n         <ion-icon class="icon icon-pink-arrow" item-right></ion-icon>\n         Academics & career\n       </button>\n    </li>\n    <li>\n      <button ion-item (click)="healthJourney()">\n         <ion-icon class="icon icon-pink-arrow" item-right></ion-icon>\n         Health journey\n       </button>\n    </li>\n    <li (click)="charityUrl()">\n      <button ion-item>\n         <ion-icon class="icon icon-pink-arrow" item-right></ion-icon>\n         Favourite charity URL\n       </button>\n    </li>\n    <li (click)="document()">\n      <button ion-item>\n         <ion-icon class="icon icon-pink-arrow" item-right></ion-icon>\n         Documents\n       </button>\n    </li>\n\n  </ion-list>\n\n\n  <ion-list *ngIf="urnType == 2" class="story-inner-cont">\n    <li (click)="interestspassion()">\n      <button ion-item>\n        <ion-icon class="icon icon-pink-arrow pet-clr" item-right></ion-icon>\n        Interests \n      </button>\n    </li>\n    <li (click)="petTraining()">\n      <button ion-item>\n        <ion-icon class="icon icon-pink-arrow pet-clr" item-right></ion-icon>\n        Training\n      </button>\n    </li>\n    <li (click)="healthJourney()">\n      <button ion-item>\n        <ion-icon class="icon icon-pink-arrow pet-clr" item-right></ion-icon>\n        Health journey\n      </button>\n    </li>\n    <li (click)="document()">\n      <button ion-item>\n         <ion-icon class="icon icon-pink-arrow pet-clr" item-right></ion-icon>\n         Documents\n       </button>\n    </li>\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"/Users/kanikagupta/Documents/Modurn/modurn 2/src/pages/lifestory/life-story/LifeStoryTab/profile/profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ })

});
//# sourceMappingURL=21.js.map