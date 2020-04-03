webpackJsonp([3],{

/***/ 754:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewLifeStorie5Module", function() { return NewLifeStorie5Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__new_life_storie5__ = __webpack_require__(797);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_bg_image_with_loader_bg_image_with_loader_module__ = __webpack_require__(763);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NewLifeStorie5Module = /** @class */ (function () {
    function NewLifeStorie5Module() {
    }
    NewLifeStorie5Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__new_life_storie5__["a" /* NewLifeStorie5Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__new_life_storie5__["a" /* NewLifeStorie5Page */]), __WEBPACK_IMPORTED_MODULE_3__components_bg_image_with_loader_bg_image_with_loader_module__["a" /* BgImageWithLoaderPageModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__new_life_storie5__["a" /* NewLifeStorie5Page */]]
        })
    ], NewLifeStorie5Module);
    return NewLifeStorie5Module;
}());

//# sourceMappingURL=new-life-storie5.module.js.map

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

/***/ 797:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewLifeStorie5Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_camera_camera__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_toast_service_toast_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_alert_service_alert_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_usercommon_services__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_transfer__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_file__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_config_config__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_WebServices_Common_SharedServices__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Utility_Constant__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__life_story_life_story__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_WebServices_LifeStory_LifeStoryService__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// import { HomePage } from '../../home/home';








