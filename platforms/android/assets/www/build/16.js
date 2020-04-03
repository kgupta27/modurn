webpackJsonp([16],{

/***/ 755:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewPetStorie1Module", function() { return NewPetStorie1Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__new_pet_storie1__ = __webpack_require__(798);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NewPetStorie1Module = /** @class */ (function () {
    function NewPetStorie1Module() {
    }
    NewPetStorie1Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__new_pet_storie1__["a" /* NewPetStorie1Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__new_pet_storie1__["a" /* NewPetStorie1Page */]),
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__new_pet_storie1__["a" /* NewPetStorie1Page */]]
        })
    ], NewPetStorie1Module);
    return NewPetStorie1Module;
}());

//# sourceMappingURL=new-pet-storie1.module.js.map

/***/ }),

/***/ 798:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewPetStorie1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_toast_service_toast_service__ = __webpack_require__(34);
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






var NewPetStorie1Page = /** @class */ (function () {
    function NewPetStorie1Page(navCtrl, navParams, toastCtrl, loadingCtrl, nav, platform, modalCtrl, alertCtrl, storage, fb) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.nav = nav;
        this.platform = platform;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.fb = fb;
        this.rel = "y";
        this.isSubmit = false;
        this.userid = 0;
        this.isPersionAlive = false;
        this.isValidDate = false;
        this.isWdobValidDate = false;
        this.isEdit = false;
        //debugger
        this.storyData = navParams.data.petStoryData;
        this.rel = "y";
        if (typeof navParams.data.data != 'undefined') {
            this.LifeStoryData = navParams.data.data.LifestoryData;
            console.log("    " + this.LifeStoryData);
            this.isEdit = navParams.data.data.isEdit;
            console.log("   " + this.isEdit);
        }
        // console.log(this.storyData);
        var SPACE_REGEXP = "/^[^-\s][a-zA-Z0-9_\s-]+$/";
        this.lifeStoryForm = fb.group({
            'relationship': [null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]],
            // 'wdob': [null, Validators.compose([Validators.required])],
            'wdob': [null],
            // 'wpob': [null, Validators.compose([Validators.required])],
            'wpob': [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_5__Utility_Constant__["j" /* WITHOUT_FIRST_REGES_SPECIAL */])],
            'rel': [null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]],
            'currentLocation': [null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_5__Utility_Constant__["j" /* WITHOUT_FIRST_REGES_SPECIAL */])]],
            'resting': [null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_5__Utility_Constant__["j" /* WITHOUT_FIRST_REGES_SPECIAL */])]],
            // 'dop': [null, Validators.compose([Validators.required])]
            'dop': [null]
        });
    }
    NewPetStorie1Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NewPetStorie1Page');
        var today = new Date();
        var dd = ('0' + (today.getDate() - 1)).slice(-2);
        var mm = ('0' + (today.getMonth() + 1)).slice(-2); //January is 0!
        var yyyy = today.getFullYear();
        // console.log(mm);
        this.maxDate = yyyy + '-' + mm + '-' + dd;
        if (this.isEdit) {
            this.relationship = this.LifeStoryData.relationShip;
            this.lifeStoryForm.controls['relationship'].setValue(this.LifeStoryData.relationShip);
            this.lifeStoryForm.controls['wdob'].setValue(this.LifeStoryData.dobISO);
            this.lifeStoryForm.controls['wpob'].setValue(this.LifeStoryData.placeOfBirth);
            // this.lifeStoryForm.controls['rel'].setValue(this.LifeStoryData.alive);
            console.log(this.LifeStoryData.alive);
            if (this.LifeStoryData.alive) {
                this.rel = 'y';
                this.lifeStoryForm.controls['currentLocation'].setValue(this.LifeStoryData.currentLocation);
            }
            else {
                this.rel == 'n';
                this.lifeStoryForm.controls['rel'].setValue(this.LifeStoryData.alive ? 'y' : 'n');
                this.lifeStoryForm.controls['resting'].setValue(this.LifeStoryData.currentLocation);
                this.lifeStoryForm.controls['dop'].setValue(this.LifeStoryData.dodISO);
            }
            // this.lifeStoryForm.controls['currentLocation'].setValue(this.LifeStoryData.currentLocation);
            // this.lifeStoryForm.controls['resting'].setValue(this.LifeStoryData.currentLocation);
        }
        else {
            console.log("No data");
        }
    };
    NewPetStorie1Page.prototype.openStoryPage5 = function (lifeStoryData) {
        console.log("Heloo page5");
        this.isSubmit = true;
        console.log("++++++++++++++++++++++++++++");
        console.log(lifeStoryData.wdob);
        // for date of birth validation
        if (lifeStoryData.wdob != null) {
            var date2 = new Date(lifeStoryData.wdob);
            lifeStoryData.wdob = date2.getFullYear() + '-' + ('0' + (date2.getMonth() + 1)).slice(-2) + '-' + ('0' + (date2.getDate())).slice(-2);
        }
        if (lifeStoryData.wdob > this.maxDate) {
            this.isValidDate = true;
            console.log("isValidDate: ", this.isValidDate);
            // this.toastCtrl.create('Date of birth is not valid');
            return;
        }
        else {
            console.log("else");
            this.isValidDate = false;
        }
        if (lifeStoryData.dop != null) {
            var date = new Date(lifeStoryData.dop);
            lifeStoryData.dop = date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + ('0' + (date.getDate())).slice(-2);
            // for date of passing validation
        }
        if (lifeStoryData.dop > this.maxDate) {
            this.isWdobValidDate = true;
            console.log("isValidDate: ", this.isValidDate);
            // this.toastCtrl.create('Date of birth is not valid');
            return;
        }
        else {
            console.log("else");
            this.isWdobValidDate = false;
        }
        // if (lifeStoryData.relationship != null && lifeStoryData.wpob != null && lifeStoryData.relationship != "" && lifeStoryData.wpob != ""  ) {
        if (lifeStoryData.relationship != null && lifeStoryData.relationship != "") {
            console.log("Selected: :" + this.rel);
            if (this.rel == 'y') {
                console.log("Yes");
                if (lifeStoryData.currentLocation != null && lifeStoryData.currentLocation != "") {
                    this.submitLifeStory(lifeStoryData);
                }
            }
            else {
                console.log("No");
                this.isWdobValidDate = false;
                if (lifeStoryData.dop != null && lifeStoryData.wdob != null) {
                    if (lifeStoryData.dop > lifeStoryData.wdob && lifeStoryData.dop != "") {
                        this.submitLifeStory(lifeStoryData);
                    }
                    else {
                        this.isWdobValidDate = true;
                    }
                }
                if (lifeStoryData.dop == null && lifeStoryData.wdob == null) {
                    this.submitLifeStory(lifeStoryData);
                }
                else if (lifeStoryData.dop != null && lifeStoryData.wdob == null) {
                    this.submitLifeStory(lifeStoryData);
                }
                else if (lifeStoryData.dop == null && lifeStoryData.wdob != null) {
                    this.submitLifeStory(lifeStoryData);
                }
            }
        }
        else {
            console.log("Not valid");
        }
        if (lifeStoryData.rel == 'n') {
            this.isPersionAlive = false;
        }
        else {
            this.isPersionAlive = true;
        }
    };
    NewPetStorie1Page.prototype.submitLifeStory = function (lifeStoryData) {
        var _this = this;
        //debugger
        if (this.lifeStoryForm.controls['wpob'].valid && (this.lifeStoryForm.controls['currentLocation'].valid || this.lifeStoryForm.controls['resting'].valid)) {
            this.isSubmit = false;
            this.storage.get("userData").then(function (result) {
                if (result) {
                    // console.log(result.userInfoModel);
                    _this.userid = result.userInfoModel.userId;
                    if (_this.isEdit) {
                        var data = {
                            dateofBirth: lifeStoryData.wdob,
                            placeofBirth: lifeStoryData.wpob,
                            currentLocation: lifeStoryData.currentLocation,
                            relationShip: typeof (_this.relationship) == 'string' ? _this.LifeStoryData.relationShipId : _this.relationship,
                            ownerId: _this.LifeStoryData.ownerId,
                            ownerName: _this.LifeStoryData.ownerName,
                            isAlive: _this.isPersionAlive,
                            restingPlace: lifeStoryData.resting,
                            dateOfPassing: lifeStoryData.dop,
                            breed: _this.LifeStoryData.breed,
                            pedigree: _this.LifeStoryData.pedigree,
                            typeOfPet: _this.LifeStoryData.typeOfPet,
                            userType: _this.LifeStoryData.urnType,
                            urnType: _this.LifeStoryData.urnType,
                            defaultImage: _this.LifeStoryData.defaultImage,
                            defaultThumbImage200: _this.LifeStoryData.defaultThumbImage200
                        };
                        _this.navCtrl.push("NewLifeStorie5Page", { lifeStoryData: data, isEdit: _this.isEdit });
                    }
                    else {
                        var data = {
                            dateofBirth: lifeStoryData.wdob,
                            placeofBirth: lifeStoryData.wpob,
                            currentLocation: lifeStoryData.currentLocation,
                            relationShip: _this.relationship,
                            ownerId: result.userInfoModel.userId,
                            ownerName: _this.storyData.petName,
                            isAlive: _this.isPersionAlive,
                            restingPlace: lifeStoryData.resting,
                            dateOfPassing: lifeStoryData.dop,
                            breed: _this.storyData.breed,
                            pedigree: _this.storyData.pedigree,
                            typeOfPet: _this.storyData.typeOfPet,
                            userType: _this.storyData.userType
                        };
                        console.log(data);
                        _this.navCtrl.push("NewLifeStorie5Page", { lifeStoryData: data });
                    }
                }
            });
        }
        else {
            console.log("Form is invalid!");
        }
    };
    NewPetStorie1Page.prototype.openRelationship = function () {
        var _this = this;
        console.log("Hi openRelationship");
        //RelationshipPage
        var modal = this.modalCtrl.create("RelationshipPage", { relationType: '2' });
        modal.onDidDismiss(function (data) {
            console.log(data);
            _this.relationship = data.relationId;
            _this.lifeStoryForm.controls['relationship'].setValue(data.relationshipType);
            _this.lifeStoryForm.controls['relationship'].markAsTouched();
        });
        modal.present();
    };
    NewPetStorie1Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-new-pet-storie1',template:/*ion-inline-start:"/Users/kanikagupta/Documents/Modurn/modurn 2/src/pages/lifestory/lifeStoryCreation/new-pet-storie1/new-pet-storie1.html"*/'<ion-header no-border>\n\n  <ion-navbar>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="pet-story-outer">\n  <div class="story-cont">\n    <h1>A bit more info</h1>\n  </div>\n  <form [formGroup]="lifeStoryForm">\n    <ion-list>\n\n      <ion-item>\n        <ion-label stacked>Your relationship with your pet</ion-label>\n        <!--<ion-input type="text" [formControl]="lifeStoryForm.controls[\'relationship\']"></ion-input>-->\n        <ion-input disabled="true" type="text" (click)="openRelationship()" [formControl]="lifeStoryForm.controls[\'relationship\']"\n          spellcheck="true" autoComplete="true" autocorrect="true"></ion-input>\n      </ion-item>\n      <div *ngIf="isSubmit">\n        <div class="error-box" *ngIf="!lifeStoryForm.controls[\'relationship\'].valid"> Your relationship with your pet is required!</div>\n      </div>\n\n      <ion-item class="item-input">\n        <ion-label stacked>Date of birth</ion-label>\n        <ion-datetime style="padding-bottom: 2px;" displayFormat="DD MMM YYYY" pickerFormat="DD MMM YYYY" [formControl]="lifeStoryForm.controls[\'wdob\']"></ion-datetime>\n      </ion-item>\n      <div *ngIf="isSubmit">\n        <!-- <div class="error-box" *ngIf="!lifeStoryForm.controls[\'wdob\'].valid"> Date of birth is required!</div> -->\n        <div class="error-box" *ngIf="isValidDate"> Please select valid date of birth!</div>\n      </div>\n\n      <ion-item>\n        <ion-label stacked>Place of birth</ion-label>\n        <ion-input type="text" [formControl]="lifeStoryForm.controls[\'wpob\']" spellcheck="true" autoComplete="true" autocorrect="true"></ion-input>\n      </ion-item>\n      <div *ngIf="isSubmit">\n        <!-- <div class="error-box" *ngIf="!lifeStoryForm.controls[\'wpob\'].valid"> Place of birth is required!</div> -->\n        <div class="error-box" *ngIf="lifeStoryForm.controls[\'wpob\'].hasError(\'pattern\')">Please enter valid text.</div>\n      </div>\n\n      <div class="option-label">Is your pet alive?</div>\n      <ion-item class="option-box rel-select">\n        <ion-select [(ngModel)]="rel" [formControl]="lifeStoryForm.controls[\'rel\']" class="life-select">\n          <ion-option value="y">Yes</ion-option>\n          <ion-option value="n">No</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item *ngIf="rel == \'y\'">\n        <ion-label stacked>Current location</ion-label>\n        <ion-input type="text" [formControl]="lifeStoryForm.controls[\'currentLocation\']" spellcheck="true" autoComplete="true" autocorrect="true"></ion-input>\n      </ion-item>\n      <div *ngIf="isSubmit && rel == \'y\'">\n        <div class="error-box" *ngIf="!lifeStoryForm.controls[\'currentLocation\'].valid && lifeStoryForm.controls[\'currentLocation\'].hasError(\'required\')">Current location is required!</div>\n        <div class="error-box" *ngIf="lifeStoryForm.controls[\'currentLocation\'].hasError(\'pattern\')">Please enter valid text.</div>\n      </div>\n\n      <ion-item *ngIf="rel == \'n\'">\n        <ion-label stacked>Resting place</ion-label>\n        <ion-input type="text" [formControl]="lifeStoryForm.controls[\'resting\']" spellcheck="true" autoComplete="true" autocorrect="true"></ion-input>\n      </ion-item>\n      <div *ngIf="isSubmit && rel == \'n\'">\n        <!-- <div class="error-box" *ngIf="lifeStoryForm.controls[\'resting\'].hasError(\'required\') && lifeStoryForm.controls[\'resting\'].hasError(\'required\')">Resting place is required!</div> -->\n        <div class="error-box" *ngIf="lifeStoryForm.controls[\'resting\'].hasError(\'pattern\')">Please enter valid text.</div>\n      </div>\n\n      <ion-item *ngIf="rel == \'n\'" class="item-input">\n        <ion-label stacked>Date of passing</ion-label>\n        <ion-datetime style="padding-bottom: 2px;" displayFormat="DD MMM YYYY" pickerFormat="DD MMM YYYY" [formControl]="lifeStoryForm.controls[\'dop\']"></ion-datetime>\n      </ion-item>\n      <div *ngIf="isSubmit && rel == \'n\'">\n        <!-- <div class="error-box" *ngIf="!lifeStoryForm.controls[\'dop\'].valid"> Date of passing is required!</div> -->\n        <div class="error-box" *ngIf="isWdobValidDate && lifeStoryForm.controls[\'dop\'].valid"> Please select valid date of passing!</div>\n      </div>\n    </ion-list>\n\n    <button ion-button class="mr-t80 button_color" full color="dark" (click)="openStoryPage5(lifeStoryForm.value)">NEXT</button>\n\n  </form>\n</ion-content>\n<div class="progressbar">\n  <div class="pet-progress">\n    <div class="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style="width:45%">\n    </div>\n  </div>\n</div>'/*ion-inline-end:"/Users/kanikagupta/Documents/Modurn/modurn 2/src/pages/lifestory/lifeStoryCreation/new-pet-storie1/new-pet-storie1.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_toast_service_toast_service__["a" /* ToastServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]])
    ], NewPetStorie1Page);
    return NewPetStorie1Page;
}());

//# sourceMappingURL=new-pet-storie1.js.map

/***/ })

});
//# sourceMappingURL=16.js.map