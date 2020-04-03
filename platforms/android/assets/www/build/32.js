webpackJsonp([32],{

/***/ 731:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddLinkModule", function() { return AddLinkModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_link__ = __webpack_require__(774);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddLinkModule = /** @class */ (function () {
    function AddLinkModule() {
    }
    AddLinkModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__add_link__["a" /* AddLinkPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_link__["a" /* AddLinkPage */]),
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__add_link__["a" /* AddLinkPage */]]
        })
    ], AddLinkModule);
    return AddLinkModule;
}());

//# sourceMappingURL=add-link.module.js.map

/***/ }),

/***/ 774:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddLinkPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_usercommon_services__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_config_config__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_toast_service_toast_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Utility_Constant__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_keyboard__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_WebServices_LifeStory_LifeStoryService__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var AddLinkPage = /** @class */ (function () {
    function AddLinkPage(keyboard, lifeStoryService, viewCtrl, toastCtrl, commonServices, navCtrl, loadingCtrl, navParams, fb, storage, configService, events) {
        this.keyboard = keyboard;
        this.lifeStoryService = lifeStoryService;
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
        this.mediaData = {};
        this.isNotEmpty = false;
        console.log(navParams.data.data);
        this.ownerId = navParams.data.data.ownerId;
        this.urnType = navParams.data.data.urnType;
        //console.log(navParams.data.data.mediaLink.linkId);
        this._baseUrl = configService.getApiURI();
        this.addLinkForm = fb.group({
            'title': [null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_7__Utility_Constant__["j" /* WITHOUT_FIRST_REGES_SPECIAL */])]],
            // 'link': [null, Validators.compose([Validators.required, Validators.pattern(URL)])]
            'link': [null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]]
        });
        this.mediaData = navParams.data.data.mediaLink;
        console.log(this.mediaData);
        if (typeof this.mediaData === 'undefined') {
            this.mediaData = {};
        }
    }
    AddLinkPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddLinkPage');
        if (Object.keys(this.mediaData).length > 0) {
            // console.log(this.helthData);
            this.isNotEmpty = true;
            this.addLinkForm.controls['title'].setValue(this.mediaData.linkTitle);
            this.addLinkForm.controls['link'].setValue(this.mediaData.linkUrl);
        }
        else {
            console.log("No data");
        }
    };
    AddLinkPage.prototype.closeAddLink = function () {
        this.keyboard.close();
        this.viewCtrl.dismiss();
    };
    AddLinkPage.prototype.addLink = function (value) {
        var _this = this;
        console.log(value);
        this.isSubmit = true;
        if (value.title != null && value.title !== undefined && value.title != "" && value.link != null && value.link !== undefined && value.link != "" && this.addLinkForm.valid) {
            this.storage.get("userData").then(function (result) {
                if (result) {
                    if (!_this.isNotEmpty) {
                        console.log(result);
                        console.log(result.userInfoModel);
                        var data = {
                            "userId": result.userInfoModel.userId,
                            "ownerId": _this.ownerId,
                            "linkTitle": value.title,
                            "linkUrl": value.link,
                        };
                        console.log(data);
                        var loader_1 = _this.loadingCtrl.create({
                            content: 'Please wait...'
                        });
                        loader_1.present();
                        _this.commonServices.submitData(data, result.token).subscribe(function (data) {
                            loader_1.dismiss();
                            // this.navCtrl.pop();
                            _this.closeAddLink();
                            _this.events.publish(__WEBPACK_IMPORTED_MODULE_7__Utility_Constant__["d" /* KEY_NOTIFF */].TabSelect, __WEBPACK_IMPORTED_MODULE_7__Utility_Constant__["f" /* LifeStoryTab */].Media);
                            _this.toastCtrl.create(data.data);
                        }, function (error) {
                            console.log(error);
                            loader_1.dismiss();
                            _this.toastCtrl.create(error);
                        });
                    }
                    else {
                        console.log("Call PUT");
                        var mediaData_1 = {
                            // "link": [
                            //   {
                            //     "userId": result.userInfoModel.userId,
                            //     "ownerId": this.ownerId,
                            //     "linkId":value.linkId,
                            //     "linkTitle": value.title,
                            //     "linkUrl": value.link,
                            //   }
                            //  ],
                            userId: result.userInfoModel.userId,
                            ownerId: _this.ownerId,
                            linkId: _this.mediaData.linkId,
                            linkUrl: value.link,
                            linkTitle: value.title,
                        };
                        console.log("linkData== " + mediaData_1);
                        _this.lifeStoryService.putMediaLink(mediaData_1)
                            .then(function (data) {
                            console.log('data =', data);
                            var mediaLinkObject;
                            mediaLinkObject = data;
                            _this.toastCtrl.create(mediaLinkObject.data);
                            _this.viewCtrl.dismiss(mediaData_1);
                        }, function (error) {
                            console.log(error);
                        });
                    }
                }
            });
        }
    };
    AddLinkPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-link',template:/*ion-inline-start:"/Users/kanikagupta/Documents/Modurn/modurn 2/src/pages/addstory/add-link/add-link.html"*/'<ion-header no-border>\n  <ion-navbar>\n    \n    <ion-buttons left (click)="closeAddLink()">\n      <button class="btnColor cross-icn" ion-button icon-only>\n        <ion-icon class="icon icon-cross" item-right></ion-icon>\n        <!--<img src="assets/img/icCross@3x.png" />-->\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content padding class="story-outer">\n  <div class="story-cont">\n    <h1  class="{{urnType == 1 ? \'human-follow\':\'pet-follow\'}}">{{isNotEmpty?\'Update\':\'Add\'}} a media link</h1>\n  </div>\n  <form [formGroup]="addLinkForm" >\n\n    <ion-list>\n\n      <ion-item>\n        <ion-label stacked>Link title</ion-label>\n        <ion-input type="text" [formControl]="addLinkForm.controls[\'title\']" spellcheck="true" autoComplete="true" autocorrect="true"></ion-input>\n      </ion-item>\n      <div *ngIf="isSubmit">\n        <div class="error-box" *ngIf="!addLinkForm.controls[\'title\'].valid && addLinkForm.controls[\'title\'].hasError(\'required\')">\n        Link title is required!</div>\n        <div class="error-box"  *ngIf="addLinkForm.controls[\'title\'].hasError(\'pattern\')">Please enter valid title.</div>\n      </div>\n      <ion-item>\n        <ion-label stacked>Enter link</ion-label>\n        <ion-input type="text" autocapitalize="off" [formControl]="addLinkForm.controls[\'link\']" spellcheck="true" autoComplete="true" autocorrect="true"></ion-input>\n      </ion-item>\n      <div *ngIf="isSubmit">\n        <div class="error-box" *ngIf="!addLinkForm.controls[\'link\'].valid && addLinkForm.controls[\'link\'].hasError(\'required\')">\n        Link is required!</div>\n        <!-- <div class="error-box"  *ngIf="addLinkForm.controls[\'link\'].hasError(\'pattern\')">Please enter valid Link.</div> -->\n      </div>\n        \n    </ion-list>\n    \n        <button ion-button class="mr-t166 button_color" full color="dark" (click)="addLink(addLinkForm.value)">{{isNotEmpty?\'UPDATE\':\'ADD\'}}</button>\n\n  </form>\n\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/kanikagupta/Documents/Modurn/modurn 2/src/pages/addstory/add-link/add-link.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__ionic_native_keyboard__["a" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_9__providers_WebServices_LifeStory_LifeStoryService__["a" /* LifeStoryService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_toast_service_toast_service__["a" /* ToastServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_usercommon_services__["a" /* UserCommonServices */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_4__providers_config_config__["a" /* ConfigProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */]])
    ], AddLinkPage);
    return AddLinkPage;
}());

//# sourceMappingURL=add-link.js.map

/***/ })

});
//# sourceMappingURL=32.js.map