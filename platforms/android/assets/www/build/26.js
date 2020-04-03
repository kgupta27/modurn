webpackJsonp([26],{

/***/ 737:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoriteCharityPageModule", function() { return FavoriteCharityPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__favorite_charity__ = __webpack_require__(780);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FavoriteCharityPageModule = /** @class */ (function () {
    function FavoriteCharityPageModule() {
    }
    FavoriteCharityPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__favorite_charity__["a" /* FavoriteCharityPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__favorite_charity__["a" /* FavoriteCharityPage */]),
            ],
        })
    ], FavoriteCharityPageModule);
    return FavoriteCharityPageModule;
}());

//# sourceMappingURL=favorite-charity.module.js.map

/***/ }),

/***/ 780:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoriteCharityPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_WebServices_LifeStory_InterestnPassionService__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_SharedTask_sharedtask__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_toast_service_toast_service__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var FavoriteCharityPage = /** @class */ (function () {
    function FavoriteCharityPage(navCtrl, navParams, viewCtrl, storage, interestnPassion, modalCtrl, sharedTaskProvider, actionSheetCtrl, toastProvider, inAppBrowser) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.storage = storage;
        this.interestnPassion = interestnPassion;
        this.modalCtrl = modalCtrl;
        this.sharedTaskProvider = sharedTaskProvider;
        this.actionSheetCtrl = actionSheetCtrl;
        this.toastProvider = toastProvider;
        this.inAppBrowser = inAppBrowser;
        this.charityData = [];
        this.isCharityData = false;
        this.ownerId = navParams.data.ownerId;
    }
    FavoriteCharityPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FavoriteCharityPage');
        this.getCharityUrl();
    };
    FavoriteCharityPage.prototype.closeFavoriteCharityPage = function () {
        this.viewCtrl.dismiss();
        //this.navCtrl.popToRoot();
    };
    FavoriteCharityPage.prototype.getCharityUrl = function () {
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
                _this.charityData = data;
                console.log(data);
                if (_this.charityData) {
                }
                else {
                    _this.isCharityData = true;
                    _this.toastProvider.create("No data found.");
                }
            }, function (error) {
                console.log(error);
            });
        });
    };
    FavoriteCharityPage.prototype.editCharityUrl = function () {
        var _this = this;
        var modal = this.modalCtrl.create("AddFavoriteCharityPage", { data: { ownerId: this.ownerId, charityData: this.charityData } });
        modal.onDidDismiss(function (data) {
            if (data == undefined) {
                console.log('undefined +++++++++++++++++++ ', data);
                console.log(data);
            }
            else {
                _this.charityData.charityUrl = data.charityUrl;
                console.log('url changed +++++++++++++++++++ ', data);
                console.log(data);
            }
            // this.healthData[index] = updatedHelth;
        });
        modal.present();
        // this.navCtrl.push('AddFavoriteCharityPage', {data:{ownerId:this.ownerId,charityData:this.charityData}});
    };
    FavoriteCharityPage.prototype.deleteCharityUrl = function () {
        var _this = this;
        this.storage.get("userData").then(function (result) {
            var params = {
                'userId': result.userInfoModel.userId,
                'ownerId': _this.ownerId,
                'page': '1',
                'size': '1'
            };
            _this.interestnPassion.deleteFavoriteCharity(params)
                .then(function (data) {
                _this.charityData = data;
                console.log(data);
                //debugger
                if (_this.charityData) {
                }
                else {
                    _this.isCharityData = true;
                }
            }, function (error) {
                console.log(error);
            });
        });
    };
    FavoriteCharityPage.prototype.actionExperience = function (expId, index) {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            buttons: [
                {
                    text: 'Modify',
                    handler: function () {
                        console.log('Modify... ');
                        _this.editCharityUrl();
                    }
                },
                {
                    text: 'Delete',
                    role: 'destructive',
                    handler: function () {
                        console.log('Deleting... ');
                        _this.deleteCharityUrl();
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
    FavoriteCharityPage.prototype.inAppBrowserOpen = function (link) {
        console.log(link);
        try {
            var browser = this.inAppBrowser.create(link, '_blank', 'location=yes');
        }
        catch (e) {
            console.log("Invalid Url");
            this.toastProvider.create("Invalid Url");
        }
    };
    FavoriteCharityPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-favorite-charity',template:/*ion-inline-start:"/Users/kanikagupta/Documents/Modurn/modurn 2/src/pages/addstory/favorite-charity/favorite-charity.html"*/'<ion-header no-border>\n  <ion-navbar>\n    <ion-buttons left (click)="closeFavoriteCharityPage()">\n      <button class="btnColor cross-icn" ion-button icon-only>\n        <ion-icon class="icon icon-cross" item-right></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="story-outer">\n  <div *ngIf="charityData.charityUrl">\n    <div class="story-cont">\n      <h1>Favourite charity URL</h1>\n    </div>\n\n    <div padding class="links-outer">\n      <div class="links-outer">\n        <div class="link-lft">\n          <ion-icon class="icon icon-ic-attachment" item-start></ion-icon>\n          <span><a (click)="inAppBrowserOpen(charityData.charityUrl)">{{charityData.charityUrl}}</a></span>\n          <!--<button (click)="editCharityUrl()">edit</button>\n          <button (click)="deleteCharityUrl()">Delete</button>-->\n        </div>\n        <ion-icon class="icon icon-ic-three-dots" (click)="actionExperience()"></ion-icon>\n      </div>\n    </div>\n  </div>\n  <div *ngIf="!charityData.charityUrl" class="Nodatafound">\n    <h1 text-center>No charity URL found</h1>\n  </div>\n\n</ion-content>'/*ion-inline-end:"/Users/kanikagupta/Documents/Modurn/modurn 2/src/pages/addstory/favorite-charity/favorite-charity.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["u" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1__providers_WebServices_LifeStory_InterestnPassionService__["a" /* InterestnPassionService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_SharedTask_sharedtask__["a" /* SharedTaskProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_toast_service_toast_service__["a" /* ToastServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], FavoriteCharityPage);
    return FavoriteCharityPage;
}());

//# sourceMappingURL=favorite-charity.js.map

/***/ })

});
//# sourceMappingURL=26.js.map