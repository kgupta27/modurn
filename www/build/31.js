webpackJsonp([31],{

/***/ 733:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddStoryModule", function() { return AddStoryModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_story__ = __webpack_require__(776);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddStoryModule = /** @class */ (function () {
    function AddStoryModule() {
    }
    AddStoryModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__add_story__["a" /* AddStoryPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_story__["a" /* AddStoryPage */]),
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__add_story__["a" /* AddStoryPage */]]
        })
    ], AddStoryModule);
    return AddStoryModule;
}());

//# sourceMappingURL=add-story.module.js.map

/***/ }),

/***/ 776:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddStoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_WebServices_LifeStory_LifeStoryService__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_WebServices_LifeStory_InterestnPassionService__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Utility_Constant__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddStoryPage = /** @class */ (function () {
    function AddStoryPage(navCtrl, navParams, viewCtrl, modalCtrl, storage, interestnPassion, lifeStoryService, event) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.storage = storage;
        this.interestnPassion = interestnPassion;
        this.lifeStoryService = lifeStoryService;
        this.event = event;
        this.ownerID = 0;
        this.urnType = 0;
        this.roleId = 0;
        this.trainingData = {};
        this.interestData = {};
        this.beaconPaired = false;
        this.careerData = {};
        this.beaconPaired = navParams.data.beaconPaired;
        this.ownerID = navParams.data.ownerId;
        this.urnType = navParams.data.urnType;
        this.roleId = navParams.data.roleId;
        console.log("Role:: ", this.roleId);
        this.ownerName = navParams.data.ownerName;
    }
    AddStoryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddStoryPage');
        console.log("Urn type: ", this.urnType);
    };
    AddStoryPage.prototype.closeAddStory = function () {
        this.viewCtrl.dismiss();
        this.event.publish(__WEBPACK_IMPORTED_MODULE_5__Utility_Constant__["d" /* KEY_NOTIFF */].LifeStoryUpdate);
    };
    AddStoryPage.prototype.addExp = function () {
        // this.storage.get("experience").then((resulst) => {
        //   if (resulst) {
        //     let modal = this.modalCtrl.create("AddExperiencePage", { ownerId: this.ownerID, urnType: this.urnType });
        //     modal.present();
        //   } else {
        //         if(this.urnType == 1)
        //         {
        //         this.navCtrl.push("ExperienceCreatorPage", { ownerId: this.ownerID, urnType: this.urnType });
        //         }
        //         else{
        //           this.navCtrl.push("PetExperienceCreatorPage", { ownerId: this.ownerID, urnType: this.urnType });
        //         }
        var _this = this;
        //   }
        // });
        // Human
        if (this.urnType == 1) {
            this.storage.get("experience").then(function (resulst) {
                if (resulst) {
                    var modal = _this.modalCtrl.create("AddExperiencePage", { ownerId: _this.ownerID, urnType: _this.urnType });
                    modal.present();
                }
                else {
                    _this.navCtrl.push("ExperienceCreatorPage", { ownerId: _this.ownerID, urnType: _this.urnType });
                }
            });
        }
        // Pet
        if (this.urnType == 2) {
            this.storage.get("petexperience").then(function (resulst) {
                if (resulst) {
                    var modal = _this.modalCtrl.create("AddExperiencePage", { ownerId: _this.ownerID, urnType: _this.urnType });
                    modal.present();
                }
                else {
                    _this.navCtrl.push("PetExperienceCreatorPage", { ownerId: _this.ownerID, urnType: _this.urnType });
                }
            });
        }
    };
    AddStoryPage.prototype.addCareerAcademics = function () {
        var _this = this;
        this.storage.get("userData").then(function (result) {
            var params = {
                'userId': result.userInfoModel.userId,
                'ownerId': _this.ownerID,
                'page': '1',
                'size': '1'
            };
            _this.interestnPassion.fetchcareernAcademics(params)
                .then(function (data) {
                _this.careerData = data;
                if (Object.keys(_this.careerData.contentList).length > 0) {
                    _this.careerData = _this.careerData.contentList[0];
                }
                else {
                    _this.careerData = {};
                }
                var modal = _this.modalCtrl.create("AddCareerAcademicPage", { ownerId: _this.ownerID, careerData: _this.careerData, urnType: _this.urnType });
                modal.present();
            }, function (error) {
                console.log(error);
            });
        });
    };
    AddStoryPage.prototype.addInterestPassion = function (urnType) {
        // this.navCtrl.push(AddInterestPassionPage);
        var _this = this;
        this.storage.get("userData").then(function (result) {
            // this.userId = result.userInfoModel.userId;
            var params = {
                'userId': result.userInfoModel.userId,
                'ownerId': _this.ownerID,
                'page': '1',
                'size': '1'
            };
            _this.interestnPassion.fetchinterestsPassion(params)
                .then(function (data) {
                // console.log(data);
                _this.interestData = data;
                // console.log("ContentList length: ");
                // console.log(Object.keys(this.trainingData.contentList).length);
                if (Object.keys(_this.interestData.contentList).length > 0) {
                    _this.interestData = _this.interestData.contentList[0];
                    console.log(_this.interestData);
                    var modal = _this.modalCtrl.create("AddInterestPassionPage", { ownerId: _this.ownerID, interestData: _this.interestData, urnType: urnType });
                    modal.present();
                    //debugger;
                }
                else {
                    _this.interestData = {};
                    var modal = _this.modalCtrl.create("AddInterestPassionPage", { ownerId: _this.ownerID, interestData: _this.interestData, urnType: urnType });
                    modal.present();
                    //this.sharedTaskProvider.showToastMessage("No data found.");
                }
            }, function (error) {
                console.log(error);
            });
        });
        // let modal = this.modalCtrl.create("AddInterestPassionPage",  { ownerId: this.ownerID, urnType: urnType });
        // modal.present();
    };
    AddStoryPage.prototype.addHealthJourney = function () {
        // this.navCtrl.push(AddHealthJourneyPage);
        var modal = this.modalCtrl.create("AddHealthJourneyPage", { ownerId: this.ownerID, urnType: this.urnType, ownerName: this.ownerName });
        modal.present();
    };
    AddStoryPage.prototype.addFavCharityURL = function () {
        // this.navCtrl.push(AddFavoriteCharityPage);
        var modal = this.modalCtrl.create("AddFavoriteCharityPage", { ownerId: this.ownerID, urnType: this.urnType });
        modal.present();
    };
    AddStoryPage.prototype.addImages = function () {
        // this.navCtrl.push(AddImagePage);
        var modal = this.modalCtrl.create("AddImagePage", { ownerId: this.ownerID, urnType: this.urnType });
        modal.present();
    };
    AddStoryPage.prototype.addLink = function () {
        // this.navCtrl.push(AddLinkPage);
        var modal = this.modalCtrl.create("AddLinkPage", { data: { ownerId: this.ownerID, urnType: this.urnType } });
        modal.present();
    };
    AddStoryPage.prototype.addFriendFamily = function () {
        // this.navCtrl.push(AddFriendsFamilyPage);
        var modal = this.modalCtrl.create("AddFriendsFamilyPage", { data: { ownerId: this.ownerID, urnType: this.urnType, beaconPaired: this.beaconPaired } });
        modal.present();
    };
    AddStoryPage.prototype.addDocument = function () {
        var modal = this.modalCtrl.create("AddDocumentPage", { ownerId: this.ownerID, urnType: this.urnType });
        modal.present();
    };
    AddStoryPage.prototype.addCompetitionTraining = function () {
        var _this = this;
        this.storage.get("userData").then(function (result) {
            // this.userId = result.userInfoModel.userId;
            var params = {
                'userId': result.userInfoModel.userId,
                'ownerId': _this.ownerID,
                'page': '1',
                'size': '1'
            };
            _this.interestnPassion.fetchCompetitionTraining(params)
                .then(function (data) {
                // console.log(data);
                _this.trainingData = data;
                // console.log("ContentList length: ");
                // console.log(Object.keys(this.trainingData.contentList).length);
                if (Object.keys(_this.trainingData.contentList).length > 0) {
                    _this.trainingData = _this.trainingData.contentList[0];
                    console.log(_this.trainingData);
                    var modal = _this.modalCtrl.create("AddCompetitionsTrainingPage", { ownerId: _this.ownerID, trainingdata: _this.trainingData });
                    modal.present();
                    //debugger;
                }
                else {
                    _this.trainingData = {};
                    var modal = _this.modalCtrl.create("AddCompetitionsTrainingPage", { ownerId: _this.ownerID, trainingdata: _this.trainingData });
                    modal.present();
                    //this.sharedTaskProvider.showToastMessage("No data found.");
                }
            }, function (error) {
                console.log(error);
            });
        });
        // let modal = this.modalCtrl.create("AddCompetitionsTrainingPage", { ownerId: this.ownerID,trainingdata: this.trainingData});
        //modal.present();
    };
    AddStoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-story',template:/*ion-inline-start:"/Users/kanikagupta/Documents/Modurn/modurn 2/src/pages/addstory/add-story/add-story.html"*/'<ion-header no-border>\n\n  <ion-navbar class="home-nav">\n    <ion-title>Add</ion-title>\n\n    <ion-buttons left (click)="closeAddStory()">\n      <button class="btnColor cross-icn" ion-button icon-only>\n        <ion-icon class="icon icon-cross" item-right></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="story-outer">\n  \n  <ion-list class="story-inner-cont">\n    <!-- roleId: {{roleId}} -->\n    <li (click)="addExp()">\n      <button ion-item>\n          <ion-icon class="{{urnType == 1 ? \'icon icon-pink-arrow\':\'icon icon-pink-arrow pet-clr\'}}" item-right></ion-icon>\n        <!-- <ion-icon  class="icon icon-pink-arrow" item-right></ion-icon> -->\n        Add experiences\n      </button>\n    </li>\n    <li (click)="addCareerAcademics()" *ngIf="urnType == 1 && roleId != 3">\n      <button ion-item>\n        <ion-icon class="icon icon-pink-arrow" item-right></ion-icon>\n        Add academics & career\n      </button>\n    </li>\n    <li *ngIf="urnType == 2 && roleId != 3">\n      <button ion-item (click)="addCompetitionTraining()">\n        <ion-icon class="icon icon-pink-arrow pet-clr" item-right></ion-icon>\n        Add competitions or training\n      </button>\n    </li>\n    <li (click)="addInterestPassion(urnType)" *ngIf="roleId != 3">\n      <button ion-item>\n        <ion-icon class=" {{urnType == 1 ? \'icon icon-pink-arrow\':\'icon icon-pink-arrow pet-clr\'}}" item-right></ion-icon>\n        {{urnType == 1 ? \'Add an interest & passion\':\'Add an interest\'}}\n      </button>\n    </li>\n    <li (click)="addHealthJourney()" *ngIf="roleId != 3">\n      <button ion-item>\n        <ion-icon class=" {{urnType == 1 ? \'icon icon-pink-arrow\':\'icon icon-pink-arrow pet-clr\'}}" item-right></ion-icon>\n        Add a health journey\n      </button>\n    </li>\n    <li (click)="addFavCharityURL()" *ngIf="urnType == 1 && roleId != 3">\n      <button ion-item>\n        <ion-icon class="icon icon-pink-arrow" item-right></ion-icon>\n        Add a favourite charity URL\n      </button>\n    </li>\n    <li (click)="addImages()" *ngIf="roleId != 3">\n      <button ion-item>\n        <ion-icon class=" {{urnType == 1 ? \'icon icon-pink-arrow\':\'icon icon-pink-arrow pet-clr\'}}" item-right></ion-icon>\n        Add an image\n      </button>\n    </li>\n    <li (click)="addLink()" *ngIf="roleId != 3">\n      <button ion-item>\n        <ion-icon class=" {{urnType == 1 ? \'icon icon-pink-arrow\':\'icon icon-pink-arrow pet-clr\'}}" item-right></ion-icon>\n        Add a link\n      </button>\n    </li>\n    <li (click)="addDocument()" *ngIf="roleId != 4 && roleId != 3">\n      <button ion-item>\n        <ion-icon class=" {{urnType == 1 ? \'icon icon-pink-arrow\':\'icon icon-pink-arrow pet-clr\'}}" item-right></ion-icon>\n        Add a document\n      </button>\n    </li>\n    <li (click)="addFriendFamily()" *ngIf="roleId != 3">\n      <button ion-item>\n        <ion-icon class=" {{urnType == 1 ? \'icon icon-pink-arrow\':\'icon icon-pink-arrow pet-clr\'}}" item-right></ion-icon>\n        Add friends & family\n      </button>\n    </li>\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"/Users/kanikagupta/Documents/Modurn/modurn 2/src/pages/addstory/add-story/add-story.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4__providers_WebServices_LifeStory_InterestnPassionService__["a" /* InterestnPassionService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_WebServices_LifeStory_LifeStoryService__["a" /* LifeStoryService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */]])
    ], AddStoryPage);
    return AddStoryPage;
}());

//# sourceMappingURL=add-story.js.map

/***/ })

});
//# sourceMappingURL=31.js.map