var NewLifeStorie5Page = /** @class */ (function () {
    function NewLifeStorie5Page(navCtrl, navParams, toastCtrl, actionsheetCtrl, cameraProvider, storage, platform, lifeStoryService, loadingCtrl, alertService, commonServices, transfer, file, configService, sharedServices) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.actionsheetCtrl = actionsheetCtrl;
        this.cameraProvider = cameraProvider;
        this.storage = storage;
        this.platform = platform;
        this.lifeStoryService = lifeStoryService;
        this.loadingCtrl = loadingCtrl;
        this.alertService = alertService;
        this.commonServices = commonServices;
        this.transfer = transfer;
        this.file = file;
        this.configService = configService;
        this.sharedServices = sharedServices;
        this.firstImageUpload = false;
        this.chosenPicture1 = "assets/img/icPlusAdd.png";
        this.defaultImage = false;
        this.isShow = true;
        this.isPetFlow = true;
        this.isEdit = false;
        this.progress = 75;
        this.storyData = navParams.data.lifeStoryData;
        if (typeof navParams.data.lifeStoryData != 'undefined') {
            this.lifeStoryData = navParams.data.lifeStoryData;
            this.isEdit = navParams.data.isEdit;
            console.log("LifestoryData:: ", this.lifeStoryData);
            this.chosenPicture1 = this.lifeStoryData.defaultImage ? this.lifeStoryData.defaultImage : 'assets/img/icPlusAdd.png';
            // this.chosenPicture1 = this.lifeStoryData.defaultThumbImage200 ? this.lifeStoryData.defaultThumbImage200 : 'assets/img/icPlusAdd.png'
        }
        if (this.isEdit) {
            this.isShow = false;
        }
        this._baseUrl = configService.getApiURI();
        console.log("this.isEdit ", this.isEdit);
        console.log(this.storyData);
        console.log("this.lifeStoryData::: ", this.lifeStoryData);
        //debugger
        console.log("Story Type: ");
        console.log(this.storyData.relationShip);
        if (localStorage.getItem("createStoryType") == "1") {
            this.isPetFlow = false;
        }
    }
    NewLifeStorie5Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NewLifeStorie5Page');
    };
    NewLifeStorie5Page.prototype.addPicture = function (i) {
        var _this = this;
        var actionsheet = this.actionsheetCtrl.create({
            title: 'Upload Picture',
            buttons: [
                {
                    text: 'Take Photo',
                    icon: !this.platform.is('ios') ? null : null,
                    handler: function () {
                        _this.takePicture(i);
                    }
                },
                {
                    text: !this.platform.is('ios') ? 'Choose Existing' : 'Choose Existing',
                    icon: !this.platform.is('ios') ? null : null,
                    handler: function () {
                        _this.getPicture(i);
                    }
                },
                {
                    text: 'Cancel',
                    icon: !this.platform.is('ios') ? null : null,
                    role: 'destructive',
                    handler: function () {
                        console.log('the user has cancelled the interaction.');
                    }
                }
            ]
        });
        return actionsheet.present();
    };
    NewLifeStorie5Page.prototype.getIMageIndex = function (i, picture) {
        switch (i) {
            case 1:
                this.chosenPicture1 = picture;
                this.isShow = false;
                break;
            // case 2:
            //   this.chosenPicture2 = picture;
            //   break;
            // case 3:
            //   this.chosenPicture3 = picture;
            //   break;
            // case 4:
            //   this.chosenPicture4 = picture;
            //   break;
            // case 5:
            //   this.chosenPicture5 = picture;
            //   break;
            default:
                break;
        }
    };
    NewLifeStorie5Page.prototype.takePicture = function (i) {
        var _this = this;
        var loading = this.loadingCtrl.create();
        loading.present();
        return this.cameraProvider.getPictureFromCamera().then(function (picture) {
            if (picture) {
                _this.getIMageIndex(i, picture);
            }
            loading.dismiss();
        }, function (error) {
            alert(error);
        });
    };
    NewLifeStorie5Page.prototype.getPicture = function (i) {
        var _this = this;
        return this.cameraProvider.getPictureFromPhotoLibrary().then(function (picture) {
            if (picture) {
                _this.getIMageIndex(i, picture);
            }
            // loading.dismiss();
        }, function (error) {
            alert(error);
        });
    };
    NewLifeStorie5Page.prototype.addStoryRequest = function (data, token, isEdit) {
        var _this = this;
        var lifeInfo = data;
        console.log("Dead/Alive: ", data.alive);
        console.log("Editing ::", isEdit);
        var loader = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loader.present();
        this.commonServices.addUpdateLifestory(data, token, this.isEdit).subscribe(function (data) {
            var relType = JSON.parse(data);
            var imageResponce;
            console.log("Owner ID: ", relType.data);
            // Image uploding
            if (_this.chosenPicture1 != "assets/img/icPlusAdd.png" && _this.chosenPicture1 != _this.lifeStoryData.defaultImage) {
                _this.uploadLifeStoryPic(_this.chosenPicture1, 1, relType.data, loader, lifeInfo, isEdit);
            }
            else {
                // if (this.isEdit == false) {
                loader.dismiss();
                //debugger;
                if (lifeInfo.alive) {
                    var message = '<span>A life story for "' + _this.storyData.ownerName + '" has been created. Lets add some experiences and what makes "' + _this.storyData.ownerName + '" unique<span>';
                    if (isEdit) {
                        var message = '<span>A life story for "' + _this.storyData.ownerName + '" has been updated. Lets add some experiences and what makes "' + _this.storyData.ownerName + '" unique<span>';
                    }
                    if (localStorage.getItem('CreateByBeaconId')) {
                        message = '<span>A life story for "' + _this.storyData.ownerName + '" has been created and URN is linked. Lets add some experiences and what makes you unique<span>';
                        if (isEdit) {
                            message = '<span>A life story for "' + _this.storyData.ownerName + '" has been updated and URN is linked. Lets add some experiences and what makes you unique<span>';
                        }
                    }
                    else {
                        console.log("Relationship: ", _this.storyData.relationShip);
                        if (_this.storyData.relationShip == 1) {
                            message = '<span>Your life story has been created. Let’s add some experiences and what makes you unique.<span>';
                            if (isEdit) {
                                message = '<span>Your life story has been updated. Let’s add some experiences and what makes you unique.<span>';
                            }
                        }
                    }
                    var title = "Congratulations!";
                    // this.navCtrl.setRoot(HomePage);
                    _this.alertService.presentCongratsAlert(title, message).then(function (yes) {
                        if (yes) {
                            //debugger;
                            console.log("Yes:: ", yes);
                            _this.navigate(_this.storyData, data, relType.data);
                        }
                    });
                }
                else if (!lifeInfo.alive) {
                    console.log("Dead Person");
                    var message = '<span>The life story for "' + _this.storyData.ownerName + '" has been created.';
                    if (isEdit) {
                        var message = '<span>The life story for "' + _this.storyData.ownerName + '" has been updated.';
                    }
                    var title = "ThankYou!";
                    _this.alertService.presentCongratsAlert(title, message).then(function (yes) {
                        if (yes) {
                            //debugger;
                            console.log("Yes:: ", yes);
                            _this.navigate(_this.storyData, data, relType.data);
                        }
                    });
                }
            }
        }, function (error) {
            console.log(error);
            _this.toastCtrl.create(error);
            loader.dismiss();
        });
    };
    NewLifeStorie5Page.prototype.navigate = function (storyData, data, ownerId) {
        var _this = this;
        console.log("Navigate here");
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
    NewLifeStorie5Page.prototype.showLifeStoryDetail = function (item) {
        localStorage.setItem("lifeStoryData", JSON.stringify(item));
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__life_story_life_story__["a" /* LifeStoryPage */], {
            lifeData: item,
        });
    };
    NewLifeStorie5Page.prototype.doneStory = function () {
        var _this = this;
        console.log("Done clicked");
        console.log(this.storyData);
        this.storage.get("userData").then(function (result) {
            if (result) {
                console.log(result);
                console.log(result.userInfoModel);
                if (_this.isEdit) {
                    var data = {
                        "alive": _this.lifeStoryData.isAlive,
                        "beaconId": 0,
                        "birthdate": _this.lifeStoryData.dateofBirth,
                        "birthplace": _this.lifeStoryData.placeofBirth,
                        "breed": _this.lifeStoryData.breed,
                        "currentLocation": _this.lifeStoryData.currentLocation,
                        "deathDate": _this.lifeStoryData.dateOfPassing,
                        "ownerId": _this.lifeStoryData.ownerId,
                        "ownerName": _this.lifeStoryData.ownerName,
                        "pedigree": _this.lifeStoryData.pedigree,
                        "relationType": _this.lifeStoryData.relationShip,
                        "restPlace": _this.lifeStoryData.restingPlace,
                        "typeOfPet": _this.lifeStoryData.typeOfPet,
                        "urnType": _this.lifeStoryData.urnType,
                        "causeOfDeath": _this.lifeStoryData.causeOfDeath,
                        "userId": result.userInfoModel.userId
                    };
                }
                else {
                    var data = {
                        "alive": _this.storyData.isAlive,
                        "beaconId": 0,
                        "birthdate": _this.storyData.dateofBirth,
                        "birthplace": _this.storyData.placeofBirth,
                        "breed": _this.storyData.breed,
                        "currentLocation": _this.storyData.currentLocation,
                        "deathDate": _this.storyData.dateOfPassing,
                        "ownerId": _this.storyData.ownerId,
                        "ownerName": _this.storyData.ownerName,
                        "pedigree": _this.storyData.pedigree,
                        "relationType": _this.storyData.relationShip,
                        "restPlace": _this.storyData.restingPlace,
                        "typeOfPet": _this.storyData.typeOfPet,
                        "urnType": _this.storyData.userType,
                        "userId": result.userInfoModel.userId,
                        "causeOfDeath": _this.lifeStoryData.causeOfDeath,
                    };
                }
                console.log(data);
                if (localStorage.getItem('CreateByBeaconId')) {
                    var beaconId = localStorage.getItem('CreateByBeaconId');
                    data.beaconId = parseInt(beaconId);
                }
                _this.addStoryRequest(data, result.token, _this.isEdit);
            }
        });
    };
    NewLifeStorie5Page.prototype.uploadPicture = function (chosenPicture, index, ownerId) {
        var _this = this;
        console.log("index: ", index);
        var fileTransfer = this.transfer.create();
        this.storage.get("userData").then(function (result) {
            if (result) {
                var options = {
                    fileKey: 'lifeStoryImage',
                    fileName: 'profile.jpg',
                    chunkedMode: false,
                    headers: {
                        'Content-Type': undefined,
                        'Authorization': result.token
                    }
                };
                if (index == '1' || index == 1) {
                    _this.defaultImage = true;
                }
                else {
                    _this.defaultImage = false;
                }
                var params = {
                    userId: result.userInfoModel.userId,
                    ownerId: ownerId,
                    defaultImage: _this.defaultImage,
                    position: index
                };
                options.params = params;
                console.log("options:");
                console.log(JSON.stringify(options));
                var urlString = _this.configService.apiMethod(__WEBPACK_IMPORTED_MODULE_11__Utility_Constant__["a" /* APIService */].UploadLifeStoryPic);
                fileTransfer.upload(chosenPicture, urlString, options)
                    .then(function (data) {
                    // success
                    console.log(data.response);
                    // this.toastCtrl.create('Your picture uploaded successfully');
                }, function (err) {
                    // error
                    console.log(err);
                });
            }
            else {
                // return false;
                // this.toastCtrl.create('Something went wrong!');
            }
        });
    };
    NewLifeStorie5Page.prototype.uploadLifeStoryPic = function (chosenPicture, index, ownerId, loader, lifeInfo, isEdit) {
        var _this = this;
        console.log('......3');
        this.storage.get("userData").then(function (result) {
            if (result) {
                var param = {
                    userId: result.userInfoModel.userId,
                    ownerId: ownerId,
                    defaultImage: true,
                    position: index,
                    fileKey: 'lifeStoryImage',
                    fileName: 'profile.jpg'
                };
                _this.sharedServices.uploadImage(chosenPicture, param)
                    .then(function (data) {
                    loader.dismiss();
                    loader.dismiss();
                    //debugger;
                    if (lifeInfo.alive) {
                        var message = '<span>A life story for "' + _this.storyData.ownerName + '" has been created. Lets add some experiences and what makes "' + _this.storyData.ownerName + '" unique<span>';
                        if (isEdit) {
                            var message = '<span>A life story for "' + _this.storyData.ownerName + '" has been updated. Lets add some experiences and what makes "' + _this.storyData.ownerName + '" unique<span>';
                        }
                        if (localStorage.getItem('CreateByBeaconId')) {
                            message = '<span>A life story for "' + _this.storyData.ownerName + '" has been created and URN is linked. Lets add some experiences and what makes you unique<span>';
                            if (isEdit) {
                                message = '<span>A life story for "' + _this.storyData.ownerName + '" has been updated and URN is linked. Lets add some experiences and what makes you unique<span>';
                            }
                        }
                        else {
                            console.log("Relationship: ", _this.storyData.relationShip);
                            if (_this.storyData.relationShip == 1) {
                                message = '<span>Your life story has been created. Let’s add some experiences and what makes you unique.<span>';
                                if (isEdit) {
                                    message = '<span>Your life story has been updated. Let’s add some experiences and what makes you unique.<span>';
                                }
                            }
                        }
                        var title = "Congratulations!";
                        // this.navCtrl.setRoot(HomePage);
                        _this.alertService.presentCongratsAlert(title, message).then(function (yes) {
                            if (yes) {
                                _this.navigate(_this.storyData, data, ownerId);
                            }
                        });
                    }
                    else if (!lifeInfo.alive) {
                        console.log("Dead Person");
                        var message = '<span>The life story for "' + _this.storyData.ownerName + '" has been created.';
                        if (isEdit) {
                            var message = '<span>The life story for "' + _this.storyData.ownerName + '" has been updated.';
                        }
                        var title = "ThankYou!";
                        _this.alertService.presentCongratsAlert(title, message).then(function (yes) {
                            if (yes) {
                                _this.navigate(_this.storyData, data, ownerId);
                            }
                        });
                    }
                    // var message = '<span>A life story for "' + this.storyData.ownerName + '" has been created. Lets add some experiences and what makes "' + this.storyData.ownerName + '" unique<span>';
                    // console.log("this.storyData.relationShip: ", this.storyData.relationShip);
                    // if (this.storyData.relationShip == 1) {
                    //   message = '<span>Your life story has been created. Let’s add some experiences and what makes you unique.<span>';
                    // }
                    // this.alertService.presentCongratsAlert(message).then((yes) => {
                    //   if (yes) { // this.toastCtrl.create('Created');
                    //     this.navigate(this.storyData, data, ownerId);
                    //   }
                    // });
                }, function (error) {
                    loader.dismiss();
                    _this.toastCtrl.create('Profile pic not uploaded');
                    console.log(error);
                });
            }
        });
    };
    NewLifeStorie5Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-new-life-storie5',template:/*ion-inline-start:"/Users/kanikagupta/Documents/Modurn/modurn 2/src/pages/lifestory/lifeStoryCreation/new-life-storie5/new-life-storie5.html"*/'<ion-header no-border>\n\n  <ion-navbar>\n  </ion-navbar>\n\n</ion-header>\n\n  <ion-content padding class="story-outer">\n    <div class="story-cont">\n      <h1 class="{{isPetFlow ? \'pet-follow\' : \'no\'}}">{{isEdit?\'Update\':\'Add\'}} photo</h1>\n      <p *ngIf="isPetFlow">That way people will recognise your pet</p>\n      <p *ngIf="!isPetFlow">That way people will recognise {{(lifeStoryData.isAlive) ?\'you\':\'them\'}}</p>     \n    </div>\n  \n  <ion-grid class="photo-m">\n    <ion-row>\n      <ion-col col-6>\n\n          <div class="addpic" tappable (click)="addPicture(1)">\n              <img src="{{chosenPicture1}}" />\n              <span *ngIf="isShow" class="upload-profile-pic">Upload pic</span>\n            </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <button ion-button class="mr-t80 button_color" full color="dark" (click)="doneStory()">{{isEdit?\'UPDATE\':\'DONE\'}}</button>\n  \n</ion-content>\n<div class="progressbar">\n  <div class="progress">\n    <div class="progress-bar {{isPetFlow ? \'pet-follow\' : \'no\'}}" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style="width:75%">\n    </div>\n  </div>\n</div>'/*ion-inline-end:"/Users/kanikagupta/Documents/Modurn/modurn 2/src/pages/lifestory/lifeStoryCreation/new-life-storie5/new-life-storie5.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_toast_service_toast_service__["a" /* ToastServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_camera_camera__["a" /* CameraProvider */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_13__providers_WebServices_LifeStory_LifeStoryService__["a" /* LifeStoryService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_alert_service_alert_service__["a" /* AlertServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_usercommon_services__["a" /* UserCommonServices */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_9__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_10__providers_WebServices_Common_SharedServices__["a" /* SharedServices */]])
    ], NewLifeStorie5Page);
    return NewLifeStorie5Page;
}());

//# sourceMappingURL=new-life-storie5.js.map

/***/ })

});
//# sourceMappingURL=3.js.map