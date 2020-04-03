webpackJsonp([33],{

/***/ 732:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddInterestPassionModule", function() { return AddInterestPassionModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_interest_passion__ = __webpack_require__(775);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddInterestPassionModule = /** @class */ (function () {
    function AddInterestPassionModule() {
    }
    AddInterestPassionModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__add_interest_passion__["a" /* AddInterestPassionPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_interest_passion__["a" /* AddInterestPassionPage */]),
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__add_interest_passion__["a" /* AddInterestPassionPage */]]
        })
    ], AddInterestPassionModule);
    return AddInterestPassionModule;
}());

//# sourceMappingURL=add-interest-passion.module.js.map

/***/ }),

/***/ 775:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddInterestPassionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_usercommon_services__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_WebServices_LifeStory_InterestnPassionService__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_keyboard__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Utility_Constant__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_SharedTask_sharedtask__ = __webpack_require__(170);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AddInterestPassionPage = /** @class */ (function () {
    function AddInterestPassionPage(navCtrl, navParams, viewCtrl, fb, modalCtrl, loadingCtrl, commonServices, interestPassionService, storage, keyboard, sharedTaskProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.fb = fb;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.commonServices = commonServices;
        this.interestPassionService = interestPassionService;
        this.storage = storage;
        this.keyboard = keyboard;
        this.sharedTaskProvider = sharedTaskProvider;
        this.isValid = false;
        this.ownerId = 0;
        this.urnType = 0;
        this.isNotEmpty = false;
        this.blankForm = false;
        this.interestForm = fb.group({
            'favcolor': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_7__Utility_Constant__["j" /* WITHOUT_FIRST_REGES_SPECIAL */])],
            'favbook': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_7__Utility_Constant__["j" /* WITHOUT_FIRST_REGES_SPECIAL */])],
            'favouriteMusicBandSong': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_7__Utility_Constant__["j" /* WITHOUT_FIRST_REGES_SPECIAL */])],
            // 'favband': [null, Validators.pattern(WITHOUT_FIRST_REGES_SPECIAL)],
            'favconcert': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_7__Utility_Constant__["j" /* WITHOUT_FIRST_REGES_SPECIAL */])],
            'favfoods': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_7__Utility_Constant__["j" /* WITHOUT_FIRST_REGES_SPECIAL */])],
            'favperson': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_7__Utility_Constant__["j" /* WITHOUT_FIRST_REGES_SPECIAL */])],
            'favpet': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_7__Utility_Constant__["j" /* WITHOUT_FIRST_REGES_SPECIAL */])],
            'spirituality': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_7__Utility_Constant__["j" /* WITHOUT_FIRST_REGES_SPECIAL */])],
            'favcar': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_7__Utility_Constant__["j" /* WITHOUT_FIRST_REGES_SPECIAL */])],
            'visitedplace': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_7__Utility_Constant__["j" /* WITHOUT_FIRST_REGES_SPECIAL */])],
            'visitedplacelive': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_7__Utility_Constant__["j" /* WITHOUT_FIRST_REGES_SPECIAL */])],
            'sportsplayed': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_7__Utility_Constant__["j" /* WITHOUT_FIRST_REGES_SPECIAL */])],
            'favmovies': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_7__Utility_Constant__["j" /* WITHOUT_FIRST_REGES_SPECIAL */])],
            'saying': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_7__Utility_Constant__["j" /* WITHOUT_FIRST_REGES_SPECIAL */])],
            'relax': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_7__Utility_Constant__["j" /* WITHOUT_FIRST_REGES_SPECIAL */])],
            'hobbies': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_7__Utility_Constant__["j" /* WITHOUT_FIRST_REGES_SPECIAL */])],
            // 'pastime': [null, Validators.compose([  Validators.pattern(WITHOUT_FIRST_REGES_SPECIAL)])],
            'people': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_7__Utility_Constant__["j" /* WITHOUT_FIRST_REGES_SPECIAL */])],
            'lookalike': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_7__Utility_Constant__["j" /* WITHOUT_FIRST_REGES_SPECIAL */])],
            'wisdom': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_7__Utility_Constant__["j" /* WITHOUT_FIRST_REGES_SPECIAL */])],
            'mantra': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_7__Utility_Constant__["j" /* WITHOUT_FIRST_REGES_SPECIAL */])],
            // 'sport': [null, Validators.pattern(WITHOUT_FIRST_REGES_SPECIAL)],
            'sportsRecord': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_7__Utility_Constant__["j" /* WITHOUT_FIRST_REGES_SPECIAL */])],
            'howManyChildren': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_7__Utility_Constant__["j" /* WITHOUT_FIRST_REGES_SPECIAL */])],
            'pets': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_7__Utility_Constant__["j" /* WITHOUT_FIRST_REGES_SPECIAL */])],
            'bestFriends': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_7__Utility_Constant__["j" /* WITHOUT_FIRST_REGES_SPECIAL */])],
            'whoDoYouMiss': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_7__Utility_Constant__["j" /* WITHOUT_FIRST_REGES_SPECIAL */])],
            'worstEnemy': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_7__Utility_Constant__["j" /* WITHOUT_FIRST_REGES_SPECIAL */])],
            'aspireToBeLike': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_7__Utility_Constant__["j" /* WITHOUT_FIRST_REGES_SPECIAL */])],
            'ultimateDinnerPartyGuests': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_7__Utility_Constant__["j" /* WITHOUT_FIRST_REGES_SPECIAL */])],
            'greatestFear': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_7__Utility_Constant__["j" /* WITHOUT_FIRST_REGES_SPECIAL */])],
            'greatestAchievement': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_7__Utility_Constant__["j" /* WITHOUT_FIRST_REGES_SPECIAL */])],
            'mostProudOf': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_7__Utility_Constant__["j" /* WITHOUT_FIRST_REGES_SPECIAL */])],
            // 'degreesOfSeparation': [null, Validators.pattern(WITHOUT_FIRST_REGES_SPECIAL)],
            'bestTimeInLife': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_7__Utility_Constant__["j" /* WITHOUT_FIRST_REGES_SPECIAL */])],
            'worstTimeInLife': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_7__Utility_Constant__["j" /* WITHOUT_FIRST_REGES_SPECIAL */])],
            // 'strugglesEncountered': [null, Validators.compose([Validators.pattern(WITHOUT_FIRST_REGES_SPECIAL)])],
            'ifYouCouldDoItOverAgain': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_7__Utility_Constant__["j" /* WITHOUT_FIRST_REGES_SPECIAL */])],
            'bestAdviseYouReceived': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_7__Utility_Constant__["j" /* WITHOUT_FIRST_REGES_SPECIAL */])],
            'firstJob': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_7__Utility_Constant__["j" /* WITHOUT_FIRST_REGES_SPECIAL */])],
            'worstJob': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_7__Utility_Constant__["j" /* WITHOUT_FIRST_REGES_SPECIAL */])],
            'bestJob': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_7__Utility_Constant__["j" /* WITHOUT_FIRST_REGES_SPECIAL */])],
            'bestHoliday': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_7__Utility_Constant__["j" /* WITHOUT_FIRST_REGES_SPECIAL */])],
            'bestJokeIKnow': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_7__Utility_Constant__["j" /* WITHOUT_FIRST_REGES_SPECIAL */])],
            'whoMakesYouLaugh': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_7__Utility_Constant__["j" /* WITHOUT_FIRST_REGES_SPECIAL */])],
            'whatMakesYouCry': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_7__Utility_Constant__["j" /* WITHOUT_FIRST_REGES_SPECIAL */])],
            // 'desertedIslandCompanion': [null, Validators.compose([Validators.pattern(WITHOUT_FIRST_REGES_SPECIAL)])],
            'whatWouldYouChangeAboutTheWorld': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_7__Utility_Constant__["j" /* WITHOUT_FIRST_REGES_SPECIAL */])],
            'ifYouCouldWhatWouldYouComeBackAs': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_7__Utility_Constant__["j" /* WITHOUT_FIRST_REGES_SPECIAL */])],
            'bestTheatrePerformance': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_7__Utility_Constant__["j" /* WITHOUT_FIRST_REGES_SPECIAL */])],
            'furBestFriend': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_7__Utility_Constant__["j" /* WITHOUT_FIRST_REGES_SPECIAL */])],
            'favouritePark': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_7__Utility_Constant__["j" /* WITHOUT_FIRST_REGES_SPECIAL */])],
            'owners': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_7__Utility_Constant__["j" /* WITHOUT_FIRST_REGES_SPECIAL */])],
        });
        this.ownerId = navParams.data.ownerId;
        this.urnType = navParams.data.urnType;
        this.InterestData = navParams.data.interestData;
        if (this.urnType == "1") {
            this.interestForm.controls['favperson'].setValidators(null);
            this.interestForm.controls['visitedplacelive'].setValidators(null);
        }
        else if (this.urnType == "2") {
            // this.interestForm.controls['favband'].setValidators(null);
            this.interestForm.controls['favbook'].setValidators(null);
            this.interestForm.controls['favcar'].setValidators(null);
            this.interestForm.controls['favcolor'].setValidators(null);
            this.interestForm.controls['favconcert'].setValidators(null);
            this.interestForm.controls['favmovies'].setValidators(null);
            this.interestForm.controls['favouriteMusicBandSong'].setValidators(null);
            this.interestForm.controls['favpet'].setValidators(null);
            this.interestForm.controls['hobbies'].setValidators(null);
            this.interestForm.controls['lookalike'].setValidators(null);
            this.interestForm.controls['mantra'].setValidators(null);
            this.interestForm.controls['saying'].setValidators(null);
            this.interestForm.controls['spirituality'].setValidators(null);
            this.interestForm.controls['sportsplayed'].setValidators(null);
            this.interestForm.controls['visitedplace'].setValidators(null);
            this.interestForm.controls['wisdom'].setValidators(null);
            this.interestForm.controls['sportsRecord'].setValidators(null);
            this.interestForm.controls['howManyChildren'].setValidators(null);
            this.interestForm.controls['pets'].setValidators(null);
            this.interestForm.controls['bestFriends'].setValidators(null);
            this.interestForm.controls['whoDoYouMiss'].setValidators(null);
            this.interestForm.controls['worstEnemy'].setValidators(null);
            this.interestForm.controls['aspireToBeLike'].setValidators(null);
            this.interestForm.controls['ultimateDinnerPartyGuests'].setValidators(null);
            this.interestForm.controls['greatestAchievement'].setValidators(null);
            this.interestForm.controls['mostProudOf'].setValidators(null);
            // this.interestForm.controls['degreesOfSeparation'].setValidators(null);
            this.interestForm.controls['bestTimeInLife'].setValidators(null);
            this.interestForm.controls['worstTimeInLife'].setValidators(null);
            // this.interestForm.controls['strugglesEncountered'].setValidators(null);
            this.interestForm.controls['ifYouCouldDoItOverAgain'].setValidators(null);
            this.interestForm.controls['bestAdviseYouReceived'].setValidators(null);
            this.interestForm.controls['firstJob'].setValidators(null);
            this.interestForm.controls['worstJob'].setValidators(null);
            this.interestForm.controls['bestJob'].setValidators(null);
            this.interestForm.controls['bestHoliday'].setValidators(null);
            this.interestForm.controls['bestJokeIKnow'].setValidators(null);
            this.interestForm.controls['whoMakesYouLaugh'].setValidators(null);
            this.interestForm.controls['whatMakesYouCry'].setValidators(null);
            // this.interestForm.controls['desertedIslandCompanion'].setValidators(null);
            this.interestForm.controls['whatWouldYouChangeAboutTheWorld'].setValidators(null);
            this.interestForm.controls['ifYouCouldWhatWouldYouComeBackAs'].setValidators(null);
            this.interestForm.controls['bestTheatrePerformance'].setValidators(null);
        }
    }
    AddInterestPassionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddInterestPassionPage');
        console.log(this.InterestData);
        if (Object.keys(this.InterestData).length > 0) {
            // console.log("Not Blank");
            this.isNotEmpty = true;
        }
        this.interestForm.controls['favcolor'].setValue(this.InterestData.colour);
        this.interestForm.controls['favouriteMusicBandSong'].setValue(this.InterestData.favouriteMusicBandSong);
        this.interestForm.controls['favbook'].setValue(this.InterestData.book);
        // this.interestForm.controls['favband'].setValue(this.InterestData.band);
        this.interestForm.controls['favconcert'].setValue(this.InterestData.firstConcert);
        this.interestForm.controls['favfoods'].setValue(this.InterestData.food);
        this.interestForm.controls['favperson'].setValue(this.InterestData.person);
        this.interestForm.controls['favpet'].setValue(this.InterestData.favouritePetAnimal);
        this.interestForm.controls['spirituality'].setValue(this.InterestData.spirituality);
        this.interestForm.controls['favcar'].setValue(this.InterestData.car);
        this.interestForm.controls['visitedplace'].setValue(this.InterestData.placeVisited);
        this.interestForm.controls['visitedplacelive'].setValue(this.InterestData.placeVisited);
        this.interestForm.controls['sportsplayed'].setValue(this.InterestData.sportsPlayed);
        this.interestForm.controls['favmovies'].setValue(this.InterestData.movie);
        this.interestForm.controls['saying'].setValue(this.InterestData.sayings);
        this.interestForm.controls['relax'].setValue(this.InterestData.waysToRelax);
        this.interestForm.controls['hobbies'].setValue(this.InterestData.hobbies);
        // this.interestForm.controls['pastime'].setValue(this.InterestData.pastTimes);
        this.interestForm.controls['people'].setValue(this.InterestData.influencer);
        this.interestForm.controls['lookalike'].setValue(this.InterestData.lookalike);
        this.interestForm.controls['wisdom'].setValue(this.InterestData.wordsOfWisdom);
        this.interestForm.controls['mantra'].setValue(this.InterestData.mantra);
        this.interestForm.controls['sportsRecord'].setValue(this.InterestData.sportsRecord);
        this.interestForm.controls['howManyChildren'].setValue(this.InterestData.howManyChildren);
        this.interestForm.controls['pets'].setValue(this.InterestData.pets);
        this.interestForm.controls['bestFriends'].setValue(this.InterestData.bestFriends);
        this.interestForm.controls['whoDoYouMiss'].setValue(this.InterestData.whoDoYouMiss);
        this.interestForm.controls['worstEnemy'].setValue(this.InterestData.worstEnemy);
        this.interestForm.controls['aspireToBeLike'].setValue(this.InterestData.aspireToBeLike);
        this.interestForm.controls['ultimateDinnerPartyGuests'].setValue(this.InterestData.ultimateDinnerPartyGuests);
        this.interestForm.controls['greatestFear'].setValue(this.InterestData.greatestFear);
        this.interestForm.controls['greatestAchievement'].setValue(this.InterestData.greatestAchievement);
        this.interestForm.controls['mostProudOf'].setValue(this.InterestData.mostProudOf);
        // this.interestForm.controls['degreesOfSeparation'].setValue(this.InterestData.degreesOfSeparation);
        this.interestForm.controls['bestTimeInLife'].setValue(this.InterestData.bestTimeInLife);
        this.interestForm.controls['worstTimeInLife'].setValue(this.InterestData.worstTimeInLife);
        // this.interestForm.controls['strugglesEncountered'].setValue(this.InterestData.strugglesEncountered);
        this.interestForm.controls['ifYouCouldDoItOverAgain'].setValue(this.InterestData.ifYouCouldDoItOverAgain);
        this.interestForm.controls['bestAdviseYouReceived'].setValue(this.InterestData.bestAdviseYouReceived);
        this.interestForm.controls['firstJob'].setValue(this.InterestData.firstJob);
        this.interestForm.controls['worstJob'].setValue(this.InterestData.worstJob);
        this.interestForm.controls['bestJob'].setValue(this.InterestData.bestJob);
        this.interestForm.controls['bestHoliday'].setValue(this.InterestData.bestHoliday);
        this.interestForm.controls['bestJokeIKnow'].setValue(this.InterestData.bestJokeIKnow);
        this.interestForm.controls['whoMakesYouLaugh'].setValue(this.InterestData.whoMakesYouLaugh);
        this.interestForm.controls['whatMakesYouCry'].setValue(this.InterestData.whatMakesYouCry);
        // this.interestForm.controls['desertedIslandCompanion'].setValue(this.InterestData.desertedIslandCompanion);
        this.interestForm.controls['whatWouldYouChangeAboutTheWorld'].setValue(this.InterestData.whatWouldYouChangeAboutTheWorld);
        this.interestForm.controls['ifYouCouldWhatWouldYouComeBackAs'].setValue(this.InterestData.ifYouCouldWhatWouldYouComeBackAs);
        this.interestForm.controls['bestTheatrePerformance'].setValue(this.InterestData.bestTheatrePerformance);
        this.interestForm.controls['furBestFriend'].setValue(this.InterestData.furBestFriend);
        this.interestForm.controls['favouritePark'].setValue(this.InterestData.favouritePark);
        this.interestForm.controls['owners'].setValue(this.InterestData.owners);
    };
    AddInterestPassionPage.prototype.closeInterestPassion = function () {
        this.keyboard.close();
        this.viewCtrl.dismiss();
        //  this.navCtrl.pop();
    };
    AddInterestPassionPage.prototype.addInterestPassion = function (interestPassionFormData) {
        var _this = this;
        console.log(interestPassionFormData);
        this.isValid = true;
        this.keyboard.close();
        //debugger
        for (var key in this.interestForm.value) {
            if (this.interestForm.value[key] == "") {
                this.interestForm.value[key] = null;
            }
        }
        if (this.urnType == "1") {
            console.log("Human");
            // if (interestPassionFormData.favcolor != null && interestPassionFormData.favcolor !== undefined && interestPassionFormData.favcolor != "" && interestPassionFormData.favbook != null && interestPassionFormData.favbook !== undefined && interestPassionFormData.favbook != "" && interestPassionFormData.favmusic != null && interestPassionFormData.favmusic !== undefined && interestPassionFormData.favmusic != "" && interestPassionFormData.favband != null && interestPassionFormData.favband !== undefined && interestPassionFormData.favband != "" && interestPassionFormData.favconcert != null && interestPassionFormData.favconcert !== undefined && interestPassionFormData.favconcert != "" && interestPassionFormData.favfoods != null && interestPassionFormData.favfoods !== undefined && interestPassionFormData.favfoods != "" && interestPassionFormData.favpet != null && interestPassionFormData.favpet !== undefined && interestPassionFormData.favpet != "" && interestPassionFormData.spirituality != null && interestPassionFormData.spirituality !== undefined && interestPassionFormData.spirituality != "" && interestPassionFormData.favcar != null && interestPassionFormData.favcar !== undefined && interestPassionFormData.favcar != "" && interestPassionFormData.visitedplace != null && interestPassionFormData.visitedplace !== undefined && interestPassionFormData.visitedplace != "" && interestPassionFormData.sportsplayed != null && interestPassionFormData.sportsplayed !== undefined && interestPassionFormData.sportsplayed != "" && interestPassionFormData.favmovies != null && interestPassionFormData.favmovies !== undefined && interestPassionFormData.favmovies != "" && interestPassionFormData.saying != null && interestPassionFormData.saying !== undefined && interestPassionFormData.saying != "" && interestPassionFormData.relax != null && interestPassionFormData.relax !== undefined && interestPassionFormData.relax != "" && interestPassionFormData.hobbies != null && interestPassionFormData.hobbies !== undefined && interestPassionFormData.hobbies != "" && interestPassionFormData.pastime != null && interestPassionFormData.pastime !== undefined && interestPassionFormData.pastime != "" && interestPassionFormData.people != null && interestPassionFormData.people !== undefined && interestPassionFormData.people != "" && interestPassionFormData.lookalike != null && interestPassionFormData.lookalike !== undefined && interestPassionFormData.lookalike != "" && interestPassionFormData.wisdom != null && interestPassionFormData.wisdom !== undefined && interestPassionFormData.wisdom != "" && interestPassionFormData.mantra != null && interestPassionFormData.mantra !== undefined && interestPassionFormData.mantra != "") {
            if (this.interestForm.valid) {
                console.log(this.interestForm.valid);
                this.storage.get("userData").then(function (result) {
                    if (result) {
                        var interestData = {
                            "userId": result.userInfoModel.userId,
                            "ownerId": _this.ownerId,
                            "colour": interestPassionFormData.favcolor,
                            "book": interestPassionFormData.favbook,
                            "favouriteMusicBandSong": interestPassionFormData.favouriteMusicBandSong,
                            "food": interestPassionFormData.favfoods,
                            "spirituality": interestPassionFormData.spirituality,
                            "car": interestPassionFormData.favcar,
                            "placeVisited": interestPassionFormData.visitedplace,
                            "sportsPlayed": interestPassionFormData.sportsplayed,
                            "movie": interestPassionFormData.favmovies,
                            "sayings": interestPassionFormData.saying,
                            "waysToRelax": interestPassionFormData.relax,
                            "hobbies": interestPassionFormData.hobbies,
                            // "pastTimes": interestPassionFormData.pastime,
                            "influencer": interestPassionFormData.people,
                            "lookalike": interestPassionFormData.lookalike,
                            // "band": interestPassionFormData.favband,
                            "firstConcert": interestPassionFormData.favconcert,
                            "favouritePetAnimal": interestPassionFormData.favpet,
                            "wordsOfWisdom": interestPassionFormData.wisdom,
                            "mantra": interestPassionFormData.mantra,
                            "sportsRecord": interestPassionFormData.sportsRecord,
                            "howManyChildren": interestPassionFormData.howManyChildren,
                            "pets": interestPassionFormData.pets,
                            "bestFriends": interestPassionFormData.bestFriends,
                            "whoDoYouMiss": interestPassionFormData.whoDoYouMiss,
                            "worstEnemy": interestPassionFormData.worstEnemy,
                            "aspireToBeLike": interestPassionFormData.aspireToBeLike,
                            "ultimateDinnerPartyGuests": interestPassionFormData.ultimateDinnerPartyGuests,
                            "greatestFear": interestPassionFormData.greatestFear,
                            "greatestAchievement": interestPassionFormData.greatestAchievement,
                            "mostProudOf": interestPassionFormData.mostProudOf,
                            // "degreesOfSeparation": interestPassionFormData.degreesOfSeparation,
                            "bestTimeInLife": interestPassionFormData.bestTimeInLife,
                            "worstTimeInLife": interestPassionFormData.worstTimeInLife,
                            // "strugglesEncountered": interestPassionFormData.strugglesEncountered,
                            "ifYouCouldDoItOverAgain": interestPassionFormData.ifYouCouldDoItOverAgain,
                            "bestAdviseYouReceived": interestPassionFormData.bestAdviseYouReceived,
                            "firstJob": interestPassionFormData.firstJob,
                            "worstJob": interestPassionFormData.worstJob,
                            "bestJob": interestPassionFormData.bestJob,
                            "bestHoliday": interestPassionFormData.bestHoliday,
                            "bestJokeIKnow": interestPassionFormData.bestJokeIKnow,
                            "whoMakesYouLaugh": interestPassionFormData.whoMakesYouLaugh,
                            "whatMakesYouCry": interestPassionFormData.whatMakesYouCry,
                            // "desertedIslandCompanion": interestPassionFormData.desertedIslandCompanion,
                            "whatWouldYouChangeAboutTheWorld": interestPassionFormData.whatWouldYouChangeAboutTheWorld,
                            "ifYouCouldWhatWouldYouComeBackAs": interestPassionFormData.ifYouCouldWhatWouldYouComeBackAs,
                            "bestTheatrePerformance": interestPassionFormData.bestTheatrePerformance,
                        };
                        console.log(interestData);
                        if (!_this.isNotEmpty) {
                            _this.postInterestPassion(interestData, result.token);
                        }
                        else {
                            //console.log("Not logged in");
                            _this.putInterestPassion(interestData);
                        }
                    }
                    else {
                        console.log("Not logged in");
                    }
                });
            }
            else {
                // this.isValid = true;
                console.log("False");
                console.log(this.interestForm.valid);
            }
        }
        else {
            console.log("Pet");
            // if (interestPassionFormData.favfoods != null &&
            //    interestPassionFormData.favfoods !== undefined && 
            //    interestPassionFormData.favfoods != "" && 
            //    interestPassionFormData.favperson != null && 
            //    interestPassionFormData.favperson !== undefined && 
            //    interestPassionFormData.favperson != "" && 
            //    interestPassionFormData.pastime != null && 
            //    interestPassionFormData.pastime !== undefined && 
            //    interestPassionFormData.pastime != "" && 
            //    interestPassionFormData.people != null && 
            //    interestPassionFormData.people !== undefined &&
            //     interestPassionFormData.people != "" && 
            //     interestPassionFormData.relax != null && 
            //     interestPassionFormData.relax !== undefined && 
            //     interestPassionFormData.relax != "" && interestPassionFormData.visitedplacelive != null && interestPassionFormData.visitedplacelive !== undefined && interestPassionFormData.visitedplacelive != "") {
            if (this.interestForm.valid) {
                console.log(this.interestForm.valid);
                this.storage.get("userData").then(function (result) {
                    if (result) {
                        var interestData = {
                            "userId": result.userInfoModel.userId,
                            "ownerId": _this.ownerId,
                            "person": interestPassionFormData.favperson,
                            "food": interestPassionFormData.favfoods,
                            "placeVisited": interestPassionFormData.visitedplacelive,
                            "waysToRelax": interestPassionFormData.relax,
                            // "pastTimes": interestPassionFormData.pastime,
                            "influencer": interestPassionFormData.people,
                            "furBestFriend": interestPassionFormData.furBestFriend,
                            "favouritePark": interestPassionFormData.favouritePark,
                            "owners": interestPassionFormData.owners
                        };
                        console.log(interestData);
                        if (!_this.isNotEmpty) {
                            _this.postInterestPassion(interestData, result.token);
                        }
                        else {
                            //console.log("Not logged in");
                            _this.putInterestPassion(interestData);
                        }
                    }
                });
            }
            else {
                console.log("False");
                console.log(this.interestForm.valid);
            }
        }
    };
    AddInterestPassionPage.prototype.postInterestPassion = function (interestData, token) {
        var _this = this;
        //debugger
        for (var key in this.interestForm.value) {
            if (this.interestForm.value[key] == "" || this.interestForm.value[key] == null) {
                this.blankForm = true;
            }
            else {
                this.blankForm = false;
                break;
            }
        }
        console.log("Blank Form:: ", this.blankForm);
        if (!this.blankForm) {
            this.interestPassionService.postinterestsPassion(interestData)
                .then(function (data) {
                console.log('life story data =', data);
                //loader.dismiss();
                var InterestObject;
                InterestObject = data;
                if (InterestObject.responseCode == '200') {
                    var message = InterestObject.data;
                    _this.sharedTaskProvider.showToastMessage(message);
                    var modal = _this.modalCtrl.create("InterestsPassionsPage", { storyData: interestData, urnType: _this.urnType });
                    modal.present();
                }
            }, function (error) {
                console.log(error);
            });
        }
        else {
            this.sharedTaskProvider.showToastMessage('Please provide atleast one info to save');
        }
        // let loader = this.loadingCtrl.create({
        //   content: 'Please wait...'
        // });
        // loader.present();
        // /*setTimeout(() => {
        //   loader.dismiss();
        //   try { this.closeInterestPassion(); }catch(e){ }
        // }, 5000);*/
        // // //debugger;
        // // try{
        // this.commonServices.submitData(interestData, "api/v1/story/interestPassion", token).subscribe(data => {
        //   var careerJson = JSON.parse(data);
        //   console.log(careerJson);
        //   loader.dismiss();
        //   if (careerJson.success) {
        //     // this.closeInterestPassion();
        //     /*if (this.urnType == "1") {
        //       let modal = this.modalCtrl.create("InterestsPassionsPage", { interestData: interestData });
        //       modal.present();
        //     }else{
        //        //this.closeInterestPassion();
        //     }*/
        //     setTimeout(() => {
        //       this.closeInterestPassion();
        //     }, 1000);
        //   } else {
        //     console.log("Something went wrong.");
        //   }
        // });
    };
    AddInterestPassionPage.prototype.putInterestPassion = function (interestData) {
        var _this = this;
        //debugger
        for (var key in this.interestForm.value) {
            if (this.interestForm.value[key] == "" || this.interestForm.value[key] == null) {
                // this.interestForm.value[key] = null;
                this.blankForm = true;
            }
            else {
                this.blankForm = false;
                break;
            }
        }
        console.log("Blank Form:: ", this.blankForm);
        if (!this.blankForm) {
            console.log("Now call PUT method.");
            interestData['interestId'] = this.InterestData.interestId;
            this.interestPassionService.putinterestsPassion(interestData)
                .then(function (data) {
                console.log('life story data =', data);
                //loader.dismiss();
                var interestObject;
                interestObject = data;
                if (interestObject.responseCode == '200') {
                    // this.closeCompetitionsTraining();
                    var message = interestObject.data;
                    _this.sharedTaskProvider.showToastMessage(message);
                    var modal = _this.modalCtrl.create("InterestsPassionsPage", { storyData: interestData, urnType: _this.urnType });
                    modal.present();
                }
            }, function (error) {
                console.log(error);
            });
        }
        else {
            this.sharedTaskProvider.showToastMessage('Please provide atleast one info to save');
        }
    };
    AddInterestPassionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-interest-passion',template:/*ion-inline-start:"/Users/kanikagupta/Documents/Modurn/modurn 2/src/pages/addstory/add-interest-passion/add-interest-passion.html"*/'<ion-header no-border>\n  <ion-navbar>\n    <ion-buttons left (click)="closeInterestPassion()">\n      <button class="btnColor cross-icn" ion-button icon-only>\n        <ion-icon class="icon icon-cross" item-right></ion-icon>\n        <!--<img src="assets/img/icCross@3x.png" />-->\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="story-outer">\n  <div padding class="story-cont">\n    <h1 class="{{urnType == 1 ? \'human-follow\':\'pet-follow\'}}">{{urnType == 1 ? \'Interests & passions\':\'Interests\'}}</h1>\n  </div>\n  \n  <form padding [formGroup]="interestForm" >\n\n    <ion-list>\n\n      <ion-item *ngIf="urnType == 1">\n        <ion-label stacked>Favourite colour</ion-label>\n        <ion-icon class="icon icon-ic-color {{urnType == 1 ? \'\':\'pet-clr\'}}" item-right></ion-icon>\n        <ion-input type="text" [formControl]="interestForm.controls[\'favcolor\']" spellcheck="true" autoComplete="true" autocorrect="true"></ion-input>\n      </ion-item>\n      <div *ngIf="isValid && urnType == 1">\n        <!-- <div class="error-box" *ngIf="!interestForm.controls[\'favcolor\'].valid && interestForm.controls[\'favcolor\'].hasError(\'required\')"> -->\n        <!-- Favourite colour is required!</div> -->\n        <div class="error-box" *ngIf="interestForm.controls[\'favcolor\'].hasError(\'pattern\')">Please enter valid text.</div>                                                                                                                                \n      </div>\n\n      <ion-item *ngIf="urnType == 1">\n        <ion-label stacked class="desc">Favourite book</ion-label>\n        <ion-icon class="icon icon-icon {{urnType == 1 ? \'\':\'pet-clr\'}}" item-right></ion-icon>\n        <ion-input type="text" [formControl]="interestForm.controls[\'favbook\']" spellcheck="true" autoComplete="true" autocorrect="true"></ion-input>\n      </ion-item>\n      <div *ngIf="isValid && urnType == 1">\n        <!-- <div class="error-box" *ngIf="!interestForm.controls[\'favbook\'].valid && interestForm.controls[\'favbook\'].hasError(\'required\')"> -->\n        <!-- Favourite book is required!</div> -->\n        <div class="error-box" *ngIf="interestForm.controls[\'favbook\'].hasError(\'pattern\')">Please enter valid text.</div>                                                                                                                        \n      </div>\n\n      <ion-item *ngIf="urnType == 1">\n        <ion-label stacked>Favourite Music, Band, Song</ion-label>\n        <ion-icon class="icon icon-ic-music {{urnType == 1 ? \'\':\'pet-clr\'}}" item-right></ion-icon>\n        <ion-input type="text" [formControl]="interestForm.controls[\'favouriteMusicBandSong\']" spellcheck="true" autoComplete="true" autocorrect="true"></ion-input>\n      </ion-item>\n      <div *ngIf="isValid && urnType == 1">\n        <!-- <div class="error-box" *ngIf="!interestForm.controls[\'favmusic\'].valid && interestForm.controls[\'favmusic\'].hasError(\'required\')"> -->\n        <!-- Favourite music is required!</div> -->\n        <div class="error-box" *ngIf="interestForm.controls[\'favouriteMusicBandSong\'].hasError(\'pattern\')">Please enter valid text.</div>                                                                                                                \n      </div>\n\n\n      <!-- <ion-item *ngIf="urnType == 1">\n        <ion-label stacked>Favourite music</ion-label>\n        <ion-icon class="icon icon-ic-music {{urnType == 1 ? \'\':\'pet-clr\'}}" item-right></ion-icon>\n        <ion-input type="text" [formControl]="interestForm.controls[\'favmusic\']"></ion-input>\n      </ion-item>\n      <div *ngIf="isValid && urnType == 1">\n         <div class="error-box" *ngIf="!interestForm.controls[\'favmusic\'].valid && interestForm.controls[\'favmusic\'].hasError(\'required\')"> \n         Favourite music is required!</div> \n        <div class="error-box" *ngIf="interestForm.controls[\'favmusic\'].hasError(\'pattern\')">Please enter valid text.</div>                                                                                                                \n      </div>\n\n      <ion-item *ngIf="urnType == 1">\n        <ion-label stacked class="desc">Favourite band</ion-label>\n        <ion-icon class="icon icon-ic-guitar {{urnType == 1 ? \'\':\'pet-clr\'}}" item-right></ion-icon>\n        <ion-input type="text" [formControl]="interestForm.controls[\'favband\']"></ion-input>\n      </ion-item>\n      <div *ngIf="isValid && urnType == 1">\n        <div class="error-box" *ngIf="!interestForm.controls[\'favband\'].valid && interestForm.controls[\'favband\'].hasError(\'required\')">\n        Favourite band is required!</div>\n        <div class="error-box" *ngIf="interestForm.controls[\'favband\'].hasError(\'pattern\')">Please enter valid text.</div>                                                                                                                \n      </div> -->\n\n      <ion-item *ngIf="urnType == 1">\n        <ion-label stacked>First Concert</ion-label>\n        <ion-icon class="icon icon-ic-concert {{urnType == 1 ? \'\':\'pet-clr\'}}" item-right></ion-icon>\n        <ion-input type="text" [formControl]="interestForm.controls[\'favconcert\']" spellcheck="true" autoComplete="true" autocorrect="true"></ion-input>\n      </ion-item>\n      <div *ngIf="isValid && urnType == 1">\n        <!-- <div class="error-box" *ngIf="!interestForm.controls[\'favconcert\'].valid && interestForm.controls[\'favconcert\'].hasError(\'required\')"> -->\n        <!-- First concert is required!</div> -->\n        <div class="error-box" *ngIf="interestForm.controls[\'favconcert\'].hasError(\'pattern\')">Please enter valid text.</div>                                                                                                        \n      </div>\n\n      <ion-item>\n        <ion-label stacked class="desc">Favourite food</ion-label>\n        <ion-icon class="icon icon-ic-food {{urnType == 1 ? \'\':\'pet-clr\'}}" item-right></ion-icon>\n        <ion-input type="text" [formControl]="interestForm.controls[\'favfoods\']" spellcheck="true" autoComplete="true" autocorrect="true"></ion-input>\n      </ion-item>\n      <div *ngIf="isValid">\n        <!-- <div class="error-box" *ngIf="!interestForm.controls[\'favfoods\'].valid && interestForm.controls[\'favfoods\'].hasError(\'required\')"> -->\n        <!-- Favourite food is required!</div> -->\n        <div class="error-box" *ngIf="interestForm.controls[\'favfoods\'].hasError(\'pattern\')">Please enter valid text.</div>                                                                                                \n      </div>\n\n      <ion-item *ngIf="urnType == 2">\n        <ion-label stacked class="desc">Favourite person</ion-label>\n        <ion-icon class="icon icon-person {{urnType == 1 ? \'\':\'pet-clr\'}}" item-right></ion-icon>\n        <ion-input type="text" [formControl]="interestForm.controls[\'favperson\']" spellcheck="true" autoComplete="true" autocorrect="true"></ion-input>\n      </ion-item>\n      <div *ngIf="isValid && urnType == 2">\n        <!-- <div class="error-box" *ngIf="!interestForm.controls[\'favperson\'].valid && interestForm.controls[\'favperson\'].hasError(\'required\')"> -->\n        <!-- Favourite person is required!</div> -->\n        <div class="error-box" *ngIf="interestForm.controls[\'favperson\'].hasError(\'pattern\')">Please enter valid text.</div>                                                                                        \n      </div>\n\n      <ion-item *ngIf="urnType == 1">\n        <ion-label stacked>Favourite pet or animal</ion-label>\n        <ion-icon class="icon icon-a {{urnType == 1 ? \'\':\'pet-clr\'}}" item-right></ion-icon>\n        <ion-input type="text" [formControl]="interestForm.controls[\'favpet\']" spellcheck="true" autoComplete="true" autocorrect="true"></ion-input>\n      </ion-item>\n      <div *ngIf="isValid && urnType == 1">\n        <!-- <div class="error-box" *ngIf="!interestForm.controls[\'favpet\'].valid && interestForm.controls[\'favpet\'].hasError(\'required\')"> -->\n        <!-- Favourite pet or animal is required!</div> -->\n        <div class="error-box" *ngIf="interestForm.controls[\'favpet\'].hasError(\'pattern\')">Please enter valid text.</div>                                                                                \n      </div>\n\n      <ion-item *ngIf="urnType == 1">\n        <ion-label stacked class="desc">Spirituality</ion-label>\n        <ion-icon class="icon icon-ic-spirituality {{urnType == 1 ? \'\':\'pet-clr\'}}" item-right></ion-icon>\n        <ion-input type="text" [formControl]="interestForm.controls[\'spirituality\']" spellcheck="true" autoComplete="true" autocorrect="true"></ion-input>\n      </ion-item>\n      <div *ngIf="isValid && urnType == 1">\n        <!-- <div class="error-box" *ngIf="!interestForm.controls[\'spirituality\'].valid && interestForm.controls[\'spirituality\'].hasError(\'required\')"> -->\n        <!-- Spirituality is required!</div> -->\n        <div class="error-box" *ngIf="interestForm.controls[\'spirituality\'].hasError(\'pattern\')">Please enter valid text.</div>                                                                        \n      </div>\n\n      <ion-item *ngIf="urnType == 1">\n        <ion-label stacked>Favourite car</ion-label>\n        <ion-icon class="icon icon-car {{urnType == 1 ? \'\':\'pet-clr\'}}" item-right></ion-icon>\n        <ion-input type="text" [formControl]="interestForm.controls[\'favcar\']" spellcheck="true" autoComplete="true" autocorrect="true"></ion-input>\n      </ion-item>\n      <div *ngIf="isValid && urnType == 1">\n        <!-- <div class="error-box" *ngIf="!interestForm.controls[\'favcar\'].valid && interestForm.controls[\'favcar\'].hasError(\'required\')"> -->\n        <!-- Favourite car is required!</div> -->\n        <div class="error-box" *ngIf="interestForm.controls[\'favcar\'].hasError(\'pattern\')">Please enter valid text.</div>                                                                \n      </div>\n\n      <ion-item *ngIf="urnType == 1">\n        <ion-label stacked>Places visited/lived</ion-label>\n        <ion-icon class="icon icon-combined-shape {{urnType == 1 ? \'\':\'pet-clr\'}}" item-right></ion-icon>\n        <ion-input type="text" [formControl]="interestForm.controls[\'visitedplace\']" spellcheck="true" autoComplete="true" autocorrect="true"></ion-input>\n      </ion-item>\n      <div *ngIf="isValid && urnType == 1">\n        <!-- <div class="error-box" *ngIf="!interestForm.controls[\'visitedplace\'].valid && interestForm.controls[\'visitedplace\'].hasError(\'required\')"> -->\n        <!-- Places visited/lived is required!</div> -->\n        <div class="error-box" *ngIf="interestForm.controls[\'visitedplace\'].hasError(\'pattern\')">Please enter valid text.</div>                                                        \n      </div>\n\n      <ion-item *ngIf="urnType == 2">\n        <ion-label stacked>Places visited/lived</ion-label>\n        <ion-icon class="icon icon-combined-shape {{urnType == 1 ? \'\':\'pet-clr\'}}" item-right></ion-icon>\n        <ion-input type="text" [formControl]="interestForm.controls[\'visitedplacelive\']" spellcheck="true" autoComplete="true" autocorrect="true"></ion-input>\n      </ion-item>\n      <div *ngIf="isValid && urnType == 2">\n        <!-- <div class="error-box" *ngIf="!interestForm.controls[\'visitedplacelive\'].valid && interestForm.controls[\'visitedplacelive\'].hasError(\'required\')"> -->\n        <!-- Places visited/lived is required!</div> -->\n        <div class="error-box" *ngIf="interestForm.controls[\'visitedplacelive\'].hasError(\'pattern\')">Please enter valid text.</div>                                                \n      </div>\n\n      <ion-item *ngIf="urnType == 1">\n        <ion-label stacked>Sports played/enjoyed</ion-label>\n        <ion-icon class="icon icon-ic-sports-played {{urnType == 1 ? \'\':\'pet-clr\'}}" item-right></ion-icon>\n        <ion-input type="text" [formControl]="interestForm.controls[\'sportsplayed\']" spellcheck="true" autoComplete="true" autocorrect="true"></ion-input>\n      </ion-item>\n      <div *ngIf="isValid && urnType == 1">\n        <!-- <div class="error-box" *ngIf="!interestForm.controls[\'sportsplayed\'].valid && interestForm.controls[\'sportsplayed\'].hasError(\'required\')"> -->\n        <!-- Sport’s played is required!</div> -->\n        <div class="error-box" *ngIf="interestForm.controls[\'sportsplayed\'].hasError(\'pattern\')">Please enter valid text.</div>                                                \n      </div>\n\n      <ion-item *ngIf="urnType == 1">\n        <ion-label stacked>Favourite movies</ion-label>\n        <ion-icon class="icon icon-ic-videos {{urnType == 1 ? \'\':\'pet-clr\'}}" item-right></ion-icon>\n        <ion-input type="text" [formControl]="interestForm.controls[\'favmovies\']" spellcheck="true" autoComplete="true" autocorrect="true"></ion-input>\n      </ion-item>\n      <div *ngIf="isValid && urnType == 1">\n        <!-- <div class="error-box" *ngIf="!interestForm.controls[\'favmovies\'].valid && interestForm.controls[\'favmovies\'].hasError(\'required\')"> -->\n        <!-- Favourite movies is required!</div> -->\n        <div class="error-box" *ngIf="interestForm.controls[\'favmovies\'].hasError(\'pattern\')">Please enter valid text.</div>                                        \n      </div>\n\n      <ion-item *ngIf="urnType == 1">\n        <ion-label stacked>Sayings</ion-label>\n        <ion-icon class="icon icon-ic-saying {{urnType == 1 ? \'\':\'pet-clr\'}}" item-right></ion-icon>\n        <ion-input type="text" [formControl]="interestForm.controls[\'saying\']" spellcheck="true" autoComplete="true" autocorrect="true"></ion-input>\n      </ion-item>\n      <div *ngIf="isValid && urnType == 1">\n        <!-- <div class="error-box" *ngIf="!interestForm.controls[\'saying\'].valid && interestForm.controls[\'saying\'].hasError(\'required\')"> -->\n        <!-- Sayings is required!</div> -->\n        <div class="error-box" *ngIf="interestForm.controls[\'saying\'].hasError(\'pattern\')">Please enter valid text.</div>                                        \n      </div>\n\n      <ion-item>\n        <ion-label stacked>Happiness means</ion-label>\n        <ion-icon class="icon icon-ic-relax {{urnType == 1 ? \'\':\'pet-clr\'}}" item-right></ion-icon>\n        <ion-input type="text" [formControl]="interestForm.controls[\'relax\']" spellcheck="true" autoComplete="true" autocorrect="true"></ion-input>\n      </ion-item>\n      <div *ngIf="isValid">\n        <!-- <div class="error-box" *ngIf="!interestForm.controls[\'relax\'].valid && interestForm.controls[\'relax\'].hasError(\'required\')"> -->\n          <!-- Happiness means is required!</div> -->\n        <div class="error-box" *ngIf="interestForm.controls[\'relax\'].hasError(\'pattern\')">Please enter valid text.</div>                                \n      </div>\n\n      <ion-item *ngIf="urnType == 1">\n        <ion-label stacked>Hobbies</ion-label>\n        <ion-icon class="icon icon-ic-hobbies {{urnType == 1 ? \'\':\'pet-clr\'}}" item-right></ion-icon>\n        <ion-input type="text" [formControl]="interestForm.controls[\'hobbies\']" spellcheck="true" autoComplete="true" autocorrect="true"></ion-input>\n      </ion-item>\n      <div *ngIf="isValid && urnType == 1">\n        <!-- <div class="error-box" *ngIf="!interestForm.controls[\'hobbies\'].valid && interestForm.controls[\'hobbies\'].hasError(\'required\')"> -->\n        <!-- Hobbies is required!</div> -->\n        <div class="error-box" *ngIf="interestForm.controls[\'hobbies\'].hasError(\'pattern\')">Please enter valid text.</div>                        \n      </div>\n\n      <!-- <ion-item>\n        <ion-label stacked>Past times</ion-label>\n        <ion-icon class="icon icon-ic-past-times {{urnType == 1 ? \'\':\'pet-clr\'}}" item-right></ion-icon>\n        <ion-input type="text" [formControl]="interestForm.controls[\'pastime\']"></ion-input>\n      </ion-item>\n      <div *ngIf="isValid">\n        <div class="error-box" *ngIf="!interestForm.controls[\'pastime\'].valid && interestForm.controls[\'pastime\'].hasError(\'required\')">\n        Past times is required!</div>\n        <div class="error-box" *ngIf="interestForm.controls[\'pastime\'].hasError(\'pattern\')">Please enter valid text.</div>                \n      </div> -->\n\n      <ion-item>\n        <ion-label stacked>People who were an influence</ion-label>\n        <ion-icon class="icon icon-ic-people {{urnType == 1 ? \'\':\'pet-clr\'}}" item-right></ion-icon>\n        <ion-input type="text" [formControl]="interestForm.controls[\'people\']" spellcheck="true" autoComplete="true" autocorrect="true"></ion-input>\n      </ion-item>\n      <div *ngIf="isValid">\n        <!-- <div class="error-box" *ngIf="!interestForm.controls[\'people\'].valid && interestForm.controls[\'people\'].hasError(\'required\')"> -->\n        <!-- People who were an influence is required!</div> -->\n        <div class="error-box" *ngIf="interestForm.controls[\'people\'].hasError(\'pattern\')">Please enter valid text.</div>        \n       </div>\n\n      <ion-item *ngIf="urnType == 1">\n        <ion-label stacked>Lookalike</ion-label>\n        <ion-icon class="icon icon-ic-lookalike {{urnType == 1 ? \'\':\'pet-clr\'}}" item-right></ion-icon>\n        <ion-input type="text" [formControl]="interestForm.controls[\'lookalike\']" spellcheck="true" autoComplete="true" autocorrect="true"></ion-input>\n      </ion-item>\n      <div *ngIf="isValid && urnType == 1">\n        <!-- <div class="error-box" *ngIf="!interestForm.controls[\'lookalike\'].valid && interestForm.controls[\'lookalike\'].hasError(\'required\')"> -->\n        <!-- Lookalike is required!</div> -->\n        <div class="error-box" *ngIf="interestForm.controls[\'lookalike\'].hasError(\'pattern\')">Please enter valid text.</div>        \n      </div>\n\n      <ion-item *ngIf="urnType == 1">\n        <ion-label stacked>Words of wisdom</ion-label>\n        <ion-icon class="icon icon-ic-words-wisdom {{urnType == 1 ? \'\':\'pet-clr\'}}" item-right></ion-icon>\n        <ion-input type="text" [formControl]="interestForm.controls[\'wisdom\']" spellcheck="true" autoComplete="true" autocorrect="true"></ion-input>\n      </ion-item>\n      <div *ngIf="isValid && urnType == 1">\n        <!-- <div class="error-box" *ngIf="!interestForm.controls[\'wisdom\'].valid && interestForm.controls[\'wisdom\'].hasError(\'required\')"> -->\n        <!-- Words of wisdom is required!</div> -->\n        <div class="error-box" *ngIf="interestForm.controls[\'wisdom\'].hasError(\'pattern\')">Please enter valid text.</div>\n      </div>\n\n      <ion-item *ngIf="urnType == 1">\n        <ion-label stacked>Mantra</ion-label>\n        <ion-icon class="icon icon-ic-mantra {{urnType == 1 ? \'\':\'pet-clr\'}}" item-right></ion-icon>\n        <ion-input type="text" [formControl]="interestForm.controls[\'mantra\']" spellcheck="true" autoComplete="true" autocorrect="true"></ion-input>\n      </ion-item>\n      <div *ngIf="isValid && urnType == 1">\n        <!-- <div class="error-box" *ngIf="!interestForm.controls[\'mantra\'].valid && interestForm.controls[\'mantra\'].hasError(\'required\')"> -->\n        <!-- Mantra is required!</div> -->\n        <div class="error-box" *ngIf="interestForm.controls[\'mantra\'].hasError(\'pattern\')">Please enter valid text.</div>\n      </div>\n\n      \n\n      <ion-item *ngIf="urnType == 1">\n        <ion-label stacked class="desc">Sports records & achievements</ion-label>\n        <ion-icon class="icon icon-ic-sports-record" item-right></ion-icon>\n        <ion-input type="text" [formControl]="interestForm.controls[\'sportsRecord\']" spellcheck="true" autoComplete="true" autocorrect="true"></ion-input>\n      </ion-item>\n      <div *ngIf="isValid">\n        <!-- <div class="error-box" *ngIf="!careerForm.controls[\'achiev\'].valid && careerForm.controls[\'achiev\'].hasError(\'required\')"> \n           Sports records & achievements is required!</div> -->\n        <div class="error-box"  *ngIf="interestForm.controls[\'sportsRecord\'].hasError(\'pattern\')">Please enter valid text.</div>\n      </div>   \n\n\n    \n      <ion-item *ngIf="urnType == 1">\n        <ion-label stacked class="desc">How many Children</ion-label>\n        <ion-icon class="icon icon-ic-color {{urnType == 1 ? \'\':\'pet-clr\'}}" item-right></ion-icon>\n        <!-- <ion-icon class="icon icon-ic-sports-record" item-right></ion-icon> -->\n        <ion-input type="text" [formControl]="interestForm.controls[\'howManyChildren\']" spellcheck="true" autoComplete="true" autocorrect="true"></ion-input>\n      </ion-item>\n      <div *ngIf="isValid">\n        <!-- <div class="error-box" *ngIf="!careerForm.controls[\'achiev\'].valid && careerForm.controls[\'achiev\'].hasError(\'required\')"> \n           Sports records & achievements is required!</div> -->\n        <div class="error-box"  *ngIf="interestForm.controls[\'howManyChildren\'].hasError(\'pattern\')">Please enter valid text.</div>\n      </div>   \n\n          \n      <ion-item *ngIf="urnType == 1">\n        <ion-label stacked class="desc">Pets</ion-label>\n        <ion-icon class="icon icon-icon {{urnType == 1 ? \'\':\'pet-clr\'}}" item-right></ion-icon>\n        <!-- <ion-icon class="icon icon-ic-sports-record" item-right></ion-icon> -->\n        <ion-input type="text" [formControl]="interestForm.controls[\'pets\']" spellcheck="true" autoComplete="true" autocorrect="true"></ion-input>\n      </ion-item>\n      <div *ngIf="isValid">\n        <!-- <div class="error-box" *ngIf="!careerForm.controls[\'achiev\'].valid && careerForm.controls[\'achiev\'].hasError(\'required\')"> \n           Sports records & achievements is required!</div> -->\n        <div class="error-box"  *ngIf="interestForm.controls[\'pets\'].hasError(\'pattern\')">Please enter valid text.</div>\n      </div>   \n\n\n      <ion-item *ngIf="urnType == 1">\n        <ion-label stacked class="desc">Best friend/s</ion-label>\n        <ion-icon class="icon icon-ic-music {{urnType == 1 ? \'\':\'pet-clr\'}}" item-right></ion-icon>\n        <!-- <ion-icon class="icon icon-ic-sports-record" item-right></ion-icon> -->\n        <ion-input type="text" [formControl]="interestForm.controls[\'bestFriends\']" spellcheck="true" autoComplete="true" autocorrect="true"></ion-input>\n      </ion-item>\n      <div *ngIf="isValid">\n        <!-- <div class="error-box" *ngIf="!careerForm.controls[\'achiev\'].valid && careerForm.controls[\'achiev\'].hasError(\'required\')"> \n           Sports records & achievements is required!</div> -->\n        <div class="error-box"  *ngIf="interestForm.controls[\'bestFriends\'].hasError(\'pattern\')">Please enter valid text.</div>\n      </div>   \n\n      <ion-item *ngIf="urnType == 1">\n        <ion-label stacked class="desc">Who do you miss</ion-label>\n        <ion-icon class="icon icon-ic-concert {{urnType == 1 ? \'\':\'pet-clr\'}}" item-right></ion-icon>\n        <!-- <ion-icon class="icon icon-ic-sports-record" item-right></ion-icon> -->\n        <ion-input type="text" [formControl]="interestForm.controls[\'whoDoYouMiss\']" spellcheck="true" autoComplete="true" autocorrect="true"></ion-input>\n      </ion-item>\n      <div *ngIf="isValid">\n        <!-- <div class="error-box" *ngIf="!careerForm.controls[\'achiev\'].valid && careerForm.controls[\'achiev\'].hasError(\'required\')"> \n           Sports records & achievements is required!</div> -->\n        <div class="error-box"  *ngIf="interestForm.controls[\'whoDoYouMiss\'].hasError(\'pattern\')">Please enter valid text.</div>\n      </div>   \n\n      <ion-item *ngIf="urnType == 1">\n        <ion-label stacked class="desc">Worst enemy</ion-label>\n        <ion-icon class="icon icon-ic-food {{urnType == 1 ? \'\':\'pet-clr\'}}" item-right></ion-icon>\n        <!-- <ion-icon class="icon icon-ic-sports-record" item-right></ion-icon> -->\n        <ion-input type="text" [formControl]="interestForm.controls[\'worstEnemy\']" spellcheck="true" autoComplete="true" autocorrect="true"></ion-input>\n      </ion-item>\n      <div *ngIf="isValid">\n        <!-- <div class="error-box" *ngIf="!careerForm.controls[\'achiev\'].valid && careerForm.controls[\'achiev\'].hasError(\'required\')"> \n           Sports records & achievements is required!</div> -->\n        <div class="error-box"  *ngIf="interestForm.controls[\'worstEnemy\'].hasError(\'pattern\')">Please enter valid text.</div>\n      </div>   \n\n      <ion-item *ngIf="urnType == 1">\n        <ion-label stacked class="desc">Aspire to be like</ion-label>\n        <ion-icon class="icon icon-person {{urnType == 1 ? \'\':\'pet-clr\'}}" item-right></ion-icon>\n        <!-- <ion-icon class="icon icon-ic-sports-record" item-right></ion-icon> -->\n        <ion-input type="text" [formControl]="interestForm.controls[\'aspireToBeLike\']" spellcheck="true" autoComplete="true" autocorrect="true"></ion-input>\n      </ion-item>\n      <div *ngIf="isValid">\n        <!-- <div class="error-box" *ngIf="!careerForm.controls[\'achiev\'].valid && careerForm.controls[\'achiev\'].hasError(\'required\')"> \n           Sports records & achievements is required!</div> -->\n        <div class="error-box"  *ngIf="interestForm.controls[\'aspireToBeLike\'].hasError(\'pattern\')">Please enter valid text.</div>\n      </div>   \n\n      <ion-item *ngIf="urnType == 1">\n        <ion-label stacked class="desc">Ultimate dinner party guests </ion-label>\n        <ion-icon class="icon icon-a {{urnType == 1 ? \'\':\'pet-clr\'}}" item-right></ion-icon>\n        <!-- <ion-icon class="icon icon-ic-sports-record" item-right></ion-icon> -->\n        <ion-input type="text" [formControl]="interestForm.controls[\'ultimateDinnerPartyGuests\']" spellcheck="true" autoComplete="true" autocorrect="true"></ion-input>\n      </ion-item>\n      <div *ngIf="isValid">\n        <!-- <div class="error-box" *ngIf="!careerForm.controls[\'achiev\'].valid && careerForm.controls[\'achiev\'].hasError(\'required\')"> \n           Sports records & achievements is required!</div> -->\n        <div class="error-box"  *ngIf="interestForm.controls[\'ultimateDinnerPartyGuests\'].hasError(\'pattern\')">Please enter valid text.</div>\n      </div>   \n\n      <ion-item *ngIf="urnType == 1">\n        <ion-label stacked class="desc">Greatest fear</ion-label>\n        <ion-icon class="icon icon-ic-spirituality {{urnType == 1 ? \'\':\'pet-clr\'}}" item-right></ion-icon>\n        <!-- <ion-icon class="icon icon-ic-sports-record" item-right></ion-icon> -->\n        <ion-input type="text" [formControl]="interestForm.controls[\'greatestFear\']" spellcheck="true" autoComplete="true" autocorrect="true"></ion-input>\n      </ion-item>\n      <div *ngIf="isValid">\n        <!-- <div class="error-box" *ngIf="!careerForm.controls[\'achiev\'].valid && careerForm.controls[\'achiev\'].hasError(\'required\')"> \n           Sports records & achievements is required!</div> -->\n        <div class="error-box"  *ngIf="interestForm.controls[\'greatestFear\'].hasError(\'pattern\')">Please enter valid text.</div>\n      </div>   \n\n      <ion-item *ngIf="urnType == 1">\n        <ion-label stacked class="desc">Greatest achievement</ion-label>\n        <ion-icon class="icon icon-car {{urnType == 1 ? \'\':\'pet-clr\'}}" item-right></ion-icon>\n        <!-- <ion-icon class="icon icon-ic-sports-record" item-right></ion-icon> -->\n        <ion-input type="text" [formControl]="interestForm.controls[\'greatestAchievement\']" spellcheck="true" autoComplete="true" autocorrect="true"></ion-input>\n      </ion-item>\n      <div *ngIf="isValid">\n        <!-- <div class="error-box" *ngIf="!careerForm.controls[\'achiev\'].valid && careerForm.controls[\'achiev\'].hasError(\'required\')"> \n           Sports records & achievements is required!</div> -->\n        <div class="error-box"  *ngIf="interestForm.controls[\'greatestAchievement\'].hasError(\'pattern\')">Please enter valid text.</div>\n      </div>   \n\n      <ion-item *ngIf="urnType == 1">\n        <ion-label stacked class="desc">Most proud of</ion-label>\n        <ion-icon class="icon icon-combined-shape {{urnType == 1 ? \'\':\'pet-clr\'}}" item-right></ion-icon>\n        <!-- <ion-icon class="icon icon-ic-sports-record" item-right></ion-icon> -->\n        <ion-input type="text" [formControl]="interestForm.controls[\'mostProudOf\']" spellcheck="true" autoComplete="true" autocorrect="true"></ion-input>\n      </ion-item>\n      <div *ngIf="isValid">\n        <!-- <div class="error-box" *ngIf="!careerForm.controls[\'achiev\'].valid && careerForm.controls[\'achiev\'].hasError(\'required\')"> \n           Sports records & achievements is required!</div> -->\n        <div class="error-box"  *ngIf="interestForm.controls[\'mostProudOf\'].hasError(\'pattern\')">Please enter valid text.</div>\n      </div>   \n\n      <!-- <ion-item *ngIf="urnType == 1">\n        <ion-label stacked class="desc">6 degrees of separation</ion-label>\n        <ion-input type="text" [formControl]="interestForm.controls[\'degreesOfSeparation\']"></ion-input>\n      </ion-item>\n      <div *ngIf="isValid">\n        <div class="error-box"  *ngIf="interestForm.controls[\'degreesOfSeparation\'].hasError(\'pattern\')">Please enter valid text.</div>\n      </div>    -->\n\n      <ion-item *ngIf="urnType == 1">\n        <ion-label stacked class="desc">Best time in life</ion-label>\n        <ion-icon class="icon icon-ic-sports-played {{urnType == 1 ? \'\':\'pet-clr\'}}" item-right></ion-icon>\n        <!-- <ion-icon class="icon icon-ic-sports-record" item-right></ion-icon> -->\n        <ion-input type="text" [formControl]="interestForm.controls[\'bestTimeInLife\']" spellcheck="true" autoComplete="true" autocorrect="true"></ion-input>\n      </ion-item>\n      <div *ngIf="isValid">\n        <!-- <div class="error-box" *ngIf="!careerForm.controls[\'achiev\'].valid && careerForm.controls[\'achiev\'].hasError(\'required\')"> \n           Sports records & achievements is required!</div> -->\n        <div class="error-box"  *ngIf="interestForm.controls[\'bestTimeInLife\'].hasError(\'pattern\')">Please enter valid text.</div>\n      </div>   \n\n      <ion-item *ngIf="urnType == 1">\n        <ion-label stacked class="desc">Worst time in life</ion-label>\n        <ion-icon class="icon icon-ic-videos {{urnType == 1 ? \'\':\'pet-clr\'}}" item-right></ion-icon>\n        <!-- <ion-icon class="icon icon-ic-sports-record" item-right></ion-icon> -->\n        <ion-input type="text" [formControl]="interestForm.controls[\'worstTimeInLife\']" spellcheck="true" autoComplete="true" autocorrect="true"></ion-input>\n      </ion-item>\n      <div *ngIf="isValid">\n        <!-- <div class="error-box" *ngIf="!careerForm.controls[\'achiev\'].valid && careerForm.controls[\'achiev\'].hasError(\'required\')"> \n           Sports records & achievements is required!</div> -->\n        <div class="error-box"  *ngIf="interestForm.controls[\'worstTimeInLife\'].hasError(\'pattern\')">Please enter valid text.</div>\n      </div>   \n\n      <!-- <ion-item *ngIf="urnType == 1">\n        <ion-label stacked class="desc">Struggles encountered</ion-label>\n        <ion-input type="text" [formControl]="interestForm.controls[\'strugglesEncountered\']"></ion-input>\n      </ion-item>\n      <div *ngIf="isValid">\n        <div class="error-box"  *ngIf="interestForm.controls[\'strugglesEncountered\'].hasError(\'pattern\')">Please enter valid text.</div>\n      </div>   -->\n\n      <ion-item *ngIf="urnType == 1">\n        <ion-label stacked class="desc">If you could do it over again</ion-label>\n        <ion-icon class="icon icon-ic-saying {{urnType == 1 ? \'\':\'pet-clr\'}}" item-right></ion-icon>\n        <!-- <ion-icon class="icon icon-ic-sports-record" item-right></ion-icon> -->\n        <ion-input type="text" [formControl]="interestForm.controls[\'ifYouCouldDoItOverAgain\']" spellcheck="true" autoComplete="true" autocorrect="true"></ion-input>\n      </ion-item>\n      <div *ngIf="isValid">\n        <!-- <div class="error-box" *ngIf="!careerForm.controls[\'achiev\'].valid && careerForm.controls[\'achiev\'].hasError(\'required\')"> \n           Sports records & achievements is required!</div> -->\n        <div class="error-box"  *ngIf="interestForm.controls[\'ifYouCouldDoItOverAgain\'].hasError(\'pattern\')">Please enter valid text.</div>\n      </div>  \n\n      <ion-item *ngIf="urnType == 1">\n        <ion-label stacked class="desc">Best advise you received </ion-label>\n        <ion-icon class="icon icon-ic-relax {{urnType == 1 ? \'\':\'pet-clr\'}}" item-right></ion-icon>\n        <!-- <ion-icon class="icon icon-ic-sports-record" item-right></ion-icon> -->\n        <ion-input type="text" [formControl]="interestForm.controls[\'bestAdviseYouReceived\']" spellcheck="true" autoComplete="true" autocorrect="true"></ion-input>\n      </ion-item>\n      <div *ngIf="isValid">\n        <!-- <div class="error-box" *ngIf="!careerForm.controls[\'achiev\'].valid && careerForm.controls[\'achiev\'].hasError(\'required\')"> \n           Sports records & achievements is required!</div> -->\n        <div class="error-box"  *ngIf="interestForm.controls[\'bestAdviseYouReceived\'].hasError(\'pattern\')">Please enter valid text.</div>\n      </div>  \n\n      <ion-item *ngIf="urnType == 1">\n        <ion-label stacked class="desc">First job</ion-label>\n        <ion-icon class="icon icon-ic-hobbies {{urnType == 1 ? \'\':\'pet-clr\'}}" item-right></ion-icon>\n        <!-- <ion-icon class="icon icon-ic-sports-record" item-right></ion-icon> -->\n        <ion-input type="text" [formControl]="interestForm.controls[\'firstJob\']" spellcheck="true" autoComplete="true" autocorrect="true"></ion-input>\n      </ion-item>\n      <div *ngIf="isValid">\n        <!-- <div class="error-box" *ngIf="!careerForm.controls[\'achiev\'].valid && careerForm.controls[\'achiev\'].hasError(\'required\')"> \n           Sports records & achievements is required!</div> -->\n        <div class="error-box"  *ngIf="interestForm.controls[\'firstJob\'].hasError(\'pattern\')">Please enter valid text.</div>\n      </div>  \n\n      <ion-item *ngIf="urnType == 1">\n        <ion-label stacked class="desc">Worst job</ion-label>\n        <ion-icon class="icon icon-ic-people {{urnType == 1 ? \'\':\'pet-clr\'}}" item-right></ion-icon>\n        <!-- <ion-icon class="icon icon-ic-sports-record" item-right></ion-icon> -->\n        <ion-input type="text" [formControl]="interestForm.controls[\'worstJob\']" spellcheck="true" autoComplete="true" autocorrect="true"></ion-input>\n      </ion-item>\n      <div *ngIf="isValid">\n        <!-- <div class="error-box" *ngIf="!careerForm.controls[\'achiev\'].valid && careerForm.controls[\'achiev\'].hasError(\'required\')"> \n           Sports records & achievements is required!</div> -->\n        <div class="error-box"  *ngIf="interestForm.controls[\'worstJob\'].hasError(\'pattern\')">Please enter valid text.</div>\n      </div>  \n\n      <ion-item *ngIf="urnType == 1">\n        <ion-label stacked class="desc">Best job</ion-label>\n        <ion-icon class="icon icon-ic-lookalike {{urnType == 1 ? \'\':\'pet-clr\'}}" item-right></ion-icon>\n        <!-- <ion-icon class="icon icon-ic-sports-record" item-right></ion-icon> -->\n        <ion-input type="text" [formControl]="interestForm.controls[\'bestJob\']" spellcheck="true" autoComplete="true" autocorrect="true"></ion-input>\n      </ion-item>\n      <div *ngIf="isValid">\n        <!-- <div class="error-box" *ngIf="!careerForm.controls[\'achiev\'].valid && careerForm.controls[\'achiev\'].hasError(\'required\')"> \n           Sports records & achievements is required!</div> -->\n        <div class="error-box"  *ngIf="interestForm.controls[\'bestJob\'].hasError(\'pattern\')">Please enter valid text.</div>\n      </div>  \n\n      <ion-item *ngIf="urnType == 1">\n        <ion-label stacked class="desc">Best holiday</ion-label>\n        <ion-icon class="icon icon-ic-words-wisdom {{urnType == 1 ? \'\':\'pet-clr\'}}" item-right></ion-icon>\n        <!-- <ion-icon class="icon icon-ic-sports-record" item-right></ion-icon> -->\n        <ion-input type="text" [formControl]="interestForm.controls[\'bestHoliday\']" spellcheck="true" autoComplete="true" autocorrect="true"></ion-input>\n      </ion-item>\n      <div *ngIf="isValid">\n        <!-- <div class="error-box" *ngIf="!careerForm.controls[\'achiev\'].valid && careerForm.controls[\'achiev\'].hasError(\'required\')"> \n           Sports records & achievements is required!</div> -->\n        <div class="error-box"  *ngIf="interestForm.controls[\'bestHoliday\'].hasError(\'pattern\')">Please enter valid text.</div>\n      </div>  \n\n      <ion-item *ngIf="urnType == 1">\n        <ion-label stacked class="desc">Best joke I know</ion-label>\n        <ion-icon class="icon icon-ic-mantra {{urnType == 1 ? \'\':\'pet-clr\'}}" item-right></ion-icon>\n        <!-- <ion-icon class="icon icon-ic-sports-record" item-right></ion-icon> -->\n        <ion-input type="text" [formControl]="interestForm.controls[\'bestJokeIKnow\']" spellcheck="true" autoComplete="true" autocorrect="true"></ion-input>\n      </ion-item>\n      <div *ngIf="isValid">\n        <!-- <div class="error-box" *ngIf="!careerForm.controls[\'achiev\'].valid && careerForm.controls[\'achiev\'].hasError(\'required\')"> \n           Sports records & achievements is required!</div> -->\n        <div class="error-box"  *ngIf="interestForm.controls[\'bestJokeIKnow\'].hasError(\'pattern\')">Please enter valid text.</div>\n      </div>  \n\n      <ion-item *ngIf="urnType == 1">\n        <ion-label stacked class="desc">Who makes you laugh</ion-label>\n        <ion-icon class="icon icon-ic-sports-record" item-right></ion-icon>\n        <ion-input type="text" [formControl]="interestForm.controls[\'whoMakesYouLaugh\']" spellcheck="true" autoComplete="true" autocorrect="true"></ion-input>\n      </ion-item>\n      <div *ngIf="isValid">\n        <!-- <div class="error-box" *ngIf="!careerForm.controls[\'achiev\'].valid && careerForm.controls[\'achiev\'].hasError(\'required\')"> \n           Sports records & achievements is required!</div> -->\n        <div class="error-box"  *ngIf="interestForm.controls[\'whoMakesYouLaugh\'].hasError(\'pattern\')">Please enter valid text.</div>\n      </div>  \n\n      <ion-item *ngIf="urnType == 1">\n        <ion-label stacked class="desc">What makes you cry</ion-label>\n        <ion-icon class="icon icon-ic-color {{urnType == 1 ? \'\':\'pet-clr\'}}" item-right></ion-icon>\n        <!-- <ion-icon class="icon icon-ic-sports-record" item-right></ion-icon> -->\n        <ion-input type="text" [formControl]="interestForm.controls[\'whatMakesYouCry\']" spellcheck="true" autoComplete="true" autocorrect="true"></ion-input>\n      </ion-item>\n      <div *ngIf="isValid">\n        <!-- <div class="error-box" *ngIf="!careerForm.controls[\'achiev\'].valid && careerForm.controls[\'achiev\'].hasError(\'required\')"> \n           Sports records & achievements is required!</div> -->\n        <div class="error-box"  *ngIf="interestForm.controls[\'whatMakesYouCry\'].hasError(\'pattern\')">Please enter valid text.</div>\n      </div>  \n\n      <!-- <ion-item *ngIf="urnType == 1">\n        <ion-label stacked class="desc">Deserted island companion</ion-label>\n        <ion-input type="text" [formControl]="interestForm.controls[\'desertedIslandCompanion\']"></ion-input>\n      </ion-item>\n      <div *ngIf="isValid">\n        <div class="error-box"  *ngIf="interestForm.controls[\'desertedIslandCompanion\'].hasError(\'pattern\')">Please enter valid text.</div>\n      </div>   -->\n\n      <ion-item *ngIf="urnType == 1">\n        <ion-label stacked class="desc">What would you change about the world</ion-label>\n        <ion-icon class="icon icon-ic-music {{urnType == 1 ? \'\':\'pet-clr\'}}" item-right></ion-icon>\n        <!-- <ion-icon class="icon icon-ic-sports-record" item-right></ion-icon> -->\n        <ion-input type="text" [formControl]="interestForm.controls[\'whatWouldYouChangeAboutTheWorld\']" spellcheck="true" autoComplete="true" autocorrect="true"></ion-input>\n      </ion-item>\n      <div *ngIf="isValid">\n        <!-- <div class="error-box" *ngIf="!careerForm.controls[\'achiev\'].valid && careerForm.controls[\'achiev\'].hasError(\'required\')"> \n           Sports records & achievements is required!</div> -->\n        <div class="error-box"  *ngIf="interestForm.controls[\'whatWouldYouChangeAboutTheWorld\'].hasError(\'pattern\')">Please enter valid text.</div>\n      </div>  \n\n      <ion-item *ngIf="urnType == 1">\n        <ion-label stacked class="desc">If you could who/what would you come back as</ion-label>\n        <ion-icon class="icon icon-icon {{urnType == 1 ? \'\':\'pet-clr\'}}" item-right></ion-icon>\n        <!-- <ion-icon class="icon icon-ic-sports-record" item-right></ion-icon> -->\n        <ion-input type="text" [formControl]="interestForm.controls[\'ifYouCouldWhatWouldYouComeBackAs\']" spellcheck="true" autoComplete="true" autocorrect="true"></ion-input>\n      </ion-item>\n      <div *ngIf="isValid">\n        <!-- <div class="error-box" *ngIf="!careerForm.controls[\'achiev\'].valid && careerForm.controls[\'achiev\'].hasError(\'required\')"> \n           Sports records & achievements is required!</div> -->\n        <div class="error-box"  *ngIf="interestForm.controls[\'ifYouCouldWhatWouldYouComeBackAs\'].hasError(\'pattern\')">Please enter valid text.</div>\n      </div>  \n\n      <ion-item *ngIf="urnType == 1">\n        <ion-label stacked class="desc">Best show/theatre performance</ion-label>\n        <ion-icon class="icon icon-ic-music {{urnType == 1 ? \'\':\'pet-clr\'}}" item-right></ion-icon>\n        <!-- <ion-icon class="icon icon-ic-sports-record" item-right></ion-icon> -->\n        <ion-input type="text" [formControl]="interestForm.controls[\'bestTheatrePerformance\']" spellcheck="true" autoComplete="true" autocorrect="true"></ion-input>\n      </ion-item>\n      <div *ngIf="isValid">\n        <!-- <div class="error-box" *ngIf="!careerForm.controls[\'achiev\'].valid && careerForm.controls[\'achiev\'].hasError(\'required\')"> \n           Sports records & achievements is required!</div> -->\n        <div class="error-box"  *ngIf="interestForm.controls[\'bestTheatrePerformance\'].hasError(\'pattern\')">Please enter valid text.</div>\n      </div>  \n\n      <ion-item *ngIf="urnType == 2">\n        <ion-label stacked>Fur best friend</ion-label>\n        <ion-icon class="icon icon-ic-concert {{urnType == 1 ? \'\':\'pet-clr\'}}" item-right></ion-icon>\n        <!-- <ion-icon class="icon icon-combined-shape {{urnType == 1 ? \'\':\'pet-clr\'}}" item-right></ion-icon> -->\n        <ion-input type="text" [formControl]="interestForm.controls[\'furBestFriend\']" spellcheck="true" autoComplete="true" autocorrect="true"></ion-input>\n      </ion-item>\n      <div *ngIf="isValid && urnType == 2">\n        <!-- <div class="error-box" *ngIf="!interestForm.controls[\'visitedplacelive\'].valid && interestForm.controls[\'visitedplacelive\'].hasError(\'required\')"> -->\n        <!-- Places visited/lived is required!</div> -->\n        <div class="error-box" *ngIf="interestForm.controls[\'furBestFriend\'].hasError(\'pattern\')">Please enter valid text.</div>                                                \n      </div>\n\n      <ion-item *ngIf="urnType == 2">\n        <ion-label stacked>Favourite Park</ion-label>\n        <ion-icon class="icon icon-ic-food {{urnType == 1 ? \'\':\'pet-clr\'}}" item-right></ion-icon>\n        <!-- <ion-icon class="icon icon-combined-shape {{urnType == 1 ? \'\':\'pet-clr\'}}" item-right></ion-icon> -->\n        <ion-input type="text" [formControl]="interestForm.controls[\'favouritePark\']" spellcheck="true" autoComplete="true" autocorrect="true"></ion-input>\n      </ion-item>\n      <div *ngIf="isValid && urnType == 2">\n        <!-- <div class="error-box" *ngIf="!interestForm.controls[\'visitedplacelive\'].valid && interestForm.controls[\'visitedplacelive\'].hasError(\'required\')"> -->\n        <!-- Places visited/lived is required!</div> -->\n        <div class="error-box" *ngIf="interestForm.controls[\'favouritePark\'].hasError(\'pattern\')">Please enter valid text.</div>                                                \n      </div>\n\n      <ion-item *ngIf="urnType == 2">\n        <ion-label stacked>Owners</ion-label>\n        <ion-icon class="icon icon-person {{urnType == 1 ? \'\':\'pet-clr\'}}" item-right></ion-icon>\n        <!-- <ion-icon class="icon icon-combined-shape {{urnType == 1 ? \'\':\'pet-clr\'}}" item-right></ion-icon> -->\n        <ion-input type="text" [formControl]="interestForm.controls[\'owners\']" spellcheck="true" autoComplete="true" autocorrect="true"></ion-input>\n      </ion-item>\n      <div *ngIf="isValid && urnType == 2">\n        <!-- <div class="error-box" *ngIf="!interestForm.controls[\'visitedplacelive\'].valid && interestForm.controls[\'visitedplacelive\'].hasError(\'required\')"> -->\n        <!-- Places visited/lived is required!</div> -->\n        <div class="error-box" *ngIf="interestForm.controls[\'owners\'].hasError(\'pattern\')">Please enter valid text.</div>                                                \n      </div>\n\n      \n\n    </ion-list>\n\n    <button ion-button class="mr-t80 button_color" full color="dark" (click)="addInterestPassion(interestForm.value)">\n        {{isNotEmpty ? \'UPDATE\':\'ADD\'}}\n      </button>\n    \n  </form>\n</ion-content>'/*ion-inline-end:"/Users/kanikagupta/Documents/Modurn/modurn 2/src/pages/addstory/add-interest-passion/add-interest-passion.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_usercommon_services__["a" /* UserCommonServices */],
            __WEBPACK_IMPORTED_MODULE_5__providers_WebServices_LifeStory_InterestnPassionService__["a" /* InterestnPassionService */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_keyboard__["a" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_8__providers_SharedTask_sharedtask__["a" /* SharedTaskProvider */]])
    ], AddInterestPassionPage);
    return AddInterestPassionPage;
}());

//# sourceMappingURL=add-interest-passion.js.map

/***/ })

});
//# sourceMappingURL=33.js.map