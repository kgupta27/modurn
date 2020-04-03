webpackJsonp([1],{

/***/ 759:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProfileModule", function() { return MyProfileModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_profile__ = __webpack_require__(802);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_bg_image_with_loader_bg_image_with_loader_module__ = __webpack_require__(763);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MyProfileModule = /** @class */ (function () {
    function MyProfileModule() {
    }
    MyProfileModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__my_profile__["a" /* MyProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__my_profile__["a" /* MyProfilePage */]), __WEBPACK_IMPORTED_MODULE_3__components_bg_image_with_loader_bg_image_with_loader_module__["a" /* BgImageWithLoaderPageModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__my_profile__["a" /* MyProfilePage */]]
        })
    ], MyProfileModule);
    return MyProfileModule;
}());

//# sourceMappingURL=my-profile.module.js.map

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

/***/ 802:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_camera_camera__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_toast_service_toast_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyProfilePage = /** @class */ (function () {
    function MyProfilePage(navCtrl, toastCtrl, navParams, modalCtrl, actionsheetCtrl, cameraProvider, platform, storage, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.actionsheetCtrl = actionsheetCtrl;
        this.cameraProvider = cameraProvider;
        this.platform = platform;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.userName = "";
        this.nickName = "";
        this.email = "";
        this.profilepic = 'assets/img/human.png';
    }
    MyProfilePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad MyProfilePage');
        this.storage.get("userData").then(function (result) {
            console.log(result);
            _this.profilepic = result.userInfoModel.profileImg;
            console.log(result.userInfoModel.userName);
            _this.userName = result.userInfoModel.userName;
            console.log(result.userInfoModel.nickName);
            _this.nickName = result.userInfoModel.nickName;
            console.log(result.userInfoModel.email);
            _this.email = result.userInfoModel.email;
        });
    };
    MyProfilePage.prototype.editProfile = function () {
        console.log("editProfile called");
        this.navCtrl.push("EditProfilePage");
        // let modal = this.modalCtrl.create("EditProfilePage");
        // modal.present();
    };
    MyProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-my-profile',template:/*ion-inline-start:"/Users/kanikagupta/Documents/Modurn/modurn 2/src/pages/profile/my-profile/my-profile.html"*/'<ion-header no-border>\n  \n    <ion-navbar>\n        <ion-buttons right class="mar-header-icon">\n            <button class="btnColor edit_btn" ion-button icon-only (click)="editProfile()">\n          EDIT\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  <ion-content padding class="story-outer">\n    <div class="story-cont">\n      <h1>My profile</h1>\n    </div>\n  \n  \n  <!-- <ion-content padding>\n    <h1>My Profile</h1>\n    <hr align="left" width="30%"> -->\n  \n    <ion-grid class="photo">\n      <ion-row>\n        <ion-col col-6>\n          <!-- Old Solution -->\n          <!-- <img src="{{profilepic?profilepic:\'assets/img/human.png\'}}"  class="setting-img"/> -->\n        \n          <!-- <div class="setting-img"  [ngStyle]="{\'background-image\':\'url(\' + profilepic + \')\'}"></div> -->\n        \n          <!-- New Solution -->\n          <div class="profile-image"> \n              <bg-image-with-loader [image]="profilepic"></bg-image-with-loader>\n          </div>  \n\n        </ion-col>\n      </ion-row>\n      \n    </ion-grid>\n\n \n      <div class="health-outer fname">\n          <div class="helth-title">Full name</div>\n          <div class="p_content">\n            {{userName}}\n          </div>\n      </div>\n\n\n      <div class="health-outer">\n          <div class="helth-title">Nickname</div>\n          <div class="p_content">\n            {{nickName}}\n          </div>\n      </div>\n\n      <div class="health-outer">\n          <div class="helth-title">Email</div>\n          <div class="p_content">\n            {{email}}\n          </div>\n      </div>\n    \n      \n  </ion-content>'/*ion-inline-end:"/Users/kanikagupta/Documents/Modurn/modurn 2/src/pages/profile/my-profile/my-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_toast_service_toast_service__["a" /* ToastServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_camera_camera__["a" /* CameraProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */]])
    ], MyProfilePage);
    return MyProfilePage;
}());

//# sourceMappingURL=my-profile.js.map

/***/ })

});
//# sourceMappingURL=1.js.map