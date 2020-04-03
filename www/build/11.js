webpackJsonp([11],{

/***/ 729:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddImageModule", function() { return AddImageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_image__ = __webpack_require__(772);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_bg_image_with_loader_bg_image_with_loader_module__ = __webpack_require__(763);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AddImageModule = /** @class */ (function () {
    function AddImageModule() {
    }
    AddImageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__add_image__["a" /* AddImagePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_image__["a" /* AddImagePage */]), __WEBPACK_IMPORTED_MODULE_3__components_bg_image_with_loader_bg_image_with_loader_module__["a" /* BgImageWithLoaderPageModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__add_image__["a" /* AddImagePage */]]
        })
    ], AddImageModule);
    return AddImageModule;
}());

//# sourceMappingURL=add-image.module.js.map

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

/***/ 772:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddImagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_usercommon_services__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_config_config__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_toast_service_toast_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_camera_camera__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_transfer__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Utility_Constant__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_keyboard__ = __webpack_require__(383);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









// import { EMAIL_REGES,TEXT_REGES,WITHOUT_FIRST_REGES,WITHOUT_FIRST_REGES_SPECIAL,NUMBER_REGES } from '../../../providers/constants';



var AddImagePage = /** @class */ (function () {
    function AddImagePage(keyboard, transfer, cameraProvider, platform, actionsheetCtrl, viewCtrl, toastCtrl, commonServices, navCtrl, loadingCtrl, navParams, fb, storage, configService, events) {
        this.keyboard = keyboard;
        this.transfer = transfer;
        this.cameraProvider = cameraProvider;
        this.platform = platform;
        this.actionsheetCtrl = actionsheetCtrl;
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.commonServices = commonServices;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.fb = fb;
        this.storage = storage;
        this.configService = configService;
        this.events = events;
        this.ownerId = 0;
        this.urnType = 0;
        this.isSubmit = false;
        this.chosenPicture1 = "";
        this.isShow = true;
        this.ownerId = navParams.data.ownerId;
        this.urnType = navParams.data.urnType;
        this._baseUrl = configService.getApiURI();
        this.addImgForm = fb.group({
            'title': [null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(200), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_9__Utility_Constant__["j" /* WITHOUT_FIRST_REGES_SPECIAL */])]],
        });
    }
    AddImagePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddImagePage');
    };
    AddImagePage.prototype.closeAddImages = function () {
        this.keyboard.close();
        this.navCtrl.pop();
    };
    AddImagePage.prototype.addImage = function (value) {
        var _this = this;
        //debugger
        console.log(value);
        this.isSubmit = true;
        if (value.title != null && value.title !== undefined && value.title != "" && this.chosenPicture1 != "" && this.addImgForm.valid) {
            this.storage.get("userData").then(function (result) {
                if (result) {
                    console.log(result);
                    console.log(result.userInfoModel);
                    var data = {
                        "userId": result.userInfoModel.userId,
                        "ownerId": _this.ownerId,
                        "title": value.title,
                    };
                    console.log(data);
                    var loader_1 = _this.loadingCtrl.create({
                        content: 'Please wait...'
                    });
                    loader_1.present();
                    if (_this.chosenPicture1 != "assets/img/icPlusAdd.png") {
                        _this.uploadPicture1(_this.chosenPicture1, _this.ownerId, value.title).then(function (data) {
                            loader_1.dismiss();
                            _this.navCtrl.pop();
                        }, function (error) {
                            loader_1.dismiss();
                            _this.toastCtrl.create('Profile pic not uploaded');
                            console.log(error);
                        });
                    }
                    //   this.commonServices.submitData( data, "api/v1/story/mediaLink", result.token).subscribe(data => {
                    //      loader.dismiss();
                    //   this.navCtrl.pop();
                    //   }, error => {
                    //   console.log(error);
                    //    loader.dismiss();
                    //   this.toastCtrl.create(error);
                    // });
                }
            });
        }
        else {
            console.log("Invalid!!", this.addImgForm);
            // console.log("++",this.addImgForm.controls['title'].errors.maxlength.actualLength);
            // console.log("--",this.addImgForm.controls['title'].errors.maxlength.requiredLength);
            // if(this.addImgForm.controls['title'].errors.maxlength.actualLength > this.addImgForm.controls['title'].errors.maxlength.requiredLength){
            //   this.titleLength = false;
            // }
            // else {
            //   this.titleLength = true;
            // }
        }
    };
    AddImagePage.prototype.getPicture = function (i) {
        // const loading = this.loadingCtrl.create();
        // loading.present();
        var _this = this;
        return this.cameraProvider.getPictureFromPhotoLibrary().then(function (picture) {
            if (picture) {
                if (i == 1 || i == '1') {
                    _this.chosenPicture1 = picture;
                    _this.isShow = false;
                }
            }
            // loading.dismiss();
        }, function (error) {
            alert(error);
        });
    };
    AddImagePage.prototype.addPicture = function (i) {
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
    AddImagePage.prototype.takePicture = function (i) {
        var _this = this;
        var loading = this.loadingCtrl.create();
        loading.present();
        return this.cameraProvider.getPictureFromCamera().then(function (picture) {
            if (picture) {
                if (i == 1 || i == '1') {
                    _this.chosenPicture1 = picture;
                    _this.isShow = false;
                }
            }
            loading.dismiss();
        }, function (error) {
            alert(error);
        });
    };
    //  uploadPicture(chosenPicture, ownerId, title?){
    //    //debugger;
    //     const fileTransfer: FileTransferObject = this.transfer.create();
    //     this.storage.get("userData").then((result) => {
    //       if(result){
    //         let options: FileUploadOptions = {
    //           fileKey: 'mediaGallery',
    //           fileName: 'profile.jpg',
    //           chunkedMode: false,
    //           headers: {
    //             'Content-Type': undefined,
    //             'Authorization' : result.token
    //           }
    //         }
    //         var params = {
    //           userId:result.userInfoModel.userId,
    //           ownerId:ownerId,
    //           title:title,
    //         };
    //         options.params = params;
    //         console.log("options:");
    //         console.log(JSON.stringify(options));
    //         fileTransfer.upload(chosenPicture, this._baseUrl+'api/v1/story/mediaImage', options)
    //           .then((data) => {
    //             // alert("success");
    //             console.log(data.response);
    //             // this.toastCtrl.create('Your picture uploaded successfully');
    //             return true;
    //           }, (err) => {
    //             // error
    //             console.log(err);
    //             return false;
    //           });
    //       } else {
    //         // return false;
    //         // this.toastCtrl.create('Something went wrong!');
    //       }
    //     });
    // }
    AddImagePage.prototype.uploadPicture1 = function (chosenPicture, ownerId, title) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                var fileTransfer_1 = _this.transfer.create();
                _this.storage.get("userData").then(function (result) {
                    if (result) {
                        var options = {
                            fileKey: 'mediaGallery',
                            fileName: 'profile.jpg',
                            chunkedMode: false,
                            headers: {
                                'Content-Type': undefined,
                                'Authorization': result.token
                            }
                        };
                        // //debugger;
                        var params = {
                            userId: result.userInfoModel.userId,
                            ownerId: ownerId,
                            title: title,
                        };
                        options.params = params;
                        console.log("options:");
                        console.log(JSON.stringify(options));
                        fileTransfer_1.upload(chosenPicture, _this._baseUrl + 'api/v1/story/mediaImage', options)
                            .then(function (data) {
                            resolve('data');
                            _this.events.publish(__WEBPACK_IMPORTED_MODULE_9__Utility_Constant__["d" /* KEY_NOTIFF */].TabSelect, __WEBPACK_IMPORTED_MODULE_9__Utility_Constant__["f" /* LifeStoryTab */].Media);
                        }, function (error) {
                            console.log(error);
                            reject(error);
                        });
                    }
                    else {
                        // return false;
                        // this.toastCtrl.create('Something went wrong!');
                    }
                });
            }
            catch (e) {
                return reject(e);
            }
        });
        // return Observable.throw(true);
    };
    AddImagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-image',template:/*ion-inline-start:"/Users/kanikagupta/Documents/Modurn/modurn 2/src/pages/addstory/add-image/add-image.html"*/'<ion-header no-border>\n  <ion-navbar>\n\n    <ion-buttons left (click)="closeAddImages()">\n      <button class="btnColor cross-icn" ion-button icon-only>\n        <ion-icon class="icon icon-cross" item-right></ion-icon>\n        <!--<img src="assets/img/icCross@3x.png" />-->\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content class="story-outer">\n  <div padding class="story-cont">\n    <h1  class="{{urnType == 1 ? \'human-follow\':\'pet-follow\'}}">Add an image</h1>\n  </div>\n\n  <div class="image-outer" tappable (click)="addPicture(\'1\')">\n    <div *ngIf="chosenPicture1==\'\'" class="img-icon">\n      <ion-icon class="{{urnType == 1 ? \'icon icon-imag\':\'icon icon-imag pet-clr\'}}"  item-right></ion-icon>\n      <p>Click to add an image</p>\n    </div>\n    <div *ngIf="chosenPicture1 !=\'\'" style="overflow: hidden;" class="add-image-wrapper">\n      <!-- <img class="add-img-center" src="{{chosenPicture1}}" alt=""> -->\n      <bg-image-with-loader [image]="chosenPicture1"></bg-image-with-loader>\n    </div>\n  </div>\n  <div *ngIf="isSubmit && chosenPicture1==\'\'">\n    <div padding class="error-box">\n      Image is required!</div>\n  </div>\n\n  <form padding [formGroup]="addImgForm">\n\n    <ion-list class="image-form-list">\n\n      <ion-item class="image-form">\n        <ion-label stacked>Image title(Max 200 char)</ion-label>\n        <ion-input type="text" [formControl]="addImgForm.controls[\'title\']" spellcheck="true" autoComplete="true" autocorrect="true"></ion-input>\n      </ion-item>\n      <div *ngIf="isSubmit">\n        <div class="error-box" *ngIf="!addImgForm.controls[\'title\'].valid && addImgForm.controls[\'title\'].hasError(\'required\')">\n          Image title is required!</div>\n          <!-- <div class="error-box" *ngIf="addImgForm.controls[\'title\'].errors.maxlength ">Max character limit exceeded.</div> -->\n          <div class="error-box" *ngIf="addImgForm.controls[\'title\'].hasError(\'pattern\') || !addImgForm.controls[\'title\'].valid">Either character limit is exceeded or title has emojis or spaces.</div>\n          <!-- <div class="error-box" *ngIf="addImgForm.controls[\'title\'].hasError(\'pattern\')">Please enter valid title.</div> -->\n      </div>\n\n    </ion-list>\n\n    <button ion-button class="mr-t50 button_color" full color="dark" (click)="addImage(addImgForm.value)">ADD</button>\n\n  </form>\n\n</ion-content>'/*ion-inline-end:"/Users/kanikagupta/Documents/Modurn/modurn 2/src/pages/addstory/add-image/add-image.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_10__ionic_native_keyboard__["a" /* Keyboard */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_7__providers_camera_camera__["a" /* CameraProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ViewController */], __WEBPACK_IMPORTED_MODULE_6__providers_toast_service_toast_service__["a" /* ToastServiceProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_usercommon_services__["a" /* UserCommonServices */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_4__providers_config_config__["a" /* ConfigProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */]])
    ], AddImagePage);
    return AddImagePage;
}());

//# sourceMappingURL=add-image.js.map

/***/ })

});
//# sourceMappingURL=11.js.map