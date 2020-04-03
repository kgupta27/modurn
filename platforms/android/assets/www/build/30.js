webpackJsonp([30],{

/***/ 733:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CareerAcademicModule", function() { return CareerAcademicModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__career_academic__ = __webpack_require__(776);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CareerAcademicModule = /** @class */ (function () {
    function CareerAcademicModule() {
    }
    CareerAcademicModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__career_academic__["a" /* CareerAcademicPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__career_academic__["a" /* CareerAcademicPage */]),
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__career_academic__["a" /* CareerAcademicPage */]]
        })
    ], CareerAcademicModule);
    return CareerAcademicModule;
}());

//# sourceMappingURL=career-academic.module.js.map

/***/ }),

/***/ 776:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CareerAcademicPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_WebServices_LifeStory_InterestnPassionService__ = __webpack_require__(382);
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





var CareerAcademicPage = /** @class */ (function () {
    function CareerAcademicPage(navCtrl, navParams, viewCtrl, storage, interestnPassion, modalCtrl, sharedTaskProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.storage = storage;
        this.interestnPassion = interestnPassion;
        this.modalCtrl = modalCtrl;
        this.sharedTaskProvider = sharedTaskProvider;
        this.careerData = {};
        this.careerDataObj = {};
        this.isDataFound = false;
        this.isProfile = navParams.data.isProfile;
        this.ownerId = navParams.data.ownerId;
        this.careerData = navParams.data.careerData;
        if (typeof this.careerData === 'undefined') {
            console.log("Undefined catch");
            this.careerData = {};
        }
    }
    CareerAcademicPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddCareerAcademicPage');
        // console.log(this.careerData);
        if (this.isProfile) {
            this.careernPassion();
        }
    };
    CareerAcademicPage.prototype.closeCareerAcademic = function () {
        if (this.isProfile) {
            this.viewCtrl.dismiss();
        }
        else {
            this.navCtrl.popToRoot();
        }
    };
    CareerAcademicPage.prototype.careernPassion = function () {
        var _this = this;
        this.storage.get("userData").then(function (result) {
            var params = {
                userId: result.userInfoModel.userId,
                ownerId: _this.ownerId,
                page: '1',
                size: '1'
            };
            _this.interestnPassion.fetchcareernAcademics(params)
                .then(function (data) {
                _this.careerDataObj = data;
                if (Object.keys(_this.careerDataObj.contentList).length > 0) {
                    _this.careerData = _this.careerDataObj.contentList[0];
                    for (var key in _this.careerData) {
                        if (_this.careerData[key] == "") {
                            _this.careerData[key] = null;
                        }
                    }
                }
                else {
                    _this.isDataFound = true;
                    _this.careerData = {};
                    _this.sharedTaskProvider.showToastMessage("No data found.");
                }
            }, function (error) {
                ////debugger;
                console.log(error);
            });
        });
    };
    CareerAcademicPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-career-academic',template:/*ion-inline-start:"/Users/kanikagupta/Documents/Modurn/modurn 2/src/pages/addstory/career-academic/career-academic.html"*/'<ion-header no-border>\n  <ion-navbar>\n    <ion-buttons left (click)="closeCareerAcademic()">\n      <button class="btnColor cross-icn" ion-button icon-only>\n        <ion-icon class="icon icon-cross" item-right></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="story-outer">\n  <div *ngIf="!isDataFound">\n    <div class="story-cont">\n      <h1>Academics and Career</h1>\n    </div>\n\n    <!-- {{careerData | json }} -->\n    <div class="health-outer" *ngIf="careerData.schoolsAttendant != null">\n      <div class="helth-title">Schools attended</div>\n      <div class="dot-cont">\n        <ion-icon class="icon icon-ic-school my-icon" item-right></ion-icon>\n      </div>\n      <div class="p_content">\n        {{careerData.schoolsAttendant}}\n      </div>\n    </div>\n    <div class="health-outer" *ngIf="careerData.academicAchievement != null">\n      <div class="helth-title">Academic achievements</div>\n      <div class="dot-cont">\n        <ion-icon class="icon icon-hat my-icon" item-right></ion-icon>\n      </div>\n      <div class="p_content">\n        {{careerData.academicAchievement}}\n      </div>\n    </div>\n    <div class="health-outer" *ngIf="careerData.publication != null">\n      <div class="helth-title">Publications</div>\n      <div class="dot-cont">\n        <ion-icon class="icon icon-ic-publications my-icon" item-right></ion-icon>\n      </div>\n      <div class="p_content">\n        {{careerData.publication}}\n      </div>\n    </div>\n    <div class="health-outer" *ngIf="careerData.accolades != null">\n      <div class="helth-title">Accolades</div>\n      <div class="dot-cont">\n        <ion-icon class="icon icon-ic-accolades my-icon" item-right></ion-icon>\n      </div>\n      <div class="p_content" *ngIf="careerData.schoolsAttendant != null">\n        {{careerData.accolades}}\n      </div>\n    </div>\n    <div class="health-outer" *ngIf="careerData.employment != null">\n      <div class="helth-title">Employment</div>\n      <div class="dot-cont">\n        <ion-icon class="icon icon-ic-employemnt my-icon" item-right></ion-icon>\n      </div>\n      <div class="p_content">\n        {{careerData.employment}}\n      </div>\n    </div>\n    <div class="health-outer" *ngIf="careerData.workExperience != null">\n      <div class="helth-title">Work story</div>\n      <div class="dot-cont">\n        <ion-icon class="icon icon-ic-tie my-icon" item-right></ion-icon>\n      </div>\n      <div class="p_content">\n        {{careerData.workExperience}}\n      </div>\n    </div>\n    <div class="health-outer" *ngIf="careerData.businessesStarted != null">\n      <div class="helth-title">Businesses started</div>\n      <div class="dot-cont">\n        <ion-icon class="icon icon-ic-business my-icon" item-right></ion-icon>\n      </div>\n      <div class="p_content">\n        {{careerData.businessesStarted}}\n      </div>\n    </div>\n    <div class="health-outer" *ngIf="careerData.accreditations != null">\n      <div class="helth-title">Accreditations</div>\n      <div class="dot-cont">\n        <ion-icon class="icon icon-ic-school my-icon" item-right></ion-icon>\n      </div>\n      <div class="p_content">\n        {{careerData.accreditations}}\n      </div>\n    </div>\n    <div class="health-outer" *ngIf="careerData.mentors != null">\n      <div class="helth-title">Mentors</div>\n      <div class="dot-cont">\n        <ion-icon class="icon icon-hat my-icon" item-right></ion-icon>\n      </div>\n      <div class="p_content">\n        {{careerData.mentors}}\n      </div>\n    </div>\n    <div class="health-outer" *ngIf="careerData.domains != null">\n      <div class="helth-title">Domains</div>\n      <div class="dot-cont">\n        <ion-icon class="icon icon-ic-publications my-icon" item-right></ion-icon>\n      </div>\n      <div class="p_content">\n        {{careerData.domains}}\n      </div>\n    </div>\n    <div class="health-outer" *ngIf="careerData.skills != null">\n      <div class="helth-title">Skills</div>\n      <div class="dot-cont">\n        <ion-icon class="icon icon-ic-accolades my-icon" item-right></ion-icon>\n      </div>\n      <div class="p_content">\n        {{careerData.skills}}\n      </div>\n    </div>\n    <div class="health-outer" *ngIf="careerData.furtherLearning != null">\n      <div class="helth-title">Further Learning</div>\n      <div class="dot-cont">\n        <ion-icon class="icon icon-ic-employemnt my-icon" item-right></ion-icon>\n      </div>\n      <div class="p_content">\n        {{careerData.furtherLearning}}\n      </div>\n    </div>\n    <div class="health-outer" *ngIf="careerData.companyWorkedFor != null">\n      <div class="helth-title">Company’s you’ve worked for</div>\n      <div class="dot-cont">\n        <ion-icon class="icon icon-ic-tie my-icon" item-right></ion-icon>\n      </div>\n      <div class="p_content">\n        {{careerData.companyWorkedFor}}\n      </div>\n    </div>\n    <div class="health-outer" *ngIf="careerData.workRelatedLinks != null">\n      <div class="helth-title">Work related links</div>\n      <div class="dot-cont">\n        <ion-icon class="icon icon-ic-business my-icon" item-right></ion-icon>\n      </div>\n      <div class="p_content">\n        {{careerData.workRelatedLinks}}\n      </div>\n    </div>\n\n  </div>\n  <div *ngIf="isDataFound" class="Nodatafound">\n    <h1 text-center>No data found</h1>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/kanikagupta/Documents/Modurn/modurn 2/src/pages/addstory/career-academic/career-academic.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["u" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__providers_WebServices_LifeStory_InterestnPassionService__["a" /* InterestnPassionService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_SharedTask_sharedtask__["a" /* SharedTaskProvider */]])
    ], CareerAcademicPage);
    return CareerAcademicPage;
}());

//# sourceMappingURL=career-academic.js.map

/***/ })

});
//# sourceMappingURL=30.js.map