webpackJsonp([9],{

/***/ 743:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(786);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_bg_image_with_loader_bg_image_with_loader_module__ = __webpack_require__(763);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]), __WEBPACK_IMPORTED_MODULE_3__components_bg_image_with_loader_bg_image_with_loader_module__["a" /* BgImageWithLoaderPageModule */]
            ],
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

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

/***/ 786:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__life_story_life_story__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_WebServices_Common_SharedServices__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_usercommon_services__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_WebServices_LifeStory_LifeStoryService__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_alert_service_alert_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_SharedTask_sharedtask__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_settings_search_beacon_search_beacon__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, sanitizer, modalCtrl, authService, actionSheetCtrl, storage, commonServices, lifeStoryService, loadingCtrl, sharedServices, navParams, alertService, sharedTask, _app, alertCtrl) {
        this.navCtrl = navCtrl;
        this.sanitizer = sanitizer;
        this.modalCtrl = modalCtrl;
        this.authService = authService;
        this.actionSheetCtrl = actionSheetCtrl;
        this.storage = storage;
        this.commonServices = commonServices;
        this.lifeStoryService = lifeStoryService;
        this.loadingCtrl = loadingCtrl;
        this.sharedServices = sharedServices;
        this.navParams = navParams;
        this.alertService = alertService;
        this.sharedTask = sharedTask;
        this._app = _app;
        this.alertCtrl = alertCtrl;
        this.items = [];
        this.isItems = false;
        this.isRefresh = false;
        this.errMsg = '';
        this.selectedBeacon = null;
        this.popupMode = false;
        this.pageTitle = '';
        this.flag = 1;
        try {
            this.selectedBeacon = navParams.data.navData;
        }
        catch (e) {
            this.selectedBeacon = null;
        }
        this.html = sanitizer.bypassSecurityTrustHtml('style="background-image: url(https://picsum.photos/500/500);"');
    }
    HomePage.prototype.ionViewDidLoad = function () {
        // //debugger
        // this.initializeItems();
    };
    HomePage.prototype.ionViewWillEnter = function () {
        this.initializeItems();
        if (this.selectedBeacon) {
            if (this.selectedBeacon.beaconPaired == false) {
                this.renderUItoPopupMode(true);
            }
            else {
                this.renderUItoPopupMode(false);
            }
        }
        else {
            this.renderUItoPopupMode(false);
            // this.initializeItems();
        }
    };
    HomePage.prototype.renderUItoPopupMode = function (flag) {
        if (flag) {
            this.popupMode = true;
            this.pageTitle = 'Link your story';
        }
        else {
            this.popupMode = false;
            this.pageTitle = 'Life stories';
        }
    };
    HomePage.prototype.ionViewWillLeave = function () {
        // //debugger;
        this.selectedBeacon = null;
    };
    HomePage.prototype.getLifeStory = function () {
        this.isRefresh = false;
        this.initializeItems();
    };
    HomePage.prototype.initializeItems = function (refresher) {
        var _this = this;
        if (refresher === void 0) { refresher = null; }
        //debugger
        this.items = [];
        this.storage.get("userData").then(function (result) {
            _this.nextPage = 1;
            var userDataInfo = {
                userid: result.userInfoModel.userId,
                pageNo: 1,
                paired: false
            };
            if (_this.selectedBeacon && _this.selectedBeacon.beaconPaired == false) {
                userDataInfo.paired = true;
            }
            _this.lifeStoryService.getLifeStoryData(userDataInfo)
                .then(function (result) {
                debugger;
                _this.completeRefresher(refresher);
                // console.log(typeof(result));
                var arr = Object.keys(result).map(function (k) { return result[k]; });
                if (!refresher && arr.length > 0 && _this.selectedBeacon) {
                    _this.showLifeStoryLinkingPopup(_this.selectedBeacon);
                }
                _this.items = arr[0].contentList;
                console.log(arr[0].contentList);
                if (_this.items.length > 0) {
                    _this.isItems = false;
                }
                else {
                    _this.isItems = true;
                }
                _this.nextPage = arr[0].nextPage;
            }, function (error) {
                _this.completeRefresher(refresher);
                if (error == "No internet connection.") {
                    _this.errMsg = "Please check your internet connection and try again";
                }
                else {
                    _this.errMsg = "Something went wrong";
                }
                _this.isRefresh = true;
                console.log(error);
            });
        });
    };
    HomePage.prototype.modifyLifestory = function (event, LifestoryData, index) {
        var _this = this;
        var actionsheet = true;
        if (this.selectedBeacon) {
            if (LifestoryData.urnType != this.selectedBeacon.urnType) {
                actionsheet = false;
                // show relink
                this.alertService.presentReLinkAlert().then(function (yes) {
                    if (yes) {
                        // this.toastCtrl.create('Re-link');
                        console.log('Re-link');
                        _this.initializeItems();
                    }
                });
            }
            else {
                if (!this.selectedBeacon.beaconPaired) {
                    actionsheet = false;
                    this.alertService.beaconConfirmationAlertMsg('Are you sure you want to connect to this life story ').then(function (clicked) {
                        if (clicked == 1) {
                            // this.toastCtrl.create('Re-link');
                            _this.connectBeaconToLifeStory(_this.selectedBeacon, LifestoryData);
                            // this.initializeItems();
                        }
                        else if (clicked == 2) {
                            // this._app.getRootNav().setRoot(SearchBeaconPage);
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__pages_settings_search_beacon_search_beacon__["a" /* SearchBeaconPage */]);
                        }
                    });
                }
            }
            // if already associated.
            // if(){
            // }
            if (actionsheet) {
                console.log("Clicking a linked lifestory");
                if (LifestoryData.roleId == 1) {
                    var actionSheet = this.actionSheetCtrl.create({
                        buttons: [
                            {
                                text: 'View',
                                handler: function () {
                                    console.log('View lifestory... ');
                                    _this.lifeTapped(event, LifestoryData);
                                }
                            },
                            {
                                text: 'Edit',
                                handler: function () {
                                    console.log('Edit lifestory... ');
                                    _this.editLifeStory(LifestoryData, index);
                                }
                            },
                            {
                                text: 'Delete',
                                role: 'destructive',
                                handler: function () {
                                    console.log('Deleting... ');
                                    _this.alertService.presentLogOutAlert('Please consider that the Life Story, content and media will all be lost upon deleting. There is no recovery option. <br/>Are you sure you want to delete? ').then(function (yes) {
                                        if (yes) {
                                            console.log("Yes");
                                            console.log("index::" + index);
                                            _this.deleteLifeStory(LifestoryData.ownerId, index);
                                            //  this.deleteLifeStory(Lifestorydata , index);
                                            // this.deleteLifeStory(index);
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
                }
                else if (LifestoryData.roleId == 2) {
                    var actionSheet = this.actionSheetCtrl.create({
                        buttons: [
                            {
                                text: 'View',
                                handler: function () {
                                    console.log('View lifestory... ');
                                    _this.lifeTapped(event, LifestoryData);
                                }
                            },
                            {
                                text: 'Edit',
                                handler: function () {
                                    console.log('Edit lifestory... ');
                                    _this.editLifeStory(LifestoryData, index);
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
                }
                else if (LifestoryData.roleId == 3) {
                    var actionSheet = this.actionSheetCtrl.create({
                        buttons: [
                            {
                                text: 'View',
                                handler: function () {
                                    console.log('View lifestory... ');
                                    _this.lifeTapped(event, LifestoryData);
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
                }
                else if (LifestoryData.roleId == 4) {
                    var actionSheet = this.actionSheetCtrl.create({
                        buttons: [
                            {
                                text: 'View',
                                handler: function () {
                                    console.log('View lifestory... ');
                                    _this.lifeTapped(event, LifestoryData);
                                }
                            },
                            {
                                text: 'Delete',
                                role: 'destructive',
                                handler: function () {
                                    console.log('Deleting... ');
                                    _this.alertService.presentLogOutAlert('Please consider that the Life Story, content and media will all be lost upon deleting. There is no recovery option. <br/>Are you sure you want to delete? ').then(function (yes) {
                                        if (yes) {
                                            console.log("Yes");
                                            console.log("index::" + index);
                                            _this.deleteLifeStory(LifestoryData.ownerId, index);
                                            //  this.deleteLifeStory(Lifestorydata , index);
                                            // this.deleteLifeStory(index);
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
                }
            }
        }
        else {
            if (LifestoryData.roleId == 1) {
                var actionSheet = this.actionSheetCtrl.create({
                    buttons: [
                        {
                            text: 'View',
                            handler: function () {
                                console.log('View lifestory... ');
                                _this.lifeTapped(event, LifestoryData);
                            }
                        },
                        {
                            text: 'Edit',
                            handler: function () {
                                console.log('Edit lifestory... ');
                                _this.editLifeStory(LifestoryData, index);
                            }
                        },
                        {
                            text: 'Delete',
                            role: 'destructive',
                            handler: function () {
                                console.log('Deleting... ');
                                // this.alertService.presentLogOutAlert('Are you sure want to delete?').then((yes) => {
                                _this.alertService.presentLogOutAlert('Please consider that the Life Story, content and media will all be lost upon deleting. There is no recovery option. <br/>Are you sure you want to delete? ').then(function (yes) {
                                    if (yes) {
                                        console.log("Yes");
                                        console.log("index::" + index);
                                        _this.deleteLifeStory(LifestoryData.ownerId, index);
                                        //  this.deleteLifeStory(Lifestorydata , index);
                                        // this.deleteLifeStory(index);
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
            }
            else if (LifestoryData.roleId == 2) {
                var actionSheet = this.actionSheetCtrl.create({
                    buttons: [
                        {
                            text: 'View',
                            handler: function () {
                                console.log('View lifestory... ');
                                _this.lifeTapped(event, LifestoryData);
                            }
                        },
                        {
                            text: 'Edit',
                            handler: function () {
                                console.log('Edit lifestory... ');
                                _this.editLifeStory(LifestoryData, index);
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
            }
            else if (LifestoryData.roleId == 4) {
                var actionSheet = this.actionSheetCtrl.create({
                    buttons: [
                        {
                            text: 'View',
                            handler: function () {
                                console.log('View lifestory... ');
                                _this.lifeTapped(event, LifestoryData);
                            }
                        },
                        {
                            text: 'Delete',
                            role: 'destructive',
                            handler: function () {
                                console.log('Deleting... ');
                                // this.alertService.presentLogOutAlert('Are you sure want to delete?').then((yes) => {
                                _this.alertService.presentLogOutAlert('Please consider that the Life Story, content and media will all be lost upon deleting. There is no recovery option. <br/>Are you sure you want to delete? ').then(function (yes) {
                                    if (yes) {
                                        console.log("Yes");
                                        console.log("index::" + index);
                                        _this.deleteLifeStory(LifestoryData.ownerId, index);
                                        //  this.deleteLifeStory(Lifestorydata , index);
                                        // this.deleteLifeStory(index);
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
            }
            else {
                var actionSheet = this.actionSheetCtrl.create({
                    buttons: [
                        {
                            text: 'View',
                            handler: function () {
                                console.log('View lifestory... ');
                                _this.lifeTapped(event, LifestoryData);
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
            }
        }
    };
    HomePage.prototype.editLifeStory = function (LifestoryData, index) {
        console.log(LifestoryData);
        if (LifestoryData.urnType == 1) {
            localStorage.setItem("createStoryType", "1");
            if (LifestoryData.relationShip == "Self") {
                this.navCtrl.push('NewLifeStorie3Page', { data: { LifestoryData: LifestoryData, isEdit: true } });
            }
            else {
                this.navCtrl.push('NewLifeStorie4Page', { data: { LifestoryData: LifestoryData, isEdit: true } });
            }
        }
        else {
            localStorage.setItem("createStoryType", "2");
            // this.navCtrl.push('NewPetStorie1Page', {data:{LifestoryData: LifestoryData,isEdit: true}});
            this.navCtrl.push('PetStoryPage', { data: { LifestoryData: LifestoryData, isEdit: true } });
        }
    };
    HomePage.prototype.deleteLifeStory = function (LifestoryData, index) {
        var _this = this;
        console.log(LifestoryData);
        this.storage.get("userData").then(function (result) {
            //this.userName = result.userInfoModel.userName;
            var params = {
                userId: result.userInfoModel.userId,
                ownerId: LifestoryData
            };
            _this.lifeStoryService.deleteLifestory(params)
                .then(function (data) {
                console.log(data);
                //Remove data from array
                _this.items.splice(index, 1);
                localStorage.removeItem('lifeStoryData');
            }, function (error) {
                console.log(error);
            });
        });
    };
    HomePage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        console.log('Begin async operation');
        if (this.nextPage > 0) {
            this.storage.get("userData").then(function (result) {
                var userDataInfo = {
                    userid: result.userInfoModel.userId,
                    pageNo: _this.nextPage,
                    paired: false
                };
                if (_this.selectedBeacon && _this.selectedBeacon.beaconPaired == false) {
                    userDataInfo.paired = true;
                }
                _this.lifeStoryService.getLifeStoryData(userDataInfo)
                    .then(function (result) {
                    infiniteScroll.complete();
                    var arr = Object.keys(result).map(function (k) { return result[k]; });
                    for (var i = 0; i < arr[0].contentList.length; i++) {
                        _this.items.push(arr[0].contentList[i]);
                    }
                    _this.nextPage = arr[0].nextPage;
                }, function (error) {
                    console.log(error);
                });
            });
        }
        else {
            infiniteScroll.complete();
        }
    };
    HomePage.prototype.doRefresh = function (refresher) {
        console.log('Begin async operation', refresher);
        this.nextPage = 1;
        this.initializeItems(refresher);
        //refresher.complete();
    };
    HomePage.prototype.completeRefresher = function (refresher) {
        if (refresher)
            refresher.complete();
    };
    HomePage.prototype.lifeTapped = function (event, item) {
        console.log("lifeTapped");
        // if (this.selectedBeacon) {
        //   if (item.urnType != this.selectedBeacon.urnType) {
        //     // show relink
        //     this.alertService.presentReLinkAlert().then((yes) => {
        //       if (yes) {
        //         // this.toastCtrl.create('Re-link');
        //         console.log('Re-link');
        //       }
        //     });
        //   } else {
        //     if (!this.selectedBeacon.beaconPaired) {
        //       this.alertService.beaconConfirmationAlertMsg('Are you sure you want to connect life story to this URN').then((clicked) => {
        //         if (clicked == 1) {
        //           // this.toastCtrl.create('Re-link');
        //           this.connectBeaconToLifeStory(this.selectedBeacon, item);
        //         } else if (clicked == 2) {
        //           this._app.getRootNav().setRoot(SearchBeaconPage);
        //         }
        //       });
        //     }
        //   }
        //   // if already associated.
        //   // if(){
        //   // }
        // } else {
        this.showLifeStoryDetail(item);
        // }
    };
    HomePage.prototype.showLifeStoryLinkingPopup = function (beacon) {
        var _this = this;
        if (this.selectedBeacon.beaconPaired == true) {
            this.alertService.newLifeStoryAlert('CONNECT & VIEW LIFE STORY').then(function (yes) {
                if (yes) {
                    // this.toastCtrl.create('Re-link');
                    _this.connectToLifeStoryAsViewer(beacon);
                }
            });
        }
        else {
            // ADD TO THIS Life story 
            this.alertService.newLifeStoryAlert('ADD TO THIS LIFE STORY').then(function (yes) {
                if (yes) {
                    // this.toastCtrl.create('Re-link');
                    if (_this.items.length == 0) {
                        _this.addStories();
                        //send to screen no 16
                    }
                    else {
                        //this.connectBeaconToLifeStory(beacon)
                    }
                }
            });
        }
    };
    HomePage.prototype.connectToLifeStoryAsViewer = function (beaconInfo) {
        var _this = this;
        var params = {
            "ownerId": beaconInfo.ownerId,
        };
        this.lifeStoryService.connectLifeStoryAsViewer(params)
            .then(function (result) {
            if (result.responseCode == 200) {
                console.log("Set img1");
                _this.newViewerAlert('You have been added as viewer.', beaconInfo.lifeStoryName).then(function (clicked) {
                    if (clicked == 1) {
                        console.log('view life story....');
                        _this.fetchLifeStoryById(beaconInfo.ownerId);
                    }
                    if (clicked == 2) {
                        _this.selectedBeacon = null;
                        _this.initializeItems();
                    }
                });
            }
        }, function (error) {
            console.log(error);
        });
    };
    HomePage.prototype.connectBeaconToLifeStory = function (beaconInfo, lifeStory) {
        var _this = this;
        //debugger
        var params = {
            "beaconId": beaconInfo.beaconId,
            "ownerId": lifeStory.ownerId,
        };
        this.lifeStoryService.connectBeaconToLifeStory(params)
            .then(function (result) {
            if (result.responseCode == 200) {
                //debugger;
                _this.sharedTask.showToastMessage(lifeStory.ownerName + ' life story has been mapped successfully');
                // this.showLifeStoryDetail(lifeStory);
                _this.selectedBeacon = null;
                _this.renderUItoPopupMode(false);
            }
        }, function (error) {
            console.log(error);
        });
    };
    HomePage.prototype.fetchLifeStoryById = function (ownerId) {
        var _this = this;
        //debugger
        console.log("fetchLifeStoryById");
        var params = {
            ownerId: ownerId,
        };
        this.lifeStoryService.fetchLifeStoryById(params)
            .then(function (result) {
            if (result.responseCode == 200) {
                _this.showLifeStoryDetail(result.data);
            }
        }, function (error) {
            console.log(error);
        });
    };
    HomePage.prototype.showLifeStoryDetail = function (item) {
        console.log("showLifeStoryDetail");
        localStorage.setItem("lifeStoryData", JSON.stringify(item));
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__life_story_life_story__["a" /* LifeStoryPage */], {
            lifeData: item,
        });
    };
    HomePage.prototype.gotoSettings = function () {
        // let modal = this.modalCtrl.create("SettingsPage");
        // modal.present();
        this.navCtrl.push('SettingsPage');
    };
    HomePage.prototype.addStories = function () {
        console.log("addStories");
        var pageToOpen = '';
        var userType = '';
        if (this.selectedBeacon && this.selectedBeacon.beaconPaired == false) {
            if (this.selectedBeacon.urnType == 1) {
                pageToOpen = 'NewLifeStorie2Page';
                localStorage.setItem("createStoryType", "1");
                userType = '1';
            }
            else {
                pageToOpen = 'PetStoryPage';
                localStorage.setItem("createStoryType", "2");
                userType = '2';
            }
            localStorage.setItem("CreateByBeaconId", this.selectedBeacon.beaconId);
            this.navCtrl.push(pageToOpen, { userType: userType });
        }
        else {
            if (localStorage.getItem('CreateByBeaconId')) {
                localStorage.removeItem('CreateByBeaconId');
            }
            this.navCtrl.push('NewLifeStorie1Page');
        }
    };
    HomePage.prototype.fetchLifeStories = function () {
        var params = new FormData();
        this.lifeStoryService.fetLifeStories(params)
            .then(function (data) {
            console.log('life story data =', data);
        }, function (error) {
            console.log(error);
        });
    };
    HomePage.prototype.fetchRoles = function () {
        var params = new FormData();
        this.sharedServices.fetchRoles(params)
            .then(function (data) {
            console.log('life story data =', data);
        }, function (error) {
            console.log(error);
        });
    };
    HomePage.prototype.fetchRelationship = function () {
        var params = new FormData();
        this.sharedServices.fetchRelationship(params)
            .then(function (data) {
            console.log('life story data =', data);
        }, function (error) {
            console.log(error);
        });
    };
    HomePage.prototype.newViewerAlert = function (message, name) {
        var _this = this;
        // var bckUrl = this.selectedBeacon.lifeStoryImage200?this.selectedBeacon.lifeStoryImage200:'../assets/img/defaultHuman.png'; 
        var bckUrl = this.selectedBeacon.lifeStoryImage200 ? this.selectedBeacon.lifeStoryImage200 : '../assets/img/defaultHuman.png';
        return new Promise(function (resolve, reject) {
            var alert = _this.alertCtrl.create({
                subTitle: '<div class="cong-msg"><div class="cong-msg-img"><img src="' + bckUrl + '" /></div> <h1> ' + name + ' Life Story</h1>' + message + '</div>',
                buttons: [
                    {
                        text: 'VIEW LIFE STORY',
                        handler: function () {
                            console.log("Clicked VIEW LIFE STORY");
                            alert.dismiss().then(function () { return resolve(1); });
                        }
                    },
                    {
                        text: 'Skip',
                        role: 'cancel',
                        cssClass: 'cancelbtn',
                        handler: function () {
                            console.log("Cancel Clicked");
                            alert.dismiss().then(function () { return resolve(2); });
                        }
                    }
                ],
                enableBackdropDismiss: false,
                cssClass: 'newViewer-alert'
            });
            return alert.present();
            /*var el = document.getElementById("alert-subhdr-1");
            el.style.background = 'url(https://picsum.photos/500/500) no-repeat center center';
            el.style.backgroundSize="50% 50%";*/
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/kanikagupta/Documents/Modurn/modurn 2/src/pages/lifestory/home/home.html"*/'<ion-header no-border>\n  <ion-navbar class="home-toolbar">\n    <ion-buttons left class="mar-header-icon" *ngIf="!popupMode">\n      <button class="btnColor" ion-button icon-only (click)="gotoSettings()">\n        <ion-icon class="icon icon-ic-settings"></ion-icon>\n        <!--<div class="icon icon-ic-settings"></div>-->\n        <!--<img src="assets/img/icSettings.png" />-->\n      </button>\n    </ion-buttons>\n    <ion-title text-center class="life-title">{{pageTitle}}</ion-title>\n    <ion-buttons right class="mar-header-icon">\n      <button class="btnColor" ion-button icon-only (click)="addStories()">\n        <ion-icon class="icon icon-ic-plus-add-top"></ion-icon>\n        <!--<img src="assets/img/icPlus.png" />-->\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  \n  \n  <ion-card *ngIf="isRefresh">\n    <ion-card-content>\n      <div text-center>{{errMsg}}</div>\n      <button class="button_color" ion-button type="submit" color="dark" block (click)="getLifeStory()">Try again</button>\n    </ion-card-content>\n  </ion-card>\n  \n\n  <ion-grid *ngIf="isItems" class="life-story-content">\n    <ion-row>\n      <ion-col col-4 offset-8 text-center class="add-arrow">\n        <img src="assets/img/icArrow@3x.png" />\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-6 offset-3 class="margin-top">\n        <img src="assets/img/icIcon@3x.png" style="max-width: 90%;" />\n\n      </ion-col>\n      <div class="add-story-txt">\n        <h3 style="margin-bottom: -1rem;">Add a life story</h3>\n        <p>Currently, you don\'t have any life stories</p>\n      </div>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid *ngIf="items.length > 0 && !isRefresh" class="life-story-content">\n    <ion-row>\n      <!-- <ion-col tappable col-6 class=\'userCol\' *ngFor="let item of items" (click)="lifeTapped($event, item)"> -->\n        <ion-col tappable col-6 class=\'userCol\' *ngFor="let item of items;  let i=index" (click)="modifyLifestory($event, item, i)">\n        <ion-card class=\'userCard\'>\n          <!-- <img src="{{item.defaultThumbImage200?item.defaultThumbImage200:\'assets/img/defaultHuman.png\'}}" /> -->\n\n          <div class="lifestory_list_img">\n          <bg-image-with-loader  [image]="item.defaultImage"></bg-image-with-loader>\n          </div> \n\n          <!--<ion-card-content class="card-content-story">\n            <ion-card-title color="secondary" class="userCardTitle">\n              {{item.ownerName}} {{item.ownerNickName==null?\'\':\'(\'+item.ownerNickName+\')\'}}\n            </ion-card-title>\n            <p text-center class="life-story-subtitle">\n              {{item.role}} | {{item.relationShip}}\n            </p>\n          </ion-card-content>-->\n\n          <ion-card-content class="card-content-story">\n\n            <ion-card-title color="secondary" class="userCardTitle">\n              <ion-icon *ngIf="item.urnType == 2" class="iconRight icon icon-ic-animal-paw"></ion-icon> {{item.ownerName}} {{(item.ownerNickName==null || item.ownerNickName=="")?\'\':\'(\'+item.ownerNickName+\')\'}}\n            </ion-card-title>\n            <p *ngIf="item.urnType == 2" text-center class="life-story-subtitle">\n              Pet | {{item.relationShip?item.relationShip:item.role}}\n            </p>\n            <p *ngIf="item.urnType == 1" text-center class="life-story-subtitle">\n              {{item.role}} <span *ngIf="item.relationShip">|</span> {{item.relationShip}}\n            </p>\n\n          </ion-card-content>\n\n\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>'/*ion-inline-end:"/Users/kanikagupta/Documents/Modurn/modurn 2/src/pages/lifestory/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_6__providers_usercommon_services__["a" /* UserCommonServices */],
            __WEBPACK_IMPORTED_MODULE_7__providers_WebServices_LifeStory_LifeStoryService__["a" /* LifeStoryService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_WebServices_Common_SharedServices__["a" /* SharedServices */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_8__providers_alert_service_alert_service__["a" /* AlertServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_9__providers_SharedTask_sharedtask__["a" /* SharedTaskProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=9.js.map