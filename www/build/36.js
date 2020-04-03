webpackJsonp([36],{

/***/ 726:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddFavoriteCharityModule", function() { return AddFavoriteCharityModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_favorite_charity__ = __webpack_require__(769);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddFavoriteCharityModule = /** @class */ (function () {
    function AddFavoriteCharityModule() {
    }
    AddFavoriteCharityModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__add_favorite_charity__["a" /* AddFavoriteCharityPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_favorite_charity__["a" /* AddFavoriteCharityPage */]),
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__add_favorite_charity__["a" /* AddFavoriteCharityPage */]]
        })
    ], AddFavoriteCharityModule);
    return AddFavoriteCharityModule;
}());

//# sourceMappingURL=add-favorite-charity.module.js.map

/***/ }),

/***/ 769:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddFavoriteCharityPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_usercommon_services__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Utility_Constant__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_keyboard__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_WebServices_LifeStory_InterestnPassionService__ = __webpack_require__(382);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AddFavoriteCharityPage = /** @class */ (function () {
    function AddFavoriteCharityPage(interestnPassion, keyboard, viewCtrl, commonServices, navCtrl, loadingCtrl, navParams, fb, storage, events) {
        this.interestnPassion = interestnPassion;
        this.keyboard = keyboard;
        this.viewCtrl = viewCtrl;
        this.commonServices = commonServices;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.fb = fb;
        this.storage = storage;
        this.events = events;
        this.ownerId = 0;
        this.isSubmit = false;
        this.ischarityUrl = false;
        //debugger
        if (navParams.data.data == undefined) {
            this.ownerId = navParams.data.ownerId;
        }
        else {
            this.ownerId = navParams.data.data.ownerId;
            console.log('charityData  ', navParams.data.data.charityData);
        }
        // this._baseUrl = configService.getApiURI();
        this.charityUrlForm = fb.group({
            'charityUrl': [null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_5__Utility_Constant__["i" /* URL */])]],
        });
    }
    AddFavoriteCharityPage.prototype.ionViewDidLoad = function () {
        this.getCharityUrl();
        console.log("this.navParams.data.data = ", this.navParams.data.data);
        if (this.navParams.data.data != undefined) {
            console.log("yes");
            this.charityUrl = this.navParams.data.data.charityData.charityUrl;
            this.charityUrlForm.controls['charityUrl'].setValue(this.charityUrl);
            this.ischarityUrl = true;
        }
        else {
            console.log("No");
        }
        console.log('ionViewDidLoad addcharityUrl');
    };
    AddFavoriteCharityPage.prototype.closeAddLink = function (charityUrl) {
        var data = {
            charityUrl: charityUrl
        };
        this.keyboard.close();
        if (charityUrl != '' && charityUrl != undefined) {
            this.viewCtrl.dismiss(data);
        }
        else {
            this.viewCtrl.dismiss();
        }
    };
    AddFavoriteCharityPage.prototype.addCharityUr = function (value) {
        var _this = this;
        console.log(value);
        this.isSubmit = true;
        if (value.charityUrl != null && value.charityUrl !== undefined && value.charityUrl != "" && this.charityUrlForm.valid) {
            this.storage.get("userData").then(function (result) {
                if (result) {
                    console.log(result);
                    console.log(result.userInfoModel);
                    value.charityUrl = _this.addhttp(value.charityUrl);
                    var data = {
                        "userId": result.userInfoModel.userId,
                        "ownerId": _this.ownerId,
                        "charityUrl": value.charityUrl
                    };
                    console.log(data);
                    var loader_1 = _this.loadingCtrl.create({
                        content: 'Please wait...'
                    });
                    loader_1.present();
                    if (_this.ischarityUrl == false) {
                        _this.commonServices.addUpdateCharityUrl(data, result.token).subscribe(function (data) {
                            loader_1.dismiss();
                            _this.closeAddLink(value.charityUrl);
                            //this.events.publish(Constant.KEY_NOTIFF.TabSelect,Constant.LifeStoryTab.Profile);
                        }, function (error) {
                            console.log(error);
                            loader_1.dismiss();
                            // this.toastCtrl.create(error);
                        });
                    }
                    else {
                        _this.commonServices.addUpdateCharityUrl(data, result.token).subscribe(function (data) {
                            loader_1.dismiss();
                            _this.closeAddLink(value.charityUrl);
                            //this.events.publish(Constant.KEY_NOTIFF.TabSelect,Constant.LifeStoryTab.Profile);
                        }, function (error) {
                            console.log(error);
                            loader_1.dismiss();
                            // this.toastCtrl.create(error);
                        });
                    }
                }
            });
        }
    };
    AddFavoriteCharityPage.prototype.getCharityUrl = function () {
        var _this = this;
        this.storage.get("userData").then(function (result) {
            var params = {
                'userId': result.userInfoModel.userId,
                'ownerId': _this.ownerId,
                'page': '1',
                'size': '1'
            };
            _this.interestnPassion.fetchFavoriteCharity(params)
                .then(function (data) {
                //debugger
                // this.charityData = data;
                console.log(data);
                _this.charityUrl = data;
                if (_this.charityUrl.charityUrl) {
                    _this.charityUrlForm.controls['charityUrl'].setValue(_this.charityUrl.charityUrl);
                    _this.ischarityUrl = true;
                }
                else {
                    _this.ischarityUrl = false;
                }
                /*if (this.charityUrl.charityUrl != "" ) {
                  
                }*/
            }, function (error) {
                ////debugger;
                console.log(error);
            });
        });
    };
    AddFavoriteCharityPage.prototype.addhttp = function (url) {
        if (!/^(f|ht)tps?:\/\//i.test(url)) {
            url = "http://" + url;
        }
        return url;
    };
    AddFavoriteCharityPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-favorite-charity',template:/*ion-inline-start:"/Users/kanikagupta/Documents/Modurn/modurn 2/src/pages/addstory/add-favorite-charity/add-favorite-charity.html"*/'<ion-header no-border>\n  <ion-navbar>\n\n    <ion-buttons left (click)="closeAddLink()">\n      <button class="btnColor cross-icn" ion-button icon-only>\n        <ion-icon class="icon icon-cross" item-right></ion-icon>\n        <!--<img src="assets/img/icCross@3x.png" />-->\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content padding class="story-outer">\n  <div class="story-cont">\n    <h1>{{ischarityUrl?\'Update\':\'Add\'}} a favourite <br/> charity URL</h1>\n  </div>\n  <form [formGroup]="charityUrlForm">\n\n    <ion-list>\n\n      <ion-item>\n        <ion-label stacked>Favourite charity URL</ion-label>\n        <ion-input type="text" autocapitalize="off" [formControl]="charityUrlForm.controls[\'charityUrl\']"></ion-input>\n      </ion-item>\n      <div *ngIf="isSubmit">\n        <div class="error-box" *ngIf="!charityUrlForm.controls[\'charityUrl\'].valid && charityUrlForm.controls[\'charityUrl\'].hasError(\'required\')">\n          Charity Url is required!</div>\n        <div class="error-box" *ngIf="charityUrlForm.controls[\'charityUrl\'].hasError(\'pattern\')">Please enter valid link.</div>\n      </div>\n    </ion-list>\n\n    <button ion-button class="mr-t260 button_color" full color="dark" (click)="addCharityUr(charityUrlForm.value)">{{ischarityUrl?\'UPDATE\':\'ADD\'}}</button>\n\n  </form>\n\n\n\n</ion-content>'/*ion-inline-end:"/Users/kanikagupta/Documents/Modurn/modurn 2/src/pages/addstory/add-favorite-charity/add-favorite-charity.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__providers_WebServices_LifeStory_InterestnPassionService__["a" /* InterestnPassionService */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_keyboard__["a" /* Keyboard */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ViewController */], __WEBPACK_IMPORTED_MODULE_4__providers_usercommon_services__["a" /* UserCommonServices */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */]])
    ], AddFavoriteCharityPage);
    return AddFavoriteCharityPage;
}());

//# sourceMappingURL=add-favorite-charity.js.map

/***/ })

});
//# sourceMappingURL=36.js.map