webpackJsonp([35],{

/***/ 728:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddFriendsFamilyModule", function() { return AddFriendsFamilyModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_friends_family__ = __webpack_require__(771);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddFriendsFamilyModule = /** @class */ (function () {
    function AddFriendsFamilyModule() {
    }
    AddFriendsFamilyModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__add_friends_family__["a" /* AddFriendsFamilyPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_friends_family__["a" /* AddFriendsFamilyPage */]),
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__add_friends_family__["a" /* AddFriendsFamilyPage */]]
        })
    ], AddFriendsFamilyModule);
    return AddFriendsFamilyModule;
}());

//# sourceMappingURL=add-friends-family.module.js.map

/***/ }),

/***/ 771:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddFriendsFamilyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_camera_camera__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_config_config__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_transfer__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_toast_service_toast_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_usercommon_services__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Utility_Constant__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_http__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_observable_of__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_alert_service_alert_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_keyboard__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_WebServices_LifeStory_InterestnPassionService__ = __webpack_require__(382);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









// import { EMAIL_REGES, TEXT_REGES, WITHOUT_FIRST_REGES, WITHOUT_FIRST_REGES_SPECIAL, NUMBER_REGES } from '../../../providers/constants';







var AddFriendsFamilyPage = /** @class */ (function () {
    function AddFriendsFamilyPage(navCtrl, navParams, viewCtrl, fb, loadingCtrl, cameraProvider, actionsheetCtrl, platform, storage, interestnPassion, transfer, configService, toastCtrl, commonServices, events, keyboard, modalCtrl, http, alertService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.fb = fb;
        this.loadingCtrl = loadingCtrl;
        this.cameraProvider = cameraProvider;
        this.actionsheetCtrl = actionsheetCtrl;
        this.platform = platform;
        this.storage = storage;
        this.interestnPassion = interestnPassion;
        this.transfer = transfer;
        this.configService = configService;
        this.toastCtrl = toastCtrl;
        this.commonServices = commonServices;
        this.events = events;
        this.keyboard = keyboard;
        this.modalCtrl = modalCtrl;
        this.http = http;
        this.alertService = alertService;
        this.userId = '';
        this.url = '';
        this.urnType = 0;
        this.isSubmit = false;
        this.isShow = true;
        this.defaultImage = false;
        this.ownerId = 0;
        this.isValidDate = false;
        this.chosenPicture1 = "";
        this.selected = "";
        this.items = [];
        this.itemIsShown = false;
        this.isautoFill = true;
        this.friendUserId = '';
        this.disableEmail = false;
        this.loader = false;
        this.isEdit = false;
        this.isDisablerole = true;
        this.showemailError = false;
        this.observableSource = function (keyword) {
            console.log(_this.headers);
            _this.url = _this._baseUrl + 'api/v1/profile/searchByUserDetail?userId=' + _this.userId + '&ownerId=' + _this.ownerId + '&userName=' + keyword;
            console.log(keyword.length);
            return _this.http.get(_this.url, { headers: _this.headers })
                .map(function (res) {
                var json = res.json();
                console.log(json.data);
                if (json.data.length > 0) {
                    return json.data;
                }
                else {
                    return [];
                }
            });
        };
        //debugger
        console.log(navParams.data.urnType);
        this.ownerId = navParams.data.data.ownerId;
        this.urnType = navParams.data.data.urnType;
        // alert(this.ownerId);
        this._baseUrl = configService.getApiURI();
        // let EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        this.addFamily = fb.group({
            'name': [null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_9__Utility_Constant__["j" /* WITHOUT_FIRST_REGES_SPECIAL */])]],
            'nickName': [null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_9__Utility_Constant__["g" /* NICKNAME_REGES */])]],
            'email': [null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_9__Utility_Constant__["b" /* EMAIL_REGES */])]],
            'relationship': [null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_9__Utility_Constant__["j" /* WITHOUT_FIRST_REGES_SPECIAL */])]],
            'role': [null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
        });
        // this.addFamily.controls['name'].valueChanges.subscribe(value => {
        //   console.log('addFamily name value : ', value)
        //   if(typeof value == 'string'){
        //     this.getItems(value);
        //   }
        // })
    }
    AddFriendsFamilyPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        if (this.navParams.data.data.isEdit == true && this.navParams.data.data != undefined) {
            this.isEdit = this.navParams.data.data.isEdit;
            this.disableEmail = true;
            this.relationship = this.navParams.data.data.familyData.relationshipId;
            this.addFamily.controls['email'].setValidators(null);
            this.addFamily.controls['name'].setValue(this.navParams.data.data.familyData.name);
            this.addFamily.controls['nickName'].setValue(this.navParams.data.data.familyData.nickName);
            this.addFamily.controls['email'].setValue(this.navParams.data.data.familyData.familyFriendEmailId);
            this.addFamily.controls['relationship'].setValue(this.navParams.data.data.familyData.relationship);
            this.addFamily.controls['role'].setValue(this.navParams.data.data.familyData.roleId);
            if (this.navParams.data.data.familyData.defaultImage != this.navParams.data.data.familyData.defaultMediumImage500) {
                this.chosenPicture1 = this.navParams.data.data.familyData.defaultMediumImage500;
            }
            if (this.navParams.data.data.familyData.roleId == 5) {
                this.isDisablerole = true;
                this.addFamily.controls['email'].setValidators(null);
                this.addFamily.controls['role'].setValidators(null);
            }
            else {
                this.isDisablerole = false;
            }
        }
        console.log('ionViewDidLoad AddFriendsFamilyPage');
        this.storage.get("userData").then(function (result) {
            _this.headers = new __WEBPACK_IMPORTED_MODULE_10__angular_http__["a" /* Headers */]();
            _this.headers.append('Accept', 'application/json');
            _this.headers.append("Authorization", result.token);
            _this.userId = result.userInfoModel.userId;
        });
    };
    AddFriendsFamilyPage.prototype.closeFriendsFamily = function () {
        this.keyboard.close();
        this.navCtrl.pop();
    };
    AddFriendsFamilyPage.prototype.openRelationship = function () {
        var _this = this;
        console.log("Hi openRelationship");
        //RelationshipPage
        var modal = this.modalCtrl.create("RelationshipPage", { relationType: this.urnType });
        modal.onDidDismiss(function (data) {
            console.log(data);
            _this.relationship = data.relationId;
            _this.addFamily.controls['relationship'].setValue(data.relationshipType);
            _this.addFamily.controls['relationship'].markAsTouched();
        });
        modal.present();
    };
    AddFriendsFamilyPage.prototype.addFriendsFamily = function (value) {
        var _this = this;
        if (value.email != '' && value.email != null) {
            // this.form.controls["firstName"].setValidators([Validators.minLength(1), Validators.maxLength(30)]);
            // let EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            this.addFamily.controls['email'].setValidators([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_9__Utility_Constant__["b" /* EMAIL_REGES */])]);
        }
        if (value.nickName == null) {
            value.nickName = '';
        }
        //debugger
        console.log(value);
        this.isSubmit = true;
        // if(this.chosenPicture1 !="" && this.addFamily.valid){
        if (this.addFamily.valid) {
            // var EMAIL_REGEXP = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
            if (!__WEBPACK_IMPORTED_MODULE_9__Utility_Constant__["b" /* EMAIL_REGES */].test(value.email)) {
                console.log("EMAIL_REGEXP  not vlid");
            }
            this.storage.get("userData").then(function (result) {
                if (result) {
                    console.log(result);
                    console.log(result.userInfoModel);
                    var loader_1 = _this.loadingCtrl.create({
                        content: 'Please wait...'
                    });
                    loader_1.present();
                    if (_this.chosenPicture1 != "" && _this.isautoFill == false) {
                        value.relationshipId = _this.relationship;
                        _this.uploadPicture1(_this.chosenPicture1, _this.ownerId, value, _this.isEdit).then(function (response) {
                            loader_1.dismiss();
                            console.log(response);
                            var responceData = JSON.parse("[" + response + "]");
                            console.log(responceData);
                            if (responceData[0].data.responseCode == 202) {
                                _this.alertService.presentAlert('Info', responceData[0].message);
                            }
                            else if (responceData[0].data.responseCode == 201 && _this.navParams.data.data.beaconPaired != false) {
                                _this.alertService.presentAlertWithCallback('Alert!', responceData[0].message).then(function (yes) {
                                    if (yes) {
                                        var parameter = {
                                            "email": value.email
                                        };
                                        _this.sendEmail(parameter);
                                        // this.toastCtrl.create('Email sent successfully');
                                        _this.navCtrl.pop();
                                        //---------------------------------
                                        _this.events.publish(__WEBPACK_IMPORTED_MODULE_9__Utility_Constant__["d" /* KEY_NOTIFF */].TabSelect, __WEBPACK_IMPORTED_MODULE_9__Utility_Constant__["f" /* LifeStoryTab */].FriendsnFamily);
                                    }
                                });
                            }
                            else {
                                _this.navCtrl.pop();
                                //---------------------------------
                                _this.events.publish(__WEBPACK_IMPORTED_MODULE_9__Utility_Constant__["d" /* KEY_NOTIFF */].TabSelect, __WEBPACK_IMPORTED_MODULE_9__Utility_Constant__["f" /* LifeStoryTab */].FriendsnFamily);
                            }
                        }, function (error) {
                            loader_1.dismiss();
                            _this.toastCtrl.create('Profile pic not uploaded');
                            console.log(error);
                        });
                    }
                    else {
                        var data = {
                            "userId": result.userInfoModel.userId, "friendUserId": _this.friendUserId, "ownerId": _this.ownerId, "name": value.name, "nickName": value.nickName, "roleId": value.role, "userEmail": value.email, "relationshipId": _this.relationship,
                            "familyMemberId": 0
                        };
                        //*******************/add condition for update hare
                        var url = '';
                        if (_this.isEdit) {
                            //update url
                            url = 'api/v1/story/updateFriendFamily';
                            data.familyMemberId = _this.navParams.data.data.familyData.familyMemeberId;
                        }
                        else {
                            url = 'api/v1/story/friendFamily';
                        }
                        _this.commonServices.submitFriendsData(data, url, result.token, _this.isEdit).subscribe(function (data) {
                            console.log(data);
                            loader_1.dismiss();
                            data = JSON.parse(data);
                            //Email is already existed as a viewer but name is changed
                            if (data.data.responseCode == 202) {
                                _this.alertService.presentAlert('Info', data.message);
                            }
                            else if (data.data.responseCode == 201 && _this.navParams.data.data.beaconPaired != false) {
                                //Email is already existed as app user but not viewer
                                _this.alertService.presentAlertWithCallback('Alert!', data.message).then(function (yes) {
                                    if (yes) {
                                        var parameter = {
                                            "email": value.email
                                        };
                                        _this.sendEmail(parameter);
                                        // this.toastCtrl.create('Email sent successfully');
                                        _this.navCtrl.pop();
                                        //---------------------------------
                                        _this.events.publish(__WEBPACK_IMPORTED_MODULE_9__Utility_Constant__["d" /* KEY_NOTIFF */].TabSelect, __WEBPACK_IMPORTED_MODULE_9__Utility_Constant__["f" /* LifeStoryTab */].FriendsnFamily);
                                    }
                                });
                            }
                            else {
                                //If register as a new Friend and family user.
                                _this.navCtrl.pop();
                                //---------------------------------
                                _this.events.publish(__WEBPACK_IMPORTED_MODULE_9__Utility_Constant__["d" /* KEY_NOTIFF */].TabSelect, __WEBPACK_IMPORTED_MODULE_9__Utility_Constant__["f" /* LifeStoryTab */].FriendsnFamily);
                            }
                        }, function (error) {
                            console.log(error);
                            loader_1.dismiss();
                            _this.toastCtrl.create(error);
                        });
                    }
                }
            });
        }
    };
    AddFriendsFamilyPage.prototype.getPicture = function (i) {
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
    AddFriendsFamilyPage.prototype.addPicture = function (i) {
        var _this = this;
        if (this.disableEmail) {
        }
        else {
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
        }
    };
    AddFriendsFamilyPage.prototype.takePicture = function (i) {
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
    AddFriendsFamilyPage.prototype.uploadPicture1 = function (chosenPicture, ownerId, data, isEdit) {
        var _this = this;
        //debugger;
        return new Promise(function (resolve, reject) {
            try {
                var fileTransfer_1 = _this.transfer.create();
                _this.storage.get("userData").then(function (result) {
                    if (result) {
                        var options = {
                            fileKey: 'friendPic',
                            fileName: 'profile.jpg',
                            chunkedMode: false,
                            headers: {
                                'Content-Type': undefined,
                                'Authorization': result.token
                            }
                        };
                        // //debugger;
                        var url = '';
                        var params = {
                            userId: result.userInfoModel.userId,
                            ownerId: ownerId,
                            name: data.name,
                            nickName: data.nickName,
                            userEmail: data.email,
                            relationshipId: _this.relationship,
                            roleId: data.roleId,
                            // friendUserId:0,
                            familyFriendId: 0,
                            familyMemberId: 0
                        };
                        if (isEdit) {
                            //update url
                            url = 'api/v1/story/updateFriendFamily';
                            params.familyMemberId = _this.navParams.data.data.familyData.familyMemeberId;
                        }
                        else {
                            url = 'api/v1/story/friendFamily';
                        }
                        options.params = params;
                        console.log(JSON.stringify(options));
                        fileTransfer_1.upload(chosenPicture, _this._baseUrl + url, options)
                            .then(function (data) {
                            resolve(data.response);
                            console.log(data);
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
    AddFriendsFamilyPage.prototype.suggetionSelected = function (item) {
        console.log('suggetionSelected : ', item);
        this.itemIsShown = false;
        this.isautoFill = true;
        this.disableEmail = true;
        this.addFamily.controls['name'].setValue(item.name);
        this.addFamily.controls['email'].setValue(item.email);
        this.addFamily.controls['nickName'].setValue(item.nickName);
        this.chosenPicture1 = item.defaultMediumImage500;
        this.friendUserId = item.userId;
    };
    AddFriendsFamilyPage.prototype.getItems = function (ev) {
        var _this = this;
        console.log(ev);
        console.log(ev.length);
        if (ev.length == 0) {
            this.itemIsShown = false;
        }
        if (ev.length > 0) {
            // this.addFamily.controls['name'].setValue('');
            this.addFamily.controls['email'].setValue('');
            this.addFamily.controls['nickName'].setValue('');
            // this.chosenPicture1 = '';
            this.disableEmail = false;
            this.storage.get("userData").then(function (result) {
                _this.loader = true;
                if (result) {
                    _this.commonServices.getByName(ev, "api/v1/profile/searchByUserDetail", result.token, result.userInfoModel.userId, _this.ownerId).subscribe(function (data) {
                        // loader.dismiss();
                        console.log("++++++++++++++++++++++++");
                        _this.loader = false;
                        data = JSON.parse(data);
                        _this.disableEmail = true;
                        _this.itemIsShown = true;
                        _this.items = data.data;
                        _this.isautoFill = true;
                        _this.isDisablerole = false;
                        if (_this.items == undefined || _this.items.length == 0 || _this.items[0] == '') {
                            _this.itemIsShown = false;
                            _this.isautoFill = false;
                            _this.friendUserId = 0;
                            _this.disableEmail = false;
                            _this.loader = false;
                            _this.isDisablerole = true;
                            _this.addFamily.controls['role'].setValue(5);
                            _this.addFamily.controls['role'].setValidators(null);
                            _this.addFamily.controls['email'].setValue('');
                            _this.addFamily.controls['email'].setValidators(null);
                        }
                        console.log('this.items : ', _this.items);
                        // //debugger;
                    }, function (error) {
                        console.log(error);
                        // loader.dismiss();
                        _this.toastCtrl.create(error);
                    });
                }
            });
        }
    };
    AddFriendsFamilyPage.prototype.sendEmail = function (parameter) {
        var _this = this;
        this.storage.get("userData").then(function (result) {
            var params = {
                'userId': result.userInfoModel.userId,
                'ownerId': _this.ownerId,
                'email': parameter.email
            };
            _this.interestnPassion.sendEmail(params)
                .then(function (data) {
                console.log(data);
                var interestnPassionObject;
                interestnPassionObject = data;
                _this.toastCtrl.create(interestnPassionObject.message);
                _this.toastCtrl.create(data);
            }, function (error) {
                ////debugger;
                console.log(error);
            });
        });
    };
    AddFriendsFamilyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-friends-family',template:/*ion-inline-start:"/Users/kanikagupta/Documents/Modurn/modurn 2/src/pages/addstory/add-friends-family/add-friends-family.html"*/'<ion-header no-border>\n  <ion-navbar>\n\n    <ion-buttons left (click)="closeFriendsFamily()">\n      <button class="btnColor cross-icn" ion-button icon-only>\n        <ion-icon class="icon icon-cross" item-right></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content class="story-outer">\n  <div padding class="story-cont">\n    <h1 class="{{urnType == 1 ? \'human-follow\':\'pet-follow\'}}">{{isEdit?\'Update\':\'Add\'}} family & friends</h1>\n  </div>\n\n  <div class="image-outer" (click)="addPicture(\'1\')">\n    <div *ngIf="chosenPicture1==\'\'" class="img-icon">\n      <ion-icon class="{{urnType == 1 ? \'icon icon-imag\':\'icon icon-imag pet-clr\'}}" item-right></ion-icon>\n      <p>Click to add an image</p>\n    </div>\n    <div *ngIf="chosenPicture1 !=\'\'" style="overflow: hidden;" class="image-outer">\n      <img class="add-img-center" src="{{chosenPicture1}}" alt="">\n    </div>\n  </div>\n\n  <form padding [formGroup]="addFamily">\n    <ion-list>\n\n      <div class="suggetions-upper">\n        <ion-item>\n          <ion-label stacked>Name </ion-label>\n          <ion-input type="text" [disabled]="isEdit" (keyup)="getItems(addFamily.controls[\'name\'].value)" [formControl]="addFamily.controls[\'name\']"></ion-input>\n        </ion-item>\n        <ion-spinner *ngIf="loader" name="dots"></ion-spinner>\n        <ul *ngIf="itemIsShown" style="display:{{itemIsShown?\'\':\'none\'}}" class="suggetions">\n          <li (click)="suggetionSelected(item)" *ngFor="let item of items">{{item.name}}</li>\n        </ul>\n      </div>\n      <div *ngIf="isSubmit">\n        <div class="error-box" *ngIf="!addFamily.controls[\'name\'].valid && addFamily.controls[\'name\'].hasError(\'required\')">\n          Name is required!</div>\n        <div class="error-box" *ngIf="addFamily.controls[\'name\'].hasError(\'pattern\')">Please enter valid name.</div>\n      </div>\n      <ion-item [ngClass]="{\'suggestionClass\': itemIsShown }">\n        <ion-label stacked>Email</ion-label>\n        <ion-input type="email" [disabled]="disableEmail" [formControl]="addFamily.controls[\'email\']"></ion-input>\n      </ion-item>\n      <div *ngIf="isSubmit">\n\n        <div class="error-box" *ngIf="!addFamily.controls[\'email\'].valid && addFamily.controls[\'email\'].hasError(\'required\')">\n          Email is required!</div>\n        <div class="error-box" *ngIf="addFamily.controls[\'email\'].hasError(\'pattern\')">Please enter valid email.</div>\n      </div>\n      <ion-item>\n        <ion-label stacked>Nickname</ion-label>\n        <ion-input type="text" [disabled]="isEdit" [formControl]="addFamily.controls[\'nickName\']"></ion-input>\n      </ion-item>\n      <div *ngIf="isSubmit">\n        <!-- <div class="error-box" *ngIf="!addFamily.controls[\'nickName\'].valid && addFamily.controls[\'nickName\'].hasError(\'required\')">\n          Nickname is required!</div> -->\n        <div class="error-box" *ngIf="addFamily.controls[\'nickName\'].hasError(\'pattern\')">Please enter valid nickname.</div>\n      </div>\n      <div style="position:relative; height:104px">\n        <div class="drop-icon" (click)="openRelationship()">\n          <span class="drop"></span>\n        </div>\n\n        <ion-item>\n          <ion-label stacked>Relationship</ion-label>\n          <ion-input disabled="true" type="text" (click)="openRelationship()" [formControl]="addFamily.controls[\'relationship\']"></ion-input>\n\n        </ion-item>\n        <div *ngIf="isSubmit" class="rel-err">\n          <div class="error-box" *ngIf="!addFamily.controls[\'relationship\'].valid"> Relationship is required!</div>\n        </div>\n      </div>\n      <ion-item style="margin-top: 10px;">\n        <ion-label stacked>Assign role</ion-label>\n        <ion-select [disabled]="isDisablerole" [formControl]="addFamily.controls[\'role\']" class="family-select" item-right>\n          <ion-option value="2">Caretaker</ion-option>\n          <ion-option value="3">Contributor</ion-option>\n        </ion-select>\n\n      </ion-item>\n      <div *ngIf="isSubmit ">\n        <div class="error-box" *ngIf="!addFamily.controls[\'role\'].valid"> Role is required!</div>\n      </div>\n    </ion-list>\n\n    <button ion-button class="mr-t80 button_color" full color="dark" (click)="addFriendsFamily(addFamily.value)">{{isEdit?\'UPDATE\':\'ADD\'}}</button>\n\n  </form>\n\n</ion-content>'/*ion-inline-end:"/Users/kanikagupta/Documents/Modurn/modurn 2/src/pages/addstory/add-friends-family/add-friends-family.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_camera_camera__["a" /* CameraProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_14__providers_WebServices_LifeStory_InterestnPassionService__["a" /* InterestnPassionService */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_5__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_toast_service_toast_service__["a" /* ToastServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_8__providers_usercommon_services__["a" /* UserCommonServices */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_keyboard__["a" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */], __WEBPACK_IMPORTED_MODULE_10__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_12__providers_alert_service_alert_service__["a" /* AlertServiceProvider */]])
    ], AddFriendsFamilyPage);
    return AddFriendsFamilyPage;
}());

//# sourceMappingURL=add-friends-family.js.map

/***/ })

});
//# sourceMappingURL=35.js.map