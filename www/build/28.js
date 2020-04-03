webpackJsonp([28],{

/***/ 735:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentsPageModule", function() { return DocumentsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__documents__ = __webpack_require__(778);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DocumentsPageModule = /** @class */ (function () {
    function DocumentsPageModule() {
    }
    DocumentsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__documents__["a" /* DocumentsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__documents__["a" /* DocumentsPage */]),
            ],
        })
    ], DocumentsPageModule);
    return DocumentsPageModule;
}());

//# sourceMappingURL=documents.module.js.map

/***/ }),

/***/ 778:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_WebServices_LifeStory_LifeStoryService__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_SharedTask_sharedtask__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_alert_service_alert_service__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DocumentsPage = /** @class */ (function () {
    function DocumentsPage(navCtrl, navParams, storage, lifeStoryService, sharedTaskProvider, actionSheetCtrl, inAppBrowser, alertServiceProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.lifeStoryService = lifeStoryService;
        this.sharedTaskProvider = sharedTaskProvider;
        this.actionSheetCtrl = actionSheetCtrl;
        this.inAppBrowser = inAppBrowser;
        this.alertServiceProvider = alertServiceProvider;
        this.isProfile = true;
        this.items = [];
        this.errMsg = '';
        this.documentData = {};
        this.isDataFound = false;
        this.ownerId = navParams.data.ownerId;
        this.urnType = navParams.data.urnType;
        this.isProfile = navParams.data.isProfile;
        this.role = navParams.data.role;
    }
    DocumentsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DocumentsPage');
        if (this.isProfile) {
            this.document();
        }
    };
    DocumentsPage.prototype.document = function () {
        var _this = this;
        this.storage.get("userData").then(function (result) {
            console.log("result= ", result.userInfoModel);
            var params = {
                // 'page': '1',
                'ownerId': _this.ownerId,
            };
            console.log("params::", params);
            _this.lifeStoryService.getPdfList(params)
                .then(function (result) {
                //debugger;
                if (result.data == null) {
                    _this.isDataFound = true;
                    _this.sharedTaskProvider.showToastMessage("No data found.");
                    return false;
                }
                // data not null
                if (result.data.length > 0) {
                    for (var i = 0; i < result.data.length; i++) {
                        var element = result.data[i];
                        _this.items.push(element);
                    }
                    // var arr = Object.keys(result).map(function (k) { return result[k] });
                    //this.items = result.data;
                    console.log(_this.items);
                    // this.items = this.documentData.contentList[0];
                }
            }, function (error) {
                if (error == "No internet connection.") {
                    _this.errMsg = "Please check your internet connection and try again";
                }
                else {
                    _this.errMsg = "Something went wrong";
                }
                console.log(error);
            });
        });
    };
    DocumentsPage.prototype.dismiss = function () {
        this.navCtrl.pop();
    };
    DocumentsPage.prototype.presentActionSheet = function (pdfData, index) {
        var _this = this;
        console.log("Index:: ", index);
        if (this.role == 1 || this.role == 2) {
            var actionSheet = this.actionSheetCtrl.create({
                buttons: [
                    {
                        text: 'View',
                        handler: function () {
                            _this.pdfViewer(pdfData.pdfFile);
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
                                    _this.deletePdf(pdfData.id, index);
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
                            _this.pdfViewer(pdfData.pdfFile);
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
    };
    DocumentsPage.prototype.pdfViewer = function (pdfLink) {
        var newFileURL = "http://docs.google.com/gview?url=" + pdfLink + "&embedded=true";
        try {
            this.inAppBrowser.create(newFileURL, '_blank', 'location=yes');
        }
        catch (e) {
            console.log("Invalid Url");
            // this.toastProvider.create("Invalid Url");
        }
    };
    DocumentsPage.prototype.deletePdf = function (pdfId, index) {
        var _this = this;
        this.storage.get("userData").then(function (result) {
            console.log("result= ", result.userInfoModel);
            var params = {
                'pdfId': pdfId,
                'ownerId': _this.ownerId,
            };
            console.log("params::", params);
            _this.lifeStoryService.deletePdfFile(params)
                .then(function (result) {
                console.log("Success!");
                _this.items.splice(index, 1);
                if (_this.items.length > 0) {
                    console.log("Array is not empty");
                }
                else {
                    console.log("Array is empty");
                    _this.isDataFound = true;
                }
            }, function (error) {
                if (error == "No internet connection.") {
                    _this.errMsg = "Please check your internet connection and try again";
                }
                else {
                    _this.errMsg = "Something went wrong";
                }
                console.log(error);
            });
        });
    };
    DocumentsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-documents',template:/*ion-inline-start:"/Users/kanikagupta/Documents/Modurn/modurn 2/src/pages/addstory/documents/documents.html"*/'<ion-header no-border>\n  <ion-navbar>\n    <ion-buttons left (click)="dismiss()">\n      <button class="btnColor cross-icn" ion-button icon-only>\n        <ion-icon class="icon icon-cross" item-right></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding class="story-outer">\n  <div *ngIf="!isDataFound">\n    <div class="story-cont">\n      <h1 class="{{urnType == 1 ? \'human-follow\':\'pet-follow\'}}">Documents</h1>\n    </div>\n  \n    <div class="health-outer" *ngFor="let item of items; let i=index">\n\n      <h1 class="helth-title">{{item.title}}</h1>\n\n      <div (click)="presentActionSheet(item, i)" class="dot-cont">\n        <ion-icon class="icon icon-ic-three-dots my-icon" item-right></ion-icon>\n      </div>\n\n      <!-- <div class="p_content">\n        {{item.description}}\n      </div> -->\n\n    </div>\n\n    <!-- <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n      <ion-infinite-scroll-content></ion-infinite-scroll-content>\n    </ion-infinite-scroll> -->\n\n  </div>\n  <div *ngIf="isDataFound" class="Nodatafound">\n    <h1 text-center>No data found</h1>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/kanikagupta/Documents/Modurn/modurn 2/src/pages/addstory/documents/documents.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__providers_WebServices_LifeStory_LifeStoryService__["a" /* LifeStoryService */],
            __WEBPACK_IMPORTED_MODULE_4__providers_SharedTask_sharedtask__["a" /* SharedTaskProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_6__providers_alert_service_alert_service__["a" /* AlertServiceProvider */]])
    ], DocumentsPage);
    return DocumentsPage;
}());

//# sourceMappingURL=documents.js.map

/***/ })

});
//# sourceMappingURL=28.js.map