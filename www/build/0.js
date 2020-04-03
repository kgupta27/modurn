webpackJsonp([0],{

/***/ 762:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsModule", function() { return SettingsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings__ = __webpack_require__(805);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_bg_image_with_loader_bg_image_with_loader_module__ = __webpack_require__(763);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SettingsModule = /** @class */ (function () {
    function SettingsModule() {
    }
    SettingsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__settings__["a" /* SettingsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__settings__["a" /* SettingsPage */]), __WEBPACK_IMPORTED_MODULE_3__components_bg_image_with_loader_bg_image_with_loader_module__["a" /* BgImageWithLoaderPageModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__settings__["a" /* SettingsPage */]]
        })
    ], SettingsModule);
    return SettingsModule;
}());

//# sourceMappingURL=settings.module.js.map

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

/***/ 805:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_WebServices_Common_SharedServices__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_terms_conditions_terms_conditions__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__settings_search_beacon_search_beacon__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auth_authentication_authentication__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_toast_service_toast_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_alert_service_alert_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Utility_Constant__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_auth_auth__ = __webpack_require__(72);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






//import { ChangePasswordPage } from '../../settings/change-password/change-password';
//import { TutorialsPage } from '../../settings/tutorials/tutorials';






var SettingsPage = /** @class */ (function () {
    function SettingsPage(navCtrl, navParams, viewCtrl, modalCtrl, storage, loadingCtrl, toastCtrl, alertService, authService, sharedServices, _app, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.alertService = alertService;
        this.authService = authService;
        this.sharedServices = sharedServices;
        this._app = _app;
        this.events = events;
        this.isTrue = true;
        this.isSettings = true;
        this.profileImg = '';
    }
    SettingsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingsPage');
    };
    SettingsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loader.present();
        this.storage.get("userData").then(function (result) {
            console.log(result);
            console.log(result.userInfoModel.userName);
            _this.userName = result.userInfoModel.userName;
            //  console.log(result.userInfoModel.profileImg200);
            console.log(result.userInfoModel.profileImg200);
            _this.profileImg = result.userInfoModel.profileImg;
            // console.log(result.userInfoModel.nickName);
            // if (result.userInfoModel.nickName) {
            _this.nickName = result.userInfoModel.nickName;
            // }
        });
        loader.dismiss();
    };
    SettingsPage.prototype.ionViewWillUnload = function () {
        this.events.unsubscribe(__WEBPACK_IMPORTED_MODULE_9__Utility_Constant__["d" /* KEY_NOTIFF */].LifeStoryUpdate);
    };
    SettingsPage.prototype.listenSettingClose = function () {
        var _this = this;
        this.events.subscribe(__WEBPACK_IMPORTED_MODULE_9__Utility_Constant__["d" /* KEY_NOTIFF */].DismissSetting, function () {
            _this.closeSettings();
            //this.app.getRootNav().setRoot(AuthenticationPage);
            //this.rootPage = AuthenticationPage;
        });
    };
    SettingsPage.prototype.closeSettings = function () {
        // this.viewCtrl.dismiss();
        this.navCtrl.popToRoot();
    };
    SettingsPage.prototype.chnagePassword = function () {
        // this.navCtrl.push("ChangePasswordPage");
        var modal = this.modalCtrl.create("ChangePasswordPage");
        modal.present();
    };
    SettingsPage.prototype.tutorials = function (isTrue) {
        if (isTrue)
            this.navCtrl.push("OnboardingPage", { isSettings: true });
        // let modal = this.modalCtrl.create(TutorialsPage);
        // modal.present();
    };
    SettingsPage.prototype.termsConditions = function () {
        // this.navCtrl.push(TermsConditionsPage);
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__common_terms_conditions_terms_conditions__["a" /* TermsConditionsPage */]);
        modal.present();
    };
    SettingsPage.prototype.samples = function () {
        console.log("Samples Clicked");
        this.navCtrl.push("SamplesPage");
    };
    SettingsPage.prototype.showMyProfile = function () {
        this.navCtrl.push("MyProfilePage");
    };
    SettingsPage.prototype.scanUrn = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__settings_search_beacon_search_beacon__["a" /* SearchBeaconPage */]);
    };
    /*signOut() {
  
      this.alertService.presentLogOutAlert('Are you sure you want to Logout?').then((yes) => {
        if (yes) {
          //debugger
          this.navCtrl.push(AuthenticationPage);
          // this._app.getRootNav().setRoot(AuthenticationPage);
          // this._app.getRootNav().setRoot(AuthenticationPage);
          this.storage.set("loginStatus", false);
          this.storage.set("userData", '');
          localStorage.removeItem('lifeStoryData');
          localStorage.removeItem("userId");
          this.toastCtrl.create('You have been logged out from modUrn.');
          
          
          // setTimeout(function() {
          //   // this.closeSettings();
            
          // }, 1000);
  
         
          // this._app.getRootNav().setRoot(AuthenticationPage);
          // this.toastCtrl.create('You have been logged out from modUrn.');
          // // this.storage.set("loginStatus", false);
          // this.storage.clear();
          // // localStorage.clear();
          // // localStorage.removeItem("userId");
          // this.closeSettings();
         
          // // this._app.getRootNav().setRoot(AuthenticationPage);
  
          // // let nav = this._app.getRootNav();
          // // nav.setRoot(AuthenticationPage);
  
  
          // // const root = this._app.getRootNav();
          // // root.popToRoot();
         
                 
        }
      });
    }*/
    SettingsPage.prototype.signOut = function () {
        var _this = this;
        var userId = localStorage.getItem("userId");
        var deviceType = localStorage.getItem("deviceInfo");
        var deviceToken = localStorage.getItem("deviceReg");
        this.alertService.presentLogOutAlert('Are you sure you want to Logout?').then(function (yes) {
            if (yes) {
                // Showing loader
                var loader_1 = _this.loadingCtrl.create({
                    content: 'Please wait...'
                });
                loader_1.present();
                var params = {
                    "userId": userId,
                    "deviceToken": deviceToken,
                    "deviceType": deviceType
                };
                _this.sharedServices.logOut(params)
                    .then(function (data) {
                    console.log('logout =', data);
                    var logOutObject;
                    logOutObject = data;
                    if (logOutObject.responseCode == '200') {
                        loader_1.dismiss();
                        _this.storage.set("loginStatus", false);
                        _this.storage.set("userData", '');
                        localStorage.removeItem('lifeStoryData');
                        localStorage.removeItem("userId");
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__auth_authentication_authentication__["a" /* AuthenticationPage */]);
                        _this.toastCtrl.create('You have been logged out from modUrn.');
                    }
                }, function (error) {
                    console.log(error);
                    _this.toastCtrl.create(error);
                });
                // try {
                //   this.authService.getAuthenticateLogOut(params, "api/v1/profile/logOut").subscribe(data => {
                //     // console.log(data);
                //     loader.dismiss();
                //     // this._app.getRootNav().setRoot(AuthenticationPage);
                //     // this._app.getRootNav().setRoot(AuthenticationPage);
                //     this.storage.set("loginStatus", false);
                //     this.storage.set("userData", '');
                //     localStorage.removeItem('lifeStoryData');
                //     localStorage.removeItem("userId");
                //     this.navCtrl.push(AuthenticationPage);
                //     this.toastCtrl.create('You have been logged out from modUrn.');
                //   }, error => {
                //     console.log(error);
                //     loader.dismiss();
                //     // this.toastCtrl.create(error);
                //     this.navCtrl.push(AuthenticationPage);
                //     this.storage.set("loginStatus", false);
                //     this.storage.set("userData", '');
                //     localStorage.removeItem('lifeStoryData');
                //     localStorage.removeItem("userId");
                //     this.toastCtrl.create('You have been logged out from modUrn.');
                //   });
                // } catch (e) {
                //   setTimeout(() => {
                //     loader.dismiss();
                //   }, 1000);
                // }
            }
        });
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"/Users/kanikagupta/Documents/Modurn/modurn 2/src/pages/settings/settings/settings.html"*/'<ion-header no-border>\n    <ion-navbar class="home-nav" hideBackButton="true">\n      <ion-title class="title">Settings</ion-title>\n      \n      <ion-buttons left (click)="closeSettings()">\n        <button class="btnColor cross-icn" ion-button icon-only>\n          <ion-icon class="icon icon-cross" item-right></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content padding class="story-outer setting-page-wrapper">\n    <ion-grid>\n      <ion-row justify-content-center>\n        <ion-col col-6 text-center (click)="showMyProfile()">\n          <!--<img class="setting-img" src="{{profileImg?profileImg:\'assets/img/human.png\'}}" />-->\n          \n          <!-- Old Solution -->\n          <!-- <img class="setting-img" src="{{profileImg}}" /> -->\n          \n          <!-- <div class="back-img"  [ngStyle]="{\'background-image\':\'url(\' + profileImg + \')\'}">\n          </div> -->\n\n\n          <!-- New Solution -->\n          <div class="profile-image"> \n          <bg-image-with-loader [image]="profileImg"></bg-image-with-loader>\n          </div>  \n          \n        </ion-col>\n        <h2 text-center>{{userName}}\n          <span *ngIf="nickName">({{nickName}})</span>\n        </h2>\n        \n      </ion-row>\n    </ion-grid>\n  \n    <ion-list class="story-inner-cont" style="margin-top:10px !important;">\n      <li>\n        <button ion-item (click)="showMyProfile()">\n          <ion-icon item-right class="icon icon-pink-arrow"></ion-icon>\n          My profile\n        </button>\n      </li>\n      <li>\n        <button ion-item (click)="chnagePassword()">\n          <ion-icon item-right class="icon icon-pink-arrow"></ion-icon>\n          Change password\n        </button>\n      </li>\n      <li [ngClass]="{\'activeClass\': isTrue}">\n        <button ion-item (click)="tutorials(true)">\n          <ion-icon item-right class="icon icon-pink-arrow"></ion-icon>\n          Getting Started\n        </button>\n      </li>\n      <li>\n        <button ion-item (click)="termsConditions()">\n          <ion-icon item-right class="icon icon-pink-arrow"></ion-icon>\n          Terms & conditions\n        </button>\n      </li>\n      <li>\n        <button ion-item (click)="scanUrn()">\n          <ion-icon item-right class="icon icon-pink-arrow"></ion-icon>\n          Scan Life Stories\n        </button>\n      </li>\n      <li>\n        <button ion-item (click)="samples()">\n          <ion-icon item-right class="icon icon-pink-arrow"></ion-icon>\n          Products\n        </button>\n      </li>\n    </ion-list>\n     <button class="Txtcolor" ion-button clear full (click)="signOut()">\n      Logout\n    </button>\n  </ion-content>\n  <ion-footer>\n   \n  </ion-footer>     '/*ion-inline-end:"/Users/kanikagupta/Documents/Modurn/modurn 2/src/pages/settings/settings/settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["u" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_7__providers_toast_service_toast_service__["a" /* ToastServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_8__providers_alert_service_alert_service__["a" /* AlertServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_10__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_0__providers_WebServices_Common_SharedServices__["a" /* SharedServices */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* Events */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ })

});
//# sourceMappingURL=0.js.map