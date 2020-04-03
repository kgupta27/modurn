webpackJsonp([34],{

/***/ 728:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddHealthJourneyModule", function() { return AddHealthJourneyModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_health_journey__ = __webpack_require__(771);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddHealthJourneyModule = /** @class */ (function () {
    function AddHealthJourneyModule() {
    }
    AddHealthJourneyModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__add_health_journey__["a" /* AddHealthJourneyPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_health_journey__["a" /* AddHealthJourneyPage */]),
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__add_health_journey__["a" /* AddHealthJourneyPage */]]
        })
    ], AddHealthJourneyModule);
    return AddHealthJourneyModule;
}());

//# sourceMappingURL=add-health-journey.module.js.map

/***/ }),

/***/ 771:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddHealthJourneyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_usercommon_services__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Utility_Constant__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_toast_service_toast_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_keyboard__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_WebServices_LifeStory_LifeStoryService__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AddHealthJourneyPage = /** @class */ (function () {
    function AddHealthJourneyPage(navCtrl, navParams, fb, modalCtrl, loadingCtrl, commonServices, storage, viewController, lifeStoryService, toastCtrl, viewCtrl, keyboard) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fb = fb;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.commonServices = commonServices;
        this.storage = storage;
        this.viewController = viewController;
        this.lifeStoryService = lifeStoryService;
        this.toastCtrl = toastCtrl;
        this.viewCtrl = viewCtrl;
        this.keyboard = keyboard;
        this.isValid = false;
        this.isValidAge = false;
        this.ownerId = 0;
        this.helthData = {};
        this.isNotEmpty = false;
        this.urnType = 0;
        this.healthForm = fb.group({
            'title': [null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_5__Utility_Constant__["j" /* WITHOUT_FIRST_REGES_SPECIAL */])]],
            'age': [null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_5__Utility_Constant__["h" /* NUMBER_REGES */])]],
            'desc': [null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_5__Utility_Constant__["j" /* WITHOUT_FIRST_REGES_SPECIAL */])]]
        });
        console.log(navParams.data);
        this.ownerId = navParams.data.ownerId;
        this.helthData = navParams.data.helthData;
        this.urnType = navParams.data.urnType;
        this.ownerName = navParams.data.ownerName;
        console.log("add health journey: ", this.urnType);
        if (typeof this.helthData === 'undefined') {
            this.helthData = {};
        }
    }
    AddHealthJourneyPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddHealthJourneyPage');
        if (Object.keys(this.helthData).length > 0) {
            // console.log(this.helthData);
            this.isNotEmpty = true;
            this.healthForm.controls['title'].setValue(this.helthData.title);
            this.healthForm.controls['age'].setValue(this.helthData.age);
            this.healthForm.controls['desc'].setValue(this.helthData.description);
        }
        else {
            console.log("No data");
        }
    };
    AddHealthJourneyPage.prototype.closeHealthJourney = function () {
        this.keyboard.close();
        this.navCtrl.pop();
        // this.viewCtrl.dismiss(selectionRelationship);
    };
    AddHealthJourneyPage.prototype.addHealthJourney = function (healthFormData) {
        var _this = this;
        this.isValid = true;
        if (this.healthForm.valid) {
            this.isValid = false;
            this.storage.get("userData").then(function (result) {
                if (result) {
                    if (!_this.isNotEmpty) {
                        console.log("Call POST");
                        var helthData = {
                            "healths": [
                                {
                                    "age": healthFormData.age,
                                    "description": healthFormData.desc,
                                    "title": healthFormData.title
                                }
                            ],
                            userId: result.userInfoModel.userId,
                            ownerId: _this.ownerId,
                        };
                        console.log(helthData);
                        _this.lifeStoryService.addHelthJourney(helthData)
                            .then(function (data) {
                            console.log('helth data =', data);
                            var helthDataObject;
                            helthDataObject = data;
                            if (helthDataObject.responseCode == '200') {
                                _this.toastCtrl.create(helthDataObject.data);
                                var modal = _this.modalCtrl.create("HealthJourneyPage", { ownerId: _this.ownerId, urnType: _this.urnType, ownerName: _this.ownerName });
                                modal.present();
                            }
                        }, function (error) {
                            console.log(error);
                        });
                    }
                    else {
                        console.log("Call PUT");
                        var helthData_1 = {
                            "healths": [
                                {
                                    "age": healthFormData.age,
                                    "description": healthFormData.desc,
                                    "title": healthFormData.title,
                                    "healthId": _this.helthData.id,
                                }
                            ],
                            userId: result.userInfoModel.userId,
                            ownerId: _this.ownerId,
                        };
                        _this.lifeStoryService.putHelthJourney(helthData_1)
                            .then(function (data) {
                            console.log('helth data =', data);
                            var helthDataObject;
                            helthDataObject = data;
                            _this.toastCtrl.create(helthDataObject.data);
                            _this.viewCtrl.dismiss(helthData_1);
                        }, function (error) {
                            console.log(error);
                        });
                    }
                }
            });
        }
        else {
            this.isValid = true;
            console.log("False");
        }
    };
    AddHealthJourneyPage.prototype.isAgeChanged = function (searchValue) {
        console.log(searchValue);
    };
    AddHealthJourneyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-health-journey',template:/*ion-inline-start:"/Users/kanikagupta/Documents/Modurn/modurn 2/src/pages/addstory/add-health-journey/add-health-journey.html"*/'<ion-header no-border>\n  <ion-navbar>\n    <ion-buttons left (click)="closeHealthJourney()">\n      <button class="btnColor cross-icn" ion-button icon-only>\n        <ion-icon class="icon icon-cross" item-right></ion-icon>\n        <!--<img src="assets/img/icCross@3x.png" />-->\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="story-outer">\n  <div padding class="story-cont">\n      <!-- urnType {{urnType}} -->\n    <h1 class="{{urnType == 1 ? \'human-follow\':\'pet-follow\'}}">Add a health journey</h1>\n    <p>A health journey is a story from your {{urnType == 2 ? "pet\'s":""}} life relating to any injuries or medical issues you may want to share.</p>\n  </div>\n\n  <form padding [formGroup]="healthForm">\n\n    <ion-list>\n      <!-- {{helthData | json}} -->\n      <ion-item>\n        <ion-label stacked>Health journey title</ion-label>\n        <ion-input type="text" [formControl]="healthForm.controls[\'title\']" spellcheck="true" autoComplete="true" autocorrect="true"></ion-input>\n      </ion-item>\n      <div *ngIf="isValid">\n        <div class="error-box" *ngIf="!healthForm.controls[\'title\'].valid && healthForm.controls[\'title\'].hasError(\'required\')">\n          Health journey is required!</div>\n        <div class="error-box" *ngIf="healthForm.controls[\'title\'].hasError(\'pattern\')">Please enter valid health journey.</div>\n      </div>\n\n      <ion-item>\n        <ion-label stacked class="age">Age</ion-label>\n        <ion-input type="number" min="1" max="120" [formControl]="healthForm.controls[\'age\']"></ion-input>\n      </ion-item>\n      \n      <div *ngIf="isValid">\n        <div class="error-box" *ngIf="!healthForm.controls[\'age\'].valid && healthForm.controls[\'age\'].hasError(\'required\')">\n          Age is required!</div>\n        <div class="error-box" *ngIf="healthForm.controls[\'age\'].hasError(\'pattern\') && !healthForm.controls[\'age\'].valid && !healthForm.controls[\'age\'].hasError(\'required\')">\n        Please enter valid age!</div>\n      </div>\n\n      <ion-item>\n        <ion-label stacked class="desc">Description</ion-label>\n        <ion-input type="text" [formControl]="healthForm.controls[\'desc\']" spellcheck="true" autoComplete="true" autocorrect="true"></ion-input>\n      </ion-item>\n      <div *ngIf="isValid">\n        <div class="error-box" *ngIf="!healthForm.controls[\'desc\'].valid && healthForm.controls[\'desc\'].hasError(\'required\')">\n          Description is required!</div>\n        <div class="error-box" *ngIf="healthForm.controls[\'desc\'].hasError(\'pattern\')">Please enter valid description.</div>\n      </div>\n\n    </ion-list>\n\n    <button ion-button class="mr-t80 button_color" full color="dark" (click)="addHealthJourney(healthForm.value)">{{isNotEmpty?\'UPDATE\':\'ADD\'}}</button>\n\n  </form>\n</ion-content>'/*ion-inline-end:"/Users/kanikagupta/Documents/Modurn/modurn 2/src/pages/addstory/add-health-journey/add-health-journey.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_usercommon_services__["a" /* UserCommonServices */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_8__providers_WebServices_LifeStory_LifeStoryService__["a" /* LifeStoryService */],
            __WEBPACK_IMPORTED_MODULE_6__providers_toast_service_toast_service__["a" /* ToastServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_keyboard__["a" /* Keyboard */]])
    ], AddHealthJourneyPage);
    return AddHealthJourneyPage;
}());

//# sourceMappingURL=add-health-journey.js.map

/***/ })

});
//# sourceMappingURL=34.js.map