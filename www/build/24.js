webpackJsonp([24],{

/***/ 739:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterestsPassionsModule", function() { return InterestsPassionsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__interests_passions__ = __webpack_require__(782);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var InterestsPassionsModule = /** @class */ (function () {
    function InterestsPassionsModule() {
    }
    InterestsPassionsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__interests_passions__["a" /* InterestsPassionsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__interests_passions__["a" /* InterestsPassionsPage */]),
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__interests_passions__["a" /* InterestsPassionsPage */]]
        })
    ], InterestsPassionsModule);
    return InterestsPassionsModule;
}());

//# sourceMappingURL=interests-passions.module.js.map

/***/ }),

/***/ 782:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InterestsPassionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_WebServices_LifeStory_InterestnPassionService__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_SharedTask_sharedtask__ = __webpack_require__(170);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var InterestsPassionsPage = /** @class */ (function () {
    // interestInfo:any={};
    function InterestsPassionsPage(navCtrl, navParams, viewCtrl, storage, interestnPassion, modalCtrl, sharedTaskProvider) {
        // console.log(this.interestData);
        // this.interestData = navParams.data.interestData;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.storage = storage;
        this.interestnPassion = interestnPassion;
        this.modalCtrl = modalCtrl;
        this.sharedTaskProvider = sharedTaskProvider;
        this.isProfile = true;
        this.interestData = {};
        this.isDataFound = false;
        // this.profileData=navParams;
        // console.log("navParams :", navParams);
        this.ownerId = navParams.data.ownerId;
        this.urnType = navParams.data.urnType;
        this.isProfile = navParams.data.isProfile;
        this.interestData = navParams.data.storyData;
        if (typeof this.interestData === 'undefined') {
            this.interestData = {};
        }
    }
    InterestsPassionsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InterestsPassionsPage');
        if (this.isProfile) {
            this.interestsPassion();
        }
    };
    InterestsPassionsPage.prototype.closeInterestPassion = function () {
        if (this.isProfile) {
            this.viewCtrl.dismiss();
        }
        else
            this.navCtrl.popToRoot();
    };
    InterestsPassionsPage.prototype.interestsPassion = function () {
        var _this = this;
        this.storage.get("userData").then(function (result) {
            var params = {
                'userId': result.userInfoModel.userId,
                'ownerId': _this.ownerId,
                'page': '1',
                'size': '1'
            };
            _this.interestnPassion.fetchinterestsPassion(params)
                .then(function (data) {
                _this.interestData = data;
                if (Object.keys(_this.interestData.contentList).length > 0) {
                    _this.interestData = _this.interestData.contentList[0];
                    for (var key in _this.interestData) {
                        if (_this.interestData[key] == "") {
                            _this.interestData[key] = null;
                        }
                    }
                }
                else {
                    _this.interestData = {};
                    _this.isDataFound = true;
                    _this.sharedTaskProvider.showToastMessage("No data found.");
                }
            }, function (error) {
                ////debugger;
                console.log(error);
            });
        });
    };
    InterestsPassionsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-interests-passions',template:/*ion-inline-start:"/Users/kanikagupta/Documents/Modurn/modurn 2/src/pages/addstory/interests-passions/interests-passions.html"*/'<ion-header no-border>\n  <ion-navbar>\n    <ion-buttons left (click)="closeInterestPassion()">\n      <button class="btnColor cross-icn" ion-button icon-only>\n        <ion-icon class="icon icon-cross" item-right></ion-icon>\n        <!--<img src="assets/img/icCross@3x.png" />-->\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="story-outer">\n\n  <div *ngIf="!isDataFound">\n    <div class="story-cont">\n      <h1 class="{{urnType == 1 ? \'human-follow\':\'pet-follow\'}}">{{urnType == 1 ? \'Interests & passions\':\'Interests\'}}</h1>\n    </div>\n    <!--urnType = {{urnType | json }} -->\n    <!-- {{interestData | json}} -->\n    <div class="health-outer" *ngIf="urnType == 1  && interestData.colour != null">\n      <div class="helth-title">Favourite colour</div>\n      <div class="dot-cont">\n        <ion-icon class="icon icon-ic-color my-icon {{urnType == 1 ? \'\':\'pet-clr\'}}" item-right></ion-icon>\n      </div>\n      <div class="p_content">\n        {{interestData.colour}}\n      </div>\n\n    </div>\n    <div class="health-outer" *ngIf="urnType == 1 && interestData.book != null">\n      <div class="helth-title">Favourite book</div>\n      <div class="dot-cont">\n        <ion-icon class="icon icon-icon my-icon {{urnType == 1 ? \'\':\'pet-clr\'}}" item-right></ion-icon>\n      </div>\n      <div class="p_content">\n        {{interestData.book}}\n      </div>\n\n    </div>\n    <div class="health-outer" *ngIf="urnType == 1 && interestData.favouriteMusicBandSong != null">\n      <div class="helth-title">Favourite Music, Band, Song</div>\n      <div class="dot-cont">\n        <ion-icon class="icon icon-ic-music my-icon {{urnType == 1 ? \'\':\'pet-clr\'}}" item-right></ion-icon>\n      </div>\n      <div class="p_content">\n        {{interestData.favouriteMusicBandSong}}\n      </div>\n    </div>\n    <!-- <div class="health-outer" *ngIf="urnType == 1">\n      <div class="helth-title">Favourite band</div>\n      <div class="dot-cont">\n        <ion-icon class="icon icon-ic-guitar my-icon {{urnType == 1 ? \'\':\'pet-clr\'}}" item-right></ion-icon>\n      </div>\n      <div class="p_content">\n        {{interestData.band}}\n      </div>\n\n    </div> -->\n    <div class="health-outer" *ngIf="urnType == 1 && interestData.firstConcert != null">\n      <div class="helth-title">Favourite concert</div>\n      <div class="dot-cont">\n        <ion-icon class="icon icon-ic-concert my-icon {{urnType == 1 ? \'\':\'pet-clr\'}}" item-right></ion-icon>\n      </div>\n      <div class="p_content">\n        {{interestData.firstConcert}}\n      </div>\n    </div>\n    <div class="health-outer" *ngIf="interestData.food != null">\n      <div class="helth-title">Favourite food</div>\n      <div class="dot-cont">\n        <ion-icon class="icon icon-ic-food my-icon {{urnType == 1 ? \'\':\'pet-clr\'}}" item-right></ion-icon>\n      </div>\n      <div class="p_content">\n        {{interestData.food}}\n      </div>\n\n    </div>\n    <div class="health-outer" *ngIf="urnType == 2 && interestData.person != null">\n      <div class="helth-title">Favourite person</div>\n      <div class="dot-cont">\n        <ion-icon class="icon icon-person my-icon {{urnType == 1 ? \'\':\'pet-clr\'}}" item-right></ion-icon>\n      </div>\n      <div class="p_content">\n        {{interestData.person}}\n      </div>\n    </div>\n    <div class="health-outer" *ngIf="urnType == 1 && interestData.favouritePetAnimal != null">\n      <div class="helth-title">Favourite pet or animal</div>\n      <div class="dot-cont">\n        <ion-icon class="icon icon-a my-icon {{urnType == 1 ? \'\':\'pet-clr\'}}" item-right></ion-icon>\n      </div>\n      <div class="p_content">\n        {{interestData.favouritePetAnimal}}\n      </div>\n\n    </div>\n    <div class="health-outer" *ngIf="urnType == 1 && interestData.spirituality != null">\n      <div class="helth-title">Spirituality</div>\n      <div class="dot-cont">\n        <ion-icon class="icon icon-ic-spirituality my-icon {{urnType == 1 ? \'\':\'pet-clr\'}}" item-right></ion-icon>\n      </div>\n      <div class="p_content">\n        {{interestData.spirituality}}\n      </div>\n\n    </div>\n    <div class="health-outer" *ngIf="urnType == 1 && interestData.car != null">\n      <div class="helth-title">Favourite car</div>\n      <div class="dot-cont">\n        <ion-icon class="icon icon-car my-icon {{urnType == 1 ? \'\':\'pet-clr\'}}" item-right></ion-icon>\n      </div>\n      <div class="p_content">\n        {{interestData.car}}\n      </div>\n    </div>\n    <div class="health-outer" *ngIf="interestData.placeVisited != null">\n      <div class="helth-title">Place\'s visited</div>\n      <div class="dot-cont">\n        <ion-icon class="icon icon-combined-shape my-icon {{urnType == 1 ? \'\':\'pet-clr\'}}" item-right></ion-icon>\n      </div>\n      <div class="p_content">\n        {{interestData.placeVisited}}\n      </div>\n\n    </div>\n    <div class="health-outer" *ngIf="urnType == 1 && interestData.sportsPlayed != null">\n      <div class="helth-title">Sports played/enjoyed</div>\n      <div class="dot-cont">\n        <ion-icon class="icon icon-ic-sports-played my-icon {{urnType == 1 ? \'\':\'pet-clr\'}}" item-right></ion-icon>\n      </div>\n      <div class="p_content">\n        {{interestData.sportsPlayed}}\n      </div>\n    </div>\n    <div class="health-outer" *ngIf="urnType == 1 && interestData.movie != null">\n      <div class="helth-title">Favourite movies</div>\n      <div class="dot-cont">\n        <ion-icon class="icon icon-ic-videos my-icon {{urnType == 1 ? \'\':\'pet-clr\'}}" item-right></ion-icon>\n      </div>\n      <div class="p_content">\n        {{interestData.movie}}\n      </div>\n\n    </div>\n    <div class="health-outer" *ngIf="urnType == 1 && interestData.sayings != null">\n      <div class="helth-title">Saying</div>\n      <div class="dot-cont">\n        <ion-icon class="icon icon-ic-saying my-icon {{urnType == 1 ? \'\':\'pet-clr\'}}" item-right></ion-icon>\n      </div>\n      <div class="p_content">\n        <!-- You were born an original. Don’t die a copy.” borrowed from \n        <br>- John Mason -->\n        {{interestData.sayings}}\n      </div>\n    </div>\n    <div class="health-outer" *ngIf="interestData.waysToRelax != null">\n      <div class="helth-title">Happiness means</div>\n      <div class="dot-cont">\n        <ion-icon class="icon icon-ic-relax my-icon {{urnType == 1 ? \'\':\'pet-clr\'}}" item-right></ion-icon>\n      </div>\n      <div class="p_content">\n        {{interestData.waysToRelax}}\n      </div>\n\n    </div>\n    <div class="health-outer" *ngIf="urnType == 1 && interestData.hobbies != null">\n      <div class="helth-title">Hobbies</div>\n      <div class="dot-cont">\n        <ion-icon class="icon icon-ic-hobbies my-icon {{urnType == 1 ? \'\':\'pet-clr\'}}" item-right></ion-icon>\n      </div>\n      <div class="p_content">\n        {{interestData.hobbies}}\n      </div>\n    </div>\n    <div class="health-outer" *ngIf="interestData.pastTimes != null">\n      <div class="helth-title">Past times</div>\n      <div class="dot-cont">\n        <ion-icon class="icon icon-ic-past-times my-icon {{urnType == 1 ? \'\':\'pet-clr\'}}" item-right></ion-icon>\n      </div>\n      <div class="p_content">\n        {{interestData.pastTimes}}\n      </div>\n    </div>\n    <div class="health-outer" *ngIf="interestData.influencer != null">\n      <div class="helth-title">People who were an influence</div>\n      <div class="dot-cont">\n        <ion-icon class="icon icon-ic-people my-icon {{urnType == 1 ? \'\':\'pet-clr\'}}" item-right></ion-icon>\n      </div>\n      <div class="p_content">\n        {{interestData.influencer}}\n      </div>\n    </div>\n    <div class="health-outer" *ngIf="urnType == 1 && interestData.lookalike != null">\n      <div class="helth-title">Lookalike</div>\n      <div class="dot-cont">\n        <ion-icon class="icon icon-ic-lookalike my-icon {{urnType == 1 ? \'\':\'pet-clr\'}}" item-right></ion-icon>\n      </div>\n      <div class="p_content">\n        {{interestData.lookalike}}\n      </div>\n\n    </div>\n    <div class="health-outer" *ngIf="urnType == 1 && interestData.wordsOfWisdom != null">\n      <div class="helth-title">Words of wisdom</div>\n      <div class="dot-cont">\n        <ion-icon class="icon icon-ic-words-wisdom my-icon {{urnType == 1 ? \'\':\'pet-clr\'}}" item-right></ion-icon>\n      </div>\n      <div class="p_content">\n        {{interestData.wordsOfWisdom}}\n      </div>\n\n    </div>\n    <div class="health-outer" *ngIf="urnType == 1 && interestData.mantra != null">\n      <div class="helth-title">Mantra</div>\n      <div class="dot-cont">\n        <ion-icon class="icon icon-ic-mantra my-icon {{urnType == 1 ? \'\':\'pet-clr\'}}" item-right></ion-icon>\n      </div>\n      <div class="p_content">\n        {{interestData.mantra}}\n      </div>\n    </div>\n\n    <!-- <div class="health-outer" *ngIf="urnType == 1">\n      <div class="helth-title">Sports played/enjoyed</div>\n      <div class="dot-cont">\n        <ion-icon class="icon icon-ic-sports-played my-icon" item-right></ion-icon>\n      </div>\n      <div class="p_content">\n        {{careerData.sportsPlayed}}\n      </div>\n    </div>-->\n    <div class="health-outer" *ngIf="urnType == 1 && interestData.sportsRecord != null">\n      <div class="helth-title">Sports records & achievements</div>\n      <div class="dot-cont">\n        <ion-icon class="icon icon-ic-sports-record my-icon" item-right></ion-icon>\n      </div>\n      <div class="p_content">\n        {{interestData.sportsRecord}}\n      </div>\n    </div>\n\n    <div class="health-outer" *ngIf="urnType == 1 && interestData.howManyChildren != null">\n      <div class="helth-title">How many Children</div>\n      <div class="dot-cont">\n        <ion-icon class="icon icon-ic-color my-icon {{urnType == 1 ? \'\':\'pet-clr\'}}" item-right></ion-icon>\n      </div>\n      <div class="p_content">\n        {{interestData.howManyChildren}}\n      </div>\n    </div>\n\n    <div class="health-outer" *ngIf="urnType == 1 && interestData.pets != null">\n      <div class="helth-title">Pets</div>\n      <div class="dot-cont">\n        <ion-icon class="icon icon-icon my-icon {{urnType == 1 ? \'\':\'pet-clr\'}}" item-right></ion-icon>\n      </div>\n      <div class="p_content">\n        {{interestData.pets}}\n      </div>\n    </div>\n\n    <div class="health-outer" *ngIf="urnType == 1 && interestData.bestFriends != null">\n      <div class="helth-title">Best friend/s </div>\n      <div class="dot-cont">\n        <ion-icon class="icon icon-ic-music my-icon {{urnType == 1 ? \'\':\'pet-clr\'}}" item-right></ion-icon>\n      </div>\n      <div class="p_content">\n        {{interestData.bestFriends}}\n      </div>\n    </div>\n\n    <div class="health-outer" *ngIf="urnType == 1 && interestData.whoDoYouMiss != null">\n      <div class="helth-title">Who do you miss </div>\n      <div class="dot-cont">\n        <ion-icon class="icon icon-ic-concert my-icon {{urnType == 1 ? \'\':\'pet-clr\'}}" item-right></ion-icon>\n      </div>\n      <div class="p_content">\n        {{interestData.whoDoYouMiss}}\n      </div>\n    </div>\n\n    <div class="health-outer" *ngIf="urnType == 1  && interestData.worstEnemy != null">\n      <div class="helth-title">Worst enemy </div>\n      <div class="dot-cont">\n        <ion-icon class="icon icon-ic-food my-icon {{urnType == 1 ? \'\':\'pet-clr\'}}" item-right></ion-icon>\n      </div>\n      <div class="p_content">\n        {{interestData.worstEnemy}}\n      </div>\n    </div>\n\n    <div class="health-outer" *ngIf="urnType == 1 && interestData.aspireToBeLike != null">\n      <div class="helth-title">Aspire to be like </div>\n      <div class="dot-cont">\n        <ion-icon class="icon icon-person my-icon {{urnType == 1 ? \'\':\'pet-clr\'}}" item-right></ion-icon>\n      </div>\n      <div class="p_content">\n        {{interestData.aspireToBeLike}}\n      </div>\n    </div>\n\n    <div class="health-outer" *ngIf="urnType == 1 && interestData.ultimateDinnerPartyGuests != null">\n      <div class="helth-title">Ultimate dinner party guests </div>\n      <div class="dot-cont">\n        <ion-icon class="icon icon-a my-icon {{urnType == 1 ? \'\':\'pet-clr\'}}" item-right></ion-icon>\n      </div>\n      <div class="p_content">\n        {{interestData.ultimateDinnerPartyGuests}}\n      </div>\n    </div>\n\n    <div class="health-outer" *ngIf="urnType == 1 && interestData.greatestFear != null">\n      <div class="helth-title">Greatest fear </div>\n      <div class="dot-cont">\n        <ion-icon class="icon icon-ic-spirituality my-icon {{urnType == 1 ? \'\':\'pet-clr\'}}" item-right></ion-icon>\n      </div>\n      <div class="p_content">\n        {{interestData.greatestFear}}\n      </div>\n    </div>\n\n    <div class="health-outer" *ngIf="urnType == 1 && interestData.greatestAchievement != null">\n      <div class="helth-title">Greatest achievement </div>\n      <div class="dot-cont">\n        <ion-icon class="icon icon-car my-icon {{urnType == 1 ? \'\':\'pet-clr\'}}" item-right></ion-icon>\n      </div>\n      <div class="p_content">\n        {{interestData.greatestAchievement}}\n      </div>\n    </div>\n\n    <div class="health-outer" *ngIf="urnType == 1 && interestData.mostProudOf != null">\n      <div class="helth-title">Most proud of </div>\n      <div class="dot-cont">\n        <ion-icon class="icon icon-combined-shape my-icon {{urnType == 1 ? \'\':\'pet-clr\'}}" item-right></ion-icon>\n      </div>\n      <div class="p_content">\n        {{interestData.mostProudOf}}\n      </div>\n    </div>\n\n    <!-- <div class="health-outer" *ngIf="urnType == 1">\n      <div class="helth-title">6 degrees of separation</div>\n      <div class="dot-cont">\n      </div>\n      <div class="p_content">\n        {{interestData.degreesOfSeparation}}\n      </div>\n    </div> -->\n\n    <div class="health-outer" *ngIf="urnType == 1 && interestData.bestTimeInLife != null">\n      <div class="helth-title">Best time in life</div>\n      <div class="dot-cont">\n        <ion-icon class="icon icon-ic-sports-played my-icon {{urnType == 1 ? \'\':\'pet-clr\'}}" item-right></ion-icon>\n      </div>\n      <div class="p_content">\n        {{interestData.bestTimeInLife}}\n      </div>\n    </div>\n\n    <div class="health-outer" *ngIf="urnType == 1 && interestData.worstTimeInLife != null">\n      <div class="helth-title">Worst time in life </div>\n      <div class="dot-cont">\n        <ion-icon class="icon icon-ic-videos my-icon {{urnType == 1 ? \'\':\'pet-clr\'}}" item-right></ion-icon>\n      </div>\n      <div class="p_content">\n        {{interestData.worstTimeInLife}}\n      </div>\n    </div>\n\n    <!-- <div class="health-outer" *ngIf="urnType == 1">\n      <div class="helth-title">Struggles encountered</div>\n      <div class="dot-cont">\n      </div>\n      <div class="p_content">\n        {{interestData.strugglesEncountered}}\n      </div>\n    </div> -->\n\n    <div class="health-outer" *ngIf="urnType == 1 && interestData.ifYouCouldDoItOverAgain != null">\n      <div class="helth-title">If you could do it over again </div>\n      <div class="dot-cont">\n        <ion-icon class="icon icon-ic-saying my-icon {{urnType == 1 ? \'\':\'pet-clr\'}}" item-right></ion-icon>\n      </div>\n      <div class="p_content">\n        {{interestData.ifYouCouldDoItOverAgain}}\n      </div>\n    </div>\n\n    <div class="health-outer" *ngIf="urnType == 1 && interestData.bestAdviseYouReceived != null">\n      <div class="helth-title">Best advise you received</div>\n      <div class="dot-cont">\n        <ion-icon class="icon icon-ic-relax my-icon {{urnType == 1 ? \'\':\'pet-clr\'}}" item-right></ion-icon>\n      </div>\n      <div class="p_content">\n        {{interestData.bestAdviseYouReceived}}\n      </div>\n    </div>\n\n    <div class="health-outer" *ngIf="urnType == 1  && interestData.firstJob != null">\n      <div class="helth-title">First job</div>\n      <div class="dot-cont">\n        <ion-icon class="icon icon-ic-hobbies my-icon {{urnType == 1 ? \'\':\'pet-clr\'}}" item-right></ion-icon>\n      </div>\n      <div class="p_content">\n        {{interestData.firstJob}}\n      </div>\n    </div>\n\n    <div class="health-outer" *ngIf="urnType == 1 && interestData.worstJob != null">\n      <div class="helth-title">Worst job</div>\n      <div class="dot-cont">\n        <ion-icon class="icon icon-ic-past-times my-icon {{urnType == 1 ? \'\':\'pet-clr\'}}" item-right></ion-icon>\n      </div>\n      <div class="p_content">\n        {{interestData.worstJob}}\n      </div>\n    </div>\n\n    <div class="health-outer" *ngIf="urnType == 1 && interestData.bestJob != null">\n      <div class="helth-title">Best job </div>\n      <div class="dot-cont">\n        <ion-icon class="icon icon-ic-people my-icon {{urnType == 1 ? \'\':\'pet-clr\'}}" item-right></ion-icon>\n      </div>\n      <div class="p_content">\n        {{interestData.bestJob}}\n      </div>\n    </div>\n\n    <div class="health-outer" *ngIf="urnType == 1 && interestData.bestHoliday != null">\n      <div class="helth-title">Best holiday</div>\n      <div class="dot-cont">\n        <ion-icon class="icon icon-ic-lookalike my-icon {{urnType == 1 ? \'\':\'pet-clr\'}}" item-right></ion-icon>\n      </div>\n      <div class="p_content">\n        {{interestData.bestHoliday}}\n      </div>\n    </div>\n\n    <div class="health-outer" *ngIf="urnType == 1 && interestData.bestJokeIKnow != null">\n      <div class="helth-title">Best joke I know </div>\n      <div class="dot-cont">\n        <ion-icon class="icon icon-ic-words-wisdom my-icon {{urnType == 1 ? \'\':\'pet-clr\'}}" item-right></ion-icon>\n      </div>\n      <div class="p_content">\n        {{interestData.bestJokeIKnow}}\n      </div>\n    </div>\n\n    <div class="health-outer" *ngIf="urnType == 1 && interestData.whoMakesYouLaugh != null">\n      <div class="helth-title">Who makes you laugh </div>\n      <div class="dot-cont">\n        <ion-icon class="icon icon-ic-mantra my-icon {{urnType == 1 ? \'\':\'pet-clr\'}}" item-right></ion-icon>\n      </div>\n      <div class="p_content">\n        {{interestData.whoMakesYouLaugh}}\n      </div>\n    </div>\n\n    <div class="health-outer" *ngIf="urnType == 1 && interestData.whatMakesYouCry != null">\n      <div class="helth-title">What makes you cry</div>\n      <div class="dot-cont">\n        <ion-icon class="icon icon-ic-sports-record my-icon" item-right></ion-icon>\n      </div>\n      <div class="p_content">\n        {{interestData.whatMakesYouCry}}\n      </div>\n    </div>\n\n    <!-- <div class="health-outer" *ngIf="urnType == 1">\n      <div class="helth-title">Deserted island companion</div>\n      <div class="dot-cont">\n      </div>\n      <div class="p_content">\n        {{interestData.desertedIslandCompanion}}\n      </div>\n    </div> -->\n\n    <div class="health-outer" *ngIf="urnType == 1 && interestData.whatWouldYouChangeAboutTheWorld != null">\n      <div class="helth-title">What would you change about the world</div>\n      <div class="dot-cont">\n        <ion-icon class="icon icon-ic-color my-icon {{urnType == 1 ? \'\':\'pet-clr\'}}" item-right></ion-icon>\n      </div>\n      <div class="p_content">\n        {{interestData.whatWouldYouChangeAboutTheWorld}}\n      </div>\n    </div>\n\n    <div class="health-outer" *ngIf="urnType == 1 && interestData.ifYouCouldWhatWouldYouComeBackAs != null">\n      <div class="helth-title">If you could who/what would you come back as</div>\n      <div class="dot-cont">\n        <ion-icon class="icon icon-icon my-icon {{urnType == 1 ? \'\':\'pet-clr\'}}" item-right></ion-icon>\n      </div>\n      <div class="p_content">\n        {{interestData.ifYouCouldWhatWouldYouComeBackAs}}\n      </div>\n    </div>\n\n    <div class="health-outer" *ngIf="urnType == 1 && interestData.bestTheatrePerformance != null">\n      <div class="helth-title">Best show/theatre performance</div>\n      <div class="dot-cont">\n        <ion-icon class="icon icon-ic-music my-icon {{urnType == 1 ? \'\':\'pet-clr\'}}" item-right></ion-icon>\n      </div>\n      <div class="p_content">\n        {{interestData.bestTheatrePerformance}}\n      </div>\n    </div>\n\n    <div class="health-outer" *ngIf="urnType == 2 && interestData.furBestFriend != null">\n      <div class="helth-title">Fur best friend </div>\n      <div class="dot-cont">\n        <ion-icon class="icon icon-ic-concert my-icon {{urnType == 1 ? \'\':\'pet-clr\'}}" item-right></ion-icon>\n      </div>\n      <div class="p_content">\n        {{interestData.furBestFriend}}\n      </div>\n    </div>\n\n    <div class="health-outer" *ngIf="urnType == 2 && interestData.favouritePark != null">\n      <div class="helth-title">Favourite Park </div>\n      <div class="dot-cont">\n        <ion-icon class="icon icon-ic-food my-icon {{urnType == 1 ? \'\':\'pet-clr\'}}" item-right></ion-icon>\n      </div>\n    </div>\n    <div class="p_content">\n      {{interestData.favouritePark}}\n    </div>\n  \n\n  <div class="health-outer" *ngIf="urnType == 2 && interestData.owners != null">\n    <div class="helth-title">Owners </div>\n    <div class="dot-cont">\n      <ion-icon class="icon icon-person my-icon {{urnType == 1 ? \'\':\'pet-clr\'}}" item-right></ion-icon>\n    </div>\n    <div class="p_content">\n      {{interestData.owners}}\n    </div>\n  </div>\n\n</div>\n \n  <div *ngIf="isDataFound" class="Nodatafound">\n    <h1 text-center>No data found</h1>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/kanikagupta/Documents/Modurn/modurn 2/src/pages/addstory/interests-passions/interests-passions.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["u" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1__providers_WebServices_LifeStory_InterestnPassionService__["a" /* InterestnPassionService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_SharedTask_sharedtask__["a" /* SharedTaskProvider */]])
    ], InterestsPassionsPage);
    return InterestsPassionsPage;
}());

//# sourceMappingURL=interests-passions.js.map

/***/ })

});
//# sourceMappingURL=24.js.map