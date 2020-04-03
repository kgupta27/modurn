webpackJsonp([10],{

/***/ 742:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceDetailsModule", function() { return ExperienceDetailsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__experienceDetails__ = __webpack_require__(785);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_bg_image_with_loader_bg_image_with_loader_module__ = __webpack_require__(763);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ExperienceDetailsModule = /** @class */ (function () {
    function ExperienceDetailsModule() {
    }
    ExperienceDetailsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__experienceDetails__["a" /* ExperienceDetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__experienceDetails__["a" /* ExperienceDetailsPage */]), __WEBPACK_IMPORTED_MODULE_3__components_bg_image_with_loader_bg_image_with_loader_module__["a" /* BgImageWithLoaderPageModule */]
            ],
        })
    ], ExperienceDetailsModule);
    return ExperienceDetailsModule;
}());

//# sourceMappingURL=experienceDetails.module.js.map

/***/ }),

/***/ 763:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BgImageWithLoaderPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bg_image_with_loader__ = __webpack_require__(764);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BgImageWithLoaderPageModule = /** @class */ (function () {
    function BgImageWithLoaderPageModule() {
    }
    BgImageWithLoaderPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__bg_image_with_loader__["a" /* BgImageWithLoader */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__bg_image_with_loader__["a" /* BgImageWithLoader */]),
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__bg_image_with_loader__["a" /* BgImageWithLoader */]]
        })
    ], BgImageWithLoaderPageModule);
    return BgImageWithLoaderPageModule;
}());

//# sourceMappingURL=bg-image-with-loader.module.js.map

/***/ }),

/***/ 764:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BgImageWithLoader; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BgImageWithLoader = /** @class */ (function () {
    function BgImageWithLoader() {
        this.image = '';
        this.type = '';
        this.dummyImage = 'assets/imgs/human.jpg';
        this.loaderImage = 'assets/img/image-loader.svg';
        this.isLoaderTimeExpired = false;
    }
    BgImageWithLoader.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            if (!_this.image) {
                _this.setImage();
            }
        }, 500);
        setTimeout(function () {
            _this.setImage();
        }, 10000);
    };
    BgImageWithLoader.prototype.setImage = function () {
        if (this.type == 'pet') {
            this.loaderImage = 'assets/img/pet.png';
        }
        else if (this.type == 'exp') {
            this.loaderImage = 'assets/img/Experience_Default.png';
        }
        else {
            this.loaderImage = this.dummyImage;
        }
        this.isLoaderTimeExpired = true;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], BgImageWithLoader.prototype, "image", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], BgImageWithLoader.prototype, "type", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], BgImageWithLoader.prototype, "dummyImage", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], BgImageWithLoader.prototype, "loaderImage", void 0);
    BgImageWithLoader = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'bg-image-with-loader',template:/*ion-inline-start:"/Users/kanikagupta/Documents/Modurn/modurn 2/src/components/bg-image-with-loader/bg-image-with-loader.html"*/'<div class="background-img-loader" [class.loader-time-expired]="isLoaderTimeExpired" [style.background-image]="\'url(\'+ loaderImage +\')\'"></div>\n<div class="background-img-main" [style.background-image]="\'url(\'+ image +\')\'"></div>'/*ion-inline-end:"/Users/kanikagupta/Documents/Modurn/modurn 2/src/components/bg-image-with-loader/bg-image-with-loader.html"*/,
        })
    ], BgImageWithLoader);
    return BgImageWithLoader;
}());

//# sourceMappingURL=bg-image-with-loader.js.map

/***/ }),

