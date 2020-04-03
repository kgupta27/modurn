webpackJsonp([39],{

/***/ 724:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCompetitionsTrainingModule", function() { return AddCompetitionsTrainingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_competitions_training__ = __webpack_require__(767);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddCompetitionsTrainingModule = /** @class */ (function () {
    function AddCompetitionsTrainingModule() {
    }
    AddCompetitionsTrainingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__add_competitions_training__["a" /* AddCompetitionsTrainingPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_competitions_training__["a" /* AddCompetitionsTrainingPage */]),
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__add_competitions_training__["a" /* AddCompetitionsTrainingPage */]]
        })
    ], AddCompetitionsTrainingModule);
    return AddCompetitionsTrainingModule;
}());

//# sourceMappingURL=add-competitions-training.module.js.map

/***/ }),

/***/ 767:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddCompetitionsTrainingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_usercommon_services__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_WebServices_LifeStory_InterestnPassionService__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_keyboard__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_WebServices_LifeStory_LifeStoryService__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_SharedTask_sharedtask__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Utility_Constant__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var AddCompetitionsTrainingPage = /** @class */ (function () {
    function AddCompetitionsTrainingPage(navCtrl, navParams, viewCtrl, fb, modalCtrl, loadingCtrl, commonServices, interestPassionService, keyboard, lifeStoryService, storage, sharedTaskProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.fb = fb;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.commonServices = commonServices;
        this.interestPassionService = interestPassionService;
        this.keyboard = keyboard;
        this.lifeStoryService = lifeStoryService;
        this.storage = storage;
        this.sharedTaskProvider = sharedTaskProvider;
        this.isValid = false;
        this.ownerId = 0;
        this.isNotEmpty = false;
        this.competitionsTrainingForm = fb.group({
            "breeder": [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_9__Utility_Constant__["j" /* WITHOUT_FIRST_REGES_SPECIAL */])],
            "bloodLine": [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_9__Utility_Constant__["j" /* WITHOUT_FIRST_REGES_SPECIAL */])],
            "training": [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_9__Utility_Constant__["j" /* WITHOUT_FIRST_REGES_SPECIAL */])],
            "competitions": [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_9__Utility_Constant__["j" /* WITHOUT_FIRST_REGES_SPECIAL */])],
            "publications": [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_9__Utility_Constant__["j" /* WITHOUT_FIRST_REGES_SPECIAL */])],
            "achievements": [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_9__Utility_Constant__["j" /* WITHOUT_FIRST_REGES_SPECIAL */])],
            "accolades": [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_9__Utility_Constant__["j" /* WITHOUT_FIRST_REGES_SPECIAL */])]
        });
        this.ownerId = navParams.data.ownerId;
        this.trainingData = navParams.data.trainingdata;
    }
    AddCompetitionsTrainingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddCompetitionsTrainingPage');
        console.log(this.trainingData);
        if (Object.keys(this.trainingData).length > 0) {
            console.log("Not Blank");
            this.isNotEmpty = true;
        }
        this.competitionsTrainingForm.controls['breeder'].setValue(this.trainingData.breeder);
        this.competitionsTrainingForm.controls['bloodLine'].setValue(this.trainingData.bloodLine);
        this.competitionsTrainingForm.controls['training'].setValue(this.trainingData.training);
        this.competitionsTrainingForm.controls['competitions'].setValue(this.trainingData.competitions);
        this.competitionsTrainingForm.controls['publications'].setValue(this.trainingData.publications);
        this.competitionsTrainingForm.controls['achievements'].setValue(this.trainingData.achievements);
        this.competitionsTrainingForm.controls['accolades'].setValue(this.trainingData.accolades);
        //this.competitionsTrainingForm.setValue(this.trainingData);
    };
    AddCompetitionsTrainingPage.prototype.closeCompetitionsTraining = function () {
        this.keyboard.close();
        // let modal = this.modalCtrl.create("CompetitionsTrainingPage", {storyData: this.trainingData});
        // modal.present();
        this.navCtrl.pop();
    };
    AddCompetitionsTrainingPage.prototype.addCompetitionsTraining = function (interestPassionFormData) {
        var _this = this;
        console.log(interestPassionFormData);
        var emptyForm = true;
        if (interestPassionFormData.accolades != null || interestPassionFormData.achievements != null || interestPassionFormData.bloodLine != null || interestPassionFormData.breeder != null || interestPassionFormData.competitions != null || interestPassionFormData.publications != null || interestPassionFormData.training != null) {
            emptyForm = false;
        }
        this.isValid = true;
        this.keyboard.close();
        // if (interestPassionFormData.breeder != null && interestPassionFormData.breeder !== undefined && interestPassionFormData.breeder != "" && interestPassionFormData.bloodLine != null && interestPassionFormData.bloodLine !== undefined && interestPassionFormData.bloodLine != "" && interestPassionFormData.training != null && interestPassionFormData.training !== undefined && interestPassionFormData.training != "" && interestPassionFormData.competitions != null && interestPassionFormData.competitions !== undefined && interestPassionFormData.competitions != "" && interestPassionFormData.publications != null && interestPassionFormData.publications !== undefined && interestPassionFormData.publications != "" && interestPassionFormData.achievements != null && interestPassionFormData.achievements !== undefined && interestPassionFormData.achievements != "" && interestPassionFormData.accolades != null && interestPassionFormData.accolades !== undefined && interestPassionFormData.accolades != "") {
        //   this.isValid = false;
        if (!emptyForm) {
            if (this.competitionsTrainingForm.valid) {
                this.storage.get("userData").then(function (result) {
                    if (result) {
                        // console.log(result.userInfoModel);
                        var interestData_1 = {
                            "userId": result.userInfoModel.userId,
                            "ownerId": _this.ownerId,
                            "breeder": interestPassionFormData.breeder,
                            "bloodLine": interestPassionFormData.bloodLine,
                            "training": interestPassionFormData.training,
                            "competitions": interestPassionFormData.competitions,
                            "publications": interestPassionFormData.publications,
                            "achievements": interestPassionFormData.achievements,
                            "accolades": interestPassionFormData.accolades
                        };
                        console.log(interestData_1);
                        // let loader = this.loadingCtrl.create({
                        //   content: 'Please wait...'
                        // });
                        // loader.present();
                        /*setTimeout(() => {
                          loader.dismiss();
                          try { this.closeCompetitionsTraining(); }catch(e){ }
                        }, 5000);*/
                        // //debugger;
                        // try{
                        if (!_this.isNotEmpty) {
                            // console.log("Now call POST method.");
                            // this.commonServices.submitData( interestData, "api/v1/story/competitionTraining", result.token).subscribe(data => {
                            //   var careerJson = JSON.parse(data);
                            //   console.log(careerJson);
                            //   loader.dismiss();
                            //   if(careerJson.responseCode == '200'){
                            //     this.closeCompetitionsTraining();
                            //     // let modal = this.modalCtrl.create(InterestsPassionsPage, { interestData: interestData });
                            //     // modal.present();
                            //   } else {
                            //     console.log("Something went wrong.");
                            //    }
                            // });
                            _this.lifeStoryService.postCompetitionnTraining(interestData_1)
                                .then(function (data) {
                                console.log('life story data =', data);
                                //loader.dismiss();
                                var trainingObject;
                                trainingObject = data;
                                if (trainingObject.responseCode == '200') {
                                    // this.closeCompetitionsTraining();
                                    var message = trainingObject.data;
                                    _this.sharedTaskProvider.showToastMessage(message);
                                    var modal = _this.modalCtrl.create("CompetitionsTrainingPage", { storyData: interestData_1 });
                                    modal.present();
                                }
                            }, function (error) {
                                console.log(error);
                            });
                        }
                        else {
                            console.log("Now call PUT method.");
                            interestData_1['competitionId'] = _this.trainingData.competitionId;
                            _this.lifeStoryService.fetCompetitionnTraining(interestData_1)
                                .then(function (data) {
                                console.log('life story data =', data);
                                //loader.dismiss();
                                var trainingObject;
                                trainingObject = data;
                                if (trainingObject.responseCode == '200') {
                                    // this.closeCompetitionsTraining();
                                    var message = trainingObject.data;
                                    _this.sharedTaskProvider.showToastMessage(message);
                                    var modal = _this.modalCtrl.create("CompetitionsTrainingPage", { storyData: interestData_1 });
                                    modal.present();
                                }
                            }, function (error) {
                                console.log(error);
                            });
                        }
                        // }catch(e){
                        //   loader.dismiss();
                        // }
                    }
                    else {
                        console.log("Not logged in");
                    }
                });
                // let modal = this.modalCtrl.create(InterestsPassionsPage, { helthJourneyData: interestPassionFormData });
                // modal.present();
                // } else {
                //   this.isValid = true;
                //   console.log("False");
                // }
            }
        }
        else {
            console.log("Form is blank");
            this.sharedTaskProvider.showToastMessage('Please enter data in any of the above field');
        }
    };
    AddCompetitionsTrainingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-competitions-training',template:/*ion-inline-start:"/Users/kanikagupta/Documents/Modurn/modurn 2/src/pages/addstory/add-competitions-training/add-competitions-training.html"*/'<ion-header no-border>\n  <ion-navbar>\n    <ion-buttons left (click)="closeCompetitionsTraining()">\n      <button class="btnColor cross-icn" ion-button icon-only>\n        <ion-icon class="icon icon-cross" item-right></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="story-outer">\n  <div class="story-cont">\n    <h1 class="pet-follow">Competitions or training</h1>\n  </div>\n\n  <form [formGroup]="competitionsTrainingForm" >\n    \n    <ion-list>\n\n      <ion-item class="item1">\n        <ion-label stacked>Breeder</ion-label>\n        <ion-icon class="icon icon-trainer pet-clr" item-right></ion-icon>\n        <ion-input type="text" [formControl]="competitionsTrainingForm.controls[\'breeder\']" spellcheck="true" autoComplete="true" autocorrect="true"></ion-input>\n      </ion-item>\n      <div *ngIf="isValid">\n        <!-- <div class="error-box" *ngIf="!competitionsTrainingForm.controls[\'breeder\'].valid && competitionsTrainingForm.controls[\'breeder\'].hasError(\'required\')">\n        Breeder is required!</div> -->\n        <div class="error-box" *ngIf="competitionsTrainingForm.controls[\'breeder\'].hasError(\'pattern\')">Please enter valid text.</div>\n        \n      </div>\n\n      <ion-item>\n        <ion-label stacked class="desc">Blood line/pedigree</ion-label>\n        <ion-icon class="icon icon-body-line pet-clr" item-right></ion-icon>\n        <ion-input type="text" [formControl]="competitionsTrainingForm.controls[\'bloodLine\']" spellcheck="true" autoComplete="true" autocorrect="true"></ion-input>\n      </ion-item>\n      <div *ngIf="isValid">\n        <!-- <div class="error-box" *ngIf="!competitionsTrainingForm.controls[\'bloodLine\'].valid && competitionsTrainingForm.controls[\'bloodLine\'].hasError(\'required\')">\n        Blood line / pedigree is required!</div> -->\n        <div class="error-box" *ngIf="competitionsTrainingForm.controls[\'bloodLine\'].hasError(\'pattern\')">Please enter valid text.</div>\n        \n\n      </div>\n\n      <ion-item>\n        <ion-label stacked>Training</ion-label>\n        <ion-icon class="icon icon-whistle pet-clr" item-right></ion-icon>\n        <ion-input type="text" [formControl]="competitionsTrainingForm.controls[\'training\']" spellcheck="true" autoComplete="true" autocorrect="true"></ion-input>\n      </ion-item>\n      <div *ngIf="isValid">\n        <!-- <div class="error-box" *ngIf="!competitionsTrainingForm.controls[\'training\'].valid && competitionsTrainingForm.controls[\'training\'].hasError(\'required\')">\n        Training is required!</div> -->\n        <div class="error-box" *ngIf="competitionsTrainingForm.controls[\'training\'].hasError(\'pattern\')">Please enter valid text.</div>\n        \n      </div>\n\n      <ion-item>\n        <ion-label stacked class="desc">Competitions</ion-label>\n        <ion-icon class="icon icon-achievement pet-clr" item-right></ion-icon>\n        <ion-input type="text" [formControl]="competitionsTrainingForm.controls[\'competitions\']" spellcheck="true" autoComplete="true" autocorrect="true"></ion-input>\n      </ion-item>\n      <div *ngIf="isValid">\n        <!-- <div class="error-box" *ngIf="!competitionsTrainingForm.controls[\'competitions\'].valid && competitionsTrainingForm.controls[\'competitions\'].hasError(\'required\')">\n        Competitions is required!</div> -->\n        <div class="error-box" *ngIf="competitionsTrainingForm.controls[\'competitions\'].hasError(\'pattern\')">Please enter valid text.</div>\n        \n      </div>\n\n      <ion-item>\n        <ion-label stacked>Publications</ion-label>\n        <ion-icon class="icon icon-ic-publications pet-clr" item-right></ion-icon>\n        <ion-input type="text" [formControl]="competitionsTrainingForm.controls[\'publications\']" spellcheck="true" autoComplete="true" autocorrect="true"></ion-input>\n      </ion-item>\n      <div *ngIf="isValid">\n        <!-- <div class="error-box" *ngIf="!competitionsTrainingForm.controls[\'publications\'].valid && competitionsTrainingForm.controls[\'publications\'].hasError(\'required\')">\n        Publications is required!</div> -->\n        <div class="error-box" *ngIf="competitionsTrainingForm.controls[\'publications\'].hasError(\'pattern\')">Please enter valid text.</div>\n      </div>\n\n      <ion-item>\n        <ion-label stacked class="desc">Achievements</ion-label>\n        <ion-icon class="icon icon-competition pet-clr" item-right></ion-icon>\n        <!-- <ion-icon class="icon icon-achievement pet-clr" item-right></ion-icon> -->\n        <ion-input type="text" [formControl]="competitionsTrainingForm.controls[\'achievements\']" spellcheck="true" autoComplete="true" autocorrect="true"></ion-input>\n      </ion-item>\n      <div *ngIf="isValid">\n        <!-- <div class="error-box" *ngIf="!competitionsTrainingForm.controls[\'achievements\'].valid && competitionsTrainingForm.controls[\'achievements\'].hasError(\'required\')">\n        Achievements is required!</div> -->\n        <div class="error-box" *ngIf="competitionsTrainingForm.controls[\'achievements\'].hasError(\'pattern\')">Please enter valid text.</div>\n      </div>\n\n      <ion-item>\n        <ion-label stacked>Accolades</ion-label>\n        <ion-icon class="icon icon-ic-accolades pet-clr" item-right></ion-icon>\n        <ion-input type="text" [formControl]="competitionsTrainingForm.controls[\'accolades\']" spellcheck="true" autoComplete="true" autocorrect="true"></ion-input>\n      </ion-item>\n      <div *ngIf="isValid">\n        <!-- <div class="error-box" *ngIf="!competitionsTrainingForm.controls[\'accolades\'].valid && competitionsTrainingForm.controls[\'accolades\'].hasError(\'required\')">\n        Accolades is required!</div> -->\n        <div class="error-box" *ngIf="competitionsTrainingForm.controls[\'accolades\'].hasError(\'pattern\')">Please enter valid text.</div>\n      </div>\n      \n    </ion-list>\n\n    <button ion-button class="mr-t80 button_color" full color="dark" (click)="addCompetitionsTraining(competitionsTrainingForm.value)">\n      {{isNotEmpty ? \'UPDATE\':\'ADD\'}}\n\n    </button>\n    \n  </form>\n</ion-content>'/*ion-inline-end:"/Users/kanikagupta/Documents/Modurn/modurn 2/src/pages/addstory/add-competitions-training/add-competitions-training.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_usercommon_services__["a" /* UserCommonServices */],
            __WEBPACK_IMPORTED_MODULE_5__providers_WebServices_LifeStory_InterestnPassionService__["a" /* InterestnPassionService */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_keyboard__["a" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_7__providers_WebServices_LifeStory_LifeStoryService__["a" /* LifeStoryService */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_8__providers_SharedTask_sharedtask__["a" /* SharedTaskProvider */]])
    ], AddCompetitionsTrainingPage);
    return AddCompetitionsTrainingPage;
}());

//# sourceMappingURL=add-competitions-training.js.map

/***/ })

});
//# sourceMappingURL=39.js.map