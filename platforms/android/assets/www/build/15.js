webpackJsonp([15],{

/***/ 756:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PetStoryModule", function() { return PetStoryModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pet_story__ = __webpack_require__(799);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PetStoryModule = /** @class */ (function () {
    function PetStoryModule() {
    }
    PetStoryModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__pet_story__["a" /* PetStoryPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__pet_story__["a" /* PetStoryPage */]),
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__pet_story__["a" /* PetStoryPage */]]
        })
    ], PetStoryModule);
    return PetStoryModule;
}());

//# sourceMappingURL=pet-story.module.js.map

/***/ }),

/***/ 799:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PetStoryPage; });
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






var PetStoryPage = /** @class */ (function () {
    function PetStoryPage(navCtrl, navParams, loadingCtrl, toastCtrl, nav, platform, storage, fb) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.nav = nav;
        this.platform = platform;
        this.storage = storage;
        this.fb = fb;
        this.userName = '';
        this.userid = 0;
        this.isValid = false;
        this.isEdit = false;
        this.userType = navParams.data.userType;
        this.lifeStoryForm = fb.group({
            'petName': [null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_5__Utility_Constant__["j" /* WITHOUT_FIRST_REGES_SPECIAL */])]],
            'top': [null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_5__Utility_Constant__["j" /* WITHOUT_FIRST_REGES_SPECIAL */])]],
            'pedigree': [null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_5__Utility_Constant__["j" /* WITHOUT_FIRST_REGES_SPECIAL */])]],
            'breed': [null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_5__Utility_Constant__["j" /* WITHOUT_FIRST_REGES_SPECIAL */])]]
        });
        if (typeof navParams.data.data != 'undefined') {
            this.LifeStoryData = navParams.data.data.LifestoryData;
            console.log("    " + this.LifeStoryData);
            this.isEdit = navParams.data.data.isEdit;
            console.log("   " + this.isEdit);
        }
    }
    PetStoryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PetStoryPage');
        if (this.isEdit) {
            this.lifeStoryForm.controls['petName'].setValue(this.LifeStoryData.ownerName);
            this.lifeStoryForm.controls['top'].setValue(this.LifeStoryData.typeOfPet);
            this.lifeStoryForm.controls['pedigree'].setValue(this.LifeStoryData.pedigree);
            this.lifeStoryForm.controls['breed'].setValue(this.LifeStoryData.breed);
        }
        else {
            console.log("No data");
        }
    };
    PetStoryPage.prototype.openStoryPage4 = function (storyData) {
        console.log("Heloo pet user type: ", this.userType);
        console.log(storyData);
        this.isValid = true;
        //debugger
        if (this.lifeStoryForm.valid) {
            this.isValid = false;
            // if (storyData.petName != null && storyData.top != null && storyData.pedigree != null && storyData.breed != null && storyData.petName !== undefined && storyData.top !== undefined && storyData.pedigree !== undefined && storyData.breed !== undefined && storyData.petName != "" && storyData.top != "" && storyData.pedigree != "" && storyData.breed != "") {
            var data = {
                userType: this.userType,
                petName: storyData.petName,
                typeOfPet: storyData.top,
                breed: storyData.breed,
                pedigree: storyData.pedigree
            };
            console.log(this.isEdit);
            if (this.isEdit) {
                this.LifeStoryData.ownerName = storyData.petName;
                this.LifeStoryData.typeOfPet = storyData.top;
                this.LifeStoryData.breed = storyData.breed;
                this.LifeStoryData.pedigree = storyData.pedigree;
                this.LifeStoryData.userType = this.userType;
                this.navCtrl.push('NewPetStorie1Page', { data: { LifestoryData: this.LifeStoryData, isEdit: true } });
            }
            else {
                this.navCtrl.push('NewPetStorie1Page', { petStoryData: data });
            }
            // } else {
            //   this.isValid = true;
            //   console.log("False");
            // }
        }
        else {
            console.log("Invalid Form");
        }
    };
    PetStoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pet-story',template:/*ion-inline-start:"/Users/kanikagupta/Documents/Modurn/modurn 2/src/pages/lifestory/lifeStoryCreation/pet-story/pet-story.html"*/'<ion-header no-border>\n\n  <ion-navbar>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="pet-story-outer">\n  <div class="story-cont">\n    <h1>Let\'s start</h1>\n  </div>\n  <form [formGroup]="lifeStoryForm">\n    <ion-list>\n\n      <ion-item>\n        <ion-label stacked>Name of your pet</ion-label>\n        <ion-input type="text" [formControl]="lifeStoryForm.controls[\'petName\']" [ngClass]="{\'error-border\':!lifeStoryForm.controls[\'petName\'].valid}" spellcheck="true" autoComplete="true" autocorrect="true"></ion-input>\n      </ion-item>\n      <div *ngIf="isValid">\n        <div class="error-box" *ngIf="!lifeStoryForm.controls[\'petName\'].valid && lifeStoryForm.controls[\'petName\'].hasError(\'required\')">\n        Name of your pet is required!</div>\n        <div class="error-box"  *ngIf="lifeStoryForm.controls[\'petName\'].hasError(\'pattern\')">Please enter valid text.</div>\n      </div>\n\n      <ion-item>\n        <ion-label stacked>Type of pet</ion-label>\n        <ion-input type="text" [formControl]="lifeStoryForm.controls[\'top\']" [ngClass]="{\'error-border\':!lifeStoryForm.controls[\'top\'].valid}" spellcheck="true" autoComplete="true" autocorrect="true"></ion-input>\n      </ion-item>\n      <div *ngIf="isValid">\n        <div class="error-box" *ngIf="!lifeStoryForm.controls[\'top\'].valid && lifeStoryForm.controls[\'top\'].hasError(\'required\')">\n        Type of pet is required!</div>\n        <div class="error-box"  *ngIf="lifeStoryForm.controls[\'top\'].hasError(\'pattern\')">Please enter valid text.</div>\n      </div>\n\n      <ion-item>\n        <ion-label stacked>Pedigree</ion-label>\n        <ion-input type="text" [formControl]="lifeStoryForm.controls[\'pedigree\']" [ngClass]="{\'error-border\':!lifeStoryForm.controls[\'pedigree\'].valid}" spellcheck="true" autoComplete="true" autocorrect="true"></ion-input>\n      </ion-item>\n      <div *ngIf="isValid">\n        <div class="error-box" *ngIf="!lifeStoryForm.controls[\'pedigree\'].valid && lifeStoryForm.controls[\'pedigree\'].hasError(\'required\')">\n        Pedigree is required!</div>\n        <div class="error-box"  *ngIf="lifeStoryForm.controls[\'pedigree\'].hasError(\'pattern\')">Please enter valid text.</div>\n      </div>\n\n      <ion-item>\n        <ion-label stacked>Breed</ion-label>\n        <ion-input type="text" [formControl]="lifeStoryForm.controls[\'breed\']" [ngClass]="{\'error-border\':!lifeStoryForm.controls[\'breed\'].valid}" spellcheck="true" autoComplete="true" autocorrect="true"></ion-input>\n      </ion-item>\n      <div *ngIf="isValid">\n        <div class="error-box" *ngIf="!lifeStoryForm.controls[\'breed\'].valid && lifeStoryForm.controls[\'breed\'].hasError(\'required\')">\n        Breed is required!</div>\n        <div class="error-box"  *ngIf="lifeStoryForm.controls[\'breed\'].hasError(\'pattern\')">Please enter valid text.</div>\n      </div>\n\n    </ion-list>\n    <button ion-button class="mr-t80 button_color" full color="dark" (click)="openStoryPage4(lifeStoryForm.value)">NEXT</button>\n\n  </form>\n</ion-content>\n<div class="progressbar">\n  <div class="pet-progress">\n    <div class="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style="width:25%">\n    </div>\n  </div>\n</div>'/*ion-inline-end:"/Users/kanikagupta/Documents/Modurn/modurn 2/src/pages/lifestory/lifeStoryCreation/pet-story/pet-story.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_toast_service_toast_service__["a" /* ToastServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]])
    ], PetStoryPage);
    return PetStoryPage;
}());

//# sourceMappingURL=pet-story.js.map

/***/ })

});
//# sourceMappingURL=15.js.map