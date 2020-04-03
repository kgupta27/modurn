webpackJsonp([37],{

/***/ 725:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddExperienceModule", function() { return AddExperienceModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_experience__ = __webpack_require__(768);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddExperienceModule = /** @class */ (function () {
    function AddExperienceModule() {
    }
    AddExperienceModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__add_experience__["a" /* AddExperiencePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_experience__["a" /* AddExperiencePage */]),
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__add_experience__["a" /* AddExperiencePage */]]
        })
    ], AddExperienceModule);
    return AddExperienceModule;
}());

//# sourceMappingURL=add-experience.module.js.map

/***/ }),

/***/ 768:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddExperiencePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_camera_camera__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_config_config__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_transfer__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_toast_service_toast_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_usercommon_services__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Utility_Constant__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_keyboard__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_WebServices_LifeStory_LifeStoryService__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var AddExperiencePage = /** @class */ (function () {
    function AddExperiencePage(navCtrl, navParams, viewCtrl, fb, loadingCtrl, cameraProvider, actionsheetCtrl, platform, storage, transfer, configService, toastCtrl, commonServices, events, keyboard, lifeStoryService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.fb = fb;
        this.loadingCtrl = loadingCtrl;
        this.cameraProvider = cameraProvider;
        this.actionsheetCtrl = actionsheetCtrl;
        this.platform = platform;
        this.storage = storage;
        this.transfer = transfer;
        this.configService = configService;
        this.toastCtrl = toastCtrl;
        this.commonServices = commonServices;
        this.events = events;
        this.keyboard = keyboard;
        this.lifeStoryService = lifeStoryService;
        this.isSubmit = false;
        this.isShow = true;
        this.urnType = 0;
        this.defaultImage = false;
        this.ownerId = 0;
        this.isValidDate = false;
        this.isExp = false;
        this.isImage = false;
        this.imageCount = 0;
        this.chosenPicture1 = "assets/img/icPlusAddsub.png";
        this.chosenPicture2 = "assets/img/icPlusAddsub.png";
        this.chosenPicture3 = "assets/img/icPlusAddsub.png";
        this.chosenPicture4 = "assets/img/icPlusAddsub.png";
        this.chosenPicture5 = "assets/img/icPlusAddsub.png";
        this.chosenPicture6 = "assets/img/icPlusAddsub.png";
        this.chosenPicture7 = "assets/img/icPlusAddsub.png";
        this.chosenPicture8 = "assets/img/icPlusAddsub.png";
        //debugger;
        console.log('navParams  ', navParams.data);
        this.isExp = navParams.data.data;
        if (typeof this.isExp === 'undefined') {
            this.ownerId = navParams.data.ownerId;
        }
        else {
            this.getExperineceDetails();
            this.ownerId = navParams.data.data.ownerId;
        }
        // alert(this.ownerId);
        this._baseUrl = configService.getApiURI();
        this.addExpForm = fb.group({
            'title': [null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_9__Utility_Constant__["j" /* WITHOUT_FIRST_REGES_SPECIAL */])]],
            'whHappen': [null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_9__Utility_Constant__["j" /* WITHOUT_FIRST_REGES_SPECIAL */])]],
            // 'wnHappen': [null, Validators.compose([Validators.required])],
            'wnHappen': [null],
            'withYou': [null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_9__Utility_Constant__["j" /* WITHOUT_FIRST_REGES_SPECIAL */])]],
            'expDetails': [null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_9__Utility_Constant__["j" /* WITHOUT_FIRST_REGES_SPECIAL */])]],
        });
        this.urnType = navParams.data.urnType;
        console.log("this.urnType: ", this.urnType);
    }
    AddExperiencePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddExperiencePage');
    };
    AddExperiencePage.prototype.closeAddExp = function () {
        var _this = this;
        //debugger
        if (this.loader) {
            this.loader.dismiss();
            this.loader = undefined;
        }
        this.events.publish(__WEBPACK_IMPORTED_MODULE_9__Utility_Constant__["d" /* KEY_NOTIFF */].LifeStoryUpdate);
        if (this.urnType == 1) {
            this.storage.get("experience").then(function (resulst) {
                //debugger;
                if (resulst) {
                    _this.keyboard.close();
                    console.log("\n\nSecond time");
                    // setTimeout(() => {
                    _this.navCtrl.pop();
                    // },1500);
                }
                else {
                    _this.storage.set("experience", JSON.stringify(true));
                    console.log("\n\nFirst time");
                    _this.keyboard.close();
                    console.log("POp to called ");
                    // this.navCtrl.popTo('ExperiencePage');
                    _this.navCtrl.popToRoot();
                }
            });
        }
        else {
            this.storage.get("petexperience").then(function (resulst) {
                //debugger;
                if (resulst) {
                    _this.keyboard.close();
                    console.log("\n\nSecond time");
                    // setTimeout(() => {
                    _this.navCtrl.pop();
                    // },1500);
                }
                else {
                    _this.storage.set("petexperience", JSON.stringify(true));
                    console.log("\n\nFirst time");
                    _this.keyboard.close();
                    console.log("POp to called ");
                    // this.navCtrl.popTo('ExperiencePage');
                    _this.navCtrl.popToRoot();
                }
            });
        }
        // this.events.publish(Constant.KEY_NOTIFF.LifeStoryUpdate);
    };
    AddExperiencePage.prototype.getIMageIndex = function (i, picture) {
        //debugger
        switch (i) {
            case 1:
                this.chosenPicture1 = picture;
                this.isShow = false;
                break;
            case 2:
                this.chosenPicture2 = picture;
                break;
            case 3:
                this.chosenPicture3 = picture;
                break;
            case 4:
                this.chosenPicture4 = picture;
                break;
            case 5:
                this.chosenPicture5 = picture;
                break;
            case 6:
                this.chosenPicture6 = picture;
                break;
            case 7:
                this.chosenPicture7 = picture;
                break;
            case 8:
                this.chosenPicture8 = picture;
                break;
            default:
                break;
        }
    };
    AddExperiencePage.prototype.getPicture = function (i) {
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
    AddExperiencePage.prototype.addPicture = function (i) {
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
    AddExperiencePage.prototype.takePicture = function (i) {
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
    AddExperiencePage.prototype.uploadPicture = function (chosenPicture, index, ownerId, expId) {
        var _this = this;
        //debugger
        console.log("index: ", index);
        console.log("Begin Upload,Image count: ", this.imageCount);
        // let loader = this.loadingCtrl.create({
        //   content: 'Please wait...'
        // });
        // loader.present();
        var fileTransfer = this.transfer.create();
        this.storage.get("userData").then(function (result) {
            if (result) {
                var options = {
                    fileKey: 'experienceGallery',
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
                    experienceId: expId,
                    position: index
                };
                options.params = params;
                // //debugger;
                console.log("options:");
                console.log(JSON.stringify(options));
                fileTransfer.upload(chosenPicture, _this._baseUrl + 'api/v1/story/upLoadImageExperience', options)
                    .then(function (data) {
                    // alert("success");
                    _this.imageCount = _this.imageCount - 1;
                    console.log("Image Successfully uploaded, count: ", _this.imageCount);
                    console.log(data.response);
                    // loader.dismiss();
                    if (_this.imageCount == 0) {
                        console.log("Inside this Function: ", _this.imageCount);
                        _this.closeExperience();
                    }
                    // this.toastCtrl.create('Your picture uploaded successfully');
                }, function (err) {
                    // error
                    // loader.dismiss();
                    _this.toastCtrl.create('Image not uploaded successfully!');
                    console.log(err);
                });
            }
            else {
                // loader.dismiss();
                // this.toastCtrl.create('Something went wrong!');
            }
        });
    };
    AddExperiencePage.prototype.closeExperience = function () {
        var _this = this;
        if (this.imageCount == 0) {
            console.log("Inside the upload and now closing");
            this.closeAddExp();
            setTimeout(function () {
                _this.events.publish(__WEBPACK_IMPORTED_MODULE_9__Utility_Constant__["d" /* KEY_NOTIFF */].TabSelect, __WEBPACK_IMPORTED_MODULE_9__Utility_Constant__["f" /* LifeStoryTab */].Experience);
            }, 1000);
        }
    };
    AddExperiencePage.prototype.addExp = function (value) {
        var _this = this;
        //debugger;
        this.isSubmit = true;
        var today = new Date();
        var dd = ('0' + (today.getDate())).slice(-2);
        var mm = ('0' + (today.getMonth() + 1)).slice(-2); //January is 0!
        var yyyy = today.getFullYear();
        console.log(mm);
        var maxDate = yyyy + '-' + mm + '-' + dd;
        if (value.wnHappen > maxDate) {
            this.isValidDate = true;
            console.log("isValidDate: ", this.isValidDate);
            // this.toastCtrl.create('Date of birth is not valid');
            return;
        }
        else {
            this.isValidDate = false;
        }
        if (this.addExpForm.valid)
            this.storage.get("userData").then(function (result) {
                if (result) {
                    console.log(result);
                    console.log(result.userInfoModel);
                    var data = {};
                    if (typeof _this.isExp != 'undefined') {
                        //debugger
                        console.log("value.wnHappen: ", value.wnHappen);
                        if (value.wnHappen != null) {
                            var date = new Date(value.wnHappen);
                            value.wnHappen = date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + ('0' + (date.getDate())).slice(-2);
                        }
                        else {
                            console.log("value.wnHappen: null ");
                            value.wnHappen = null;
                        }
                        data =
                            {
                                "userId": result.userInfoModel.userId,
                                "ownerId": _this.ownerId,
                                "title": value.title,
                                "experiencePlace": value.whHappen,
                                "experienceDate": value.wnHappen,
                                "personWithYou": value.withYou,
                                "despcription": value.expDetails,
                                "experienceId": _this.navParams.data.data.expId
                            };
                    }
                    else {
                        data =
                            {
                                "userId": result.userInfoModel.userId,
                                "ownerId": _this.ownerId,
                                "title": value.title,
                                "experiencePlace": value.whHappen,
                                "experienceDate": value.wnHappen,
                                "personWithYou": value.withYou,
                                "despcription": value.expDetails
                            };
                    }
                    console.log(data);
                    _this.loader = _this.loadingCtrl.create({
                        content: 'Please wait...'
                    });
                    _this.loader.present();
                    ///////////////////////////////////////////
                    if (typeof _this.isExp == 'undefined') {
                        _this.commonServices.submitDataExperience(data, "api/v1/story/experience", result.token, false).subscribe(function (data) {
                            var relType = JSON.parse(data);
                            console.log(relType.data);
                            // //debugger;
                            console.log("storyid: ", relType.data);
                            // Image uploding
                            if (_this.chosenPicture1 != "assets/img/icPlusAddsub.png") {
                                _this.imageCount = _this.imageCount + 1;
                                ;
                                console.log("Image Count: ", _this.imageCount);
                                _this.uploadPicture(_this.chosenPicture1, 1, _this.ownerId, relType.data);
                            }
                            if (_this.chosenPicture2 != "assets/img/icPlusAddsub.png") {
                                _this.imageCount = _this.imageCount + 1;
                                ;
                                _this.uploadPicture(_this.chosenPicture2, 2, _this.ownerId, relType.data);
                            }
                            if (_this.chosenPicture3 != "assets/img/icPlusAddsub.png") {
                                _this.imageCount = _this.imageCount + 1;
                                ;
                                _this.uploadPicture(_this.chosenPicture3, 3, _this.ownerId, relType.data);
                            }
                            if (_this.chosenPicture4 != "assets/img/icPlusAddsub.png") {
                                _this.imageCount = _this.imageCount + 1;
                                ;
                                _this.uploadPicture(_this.chosenPicture4, 4, _this.ownerId, relType.data);
                            }
                            if (_this.chosenPicture5 != "assets/img/icPlusAddsub.png") {
                                _this.imageCount = _this.imageCount + 1;
                                ;
                                _this.uploadPicture(_this.chosenPicture5, 5, _this.ownerId, relType.data);
                            }
                            if (_this.chosenPicture6 != "assets/img/icPlusAddsub.png") {
                                _this.imageCount = _this.imageCount + 1;
                                ;
                                _this.uploadPicture(_this.chosenPicture6, 6, _this.ownerId, relType.data);
                            }
                            if (_this.chosenPicture7 != "assets/img/icPlusAddsub.png") {
                                _this.imageCount = _this.imageCount + 1;
                                ;
                                _this.uploadPicture(_this.chosenPicture7, 7, _this.ownerId, relType.data);
                            }
                            if (_this.chosenPicture8 != "assets/img/icPlusAddsub.png") {
                                _this.imageCount = _this.imageCount + 1;
                                ;
                                _this.uploadPicture(_this.chosenPicture8, 8, _this.ownerId, relType.data);
                            }
                            // loader.dismiss();
                            // this.toastCtrl.create('Saved scu');
                            // this.navCtrl.popToRoot();
                            console.log("Image Count:: ", _this.imageCount);
                            // this.closeExperience();
                            if (_this.imageCount <= 0) {
                                console.log("Image Count:: ", _this.imageCount);
                                // this.loader.dismiss();
                                _this.closeAddExp();
                                setTimeout(function () {
                                    _this.events.publish(__WEBPACK_IMPORTED_MODULE_9__Utility_Constant__["d" /* KEY_NOTIFF */].TabSelect, __WEBPACK_IMPORTED_MODULE_9__Utility_Constant__["f" /* LifeStoryTab */].Experience);
                                }, 1000);
                            }
                        }, function (error) {
                            console.log(error);
                            _this.loader.dismiss();
                            _this.loader = undefined;
                            _this.toastCtrl.create(error);
                        });
                    }
                    else {
                        console.log(data);
                        //debugger
                        _this.commonServices.submitDataExperience(data, "api/v1/story/updateExperience", result.token, true).subscribe(function (data) {
                            var relType = JSON.parse(data);
                            console.log(relType.data);
                            //debugger;
                            console.log("storyid: ", relType.data);
                            // if images are available
                            // if(this.isImage){
                            // Image uploding
                            console.log("counter:: ", _this.imageCount);
                            if (_this.chosenPicture1 != "assets/img/icPlusAddsub.png" && !_this.chosenPicture1.startsWith('http')) {
                                _this.imageCount = _this.imageCount + 1;
                                _this.uploadPicture(_this.chosenPicture1, 1, _this.ownerId, _this.navParams.data.data.expId);
                            }
                            if (_this.chosenPicture2 != "assets/img/icPlusAddsub.png" && !_this.chosenPicture2.startsWith('http')) {
                                _this.imageCount = _this.imageCount + 1;
                                ;
                                _this.uploadPicture(_this.chosenPicture2, 2, _this.ownerId, _this.navParams.data.data.expId);
                            }
                            if (_this.chosenPicture3 != "assets/img/icPlusAddsub.png" && !_this.chosenPicture3.startsWith('http')) {
                                _this.imageCount = _this.imageCount + 1;
                                ;
                                _this.uploadPicture(_this.chosenPicture3, 3, _this.ownerId, _this.navParams.data.data.expId);
                            }
                            if (_this.chosenPicture4 != "assets/img/icPlusAddsub.png" && !_this.chosenPicture4.startsWith('http')) {
                                _this.imageCount = _this.imageCount + 1;
                                ;
                                _this.uploadPicture(_this.chosenPicture4, 4, _this.ownerId, _this.navParams.data.data.expId);
                            }
                            if (_this.chosenPicture5 != "assets/img/icPlusAddsub.png" && !_this.chosenPicture5.startsWith('http')) {
                                _this.imageCount = _this.imageCount + 1;
                                ;
                                _this.uploadPicture(_this.chosenPicture5, 5, _this.ownerId, _this.navParams.data.data.expId);
                            }
                            if (_this.chosenPicture6 != "assets/img/icPlusAddsub.png" && !_this.chosenPicture6.startsWith('http')) {
                                _this.imageCount = _this.imageCount + 1;
                                ;
                                _this.uploadPicture(_this.chosenPicture6, 6, _this.ownerId, _this.navParams.data.data.expId);
                            }
                            if (_this.chosenPicture7 != "assets/img/icPlusAddsub.png" && !_this.chosenPicture7.startsWith('http')) {
                                _this.imageCount = _this.imageCount + 1;
                                ;
                                _this.uploadPicture(_this.chosenPicture7, 7, _this.ownerId, _this.navParams.data.data.expId);
                            }
                            if (_this.chosenPicture8 != "assets/img/icPlusAddsub.png" && !_this.chosenPicture8.startsWith('http')) {
                                _this.imageCount = _this.imageCount + 1;
                                ;
                                _this.uploadPicture(_this.chosenPicture8, 8, _this.ownerId, _this.navParams.data.data.expId);
                            }
                            // }
                            // loader.dismiss();
                            _this.closeExperience();
                            // //debugger
                            // console.log("Close Page");
                            // this.closeAddExp();
                            // setTimeout(() => {
                            //   this.events.publish(Constant.KEY_NOTIFF.TabSelect, Constant.LifeStoryTab.Experience);
                            // }, 1000);
                        }, function (error) {
                            console.log(error);
                            _this.loader.dismiss();
                            _this.loader = undefined;
                            _this.toastCtrl.create(error);
                        });
                    }
                    //////////////////////////////////////////////////
                    console.log("After Close function");
                }
            });
    };
    AddExperiencePage.prototype.getExperineceDetails = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loader.present();
        this.storage.get("userData").then(function (result) {
            var parms = {
                experienceId: _this.navParams.data.data.expId,
                ownerId: _this.navParams.data.data.ownerId,
                userId: _this.navParams.data.data.userId
            };
            //debugger
            _this.lifeStoryService.fetExperience(parms)
                .then(function (data) {
                console.log(data);
                _this.result = data;
                _this.addExpForm.controls['title'].setValue(_this.result.data.title);
                _this.addExpForm.controls['whHappen'].setValue(_this.result.data.experiencePlace);
                console.log("this.result.data.experienceDateIso:: ", _this.result.data.experienceDateIso);
                // if(this.result.data.experienceDateIso === '') {
                //   console.log("yes blanck 12");
                // }else {
                //   console.log("no blanck 12");
                // }
                // if(this.result.data.experienceDateIso) {
                //   console.log("not blanck 2");
                // }else {
                //   console.log("yes blanck 2");
                // }
                if (_this.result.data.experienceDateIso) {
                    console.log("inside experienceDateIso");
                    var date = _this.result.data.experienceDateIso;
                    _this.addExpForm.controls['wnHappen'].setValue(date);
                }
                else {
                    console.log("yes blanck 2");
                }
                _this.addExpForm.controls['withYou'].setValue(_this.result.data.personWithYou);
                _this.addExpForm.controls['expDetails'].setValue(_this.result.data.despcription);
                if (_this.result.data.experienceGallery.length > 0) {
                    _this.isImage = true;
                    console.log("isImage:: ", _this.isImage);
                    for (var i = 0; i < _this.result.data.experienceGallery.length; i++) {
                        _this.getIMageIndex(_this.result.data.experienceGallery[i].position, _this.result.data.experienceGallery[i].imageThumbUrl200);
                    }
                }
                loader.dismiss();
                // this.expData = data;
                // this.expData = this.expData.data;
                // if (this.expData.experienceGallery.length > 0) {
                //   this.bgColor = this.expData.experienceGallery[0].imageMediumUrl500;
                //   this.isAlbum = true;
                //}
            }, function (error) {
                loader.dismiss();
                console.log(error);
            });
        });
    };
    AddExperiencePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-experience',template:/*ion-inline-start:"/Users/kanikagupta/Documents/Modurn/modurn 2/src/pages/addstory/add-experience/add-experience.html"*/'<ion-header no-border>\n  <ion-navbar>\n\n    <ion-buttons left (click)="closeAddExp()">\n      <button class="btnColor cross-icn" ion-button icon-only>\n        <ion-icon class="icon icon-cross" item-right></ion-icon>\n        <!--<img src="assets/img/icCross@3x.png" />-->\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\nLet’s create an experience\n<ion-content padding class="story-outer">\n  <div class="story-cont">\n    <h1 class="{{urnType == 1 ? \'human-follow\':\'pet-follow\'}}">{{isExp?\'Update\':\'Let’s create\'}} an experience</h1>\n  </div>\n  <form [formGroup]="addExpForm">\n\n    <ion-list>\n\n      <ion-item>\n        <ion-label stacked>Experience title</ion-label>\n        <ion-input type="text" [formControl]="addExpForm.controls[\'title\']" spellcheck="true" autoComplete="true" autocorrect="true"></ion-input>\n      </ion-item>\n      <div *ngIf="isSubmit">\n        <div class="error-box" *ngIf="!addExpForm.controls[\'title\'].valid && addExpForm.controls[\'title\'].hasError(\'required\')">\n          Experience title is required!</div>\n          <div class="error-box"  *ngIf="addExpForm.controls[\'title\'].hasError(\'pattern\')">Please enter valid title.</div>\n          <div class="error-box" *ngIf="addExpForm.controls[\'title\'].hasError(\'maxlength\')">* Maximum length is 30!</div>\n      </div>\n      <ion-item>\n        <ion-label stacked>Where did this happen?</ion-label>\n        <ion-input type="text" [formControl]="addExpForm.controls[\'whHappen\']" spellcheck="true" autoComplete="true" autocorrect="true"></ion-input>\n      </ion-item>\n      <div *ngIf="isSubmit">\n        <div class="error-box" *ngIf="!addExpForm.controls[\'whHappen\'].valid && addExpForm.controls[\'whHappen\'].hasError(\'required\')">\n          Where did this happen is required!</div>\n          <div class="error-box"  *ngIf="addExpForm.controls[\'whHappen\'].hasError(\'pattern\')">Please enter valid text.</div>\n          <div class="error-box" *ngIf="addExpForm.controls[\'whHappen\'].hasError(\'maxlength\')">* Maximum length is 30!</div>\n          \n      </div>\n      <!--<ion-item>\n        <ion-label stacked>When did this happen?</ion-label>\n        <ion-input type="text" [formControl]="addExpForm.controls[\'wnHappen\']"></ion-input>\n      </ion-item>\n      <div *ngIf="isSubmit">\n        <div class="error-box" *ngIf="!addExpForm.controls[\'wnHappen\'].valid && addExpForm.controls[\'wnHappen\'].hasError(\'required\')">\n        When did this happen is required!</div>\n      </div>-->\n\n      <ion-item class="item-input">\n        <ion-label stacked>When did this happen?</ion-label>\n        <!--<ion-icon class="icon icon-ic-calander" item-right></ion-icon>-->\n\n        <ion-input style="display:none" [formControl]="addExpForm.controls[\'wnHappen\']" class="hotfix"></ion-input>\n        <ion-datetime class="dobCal" displayFormat="DD MMM YYYY" pickerFormat="DD MMM YYYY" [formControl]="addExpForm.controls[\'wnHappen\']"\n          [class.invalid]="!addExpForm.controls.wnHappen.valid && (addExpForm.controls.wnHappen.dirty)"></ion-datetime>\n      </ion-item>\n      <div *ngIf="isSubmit">\n        <!-- <div class="error-box" *ngIf="!addExpForm.controls[\'wnHappen\'].valid"> When did this happen is required!</div> -->\n        <div class="error-box" *ngIf="isValidDate"> Please select valid date!</div>\n      </div>\n\n      <ion-item>\n        <ion-label stacked>Who was with you?</ion-label>\n        <ion-input type="text" [formControl]="addExpForm.controls[\'withYou\']" spellcheck="true" autoComplete="true" autocorrect="true"></ion-input>\n      </ion-item>\n      <div *ngIf="isSubmit">\n        <div class="error-box" *ngIf="!addExpForm.controls[\'withYou\'].valid && addExpForm.controls[\'withYou\'].hasError(\'required\')">\n          Who was with you is required!</div>\n        <div class="error-box"  *ngIf="addExpForm.controls[\'withYou\'].hasError(\'pattern\')">Please enter valid text.</div>\n        <div class="error-box" *ngIf="addExpForm.controls[\'withYou\'].hasError(\'maxlength\')">* Maximum length is 30!</div>\n      </div>\n      <ion-item>\n        <ion-label stacked>Experience details</ion-label>\n        <ion-input type="text" [formControl]="addExpForm.controls[\'expDetails\']" spellcheck="true" autoComplete="true" autocorrect="true"></ion-input>\n      </ion-item>\n      <div *ngIf="isSubmit">\n        <div class="error-box" *ngIf="!addExpForm.controls[\'expDetails\'].valid && addExpForm.controls[\'expDetails\'].hasError(\'required\')">\n          Experience details is required!</div>\n         <div class="error-box"  *ngIf="addExpForm.controls[\'expDetails\'].hasError(\'pattern\')">Please enter valid text.</div>\n         <div class="error-box" *ngIf="addExpForm.controls[\'withYou\'].hasError(\'maxlength\')">* Maximum length is 150!</div>\n      </div>\n    </ion-list>\n    <ion-label class="imgLable" stacked>Images</ion-label>\n    <ion-grid class="photo-m imgLeft">\n\n      <ion-row>\n        <ion-col col-3>\n          <div class="addpic" tappable (click)="addPicture(1)">\n            <img src="{{chosenPicture1}}" />\n          </div>\n        </ion-col>\n        <ion-col col-3>\n          <div class="addpic" tappable (click)="addPicture(2)">\n            <img src="{{chosenPicture2}}" />\n          </div>\n        </ion-col>\n        <ion-col col-3>\n          <div class="addpic" tappable (click)="addPicture(3)">\n            <img src="{{chosenPicture3}}" />\n          </div>\n        </ion-col>\n        <ion-col col-3>\n          <div class="addpic" tappable (click)="addPicture(4)">\n            <img src="{{chosenPicture4}}" />\n          </div>\n        </ion-col>\n        <ion-col col-3>\n          <div class="addpic" tappable (click)="addPicture(5)">\n            <img src="{{chosenPicture5}}" />\n          </div>\n        </ion-col>\n        <ion-col col-3>\n          <div class="addpic" tappable (click)="addPicture(6)">\n            <img src="{{chosenPicture6}}" />\n          </div>\n        </ion-col>\n        <ion-col col-3>\n          <div class="addpic" tappable (click)="addPicture(7)">\n            <img src="{{chosenPicture7}}" />\n          </div>\n        </ion-col>\n        <ion-col col-3>\n          <div class="addpic" tappable (click)="addPicture(8)">\n            <img src="{{chosenPicture8}}" />\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <button ion-button class="mr-t80 button_color" full color="dark" (click)="addExp(addExpForm.value)">{{isExp?\'UPDATE\':\'ADD\'}}</button>\n\n  </form>\n\n\n\n</ion-content>'/*ion-inline-end:"/Users/kanikagupta/Documents/Modurn/modurn 2/src/pages/addstory/add-experience/add-experience.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_camera_camera__["a" /* CameraProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_5__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_toast_service_toast_service__["a" /* ToastServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_8__providers_usercommon_services__["a" /* UserCommonServices */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_keyboard__["a" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_11__providers_WebServices_LifeStory_LifeStoryService__["a" /* LifeStoryService */]])
    ], AddExperiencePage);
    return AddExperiencePage;
}());

//# sourceMappingURL=add-experience.js.map

/***/ })

});
//# sourceMappingURL=37.js.map