/***/ 785:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExperienceDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_WebServices_LifeStory_InterestnPassionService__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_WebServices_LifeStory_LifeStoryService__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_toast_service_toast_service__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ExperienceDetailsPage = /** @class */ (function () {
    function ExperienceDetailsPage(navCtrl, navParams, popoverCtrl, 
        // private socialSharing: SocialSharing,
        storage, viewCtrl, lifeStoryService, actionSheetCtrl, toastProvider, interestPassionService, modalCtrl) {
        // this.roleId = navParams.data.expIdData.roleId;
        // this.selectedItem = navParams.get('item');
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.storage = storage;
        this.viewCtrl = viewCtrl;
        this.lifeStoryService = lifeStoryService;
        this.actionSheetCtrl = actionSheetCtrl;
        this.toastProvider = toastProvider;
        this.interestPassionService = interestPassionService;
        this.modalCtrl = modalCtrl;
        this.isPending = false;
        this.bgColor = '';
        this.expData = [];
        this.isAlbum = false;
        this.userId = 0;
        try {
            this.expData = navParams.get('expIdData');
            // this.lifeStatus == "pending";
            // this.images = ['11.jpg', '22.jpg', '33.jpg', '44.jpg', '55.jpg'];
            this.bgColor = 'assets/img/Group2.png';
            this.ownerInfo = localStorage.getItem("lifeStoryData");
            this.ownerInfo = JSON.parse(this.ownerInfo);
            this.ownerId = this.ownerInfo.ownerId;
            this.getExperineceDetails();
        }
        catch (e) {
            console.log("expereince e = ", e);
        }
        this.storage.get("userData").then(function (result) {
            _this.userId = result.userInfoModel.userId;
        });
    }
    ExperienceDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage lifeStatus : ', this.lifeStatus);
        if (this.lifeStatus == "pending") {
            this.isPending = true;
        }
    };
    ExperienceDetailsPage.prototype.getExperineceDetails = function () {
        var _this = this;
        this.storage.get("userData").then(function (result) {
            _this.lifeStoryService.fetExperience(_this.expData)
                .then(function (data) {
                _this.expData = data;
                _this.expData = _this.expData.data;
                if (_this.expData.experienceGallery.length > 0) {
                    // this.bgColor = this.expData.experienceGallery[0].imageMediumUrl500;
                    _this.isAlbum = true;
                }
            }, function (error) {
                console.log(error);
            });
        });
    };
    ExperienceDetailsPage.prototype.actionExpDet = function () {
        var actionSheet = this.actionSheetCtrl.create({
            buttons: [
                {
                    text: 'Modify',
                    handler: function () {
                        console.log('Modify... ');
                        // let navTransition = actionSheet.dismiss();
                        // return false;
                    }
                },
                {
                    text: 'Delete',
                    role: 'destructive',
                    handler: function () {
                        console.log('Deleting... ');
                        // let navTransition = actionSheet.dismiss();
                        // return false;
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    ExperienceDetailsPage.prototype.experienceStatus = function (status) {
        var _this = this;
        console.log("Experience Status PUT method.");
        console.log("status== " + status);
        this.expData.accept = status;
        this.expData.status = status;
        this.expData.userId = this.userId;
        this.expData.ownerId = this.ownerId;
        this.interestPassionService.putExperienceStatus(this.expData)
            .then(function (data) {
            console.log('life story data =', data);
            var experienceObject;
            experienceObject = data;
            if (experienceObject.responseCode == '200') {
                _this.viewCtrl.dismiss(data);
                var message = experienceObject.data;
                _this.toastProvider.create(message);
            }
        }, function (error) {
            console.log(error);
        });
    };
    ExperienceDetailsPage.prototype.closeExperienceDetails = function () {
        this.viewCtrl.dismiss();
    };
    ExperienceDetailsPage.prototype.openExperienceGallary = function () {
        console.log(" this.expData.experienceGallery:: ", this.expData.experienceGallery);
        var galleryModal = this.modalCtrl.create('ExperienceGallaryPage', {
            'imageModel': this.expData.experienceGallery, 'parms': {
                'userid': this.userId,
                'ownerId': this.ownerId,
            }
        });
        galleryModal.present();
    };
    ExperienceDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'experience-details',template:/*ion-inline-start:"/Users/kanikagupta/Documents/Modurn/modurn 2/src/pages/lifestory/experienceDetails/experienceDetails.html"*/'<ion-content fullscreen class="storyContent">\n  <ion-header no-border>\n    <ion-navbar transparent>\n      <ion-buttons left (click)="closeExperienceDetails()">\n        <button class="btnColor cross-icn" ion-button icon-only>\n            <ion-icon class="icon icon-ic-back-arrow" item-right></ion-icon>\n          </button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n\n  <div class="exp-bg" *ngIf="!isAlbum"[ngStyle]="{\'background-image\': \'url(\' + bgColor +\')\'}"></div>\n  <div class="exp-bg" *ngIf="isAlbum">\n  <ion-slides #slides>\n    <ion-slide *ngFor="let img of expData.experienceGallery;">\n      <div class="swiper-zoom-container exp-detail-header">\n        <!-- <img [src]="img.imageMediumUrl500"> -->\n        <bg-image-with-loader type="exp" [image]="img.imageUrl"></bg-image-with-loader>\n      </div>\n    </ion-slide>\n  </ion-slides>\n  </div>\n  <div class="exp-det-padding" style="padding-bottom:  0px;">\n    <div class="health-outer-first">\n      <div class="helth-title">Experience</div>\n      <div class="p_content-first">\n        {{expData.title}}\n      </div>\n    </div>\n    <div class="exp-outer">\n      <div class="helth-title">Where did this happen?</div>\n      <div class="p_content">\n        {{expData.experiencePlace}}\n      </div>\n    </div>\n    <div class="health-outer" *ngIf="expData.experienceDate">\n      <div class="helth-title">When did this happen?</div>\n      <div class="p_content">\n        {{expData.experienceDate}}\n      </div>\n    </div>\n    <div class="health-outer">\n      <div class="helth-title">Who was with you?</div>\n      <div class="p_content">\n        {{expData.personWithYou}}\n      </div>\n    </div>\n\n    <div class="health-outer">\n        <div class="helth-title">Experience details</div>\n        <div class="p_content">\n          {{expData.despcription}}\n        </div>\n      </div>\n\n    <!-- <div class="health-outer">\n      <div class="exp-details">Experience details</div>\n      <div class="helth-title-exp">\n        {{expData.despcription}}\n      </div>\n    </div> -->\n  </div>\n\n  <div *ngIf="isAlbum">\n    <ion-grid class="life-story-content">\n      <ion-row>\n        <!-- <ion-col col-6 class="album-container">\n          <div class="album-center">ALBUM</div>\n        </ion-col> -->\n        <div class="clearfix">\n        <!-- <div class="health-outer-first"> -->\n          <div class="helth-title">Album</div>\n        <!-- </div> -->\n      </div>\n        <ion-col col-6 class=\'userCol\' *ngFor="let pic of expData.experienceGallery" (click)="openExperienceGallary()">\n          <!-- <img class="galleryImg" src="{{pic.imageThumbUrl200}}"> -->\n          <div class="experienceDetail">\n          <bg-image-with-loader [image]="pic.imageUrl"></bg-image-with-loader>\n        </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n  <!-- roleId : {{expData.roleId}} -->\n  <div padding *ngIf="expData.status == \'Pending\' && expData.roleId != 3">\n    <button ion-button class="mr-t34 button_color" full color="dark" (click)="experienceStatus(true)">APPROVE THE EXPERIENCE</button>\n    <button ion-button clear full class="color4a4a4a" (click)="experienceStatus(false)">REJECT THE EXPERIENCE</button>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/kanikagupta/Documents/Modurn/modurn 2/src/pages/lifestory/experienceDetails/experienceDetails.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_WebServices_LifeStory_LifeStoryService__["a" /* LifeStoryService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_toast_service_toast_service__["a" /* ToastServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_WebServices_LifeStory_InterestnPassionService__["a" /* InterestnPassionService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */]])
    ], ExperienceDetailsPage);
    return ExperienceDetailsPage;
}());

//# sourceMappingURL=experienceDetails.js.map

/***/ })

});
//# sourceMappingURL=10.js.map