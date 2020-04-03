webpackJsonp([29],{

/***/ 734:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompetitionsTrainingPageModule", function() { return CompetitionsTrainingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__competitions_training__ = __webpack_require__(777);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CompetitionsTrainingPageModule = /** @class */ (function () {
    function CompetitionsTrainingPageModule() {
    }
    CompetitionsTrainingPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__competitions_training__["a" /* CompetitionsTrainingPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__competitions_training__["a" /* CompetitionsTrainingPage */]),
            ],
        })
    ], CompetitionsTrainingPageModule);
    return CompetitionsTrainingPageModule;
}());

//# sourceMappingURL=competitions-training.module.js.map

/***/ }),

/***/ 777:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompetitionsTrainingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_WebServices_LifeStory_InterestnPassionService__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_SharedTask_sharedtask__ = __webpack_require__(170);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CompetitionsTrainingPage = /** @class */ (function () {
    function CompetitionsTrainingPage(navCtrl, navParams, viewCtrl, storage, interestnPassion, modalCtrl, sharedTaskProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.storage = storage;
        this.interestnPassion = interestnPassion;
        this.modalCtrl = modalCtrl;
        this.sharedTaskProvider = sharedTaskProvider;
        this.isProfile = true;
        //addTraining:boolean =true;
        this.isDataFound = false;
        this.trainingData = {};
        this.ownerId = navParams.data.storyData.ownerId;
        console.log("this.ownerId :", this.ownerId);
        this.isProfile = navParams.data.isProfile;
        console.log("this.isProfile :", this.isProfile);
        console.log("\n\n\nCompetitionsTraining navParams : ");
        console.log(navParams);
        // this.isProfile = navParams.data.isProfile;
        //storyData
        // this.addTraining = navParams.data.addTraining;
        // console.log("this.addTraining :", this.addTraining);
        this.trainingData = navParams.data.storyData;
        console.log(this.trainingData);
        // this.AddCompetitionData=navParams.data.addData;
        // console.log(this.AddCompetitionData);
        if (typeof this.trainingData === 'undefined') {
            this.trainingData = {};
        }
    }
    CompetitionsTrainingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CompetitionsTrainingPage');
        if (this.isProfile) {
            this.CompetitionsTraining();
        }
    };
    CompetitionsTrainingPage.prototype.closeCompetitionsTraining = function () {
        if (this.isProfile) {
            this.viewCtrl.dismiss();
        }
        else
            this.navCtrl.popToRoot();
    };
    CompetitionsTrainingPage.prototype.CompetitionsTraining = function () {
        var _this = this;
        this.storage.get("userData").then(function (result) {
            // this.userId = result.userInfoModel.userId;
            var params = {
                'userId': result.userInfoModel.userId,
                'ownerId': _this.ownerId,
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
                }
                else {
                    _this.trainingData = {};
                    _this.isDataFound = true;
                    _this.sharedTaskProvider.showToastMessage("No data found.");
                }
            }, function (error) {
                console.log(error);
            });
        });
    };
    CompetitionsTrainingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-competitions-training',template:/*ion-inline-start:"/Users/kanikagupta/Documents/Modurn/modurn 2/src/pages/addstory/competitions-training/competitions-training.html"*/'<ion-header no-border>\n  <ion-navbar>\n    <ion-buttons left (click)="closeCompetitionsTraining()">\n      <button class="btnColor cross-icn" ion-button icon-only>\n        <ion-icon class="icon icon-cross" item-right></ion-icon>\n        <!--<img src="assets/img/icCross@3x.png" />-->\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="story-outer">\n  <div *ngIf="!isDataFound">\n    <div class="story-cont">\n      <h1 class="pet-follow">Competitions or training</h1>\n    </div>\n    <!-- {{trainingData | json }} -->\n    <div class="health-outer" *ngIf="trainingData.breeder != null">\n      <div class="helth-title">Breeder</div>\n      <div class="dot-cont">\n        <ion-icon class="icon icon-trainer my-icon pet-clr" item-right></ion-icon>\n      </div>\n      <div class="p_content">\n        {{trainingData.breeder}}\n      </div>\n    </div>\n    <div class="health-outer" *ngIf="trainingData.bloodLine != null">\n      <div class="helth-title">Blood line/pedigree</div>\n      <div class="dot-cont">\n        <ion-icon class="icon icon-body-line my-icon pet-clr" item-right></ion-icon>\n      </div>\n      <div class="p_content">\n        {{trainingData.bloodLine}}\n      </div>\n    </div>\n    <div class="health-outer" *ngIf="trainingData.training != null">\n      <div class="helth-title">Training</div>\n      <div class="dot-cont">\n        <ion-icon class="icon icon-whistle my-icon pet-clr" item-right></ion-icon>\n      </div>\n      <div class="p_content">\n        {{trainingData.training}}\n      </div>\n    </div>\n    <div class="health-outer" *ngIf="trainingData.competitions != null">\n      <div class="helth-title">Competitions</div>\n      <div class="dot-cont">\n        <ion-icon class="icon icon-competition my-icon pet-clr" item-right></ion-icon>\n      </div>\n      <div class="p_content">\n        {{trainingData.competitions}}\n      </div>\n    </div>\n    <div class="health-outer" *ngIf="trainingData.publications != null">\n      <div class="helth-title">Publications</div>\n      <div class="dot-cont">\n        <ion-icon class="icon icon-ic-publications my-icon pet-clr" item-right></ion-icon>\n      </div>\n      <div class="p_content">\n        {{trainingData.publications}}\n      </div>\n    </div>\n    <div class="health-outer" *ngIf="trainingData.achievements != null">\n      <div class="helth-title">Achievements</div>\n      <div class="dot-cont">\n        <ion-icon class="icon icon-achievement my-icon pet-clr" item-right></ion-icon>\n      </div>\n      <div class="p_content">\n        {{trainingData.achievements}}\n      </div>\n    </div>\n    <div class="health-outer" *ngIf="trainingData.accolades != null">\n      <div class="helth-title">Accolades</div>\n      <div class="dot-cont">\n        <ion-icon class="icon icon-ic-accolades my-icon pet-clr" item-right></ion-icon>\n      </div>\n      <div class="p_content">\n        {{trainingData.accolades}}\n      </div>\n    </div>\n\n  </div>\n  <div *ngIf="isDataFound" class="Nodatafound">\n    <h1 text-center>No data found</h1>\n  </div>\n\n</ion-content>'/*ion-inline-end:"/Users/kanikagupta/Documents/Modurn/modurn 2/src/pages/addstory/competitions-training/competitions-training.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["u" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1__providers_WebServices_LifeStory_InterestnPassionService__["a" /* InterestnPassionService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_SharedTask_sharedtask__["a" /* SharedTaskProvider */]])
    ], CompetitionsTrainingPage);
    return CompetitionsTrainingPage;
}());

//# sourceMappingURL=competitions-training.js.map

/***/ })

});
//# sourceMappingURL=29.js.map