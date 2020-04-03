webpackJsonp([6],{

/***/ 746:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FamilynFriendsModule", function() { return FamilynFriendsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__familynfriends__ = __webpack_require__(789);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_bg_image_with_loader_bg_image_with_loader_module__ = __webpack_require__(763);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FamilynFriendsModule = /** @class */ (function () {
    function FamilynFriendsModule() {
    }
    FamilynFriendsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__familynfriends__["a" /* FamilynFriendsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__familynfriends__["a" /* FamilynFriendsPage */]), __WEBPACK_IMPORTED_MODULE_3__components_bg_image_with_loader_bg_image_with_loader_module__["a" /* BgImageWithLoaderPageModule */]
            ],
        })
    ], FamilynFriendsModule);
    return FamilynFriendsModule;
}());

//# sourceMappingURL=familynfriends.module.js.map

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

/***/ 789:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FamilynFriendsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_usercommon_services__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Utility_Constant__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_WebServices_LifeStory_InterestnPassionService__ = __webpack_require__(382);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FamilynFriendsPage = /** @class */ (function () {
    function FamilynFriendsPage(navCtrl, navParams, storage, event, interestnPassionService, commonServices, loadingCtrl, actionSheetCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.event = event;
        this.interestnPassionService = interestnPassionService;
        this.commonServices = commonServices;
        this.loadingCtrl = loadingCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.modalCtrl = modalCtrl;
        this.items = [];
        this.isItems = false;
        this.selectedTab = null;
        this.ownerId = 0;
        this.lifeStoryData = navParams.data;
        console.log('lifestorydata =', this.lifeStoryData);
    }
    FamilynFriendsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad ThirdPage');
        this.initializeItems();
        this.event.subscribe(__WEBPACK_IMPORTED_MODULE_4__Utility_Constant__["d" /* KEY_NOTIFF */].LifeStoryUpdate, function () {
            //debugger;
            //let navdata = this.navParams.data;
            //this.selectedTab = navdata.getSelected().index;
            console.log();
            if (_this.navCtrl.parent.getSelected().index == 3) {
                _this.nextPage = 0;
                _this.initializeItems();
            }
            // if(navdata.getSelected().index == 0)  
            //alert(navdata);
            // do something
        });
    };
    FamilynFriendsPage.prototype.ionViewWillEnter = function () {
        this.initializeItems();
    };
    FamilynFriendsPage.prototype.ionViewWillUnload = function () {
        this.event.unsubscribe(__WEBPACK_IMPORTED_MODULE_4__Utility_Constant__["d" /* KEY_NOTIFF */].LifeStoryUpdate);
    };
    FamilynFriendsPage.prototype.initializeItems = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loader.present();
        // //debugger;
        var ownerData = JSON.parse(localStorage.getItem("lifeStoryData"));
        this.storage.get("userData").then(function (result) {
            _this.userId = result.userInfoModel.userId;
            console.log("++++++++++++======");
            console.log(ownerData.ownerId);
            _this.ownerId = ownerData.ownerId;
            _this.token = result.token;
            _this.commonServices.getFamilyFrnd("api/v1/story/friendFamily", result.token, result.userInfoModel.userId, ownerData.ownerId, 1).subscribe(function (data) {
                // console.log(data)
                var fulldata = JSON.parse(data);
                _this.items = fulldata.data.contentList;
                console.log(fulldata);
                // console.log(this.items.length)
                if (_this.items.length > 0) {
                    // console.log("false");
                    _this.isItems = false;
                }
                else {
                    // console.log("true");
                    _this.isItems = true;
                }
                //debugger;
                _this.nextPage = fulldata.data.nextPage;
                loader.dismiss();
            }, function (error) {
                console.log(error);
                loader.dismiss();
            });
        });
    };
    FamilynFriendsPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        //debugger;
        console.log('Begin async operation');
        if (this.nextPage > 0) {
            var loader_1 = this.loadingCtrl.create({
                content: 'Please wait...'
            });
            this.commonServices.getFamilyFrnd("api/v1/story/friendFamily", this.token, this.userId, this.ownerId, this.nextPage).subscribe(function (data) {
                infiniteScroll.complete();
                // console.log(data)
                var fulldata = JSON.parse(data);
                for (var i = 0; i < fulldata.data.contentList.length; i++) {
                    _this.items.push(fulldata.data.contentList[i]);
                }
                // console.log(this.items)
                _this.nextPage = fulldata.data.nextPage;
                infiniteScroll.complete();
            }, function (error) {
                console.log(error);
                loader_1.dismiss();
            });
        }
        else {
            infiniteScroll.complete();
        }
    };
    FamilynFriendsPage.prototype.actionExperience = function (data, index) {
        var _this = this;
        console.log("this.lifeStoryData.roleId: ", this.lifeStoryData.roleId);
        if (this.lifeStoryData.roleId == 1 || this.lifeStoryData.roleId == 2) {
            var actionSheet = this.actionSheetCtrl.create({
                buttons: [
                    {
                        text: 'Modify',
                        handler: function () {
                            console.log('Modify... ');
                            _this.editFamily(data, index);
                        }
                    },
                    {
                        text: 'Delete',
                        role: 'destructive',
                        handler: function () {
                            console.log('Deleting... ');
                            _this.deleteFamily(data, index);
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
            console.log("Not permited");
        }
    };
    FamilynFriendsPage.prototype.editFamily = function (familyData, index) {
        //debugger
        var data = {
            familyData: familyData,
            ownerId: this.ownerId,
            userId: this.userId,
            urnType: this.lifeStoryData.urnType,
            isEdit: true
        };
        var modal = this.modalCtrl.create("AddFriendsFamilyPage", { data: data });
        modal.present();
        // console.log('data '+data+'  index '+index);
    };
    FamilynFriendsPage.prototype.deleteFamily = function (data, index) {
        var _this = this;
        var parms = {
            familyMemberId: data.familyMemeberId,
            ownerId: this.ownerId,
            userId: this.userId,
        };
        this.interestnPassionService.deleteFriendFamily(parms)
            .then(function (data) {
            console.log(data);
            _this.items.splice(index, 1);
            //debugger
        }, function (error) {
            console.log(error);
        });
    };
    FamilynFriendsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-familynfriends',template:/*ion-inline-start:"/Users/kanikagupta/Documents/Modurn/modurn 2/src/pages/lifestory/life-story/LifeStoryTab/familynfriends/familynfriends.html"*/'<ion-content>\n  <ion-grid *ngIf="items.length > 0" class="life-story-content">\n    <ion-row>\n\n      <ion-col tappable col-6 class=\'userCol\' *ngFor="let item of items;let i=index;">\n        <ion-card class=\'userCard\' (tap)="actionExperience(item,i)">\n          <div class="friends_wrapper">\n            <bg-image-with-loader [image]="item.defaultImage"></bg-image-with-loader>\n          </div>\n          <!-- <img src="{{item.defaultThumbImage200?item.defaultThumbImage200:\'assets/img/defaultHuman.png\'}}" /> -->\n\n          <ion-card-content class="card-content-story">\n\n            <ion-card-title class="userCardTitle">\n              <!--<ion-icon *ngIf="item.urnType == 2" class="iconRight icon icon-ic-animal-paw"></ion-icon> -->\n              {{item.name}} {{(item.nickName==null || item.nickName=="")?\'\':\'(\'+item.nickName+\')\'}}\n            </ion-card-title>\n\n            <!-- <p *ngIf="item.role !==\'\'" text-center class="life-story-subtitle">\n              {{item.role}} <span *ngIf="item.roleId != 4">|</span> <span *ngIf="lifeStoryData.roleId != 4">{{item.relationship}}</span>\n            </p> -->\n\n            <p *ngIf="item.role !==\'\'" text-center class="life-story-subtitle">\n              {{item.role}}\n              <span *ngIf="lifeStoryData.roleId != 4">| {{item.relationship}}</span>\n            </p>\n\n            <!-- <p *ngIf="item.role==\'\' && item.roleId ==5" text-center class="life-story-subtitle">\n              Unregistered user <span *ngIf="item.roleId != 4">|</span> <span *ngIf="lifeStoryData.roleId != 4">{{item.relationship}}</span> -->\n\n            <p *ngIf="item.role==\'\' && item.roleId ==5" text-center class="life-story-subtitle">\n              Unregistered user\n              <span *ngIf="lifeStoryData.roleId != 4">| {{item.relationship}}</span>\n            </p>\n\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n  <!-- <ion-grid *ngIf="items.length == 0" class="life-story-content">\n    <ion-row text-center >\n     <span class="NodataFound">  No Family Member Found</span>\n      \n    </ion-row>\n  </ion-grid> -->\n\n  <ion-grid class="life-story-content1" *ngIf="items.length == 0">\n    No Family Member Found\n  </ion-grid>\n\n\n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>'/*ion-inline-end:"/Users/kanikagupta/Documents/Modurn/modurn 2/src/pages/lifestory/life-story/LifeStoryTab/familynfriends/familynfriends.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_5__providers_WebServices_LifeStory_InterestnPassionService__["a" /* InterestnPassionService */], __WEBPACK_IMPORTED_MODULE_3__providers_usercommon_services__["a" /* UserCommonServices */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */]])
    ], FamilynFriendsPage);
    return FamilynFriendsPage;
}());

//# sourceMappingURL=familynfriends.js.map

/***/ })

});
//# sourceMappingURL=6.js.map