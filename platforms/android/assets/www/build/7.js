webpackJsonp([7],{

/***/ 745:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperiencePageModule", function() { return ExperiencePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__experience__ = __webpack_require__(788);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_bg_image_with_loader_bg_image_with_loader_module__ = __webpack_require__(763);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ExperiencePageModule = /** @class */ (function () {
    function ExperiencePageModule() {
    }
    ExperiencePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__experience__["a" /* ExperiencePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__experience__["a" /* ExperiencePage */]), __WEBPACK_IMPORTED_MODULE_3__components_bg_image_with_loader_bg_image_with_loader_module__["a" /* BgImageWithLoaderPageModule */]
            ],
        })
    ], ExperiencePageModule);
    return ExperiencePageModule;
}());

//# sourceMappingURL=experience.module.js.map

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

/***/ 788:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExperiencePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_usercommon_services__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_WebServices_LifeStory_LifeStoryService__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Utility_Constant__ = __webpack_require__(33);
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


// import { ExperienceDetailsPage } from '../../../experienceDetails/experienceDetails';






var ExperiencePage = /** @class */ (function () {
    function ExperiencePage(navCtrl, navParams, app, loadingCtrl, actionSheetCtrl, storage, popCtrl, commonServices, event, lifeStoryService, modalCtrl, alertService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
        this.loadingCtrl = loadingCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.storage = storage;
        this.popCtrl = popCtrl;
        this.commonServices = commonServices;
        this.event = event;
        this.lifeStoryService = lifeStoryService;
        this.modalCtrl = modalCtrl;
        this.alertService = alertService;
        this.isItems = false;
        this.accept = true;
        this.isChangePermission = false;
        this.coachMark = false;
        this.expStatus = "livetabs";
        this.lifeStoryData = navParams.data;
        this.items = [];
        console.log('lifestorydata =', this.lifeStoryData);
        console.log('lifestorydata =', this.lifeStoryData.urnType);
        this.ownerId = this.lifeStoryData.ownerId;
        // this.storage.set('experienceViewed', false);  
    }
    ExperiencePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad FourthPage');
        this.initializeItems(this.accept);
        this.event.subscribe(__WEBPACK_IMPORTED_MODULE_5__Utility_Constant__["d" /* KEY_NOTIFF */].LifeStoryUpdate, function () {
            if (_this.navCtrl.parent.getSelected().index == 0) {
                _this.nextPage = 0;
                _this.initializeItems(_this.accept);
            }
        });
        this.storage.get("userData").then(function (result) {
            _this.userId = result.userInfoModel.userId;
        });
        if (this.lifeStoryData.roleId == 1 || this.lifeStoryData.roleId == 2) {
            // if(this.lifeStoryData.self)
            this.isChangePermission = true;
        }
    };
    ExperiencePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.items = [];
        console.log("Items:: ", this.items);
        this.initializeItems(this.accept);
        this.storage.get("experienceViewed").then(function (result) {
            if (result == false || result == 'false' || result == null) {
                _this.coachMark = true;
                console.log("Result if: ", result);
                _this.storage.set('experienceViewed', true);
            }
            console.log("Result: ", result);
        });
    };
    ExperiencePage.prototype.ionViewWillUnload = function () {
        this.event.unsubscribe(__WEBPACK_IMPORTED_MODULE_5__Utility_Constant__["d" /* KEY_NOTIFF */].LifeStoryUpdate);
    };
    ExperiencePage.prototype.initializeItems = function (accept) {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loader.present();
        //debugger;
        if (localStorage.getItem("lifeStoryData")) {
            var ownerData = JSON.parse(localStorage.getItem("lifeStoryData"));
            this.ownerId = ownerData.ownerId;
        }
        // let ownerData = JSON.parse(localStorage.getItem("lifeStoryData"));
        // this.ownerId = ownerData.ownerId;
        this.storage.get("userData").then(function (result) {
            _this.userId = result.userInfoModel.userId;
            // console.log("\n\nUserid: ", this.userId);
            _this.token = result.token;
            _this.commonServices.getExperience("api/v1/story/experience", result.token, accept, result.userInfoModel.userId, _this.ownerId, 1).subscribe(function (data) {
                // console.log('getExperience++++++++++++ ', data)
                var fulldata = JSON.parse(data);
                _this.items = fulldata.data.contentList;
                console.log(_this.items);
                // console.log(this.items.length)
                if (_this.items.length > 0) {
                    // console.log("false");
                    _this.isItems = false;
                }
                else {
                    // console.log("true");
                    _this.isItems = true;
                }
                //debugger
                _this.nextPage = fulldata.data.nextPage;
                loader.dismiss();
            }, function (error) {
                console.log(error);
                loader.dismiss();
            });
        });
    };
    ExperiencePage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        //debugger;
        console.log('Begin async operation');
        if (this.nextPage > 0) {
            // let loader = this.loadingCtrl.create({
            //   content: 'Please wait...'
            // });
            this.commonServices.getExperience("api/v1/story/experience", this.token, this.accept, this.userId, this.ownerId, this.nextPage).subscribe(function (data) {
                infiniteScroll.complete();
                console.log(data);
                var fulldata = JSON.parse(data);
                for (var i = 0; i < fulldata.data.contentList.length; i++) {
                    _this.items.push(fulldata.data.contentList[i]);
                }
                // console.log(this.items)
                _this.nextPage = fulldata.data.nextPage;
                infiniteScroll.complete();
            }, function (error) {
                console.log(error);
                // loader.dismiss();
            });
        }
        else {
            infiniteScroll.complete();
        }
    };
    ExperiencePage.prototype.livePending = function (active) {
        this.accept = active;
        this.initializeItems(this.accept);
    };
    ExperiencePage.prototype.openLifeStoryDetails = function (expId, index) {
        var _this = this;
        //debugger;
        console.log("==" + this.lifeStoryData.roleId);
        // this.navCtrl.push(ExperienceDetailsPage);
        var data = {
            'experienceId': expId, 'userId': this.userId, 'ownerId': this.ownerId, 'roleId': this.lifeStoryData.roleId
        };
        // this.app.getRootNav().push(ExperienceDetailsPage, { 'expIdData': data });
        var modal = this.modalCtrl.create('ExperienceDetailsPage', { expIdData: data });
        modal.onDidDismiss(function (data) {
            console.log(data);
            if (data === undefined) {
                console.log("Undefined and return");
                return;
            }
            else {
                _this.items.splice(index, 1);
            }
            console.log(index);
        });
        modal.present();
    };
    ExperiencePage.prototype.actionExperience = function (expId, index) {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            buttons: [
                {
                    text: 'Modify',
                    handler: function () {
                        console.log('Modify... ');
                        _this.storage.set("experience", JSON.stringify(true));
                        _this.editExp(expId, index);
                    }
                },
                {
                    text: 'Delete',
                    role: 'destructive',
                    handler: function () {
                        console.log('Deleting... ');
                        _this.deleteExp(expId, index);
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
    ExperiencePage.prototype.checkUpdate = function () {
    };
    //Like Experience
    ExperiencePage.prototype.likeExp = function (expId, index) {
        var _this = this;
        //debugger
        this.storage.get("userData").then(function (result) {
            _this.userId = result.userInfoModel.userId;
            var parms = {
                experienceId: expId,
                like: true,
                ownerId: _this.ownerId,
                userId: _this.userId
            };
            _this.lifeStoryService.likeExp(parms)
                .then(function (data) {
                console.log(data);
                _this.items[index].count = _this.items[index].count + 1;
                _this.items[index].selfLike = true;
            }, function (error) {
                //debugger;
                console.log(error);
            });
        });
    };
    //Edit exp  
    ExperiencePage.prototype.editExp = function (expId, index) {
        var data = {
            expId: expId,
            ownerId: this.ownerId,
            userId: this.userId,
            isExp: true
        };
        //debugger;
        var modal = this.modalCtrl.create("AddExperiencePage", { data: data, urnType: this.lifeStoryData.urnType });
        modal.present();
        // this.navCtrl.push('AddFavoriteCharityPage', {data:{ownerId:this.ownerId,charityData:this.charityData}});
    };
    ExperiencePage.prototype.deleteExp = function (expId, index) {
        var _this = this;
        var data = {
            "experienceId": expId,
            "ownerId": this.ownerId,
            "userId": this.userId,
        };
        this.lifeStoryService.deleteExp(data)
            .then(function (data) {
            console.log(data);
            _this.items.splice(index, 1);
        }, function (error) {
            //debugger;
            console.log(error);
        });
    };
    ExperiencePage.prototype.dismiss = function () {
        this.coachMark = false;
        this.storage.set('experienceViewed', true);
    };
    ExperiencePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-experience',template:/*ion-inline-start:"/Users/kanikagupta/Documents/Modurn/modurn 2/src/pages/lifestory/life-story/LifeStoryTab/experience/experience.html"*/'<ion-content>\n\n  <ion-segment [(ngModel)]="expStatus" class="tabSegment" *ngIf="lifeStoryData.roleId != 4">\n    <ion-segment-button value="livetabs" (click)="livePending(true)">Live</ion-segment-button>\n    <ion-segment-button value="pendingtabs" (click)="livePending(false)">Pending</ion-segment-button>\n  </ion-segment>\n\n  <!--{{items | json}}-->\n  <div [ngSwitch]="expStatus">\n    <div *ngSwitchCase="\'livetabs\'">\n      <div *ngIf="items.length>0">\n        <ion-card class="exp-card" *ngFor="let item of items; let i=index">\n          <!-- <ion-card class="exp-card" *virtualItem="let item; let i=index"> -->\n\n          <ion-item>\n            <h2 class="namewithoverflow">{{item.title}}</h2>\n            <ion-note item-end *ngIf="lifeStoryData.roleId == 1 || lifeStoryData.roleId == 2 || item.self" (click)="actionExperience(item.experienceId,i)">\n              <ion-icon class="icon icon-ic-three-dots"></ion-icon>\n            </ion-note>\n          </ion-item>\n          <div class="coachmark">  \n          <!-- <img src="{{item.imageMediumUrl500}}" class="exp-img" (click)="openLifeStoryDetails(item.experienceId, i)"> -->\n          \n          <div class="exp-img experience_wrapper">\n          <bg-image-with-loader type="exp" [image]="item.imageUrl" (click)="openLifeStoryDetails(item.experienceId, i)"></bg-image-with-loader>\n          <!-- <ion-img width="100%" height="251px" cache="true" src="{{item.imageUrl}}" ></ion-img> -->\n\n          <div class="info-content"  *ngIf="coachMark">\n              <div class="arrow" (click)="dismiss()">\n                  <div class="tooltip-header" ><img src="assets/img/gestureTap.png"> </div>\n                  <div class="tooltip-content">\n                      Tap on the Image to view Experience in full detail.\n                  </div>\n                  <div class="button" (click)="dismiss()">GOT IT</div>\n                </div>\n              </div>\n\n              <div class="tap_icon"  *ngIf="!coachMark" (click)="openLifeStoryDetails(item.experienceId, i)">\n                  <img src="assets/img/tap_icon.png" alt="Tap Icon">\n                </div>\n              </div>\n            </div>\n\n            \n          <ion-row>\n            <ion-col>\n              <div class="life-tab">\n                <ion-icon class="icon icon-ic-profile"></ion-icon>\n                <p class="withuoverflow">{{item.personWithYou}}</p>\n              </div>\n            </ion-col>\n            <ion-col text-right *ngIf="item.selfLike && lifeStoryData.roleId != 4">\n              <div class="life-tab f-right">\n                <p class="col-red">{{item.count}} </p>\n                <ion-icon class="icon icon-heart-filled"></ion-icon>\n              </div>\n            </ion-col>\n            <ion-col text-right *ngIf="!item.selfLike && lifeStoryData.roleId != 4">\n              <div class="life-tab f-right" (click)="likeExp(item.experienceId,i)">\n                <p class="col-red">{{item.count}}</p>\n                <ion-icon class="icon icon-ic-heart"></ion-icon>\n              </div>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col>\n              <div class="life-tab">\n                <ion-icon class="icon icon-ic-location"></ion-icon>\n                <p class="withuoverflow">{{item.experiencePlace}}</p>\n              </div>\n            </ion-col>\n            <ion-col>\n\n              <div class="life-tab f-right">\n                <ion-icon class="icon icon-ic-calander"></ion-icon>\n                <p>{{item.experienceDate}}</p>\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-card>\n      </div>\n      <div text-center class="mr-t10" *ngIf="items.length == 0">\n        No Experiences\n      </div>\n    </div>\n\n    <div *ngSwitchCase="\'pendingtabs\'">\n      <ion-card class="exp-card" *ngFor="let item of items;let i=index">\n\n        <ion-item>\n          <h2>{{item.title}}</h2>\n          <ion-note item-end *ngIf="isChangePermission || item.self" (click)="actionExperience(item.experienceId, i)">\n            <ion-icon class="icon icon-ic-three-dots"></ion-icon>\n          </ion-note>\n        </ion-item>\n\n        <div class="coachmark">  \n        <!-- <img src="{{item.imageMediumUrl500}}" class="exp-img" (click)="openLifeStoryDetails(item.experienceId, i)"> -->\n        <div class="exp-img experience_wrapper">\n            <bg-image-with-loader type="exp" [image]="item.imageUrl" (click)="openLifeStoryDetails(item.experienceId, i)"></bg-image-with-loader>\n     \n        <div class="info-content"  *ngIf="coachMark">\n            <div class="arrow" (click)="dismiss()">\n                <div class="tooltip-header" ><img src="assets/img/gestureTap.png"> </div>\n                <div class="tooltip-content">\n                    Tap on the Image to view Experience in full detail.\n                </div>\n                <div class="button" (click)="dismiss()">GOT IT</div>\n              </div>\n            </div>\n\n            <div class="tap_icon"  *ngIf="!coachMark">\n                <img src="assets/img/tap_icon.png" alt="Tap Icon">\n              </div>\n              </div>\n          </div>\n\n        <ion-row>\n          <ion-col>\n            <div class="life-tab">\n              <ion-icon class="icon icon-ic-profile"></ion-icon>\n              <p>{{item.personWithYou}}</p>\n            </div>\n          </ion-col>\n          <ion-col text-right>\n            <!-- <div class="life-tab f-right">\n              <p class="col-red">5 </p>\n              <ion-icon class="icon icon-heart-filled"></ion-icon>\n            </div> -->\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col>\n            <div class="life-tab">\n              <ion-icon class="icon icon-ic-location"></ion-icon>\n              <p>{{item.experiencePlace}}</p>\n            </div>\n          </ion-col>\n          <ion-col>\n\n            <div class="life-tab f-right">\n              <ion-icon class="icon icon-ic-calander"></ion-icon>\n              <p>{{item.experienceDate}}</p>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-card>\n      <div text-center class="mr-t10" *ngIf="items.length == 0">\n        No Experiences\n      </div>\n    </div>\n\n  </div>\n\n\n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>'/*ion-inline-end:"/Users/kanikagupta/Documents/Modurn/modurn 2/src/pages/lifestory/life-story/LifeStoryTab/experience/experience.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_usercommon_services__["a" /* UserCommonServices */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_4__providers_WebServices_LifeStory_LifeStoryService__["a" /* LifeStoryService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_alert_service_alert_service__["a" /* AlertServiceProvider */]])
    ], ExperiencePage);
    return ExperiencePage;
}());

//# sourceMappingURL=experience.js.map

/***/ })

});
//# sourceMappingURL=7.js.map