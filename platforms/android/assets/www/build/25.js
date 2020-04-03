webpackJsonp([25],{

/***/ 738:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HealthJourneyModule", function() { return HealthJourneyModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__health_journey__ = __webpack_require__(781);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HealthJourneyModule = /** @class */ (function () {
    function HealthJourneyModule() {
    }
    HealthJourneyModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__health_journey__["a" /* HealthJourneyPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__health_journey__["a" /* HealthJourneyPage */]),
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__health_journey__["a" /* HealthJourneyPage */]]
        })
    ], HealthJourneyModule);
    return HealthJourneyModule;
}());

//# sourceMappingURL=health-journey.module.js.map

/***/ }),

/***/ 781:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HealthJourneyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_usercommon_services__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_WebServices_LifeStory_InterestnPassionService__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_SharedTask_sharedtask__ = __webpack_require__(170);
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








var HealthJourneyPage = /** @class */ (function () {
    function HealthJourneyPage(navCtrl, navParams, modalCtrl, viewCtrl, actionSheetCtrl, alertServiceProvider, loadingCtrl, commonServices, interestnPassion, storage, sharedTaskProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.viewCtrl = viewCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.alertServiceProvider = alertServiceProvider;
        this.loadingCtrl = loadingCtrl;
        this.commonServices = commonServices;
        this.interestnPassion = interestnPassion;
        this.storage = storage;
        this.sharedTaskProvider = sharedTaskProvider;
        this.nextPage = 0;
        this.ownerId = 0;
        this.userName = '';
        this.isDataFound = false;
        this.lifeStoryData = {};
        this.urnType = 0;
        this.ownerId = navParams.data.ownerId;
        this.isProfile = navParams.data.isProfile;
        this.urnType = navParams.data.urnType;
        this.ownerName = navParams.data.ownerName;
        console.log("isProfile= ", this.isProfile);
        console.log("ownerId= ", this.ownerId);
    }
    HealthJourneyPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HealthJourneyPage');
        // if (this.isProfile) {
        this.healthJourney();
        // }
        this.lifeStoryData = JSON.parse(localStorage.getItem("lifeStoryData"));
    };
    HealthJourneyPage.prototype.dismiss = function () {
        if (this.isProfile) {
            this.viewCtrl.dismiss();
        }
        else {
            this.navCtrl.popToRoot();
        }
    };
    HealthJourneyPage.prototype.presentActionSheet = function (helthData, index) {
        var _this = this;
        // console.log(id);
        var actionSheet = this.actionSheetCtrl.create({
            buttons: [
                {
                    text: 'Modify',
                    handler: function () {
                        console.log('Modify... ');
                        var modal = _this.modalCtrl.create("AddHealthJourneyPage", { ownerId: _this.ownerId, helthData: helthData, urnType: _this.urnType });
                        modal.onDidDismiss(function (data) {
                            console.log(data);
                            console.log(index);
                            if (data === undefined) {
                                console.log("Undefinde and return");
                                return;
                            }
                            var updatedHelth = {
                                "id": data.healths[0].healthId,
                                "title": data.healths[0].title,
                                "description": data.healths[0].description,
                                "age": data.healths[0].age,
                                "active": _this.healthData[index].active
                            };
                            _this.healthData[index] = updatedHelth;
                        });
                        modal.present();
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
                                _this.deleteHelthJourney(helthData.id, index);
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
    HealthJourneyPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        if (this.nextPage > 0) {
            this.storage.get("userData").then(function (result) {
                _this.userName = result.userInfoModel.userName;
                var params = {
                    userId: result.userInfoModel.userId,
                    ownerId: _this.ownerId,
                    page: _this.nextPage,
                    size: '10'
                };
                _this.interestnPassion.fetchHealthJourney(params)
                    .then(function (data) {
                    infiniteScroll.complete();
                    _this.healthDataObj = data;
                    if (Object.keys(_this.healthDataObj.contentList).length > 0) {
                        for (var i = 0; i < _this.healthDataObj.contentList.length; i++) {
                            _this.healthData.push(_this.healthDataObj.contentList[i]);
                        }
                        _this.nextPage = _this.healthDataObj.nextPage;
                    }
                    else {
                        _this.healthData = {};
                        _this.isDataFound = true;
                        _this.sharedTaskProvider.showToastMessage("No data found.");
                    }
                }, function (error) {
                    infiniteScroll.complete();
                    console.log(error);
                });
            });
        }
        else {
            infiniteScroll.complete();
        }
    };
    HealthJourneyPage.prototype.healthJourney = function () {
        var _this = this;
        this.storage.get("userData").then(function (result) {
            _this.userName = result.userInfoModel.userName;
            var params = {
                userId: result.userInfoModel.userId,
                ownerId: _this.ownerId,
                page: '1',
                size: '10'
            };
            console.log("params====== ", params);
            ////debugger;
            _this.interestnPassion.fetchHealthJourney(params)
                .then(function (data) {
                _this.healthDataObj = data;
                if (Object.keys(_this.healthDataObj.contentList).length > 0) {
                    _this.healthData = _this.healthDataObj.contentList;
                    _this.nextPage = _this.healthDataObj.nextPage;
                    console.log("\n\nthis.nextPage:");
                    console.log(_this.nextPage);
                }
                else {
                    _this.healthData = {};
                    _this.isDataFound = true;
                    _this.sharedTaskProvider.showToastMessage("No data found.");
                }
            }, function (error) {
                ////debugger;
                console.log(error);
            });
        });
    };
    HealthJourneyPage.prototype.deleteHelthJourney = function (helthId, index) {
        var _this = this;
        console.log(helthId);
        this.storage.get("userData").then(function (result) {
            _this.userName = result.userInfoModel.userName;
            var params = {
                userId: result.userInfoModel.userId,
                ownerId: _this.ownerId,
                healthId: helthId
            };
            _this.interestnPassion.deleteHealthJourney(params)
                .then(function (data) {
                console.log(data);
                //Remove data from array
                _this.healthData.splice(index, 1);
                if (Object.keys(_this.healthDataObj.contentList).length > 0) {
                }
                else {
                    _this.isDataFound = true;
                }
            }, function (error) {
                console.log(error);
            });
        });
    };
    HealthJourneyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-health-journey',template:/*ion-inline-start:"/Users/kanikagupta/Documents/Modurn/modurn 2/src/pages/addstory/health-journey/health-journey.html"*/'<ion-header no-border>\n  <ion-navbar>\n    <ion-buttons left (click)="dismiss()">\n      <button class="btnColor cross-icn" ion-button icon-only>\n        <ion-icon class="icon icon-cross" item-right></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding class="story-outer">\n  <div *ngIf="!isDataFound">\n    <div class="story-cont">\n      <h1 class="{{urnType == 1 ? \'human-follow\':\'pet-follow\'}}">Health journey of <br>{{ownerName}}</h1>\n    </div>\n    <!-- {{lifeStoryData | json}} -->\n    <div class="health-outer" *ngFor="let item of healthData; let i=index">\n\n      <h1 class="helth-title">{{item.title}}</h1>\n\n      <div (click)="presentActionSheet(item, i)" class="dot-cont" *ngIf="lifeStoryData.roleId == 1 || lifeStoryData.roleId == 2">\n        <ion-icon class="icon icon-ic-three-dots my-icon" item-right></ion-icon>\n      </div>\n\n      <div class="p_content">\n        <span class="age">(Age: {{item.age}}) </span>{{item.description}}\n      </div>\n\n    </div>\n\n    <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n      <ion-infinite-scroll-content></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n\n  </div>\n  <div *ngIf="isDataFound" class="Nodatafound">\n    <h1 text-center>No data found</h1>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/kanikagupta/Documents/Modurn/modurn 2/src/pages/addstory/health-journey/health-journey.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_alert_service_alert_service__["a" /* AlertServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_usercommon_services__["a" /* UserCommonServices */],
            __WEBPACK_IMPORTED_MODULE_4__providers_WebServices_LifeStory_InterestnPassionService__["a" /* InterestnPassionService */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_5__providers_SharedTask_sharedtask__["a" /* SharedTaskProvider */]])
    ], HealthJourneyPage);
    return HealthJourneyPage;
}());

//# sourceMappingURL=health-journey.js.map

/***/ })

});
//# sourceMappingURL=25.js.map