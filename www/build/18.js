webpackJsonp([18],{

/***/ 752:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewLifeStorie3Module", function() { return NewLifeStorie3Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__new_life_storie3__ = __webpack_require__(795);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NewLifeStorie3Module = /** @class */ (function () {
    function NewLifeStorie3Module() {
    }
    NewLifeStorie3Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__new_life_storie3__["a" /* NewLifeStorie3Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__new_life_storie3__["a" /* NewLifeStorie3Page */]),
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__new_life_storie3__["a" /* NewLifeStorie3Page */]]
        })
    ], NewLifeStorie3Module);
    return NewLifeStorie3Module;
}());

//# sourceMappingURL=new-life-storie3.module.js.map

/***/ }),

/***/ 795:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewLifeStorie3Page; });
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







var NewLifeStorie3Page = /** @class */ (function () {
    function NewLifeStorie3Page(navCtrl, navParams, loadingCtrl, toastCtrl, nav, platform, alertCtrl, storage, geolocation, fb) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.nav = nav;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.geolocation = geolocation;
        this.fb = fb;
        this.search = false;
        this.isValid = false;
        this.isValidDate = false;
        this.userName = '';
        this.userid = 0;
        this.isEdit = false;
        this.progress = 75;
        this.userType = navParams.data.userType;
        console.log(navParams.data);
        //debugger;
        if (typeof navParams.data.data != 'undefined') {
            this.LifeStoryData = navParams.data.data.LifestoryData;
            console.log("    " + this.LifeStoryData);
            this.isEdit = navParams.data.data.isEdit;
            console.log("   " + this.isEdit);
        }
        this.lifeStoryForm = fb.group({
            // 'dob': [null, Validators.compose([Validators.required])], 
            'dob': [null],
            // 'pob': [null, Validators.compose([Validators.required])],
            'pob': [null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_6__Utility_Constant__["j" /* WITHOUT_FIRST_REGES_SPECIAL */])],
            'currLoc': [null, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_6__Utility_Constant__["j" /* WITHOUT_FIRST_REGES_SPECIAL */])]],
        });
        //debugger;
        // if (typeof this.LifeStoryData === 'undefined'){
        //   this.LifeStoryData = {};
        // }
    }
    NewLifeStorie3Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MyMapPage');
        // this.searchbar.nativeElement.placeholder = '';
        var today = new Date();
        var dd = ('0' + (today.getDate() - 1)).slice(-2);
        var mm = ('0' + (today.getMonth() + 1)).slice(-2); //January is 0!
        var yyyy = today.getFullYear();
        console.log(mm);
        this.maxDate = yyyy + '-' + mm + '-' + dd;
        if (this.isEdit) {
            console.log(this.LifeStoryData.dob);
            this.lifeStoryForm.controls['dob'].setValue(this.LifeStoryData.dobISO);
            this.lifeStoryForm.controls['pob'].setValue(this.LifeStoryData.placeOfBirth);
            this.lifeStoryForm.controls['currLoc'].setValue(this.LifeStoryData.currentLocation);
        }
        else {
            console.log("No data");
        }
    };
    NewLifeStorie3Page.prototype.openStoryPage5 = function (storyData) {
        var _this = this;
        //debugger
        console.log("Heloo page4");
        // console.log(storyData);
        this.isValid = true;
        if (storyData.dob) {
            var date = new Date(storyData.dob);
            storyData.dob = date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + ('0' + (date.getDate())).slice(-2);
        }
        if (storyData.dob > this.maxDate) {
            this.isValidDate = true;
            console.log("isValidDate: ", this.isValidDate);
            // this.toastCtrl.create('Date of birth is not valid');
            return;
        }
        else {
            this.isValidDate = false;
        }
        // if (storyData.dob != null && storyData.pob != null && storyData.currLoc != null && storyData.dob != "" && storyData.pob != "" && storyData.currLoc != "") {
        // if ( storyData.currLoc != null && storyData.currLoc != "") {
        if (this.lifeStoryForm.controls['currLoc'].valid && this.lifeStoryForm.controls['pob'].valid) {
            console.log("this.lifeStoryForm.valid::", this.lifeStoryForm);
            this.isValid = false;
            console.log("True dateofBirth:" + storyData.dob +
                " placeofBirth:" + storyData.pob +
                " currentLocation:" + storyData.currLoc);
            this.storage.get("userData").then(function (result) {
                if (result) {
                    console.log(result.userInfoModel);
                    _this.userid = result.userInfoModel.userId;
                    _this.userName = result.userInfoModel.userName;
                    var data = {};
                    if (_this.isEdit) {
                        data = {
                            isAlive: true,
                            userType: _this.userType,
                            urnType: _this.LifeStoryData.urnType,
                            ownerName: _this.userName,
                            ownerId: _this.LifeStoryData.ownerId,
                            relationShip: 1,
                            dateofBirth: storyData.dob,
                            placeofBirth: storyData.pob,
                            currentLocation: storyData.currLoc,
                            defaultImage: _this.LifeStoryData.defaultImage,
                            defaultThumbImage200: _this.LifeStoryData.defaultThumbImage200
                        };
                    }
                    else {
                        data = {
                            isAlive: true,
                            userType: _this.userType,
                            // urnType:this.LifeStoryData.urnType,
                            ownerName: _this.userName,
                            ownerId: '',
                            relationShip: 1,
                            dateofBirth: storyData.dob,
                            placeofBirth: storyData.pob,
                            currentLocation: storyData.currLoc,
                        };
                    }
                    // console.log(data);
                    _this.navCtrl.push('NewLifeStorie5Page', { lifeStoryData: data, isEdit: _this.isEdit });
                }
                else {
                    console.log("Not logged in");
                }
            });
        }
        else {
            console.log("False");
        }
    };
    NewLifeStorie3Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-new-life-storie3',template:/*ion-inline-start:"/Users/kanikagupta/Documents/Modurn/modurn 2/src/pages/lifestory/lifeStoryCreation/new-life-storie3/new-life-storie3.html"*/'<ion-header no-border>\n\n  <ion-navbar>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="story-outer">\n  <div class="story-cont">\n    <h1>Let\'s start</h1>\n  </div>\n  <form [formGroup]="lifeStoryForm">\n    <ion-list>\n\n      <ion-item class="item-input">\n        <ion-label stacked>Date of birth</ion-label>\n        <ion-icon class="icon icon-ic-calander" item-right></ion-icon>\n\n        <ion-input style="display:none" [formControl]="lifeStoryForm.controls[\'dob\']" class="hotfix"></ion-input>\n        <ion-datetime class="dobCal" displayFormat="DD MMM YYYY" pickerFormat="DD MMM YYYY" [formControl]="lifeStoryForm.controls[\'dob\']"\n          [class.invalid]="!lifeStoryForm.controls.dob.valid && (lifeStoryForm.controls.dob.dirty)" required></ion-datetime>\n      </ion-item>\n       <div *ngIf="isValid">\n        <!-- <div class="error-box" *ngIf="!lifeStoryForm.controls[\'dob\'].valid"> Date of birth is required!</div> -->\n        <div class="error-box" *ngIf="isValidDate"> Please select valid date of birth!</div>\n      </div> \n\n      <!--<ion-item class="search-input">\n        <div class="search-label">Place of birth</div>\n        <ion-icon class="icon icon-ic-location search-icon" item-right ></ion-icon>\n        <ion-searchbar class="story-searchbox" #searchbar placeholder="" [formControl]="lifeStoryForm.controls[\'pob\']"></ion-searchbar>\n        <div *ngIf="isValid">\n          <div *ngIf="!lifeStoryForm.controls[\'pob\'].valid && lifeStoryForm.controls[\'pob\'].hasError(\'required\')"> Place of birth is required!</div>\n        </div>\n      </ion-item>-->\n\n      <!--<ion-item>\n        <ion-label stacked>Place of birth</ion-label>\n        <ion-icon class="icon icon-ic-location search-icon" item-right></ion-icon>\n        <ion-input type="text" [formControl]="lifeStoryForm.controls[\'pob\']"></ion-input>\n      </ion-item>-->\n\n\n      <ion-item>\n        <ion-label stacked>Place of birth</ion-label>\n        <button ion-button clear type="button" item-right><ion-icon class="icon icon-ic-location icon-location" item-right ></ion-icon></button>\n        <ion-input type="text" [formControl]="lifeStoryForm.controls[\'pob\']" [ngClass]="{\'error-border\':!lifeStoryForm.controls[\'pob\'].valid}" spellcheck="true" autoComplete="true" autocorrect="true"></ion-input>\n      </ion-item>\n      <div *ngIf="isValid">\n          <div class="error-box"  *ngIf="lifeStoryForm.controls[\'pob\'].hasError(\'pattern\')">Please enter valid text.</div>\n\n        <!-- <div class="error-box" *ngIf="!lifeStoryForm.controls[\'pob\'].valid && lifeStoryForm.controls[\'pob\'].hasError(\'required\')">\n        Place of birth is required!</div> -->\n      </div> \n\n      <ion-item>\n        <ion-label stacked>Current location</ion-label>\n        <button ion-button clear type="button" item-right><ion-icon class="icon icon-ic-gps icon-location" item-right ></ion-icon></button>\n        <ion-input type="text" [formControl]="lifeStoryForm.controls[\'currLoc\']" [ngClass]="{\'error-border\':!lifeStoryForm.controls[\'currLoc\'].valid}" spellcheck="true" autoComplete="true" autocorrect="true"></ion-input>\n      </ion-item>\n      <!-- <div *ngIf="isValid">\n        <div class="error-box" *ngIf="!lifeStoryForm.controls[\'currLoc\'].valid && lifeStoryForm.controls[\'currLoc\'].hasError(\'required\')">\n        Current location is required!</div>\n        <div class="error-box"  *ngIf="lifeStoryForm.controls[\'currLoc\'].hasError(\'pattern\')">Please enter valid text.</div>\n      </div> -->\n\n      <!-- <div *ngIf="lifeStoryForm.controls[\'currLoc\'].errors && (lifeStoryForm.controls[\'currLoc\'].dirty || lifeStoryForm.controls[\'currLoc\'].touched)">\n          <div class="error-box" *ngIf="lifeStoryForm.controls[\'currLoc\'].errors.required">\n          Current location is required!</div>\n          <div class="error-box"  *ngIf="lifeStoryForm.controls[\'currLoc\'].errors.pattern">Please enter valid text.</div>\n        </div> -->\n\n        <div *ngIf="isValid">\n            <div class="error-box" *ngIf="!lifeStoryForm.controls[\'currLoc\'].valid && lifeStoryForm.controls[\'currLoc\'].hasError(\'required\')">\n            Current location is required!</div>\n            <div class="error-box"  *ngIf="lifeStoryForm.controls[\'currLoc\'].hasError(\'pattern\')">Please enter valid text.</div>\n          </div>\n\n    </ion-list>\n    <button ion-button class="mr-t80 button_color" full color="dark" (click)="openStoryPage5(lifeStoryForm.value)">NEXT</button>\n\n  </form>\n</ion-content>\n<div class="progressbar">\n  <div class="progress">\n    <div class="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style="width:75%">\n    </div>\n  </div>\n</div>'/*ion-inline-end:"/Users/kanikagupta/Documents/Modurn/modurn 2/src/pages/lifestory/lifeStoryCreation/new-life-storie3/new-life-storie3.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_toast_service_toast_service__["a" /* ToastServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */]])
    ], NewLifeStorie3Page);
    return NewLifeStorie3Page;
}());

//# sourceMappingURL=new-life-storie3.js.map

/***/ })

});
//# sourceMappingURL=18.js.map