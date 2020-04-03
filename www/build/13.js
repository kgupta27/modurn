webpackJsonp([13],{

/***/ 760:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordModule", function() { return ChangePasswordModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__change_password__ = __webpack_require__(803);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChangePasswordModule = /** @class */ (function () {
    function ChangePasswordModule() {
    }
    ChangePasswordModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__change_password__["a" /* ChangePasswordPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__change_password__["a" /* ChangePasswordPage */]),
            ], exports: [__WEBPACK_IMPORTED_MODULE_2__change_password__["a" /* ChangePasswordPage */]]
        })
    ], ChangePasswordModule);
    return ChangePasswordModule;
}());

//# sourceMappingURL=change-password.module.js.map

/***/ }),

/***/ 803:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_toast_service_toast_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_alert_service_alert_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_WebServices_User_UserManager__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_SharedTask_sharedtask__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__auth_authentication_authentication__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_keyboard__ = __webpack_require__(383);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { Http, Response, Headers } from '@angular/http';
// import {Observable} from 'rxjs/Rx'





var ChangePasswordPage = /** @class */ (function () {
    // public headers: any;
    function ChangePasswordPage(navCtrl, navParams, 
        // public http: Http,
        fb, 
        // private headers:Headers,
        storage, viewCtrl, toastCtrl, alertService, userManager, keyboard, sharedTaskProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fb = fb;
        this.storage = storage;
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.alertService = alertService;
        this.userManager = userManager;
        this.keyboard = keyboard;
        this.sharedTaskProvider = sharedTaskProvider;
        this.oldPass = 'password';
        this.newPass = 'password';
        this.repass = 'password';
        this.showPass = false;
        this.showPassNew = false;
        this.showRePass = false;
        this.isSubmit = false;
        this.cnfPassFalse = false;
        this.createForm();
    }
    ChangePasswordPage.prototype.createForm = function () {
        var PASS_REGEXP = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,25}$";
        this.changePswdForm = this.fb.group({
            'currentPassword': [null, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required]],
            'newPasword': [null, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].minLength(1), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].maxLength(25), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].pattern(PASS_REGEXP)]],
            'confirmPassword': [null, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required]]
        });
    };
    ChangePasswordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChangePasswordPage');
    };
    ChangePasswordPage.prototype.closeChangePassword = function () {
        this.keyboard.close();
        this.viewCtrl.dismiss();
    };
    ChangePasswordPage.prototype.showPassword = function () {
        this.showPass = !this.showPass;
        if (this.showPass) {
            this.oldPass = 'text';
        }
        else {
            this.oldPass = 'password';
        }
    };
    ChangePasswordPage.prototype.showPasswordNew = function () {
        this.showPassNew = !this.showPassNew;
        if (this.showPassNew) {
            this.newPass = 'text';
        }
        else {
            this.newPass = 'password';
        }
    };
    ChangePasswordPage.prototype.showRePassword = function () {
        this.showRePass = !this.showRePass;
        if (this.showRePass) {
            this.repass = 'text';
        }
        else {
            this.repass = 'password';
        }
    };
    ChangePasswordPage.prototype.confirmChangePassword = function () {
    };
    ChangePasswordPage.prototype.submitForm = function (formData) {
        var flag = false;
        console.log('Change Password');
        console.log(formData);
        this.isSubmit = true;
        // console.log(formData.newPasword +" == "+ formData.confirmPassword);
        if (formData.newPasword == formData.confirmPassword) {
            // alert("Matched")
            this.cnfPassFalse = false;
            flag = true;
        }
        else {
            // alert("Not Match");
            this.cnfPassFalse = true;
        }
        if (formData.currentPassword != null && flag == true && this.changePswdForm.valid) {
            this.changePassword(formData);
        }
    };
    ChangePasswordPage.prototype.changePassword = function (formData) {
        var _this = this;
        this.storage.get("userData").then(function (result) {
            if (result) {
                formData.userId = result.userInfoModel.userId;
                // //debugger;
                _this.userManager.changePassword(formData)
                    .then(function (data) {
                    //debugger;
                    // let message = data;
                    console.log('life story data =', data);
                    var profileObject;
                    profileObject = data;
                    if (profileObject.responseCode == '200') {
                        var message = profileObject.message;
                        _this.sharedTaskProvider.showToastMessage(message);
                        // this.logoutTask();
                        var updateUserData = {
                            "token": profileObject.data.token,
                            "userInfoModel": result.userInfoModel
                        };
                        console.log("===== updateUserData after change password ====\n\n", updateUserData);
                        _this.storage.set("userData", updateUserData);
                        window.localStorage.setItem('token', profileObject.data.token);
                        _this.closeChangePassword();
                    }
                }, function (error) {
                    ////debugger;
                    console.log(error);
                });
            }
        });
    };
    ChangePasswordPage.prototype.logoutTask = function () {
        this.sharedTaskProvider.showToastMessage('You have been logged out of modUrn.');
        this.sharedTaskProvider.setValueForKey(false, 'loginStatus');
        this.sharedTaskProvider.setValueForKey('', 'userData');
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__auth_authentication_authentication__["a" /* AuthenticationPage */]);
    };
    ChangePasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-change-password',template:/*ion-inline-start:"/Users/kanikagupta/Documents/Modurn/modurn 2/src/pages/settings/change-password/change-password.html"*/'<ion-header no-border>\n  <ion-navbar class="home-nav">\n    \n    <ion-buttons left (click)="closeChangePassword()">\n      <button class="btnColor cross-icn" ion-button icon-only>\n        <ion-icon class="icon icon-cross" item-right></ion-icon>\n      </button>\n    </ion-buttons>\n    \n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="story-outer">\n  <div class="story-cont">\n    <h1>Change password</h1>\n  </div>\n  <form [formGroup]="changePswdForm" (ngSubmit)="submitForm(changePswdForm.value)">\n    <ion-list>\n\n      <ion-item>\n        <ion-label stacked>Old password</ion-label>\n        <ion-input clearOnEdit="false" type="{{oldPass}}" name="currentPassword" [formControl]="changePswdForm.controls[\'currentPassword\']"></ion-input>\n\n        <button *ngIf="!showPass && !changePswdForm.controls[\'currentPassword\'].hasError(\'required\')" ion-button clear color="dark"\n          type="button" item-right (click)="showPassword()">Show</button>\n        <button *ngIf="showPass && !changePswdForm.controls[\'currentPassword\'].hasError(\'required\')" ion-button clear color="dark"\n          type="button" item-right (click)="showPassword()">Hide</button>\n\n      </ion-item>\n\n      <div *ngIf="isSubmit">\n        <div class="error-box" *ngIf="!changePswdForm.controls[\'currentPassword\'].valid">* Password is required!</div>\n        <!-- <div class="error-box" *ngIf="changePswdForm.controls[\'currentPassword\'].hasError(\'required\') && changePswdForm.controls[\'currentPassword\'].touched">* Password is required!</div> -->\n      </div>\n      \n\n      <ion-item>\n        <ion-label stacked>New password</ion-label>\n        <ion-input clearOnEdit="false" type="{{newPass}}" name="newPasword" [formControl]="changePswdForm.controls[\'newPasword\']"></ion-input>\n\n        <button *ngIf="!showPassNew && !changePswdForm.controls[\'newPasword\'].hasError(\'required\')" ion-button clear color="dark"\n          type="button" item-right (click)="showPasswordNew()">Show</button>\n        <button *ngIf="showPassNew && !changePswdForm.controls[\'newPasword\'].hasError(\'required\')" ion-button clear color="dark"\n          type="button" item-right (click)="showPasswordNew()">Hide</button>\n\n      </ion-item>\n\n      <div *ngIf="isSubmit">\n        <div class="error-box" *ngIf="changePswdForm.controls[\'newPasword\'].hasError(\'required\')">* Password is required!</div>\n        <div class="error-box" *ngIf="changePswdForm.controls[\'newPasword\'].hasError(\'maxlength\') && changePswdForm.controls[\'newPasword\'].touched">* Maximum password length is 25!</div>\n        <div class="error-box" *ngIf="changePswdForm.controls[\'newPasword\'].hasError(\'pattern\') && !changePswdForm.controls[\'newPasword\'].valid && !changePswdForm.controls[\'newPasword\'].hasError(\'maxlength\')">\n          * Password should be of minimum 8 characters, at least one uppercase letter, one lowercase letter and one number.</div>\n      </div>\n\n\n      <ion-item>\n        <ion-label stacked>Repeat new password</ion-label>\n        <ion-input clearOnEdit="false" type="{{repass}}" name="confirmPassword" validateEqual="newPasword" [formControl]="changePswdForm.controls[\'confirmPassword\']"></ion-input>\n\n        <button *ngIf="!showRePass && !changePswdForm.controls[\'confirmPassword\'].hasError(\'required\')" ion-button clear color="dark"\n          type="button" item-right (click)="showRePassword()">Show</button>\n        <button *ngIf="showRePass && !changePswdForm.controls[\'confirmPassword\'].hasError(\'required\')" ion-button clear color="dark"\n          type="button" item-right (click)="showRePassword()">Hide</button>\n\n      </ion-item>\n      <div *ngIf="isSubmit">\n        <div class="error-box" *ngIf="cnfPassFalse"> Password mismatch!</div>\n      </div>\n      \n    </ion-list>\n    <button ion-button class="mr-t80 button_color" full color="dark" type="submit">CHANGE PASSWORD</button>\n\n  </form>\n</ion-content>'/*ion-inline-end:"/Users/kanikagupta/Documents/Modurn/modurn 2/src/pages/settings/change-password/change-password.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_toast_service_toast_service__["a" /* ToastServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_alert_service_alert_service__["a" /* AlertServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_WebServices_User_UserManager__["a" /* UserManager */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_keyboard__["a" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_7__providers_SharedTask_sharedtask__["a" /* SharedTaskProvider */]])
    ], ChangePasswordPage);
    return ChangePasswordPage;
}());

//# sourceMappingURL=change-password.js.map

/***/ })

});
//# sourceMappingURL=13.js.map