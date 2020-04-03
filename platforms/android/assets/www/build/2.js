webpackJsonp([2],{

/***/ 758:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfileModule", function() { return EditProfileModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_profile__ = __webpack_require__(801);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_bg_image_with_loader_bg_image_with_loader_module__ = __webpack_require__(763);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var EditProfileModule = /** @class */ (function () {
    function EditProfileModule() {
    }
    EditProfileModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__edit_profile__["a" /* EditProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__edit_profile__["a" /* EditProfilePage */]), __WEBPACK_IMPORTED_MODULE_3__components_bg_image_with_loader_bg_image_with_loader_module__["a" /* BgImageWithLoaderPageModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__edit_profile__["a" /* EditProfilePage */]]
        })
    ], EditProfileModule);
    return EditProfileModule;
}());

//# sourceMappingURL=edit-profile.module.js.map

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

/***/ 801:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_camera_camera__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_toast_service_toast_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Utility_Constant__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_WebServices_User_UserManager__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_SharedTask_sharedtask__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_WebServices_Common_SharedServices__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_config_config__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { AlertServiceProvider } from '../../../providers/alert-service/alert-service';
// import { MyProfilePage } from '../my-profile/my-profile';








var EditProfilePage = /** @class */ (function () {
    function EditProfilePage(navCtrl, fb, toastCtrl, navParams, actionsheetCtrl, cameraProvider, platform, loadingCtrl, userManager, storage, alertCtrl, sharedTaskProvider, sharedServices, config
        // public alertService: AlertServiceProvider
    ) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.fb = fb;
        this.toastCtrl = toastCtrl;
        this.navParams = navParams;
        this.actionsheetCtrl = actionsheetCtrl;
        this.cameraProvider = cameraProvider;
        this.platform = platform;
        this.loadingCtrl = loadingCtrl;
        this.userManager = userManager;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.sharedTaskProvider = sharedTaskProvider;
        this.sharedServices = sharedServices;
        this.config = config;
        this.updateUserData = {};
        this.isSubmit = false;
        this.storeProfileData = {};
        this.isImageChanged = false;
        this.storage.get("userData").then(function (result) {
            console.log(result);
            _this.profileImg = result.userInfoModel.profileImg;
            console.log(result.userInfoModel.userName);
            _this.name = result.userInfoModel.userName;
            _this.editProfileForm.controls['name'].setValue(_this.name);
            console.log(result.userInfoModel.nickName);
            _this.nickName = result.userInfoModel.nickName;
            _this.editProfileForm.controls['nickName'].setValue(_this.nickName);
            console.log(result.userInfoModel.email);
            _this.email = result.userInfoModel.email;
            _this.editProfileForm.controls['email'].setValue(_this.email);
        });
        this.createForm();
    }
    EditProfilePage.prototype.createForm = function () {
        var EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        this.editProfileForm = this.fb.group({
            'name': [null, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_5__Utility_Constant__["j" /* WITHOUT_FIRST_REGES_SPECIAL */]), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].maxLength(30)]],
            'nickName': [null, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_5__Utility_Constant__["j" /* WITHOUT_FIRST_REGES_SPECIAL */]), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].maxLength(30)]],
            'email': [null, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required, , __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].pattern(EMAIL_REGEXP)]]
        });
        // this.editProfileForm.controls['fullname'].setValue(this.fullName);
    };
    EditProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditProfilePage');
    };
    EditProfilePage.prototype.changePicture = function () {
        var _this = this;
        var actionsheet = this.actionsheetCtrl.create({
            title: 'Upload Picture',
            buttons: [
                {
                    text: 'Take Photo',
                    icon: !this.platform.is('ios') ? null : null,
                    handler: function () {
                        _this.takePicture();
                    }
                },
                {
                    text: !this.platform.is('ios') ? 'Choose Existing' : 'Choose Existing',
                    icon: !this.platform.is('ios') ? null : null,
                    handler: function () {
                        _this.getPicture();
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
    EditProfilePage.prototype.takePicture = function () {
        var _this = this;
        return this.cameraProvider.getPictureFromCamera().then(function (picture) {
            if (picture) {
                _this.profileImg = picture;
                _this.isImageChanged = true;
            }
        }, function (error) {
            // alert(error);
        });
    };
    EditProfilePage.prototype.getPicture = function () {
        var _this = this;
        return this.cameraProvider.getPictureFromPhotoLibrary().then(function (picture) {
            if (picture) {
                _this.profileImg = picture;
                _this.isImageChanged = true;
            }
        }, function (error) {
            // alert(error);
        });
    };
    EditProfilePage.prototype.saveProfile = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirm Password',
            message: 'Please confirm your password to save your new email.',
            inputs: [
                {
                    name: 'currpassword',
                    placeholder: 'Current password',
                    type: 'password'
                }
            ],
            buttons: [
                {
                    text: 'SAVE',
                    handler: function (data) {
                        console.log(data.currpassword);
                        // this.navCtrl.push(MyProfilePage);
                        // this.navCtrl.popToRoot();
                        // this.confirmPassword(data.currpassword);
                        // if(data.currpassword)
                        var validateObj = _this.validatepswrd(data.currpassword);
                        console.log(validateObj.isValid);
                        if (!validateObj.isValid) {
                            //null case
                            console.log("False => Now hide", validateObj.message);
                            //alert(validateObj.message);
                            return false;
                        }
                        else {
                            //not null case
                            console.log("True => Now save", validateObj.message);
                            //make HTTP call
                            _this.confirmPassword(data.currpassword);
                        }
                    }
                }
            ],
            cssClass: 'confirm-alert'
        });
        alert.present();
    };
    EditProfilePage.prototype.validatepswrd = function (data) {
        //debugger;
        if (data) {
            return {
                isValid: true,
                message: ''
            };
        }
        else {
            return {
                isValid: false,
                message: 'Password Mismatch'
            };
        }
    };
    EditProfilePage.prototype.submitForm = function (formData) {
        this.isSubmit = true;
        // console.log(this.email);
        // console.log(formData.email);
        if (this.editProfileForm.valid) {
            this.storeProfileData = formData;
            // this.storage.get("userData").then((result) => {
            if (this.email != formData.email) {
                // console.log(this.email);
                // console.log(result.userInfoModel.email);
                this.saveProfile();
            }
            else {
                this.editProfile(formData);
            }
            // this.editProfile(formData);
        }
    };
    EditProfilePage.prototype.confirmPassword = function (formData) {
        // var formDataObj = new FormData();
        // formDataObj.append("password", formData);
        var _this = this;
        var formDataObj = {
            "currentPassword": formData,
            "userId": window.localStorage.getItem('userId')
        };
        this.userManager.confirmpswrd(formDataObj)
            .then(function (data) {
            // //debugger;
            var message = data;
            console.log('life story data =', data);
            _this.editProfile(_this.storeProfileData);
            // this.sharedTaskProvider.showToastMessage(message);
            // this.sharedTaskProvider.showToastMessage("Successfully Updated");
        }, function (error) {
            ////debugger;
            console.log(error);
        });
    };
    EditProfilePage.prototype.editProfile = function (formData) {
        var _this = this;
        var formDataObj = new FormData();
        console.log("Check for nickname: ", formData.nickname);
        if (formData.nickName == null) {
            console.log("Sending null");
            formData.nickName = "";
        }
        //formDataObj.append("userId", formData.userId);
        formDataObj.append("name", formData.name);
        formDataObj.append("nickName", formData.nickName);
        formDataObj.append("Email", formData.email);
        //debugger;
        console.log(formDataObj);
        //debugger;
        console.log(formData);
        if (this.isImageChanged) {
            this.saveDataWithImage(this.profileImg, formData);
            return;
        }
        this.userManager.editProfile(formDataObj)
            .then(function (data) {
            console.log('life story data =', data);
            //debugger;
            var profileObject;
            profileObject = data;
            if (profileObject.responseCode == '200') {
                var message = profileObject.message;
                _this.sharedTaskProvider.showToastMessage(message);
                // alert('edit');
                // //debugger;
                console.log(profileObject.data);
                _this.storage.set("userData", profileObject.data);
                window.localStorage.setItem('token', profileObject.data.token);
                _this.closeEditForm();
            }
            // this.sharedTaskProvider.showToastMessage(message);
            // this.storage.set("userData", userData.data);
        }, function (error) {
            ////debugger;
            console.log(error);
        });
    };
    EditProfilePage.prototype.closeEditForm = function () {
        //this.viewCtrl.dismiss();
        console.log("Now close form");
        // this.storage.set("userData", userData.data);
        console.log(this.storeProfileData);
        // this.navCtrl.popToRoot();
        this.navCtrl.push('SettingsPage');
    };
    EditProfilePage.prototype.saveDataWithImage = function (choosenPicture, formData) {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loader.present();
        var param = {
            fileKey: 'profileImg',
            fileName: 'profile.jpg',
            name: formData.name,
            nickName: formData.nickName,
            email: formData.email
        };
        var urlString = this.config.apiMethod(__WEBPACK_IMPORTED_MODULE_5__Utility_Constant__["a" /* APIService */].UpdateProfilePic);
        //this.sharedServices.uploadImage(chosenPicture,index,ownerId).
        this.sharedServices.uploadImageTask(choosenPicture, param, urlString)
            .then(function (data) {
            //debugger;
            console.log('life story data =', data);
            var profileObject;
            profileObject = data;
            loader.dismiss();
            profileObject = JSON.parse(profileObject.response);
            if (profileObject.responseCode == '200') {
                var message = profileObject.message;
                _this.sharedTaskProvider.showToastMessage(message);
                _this.storage.set("userData", profileObject.data);
                _this.closeEditForm();
            }
            else {
                console.log("Not reachable");
            }
        }, function (error) {
            loader.dismiss();
        });
    };
    EditProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-profile',template:/*ion-inline-start:"/Users/kanikagupta/Documents/Modurn/modurn 2/src/pages/profile/edit-profile/edit-profile.html"*/'<ion-header no-border>\n\n  <ion-navbar hideBackButton="true">\n    <ion-buttons left (click)="closeEditForm()">\n      <button class="btnColor cross-icn" ion-button icon-only>\n        <ion-icon class="icon icon-cross" item-right></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n<ion-content padding class="story-outer">\n  <div class="story-cont">\n    <h1>Edit profile</h1>\n  </div>\n\n  <form [formGroup]="editProfileForm" (ngSubmit)="submitForm(editProfileForm.value)">\n    <ion-grid>\n      <ion-row>\n        <ion-col col-6 tappable (click)="changePicture()">\n          <div class="edit-img">\n            <!-- Old Solution -->\n            <!-- <img src="{{profileImg?profileImg:\'assets/img/human.png\'}}" class="setting-img" /> -->\n\n\n            <!-- New Solution -->\n            <div class="profile-image">\n              <bg-image-with-loader [image]="profileImg"></bg-image-with-loader>\n            </div>\n\n            <div class="dot-cont camera">\n              <ion-icon class="icon1 icon-camera my-icon" item-right></ion-icon>\n            </div>\n          </div>\n          <!--<img src="assets/img/thumbnail-puppy-1.jpg" />-->\n        </ion-col>\n      </ion-row>\n\n    </ion-grid>\n\n\n    <ion-list>\n\n      <ion-item>\n        <ion-label stacked>Full name</ion-label>\n        <ion-input type="text" name="name" value="" [formControl]="editProfileForm.controls[\'name\']" [ngClass]="{\'error-border\':!editProfileForm.controls[\'name\'].valid  && editProfileForm.controls[\'name\'].touched}"></ion-input>\n      </ion-item>\n\n      <div *ngIf="isSubmit">\n        <div class="error-box" *ngIf="!editProfileForm.controls[\'name\'].valid && editProfileForm.controls[\'name\'].hasError(\'required\') ">* Full Name is required!</div>\n        <div style="color: #b40000;font: 12px \'Conv_Gotham Light\';" *ngIf="editProfileForm.controls[\'name\'].hasError(\'pattern\')">* Please enter valid characters.</div>\n        <div class="error-box" *ngIf="editProfileForm.controls[\'name\'].hasError(\'maxlength\') && editProfileForm.controls[\'name\'].touched && !editProfileForm.controls[\'name\'].hasError(\'pattern\')">* Maximum length is 30!</div>\n        <!--<div style="color: #b40000;font: 12px \'Conv_Gotham Light\';" class="error-box2" *ngIf="spaceErreor && !signupForm.controls[\'fullname\'].hasError(\'pattern\') && !signupForm.controls[\'fullname\'].hasError(\'required\')">* Please enter valid characters.</div>-->\n      </div>\n\n\n\n      <ion-item>\n        <ion-label stacked>Nickname</ion-label>\n        <ion-input type="text" name="nickName" [formControl]="editProfileForm.controls[\'nickName\']" [ngClass]="{\'error-border\':!editProfileForm.controls[\'nickName\'].valid  && editProfileForm.controls[\'nickName\'].touched}"></ion-input>\n      </ion-item>\n\n      <div *ngIf="isSubmit">\n        <!-- <div class="error-box" *ngIf="!editProfileForm.controls[\'nickName\'].valid && editProfileForm.controls[\'nickName\'].hasError(\'required\')">* Nickname is required!</div> -->\n        <div style="color: #b40000;font: 12px \'Conv_Gotham Light\';" *ngIf="editProfileForm.controls[\'nickName\'].hasError(\'pattern\')">* Please enter valid characters.</div>\n        <div class="error-box" *ngIf="editProfileForm.controls[\'nickName\'].hasError(\'maxlength\') && editProfileForm.controls[\'nickName\'].touched && !signupForm.controls[\'nickName\'].hasError(\'pattern\')">* Maximum length is 30!</div>\n      </div>\n\n      <ion-item>\n        <ion-label stacked>Email</ion-label>\n        <ion-input type="text" name="email" [formControl]="editProfileForm.controls[\'email\']"></ion-input>\n      </ion-item>\n      <div *ngIf="isSubmit">\n        <!-- <div class="error-box" *ngIf="!editProfileForm.controls[\'email\'].valid && editProfileForm.controls[\'nickName\'].hasError(\'required\')">* Nickname is required!</div> -->\n        <div *ngIf="editProfileForm.controls[\'email\'].hasError(\'required\') && editProfileForm.controls[\'email\'].touched" class="error-box">\n        *Email is required.</div>\n        <div *ngIf="editProfileForm.controls[\'email\'].hasError(\'pattern\') && !editProfileForm.controls[\'email\'].valid" class="error-box">\n        *Enter valid Email.</div>\n      </div>\n\n    </ion-list>\n\n    <button ion-button class="mr-t80 button_color" full color="dark" type="submit">SAVE</button>\n\n  </form>\n\n</ion-content>'/*ion-inline-end:"/Users/kanikagupta/Documents/Modurn/modurn 2/src/pages/profile/edit-profile/edit-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__providers_toast_service_toast_service__["a" /* ToastServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_camera_camera__["a" /* CameraProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_7__providers_WebServices_User_UserManager__["a" /* UserManager */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_8__providers_SharedTask_sharedtask__["a" /* SharedTaskProvider */],
            __WEBPACK_IMPORTED_MODULE_9__providers_WebServices_Common_SharedServices__["a" /* SharedServices */],
            __WEBPACK_IMPORTED_MODULE_10__providers_config_config__["a" /* ConfigProvider */]
            // public alertService: AlertServiceProvider
        ])
    ], EditProfilePage);
    return EditProfilePage;
}());

//# sourceMappingURL=edit-profile.js.map

/***/ })

});
//# sourceMappingURL=2.js.map