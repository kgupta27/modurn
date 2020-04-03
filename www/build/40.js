webpackJsonp([40],{

/***/ 723:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCareerAcademicModule", function() { return AddCareerAcademicModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_career_academic__ = __webpack_require__(766);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddCareerAcademicModule = /** @class */ (function () {
    function AddCareerAcademicModule() {
    }
    AddCareerAcademicModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__add_career_academic__["a" /* AddCareerAcademicPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_career_academic__["a" /* AddCareerAcademicPage */]),
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__add_career_academic__["a" /* AddCareerAcademicPage */]]
        })
    ], AddCareerAcademicModule);
    return AddCareerAcademicModule;
}());

//# sourceMappingURL=add-career-academic.module.js.map

/***/ }),

/***/ 766:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddCareerAcademicPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_usercommon_services__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_keyboard__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_WebServices_LifeStory_LifeStoryService__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_toast_service_toast_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Utility_Constant__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AddCareerAcademicPage = /** @class */ (function () {
    function AddCareerAcademicPage(navCtrl, navParams, viewCtrl, fb, modalCtrl, loadingCtrl, commonServices, keyboard, storage, lifeStoryService, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.fb = fb;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.commonServices = commonServices;
        this.keyboard = keyboard;
        this.storage = storage;
        this.lifeStoryService = lifeStoryService;
        this.toastCtrl = toastCtrl;
        this.isValid = false;
        this.ownerId = 0;
        this.isNotEmpty = false;
        this.blankForm = false;
        this.flag = true;
        this.careerForm = fb.group({
            'school': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_8__Utility_Constant__["j" /* WITHOUT_FIRST_REGES_SPECIAL */])],
            'academic': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_8__Utility_Constant__["j" /* WITHOUT_FIRST_REGES_SPECIAL */])],
            'publications': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_8__Utility_Constant__["j" /* WITHOUT_FIRST_REGES_SPECIAL */])],
            'accolades': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_8__Utility_Constant__["j" /* WITHOUT_FIRST_REGES_SPECIAL */])],
            'employemnt': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_8__Utility_Constant__["j" /* WITHOUT_FIRST_REGES_SPECIAL */])],
            'workstory': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_8__Utility_Constant__["j" /* WITHOUT_FIRST_REGES_SPECIAL */])],
            'business': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_8__Utility_Constant__["j" /* WITHOUT_FIRST_REGES_SPECIAL */])],
            'accreditations': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_8__Utility_Constant__["j" /* WITHOUT_FIRST_REGES_SPECIAL */])],
            'industryExperience': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_8__Utility_Constant__["j" /* WITHOUT_FIRST_REGES_SPECIAL */])],
            'mentors': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_8__Utility_Constant__["j" /* WITHOUT_FIRST_REGES_SPECIAL */])],
            'domains': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_8__Utility_Constant__["j" /* WITHOUT_FIRST_REGES_SPECIAL */])],
            'skills': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_8__Utility_Constant__["j" /* WITHOUT_FIRST_REGES_SPECIAL */])],
            'furtherLearning': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_8__Utility_Constant__["j" /* WITHOUT_FIRST_REGES_SPECIAL */])],
            'companyWorkedFor': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_8__Utility_Constant__["j" /* WITHOUT_FIRST_REGES_SPECIAL */])],
            'workRelatedLinks': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_8__Utility_Constant__["j" /* WITHOUT_FIRST_REGES_SPECIAL */])],
        });
        this.ownerId = navParams.data.ownerId;
        this.careerData = navParams.data.careerData;
    }
    AddCareerAcademicPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddCareerAcademicPage');
        if (Object.keys(this.careerData).length > 0) {
            console.log(this.careerData);
            this.isNotEmpty = true;
            this.careerForm.controls['school'].setValue(this.careerData.schoolsAttendant);
            this.careerForm.controls['academic'].setValue(this.careerData.academicAchievement);
            // this.careerForm.controls['sport'].setValue(this.careerData.sportsPlayed);
            // this.careerForm.controls['achiev'].setValue(this.careerData.lifeAchievement);
            this.careerForm.controls['publications'].setValue(this.careerData.publication);
            this.careerForm.controls['accolades'].setValue(this.careerData.accolades);
            this.careerForm.controls['employemnt'].setValue(this.careerData.employment);
            this.careerForm.controls['workstory'].setValue(this.careerData.workExperience);
            this.careerForm.controls['business'].setValue(this.careerData.businessesStarted);
            this.careerForm.controls['accreditations'].setValue(this.careerData.accreditations);
            this.careerForm.controls['industryExperience'].setValue(this.careerData.industryExperience);
            this.careerForm.controls['mentors'].setValue(this.careerData.mentors);
            this.careerForm.controls['domains'].setValue(this.careerData.domains);
            this.careerForm.controls['skills'].setValue(this.careerData.skills);
            this.careerForm.controls['furtherLearning'].setValue(this.careerData.furtherLearning);
            this.careerForm.controls['companyWorkedFor'].setValue(this.careerData.companyWorkedFor);
            this.careerForm.controls['workRelatedLinks'].setValue(this.careerData.workRelatedLinks);
        }
        else {
            console.log("No data");
        }
    };
    AddCareerAcademicPage.prototype.closeCareerAcademic = function () {
        this.keyboard.close();
        this.viewCtrl.dismiss();
    };
    AddCareerAcademicPage.prototype.addCareerAcademic = function (healthFormData) {
        var _this = this;
        if (this.flag) {
            this.flag = false;
            setTimeout(function () {
                _this.flag = true;
            }, 1000);
        }
        else {
            return;
        }
        this.isValid = true;
        this.keyboard.close();
        //debugger;
        // if (healthFormData.school != null && healthFormData.school !== undefined && healthFormData.school != "" && healthFormData.academic != null && healthFormData.academic !== undefined && healthFormData.academic != "" && healthFormData.publications != null && healthFormData.publications !== undefined && healthFormData.publications != "" && healthFormData.accolades != null && healthFormData.accolades !== undefined && healthFormData.accolades != "" && healthFormData.employemnt != null && healthFormData.employemnt !== undefined && healthFormData.employemnt != "" && healthFormData.workstory != null && healthFormData.workstory !== undefined && healthFormData.workstory != "" && healthFormData.business != null && healthFormData.business !== undefined && healthFormData.business != "" && healthFormData.accreditations != null && healthFormData.accreditations !== undefined && healthFormData.accreditations != "" && healthFormData.industryExperience != null && healthFormData.industryExperience !== undefined && healthFormData.industryExperience != "" && healthFormData.mentors != null && healthFormData.mentors !== undefined && healthFormData.mentors != "" && healthFormData.domains != null && healthFormData.domains !== undefined && healthFormData.domains != "" && healthFormData.skills != null && healthFormData.skills !== undefined && healthFormData.skills != ""  && healthFormData.furtherLearning != null && healthFormData.furtherLearning !== undefined && healthFormData.furtherLearning != "" && healthFormData.companyWorkedFor != null && healthFormData.companyWorkedFor !== undefined && healthFormData.companyWorkedFor != "" && healthFormData.workRelatedLinks != null && healthFormData.workRelatedLinks !== undefined && healthFormData.workRelatedLinks != "") {key 
        // for(let key in healthFormData){
        //   if(healthFormData[key]==""){
        //     healthFormData[key]=null;
        //   }
        // }
        //   if (!this.validateText(this.careerForm.value.school)) {
        //     console.log("validateText: ", this.validateText(this.careerForm.value.school));
        //     this.formIndex = 1;
        //   }else if(!this.validateText(this.careerForm.value.academic)){
        //     this.formIndex =2;
        //   }else if(!this.validateText(this.careerForm.value.publications)){
        //     this.formIndex =3;
        //   }else if(!this.validateText(this.careerForm.value.accolades)){
        //     this.formIndex =4;
        //   }else if(!this.validateText(this.careerForm.value.employemnt)){
        //     this.formIndex =5;
        //   }else if(!this.validateText(this.careerForm.value.workstory)){
        //     this.formIndex =6;
        //   }else if(!this.validateText(this.careerForm.value.business)){
        //     this.formIndex =7;
        //   }else if(!this.validateText(this.careerForm.value.accreditations)){
        //     this.formIndex =8;
        //   }else if(!this.validateText(this.careerForm.value.industryExperience)){
        //     this.formIndex =9;
        //   }else if(!this.validateText(this.careerForm.value.companyWorkedFor)){
        //     this.formIndex =10;
        //   }else if(!this.validateText(this.careerForm.value.domains)){
        //     this.formIndex =11;
        //   }else if(!this.validateText(this.careerForm.value.skills)){
        //     this.formIndex =12;
        //   }else if(!this.validateText(this.careerForm.value.furtherLearning)){
        //     this.formIndex =13;
        //   }else if(!this.validateText(this.careerForm.value.companyWorkedFor)){
        //     this.formIndex =14;
        //   }else if(!this.validateText(this.careerForm.value.workRelatedLinks)){
        //     this.formIndex =15;
        //   // }
        // }else{
        //     this.isValid = false;
        //   }
        // healthFormData.forEach(function(element) {
        //   console.log(element);
        // });
        for (var key in healthFormData) {
            if (healthFormData[key] == "" || healthFormData[key] == null) {
                this.blankForm = true;
            }
            else {
                this.blankForm = false;
                break;
            }
        }
        console.log("Blank Form:: ", this.blankForm);
        for (var key in healthFormData) {
            if (healthFormData[key] == "") {
                healthFormData[key] = null;
            }
        }
        // if (!this.isValid) {
        // if (healthFormData.school != null && healthFormData.school !== undefined && healthFormData.school != "" && healthFormData.academic != null && healthFormData.academic !== undefined && healthFormData.academic != "" && healthFormData.sport != null && healthFormData.sport !== undefined && healthFormData.sport != "" && healthFormData.achiev != null && healthFormData.achiev !== undefined && healthFormData.achiev != "" && healthFormData.publications != null && healthFormData.publications !== undefined && healthFormData.publications != "" && healthFormData.accolades != null && healthFormData.accolades !== undefined && healthFormData.accolades != "" && healthFormData.employemnt != null && healthFormData.employemnt !== undefined && healthFormData.employemnt != "" && healthFormData.workstory != null && healthFormData.workstory !== undefined && healthFormData.workstory != "" && healthFormData.business != null && healthFormData.business !== undefined && healthFormData.business != "") {
        if (!this.blankForm) {
            if (this.careerForm.valid) {
                this.isValid = false;
                this.storage.get("userData").then(function (result) {
                    if (result) {
                        // console.log(result.userInfoModel);
                        var careerData_1 = {
                            "academicAchievement": healthFormData.academic,
                            "accolades": healthFormData.accolades,
                            "businessesStarted": healthFormData.business,
                            "employment": healthFormData.employemnt,
                            "lifeAchievement": healthFormData.academic,
                            "userId": result.userInfoModel.userId,
                            "ownerId": _this.ownerId,
                            "publication": healthFormData.publications,
                            "schoolsAttendant": healthFormData.school,
                            // "sportsPlayed": healthFormData.sport,
                            // "sportsRecord": healthFormData.achiev,
                            "workExperience": healthFormData.workstory,
                            "accreditations": healthFormData.accreditations,
                            "industryExperience": healthFormData.industryExperience,
                            "mentors": healthFormData.mentors,
                            "domains": healthFormData.domains,
                            "skills": healthFormData.skills,
                            "furtherLearning": healthFormData.furtherLearning,
                            "companyWorkedFor": healthFormData.companyWorkedFor,
                            "workRelatedLinks": healthFormData.workRelatedLinks,
                        };
                        console.log(careerData_1);
                        if (!_this.isNotEmpty) {
                            console.log("Submit, Now call POST");
                            _this.lifeStoryService.postCompetitionTraining(careerData_1)
                                .then(function (data) {
                                console.log('life story data =', data);
                                var careerDataObject;
                                careerDataObject = data;
                                if (careerDataObject.responseCode == '200') {
                                    _this.toastCtrl.create(careerDataObject.data);
                                    var modal = _this.modalCtrl.create('CareerAcademicPage', { careerData: careerData_1 });
                                    modal.present();
                                }
                            }, function (error) {
                                console.log(error);
                            });
                        }
                        else {
                            console.log("Update, Now call PUT");
                            careerData_1['careerId'] = _this.careerData.careerId;
                            _this.lifeStoryService.putCompetitionTraining(careerData_1)
                                .then(function (data) {
                                console.log('life story data =', data);
                                var careerDataObject;
                                careerDataObject = data;
                                if (careerDataObject.responseCode == '200') {
                                    _this.toastCtrl.create(careerDataObject.data);
                                    var modal = _this.modalCtrl.create('CareerAcademicPage', { careerData: careerData_1 });
                                    modal.present();
                                }
                            }, function (error) {
                                console.log(error);
                            });
                        }
                    }
                    else {
                        console.log("Not logged in");
                    }
                });
                // let modal = this.modalCtrl.create(CareerAcademicPage, { helthJourneyData: healthFormData });
                // modal.present();
            }
            else {
                this.isValid = true;
                console.log("False");
            }
        }
        else {
            this.toastCtrl.create('Please provide atleast one info to save');
        }
    };
    AddCareerAcademicPage.prototype.showCareerAcademics = function () {
        var modal = this.modalCtrl.create("CareerAcademicPage", { ownerId: this.ownerId, isProfile: true });
        modal.present();
    };
    AddCareerAcademicPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-career-academic',template:/*ion-inline-start:"/Users/kanikagupta/Documents/Modurn/modurn 2/src/pages/addstory/add-career-academic/add-career-academic.html"*/'<ion-header no-border>\n  <ion-navbar>\n    <ion-buttons left (click)="closeCareerAcademic()">\n      <button class="btnColor cross-icn" ion-button icon-only>\n        <ion-icon class="icon icon-cross" item-right></ion-icon>\n        <!--<img src="assets/img/icCross@3x.png" />-->\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="story-outer">\n  <div padding class="story-cont">\n    <h1>Academics and Career</h1>\n  </div>\n\n  <form padding [formGroup]="careerForm" >\n\n    <ion-list>\n\n      <ion-item>\n        <ion-label stacked>Schools attended</ion-label>\n        <ion-icon class="icon icon-ic-school" item-right></ion-icon>\n        <ion-input type="text" [formControl]="careerForm.controls[\'school\']"  spellcheck="true" autoComplete="true" autocorrect="true"></ion-input>\n      </ion-item>\n      <div *ngIf="isValid">\n          <div class="error-box"  *ngIf="careerForm.controls[\'school\'].hasError(\'pattern\')">Please enter valid text.</div>\n        <!-- <div class="error-box">Please enter valid text.</div> -->\n      </div>\n\n      <ion-item>\n        <ion-label stacked class="desc">Academic achievements</ion-label>\n        <ion-icon class="icon icon-hat" item-right></ion-icon>\n        <ion-input type="text" [formControl]="careerForm.controls[\'academic\']"  spellcheck="true" autoComplete="true" autocorrect="true"></ion-input>\n      </ion-item>\n      <div *ngIf="isValid ">\n        <div class="error-box"  *ngIf="careerForm.controls[\'academic\'].hasError(\'pattern\')">Please enter valid text.</div>\n        <!-- <div class="error-box">Please enter valid text.</div> -->\n      </div>\n\n      <ion-item>\n        <ion-label stacked>Publications</ion-label>\n        <ion-icon class="icon icon-ic-publications" item-right></ion-icon>\n        <ion-input type="text" [formControl]="careerForm.controls[\'publications\']"  spellcheck="true" autoComplete="true" autocorrect="true"></ion-input>\n      </ion-item>\n      <div *ngIf="isValid ">\n        <div class="error-box"  *ngIf="careerForm.controls[\'publications\'].hasError(\'pattern\')">Please enter valid text.</div>\n        <!-- <div class="error-box">Please enter valid text.</div> -->\n      </div>\n\n      <ion-item>\n        <ion-label stacked class="desc">Accolades</ion-label>\n        <ion-icon class="icon icon-ic-accolades" item-right></ion-icon>\n        <ion-input type="text" [formControl]="careerForm.controls[\'accolades\']"  spellcheck="true" autoComplete="true" autocorrect="true"></ion-input>\n      </ion-item>\n      <div *ngIf="isValid">\n        <div class="error-box"  *ngIf="careerForm.controls[\'accolades\'].hasError(\'pattern\')">Please enter valid text.</div>\n        <!-- <div class="error-box">Please enter valid text.</div> -->\n      </div>\n\n      <ion-item>\n        <ion-label stacked>Employment</ion-label>\n        <ion-icon class="icon icon-ic-employemnt" item-right></ion-icon>\n        <ion-input type="text" [formControl]="careerForm.controls[\'employemnt\']" spellcheck="true" autoComplete="true" autocorrect="true"></ion-input>\n      </ion-item>\n      <div *ngIf="isValid">\n        <!-- <div class="error-box" *ngIf="!careerForm.controls[\'employemnt\'].valid && careerForm.controls[\'employemnt\'].hasError(\'required\')"> -->\n          <!-- Employment is required!</div> -->\n        <div class="error-box"  *ngIf="careerForm.controls[\'employemnt\'].hasError(\'pattern\')">Please enter valid text.</div>\n        <!-- <div class="error-box">Please enter valid text.</div> -->\n      </div>\n\n      <ion-item>\n        <ion-label stacked class="desc">Work story</ion-label>\n        <ion-icon class="icon icon-ic-tie" item-right></ion-icon>\n        <ion-input type="text" [formControl]="careerForm.controls[\'workstory\']" spellcheck="true" autoComplete="true" autocorrect="true"></ion-input>\n      </ion-item>\n      <div *ngIf="isValid">\n        <!-- <div class="error-box" *ngIf="!careerForm.controls[\'workstory\'].valid && careerForm.controls[\'workstory\'].hasError(\'required\')"> -->\n          <!-- Work story is required!</div> -->\n        <div class="error-box"  *ngIf="careerForm.controls[\'workstory\'].hasError(\'pattern\')">Please enter valid text.</div>\n        <!-- <div class="error-box">Please enter valid text.</div> -->\n      </div>\n\n      <ion-item>\n        <ion-label stacked>Businesses started</ion-label>\n        <ion-icon class="icon icon-ic-business" item-right></ion-icon>\n        <ion-input type="text" [formControl]="careerForm.controls[\'business\']" spellcheck="true" autoComplete="true" autocorrect="true"></ion-input>\n      </ion-item>\n      <div *ngIf="isValid">\n        <!-- <div class="error-box" *ngIf="!careerForm.controls[\'business\'].valid && careerForm.controls[\'business\'].hasError(\'required\')"> -->\n          <!-- Businesses started is required!</div> -->\n        <div class="error-box"  *ngIf="careerForm.controls[\'business\'].hasError(\'pattern\')">Please enter valid text.</div>\n        <!-- <div class="error-box">Please enter valid text.</div> -->\n      </div>      \n\n      <ion-item>\n        <ion-label stacked>Accreditations</ion-label>\n        <ion-icon class="icon icon-ic-school" item-right></ion-icon>\n         <!-- <ion-icon class="icon icon-ic-business" item-right></ion-icon>  -->\n        <ion-input type="text" [formControl]="careerForm.controls[\'accreditations\']" spellcheck="true" autoComplete="true" autocorrect="true"></ion-input>\n      </ion-item>\n      <div *ngIf="isValid">\n        <div class="error-box"  *ngIf="careerForm.controls[\'accreditations\'].hasError(\'pattern\')">Please enter valid text.</div>\n        <!-- <div class="error-box">Please enter valid text.</div> -->\n      </div>      \n\n      <ion-item>\n        <ion-label stacked>Industry experience</ion-label>\n        <ion-icon class="icon icon-hat" item-right></ion-icon>\n         <!-- <ion-icon class="icon icon-ic-business" item-right></ion-icon>  -->\n        <ion-input type="text" [formControl]="careerForm.controls[\'industryExperience\']" spellcheck="true" autoComplete="true" autocorrect="true"></ion-input>\n      </ion-item>\n      <div *ngIf="isValid">\n        <div class="error-box"  *ngIf="careerForm.controls[\'industryExperience\'].hasError(\'pattern\')">Please enter valid text.</div>\n        <!-- <div class="error-box">Please enter valid text.</div> -->\n      </div>      \n\n      <ion-item>\n        <ion-label stacked>Mentors</ion-label>\n        <ion-icon class="icon icon-ic-publications" item-right></ion-icon>\n        <ion-input type="text" [formControl]="careerForm.controls[\'mentors\']" spellcheck="true" autoComplete="true" autocorrect="true"></ion-input>\n      </ion-item>\n      <div *ngIf="isValid">\n        <div class="error-box"  *ngIf="careerForm.controls[\'mentors\'].hasError(\'pattern\')">Please enter valid text.</div>\n        <!-- <div class="error-box">Please enter valid text.</div> -->\n      </div>      \n\n      <ion-item>\n        <ion-label stacked>Domains</ion-label>\n         <ion-icon class="icon icon-ic-accolades" item-right></ion-icon>\n        <ion-input type="text" [formControl]="careerForm.controls[\'domains\']" spellcheck="true" autoComplete="true" autocorrect="true"></ion-input>\n      </ion-item>\n      <div *ngIf="isValid">\n        <div class="error-box"  *ngIf="careerForm.controls[\'domains\'].hasError(\'pattern\')">Please enter valid text.</div>\n        <!-- <div class="error-box">Please enter valid text.</div> -->\n      </div>  \n\n      <ion-item>\n        <ion-label stacked>Skills</ion-label>\n        <ion-icon class="icon icon-ic-employemnt" item-right></ion-icon>\n        <ion-input type="text" [formControl]="careerForm.controls[\'skills\']" spellcheck="true" autoComplete="true" autocorrect="true"></ion-input>\n      </ion-item>\n      <div *ngIf="isValid">\n        <div class="error-box"  *ngIf="careerForm.controls[\'skills\'].hasError(\'pattern\')">Please enter valid text.</div>\n        <!-- <div class="error-box">Please enter valid text.</div> -->\n      </div>  \n\n      <ion-item>\n        <ion-label stacked>Further Learning </ion-label>\n        <ion-icon class="icon icon-ic-tie" item-right></ion-icon>\n        <ion-input type="text" [formControl]="careerForm.controls[\'furtherLearning\']" spellcheck="true" autoComplete="true" autocorrect="true"></ion-input>\n      </ion-item>\n      <div *ngIf="isValid">\n        <div class="error-box"  *ngIf="careerForm.controls[\'furtherLearning\'].hasError(\'pattern\')">Please enter valid text.</div>\n        <!-- <div class="error-box">Please enter valid text.</div> -->\n      </div>  \n\n      <ion-item>\n        <ion-label stacked>Company’s you’ve worked for</ion-label>\n        <ion-icon class="icon icon-ic-business" item-right></ion-icon>\n        <ion-input type="text" [formControl]="careerForm.controls[\'companyWorkedFor\']" spellcheck="true" autoComplete="true" autocorrect="true"></ion-input>\n      </ion-item>\n      <div *ngIf="isValid">\n        <div class="error-box"  *ngIf="careerForm.controls[\'companyWorkedFor\'].hasError(\'pattern\')">Please enter valid text.</div>\n        <!-- <div class="error-box">Please enter valid text.</div> -->\n      </div>  \n\n      <ion-item>\n        <ion-label stacked>Work related links</ion-label>\n        <ion-icon class="icon icon-ic-school" item-right></ion-icon>\n        <ion-input type="text" [formControl]="careerForm.controls[\'workRelatedLinks\']" spellcheck="true" autoComplete="true" autocorrect="true"></ion-input>\n      </ion-item>\n      <div *ngIf="isValid">\n        <div class="error-box"  *ngIf="careerForm.controls[\'workRelatedLinks\'].hasError(\'pattern\')">Please enter valid text.</div>\n        <!-- <div class="error-box">Please enter valid text.</div> -->\n      </div>  \n\n\n    </ion-list>\n\n    <button ion-button class="mr-t80 button_color" full color="dark" (click)="addCareerAcademic(careerForm.value)">{{isNotEmpty?\'UPDATE\':\'ADD\'}}</button>\n    \n  </form>\n</ion-content>'/*ion-inline-end:"/Users/kanikagupta/Documents/Modurn/modurn 2/src/pages/addstory/add-career-academic/add-career-academic.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_usercommon_services__["a" /* UserCommonServices */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_keyboard__["a" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_6__providers_WebServices_LifeStory_LifeStoryService__["a" /* LifeStoryService */],
            __WEBPACK_IMPORTED_MODULE_7__providers_toast_service_toast_service__["a" /* ToastServiceProvider */]])
    ], AddCareerAcademicPage);
    return AddCareerAcademicPage;
}());

//# sourceMappingURL=add-career-academic.js.map

/***/ })

});
//# sourceMappingURL=40.js.map