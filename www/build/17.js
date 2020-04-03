webpackJsonp([17],{

/***/ 753:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewLifeStorie4Module", function() { return NewLifeStorie4Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__new_life_storie4__ = __webpack_require__(796);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NewLifeStorie4Module = /** @class */ (function () {
    function NewLifeStorie4Module() {
    }
    NewLifeStorie4Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__new_life_storie4__["a" /* NewLifeStorie4Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__new_life_storie4__["a" /* NewLifeStorie4Page */]),
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__new_life_storie4__["a" /* NewLifeStorie4Page */]]
        })
    ], NewLifeStorie4Module);
    return NewLifeStorie4Module;
}());

//# sourceMappingURL=new-life-storie4.module.js.map

/***/ }),

/***/ 796:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewLifeStorie4Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_toast_service_toast_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Utility_Constant__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var NewLifeStorie4Page = /** @class */ (function () {
    function NewLifeStorie4Page(navCtrl, navParams, toastCtrl, loadingCtrl, nav, platform, modalCtrl, alertCtrl, storage, geolocation, fb) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.nav = nav;
        this.platform = platform;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.geolocation = geolocation;
        this.fb = fb;
        this.rel = "y";
        this.isSubmit = false;
        this.userid = 0;
        this.isPersionAlive = false;
        this.isValidDate = false;
        this.isWdobValidDate = false;
        this.isEdit = false;
        this.storyData = navParams.data.userType;
        this.progress = 75;
        this.rel = "y";
        //debugger
        if (typeof navParams.data.data != 'undefined') {
            this.LifeStoryData = navParams.data.data.LifestoryData;
            console.log("    " + this.LifeStoryData);
            this.isEdit = navParams.data.data.isEdit;
            console.log("   " + this.isEdit);
        }
        this.lifeStoryForm = fb.group({
            'owner': [null, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_6__Utility_Constant__["j" /* WITHOUT_FIRST_REGES_SPECIAL */])]],
            'relationship': [null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required])],
            // 'wdob': [null, Validators.compose([Validators.required])],
            'wdob': [null],
            'wpob': [null, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_6__Utility_Constant__["j" /* WITHOUT_FIRST_REGES_SPECIAL */])]],
            'rel': [null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
            'currentLocation': [null, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_6__Utility_Constant__["j" /* WITHOUT_FIRST_REGES_SPECIAL */])]],
            'resting': [null, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_6__Utility_Constant__["j" /* WITHOUT_FIRST_REGES_SPECIAL */])]],
            // 'dop': [null, Validators.compose([Validators.required])],
            'dop': [null],
            'causeofdeath': [null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_6__Utility_Constant__["j" /* WITHOUT_FIRST_REGES_SPECIAL */])]
        });
    }
    NewLifeStorie4Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NewLifeStorie4Page');
        var today = new Date();
        var dd = ('0' + (today.getDate() - 1)).slice(-2);
        var mm = ('0' + (today.getMonth() + 1)).slice(-2); //January is 0!
        var yyyy = today.getFullYear();
        console.log(mm);
        this.maxDate = yyyy + '-' + mm + '-' + dd;
        if (this.isEdit) {
            this.relationship = this.LifeStoryData.relationShip;
            this.lifeStoryForm.controls['owner'].setValue(this.LifeStoryData.ownerName);
            this.lifeStoryForm.controls['relationship'].setValue(this.LifeStoryData.relationShip);
            this.lifeStoryForm.controls['wdob'].setValue(this.LifeStoryData.dobISO);
            this.lifeStoryForm.controls['wpob'].setValue(this.LifeStoryData.placeOfBirth);
            // this.lifeStoryForm.controls['rel'].setValue(this.LifeStoryData.alive);
            if (this.LifeStoryData.alive) {
                this.rel = 'y';
                this.lifeStoryForm.controls['currentLocation'].setValue(this.LifeStoryData.currentLocation);
            }
            else {
                this.rel == 'n';
                this.lifeStoryForm.controls['rel'].setValue(this.LifeStoryData.alive ? 'y' : 'n');
                this.lifeStoryForm.controls['resting'].setValue(this.LifeStoryData.currentLocation);
                this.lifeStoryForm.controls['dop'].setValue(this.LifeStoryData.dodISO);
                this.lifeStoryForm.controls['causeofdeath'].setValue(this.LifeStoryData.causeOfDeath);
            }
        }
        else {
            console.log("No data");
        }
    };
    NewLifeStorie4Page.prototype.openStoryPage5 = function (lifeStoryData) {
        //debugger
        console.log("Heloo page5");
        this.isSubmit = true;
        if (this.checkFirstSpace(lifeStoryData.currentLocation)) {
            // console.log('vikas is true');
        }
        else {
            // console.log('vikas is false');
        }
        if (this.isEdit || this.rel != lifeStoryData.rel) {
            if (lifeStoryData.wdob != null) {
                var date = new Date(lifeStoryData.wdob);
                lifeStoryData.wdob = date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + ('0' + (date.getDate())).slice(-2);
            }
        }
        // for date of birth validation
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
        if (this.rel == 'y' && lifeStoryData.dop != null) {
            lifeStoryData.dop = null;
        }
        if (this.isEdit && this.rel == 'n' && lifeStoryData.dop != null) {
            // for date of passing validation
            var date2 = new Date(lifeStoryData.dop);
            lifeStoryData.dop = date2.getFullYear() + '-' + ('0' + (date2.getMonth() + 1)).slice(-2) + '-' + ('0' + (date2.getDate())).slice(-2);
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
        console.log("this.rel == 'y'+++++++++++++++++++++++ " + this.rel);
        console.log("+++++++++++++++++++++++++++++ " + this.isWdobValidDate);
        console.log(lifeStoryData);
        if (lifeStoryData.owner != null && lifeStoryData.relationship != null && lifeStoryData.wpob != null && lifeStoryData.owner != "" && lifeStoryData.relationship != "" && lifeStoryData.wpob != "") {
            console.log("Selected: :" + this.rel);
            if (this.rel == 'y') {
                console.log("Yes");
                if (lifeStoryData.currentLocation != null && lifeStoryData.currentLocation != "") {
                    this.submitLifeStory(lifeStoryData);
                }
            }
            else {
                // console.log("No");
                // console.log("checking::::"+this.isValidDate)
                // if (lifeStoryData.dop != null && lifeStoryData.resting != null && lifeStoryData.dop != "" && lifeStoryData.resting != "") {
                //             this.submitLifeStory(lifeStoryData);
                // }
                this.isWdobValidDate = false;
                if (lifeStoryData.dop != null && lifeStoryData.wdob != null) {
                    if (lifeStoryData.dop != null && lifeStoryData.dop > lifeStoryData.wdob && this.isWdobValidDate == false) {
                        this.submitLifeStory(lifeStoryData);
                    }
                    else {
                        console.log("dop is not valid");
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
    NewLifeStorie4Page.prototype.submitLifeStory = function (lifeStoryData) {
        var _this = this;
        //debugger
        if (this.lifeStoryForm.controls['owner'].valid && this.lifeStoryForm.controls['wpob'].valid && (this.lifeStoryForm.controls['currentLocation'].valid || this.lifeStoryForm.controls['resting'].valid) && this.lifeStoryForm.controls['causeofdeath'].valid) {
            this.isSubmit = false;
            this.storage.get("userData").then(function (result) {
                if (result) {
                    console.log(result.userInfoModel);
                    _this.userid = result.userInfoModel.userId;
                    // relationShipId
                    var data = {};
                    if (_this.isEdit) {
                        data = {
                            userType: _this.storyData,
                            urnType: _this.LifeStoryData.urnType,
                            dateofBirth: lifeStoryData.wdob,
                            placeofBirth: lifeStoryData.wpob,
                            currentLocation: lifeStoryData.currentLocation,
                            relationShip: typeof (_this.relationship) == 'string' ? _this.LifeStoryData.relationShipId : _this.relationship,
                            ownerId: _this.LifeStoryData.ownerId,
                            ownerName: lifeStoryData.owner,
                            causeOfDeath: lifeStoryData.causeofdeath,
                            // relationShip: lifeStoryData.relationship,
                            isAlive: _this.isPersionAlive,
                            restingPlace: lifeStoryData.resting,
                            dateOfPassing: lifeStoryData.dop,
                            defaultImage: _this.LifeStoryData.defaultImage,
                            defaultThumbImage200: _this.LifeStoryData.defaultThumbImage200,
                        };
                    }
                    else {
                        data = {
                            userType: _this.storyData,
                            urnType: _this.storyData,
                            dateofBirth: lifeStoryData.wdob,
                            placeofBirth: lifeStoryData.wpob,
                            currentLocation: lifeStoryData.currentLocation,
                            relationShip: _this.relationship,
                            causeOfDeath: lifeStoryData.causeofdeath,
                            ownerId: '',
                            ownerName: lifeStoryData.owner,
                            // relationShip: lifeStoryData.relationship,
                            isAlive: _this.isPersionAlive,
                            restingPlace: lifeStoryData.resting,
                            dateOfPassing: lifeStoryData.dop
                        };
                    }
                    console.log(data);
                    if (_this.isEdit) {
                        _this.navCtrl.push('NewLifeStorie5Page', { lifeStoryData: data, isEdit: true });
                    }
                    else {
                        _this.navCtrl.push('NewLifeStorie5Page', { lifeStoryData: data });
                    }
                }
            });
        }
        else {
            console.log("Invalid Form");
        }
    };
    NewLifeStorie4Page.prototype.checkFirstSpace = function (str) {
        if (str) {
            str = str.trimLeft();
            if (str.length == 0) {
                return false;
            }
            else {
                return true;
            }
        }
        else {
            return false;
        }
    };
    NewLifeStorie4Page.prototype.openRelationship = function () {
        var _this = this;
        console.log("Hi openRelationship");
        //RelationshipPage
        var modal = this.modalCtrl.create("RelationshipPage", { relationType: '1' });
        modal.onDidDismiss(function (data) {
            console.log(data);
            _this.relationship = data.relationId;
            _this.lifeStoryForm.controls['relationship'].setValue(data.relationshipType);
            _this.lifeStoryForm.controls['relationship'].markAsTouched();
        });
        modal.present();
    };
    NewLifeStorie4Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-new-life-storie4',template:/*ion-inline-start:"/Users/kanikagupta/Documents/Modurn/modurn 2/src/pages/lifestory/lifeStoryCreation/new-life-storie4/new-life-storie4.html"*/'<ion-header no-border>\n\n  <ion-navbar>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="story-outer">\n  <div class="story-cont">\n    <h1>Let\'s start</h1>\n  </div>\n  <form [formGroup]="lifeStoryForm">\n    <ion-list>\n\n      <ion-item>\n        <ion-label stacked>What is the name of the life story owner?</ion-label>\n        <ion-icon class="icon icon-ic-profile" item-right></ion-icon>\n        <ion-input type="text" [formControl]="lifeStoryForm.controls[\'owner\']" spellcheck="true" autoComplete="true" autocorrect="true"></ion-input>\n      </ion-item>\n      <div *ngIf="isSubmit">\n        <div class="error-box" *ngIf="!lifeStoryForm.controls[\'owner\'].valid && lifeStoryForm.controls[\'owner\'].hasError(\'required\')"> Name is required!</div>\n        <div class="error-box" *ngIf="lifeStoryForm.controls[\'owner\'].hasError(\'pattern\')">Please enter valid text.</div>\n      </div>\n\n      <ion-item>\n        <ion-label stacked>What is your relationship with them?</ion-label>\n        <ion-icon class="icon icon-ic-relationship" item-right></ion-icon>\n        <ion-input disabled="true" type="text" (click)="openRelationship()" [formControl]="lifeStoryForm.controls[\'relationship\']"\n          spellcheck="true" autoComplete="true" autocorrect="true"></ion-input>\n      </ion-item>\n      <div *ngIf="isSubmit">\n        <div class="error-box" *ngIf="!lifeStoryForm.controls[\'relationship\'].valid"> Relationship is required!</div>\n      </div>\n\n      <ion-item class="item-input">\n        <ion-label stacked>Date of birth</ion-label>\n        <ion-icon class="icon icon-ic-calander" item-right></ion-icon>\n        <!--<ion-input type="date"></ion-input>-->\n        <ion-datetime style="padding-bottom: 2px;" displayFormat="DD MMM YYYY" pickerFormat="DD MMM YYYY" [formControl]="lifeStoryForm.controls[\'wdob\']"></ion-datetime>\n\n      </ion-item>\n      <div *ngIf="isSubmit">\n        <!-- <div class="error-box" *ngIf="!lifeStoryForm.controls[\'wdob\'].valid"> Date of birth is required!</div> -->\n        <div class="error-box" *ngIf="isValidDate"> Please select valid date of birth!</div>\n      </div>\n\n      <!--<ion-item class="search-input">\n        <div class="search-label">Place of birth</div>\n        <ion-icon class="icon icon-ic-location search-icon" item-right></ion-icon>\n        <ion-searchbar class="story-searchbox" #searchbar placeholder="" [formControl]="lifeStoryForm.controls[\'wpob\']"></ion-searchbar>\n      </ion-item>-->\n      <!--<ion-item>\n        <ion-label stacked>Place of birth</ion-label>\n        <ion-icon class="icon icon-ic-location search-icon" item-right></ion-icon>\n        <ion-input type="text" [formControl]="lifeStoryForm.controls[\'wpob\']"></ion-input>\n      </ion-item>\n      <div *ngIf="isSubmit">\n        <div class="error-box" *ngIf="!lifeStoryForm.controls[\'wpob\'].valid"> Place of birth is required!</div>\n      </div>-->\n\n      <ion-item>\n        <ion-label stacked>Place of birth</ion-label>\n        <ion-icon class="icon icon-ic-location" item-right></ion-icon>\n        <ion-input type="text" [formControl]="lifeStoryForm.controls[\'wpob\']" spellcheck="true" autoComplete="true" autocorrect="true"></ion-input>\n      </ion-item>\n      <div *ngIf="isSubmit">\n        <div class="error-box" *ngIf="!lifeStoryForm.controls[\'wpob\'].valid && lifeStoryForm.controls[\'wpob\'].hasError(\'required\')"> Place of birth is required!</div>\n        <div class="error-box" *ngIf="lifeStoryForm.controls[\'wpob\'].hasError(\'pattern\')">Please enter valid text.</div>\n      </div>\n\n      <div class="option-label">Is the life story owner still with us?</div>\n      <ion-item class="option-box rel-select">\n\n        <ion-icon class="icon {{rel==\'y\'? \'icon-ic-heart\':\'icon-ic-angel\'}}" item-right></ion-icon>\n        <ion-select [(ngModel)]="rel" [formControl]="lifeStoryForm.controls[\'rel\']" class="life-select">\n          <ion-option value="y">Yes</ion-option>\n          <ion-option value="n">No</ion-option>\n        </ion-select>\n        <div *ngIf="isSubmit">\n          <!--<div *ngIf="!lifeStoryForm.controls[\'rel\'].valid"> Selection is required!</div>-->\n        </div>\n      </ion-item>\n\n      <ion-item *ngIf="rel == \'y\'">\n        <ion-label stacked>Current location</ion-label>\n        <button ion-button clear type="button" item-right>\n          <ion-icon item-right class="icon icon-ic-gps icon-location"></ion-icon>\n        </button>\n        <ion-input type="text" [formControl]="lifeStoryForm.controls[\'currentLocation\']" spellcheck="true" autoComplete="true" autocorrect="true"></ion-input>\n\n      </ion-item>\n      <div *ngIf="isSubmit && rel == \'y\'">\n          <div class="error-box" *ngIf="!lifeStoryForm.controls[\'currentLocation\'].valid && lifeStoryForm.controls[\'currentLocation\'].hasError(\'required\')">Current place is required!</div>\n<!--         \n        <div class="error-box" *ngIf="!lifeStoryForm.controls[\'currentLocation\'].valid && lifeStoryForm.controls[\'currentLocation\'].hasError(\'required\')">Current location is required!</div>\n        <div class="error-box" *ngIf="lifeStoryForm.controls[\'currentLocation\'].hasError(\'pattern\')">Please enter valid text.</div> -->\n      </div>\n\n      <ion-item *ngIf="rel == \'n\'">\n        <ion-label stacked>Cause of death</ion-label>\n        <!-- <ion-icon class="icon icon-resting" item-right></ion-icon> -->\n        <ion-input type="text" [formControl]="lifeStoryForm.controls[\'causeofdeath\']" spellcheck="true" autoComplete="true" autocorrect="true"></ion-input>\n      </ion-item>\n      <div *ngIf="isSubmit && rel == \'n\'">\n        <div class="error-box" *ngIf="lifeStoryForm.controls[\'causeofdeath\'].hasError(\'pattern\')">Please enter valid text.</div>\n      </div>\n\n      <ion-item *ngIf="rel == \'n\'">\n        <ion-label stacked>Resting place (If applicable)</ion-label>\n        <ion-icon class="icon icon-resting" item-right></ion-icon>\n        <ion-input type="text" [formControl]="lifeStoryForm.controls[\'resting\']" spellcheck="true" autoComplete="true" autocorrect="true"></ion-input>\n\n      </ion-item>\n      <div *ngIf="isSubmit && rel == \'n\'">\n        <!-- <div class="error-box" *ngIf="!lifeStoryForm.controls[\'resting\'].valid && lifeStoryForm.controls[\'resting\'].hasError(\'required\')">Resting place is required!</div> -->\n        <div class="error-box" *ngIf="lifeStoryForm.controls[\'resting\'].hasError(\'pattern\')">Please enter valid text.</div>\n      </div>\n\n      <ion-item *ngIf="rel == \'n\'" class="item-input">\n        <ion-label stacked>Date of passing</ion-label>\n        <ion-icon class="icon icon-ic-calander" item-right></ion-icon>\n        <!--<ion-input type="date"></ion-input>-->\n        <ion-datetime style="padding-bottom: 2px;" displayFormat="DD MMM YYYY" pickerFormat="DD MMM YYYY" [formControl]="lifeStoryForm.controls[\'dop\']"></ion-datetime>\n\n      </ion-item>\n      <div *ngIf="isSubmit && rel == \'n\'">\n        <!-- <div class="error-box" *ngIf="!lifeStoryForm.controls[\'dop\'].valid"> Date of passing is required!</div> -->\n        <div class="error-box" *ngIf="isWdobValidDate && lifeStoryForm.controls[\'dop\'].valid"> Please select valid date of passing!</div>\n      </div>\n    </ion-list>\n\n    <button ion-button class="mr-t80 button_color" full color="dark" (click)="openStoryPage5(lifeStoryForm.value)">NEXT</button>\n\n  </form>\n</ion-content>\n<div class="progressbar">\n  <div class="progress">\n    <div class="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style="width:75%">\n    </div>\n  </div>\n</div>'/*ion-inline-end:"/Users/kanikagupta/Documents/Modurn/modurn 2/src/pages/lifestory/lifeStoryCreation/new-life-storie4/new-life-storie4.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5__providers_toast_service_toast_service__["a" /* ToastServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */]])
    ], NewLifeStorie4Page);
    return NewLifeStorie4Page;
}());

//# sourceMappingURL=new-life-storie4.js.map

/***/ })

});
//# sourceMappingURL=17.js.map