webpackJsonp([4],{

/***/ 748:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondPageModule", function() { return SecondPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__media__ = __webpack_require__(791);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_bg_image_with_loader_bg_image_with_loader_module__ = __webpack_require__(763);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SecondPageModule = /** @class */ (function () {
    function SecondPageModule() {
    }
    SecondPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__media__["a" /* MediaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__media__["a" /* MediaPage */]), __WEBPACK_IMPORTED_MODULE_3__components_bg_image_with_loader_bg_image_with_loader_module__["a" /* BgImageWithLoaderPageModule */]
            ], exports: [__WEBPACK_IMPORTED_MODULE_2__media__["a" /* MediaPage */]
            ],
        })
    ], SecondPageModule);
    return SecondPageModule;
}());

//# sourceMappingURL=media.module.js.map

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

/***/ 791:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MediaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Utility_Constant__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_WebServices_LifeStory_LifeStoryService__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_alert_service_alert_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_WebServices_LifeStory_InterestnPassionService__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_toast_service_toast_service__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MediaPage = /** @class */ (function () {
    function MediaPage(app, navCtrl, modalCtrl, actionSheetCtrl, navParams, event, storage, interestnPassion, alertServiceProvider, inAppBrowser, toastProvider, lifeStoryService) {
        this.app = app;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.navParams = navParams;
        this.event = event;
        this.storage = storage;
        this.interestnPassion = interestnPassion;
        this.alertServiceProvider = alertServiceProvider;
        this.inAppBrowser = inAppBrowser;
        this.toastProvider = toastProvider;
        this.lifeStoryService = lifeStoryService;
        this.ownerID = 0;
        this.mediaData = [];
        this.userName = '';
        this.linkModul = [];
        this.role = 0;
        this.album_length = 0;
        this.count = 0;
        this.isAlbum = false;
        this.isLinks = false;
        this.isNoData = false;
        this.ownerID = navParams.data.ownerId;
        this.role = navParams.data.roleId;
        console.log(navParams.data);
        console.log('lifestorydata =', navParams.data.roleId);
    }
    MediaPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.getMedia();
        this.event.subscribe(__WEBPACK_IMPORTED_MODULE_2__Utility_Constant__["d" /* KEY_NOTIFF */].LifeStoryUpdate, function () {
            if (_this.navCtrl.parent.getSelected().index == 1) {
                console.log("2");
                //debugger
                _this.getMedia();
            }
        });
        console.log('ionViewDidLoad SecondPage');
    };
    MediaPage.prototype.ionViewWillEnter = function () {
        //debugger
        this.getMedia();
        console.log("11");
    };
    MediaPage.prototype.ionViewWillUnload = function () {
        this.event.unsubscribe(__WEBPACK_IMPORTED_MODULE_2__Utility_Constant__["d" /* KEY_NOTIFF */].LifeStoryUpdate);
    };
    MediaPage.prototype.getMedia = function () {
        var _this = this;
        this.storage.get("userData").then(function (result) {
            _this.userId = result.userInfoModel.userId;
            var parms = {
                'userid': result.userInfoModel.userId,
                'ownerId': _this.ownerID,
            };
            _this.lifeStoryService.getMediadata(parms)
                .then(function (data) {
                console.log(data);
                //debugger
                _this.mediaData = data;
                _this.mediaData = _this.mediaData.data;
                _this.linkModul = _this.mediaData.linkModel;
                console.log("mediaData.imageModel:: ", _this.mediaData.imageModel.length);
                _this.album_length = _this.mediaData.imageCount;
                if (_this.album_length > 5) {
                    _this.count = _this.album_length - 5;
                }
                console.log(" this. album_length", _this.album_length);
                console.log(" this. count", _this.count);
                if (_this.mediaData.imageModel.length > 0) {
                    _this.isAlbum = true;
                }
                if (_this.mediaData.linkModel.length > 0) {
                    _this.isLinks = true;
                }
                if (_this.mediaData.imageModel.length == 0 && _this.mediaData.linkModel.length == 0) {
                    _this.isNoData = true;
                    _this.isAlbum = false;
                }
                if (_this.mediaData.imageModel.length == 0) {
                    _this.isAlbum = false;
                }
                if (_this.mediaData.linkModel.length == 0) {
                    _this.isLinks = false;
                }
            }, function (error) {
                console.log(error);
            });
        });
    };
    MediaPage.prototype.openMediaGallery = function (index) {
        var galleryModal = this.modalCtrl.create('GalleryPage', {
            'imageModel': this.mediaData.imageModel, 'parms': {
                'userid': this.userId,
                'ownerId': this.ownerID,
                'role': this.role
            }
        });
        galleryModal.present();
        // this.app.getRootNav().push('GalleryPage', {
        //   'imageModel': this.mediaData.imageModel, 'parms': {
        //     'userid': this.userId,
        //     'ownerId': this.ownerID,
        //   }
        // });
    };
    MediaPage.prototype.presentActionSheet = function (mediaLink, index) {
        var _this = this;
        console.log("mediaData:: ", mediaLink);
        console.log("Index:: ", index);
        var actionSheet = this.actionSheetCtrl.create({
            buttons: [
                {
                    text: 'Modify',
                    handler: function () {
                        _this.editLink(mediaLink, index);
                    }
                },
                {
                    text: 'Delete',
                    role: 'destructive',
                    handler: function () {
                        console.log('Deleting... ');
                        _this.alertServiceProvider.presentLogOutAlert('Are you sure want to delete?').then(function (yes) {
                            if (yes) {
                                console.log("Yes");
                                _this.deleteMediaLink(mediaLink.linkId, index);
                            }
                            else {
                                console.log("No");
                            }
                        });
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
    MediaPage.prototype.deleteMediaLink = function (mediaId, index) {
        var _this = this;
        console.log(mediaId);
        console.log(index);
        this.storage.get("userData").then(function (result) {
            _this.userName = result.userInfoModel.userName;
            var params = {
                userId: result.userInfoModel.userId,
                ownerId: _this.ownerID,
                linkId: mediaId
            };
            _this.interestnPassion.deleteMediaLink(params)
                .then(function (data) {
                console.log(data);
                // this.mediaData.linkModel.splice();
                // //Remove data from array
                console.log("Delete at this index: ", index);
                // console.log("Before delete:", this.mediaData.linkModel);
                _this.linkModul.splice(index, 1);
                if (_this.mediaData.linkModel.length > 0) {
                    _this.isLinks = true;
                }
                else {
                    _this.isLinks = false;
                }
                // console.log("After delete:", this.mediaData.linkModel);
            }, function (error) {
                console.log(error);
            });
        });
    };
    MediaPage.prototype.editLink = function (mediaLink, index) {
        var _this = this;
        console.log('Modify... ');
        this.storage.get("userData").then(function (result) {
            var data = {
                ownerId: _this.ownerID,
                mediaLink: mediaLink,
                userId: result.userInfoModel.userId,
                isUpdate: true,
            };
            var modal = _this.modalCtrl.create("AddLinkPage", { data: data });
            modal.onDidDismiss(function (data) {
                console.log("Updated Media URL: ", data);
                _this.event.publish(__WEBPACK_IMPORTED_MODULE_2__Utility_Constant__["d" /* KEY_NOTIFF */].TabSelect, __WEBPACK_IMPORTED_MODULE_2__Utility_Constant__["f" /* LifeStoryTab */].Media);
                if (data === undefined) {
                    console.log("Undefined and return");
                    return;
                }
                console.log(index);
            });
            modal.present();
        });
    };
    MediaPage.prototype.inAppBrowserOpen = function (link) {
        console.log(link);
        var res1 = link.includes("https://");
        var res2 = link.includes("http://");
        console.log(res1 + "::" + res2);
        if (!res1 && !res2) {
            link = "https://" + link;
        }
        try {
            var browser = this.inAppBrowser.create(link, '_blank', 'location=yes');
        }
        catch (e) {
            console.log("Invalid Url");
            this.toastProvider.create("Invalid Url");
        }
    };
    MediaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-media',template:/*ion-inline-start:"/Users/kanikagupta/Documents/Modurn/modurn 2/src/pages/lifestory/life-story/LifeStoryTab/media/media.html"*/'<ion-content>\n  <div text-center *ngIf="!isAlbum && !isLinks">\n    <ion-grid class="life-story-content">\n      No Media Found\n    </ion-grid>\n  </div>\n  <div *ngIf="isAlbum" class="media-image-wrapper">\n\n    <!-- <ion-col col-6 class="album-container">\n          <div class="album-center">IMAGES</div>\n        </ion-col> -->\n\n    <h4 class="link-title">Images</h4>\n\n    <div class=\'userCol image-column media-image\' *ngFor="let pic of mediaData.imageModel">\n      <!-- Old Solution -->\n      <!-- <img class="galleryImg" src="{{pic.mediaImage500}}" (click)="openMediaGallery($index)"> -->\n\n      <!-- New Solution -->\n      <!-- <div class="profile-image">  -->\n          <bg-image-with-loader [image]="pic.mediaImage" (click)="openMediaGallery($index)"></bg-image-with-loader>\n      <!-- </div>   -->\n\n    </div>\n    <!-- <ion-col col-6 class="album-container"> -->\n    <div class="userCol image-column album" *ngIf="album_length > 5" (click)="openMediaGallery($index)">\n      <div class="album-text">+{{count}}</div>\n    </div>\n    <!-- </ion-col> -->\n  </div>\n  <div *ngIf="isLinks" padding class="link-class">\n    <h4 class="link-title">Media Links</h4>\n    <div class="links-outer" *ngFor="let link of linkModul; let i=index">\n      <div class="link-lft">\n        <!-- <p>{{link.linkTitle}} id= {{link.linkId}}  index= {{i}}</p> -->\n        <p>{{link.linkTitle}}</p>\n        <ion-icon class="icon icon-ic-attachment" item-start></ion-icon>\n        <!-- <div>{{link.linkUrl}}</div> -->\n        <div>\n          <a (click)="inAppBrowserOpen(link.linkUrl)">{{link.linkUrl}}</a>\n        </div>\n      </div>\n      <ion-icon class="icon icon-ic-three-dots" *ngIf="role == 1 || role == 2" (click)="presentActionSheet(link, i)"></ion-icon>\n\n    </div>\n  </div>\n\n</ion-content>'/*ion-inline-end:"/Users/kanikagupta/Documents/Modurn/modurn 2/src/pages/lifestory/life-story/LifeStoryTab/media/media.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_6__providers_WebServices_LifeStory_InterestnPassionService__["a" /* InterestnPassionService */],
            __WEBPACK_IMPORTED_MODULE_5__providers_alert_service_alert_service__["a" /* AlertServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_8__providers_toast_service_toast_service__["a" /* ToastServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_WebServices_LifeStory_LifeStoryService__["a" /* LifeStoryService */]])
    ], MediaPage);
    return MediaPage;
}());

//# sourceMappingURL=media.js.map

/***/ })

});
//# sourceMappingURL=4.js.map