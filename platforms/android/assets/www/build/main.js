webpackJsonp([41],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserCommonServices; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_config__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_network__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_throw__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_toPromise__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_Rx__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Utility_Constant__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var UserCommonServices = /** @class */ (function () {
    function UserCommonServices(http, configService, network, alertCtrl, storage) {
        this.http = http;
        this.configService = configService;
        this.network = network;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this._baseUrl = configService.getApiURI();
        // this.headers = configService.getHeaders();
    }
    UserCommonServices.prototype.isOnline = function () {
        console.log(this.network.type);
        if (this.network.type != 'none') {
            return true;
        }
        else {
            return false;
        }
    };
    UserCommonServices.prototype.submitPictureData = function (data, type, authToken) {
        // //debugger;
        // console.log(data);
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.headers.append('Accept', 'application/json');
        // this.headers.append("Cache-Control", "no-cache");
        // this.headers.append("Cache-Control", "no-store");
        // this.headers.append("Pragma", "no-cache");
        // this.headers.append('enctype', 'multipart/form-data');
        this.headers.append("Authorization", authToken);
        //debugger
        var form = new FormData();
        form.append("name", data.name);
        form.append("nickName", data.nickName);
        form.append("userId", data.userId);
        form.append("deviceType", data.deviceType);
        form.append("deviceToken", data.deviceToken);
        if (this.isOnline()) {
            console.log(this.headers);
            console.log(data);
            return this.http.post(this._baseUrl + type, form, { headers: this.headers })
                .map(this.extractPostData)
                .catch(this.handleError);
        }
        else {
            var alert_1 = this.alertCtrl.create({
                title: 'No internet connection',
                buttons: ['Okay']
            });
            alert_1.present();
            return;
        }
    };
    UserCommonServices.prototype.submitFriendsData = function (data, type, authToken, isEdit) {
        // //debugger;
        // console.log(data);
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var form = new FormData();
        form.append("userId", data.userId);
        form.append("ownerId", data.ownerId);
        form.append("name", data.name);
        form.append("nickName", data.nickName);
        form.append("userEmail", data.userEmail);
        form.append("relationshipId", data.relationshipId);
        form.append("friendUserId", data.friendUserId ? data.friendUserId : 0);
        form.append("roleId", data.roleId);
        form.append("familyMemberId", data.familyMemberId);
        // if(isEdit){
        this.headers.append('Accept', 'application/json');
        this.headers.append("Authorization", authToken);
        // }else{
        // // this.headers.append('Accept', 'application/json');
        // this.headers.append("Cache-Control", "no-cache");
        // this.headers.append("Cache-Control", "no-store");
        // this.headers.append("Pragma", "no-cache");
        // this.headers.append('enctype', 'multipart/form-data');
        // this.headers.append("Authorization", authToken);
        // this.headers.append('Accept', 'application/json');
        // this.headers.append("Authorization", authToken);
        // }
        if (this.isOnline()) {
            console.log(this.headers);
            console.log(data);
            if (isEdit) {
                return this.http.post(this._baseUrl + type, form, { headers: this.headers })
                    .map(this.extractPostData)
                    .catch(this.handleError);
            }
            else {
                return this.http.post(this._baseUrl + type, form, { headers: this.headers })
                    .map(this.extractPostData)
                    .catch(this.handleError);
            }
        }
        else {
            var alert_2 = this.alertCtrl.create({
                title: 'No internet connection',
                buttons: ['Okay']
            });
            alert_2.present();
            return;
        }
    };
    UserCommonServices.prototype.submitData = function (credentials, token) {
        // console.log(token);
        //debugger;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.headers.append('Accept', 'application/json');
        this.headers.append("Authorization", token);
        console.log("Header: ", this.headers);
        if (this.isOnline()) {
            var urlString = this.configService.apiMethod(__WEBPACK_IMPORTED_MODULE_11__Utility_Constant__["a" /* APIService */].addMediaLink);
            return this.http.post(urlString, credentials, { headers: this.headers })
                .map(this.extractPostData)
                .catch(this.handleError);
        }
        else {
            var alert_3 = this.alertCtrl.create({
                title: 'No internet connection',
                buttons: ['Okay']
            });
            alert_3.present();
            return;
        }
    };
    UserCommonServices.prototype.addUpdateLifestory = function (credentials, token, isUpdate) {
        // console.log(token);
        //debugger;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.headers.append('Accept', 'application/json');
        this.headers.append("Authorization", token);
        console.log("Header: ", this.headers);
        if (this.isOnline()) {
            if (isUpdate) {
                var urlString = this.configService.apiMethod(__WEBPACK_IMPORTED_MODULE_11__Utility_Constant__["a" /* APIService */].updateLifeStory);
                return this.http.post(urlString, credentials, { headers: this.headers })
                    .map(this.extractPostData)
                    .catch(this.handleError);
            }
            else {
                var urlString = this.configService.apiMethod(__WEBPACK_IMPORTED_MODULE_11__Utility_Constant__["a" /* APIService */].LifeStory);
                return this.http.post(urlString, credentials, { headers: this.headers })
                    .map(this.extractPostData)
                    .catch(this.handleError);
            }
        }
        else {
            var alert_4 = this.alertCtrl.create({
                title: 'No internet connection',
                buttons: ['Okay']
            });
            alert_4.present();
            return;
        }
    };
    UserCommonServices.prototype.submitDataExperience = function (credentials, url, token, isUpdate) {
        //debugger;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.headers.append('Accept', 'application/json');
        this.headers.append("Authorization", token);
        // this.headers.append('Access-Control-Allow-Origin', '*');
        // // this.headers.append('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        // this.headers.append('Allow', 'GET, POST, PUT, DELETE');
        console.log("Header: ", this.headers);
        if (this.isOnline()) {
            if (isUpdate) {
                return this.http.post(this._baseUrl + url, credentials, { headers: this.headers })
                    .map(this.extractPostData)
                    .catch(this.handleError);
            }
            else {
                return this.http.post(this._baseUrl + url, credentials, { headers: this.headers })
                    .map(this.extractPostData)
                    .catch(this.handleError);
            }
        }
        else {
            var alert_5 = this.alertCtrl.create({
                title: 'No internet connection',
                buttons: ['Okay']
            });
            alert_5.present();
            return;
        }
    };
    UserCommonServices.prototype.getExperience = function (api, token, accept, id, ownerId, nextPage) {
        // console.log(token);
        // //debugger;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.headers.append('Accept', 'application/json');
        this.headers.append("Authorization", token);
        console.log("Header: ", this.headers);
        if (this.isOnline()) {
            return this.http.get(this._baseUrl + api + '?userId=' + id + '&accept=' + accept + '&ownerId=' + ownerId + '&page=' + nextPage + '&size=' + 6, { headers: this.headers })
                .map(this.extractPostData)
                .catch(this.handleError);
        }
        else {
            var alert_6 = this.alertCtrl.create({
                title: 'No internet connection',
                buttons: ['Okay']
            });
            alert_6.present();
            return;
        }
    };
    UserCommonServices.prototype.putData = function (credentials, type, token) {
        console.log(token);
        // //debugger;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.headers.append('Accept', 'application/json');
        this.headers.append("Authorization", token);
        console.log("Header: ", this.headers);
        if (this.isOnline()) {
            return this.http.put(this._baseUrl + type, credentials, { headers: this.headers })
                .map(this.extractPostData)
                .catch(this.handleError);
        }
        else {
            var alert_7 = this.alertCtrl.create({
                title: 'No internet connection',
                buttons: ['Okay']
            });
            alert_7.present();
            return;
        }
    };
    UserCommonServices.prototype.addUpdateCharityUrl = function (credentials, token) {
        console.log(token);
        // //debugger;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.headers.append('Accept', 'application/json');
        this.headers.append("Authorization", token);
        console.log("Header: ", this.headers);
        if (this.isOnline()) {
            var urlString = this.configService.apiMethod(__WEBPACK_IMPORTED_MODULE_11__Utility_Constant__["a" /* APIService */].updateCharityUrl);
            return this.http.post(urlString, credentials, { headers: this.headers })
                .map(this.extractPostData)
                .catch(this.handleError);
        }
        else {
            var alert_8 = this.alertCtrl.create({
                title: 'No internet connection',
                buttons: ['Okay']
            });
            alert_8.present();
            return;
        }
    };
    UserCommonServices.prototype.getData = function (type, token) {
        // console.log(token);
        // //debugger;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.headers.append('Accept', 'application/json');
        this.headers.append("Authorization", token);
        console.log("Header: ", this.headers);
        if (this.isOnline()) {
            return this.http.get(this._baseUrl + type, { headers: this.headers })
                .map(this.extractPostData)
                .catch(this.handleError);
        }
        else {
            var alert_9 = this.alertCtrl.create({
                title: 'No internet connection',
                buttons: ['Okay']
            });
            alert_9.present();
            return;
        }
    };
    UserCommonServices.prototype.getHelthData = function (type, token, id, ownerId, nextPage) {
        // console.log(token);
        // //debugger;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.headers.append('Accept', 'application/json');
        this.headers.append("Authorization", token);
        console.log("Header: ", this.headers);
        if (this.isOnline()) {
            return this.http.get(this._baseUrl + type + '?userId=' + id + '&ownerId=' + ownerId + '&page=' + nextPage + '&size=' + 6, { headers: this.headers })
                .map(this.extractPostData)
                .catch(this.handleError);
        }
        else {
            var alert_10 = this.alertCtrl.create({
                title: 'No internet connection',
                buttons: ['Okay']
            });
            alert_10.present();
            return;
        }
    };
    UserCommonServices.prototype.getFamilyFrnd = function (api, token, id, ownerId, nextPage) {
        // console.log(token);
        // //debugger;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.headers.append('Accept', 'application/json');
        this.headers.append("Authorization", token);
        console.log("Header: ", this.headers);
        if (this.isOnline()) {
            return this.http.get(this._baseUrl + api + '?userId=' + id + '&ownerId=' + ownerId + '&page=' + nextPage + '&size=' + 6, { headers: this.headers })
                .map(this.extractPostData)
                .catch(this.handleError);
        }
        else {
            var alert_11 = this.alertCtrl.create({
                title: 'No internet connection',
                buttons: ['Okay']
            });
            alert_11.present();
            return;
        }
    };
    UserCommonServices.prototype.getLifeStory = function (type, token, id, nextPage) {
        // console.log(token);
        // //debugger;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.headers.append('Accept', 'application/json');
        this.headers.append("Authorization", token);
        console.log("Header: ", this.headers);
        if (this.isOnline()) {
            return this.http.get(this._baseUrl + 'api/v1/story/lifeStory' + '?userId=' + id + '&page=' + nextPage + '&size=' + 6, { headers: this.headers })
                .map(this.extractPostData)
                .catch(this.handleError);
        }
        else {
            var alert_12 = this.alertCtrl.create({
                title: 'No internet connection',
                buttons: ['Okay']
            });
            alert_12.present();
            return;
        }
    };
    // modified 
    UserCommonServices.prototype.getApiReqeust = function (url) {
        return this.http.get(this._baseUrl + url).do(function (data) { return console.log('All: ' + JSON.stringify(data)); })
            .map(function (res) {
            var result = res;
            return result;
        })
            .catch(this.handleError);
    };
    UserCommonServices.prototype.extractPostData = function (res) {
        // //debugger;
        // console.log(res);
        if (res.status === 200) {
            return res.text() || {};
        }
        else {
            throw new Error(res.text());
        }
    };
    UserCommonServices.prototype.handleError = function (error) {
        // //debugger;
        // In a real world app, you might use a remote logging infrastructure
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || body.message;
            errMsg = "" + err;
            //errMsg = `${error.statusText || ''}`;
        }
        else {
            // errMsg = error._body ? error._body : error.toString();
            errMsg = JSON.parse(error._body.message);
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_10_rxjs_Rx__["Observable"].throw(errMsg);
    };
    UserCommonServices.prototype.getByName = function (value, api, token, id, ownerId) {
        // //debugger;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.headers.append('Accept', 'application/json');
        this.headers.append("Authorization", token);
        console.log("Header: ", this.headers);
        if (this.isOnline()) {
            return this.http.get(this._baseUrl + api + '/?userId=' + id + '&ownerId=' + ownerId + '&userName=' + value, { headers: this.headers })
                .map(this.extractPostData)
                .catch(this.handleError);
        }
        else {
            var alert_13 = this.alertCtrl.create({
                title: 'No internet connection',
                buttons: ['Okay']
            });
            alert_13.present();
            return;
        }
    };
    UserCommonServices = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
    ], UserCommonServices);
    return UserCommonServices;
}());

//# sourceMappingURL=usercommon-services.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LifeStoryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__NetworkRequest_NetworkServices__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Utility_Constant__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_config__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LifeStoryService = /** @class */ (function () {
    function LifeStoryService(networkService, config, storage) {
        this.networkService = networkService;
        this.config = config;
        this.storage = storage;
        this.isLifeStoryModified = false;
    }
    LifeStoryService.prototype.fetLifeStories = function (params) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                var urlString = _this.config.apiMethod(__WEBPACK_IMPORTED_MODULE_2__Utility_Constant__["a" /* APIService */].addInterestPassion);
                urlString = urlString + '?userId=' + params.userId + '&ownerId=' + params.ownerId + '&experienceId=' + params.experienceId;
                _this.networkService.performRequest(__WEBPACK_IMPORTED_MODULE_2__Utility_Constant__["c" /* HTTP_METHOD */].POST, params, urlString, true, false).subscribe(function (data) {
                    resolve(data);
                }, function (error) {
                    console.log(error);
                    reject(error);
                });
            }
            catch (e) {
                return reject(e);
            }
        });
        // return Observable.throw(true);
    };
    LifeStoryService.prototype.fetExperience = function (params) {
        // console.log(params);
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                var urlString = _this.config.apiMethod(__WEBPACK_IMPORTED_MODULE_2__Utility_Constant__["a" /* APIService */].getExperienceDetails);
                urlString = urlString + '?userId=' + params.userId + '&ownerId=' + params.ownerId + '&experienceId=' + params.experienceId;
                console.log(urlString);
                //  //debugger;
                _this.networkService.performRequest(__WEBPACK_IMPORTED_MODULE_2__Utility_Constant__["c" /* HTTP_METHOD */].GET, params, urlString, true, false).subscribe(function (data) {
                    // //debugger;
                    //var userData = JSON.parse(data);
                    resolve(data);
                }, function (error) {
                    console.log(error);
                    reject(error);
                });
            }
            catch (e) {
                return reject(e);
            }
        });
        // return Observable.throw(true);
    };
    LifeStoryService.prototype.getMediadata = function (params) {
        // console.log(params);
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                var urlString = _this.config.apiMethod(__WEBPACK_IMPORTED_MODULE_2__Utility_Constant__["a" /* APIService */].getMediaData);
                urlString = urlString + '?userId=' + params.userid + '&ownerId=' + params.ownerId;
                console.log(urlString);
                //  //debugger;
                _this.networkService.performRequest(__WEBPACK_IMPORTED_MODULE_2__Utility_Constant__["c" /* HTTP_METHOD */].GET, params, urlString, true, false).subscribe(function (data) {
                    // //debugger;
                    //var userData = JSON.parse(data);
                    resolve(data);
                }, function (error) {
                    console.log(error);
                    reject(error);
                });
            }
            catch (e) {
                return reject(e);
            }
        });
        // return Observable.throw(true);
    };
    LifeStoryService.prototype.getLifeStoryData = function (params) {
        // console.log(params);
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                var urlString = _this.config.apiMethod(__WEBPACK_IMPORTED_MODULE_2__Utility_Constant__["a" /* APIService */].LifeStory);
                console.log(urlString);
                urlString = urlString + '?userId=' + params.userid + '&page=' + params.pageNo + '&size=' + 6 + '&paired=' + params.paired;
                //  //debugger;
                _this.networkService.performRequest(__WEBPACK_IMPORTED_MODULE_2__Utility_Constant__["c" /* HTTP_METHOD */].GET, params, urlString, false, true).subscribe(function (data) {
                    // //debugger;
                    //var userData = JSON.parse(data);
                    resolve(data);
                }, function (error) {
                    console.log(error);
                    reject(error);
                });
            }
            catch (e) {
                return reject(e);
            }
        });
        // return Observable.throw(true);
    };
    LifeStoryService.prototype.likeExp = function (params) {
        // console.log(params);
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                var urlString = _this.config.apiMethod(__WEBPACK_IMPORTED_MODULE_2__Utility_Constant__["a" /* APIService */].likeExpUrl);
                urlString = urlString + '?userId=' + params.userId + '&ownerId=' + params.ownerId + '&experienceId=' + params.experienceId;
                console.log(urlString);
                //  //debugger;
                _this.networkService.performRequest(__WEBPACK_IMPORTED_MODULE_2__Utility_Constant__["c" /* HTTP_METHOD */].POST, params, urlString, true, false).subscribe(function (data) {
                    // //debugger;
                    //var userData = JSON.parse(data);
                    resolve(data);
                }, function (error) {
                    console.log(error);
                    reject(error);
                });
            }
            catch (e) {
                return reject(e);
            }
        });
        // return Observable.throw(true);
    };
    LifeStoryService.prototype.deleteExp = function (params) {
        // console.log(params);
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                var urlString = _this.config.apiMethod(__WEBPACK_IMPORTED_MODULE_2__Utility_Constant__["a" /* APIService */].deletExpUrl);
                console.log(urlString);
                //  //debugger;
                _this.networkService.performRequest(__WEBPACK_IMPORTED_MODULE_2__Utility_Constant__["c" /* HTTP_METHOD */].POST, params, urlString, true, false).subscribe(function (data) {
                    // //debugger;
                    //var userData = JSON.parse(data);
                    resolve(data);
                }, function (error) {
                    console.log(error);
                    reject(error);
                });
            }
            catch (e) {
                return reject(e);
            }
        });
        // return Observable.throw(true);
    };
    LifeStoryService.prototype.putCompetitionTraining = function (params) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                var urlString = _this.config.apiMethod(__WEBPACK_IMPORTED_MODULE_2__Utility_Constant__["a" /* APIService */].updateCareerAcademic);
                _this.networkService.performRequest(__WEBPACK_IMPORTED_MODULE_2__Utility_Constant__["c" /* HTTP_METHOD */].POST, params, urlString, false, true).subscribe(function (data) {
                    resolve(data);
                }, function (error) {
                    console.log(error);
                    reject(error);
                });
            }
            catch (e) {
                return reject(e);
            }
        });
    };
    LifeStoryService.prototype.addHelthJourney = function (params) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                var urlString = _this.config.apiMethod(__WEBPACK_IMPORTED_MODULE_2__Utility_Constant__["a" /* APIService */].getHealthJourney);
                _this.networkService.performRequest(__WEBPACK_IMPORTED_MODULE_2__Utility_Constant__["c" /* HTTP_METHOD */].POST, params, urlString, true, true).subscribe(function (data) {
                    resolve(data);
                }, function (error) {
                    console.log(error);
                    reject(error);
                });
            }
            catch (e) {
                return reject(e);
            }
        });
    };
    LifeStoryService.prototype.fetCompetitionnTraining = function (params) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                var urlString = _this.config.apiMethod(__WEBPACK_IMPORTED_MODULE_2__Utility_Constant__["a" /* APIService */].updateCompetitionTraining);
                //  urlString = urlString + '?userId=' + params.userId + '&ownerId=' + params.ownerId + '&competitionId=' + params.competitionId;
                _this.networkService.performRequest(__WEBPACK_IMPORTED_MODULE_2__Utility_Constant__["c" /* HTTP_METHOD */].POST, params, urlString, true, false).subscribe(function (data) {
                    //debugger;
                    resolve(data);
                }, function (error) {
                    console.log(error);
                    reject(error);
                });
            }
            catch (e) {
                return reject(e);
            }
        });
    };
    LifeStoryService.prototype.putHelthJourney = function (params) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                var urlString = _this.config.apiMethod(__WEBPACK_IMPORTED_MODULE_2__Utility_Constant__["a" /* APIService */].updateHealthJourney);
                _this.networkService.performRequest(__WEBPACK_IMPORTED_MODULE_2__Utility_Constant__["c" /* HTTP_METHOD */].POST, params, urlString, true, true).subscribe(function (data) {
                    resolve(data);
                }, function (error) {
                    console.log(error);
                    reject(error);
                });
            }
            catch (e) {
                return reject(e);
            }
        });
    };
    LifeStoryService.prototype.putMediaLink = function (params) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                var urlString = _this.config.apiMethod(__WEBPACK_IMPORTED_MODULE_2__Utility_Constant__["a" /* APIService */].updateMediaLink);
                _this.networkService.performRequest(__WEBPACK_IMPORTED_MODULE_2__Utility_Constant__["c" /* HTTP_METHOD */].POST, params, urlString, true, true).subscribe(function (data) {
                    resolve(data);
                }, function (error) {
                    console.log(error);
                    reject(error);
                });
            }
            catch (e) {
                return reject(e);
            }
        });
    };
    LifeStoryService.prototype.postCompetitionTraining = function (params) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                var urlString = _this.config.apiMethod(__WEBPACK_IMPORTED_MODULE_2__Utility_Constant__["a" /* APIService */].getCareerAcademic);
                _this.networkService.performRequest(__WEBPACK_IMPORTED_MODULE_2__Utility_Constant__["c" /* HTTP_METHOD */].POST, params, urlString, false, true).subscribe(function (data) {
                    resolve(data);
                }, function (error) {
                    console.log(error);
                    reject(error);
                });
            }
            catch (e) {
                return reject(e);
            }
        });
    };
    LifeStoryService.prototype.postCompetitionnTraining = function (params) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                var urlString = _this.config.apiMethod(__WEBPACK_IMPORTED_MODULE_2__Utility_Constant__["a" /* APIService */].addCompetitionnTraining);
                //  urlString = urlString + '?userId=' + params.userId + '&ownerId=' + params.ownerId + '&competitionId=' + params.competitionId;
                _this.networkService.performRequest(__WEBPACK_IMPORTED_MODULE_2__Utility_Constant__["c" /* HTTP_METHOD */].POST, params, urlString, true, false).subscribe(function (data) {
                    //debugger;
                    resolve(data);
                }, function (error) {
                    console.log(error);
                    reject(error);
                });
            }
            catch (e) {
                return reject(e);
            }
        });
    };
    // return Observable.throw(true);
    LifeStoryService.prototype.connectLifeStoryAsViewer = function (params) {
        var _this = this;
        // console.log(params);
        var userId = window.localStorage.getItem('userId');
        params.userId = userId;
        return new Promise(function (resolve, reject) {
            try {
                var urlString = _this.config.apiMethod(__WEBPACK_IMPORTED_MODULE_2__Utility_Constant__["a" /* APIService */].ConnectLifeStoryAsViewer);
                console.log(urlString);
                //  //debugger;
                _this.networkService.performRequest(__WEBPACK_IMPORTED_MODULE_2__Utility_Constant__["c" /* HTTP_METHOD */].POST, params, urlString, true, true).subscribe(function (data) {
                    // //debugger;
                    //var userData = JSON.parse(data);
                    resolve(data);
                }, function (error) {
                    console.log(error);
                    reject(error);
                });
            }
            catch (e) {
                return reject(e);
            }
        });
        // return Observable.throw(true);
    };
    LifeStoryService.prototype.connectBeaconToLifeStory = function (params) {
        var _this = this;
        // console.log(params);
        var userId = window.localStorage.getItem('userId');
        params.userId = userId;
        return new Promise(function (resolve, reject) {
            try {
                var urlString = _this.config.apiMethod(__WEBPACK_IMPORTED_MODULE_2__Utility_Constant__["a" /* APIService */].ConnectLifeStory);
                console.log(urlString);
                //  //debugger;
                _this.networkService.performRequest(__WEBPACK_IMPORTED_MODULE_2__Utility_Constant__["c" /* HTTP_METHOD */].POST, params, urlString, false, true).subscribe(function (data) {
                    // //debugger;
                    //var userData = JSON.parse(data);
                    resolve(data);
                }, function (error) {
                    console.log(error);
                    reject(error);
                });
            }
            catch (e) {
                return reject(e);
            }
        });
        // return Observable.throw(true);
    };
    LifeStoryService.prototype.deleteLifestory = function (params) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                var urlString = _this.config.apiMethod(__WEBPACK_IMPORTED_MODULE_2__Utility_Constant__["a" /* APIService */].deleteLifestory);
                // urlString = urlString + '?userId=' + params.userId + '&ownerId=' + params.ownerId + '&healthId=' + params.healthId;
                _this.networkService.performRequest(__WEBPACK_IMPORTED_MODULE_2__Utility_Constant__["c" /* HTTP_METHOD */].POST, params, urlString, true, true).subscribe(function (result) {
                    resolve(result.data);
                }, function (error) {
                    console.log(error);
                    //debugger;
                    reject(error);
                });
            }
            catch (e) {
                return reject(e);
            }
        });
    };
    LifeStoryService.prototype.fetchLifeStoryById = function (params) {
        var _this = this;
        // console.log(params);
        var userId = window.localStorage.getItem('userId');
        // params.userId = userId;
        return new Promise(function (resolve, reject) {
            try {
                var urlString = _this.config.apiMethod(__WEBPACK_IMPORTED_MODULE_2__Utility_Constant__["a" /* APIService */].GetLifeStoryById);
                urlString = urlString + '?userId=' + userId + '&ownerId=' + params.ownerId;
                console.log(urlString);
                //  //debugger;
                _this.networkService.performRequest(__WEBPACK_IMPORTED_MODULE_2__Utility_Constant__["c" /* HTTP_METHOD */].GET, params, urlString, true, true).subscribe(function (data) {
                    // //debugger;
                    //var userData = JSON.parse(data);
                    resolve(data);
                }, function (error) {
                    console.log(error);
                    reject(error);
                });
            }
            catch (e) {
                return reject(e);
            }
        });
        // return Observable.throw(true);
    };
    LifeStoryService.prototype.getPdfList = function (params) {
        var _this = this;
        //debugger
        console.log("Params:", params);
        return new Promise(function (resolve, reject) {
            try {
                var urlString = _this.config.apiMethod(__WEBPACK_IMPORTED_MODULE_2__Utility_Constant__["a" /* APIService */].getPdfList);
                console.log(urlString);
                urlString = urlString + '?ownerId=' + params.ownerId;
                _this.networkService.performRequest(__WEBPACK_IMPORTED_MODULE_2__Utility_Constant__["c" /* HTTP_METHOD */].GET, params, urlString, false, true).subscribe(function (data) {
                    resolve(data);
                }, function (error) {
                    console.log(error);
                    reject(error);
                });
            }
            catch (e) {
                return reject(e);
            }
        });
    };
    LifeStoryService.prototype.deletePdfFile = function (params) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                var urlString = _this.config.apiMethod(__WEBPACK_IMPORTED_MODULE_2__Utility_Constant__["a" /* APIService */].deletePdfFile);
                console.log(urlString);
                _this.networkService.performRequest(__WEBPACK_IMPORTED_MODULE_2__Utility_Constant__["c" /* HTTP_METHOD */].POST, params, urlString, true, false).subscribe(function (data) {
                    resolve(data);
                }, function (error) {
                    console.log(error);
                    reject(error);
                });
            }
            catch (e) {
                return reject(e);
            }
        });
    };
    LifeStoryService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__NetworkRequest_NetworkServices__["a" /* NetworkServices */],
            __WEBPACK_IMPORTED_MODULE_3__config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], LifeStoryService);
    return LifeStoryService;
}());

//# sourceMappingURL=LifeStoryService.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_local_notifications__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__settings_search_beacon_search_beacon__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auth_forgot_forgot__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_terms_conditions_terms_conditions__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_auth_auth__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__profile_basicinfo_basicinfo__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_toast_service_toast_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_alert_service_alert_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_back_button_back_button__ = __webpack_require__(337);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { HomePage } from '../../lifestory/home/home';








var AuthenticationPage = /** @class */ (function () {
    function AuthenticationPage(navCtrl, navParams, fb, authService, loadingCtrl, storage, cdRef, modalCtrl, toastCtrl, alertService, localNotifications, _backBtn) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fb = fb;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.cdRef = cdRef;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.alertService = alertService;
        this.localNotifications = localNotifications;
        this._backBtn = _backBtn;
        this.type = 'password';
        this.showPass = false;
        this.isLoginError = false;
        this.isTrue = true;
        this.createForm();
    }
    AuthenticationPage.prototype.createForm = function () {
        var EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var PASS_REGEXP = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,25}$";
        this.authForm = this.fb.group({
            'email': [null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(EMAIL_REGEXP)]],
            'password': [null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(1), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(25), this.isTrue ? __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(PASS_REGEXP) : __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(1)]]
        });
    };
    AuthenticationPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this._backBtn.registerAction(function () {
            _this._backBtn.doubleBackToExit();
        }, 101);
    };
    AuthenticationPage.prototype.ionViewWillLeave = function () {
        this._backBtn.deregisterAction();
    };
    AuthenticationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AuthenticationPage');
    };
    AuthenticationPage.prototype.ngAfterViewChecked = function () {
        this.cdRef.detectChanges();
    };
    AuthenticationPage.prototype.submitForm = function (formData, isTrue) {
        var _this = this;
        if (isTrue) {
            //sign up code 
            console.log('Sign UP');
            // Showing loader
            var loader_1 = this.loadingCtrl.create({
                content: 'Please wait...'
            });
            loader_1.present();
            try {
                this.authService.getAuthenticate(formData, "api/v1/auth/signup").subscribe(function (data) {
                    // console.log(data);
                    loader_1.dismiss();
                    var userData = JSON.parse(data);
                    _this.storage.set("userData", userData.data);
                    window.localStorage.setItem('token', userData.data.token);
                    window.localStorage.setItem('userId', userData.data.userInfoModel.userId);
                    console.log(_this.storage.get("userData"));
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__profile_basicinfo_basicinfo__["a" /* BasicinfoPage */]).then(function () {
                        var index = _this.navCtrl.getActive().index;
                        _this.navCtrl.remove(0, index);
                    });
                }, function (error) {
                    console.log(error);
                    loader_1.dismiss();
                    console.log(error);
                    _this.erroMsg = error;
                    _this.isLoginError = true;
                    setTimeout(function () {
                        _this.isLoginError = false;
                    }, 5000);
                    // this.toastCtrl.create(error);
                });
            }
            catch (e) {
                setTimeout(function () {
                    loader_1.dismiss();
                }, 1000);
            }
        }
        else {
            //sign In code 
            console.log('Sign In');
            // Showing loader
            var loader_2 = this.loadingCtrl.create({
                content: 'Please wait...'
            });
            loader_2.present();
            try {
                this.authService.getAuthenticate(formData, "api/v1/auth/signin").subscribe(function (data) {
                    var userData = JSON.parse(data);
                    loader_2.dismiss();
                    _this.storage.set("loginStatus", true);
                    _this.storage.set("userData", userData.data);
                    // //debugger
                    window.localStorage.setItem('token', userData.data.token);
                    window.localStorage.setItem('userId', userData.data.userInfoModel.userId);
                    if (!userData.data.userInfoModel.profileCompleted) {
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__profile_basicinfo_basicinfo__["a" /* BasicinfoPage */]);
                    }
                    else {
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__settings_search_beacon_search_beacon__["a" /* SearchBeaconPage */]);
                    }
                }, function (error) {
                    console.log(error);
                    loader_2.dismiss();
                    // this.toastCtrl.create(error);
                    _this.erroMsg = error;
                    _this.isLoginError = true;
                    setTimeout(function () {
                        _this.isLoginError = false;
                    }, 5000);
                });
            }
            catch (e) {
                setTimeout(function () {
                    loader_2.dismiss();
                }, 1000);
            }
        }
    };
    AuthenticationPage.prototype.reset = function () {
        console.log("from reset");
        this.createForm();
    };
    AuthenticationPage.prototype.forgotPass = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__auth_forgot_forgot__["a" /* ForgotPage */]);
    };
    AuthenticationPage.prototype.showPassword = function () {
        this.showPass = !this.showPass;
        if (this.showPass) {
            this.type = 'text';
        }
        else {
            this.type = 'password';
        }
    };
    AuthenticationPage.prototype.termsConditions = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__common_terms_conditions_terms_conditions__["a" /* TermsConditionsPage */]);
        modal.present();
    };
    AuthenticationPage.prototype.signupLogin = function (isTrue) {
        var _this = this;
        if (isTrue) {
            this.isTrue = isTrue;
            setTimeout(function () { _this.reset(); }, 100);
        }
        else {
            this.isTrue = isTrue;
            setTimeout(function () { _this.reset(); }, 100);
        }
    };
    AuthenticationPage.prototype.showNotifications = function (x, y) {
        // Schedule a single notification
        this.localNotifications.schedule({
            id: 1,
            text: 'Single ILocalNotification'
        });
    };
    AuthenticationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-authentication',template:/*ion-inline-start:"/Users/kanikagupta/Documents/Modurn/modurn 2/src/pages/auth/authentication/authentication.html"*/'<ion-content no-bounce>\n\n  <div class="mar-top">\n\n    <ion-grid>\n      <ion-row>\n        <ion-col col-6 class="btnClass" [ngClass]="{\'activeClass\': isTrue}"><label (click)="signupLogin(true)">Sign up</label>\n          <hr class="authHr" align="center" width="30%">\n        </ion-col>\n        <ion-col col-6 class="btnClass" [ngClass]="{\'activeClass\': !isTrue}"><label (click)="signupLogin(false)">Sign in</label>\n          <hr class="authHr" align="center" width="30%">\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n  <form [formGroup]="authForm" (ngSubmit)="submitForm(authForm.value,isTrue)">\n    <ion-list>\n\n      <ion-item [ngClass]="{\'error-border\':!authForm.controls[\'email\'].valid && authForm.controls[\'email\'].touched}">\n        <ion-label stacked>Email</ion-label>\n        <ion-input type="email" value="" [formControl]="authForm.controls[\'email\']" [ngClass]="{\'error-border\':!authForm.controls[\'email\'].valid && authForm.controls[\'email\'].touched}" spellcheck="true" autoComplete="true" autocorrect="true"></ion-input>\n      </ion-item>\n\n      <div *ngIf="authForm.controls[\'email\'].hasError(\'required\') && authForm.controls[\'email\'].touched" class="error-box"> *Email is required.</div>\n      <div *ngIf="authForm.controls[\'email\'].hasError(\'pattern\') && !authForm.controls[\'email\'].valid" class="error-box"> *Enter valid Email.</div>\n\n      <ion-item [ngClass]="{\'error-border\':!authForm.controls[\'password\'].valid && authForm.controls[\'password\'].touched}">\n        <ion-label stacked>Password</ion-label>\n        <ion-input clearOnEdit="false" type="{{type}}" (keydown.space)="$event.preventDefault()" value="" [ngClass]="{\'error-border\':!authForm.controls[\'password\'].valid && authForm.controls[\'password\'].touched}"\n          [formControl]="authForm.controls[\'password\']"></ion-input>\n        <button *ngIf="!showPass && !authForm.controls[\'password\'].hasError(\'required\')" ion-button clear color="dark" type="button"\n          item-right (click)="showPassword()">Show</button>\n        <button *ngIf="showPass && !authForm.controls[\'password\'].hasError(\'required\')" ion-button clear color="dark" type="button"\n          item-right (click)="showPassword()">Hide</button>\n      </ion-item>\n\n      <div class="error-box" *ngIf="authForm.controls[\'password\'].hasError(\'required\') && authForm.controls[\'password\'].touched">* Password is required!</div>\n      <div class="error-box" *ngIf="authForm.controls[\'password\'].hasError(\'maxlength\') && authForm.controls[\'password\'].touched">* Maximum password length is 25!</div>\n      <!--<div class="error-box" *ngIf="!isTrue && authForm.controls[\'password\'].hasError(\'minlength\') && authForm.controls[\'password\'].touched">* Minimum password length is 8!</div>-->\n      <div class="error-box" *ngIf="isTrue && authForm.controls[\'password\'].hasError(\'pattern\') && !authForm.controls[\'password\'].valid && !authForm.controls[\'password\'].hasError(\'maxlength\')">\n        * Password should be of minimum 8 characters, at least one uppercase letter, one lowercase letter and one number.</div>\n    </ion-list>\n\n    <div class="auth-link-ctn" *ngIf="isTrue">\n      <ion-label text-center>By signing up you agree to our <a (click)="termsConditions()">Terms & Conditions</a></ion-label>\n    </div>\n    <div class="auth-link-ctn" *ngIf="!isTrue">\n     <ion-label text-center> <a text-center (click)="forgotPass()">Forgot Password</a></ion-label>\n    </div>\n\n    <div>\n      <button class="button_color" ion-button type="submit" color="dark" block [disabled]="!authForm.valid">{{isTrue?\'SIGN UP\':\'SIGN IN\'}}</button>\n    </div>\n  </form>\n\n</ion-content>\n\n<div class="login-error" *ngIf="isLoginError">\n  <!--<p>The password you entered is incorrect.<br>Please try again or click Forgot Password.</p>-->\n  <p>{{erroMsg}}</p>\n  <!-- <p [innerHTML]="erroMsg"></p> -->\n</div>'/*ion-inline-end:"/Users/kanikagupta/Documents/Modurn/modurn 2/src/pages/auth/authentication/authentication.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_8__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_10__providers_toast_service_toast_service__["a" /* ToastServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_11__providers_alert_service_alert_service__["a" /* AlertServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_local_notifications__["a" /* LocalNotifications */],
            __WEBPACK_IMPORTED_MODULE_12__providers_back_button_back_button__["a" /* HardwareBackButtonService */]])
    ], AuthenticationPage);
    return AuthenticationPage;
}());

//# sourceMappingURL=authentication.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedTaskProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toast_service_toast_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SharedTaskProvider = /** @class */ (function () {
    function SharedTaskProvider(toastService, storageObj) {
        this.toastService = toastService;
        this.storageObj = storageObj;
    }
    SharedTaskProvider.prototype.setValueForKey = function (value, key) {
        if (value == null || key == null)
            return;
        this.storageObj.set(value, key);
    };
    SharedTaskProvider.prototype.getValueForKey = function (key) {
        if (key == null)
            return;
        this.storageObj.get(key);
    };
    SharedTaskProvider.prototype.showToastMessage = function (message) {
        if (message == null)
            return;
        this.toastService.create(message);
    };
    SharedTaskProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__toast_service_toast_service__["a" /* ToastServiceProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], SharedTaskProvider);
    return SharedTaskProvider;
}());

//# sourceMappingURL=sharedtask.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CameraProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CameraProvider = /** @class */ (function () {
    function CameraProvider(camera) {
        this.camera = camera;
    }
    CameraProvider.prototype.getPictureFromCamera = function () {
        return this.getImage(this.camera.PictureSourceType.CAMERA, true);
    };
    CameraProvider.prototype.getPictureFromPhotoLibrary = function () {
        return this.getImage(this.camera.PictureSourceType.PHOTOLIBRARY, true);
    };
    // This method takes optional parameters to make it more customizable
    CameraProvider.prototype.getImage = function (pictureSourceType, crop, quality, allowEdit, saveToAlbum) {
        if (crop === void 0) { crop = false; }
        if (quality === void 0) { quality = 90; }
        if (allowEdit === void 0) { allowEdit = true; }
        if (saveToAlbum === void 0) { saveToAlbum = true; }
        var options = {
            quality: quality,
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: pictureSourceType,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            allowEdit: allowEdit,
            saveToPhotoAlbum: false
        };
        // If set to crop, restricts the image to a square of 600 by 600
        if (crop) {
            options['targetWidth'] = 900;
            options['targetHeight'] = 900;
        }
        return this.camera.getPicture(options).then(function (imageData) {
            var base64Image = 'data:image/png;base64,' + imageData;
            return base64Image;
        }, function (error) {
            console.log('CAMERA ERROR -> ' + JSON.stringify(error));
        });
    };
    CameraProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__["a" /* Camera */]])
    ], CameraProvider);
    return CameraProvider;
}());

//# sourceMappingURL=camera.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedServices; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__NetworkRequest_NetworkServices__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Utility_Constant__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_config__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { User } from './user';



//import { NetworkServices } from '../'

var SharedServices = /** @class */ (function () {
    //activeUser: User;
    function SharedServices(networkService, config, storage) {
        this.networkService = networkService;
        this.config = config;
        this.storage = storage;
    }
    SharedServices.prototype.fetchRoles = function (params) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                var urlString = _this.config.apiMethod(__WEBPACK_IMPORTED_MODULE_2__Utility_Constant__["a" /* APIService */].RoleDetails);
                //  //debugger;
                _this.networkService.performRequest(__WEBPACK_IMPORTED_MODULE_2__Utility_Constant__["c" /* HTTP_METHOD */].GET, params, urlString, true, true).subscribe(function (result) {
                    // //debugger;
                    // let user = new User(data.data.userInfoModel);
                    // console.log('user ===== = ',user);
                    _this.storage.set(__WEBPACK_IMPORTED_MODULE_2__Utility_Constant__["e" /* KEY_STORAGE */].Roles, result.data);
                    // this.activeUser = data.userInfoModel;
                    //var userData = JSON.parse(data);
                    resolve(result.data);
                }, function (error) {
                    console.log(error);
                    reject(error);
                });
            }
            catch (e) {
                return reject(e);
            }
        });
        // return Observable.throw(true);
    };
    SharedServices.prototype.fetchRelationship = function (params) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                var urlString = _this.config.apiMethod(__WEBPACK_IMPORTED_MODULE_2__Utility_Constant__["a" /* APIService */].RelationDetails);
                //  //debugger;
                _this.networkService.performRequest(__WEBPACK_IMPORTED_MODULE_2__Utility_Constant__["c" /* HTTP_METHOD */].GET, params, urlString, true, true).subscribe(function (result) {
                    //console.log('user ===== = ',data);
                    _this.storage.set(__WEBPACK_IMPORTED_MODULE_2__Utility_Constant__["e" /* KEY_STORAGE */].Relation, result.data);
                    resolve(result.data);
                }, function (error) {
                    console.log(error);
                    reject(error);
                });
            }
            catch (e) {
                return reject(e);
            }
        });
        // return Observable.throw(true);
    };
    SharedServices.prototype.loadMoreImages = function (params) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                var urlString = _this.config.apiMethod(__WEBPACK_IMPORTED_MODULE_2__Utility_Constant__["a" /* APIService */].loadMoreImageUrl);
                // let urlString = this.config.apiMethod(Constant.APIService. getHealthJourney);
                urlString = urlString + '?userId=' + params.userid + '&ownerId=' + params.ownerId + '&page=' + params.page + '&size=' + params.size;
                //  //debugger;
                _this.networkService.performRequest(__WEBPACK_IMPORTED_MODULE_2__Utility_Constant__["c" /* HTTP_METHOD */].GET, params, urlString, true, true).subscribe(function (result) {
                    //console.log('user ===== = ',data);
                    _this.storage.set(__WEBPACK_IMPORTED_MODULE_2__Utility_Constant__["e" /* KEY_STORAGE */].Relation, result.data);
                    resolve(result.data);
                }, function (error) {
                    console.log(error);
                    reject(error);
                });
            }
            catch (e) {
                return reject(e);
            }
        });
        // return Observable.throw(true);
    };
    SharedServices.prototype.uploadImage = function (imageToBeUpload, params) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            //debugger;
            var urlStrings = _this.config.apiMethod(__WEBPACK_IMPORTED_MODULE_2__Utility_Constant__["a" /* APIService */].UploadLifeStoryPic);
            _this.networkService.uploadImage(imageToBeUpload, params, urlStrings).then(function (data) {
                //loader.dismiss();
                // this.toastCtrl.create('Profile pic is uploaded');
                //this.navCtrl.setRoot(HomePage);
                //this.alertService.presentCongratsAlert('<span>A life story for "' + this.storyData.ownerName + '" has been created. Lets add some experiences and what makes you unique<span>').then((yes) => {
                // if (yes) { // this.toastCtrl.create('Created');
                // }
                resolve(data);
            }, function (error) {
                reject(error);
            });
        });
    };
    SharedServices.prototype.uploadImageTask = function (imageToBeUpload, params, urlString) {
        var _this = this;
        var userId = window.localStorage.getItem('userId');
        params.userId = userId;
        // params.deviceToken = 
        return new Promise(function (resolve, reject) {
            //debugger;
            _this.networkService.uploadImage(imageToBeUpload, params, urlString).then(function (data) {
                //loader.dismiss();
                // this.toastCtrl.create('Profile pic is uploaded');
                //this.navCtrl.setRoot(HomePage);
                //this.alertService.presentCongratsAlert('<span>A life story for "' + this.storyData.ownerName + '" has been created. Lets add some experiences and what makes you unique<span>').then((yes) => {
                // if (yes) { // this.toastCtrl.create('Created');
                // }
                resolve(data);
            }, function (error) {
                reject(error);
            });
        });
    };
    SharedServices.prototype.logOut = function (params) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                var urlString = _this.config.apiMethod(__WEBPACK_IMPORTED_MODULE_2__Utility_Constant__["a" /* APIService */].logOut);
                _this.networkService.performRequest(__WEBPACK_IMPORTED_MODULE_2__Utility_Constant__["c" /* HTTP_METHOD */].POST, params, urlString).subscribe(function (data) {
                    resolve(data);
                }, function (error) {
                    console.log(error);
                    reject(error);
                });
            }
            catch (e) {
                return reject(e);
            }
        });
    };
    SharedServices = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__NetworkRequest_NetworkServices__["a" /* NetworkServices */], __WEBPACK_IMPORTED_MODULE_3__config_config__["a" /* ConfigProvider */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], SharedServices);
    return SharedServices;
}());

//# sourceMappingURL=SharedServices.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LifeStoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_in_app_browser__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_photo_viewer__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_WebServices_LifeStory_LifeStoryService__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Utility_Constant__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_social_sharing__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_config_config__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_alert_service_alert_service__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var LifeStoryPage = /** @class */ (function () {
    function LifeStoryPage(navCtrl, navParams, modalCtrl, photoViewer, inAppBrowser, lifeStoryService, events, platform, socialSharing, config, storage, alertService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.photoViewer = photoViewer;
        this.inAppBrowser = inAppBrowser;
        this.lifeStoryService = lifeStoryService;
        this.events = events;
        this.platform = platform;
        this.socialSharing = socialSharing;
        this.config = config;
        this.storage = storage;
        this.alertService = alertService;
        this.tab1Root = "ExperiencePage";
        this.tab2Root = "MediaPage";
        this.tab3Root = "ProfilePage";
        this.tab4Root = "FamilynFriendsPage";
        this.showHeaderContent = false;
        this.tabs = "exptabs";
        this.subtabs = "livetabs";
        this.isAddStory = true;
        //debugger;
        this.lifeStoryData = this.navParams.get('lifeData');
        this.showHeaderContent = false;
        this.ownerName = this.lifeStoryData.ownerName;
        console.log("page-life-story LifeStoryData: ", this.lifeStoryData);
    }
    LifeStoryPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.tabParam = { tab: this.tabRef };
        setTimeout(function () {
            _this.showHeaderContent = true;
        }, 500);
        this.initializeBackButtonCustomHandler();
    };
    LifeStoryPage.prototype.ionViewCanEnter = function () {
        if (localStorage.getItem("userId")) {
            return true;
        }
        else {
            return false;
        }
    };
    LifeStoryPage.prototype.ionViewWillLeave = function () {
        this.unregisterBackButtonAction && this.unregisterBackButtonAction();
    };
    LifeStoryPage.prototype.initializeBackButtonCustomHandler = function () {
        var _this = this;
        this.unregisterBackButtonAction = this.platform.registerBackButtonAction(function () {
            console.log("backbutton!");
            _this.navCtrl.setRoot('HomePage');
        });
    };
    LifeStoryPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad life-story');
        this.events.subscribe(__WEBPACK_IMPORTED_MODULE_5__Utility_Constant__["d" /* KEY_NOTIFF */].TabSelect, function (tabToSelect) {
            try {
                _this.lifeStoryAddStoryModal.dismiss();
            }
            catch (e) {
            }
            //this.lifeStoryAddStoryModal.dismiss();
            _this.tabRef.select(tabToSelect);
            _this.events.publish(__WEBPACK_IMPORTED_MODULE_5__Utility_Constant__["d" /* KEY_NOTIFF */].LifeStoryUpdate);
        });
        if (this.lifeStoryData.roleId == 4) {
            this.isAddStory = false;
        }
    };
    LifeStoryPage.prototype.ionViewWillUnload = function () {
        this.events.unsubscribe(__WEBPACK_IMPORTED_MODULE_5__Utility_Constant__["d" /* KEY_NOTIFF */].TabSelect);
    };
    LifeStoryPage.prototype.openExperienceDetails = function (event, item, lifeStatus) {
        this.navCtrl.push('ExperienceDetailsPage', {
            item: item,
            lifeStatus: lifeStatus
        });
    };
    LifeStoryPage.prototype.addStories = function (ownerId, urnType, roleId, beaconPaired) {
        this.lifeStoryAddStoryModal = this.modalCtrl.create("AddStoryPage", { ownerId: ownerId, urnType: urnType, roleId: roleId, beaconPaired: beaconPaired, ownerName: this.ownerName });
        this.lifeStoryAddStoryModal.present();
    };
    // showThisLink(link) {
    //   const browser = this.iab.create('https://ionicframework.com/');
    //   // browser.executeScript(...);
    //   // browser.insertCSS(...);
    //   // browser.close();
    // }
    LifeStoryPage.prototype.showGallery = function (images) {
        // this.navCtrl.push(GalleryPage, {data: images});
        // let modal = this.modalCtrl.create(GalleryPage, {data: images});
        // modal.present();
        // console.log(images);
    };
    LifeStoryPage.prototype.checkUpdate = function () {
        var selectedTab = this.tabRef.getSelected();
        //alert('........4');
    };
    LifeStoryPage.prototype.shareStory = function () {
        var _this = this;
        var iosStoreUrl = 'https://itunes.apple.com/us/app/modurn/id1267728410?ls=1&mt=8';
        var androidStoreUrl = 'https://play.google.com/store/apps/details?id=com.modurn';
        if (this.lifeStoryData.beaconPaired) {
            this.storage.get("userData").then(function (result) {
                if (result) {
                    var urlString = _this.config.shareUrl() + "deeplinking/index.html?lifestoryId=" + _this.lifeStoryData.ownerId;
                    // if(this.lifeStoryData.ownerName){
                    var createrName = _this.lifeStoryData.creatorName ? _this.lifeStoryData.creatorName : result.userInfoModel.userName;
                    console.log("Creater Name: ", createrName);
                    // }
                    // this code is to use the social sharing plugin
                    // old message
                    // var message = "Hi " + " \n\nYou have been invited to be added as a Viewer for "+ this.lifeStoryData.ownerName +  " lifestory by " + result.userInfoModel.userName + "\n\n"+urlString+"\n\n--\nRegards\nTeam Modurn";
                    // New Message
                    var message = "Hello, you're invited with warmth and enthusiasm to view and celebrate the life story of " + _this.lifeStoryData.ownerName + " created by " + createrName + "\n\nStep 1:  You will need to download the FREE modUrn App and sign up for a Free account at the Apple/Google Play store. The link to the App is at the very bottom of this message.\n\nStep 2: Once the App is downloaded press on the link directly below to view the life story.\n\n " + urlString + "\n\n We hope that you will enjoy getting to know " + _this.lifeStoryData.ownerName + " that little bit better and thank you for being an important part of the journey. " + "\n\n\nLinks to App downloads: " + "\n\niOS- " + iosStoreUrl + "\n\nAndroid- " + androidStoreUrl + "\n\nBest Regards,\nTeam modUrn" + "\n\n“My life is my message”   Gandhi";
                    // message, subject, file, url
                    //this.socialSharing.share(this.lifeStoryData.ownerName + " want to share his life story with you", "modUrn LifeStory", this.lifeStoryData.defaultThumbImage200,urlString)
                    // Old message
                    _this.socialSharing.share(message, "Invitation to Join a Life story", null, null)
                        .then(function () {
                        // Success
                    })
                        .catch(function () {
                    });
                }
                else {
                    console.log("else result");
                }
            });
        }
        else {
            //Email is already existed as app user but not viewer
            var message = "";
            this.alertService.presentAlertWithCallback('Alert!', 'Hello! To share or invite your family and friends to this life story please select YES below or contact your local supplier to view our memento or modUrn range. Thank you.').then(function (yes) {
                if (yes) {
                    _this.inAppBrowserOpen(__WEBPACK_IMPORTED_MODULE_5__Utility_Constant__["k" /* websiteUrl */]);
                }
            });
        }
    };
    LifeStoryPage.prototype.inAppBrowserOpen = function (link) {
        //debugger
        console.log(link);
        try {
            var browser = this.inAppBrowser.create(link, '_blank', 'location=yes');
            console.log("IN App Browser Object: ", this.inAppBrowser.create(link, '_blank', 'location=yes'));
        }
        catch (e) {
            console.log('Invalid Url');
            this.alertService.presentAlert('Info', 'Invalid Url');
        }
    };
    LifeStoryPage.prototype.goBack = function () {
        this.navCtrl.setRoot('HomePage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('myTabs'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["s" /* Tabs */])
    ], LifeStoryPage.prototype, "tabRef", void 0);
    LifeStoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-life-story',template:/*ion-inline-start:"/Users/kanikagupta/Documents/Modurn/modurn 2/src/pages/lifestory/life-story/life-story.html"*/'<ion-header no-border>\n  <ion-navbar hideBackButton="true">\n\n    <ion-title text-center class="life-title">\n      <span class="left-icon" tappable (click)="goBack();">\n        <ion-icon class="back-button-icon"></ion-icon>\n      </span>Life stories</ion-title>\n    <ion-buttons right *ngIf="lifeStoryData.roleId != 4" (click)="shareStory()">\n      <button class="btnColor" ion-button icon-only>\n        <ion-icon class="icon icon-share"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons right class="mar-header-icon" *ngIf="isAddStory">\n      <button class="btnColor" ion-button icon-only (click)="addStories(lifeStoryData.ownerId, lifeStoryData.urnType, lifeStoryData.roleId, lifeStoryData.beaconPaired)">\n        <ion-icon class="icon icon-ic-plus-add-top"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<!-- <ion-header no-border>\n  <ion-navbar>\n    <ion-title text-center class="life-title">Life stories</ion-title>\n\n    \n    <ion-buttons right *ngIf="lifeStoryData.roleId != 4" (click)="shareStory()">\n        <button class="btnColor" ion-button icon-only>\n          <ion-icon class="icon icon-share"></ion-icon>\n        </button>\n      </ion-buttons>\n    <ion-buttons right class="mar-header-icon" *ngIf="isAddStory">\n      <button class="btnColor" ion-button icon-only (click)="addStories(lifeStoryData.ownerId, lifeStoryData.urnType, lifeStoryData.roleId, lifeStoryData.beaconPaired)">\n        <ion-icon class="icon icon-ic-plus-add-top"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header> -->\n\n<ion-content>\n  <ion-grid class="life-story-content" *ngIf="showHeaderContent == true">\n    <ion-row>\n      <ion-col col-3 class="pad-0">\n        <img src="{{lifeStoryData.defaultThumbImage200?lifeStoryData.defaultThumbImage200:\'assets/img/defaultHuman.png\'}}" class="life-img"\n        />\n      </ion-col>\n\n      <ion-col col-9 class="life-card">\n        <h2>{{lifeStoryData.ownerName}} {{(lifeStoryData.ownerNickName==null || lifeStoryData.ownerNickName=="" )?\'\':\'(\'+lifeStoryData.ownerNickName+\')\'}}\n        </h2>\n        <ion-icon *ngIf="lifeStoryData.urnType == 2" class="icon icon-pet-icon" item-right></ion-icon>\n        <p>\n          {{lifeStoryData.role}}\n          <span *ngIf="lifeStoryData.roleId != 4">|</span>\n          <span *ngIf="lifeStoryData.roleId != 4">{{lifeStoryData.relationShip}}</span>\n        </p>\n        <p *ngIf="lifeStoryData.urnType == 2">\n          {{lifeStoryData.typeOfPet}} | {{lifeStoryData.breed}}\n        </p>\n        <p *ngIf="lifeStoryData.dob==null && lifeStoryData.dod==null && lifeStoryData.placeOfBirth!=null">Born in {{lifeStoryData.placeOfBirth}}</p>\n        <p *ngIf="lifeStoryData.dob !=null && lifeStoryData.dod !=null">{{lifeStoryData.dob}} - {{lifeStoryData.dod}}</p>\n        <p *ngIf="lifeStoryData.dob !=null && lifeStoryData.dod==null">Born on {{lifeStoryData.dob}}\n          <span *ngIf="lifeStoryData.placeOfBirth != null">in {{lifeStoryData.placeOfBirth}}</span>\n        </p>\n        <p *ngIf="lifeStoryData.dob ==null && lifeStoryData.dod !=null">Died on {{lifeStoryData.dod}} in {{lifeStoryData.currentLocation}}</p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <div *ngIf="lifeStoryData.urnType == 1">\n    <ion-tabs #myTabs class="tabs-custom" [ngClass]="{petColr: lifeStoryData.urnType == \'2\'}">\n      <ion-tab *ngIf="lifeStoryData.roleId != \'\'" [root]="tab1Root" [rootParams]="lifeStoryData" tabTitle="Experiences" tabsHideOnSubPages="true"></ion-tab>\n      <ion-tab *ngIf="lifeStoryData.roleId != \'\'" [root]="tab2Root" [rootParams]="lifeStoryData" tabTitle="Media" tabsHideOnSubPages="true"></ion-tab>\n      <ion-tab *ngIf="lifeStoryData.roleId != 4" [root]="tab3Root" [rootParams]="lifeStoryData" tabTitle="Profile" tabsHideOnSubPages="true"></ion-tab>\n      <ion-tab *ngIf="lifeStoryData.roleId != 4" [root]="tab4Root" [rootParams]="lifeStoryData" tabTitle="Family & Friends" tabsHideOnSubPages="true"></ion-tab>\n    </ion-tabs>\n  </div>\n\n  <div *ngIf="lifeStoryData.urnType == 2">\n    <ion-tabs #myTabs class="tabs-custom" [ngClass]="{petColr: lifeStoryData.urnType == \'2\'}">\n      <ion-tab *ngIf="lifeStoryData.roleId != \'\'" [root]="tab1Root" [rootParams]="lifeStoryData" tabTitle="Experiences" tabsHideOnSubPages="true"></ion-tab>\n      <ion-tab *ngIf="lifeStoryData.roleId != \'\'" [root]="tab2Root" [rootParams]="lifeStoryData" tabTitle="Media" tabsHideOnSubPages="true"></ion-tab>\n      <ion-tab *ngIf="lifeStoryData.roleId != \'\'" [root]="tab3Root" [rootParams]="lifeStoryData" tabTitle="Profile" tabsHideOnSubPages="true"></ion-tab>\n      <ion-tab *ngIf="lifeStoryData.roleId != 4" [root]="tab4Root" [rootParams]="lifeStoryData" tabTitle="Family & Friends" tabsHideOnSubPages="true"></ion-tab>\n    </ion-tabs>\n  </div>\n\n</ion-content>'/*ion-inline-end:"/Users/kanikagupta/Documents/Modurn/modurn 2/src/pages/lifestory/life-story/life-story.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_photo_viewer__["a" /* PhotoViewer */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_4__providers_WebServices_LifeStory_LifeStoryService__["a" /* LifeStoryService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_7__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_9__providers_alert_service_alert_service__["a" /* AlertServiceProvider */]])
    ], LifeStoryPage);
    return LifeStoryPage;
}());

//# sourceMappingURL=life-story.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsConditionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_toast_service_toast_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_alert_service_alert_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(72);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TermsConditionsPage = /** @class */ (function () {
    function TermsConditionsPage(authService, alertService, toastCtrl, navCtrl, navParams, viewCtrl) {
        this.authService = authService;
        this.alertService = alertService;
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    TermsConditionsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad TermsConditionsPage');
        this.temData = this.authService.getApiReqeust("api/v1/auth/terms").subscribe(function (data) {
            // console.log(data._body);
            _this.dataContainer.nativeElement.innerHTML = data._body;
            // this.storage.set("loginStatus", true);
            // this.navCtrl.setRoot(HomePage);
        }, function (error) {
            _this.dataContainer.nativeElement.innerHTML = "Something went wrong";
            console.log(error);
        });
    };
    TermsConditionsPage.prototype.closeTermsConditions = function () {
        this.viewCtrl.dismiss();
        this.temData.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('dataContainer'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], TermsConditionsPage.prototype, "dataContainer", void 0);
    TermsConditionsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-terms-conditions',template:/*ion-inline-start:"/Users/kanikagupta/Documents/Modurn/modurn 2/src/pages/common/terms-conditions/terms-conditions.html"*/'<ion-header no-border>\n  <ion-navbar>\n    <!--<ion-title text-center>Terms & Conditions</ion-title>-->\n    \n    <ion-buttons left (click)="closeTermsConditions()">\n      <button class="btnColor cross-icn" ion-button icon-only>\n        <!--<ion-icon name=\'md-close\'></ion-icon>-->\n        <ion-icon class="icon icon-cross" item-right></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content >\n  <div class="page-content padd-content">\n    <div class="page-heading">\n      <h2 class="content-head2">Terms & conditions</h2>\n    </div>\n\n<p #dataContainer text-center class="terms-data">  <ion-spinner name="bubbles"></ion-spinner>\n</p>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/kanikagupta/Documents/Modurn/modurn 2/src/pages/common/terms-conditions/terms-conditions.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_alert_service_alert_service__["a" /* AlertServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_toast_service_toast_service__["a" /* ToastServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ViewController */]])
    ], TermsConditionsPage);
    return TermsConditionsPage;
}());

//# sourceMappingURL=terms-conditions.js.map

/***/ }),

/***/ 187:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 187;

/***/ }),

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/addstory/add-career-academic/add-career-academic.module": [
		722,
		40
	],
	"../pages/addstory/add-competitions-training/add-competitions-training.module": [
		723,
		39
	],
	"../pages/addstory/add-document/add-document.module": [
		724,
		38
	],
	"../pages/addstory/add-experience/add-experience.module": [
		725,
		37
	],
	"../pages/addstory/add-favorite-charity/add-favorite-charity.module": [
		726,
		36
	],
	"../pages/addstory/add-friends-family/add-friends-family.module": [
		727,
		35
	],
	"../pages/addstory/add-health-journey/add-health-journey.module": [
		728,
		34
	],
	"../pages/addstory/add-image/add-image.module": [
		729,
		11
	],
	"../pages/addstory/add-interest-passion/add-interest-passion.module": [
		730,
		33
	],
	"../pages/addstory/add-link/add-link.module": [
		731,
		32
	],
	"../pages/addstory/add-story/add-story.module": [
		732,
		31
	],
	"../pages/addstory/career-academic/career-academic.module": [
		733,
		30
	],
	"../pages/addstory/competitions-training/competitions-training.module": [
		734,
		29
	],
	"../pages/addstory/documents/documents.module": [
		735,
		28
	],
	"../pages/addstory/experience-creator/experience-creator.module": [
		736,
		27
	],
	"../pages/addstory/favorite-charity/favorite-charity.module": [
		737,
		26
	],
	"../pages/addstory/health-journey/health-journey.module": [
		738,
		25
	],
	"../pages/addstory/interests-passions/interests-passions.module": [
		739,
		24
	],
	"../pages/addstory/petexperience-creator/petexperience-creator.module": [
		740,
		23
	],
	"../pages/addstory/relationship/relationship.module": [
		741,
		22
	],
	"../pages/lifestory/experienceDetails/experienceDetails.module": [
		742,
		10
	],
	"../pages/lifestory/home/home.module": [
		743,
		9
	],
	"../pages/lifestory/life-story/LifeStoryTab/experience-gallary/experience-gallary.module": [
		744,
		8
	],
	"../pages/lifestory/life-story/LifeStoryTab/experience/experience.module": [
		745,
		7
	],
	"../pages/lifestory/life-story/LifeStoryTab/familynfriends/familynfriends.module": [
		746,
		6
	],
	"../pages/lifestory/life-story/LifeStoryTab/gallery/gallery.module": [
		747,
		5
	],
	"../pages/lifestory/life-story/LifeStoryTab/media/media.module": [
		748,
		4
	],
	"../pages/lifestory/life-story/LifeStoryTab/profile/profile.module": [
		749,
		21
	],
	"../pages/lifestory/lifeStoryCreation/new-life-storie1/new-life-storie1.module": [
		750,
		20
	],
	"../pages/lifestory/lifeStoryCreation/new-life-storie2/new-life-storie2.module": [
		751,
		19
	],
	"../pages/lifestory/lifeStoryCreation/new-life-storie3/new-life-storie3.module": [
		752,
		18
	],
	"../pages/lifestory/lifeStoryCreation/new-life-storie4/new-life-storie4.module": [
		753,
		17
	],
	"../pages/lifestory/lifeStoryCreation/new-life-storie5/new-life-storie5.module": [
		754,
		3
	],
	"../pages/lifestory/lifeStoryCreation/new-pet-storie1/new-pet-storie1.module": [
		755,
		16
	],
	"../pages/lifestory/lifeStoryCreation/pet-story/pet-story.module": [
		756,
		15
	],
	"../pages/onboarding/onboarding.module": [
		757,
		14
	],
	"../pages/profile/edit-profile/edit-profile.module": [
		758,
		2
	],
	"../pages/profile/my-profile/my-profile.module": [
		759,
		1
	],
	"../pages/settings/change-password/change-password.module": [
		760,
		13
	],
	"../pages/settings/samples/samples.module": [
		761,
		12
	],
	"../pages/settings/settings/settings.module": [
		762,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 232;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Environment */
/* unused harmony export URI */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Environment = {
    Dev: "Dev",
    QA: "QA",
    Staging: "Staging",
    Production: "Production"
};
//####################### Current Environment ######################
//##################################################################
//Change base URL
var currentEnvironment = Environment.Staging;
// var apiURL = 'http://172.20.10.7:8080/modurn/'; //Local
// var apiURL = 'https://prod.modurngroup.com/modurn/'; //Production
var apiURL = 'https://staging.modurngroup.com/modurn/'; //staging
// var apiURL = 'https://dev.modurngroup.com/modurn/'; //dev
//  var apiURL = 'https://qa.modurngroup.com/modurn/';//qa
var shareURL = 'https://staging.modurngroup.com/'; //staging
//##################################################################
//##################################################################
var URI = {
    DevURI: "https://dev.modurngroup.com/modurn/api/v1/",
    QAURI: "https://qa.modurngroup.com/modurn/api/v1/",
    StagingURI: "https://staging.modurngroup.com/modurn/api/v1/",
    // StagingURI: "http://172.20.10.7:8080/modurn/api/v1/",
    ProductionURI: "https://prod.modurngroup.com/modurn/api/v1/"
};
var ConfigProvider = /** @class */ (function () {
    function ConfigProvider(http) {
        this.http = http;
        // console.log('Hello ConfigProvider Provider');
    }
    ConfigProvider.prototype.getApiURI = function () {
        // console.log('current env = ', this.apiMethod(Constant.APIService.SignUp));
        return apiURL;
    };
    ConfigProvider.prototype.getHeaders = function () {
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        header.append('Accept', 'application/json');
        return header;
    };
    ConfigProvider.prototype.getHeadersToken = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Accept', 'application/json');
        headers.append("Authorization", 'Token');
        return headers;
    };
    ConfigProvider.prototype.apiMethod = function (url) {
        var baseURL = "";
        switch (currentEnvironment) {
            case "Dev":
                baseURL = URI.DevURI;
                break;
            case "QA":
                baseURL = URI.QAURI;
                break;
            case "Staging":
                baseURL = URI.StagingURI;
                break;
            case "Production":
                baseURL = URI.ProductionURI;
                break;
            default:
                baseURL = "DevBaseURL";
                break;
        }
        return baseURL + url;
    };
    ConfigProvider.prototype.shareUrl = function () {
        return shareURL;
    };
    ConfigProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], ConfigProvider);
    return ConfigProvider;
}());

//# sourceMappingURL=config.js.map

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export APIURL */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return KEY_STORAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return KEY_NOTIFF; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return HTTP_METHOD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return LifeStoryTab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APIService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return websiteUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return EMAIL_REGES; });
/* unused harmony export TEXT_REGES */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return NUMBER_REGES; });
/* unused harmony export NUMBER_FLOAT_REGES */
/* unused harmony export EMAIL_TEXT_REGES */
/* unused harmony export PASSWORD_REGES */
/* unused harmony export WITHOUT_FIRST_REGES */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return WITHOUT_FIRST_REGES_SPECIAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return NICKNAME_REGES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return URL; });
/* unused harmony export ROMOVE_SPACE */
var APIURL = {
    URL1: 'http://example.com',
    URL2: 'http://example2.com'
};
var KEY_STORAGE = {
    UserData: "userData",
    URL2: "http://example2.com",
    Relation: "Relation",
    Roles: "UserRoles",
};
var KEY_NOTIFF = {
    LifeStoryUpdate: "LifeStoryUpdated",
    LifeStoryUpdateRender: "LifeStoryUpdatedRender",
    DismissSetting: "DismissSetting",
    TabSelect: "TabSelect"
};
//
var HTTP_METHOD;
(function (HTTP_METHOD) {
    HTTP_METHOD[HTTP_METHOD["GET"] = 0] = "GET";
    HTTP_METHOD[HTTP_METHOD["POST"] = 1] = "POST";
    HTTP_METHOD[HTTP_METHOD["PUT"] = 2] = "PUT";
    HTTP_METHOD[HTTP_METHOD["DELETE"] = 3] = "DELETE";
})(HTTP_METHOD || (HTTP_METHOD = {}));
var LifeStoryTab;
(function (LifeStoryTab) {
    LifeStoryTab[LifeStoryTab["Experience"] = 0] = "Experience";
    LifeStoryTab[LifeStoryTab["Media"] = 1] = "Media";
    LifeStoryTab[LifeStoryTab["Profile"] = 2] = "Profile";
    LifeStoryTab[LifeStoryTab["FriendsnFamily"] = 3] = "FriendsnFamily";
})(LifeStoryTab || (LifeStoryTab = {}));
var APIService = {
    Login: 'auth/signin',
    SignUp: 'signupapi',
    LifeStory: 'story/lifeStory',
    updateLifeStory: "story/updateLifeStory",
    addInterestPassion: 'story/interestPassion',
    getExperienceDetails: 'story/experienceById',
    ChangePassword: 'profile/changePassword',
    getMediaData: 'story/imageLink',
    sendEmail: 'story/sendEmailVisiter',
    logOut: 'profile/logOut',
    //change
    postInterest: 'story/interestPassion',
    updateInterest: 'story/updateInterestPassion',
    addCompetitionnTraining: 'story/competitionTraining',
    updateCompetitionTraining: 'story/updateCompetitionTraining',
    EditProfile: 'profile/updateUserProfile',
    ConfirmPass: 'profile/verifyPassword',
    ProfileImage: 'profile/saveUserProfile',
    UpdateProfilePic: 'profile/updateUserProfile',
    experienceStatus: 'story/updateExperienceStatus',
    RoleDetails: 'profile/roleDetail',
    RelationDetails: 'profile/relationDetail',
    UploadLifeStoryPic: 'story/upLoadImagelifeStory',
    addLifeStory: 'story/lifeStory',
    getPdfList: 'story/pdfFile',
    deletePdfFile: 'story/deletePdfFile',
    //change
    getCareerAcademic: 'story/careerAcademic',
    updateCareerAcademic: 'story/updateCareerAcademic',
    getInterestPassion: 'story/interestPassion',
    getCompetitionTraining: 'story/competitionTraining',
    getHealthJourney: 'story/health',
    updateHealthJourney: 'story/updateHealth',
    getCharity: 'story/charity',
    updateCharityUrl: 'story/updateCharity',
    getMediaLink: 'story/mediaLink',
    addMediaLink: 'story/mediaLink',
    updateMediaLink: 'story/updateMediaLink',
    //Beacon
    CheckBeaconExistance: 'profile/checkBeaconExistence',
    ConnectLifeStory: 'story/mapBeacon',
    ConnectLifeStoryAsViewer: 'profile/userAsViewer',
    //LifeStory
    GetLifeStoryById: 'story/lifestoryById',
    deleteCharity: 'story/deleteCharity',
    loadMoreImageUrl: 'story/mediaImage',
    likeExpUrl: 'story/likeExperience',
    deletExpUrl: 'story/deleteExperience',
    deleteHealthJourney: 'story/deleteHealth',
    deleteFriendFamily: 'story/deleteFriendFamily',
    deleteLifestory: 'story/deleteLifeStory',
    deleteMediaLink: 'story/deleteMediaLink',
    deleteMediaImage: 'story/deleteMediaImage',
};
// export const websiteUrl : string = 'http://modurngroup.com/';
var websiteUrl = 'https://modurn.com/';
// export const websiteUrl : string = 'https://www.modurngroup.com/';
/**
 *
 * Define Constants for use all over the app
 *
 */
///^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
var EMAIL_REGES = /^[\W]*([\w+\-.%]+@[\w\-.]+\.[A-Za-z]{2,4}[\W]*,{1}[\W]*)*([\w+\-.%]+@[\w\-.]+\.[A-Za-z]{2,10})[\W]*$/;
var TEXT_REGES = /^[A-Za-z ']*$/;
// export const NUMBER_REGES : RegExp = /^[0-9]*$/;
var NUMBER_REGES = /^(0?[1-9]|[1-9][0-9]{0,2})$/;
var NUMBER_FLOAT_REGES = /^[+-]?\d+(\.\d+)?$/;
var EMAIL_TEXT_REGES = /^[A-Za-z_@.0-9]*$/;
var PASSWORD_REGES = /^[A-Za-z0-9\n.'?~`!@#$%^&*<>,-_]+$/;
var WITHOUT_FIRST_REGES = /^[^-\s][a-zA-Z0-9_\s-]+$/;
// old
// export const WITHOUT_FIRST_REGES_SPECIAL : RegExp = /^[^-\s][A-Za-z0-9\n.'’?~`+}{!@#$%^")(&*<>,-_\s-]+$/;
// New
// export const WITHOUT_FIRST_REGES_SPECIAL : RegExp = /^[^-\s][A-Za-z0-9\n.'’?~`+}{!@#$%^")(&*<>,-_\s-]/;
// Latest
// export const WITHOUT_FIRST_REGES_SPECIAL : RegExp = /^[^-\s][a-zA-Z0-9'’?~`+}{!@#$%^")(\n.&*<>,-_\s-]+$/;
var WITHOUT_FIRST_REGES_SPECIAL = /^[^\s][a-zA-Z0-9'’?~`+}{!@#$%^"“”)(\n.&*<>,-_\s-]+$/;
var NICKNAME_REGES = /^[^\s:([){};]/;
// export const WITHOUT_FIRST_REGES_SPECIAL : RegExp = /^[^-\s][A-Za-z0-9'_@.>,!*#&+-]*$/
// export const WITHOUT_FIRST_REGES_SPECIAL : RegExp = /^[^-\s][A-Za-z0-9\n.'?~`!@#$%^&*<>,-_]*$/
// export const URL : RegExp = /(https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*))/g;
// export const URL : RegExp = /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/;
// export const URL : RegExp = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-zA-Z]{0,31}.[a-zA-Z]{0,3}/g;
var URL = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
// export const URL : RegExp = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/g;
var ROMOVE_SPACE = /\s+/g;
//# sourceMappingURL=Constant.js.map

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BeaconProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_ibeacon__ = __webpack_require__(331);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BeaconProvider = /** @class */ (function () {
    function BeaconProvider(platform, events, ibecon) {
        this.platform = platform;
        this.events = events;
        this.ibecon = ibecon;
    }
    BeaconProvider.prototype.stopMonitoring = function () {
        this.ibecon.stopMonitoringForRegion(this.region);
    };
    BeaconProvider.prototype.stopRanging = function () {
        this.ibecon.stopRangingBeaconsInRegion(this.region);
    };
    BeaconProvider.prototype.initialise = function (mode) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            // we need to be running on a device
            if (_this.platform.is('cordova')) {
                // Request permission to use location on iOS
                _this.ibecon.requestAlwaysAuthorization();
                // create a new delegate and register it with the native layer
                _this.delegate = _this.ibecon.Delegate();
                // Subscribe to some of the delegate’s event handlers
                _this.delegate.didRangeBeaconsInRegion()
                    .subscribe(function (data) {
                    // console.log(data);
                    // console.log(JSON.stringify(data.beacons));
                    _this.events.publish('didRangeBeaconsInRegion', data);
                }, function (error) { return console.error(); });
                _this.delegate.didStartMonitoringForRegion()
                    .subscribe(function (data) {
                    // console.log(data);
                    _this.events.publish('didStartMonitoringForRegion', data);
                }, function (error) { return console.error(); });
                // this.delegate.stopMonitoringForRegion()
                //   .subscribe(
                //   data => {
                //     // console.log(data);
                //     // console.log(JSON.stringify(data.beacons));
                //     this.events.publish('stopMonitoringForRegion', data);
                //   },
                //   error => console.error()
                //   );
                _this.delegate.didEnterRegion()
                    .subscribe(function (data) {
                    console.log("*******didEnterRegion********");
                    console.log(JSON.stringify(data.beacons));
                    _this.events.publish('didEnterRegion', data);
                }, function (error) { return console.error(); });
                // setup a beacon region – CHANGE THIS TO YOUR OWN UUID
                // this.region = this.ibecon.BeaconRegion('deskBeacon', '2F234454-CF6D-4A0F-ADF2-F4911BA9FFA6');
                _this.region = _this.ibecon.BeaconRegion('deskBeacon', '2f234454-cf6d-4a0f-adf2-f4911ba9ffa6');
                if (mode == 1) {
                    // start ranging
                    _this.ibecon.startRangingBeaconsInRegion(_this.region)
                        .then(function () {
                        resolve(true);
                    }, function (error) {
                        console.error('Failed to begin monitoring: ', error);
                        resolve(false);
                    });
                }
                else {
                    //monitoring
                    _this.ibecon.startMonitoringForRegion(_this.region)
                        .then(function () {
                        resolve(true);
                    }, function (error) {
                        console.error('Failed to begin monitoring: ', error);
                        resolve(false);
                    });
                }
                /*
                */
            }
            else {
                console.error('This application needs to be running on a device');
                resolve(false);
            }
        });
        return promise;
    };
    BeaconProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_ibeacon__["a" /* IBeacon */]])
    ], BeaconProvider);
    return BeaconProvider;
}());

//# sourceMappingURL=beaconprovider.js.map

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BeaconService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__NetworkRequest_NetworkServices__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Utility_Constant__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_config__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { User } from './user';



//import { NetworkServices } from '../'

var BeaconService = /** @class */ (function () {
    //activeUser: User;
    function BeaconService(networkService, config, storage) {
        this.networkService = networkService;
        this.config = config;
        this.storage = storage;
    }
    BeaconService.prototype.checkBeconExistance = function (params) {
        var _this = this;
        //debugger;
        var userId = window.localStorage.getItem('userId');
        //params.append("userId", userId);
        params.userId = userId;
        return new Promise(function (resolve, reject) {
            try {
                var urlString = _this.config.apiMethod(__WEBPACK_IMPORTED_MODULE_2__Utility_Constant__["a" /* APIService */].CheckBeaconExistance);
                //  //debugger;
                _this.networkService.performRequest(__WEBPACK_IMPORTED_MODULE_2__Utility_Constant__["c" /* HTTP_METHOD */].POST, params, urlString, false, false).subscribe(function (result) {
                    //debugger;
                    // let user = new User(data.data.userInfoModel);
                    // console.log('user ===== = ',user);
                    //this.storage.set(Constant.KEY_STORAGE.Roles, result.data);
                    // this.activeUser = data.userInfoModel;
                    //var userData = JSON.parse(data);
                    resolve(result.data);
                }, function (error) {
                    console.log(error);
                    reject(error);
                });
            }
            catch (e) {
                return reject(e);
            }
        });
        // return Observable.throw(true);
    };
    BeaconService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__NetworkRequest_NetworkServices__["a" /* NetworkServices */], __WEBPACK_IMPORTED_MODULE_3__config_config__["a" /* ConfigProvider */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], BeaconService);
    return BeaconService;
}());

//# sourceMappingURL=beaconService.js.map

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_toast_service_toast_service__ = __webpack_require__(34);
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
var ForgotPage = /** @class */ (function () {
    function ForgotPage(navCtrl, navParams, fb, authService, toastCtrl, 
        // public alertService: AlertServiceProvider,
        loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fb = fb;
        this.authService = authService;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        var EMAIL_REGEXP = /^[^@]+@([^@\.]+\.)+[^@\.]+$/i;
        this.forgotForm = fb.group({
            'email': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(EMAIL_REGEXP)])]
        });
    }
    ForgotPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad');
    };
    ForgotPage.prototype.submitForm = function (formData) {
        var _this = this;
        console.log('Form submited!');
        console.log(formData);
        var data = {
            email: formData.email,
            fromApp: true
        };
        // Showing loader
        var loader = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loader.present();
        this.authService.getAuthenticate(data, "/api/v1/auth/forgotPassword").subscribe(function (data) {
            var forgotData = JSON.parse(data);
            console.log(forgotData);
            loader.dismiss();
            if (forgotData.responseCode == '200') {
                _this.toastCtrl.create(forgotData.message);
            }
        }, function (error) {
            console.log(error);
            loader.dismiss();
            _this.toastCtrl.create(error);
        });
    };
    ForgotPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-forgot',template:/*ion-inline-start:"/Users/kanikagupta/Documents/Modurn/modurn 2/src/pages/auth/forgot/forgot.html"*/'<ion-header no-border>\n\n  <ion-navbar></ion-navbar>\n\n</ion-header>\n\n<ion-content>\n  <div class="forgot-content">\n    <div class="page-heading">\n      <h2 class="forgot-head2">Forgot password</h2>\n      <p text-center>Don\'t worry, It can happen to anyone. Please enter the email address on your account and we will email you a reset\n        link.</p>\n    </div>\n    <!--<h1 text-center>Forgot password</h1>-->\n    <!--<hr align="center" width="30%">-->\n    <!--<p text-center>Don\'t worry, It can happen to anyone. Please enter the email address on your account and we will email you a reset link.</p>-->\n    <form [formGroup]="forgotForm" (ngSubmit)="submitForm(forgotForm.value)">\n      <ion-list>\n\n        <ion-item [ngClass]="{\'error-border\':!forgotForm.controls[\'email\'].valid && forgotForm.controls[\'email\'].touched}">\n          <ion-label stacked>Your email</ion-label>\n          <ion-input type="email" value="" [formControl]="forgotForm.controls[\'email\']" [ngClass]="{\'error-border\':!forgotForm.controls[\'email\'].valid && forgotForm.controls[\'email\'].touched}" spellcheck="true" autoComplete="true" autocorrect="true"></ion-input>\n        </ion-item>\n\n        <div *ngIf="forgotForm.controls[\'email\'].hasError(\'required\') && forgotForm.controls[\'email\'].touched" class="error-box">\n        *You must enter Email.</div>\n        <div *ngIf="forgotForm.controls[\'email\'].hasError(\'pattern\') && !forgotForm.controls[\'email\'].valid" class="error-box"> *Enter valid Email.</div>\n\n      </ion-list>\n\n      <button class="mr-t180 button_color" type="submit" ion-button full color="dark" [disabled]="!forgotForm.valid">RESET PASSWORD</button>\n    </form>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/kanikagupta/Documents/Modurn/modurn 2/src/pages/auth/forgot/forgot.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_toast_service_toast_service__["a" /* ToastServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */]])
    ], ForgotPage);
    return ForgotPage;
}());

//# sourceMappingURL=forgot.js.map

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicinfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_profile_picture_profile_picture__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Utility_Constant__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BasicinfoPage = /** @class */ (function () {
    function BasicinfoPage(navCtrl, viewCtrl, navParams, fb) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.fb = fb;
        this.isSubmit = false;
        var NAME_REGEXP = /^[a-zA-Z0-9._ -]+$/;
        this.signupForm = fb.group({
            'fullname': [null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_4__Utility_Constant__["j" /* WITHOUT_FIRST_REGES_SPECIAL */]), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(30)]],
            'nicename': [null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_4__Utility_Constant__["j" /* WITHOUT_FIRST_REGES_SPECIAL */]), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(30)]]
        });
    }
    BasicinfoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad');
    };
    BasicinfoPage.prototype.ionViewWillEnter = function () {
        this.viewCtrl.showBackButton(false);
    };
    BasicinfoPage.prototype.submitForm = function (value) {
        console.log('Form submited!');
        console.log(value);
        if (value.nicename == null) {
            value.nicename = '';
        }
        //debugger;
        this.isSubmit = true;
        if (value.fullname != null && this.signupForm.valid) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__profile_profile_picture_profile_picture__["a" /* ProfilePicturePage */], { userBasicInfo: value });
        }
        // this.navCtrl.push(ProfilePicturePage, { userBasicInfo: value });
    };
    BasicinfoPage.prototype.checkKeyup = function (key) {
        // console.log(key);
    };
    BasicinfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'basicinfo',template:/*ion-inline-start:"/Users/kanikagupta/Documents/Modurn/modurn 2/src/pages/profile/basicinfo/basicinfo.html"*/'<ion-header no-border>\n\n  <ion-navbar></ion-navbar>\n\n</ion-header>\n\n<ion-content>\n  <div class="basicpage-content">\n    <div class="page-heading">\n      <h2 style="font-size: 24px;">What\'s your name?</h2>\n    </div>\n    <br/>\n    <form [formGroup]="signupForm" (ngSubmit)="submitForm(signupForm.value)">\n      <ion-list>\n        <ion-item [ngClass]="{\'error-border\':!signupForm.controls[\'fullname\'].valid  && signupForm.controls[\'fullname\'].touched}">\n          <ion-label stacked>Full name</ion-label>\n          <ion-input (keyup)="checkKeyup(signupForm.value.fullname)" type="text" value="" [formControl]="signupForm.controls[\'fullname\']" [ngClass]="{\'error-border\':!signupForm.controls[\'fullname\'].valid  && signupForm.controls[\'fullname\'].touched}" spellcheck="true" autoComplete="true" autocorrect="true"></ion-input>\n        </ion-item>\n      <div *ngIf="isSubmit">\n        <div class="error-box" *ngIf="!signupForm.controls[\'fullname\'].valid && signupForm.controls[\'fullname\'].hasError(\'required\') ">* Full Name is required!</div>\n        <div style="color: #b40000;font: 12px \'Conv_Gotham Light\';" *ngIf="signupForm.controls[\'fullname\'].hasError(\'pattern\')">* Please enter valid characters.</div>\n        <div class="error-box" *ngIf="signupForm.controls[\'fullname\'].hasError(\'maxlength\') && signupForm.controls[\'fullname\'].touched && !signupForm.controls[\'fullname\'].hasError(\'pattern\')">* Maximum length is 30!</div>\n        </div>\n        <ion-item [ngClass]="{\'error-border\':!signupForm.controls[\'nicename\'].valid  && signupForm.controls[\'nicename\'].touched}">\n          <ion-label stacked>Nickname - "Your loved ones call you"</ion-label>\n          <ion-input type="text" (keyup)="checkKeyup(signupForm.value.nicename)" value="" [formControl]="signupForm.controls[\'nicename\']" [ngClass]="{\'error-border\':!signupForm.controls[\'nicename\'].valid  && signupForm.controls[\'nicename\'].touched}" spellcheck="true" autoComplete="true" autocorrect="true"></ion-input>\n        </ion-item>\n      <div *ngIf="isSubmit">\n        <!-- <div class="error-box" *ngIf="!signupForm.controls[\'nicename\'].valid && signupForm.controls[\'nicename\'].hasError(\'required\')">* Nickname is required!</div> -->\n        <div style="color: #b40000;font: 12px \'Conv_Gotham Light\';" *ngIf="signupForm.controls[\'nicename\'].hasError(\'pattern\')">* Please enter valid characters.</div>\n        <div class="error-box" *ngIf="signupForm.controls[\'nicename\'].hasError(\'maxlength\') && signupForm.controls[\'nicename\'].touched && !signupForm.controls[\'nicename\'].hasError(\'pattern\')">* Maximum length is 30!</div>\n      </div>\n      </ion-list>\n      <div class="mr-t100">\n        <button class="button_color" type="submit" ion-button color="dark" block >NEXT</button>\n      </div>\n    </form>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/kanikagupta/Documents/Modurn/modurn 2/src/pages/profile/basicinfo/basicinfo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], BasicinfoPage);
    return BasicinfoPage;
}());

//# sourceMappingURL=basicinfo.js.map

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePicturePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_camera_camera__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_toast_service_toast_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_alert_service_alert_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_usercommon_services__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_config_config__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_bluetooth_serial__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__settings_search_beacon_search_beacon__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_file_transfer__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_file__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










// import { HomePage } from '../../lifestory/home/home';


var ProfilePicturePage = /** @class */ (function () {
    function ProfilePicturePage(navCtrl, toastCtrl, navParams, actionsheetCtrl, cameraProvider, storage, platform, loadingCtrl, alertService, bluetoothSerial, modalCtrl, viewCtrl, commonServices, transfer, file, configService) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.navParams = navParams;
        this.actionsheetCtrl = actionsheetCtrl;
        this.cameraProvider = cameraProvider;
        this.storage = storage;
        this.platform = platform;
        this.loadingCtrl = loadingCtrl;
        this.alertService = alertService;
        this.bluetoothSerial = bluetoothSerial;
        this.modalCtrl = modalCtrl;
        this.viewCtrl = viewCtrl;
        this.commonServices = commonServices;
        this.transfer = transfer;
        this.file = file;
        this.configService = configService;
        this.chosenPicture = "assets/img/icPlusAdd.png";
        this.isBlutoothEnable = false;
        //debugger;
        console.log(this.navParams.data);
        console.log(this.navParams.data.userBasicInfo);
        this._baseUrl = configService.getApiURI();
        this.headers = configService.getHeaders();
        // this.userName = this.navParams.data.userBasicInfo.fullname;
        // this.userName = this.navParams.data.userBasicInfo.nicename;
    }
    ProfilePicturePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupScreen2Page');
    };
    ProfilePicturePage.prototype.addPicture = function () {
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
    ProfilePicturePage.prototype.takePicture = function () {
        var _this = this;
        var loading = this.loadingCtrl.create();
        loading.present();
        return this.cameraProvider.getPictureFromCamera().then(function (picture) {
            if (picture) {
                _this.chosenPicture = picture;
            }
            loading.dismiss();
        }, function (error) {
            alert(error);
        });
    };
    ProfilePicturePage.prototype.getPicture = function () {
        var _this = this;
        return this.cameraProvider.getPictureFromPhotoLibrary().then(function (picture) {
            if (picture) {
                _this.chosenPicture = picture;
            }
            // loading.dismiss();
        }, function (error) {
            alert(error);
        });
    };
    ProfilePicturePage.prototype.saveUserInfo = function (userData, authToken) {
        var _this = this;
        //debugger;
        this.storage.get("userData").then(function (result) {
            if (result) {
                //debugger;
                console.log(result.userInfoModel);
                var updateUserData = {
                    "token": result.token,
                    "userInfoModel": {
                        "userId": result.userInfoModel.userId,
                        "profileCompleted": true,
                        "userName": userData.name,
                        "nickName": userData.nickName,
                        "email": result.userInfoModel.email,
                        "profileImg": result.userInfoModel.profileImg,
                        "profileImg200": result.userInfoModel.profileImg200,
                        "profileImg500": result.userInfoModel.profileImg500
                    }
                };
                console.log("===== updateUserData ====\n\n");
                console.log(updateUserData);
                _this.storage.set("userData", updateUserData);
                _this.commonServices.submitPictureData(userData, "api/v1/profile/saveUserProfile", authToken).subscribe(function (data) {
                    console.log(data);
                    _this.storage.set("loginStatus", true);
                    // this.navCtrl.setRoot(HomePage);
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__settings_search_beacon_search_beacon__["a" /* SearchBeaconPage */]);
                }, function (error) {
                    console.log(error);
                    _this.toastCtrl.create(error);
                });
            }
        });
    };
    ProfilePicturePage.prototype.saveUserBasicInfo = function (skip) {
        // this.appearBluetoothSettings();
        var _this = this;
        // Showing loader
        var loader = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loader.present();
        if (this.chosenPicture != "assets/img/icPlusAdd.png" && skip) {
            var fileTransfer_1 = this.transfer.create();
            this.storage.get("userData").then(function (result) {
                if (result) {
                    _this.accessToken = result.token;
                    _this.userId = result.userInfoModel.userId;
                    var options = {
                        fileKey: 'profileImg',
                        fileName: 'profile.jpg',
                        chunkedMode: false,
                        headers: {
                            'Content-Type': undefined,
                            'Authorization': _this.accessToken
                        }
                    };
                    var params = {
                        userId: _this.userId,
                        name: _this.navParams.data.userBasicInfo.fullname,
                        nickName: _this.navParams.data.userBasicInfo.nicename,
                        deviceType: localStorage.getItem('deviceInfo'),
                        deviceToken: window.localStorage.getItem('deviceReg')
                    };
                    options.params = params;
                    console.log(options);
                    //debugger;
                    // console.log(JSON.stringify(options));
                    fileTransfer_1.upload(_this.chosenPicture, _this._baseUrl + 'api/v1/profile/saveUserProfile', options)
                        .then(function (data) {
                        // success
                        console.log("Image update data: \n\n");
                        console.log(data.response);
                        loader.dismiss();
                        // this.toastCtrl.create(data);
                        // this.toastCtrl.create('Your picture uploaded successfully');
                        var picResponse = JSON.parse(data.response);
                        if (picResponse.responseCode == '200') {
                            _this.storage.set("loginStatus", true);
                            _this.storage.set("userData", picResponse.data);
                            // this.navCtrl.setRoot(HomePage);
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__settings_search_beacon_search_beacon__["a" /* SearchBeaconPage */]);
                        }
                    }, function (err) {
                        // error
                        console.log(err);
                        loader.dismiss();
                        // this.toastCtrl.create(err);
                    });
                }
                else {
                    _this.toastCtrl.create('Something went wrong!');
                }
            });
        }
        else {
            console.log("Not pic");
            this.storage.get("userData").then(function (result) {
                if (result) {
                    _this.accessToken = result.token;
                    _this.userId = result.userInfoModel.userId;
                    // var headers = {
                    //   'Content-Type': undefined,
                    //   'Authorization': this.accessToken
                    // }
                    var params = {
                        userId: _this.userId,
                        name: _this.navParams.data.userBasicInfo.fullname,
                        nickName: _this.navParams.data.userBasicInfo.nicename,
                        deviceType: localStorage.getItem('deviceInfo'),
                        deviceToken: window.localStorage.getItem('deviceReg')
                    };
                    _this.saveUserInfo(params, _this.accessToken);
                }
                else {
                    _this.toastCtrl.create('Something went wrong!');
                }
            });
            loader.dismiss();
        }
    };
    ProfilePicturePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile-picture',template:/*ion-inline-start:"/Users/kanikagupta/Documents/Modurn/modurn 2/src/pages/profile/profile-picture/profile-picture.html"*/'<ion-header no-border>\n\n  <ion-navbar>\n    <ion-buttons right>\n      <button ion-button (click)="saveUserBasicInfo(false)" class="header-color">\n        SKIP\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n  <div class="profilePic-content">\n    <div class="page-heading">\n      <h2>Let\'s add your picture</h2>\n      <p>That way people will recognise you</p>\n    </div>\n\n    <ion-row>\n      <ion-col col-6>\n        <div class="addpic" tappable (click)="addPicture()">\n          <img src="{{chosenPicture}}" />\n        </div>\n      </ion-col>\n    </ion-row>\n    \n    <div class="mr-t100">\n      <button class="button_color" type="submit" ion-button color="dark" block (click)="saveUserBasicInfo(true)">DONE</button>\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/kanikagupta/Documents/Modurn/modurn 2/src/pages/profile/profile-picture/profile-picture.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_toast_service_toast_service__["a" /* ToastServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_camera_camera__["a" /* CameraProvider */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_alert_service_alert_service__["a" /* AlertServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_bluetooth_serial__["a" /* BluetoothSerial */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["u" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_usercommon_services__["a" /* UserCommonServices */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_7__providers_config_config__["a" /* ConfigProvider */]])
    ], ProfilePicturePage);
    return ProfilePicturePage;
}());

//# sourceMappingURL=profile-picture.js.map

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HardwareBackButtonService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HardwareBackButtonService = /** @class */ (function () {
    function HardwareBackButtonService(_plt, _menuCtrl, _toastCtrl) {
        this._plt = _plt;
        this._menuCtrl = _menuCtrl;
        this._toastCtrl = _toastCtrl;
        this._didBackAlready = false;
        this._deregisterFn = null;
    }
    HardwareBackButtonService.prototype.registerAction = function (fn, p) {
        this._deregisterFn = this
            ._plt
            .registerBackButtonAction(function () {
            fn();
        }, p);
    };
    HardwareBackButtonService.prototype.deregisterAction = function () {
        this._deregisterFn && this._deregisterFn();
    };
    HardwareBackButtonService.prototype.doubleBackToExit = function () {
        var _this = this;
        // If sidemenu is open we close it instead of show the toast
        if (this._menuCtrl && this._menuCtrl.isOpen()) {
            return this
                ._menuCtrl
                .close();
        }
        // No sidemenu open lets handle double back to exit
        if (!this._didBackAlready) {
            this._didBackAlready = true;
            this._presentToast("Press back button again to exit");
            setTimeout(function () { return _this._didBackAlready = false; }, 2000);
            return;
        }
        this
            ._plt
            .exitApp();
    };
    HardwareBackButtonService.prototype._presentToast = function (content) {
        var toast = this
            ._toastCtrl
            .create({ message: content, position: 'bottom', duration: 2000 });
        toast.present();
    };
    HardwareBackButtonService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ToastController */]])
    ], HardwareBackButtonService);
    return HardwareBackButtonService;
}());

//# sourceMappingURL=back-button.js.map

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ToastServiceProvider = /** @class */ (function () {
    function ToastServiceProvider(toastCtrl) {
        this.toastCtrl = toastCtrl;
    }
    ToastServiceProvider.prototype.create = function (message, ok, duration) {
        if (ok === void 0) { ok = false; }
        if (duration === void 0) { duration = 4000; }
        if (this.toast) {
            this.toast.dismiss();
        }
        this.toast = this.toastCtrl.create({
            message: message,
            duration: ok ? null : duration,
            position: 'bottom',
            showCloseButton: ok,
            closeButtonText: 'OK',
        });
        this.toast.present();
    };
    ToastServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ToastController */]])
    ], ToastServiceProvider);
    return ToastServiceProvider;
}());

//      cssClass: "message5-box",
//# sourceMappingURL=toast-service.js.map

/***/ }),

/***/ 382:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InterestnPassionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__NetworkRequest_NetworkServices__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Utility_Constant__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_config__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var InterestnPassionService = /** @class */ (function () {
    function InterestnPassionService(networkService, config, storage) {
        this.networkService = networkService;
        this.config = config;
        this.storage = storage;
    }
    InterestnPassionService.prototype.addInterestPassion = function (params) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                var urlString = _this.config.apiMethod(__WEBPACK_IMPORTED_MODULE_2__Utility_Constant__["a" /* APIService */].addInterestPassion);
                //  //debugger;
                _this.networkService.performRequest(__WEBPACK_IMPORTED_MODULE_2__Utility_Constant__["c" /* HTTP_METHOD */].POST, params, urlString, true, true).subscribe(function (data) {
                    // //debugger;
                    // this.activeUser = data.userInfoModel;
                    //var userData = JSON.parse(data);
                    resolve(data);
                }, function (error) {
                    console.log(error);
                    reject(error);
                });
            }
            catch (e) {
                return reject(e);
            }
        });
        // return Observable.throw(true);
    };
    //change
    InterestnPassionService.prototype.fetchinterestsPassion = function (params) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                var urlString = _this.config.apiMethod(__WEBPACK_IMPORTED_MODULE_2__Utility_Constant__["a" /* APIService */].getInterestPassion);
                urlString = urlString + '?userId=' + params.userId + '&ownerId=' + params.ownerId + '&page=' + params.page + '&size=' + params.size;
                //  //debugger;
                _this.networkService.performRequest(__WEBPACK_IMPORTED_MODULE_2__Utility_Constant__["c" /* HTTP_METHOD */].GET, params, urlString, true, true).subscribe(function (result) {
                    //debugger;
                    // this.storage.set(Constant.KEY_STORAGE.Relation, result.data);
                    resolve(result.data);
                }, function (error) {
                    console.log(error);
                    //debugger;
                    reject(error);
                });
            }
            catch (e) {
                return reject(e);
            }
        });
    };
    InterestnPassionService.prototype.postinterestsPassion = function (params) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                var urlString = _this.config.apiMethod(__WEBPACK_IMPORTED_MODULE_2__Utility_Constant__["a" /* APIService */].postInterest);
                //  urlString = urlString + '?userId=' + params.userId + '&ownerId=' + params.ownerId + '&competitionId=' + params.competitionId;
                _this.networkService.performRequest(__WEBPACK_IMPORTED_MODULE_2__Utility_Constant__["c" /* HTTP_METHOD */].POST, params, urlString, true, false).subscribe(function (data) {
                    //debugger;
                    resolve(data);
                }, function (error) {
                    console.log(error);
                    reject(error);
                });
            }
            catch (e) {
                return reject(e);
            }
        });
        // return Observable.throw(true);
    };
    InterestnPassionService.prototype.putinterestsPassion = function (params) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                var urlString = _this.config.apiMethod(__WEBPACK_IMPORTED_MODULE_2__Utility_Constant__["a" /* APIService */].updateInterest);
                //  urlString = urlString + '?userId=' + params.userId + '&ownerId=' + params.ownerId + '&competitionId=' + params.competitionId;
                _this.networkService.performRequest(__WEBPACK_IMPORTED_MODULE_2__Utility_Constant__["c" /* HTTP_METHOD */].POST, params, urlString, true, false).subscribe(function (data) {
                    //debugger;
                    resolve(data);
                }, function (error) {
                    console.log(error);
                    reject(error);
                });
            }
            catch (e) {
                return reject(e);
            }
        });
    };
    InterestnPassionService.prototype.fetchCompetitionTraining = function (params) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                var urlString = _this.config.apiMethod(__WEBPACK_IMPORTED_MODULE_2__Utility_Constant__["a" /* APIService */].getCompetitionTraining);
                urlString = urlString + '?userId=' + params.userId + '&ownerId=' + params.ownerId + '&page=' + params.page + '&size=' + params.size;
                //  //debugger;
                _this.networkService.performRequest(__WEBPACK_IMPORTED_MODULE_2__Utility_Constant__["c" /* HTTP_METHOD */].GET, params, urlString, true, true).subscribe(function (result) {
                    //debugger;
                    // this.storage.set(Constant.KEY_STORAGE.Relation, result.data);
                    resolve(result.data);
                }, function (error) {
                    console.log(error);
                    //debugger;
                    reject(error);
                });
            }
            catch (e) {
                return reject(e);
            }
        });
    };
    InterestnPassionService.prototype.fetchFavoriteCharity = function (params) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                var urlString = _this.config.apiMethod(__WEBPACK_IMPORTED_MODULE_2__Utility_Constant__["a" /* APIService */].getCharity);
                urlString = urlString + '?userId=' + params.userId + '&ownerId=' + params.ownerId;
                //  //debugger;
                _this.networkService.performRequest(__WEBPACK_IMPORTED_MODULE_2__Utility_Constant__["c" /* HTTP_METHOD */].GET, params, urlString, true, true).subscribe(function (result) {
                    //debugger;
                    // this.storage.set(Constant.KEY_STORAGE.Relation, result.data);
                    resolve(result.data);
                }, function (error) {
                    console.log(error);
                    //debugger;
                    reject(error);
                });
            }
            catch (e) {
                return reject(e);
            }
        });
    };
    InterestnPassionService.prototype.deleteFavoriteCharity = function (params) {
        var _this = this;
        console.log(params);
        //var userId = window.localStorage.getItem('userId');
        // params.userId = window.localStorage.getItem('userId');
        return new Promise(function (resolve, reject) {
            try {
                var urlString = _this.config.apiMethod(__WEBPACK_IMPORTED_MODULE_2__Utility_Constant__["a" /* APIService */].deleteCharity);
                //  //debugger;
                _this.networkService.performRequest(__WEBPACK_IMPORTED_MODULE_2__Utility_Constant__["c" /* HTTP_METHOD */].POST, params, urlString, true, true).subscribe(function (result) {
                    //debugger;
                    // this.storage.set(Constant.KEY_STORAGE.Relation, result.data);
                    resolve(result.data);
                }, function (error) {
                    console.log(error);
                    //debugger;
                    reject(error);
                });
            }
            catch (e) {
                return reject(e);
            }
        });
    };
    InterestnPassionService.prototype.fetchcareernAcademics = function (params) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                var urlString = _this.config.apiMethod(__WEBPACK_IMPORTED_MODULE_2__Utility_Constant__["a" /* APIService */].getCareerAcademic);
                urlString = urlString + '?userId=' + params.userId + '&ownerId=' + params.ownerId + '&page=' + params.page + '&size=' + params.size;
                _this.networkService.performRequest(__WEBPACK_IMPORTED_MODULE_2__Utility_Constant__["c" /* HTTP_METHOD */].GET, params, urlString, true, true).subscribe(function (result) {
                    resolve(result.data);
                }, function (error) {
                    reject(error);
                });
            }
            catch (e) {
                return reject(e);
            }
        });
    };
    InterestnPassionService.prototype.sendEmail = function (params) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                var urlString = _this.config.apiMethod(__WEBPACK_IMPORTED_MODULE_2__Utility_Constant__["a" /* APIService */].sendEmail);
                urlString = urlString + '?userId=' + params.userId + '&ownerId=' + params.ownerId + '&email=' + params.email;
                //  //debugger;
                _this.networkService.performRequest(__WEBPACK_IMPORTED_MODULE_2__Utility_Constant__["c" /* HTTP_METHOD */].GET, params, urlString, true, true).subscribe(function (result) {
                    //debugger;
                    // this.storage.set(Constant.KEY_STORAGE.Relation, result.data);
                    resolve(result.data);
                }, function (error) {
                    console.log(error);
                    //debugger;
                    reject(error);
                });
            }
            catch (e) {
                return reject(e);
            }
        });
    };
    InterestnPassionService.prototype.fetchHealthJourney = function (params) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                var urlString = _this.config.apiMethod(__WEBPACK_IMPORTED_MODULE_2__Utility_Constant__["a" /* APIService */].getHealthJourney);
                urlString = urlString + '?userId=' + params.userId + '&ownerId=' + params.ownerId + '&page=' + params.page + '&size=' + params.size;
                //  //debugger;
                _this.networkService.performRequest(__WEBPACK_IMPORTED_MODULE_2__Utility_Constant__["c" /* HTTP_METHOD */].GET, params, urlString, false, true).subscribe(function (result) {
                    // //debugger;
                    // this.storage.set(Constant.KEY_STORAGE.Relation, result.data);
                    resolve(result.data);
                }, function (error) {
                    console.log(error);
                    //debugger;
                    reject(error);
                });
            }
            catch (e) {
                return reject(e);
            }
        });
    };
    InterestnPassionService.prototype.deleteHealthJourney = function (params) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                var urlString = _this.config.apiMethod(__WEBPACK_IMPORTED_MODULE_2__Utility_Constant__["a" /* APIService */].deleteHealthJourney);
                // urlString = urlString + '?userId=' + params.userId + '&ownerId=' + params.ownerId + '&healthId=' + params.healthId;
                _this.networkService.performRequest(__WEBPACK_IMPORTED_MODULE_2__Utility_Constant__["c" /* HTTP_METHOD */].POST, params, urlString, true, true).subscribe(function (result) {
                    resolve(result.data);
                }, function (error) {
                    console.log(error);
                    //debugger;
                    reject(error);
                });
            }
            catch (e) {
                return reject(e);
            }
        });
    };
    InterestnPassionService.prototype.deleteMediaLink = function (params) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                var urlString = _this.config.apiMethod(__WEBPACK_IMPORTED_MODULE_2__Utility_Constant__["a" /* APIService */].deleteMediaLink);
                // urlString = urlString + '?userId=' + params.userId + '&ownerId=' + params.ownerId + '&healthId=' + params.healthId;
                _this.networkService.performRequest(__WEBPACK_IMPORTED_MODULE_2__Utility_Constant__["c" /* HTTP_METHOD */].POST, params, urlString, true, true).subscribe(function (result) {
                    resolve(result.data);
                }, function (error) {
                    console.log(error);
                    //debugger;
                    reject(error);
                });
            }
            catch (e) {
                return reject(e);
            }
        });
    };
    InterestnPassionService.prototype.deleteFriendFamily = function (params) {
        var _this = this;
        console.log(params);
        return new Promise(function (resolve, reject) {
            try {
                var urlString = _this.config.apiMethod(__WEBPACK_IMPORTED_MODULE_2__Utility_Constant__["a" /* APIService */].deleteFriendFamily);
                _this.networkService.performRequest(__WEBPACK_IMPORTED_MODULE_2__Utility_Constant__["c" /* HTTP_METHOD */].POST, params, urlString, true, true).subscribe(function (result) {
                    //debugger;
                    // this.storage.set(Constant.KEY_STORAGE.Relation, result.data);
                    resolve(result.data);
                }, function (error) {
                    console.log(error);
                    //debugger;
                    reject(error);
                });
            }
            catch (e) {
                return reject(e);
            }
        });
    };
    InterestnPassionService.prototype.putExperienceStatus = function (params) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                var urlString = _this.config.apiMethod(__WEBPACK_IMPORTED_MODULE_2__Utility_Constant__["a" /* APIService */].experienceStatus);
                // urlString = urlString + '?userId=' + params.userId + '&ownerId=' + params.ownerId;
                //  urlString = urlString + '?userId=' + params.userId + '&ownerId=' + params.ownerId + '&competitionId=' + params.competitionId;
                _this.networkService.performRequest(__WEBPACK_IMPORTED_MODULE_2__Utility_Constant__["c" /* HTTP_METHOD */].POST, params, urlString, true, false).subscribe(function (data) {
                    //debugger;
                    resolve(data);
                }, function (error) {
                    console.log(error);
                    reject(error);
                });
            }
            catch (e) {
                return reject(e);
            }
        });
    };
    InterestnPassionService.prototype.deleteMediaImage = function (params) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                var urlString = _this.config.apiMethod(__WEBPACK_IMPORTED_MODULE_2__Utility_Constant__["a" /* APIService */].deleteMediaImage);
                // urlString = urlString + '?userId=' + params.userId + '&ownerId=' + params.ownerId + '&healthId=' + params.healthId;
                _this.networkService.performRequest(__WEBPACK_IMPORTED_MODULE_2__Utility_Constant__["c" /* HTTP_METHOD */].POST, params, urlString, true, true).subscribe(function (result) {
                    resolve(result.data);
                }, function (error) {
                    console.log(error);
                    //debugger;
                    reject(error);
                });
            }
            catch (e) {
                return reject(e);
            }
        });
    };
    InterestnPassionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__NetworkRequest_NetworkServices__["a" /* NetworkServices */], __WEBPACK_IMPORTED_MODULE_3__config_config__["a" /* ConfigProvider */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], InterestnPassionService);
    return InterestnPassionService;
}());

//# sourceMappingURL=InterestnPassionService.js.map

/***/ }),

/***/ 385:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserManager; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user__ = __webpack_require__(700);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__NetworkRequest_NetworkServices__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Utility_Constant__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config_config__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import { NetworkServices } from '../'

var UserManager = /** @class */ (function () {
    function UserManager(networkService, config, storage) {
        this.networkService = networkService;
        this.config = config;
        this.storage = storage;
    }
    UserManager.prototype.login = function (params) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                var urlString = _this.config.apiMethod(__WEBPACK_IMPORTED_MODULE_3__Utility_Constant__["a" /* APIService */].Login);
                // //debugger;
                _this.networkService.performRequest(__WEBPACK_IMPORTED_MODULE_3__Utility_Constant__["c" /* HTTP_METHOD */].POST, params, urlString, true, true).subscribe(function (data) {
                    // //debugger;
                    var user = new __WEBPACK_IMPORTED_MODULE_1__user__["a" /* User */](data.data.userInfoModel);
                    console.log('user ===== = ', user);
                    _this.storage.set("ActiveUser", data);
                    // this.activeUser = data.userInfoModel;
                    //var userData = JSON.parse(data);
                    resolve(_this.activeUser);
                }, function (error) {
                    console.log(error);
                    reject(error);
                });
            }
            catch (e) {
                return reject(e);
            }
        });
        // return Observable.throw(true);
    };
    UserManager.prototype.getActiveUser = function () {
        this.storage.get("userData").then(function (result) {
            if (result) {
                var user = new __WEBPACK_IMPORTED_MODULE_1__user__["a" /* User */](result);
                return user;
            }
            return null;
        });
    };
    UserManager.prototype.changePassword = function (params) {
        // //debugger;
        // var userId = window.localStorage.getItem('userId');
        // params.userId = userId;
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                var urlString = _this.config.apiMethod(__WEBPACK_IMPORTED_MODULE_3__Utility_Constant__["a" /* APIService */].ChangePassword);
                //debugger;
                console.log(__WEBPACK_IMPORTED_MODULE_3__Utility_Constant__["c" /* HTTP_METHOD */].POST);
                _this.networkService.performRequest(__WEBPACK_IMPORTED_MODULE_3__Utility_Constant__["c" /* HTTP_METHOD */].POST, params, urlString, true, true).subscribe(function (data) {
                    // //debugger;
                    resolve(data);
                }, function (error) {
                    console.log(error);
                    reject(error);
                });
            }
            catch (e) {
                return reject(e);
            }
        });
        // return Observable.throw(true);
    };
    UserManager.prototype.editProfile = function (params) {
        var _this = this;
        //debugger;
        var userId = window.localStorage.getItem('userId');
        params.append("userId", userId);
        console.log(userId);
        return new Promise(function (resolve, reject) {
            try {
                var urlString = _this.config.apiMethod(__WEBPACK_IMPORTED_MODULE_3__Utility_Constant__["a" /* APIService */].EditProfile);
                //debugger;
                console.log(__WEBPACK_IMPORTED_MODULE_3__Utility_Constant__["c" /* HTTP_METHOD */].POST);
                _this.networkService.performRequestProfile(__WEBPACK_IMPORTED_MODULE_3__Utility_Constant__["c" /* HTTP_METHOD */].POST, params, urlString, true, true).subscribe(function (data) {
                    //debugger;
                    _this.storage.set("ActiveUser", data);
                    // this.activeUser = data.userInfoModel;
                    //var userData = JSON.parse(data);
                    resolve(data);
                }, function (error) {
                    console.log(error);
                    reject(error);
                });
            }
            catch (e) {
                return reject(e);
            }
        });
    };
    UserManager.prototype.confirmpswrd = function (params) {
        // var userId = window.localStorage.getItem('userId');
        // params.append("userId",userId); 
        // console.log(userId);
        // //debugger;
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                var urlString = _this.config.apiMethod(__WEBPACK_IMPORTED_MODULE_3__Utility_Constant__["a" /* APIService */].ConfirmPass);
                //debugger;
                console.log(__WEBPACK_IMPORTED_MODULE_3__Utility_Constant__["c" /* HTTP_METHOD */].POST);
                _this.networkService.performRequest(__WEBPACK_IMPORTED_MODULE_3__Utility_Constant__["c" /* HTTP_METHOD */].POST, params, urlString, true, true).subscribe(function (data) {
                    // //debugger;
                    _this.storage.set("ActiveUser", data);
                    // this.activeUser = data.userInfoModel;
                    //var userData = JSON.parse(data);
                    resolve(_this.activeUser);
                }, function (error) {
                    console.log(error);
                    reject(error);
                });
            }
            catch (e) {
                return reject(e);
            }
        });
    };
    UserManager.prototype.uploadImage = function (imageToBeUpload, params) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            //debugger;
            var urlStrings = _this.config.apiMethod(__WEBPACK_IMPORTED_MODULE_3__Utility_Constant__["a" /* APIService */].UploadLifeStoryPic);
            _this.networkService.uploadImage(imageToBeUpload, params, urlStrings).then(function (data) {
                //loader.dismiss();
                // this.toastCtrl.create('Profile pic is uploaded');
                //this.navCtrl.setRoot(HomePage);
                //this.alertService.presentCongratsAlert('<span>A life story for "' + this.storyData.ownerName + '" has been created. Lets add some experiences and what makes you unique<span>').then((yes) => {
                // if (yes) { // this.toastCtrl.create('Created');
                // }
                resolve(data);
            }, function (error) {
                reject(error);
            });
        });
    };
    UserManager = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__NetworkRequest_NetworkServices__["a" /* NetworkServices */], __WEBPACK_IMPORTED_MODULE_4__config_config__["a" /* ConfigProvider */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
    ], UserManager);
    return UserManager;
}());

//# sourceMappingURL=UserManager.js.map

/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(394);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_toast__ = __webpack_require__(718);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_network__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_geolocation__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_social_sharing__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_http__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_device__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_local_notifications__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_ibeacon__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_android_permissions__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_NetworkRequest_NetworkServices__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_keyboard__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_WebServices_Common_SharedServices__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_WebServices_LifeStory_LifeStoryService__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_WebServices_LifeStory_InterestnPassionService__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__app_component__ = __webpack_require__(719);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_lifestory_life_story_life_story__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_auth_authentication_authentication__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_auth_forgot_forgot__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_common_terms_conditions_terms_conditions__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_profile_profile_picture_profile_picture__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_profile_basicinfo_basicinfo__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_settings_search_beacon_search_beacon__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_splash_splash__ = __webpack_require__(720);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__providers_camera_camera__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__ionic_native_bluetooth_serial__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__providers_auth_auth__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__providers_config_config__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__ionic_native_push__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__ionic_native_file_transfer__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__ionic_native_file__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__providers_back_button_back_button__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__providers_toast_service_toast_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__providers_alert_service_alert_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__providers_usercommon_services__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__providers_beaconprovider__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__ionic_native_in_app_browser__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__ionic_native_photo_viewer__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__components_profile_popover_profile_popover__ = __webpack_require__(721);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__ionic_native_file_chooser__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__ionic_native_file_path__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__providers_SharedTask_sharedtask__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__providers_WebServices_User_UserManager__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__providers_WebServices_Beacon_beaconService__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__ionic_native_deeplinks__ = __webpack_require__(381);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















// import { HomePage } from '../pages/lifestory/home/home';








// import { ExperienceDetailsPage } from '../pages/lifestory/experienceDetails/experienceDetails';



















//import { FabricService } from '../providers/fabricservice';


//import * as Constant from '../Utility/Constant';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_29__pages_splash_splash__["a" /* SplashPage */],
                __WEBPACK_IMPORTED_MODULE_21__app_component__["a" /* ModurnApp */],
                // HomePage,
                __WEBPACK_IMPORTED_MODULE_23__pages_auth_authentication_authentication__["a" /* AuthenticationPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_common_terms_conditions_terms_conditions__["a" /* TermsConditionsPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_auth_forgot_forgot__["a" /* ForgotPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_profile_profile_picture_profile_picture__["a" /* ProfilePicturePage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_profile_basicinfo_basicinfo__["a" /* BasicinfoPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_settings_search_beacon_search_beacon__["a" /* SearchBeaconPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_lifestory_life_story_life_story__["a" /* LifeStoryPage */],
                __WEBPACK_IMPORTED_MODULE_44__components_profile_popover_profile_popover__["a" /* ProfilePopoverComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_21__app_component__["a" /* ModurnApp */], {
                    backButtonText: '',
                    backButtonIcon: 'ios-arrow-back',
                    tabsPlacement: 'top',
                    scrollPadding: false,
                    scrollAssist: false,
                    autoFocusAssist: false,
                    platforms: {
                        ios: {
                            scrollAssist: false,
                        }
                    }
                }, {
                    links: [
                        { loadChildren: '../pages/addstory/add-career-academic/add-career-academic.module#AddCareerAcademicModule', name: 'AddCareerAcademicPage', segment: 'add-career-academic', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/addstory/add-competitions-training/add-competitions-training.module#AddCompetitionsTrainingModule', name: 'AddCompetitionsTrainingPage', segment: 'add-competitions-training', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/addstory/add-document/add-document.module#AddDocumentPageModule', name: 'AddDocumentPage', segment: 'add-document', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/addstory/add-experience/add-experience.module#AddExperienceModule', name: 'AddExperiencePage', segment: 'add-experience', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/addstory/add-favorite-charity/add-favorite-charity.module#AddFavoriteCharityModule', name: 'AddFavoriteCharityPage', segment: 'add-favorite-charity', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/addstory/add-friends-family/add-friends-family.module#AddFriendsFamilyModule', name: 'AddFriendsFamilyPage', segment: 'add-friends-family', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/addstory/add-health-journey/add-health-journey.module#AddHealthJourneyModule', name: 'AddHealthJourneyPage', segment: 'add-health-journey', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/addstory/add-image/add-image.module#AddImageModule', name: 'AddImagePage', segment: 'add-image', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/addstory/add-interest-passion/add-interest-passion.module#AddInterestPassionModule', name: 'AddInterestPassionPage', segment: 'add-interest-passion', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/addstory/add-link/add-link.module#AddLinkModule', name: 'AddLinkPage', segment: 'add-link', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/addstory/add-story/add-story.module#AddStoryModule', name: 'AddStoryPage', segment: 'add-story', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/addstory/career-academic/career-academic.module#CareerAcademicModule', name: 'CareerAcademicPage', segment: 'career-academic', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/addstory/competitions-training/competitions-training.module#CompetitionsTrainingPageModule', name: 'CompetitionsTrainingPage', segment: 'competitions-training', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/addstory/documents/documents.module#DocumentsPageModule', name: 'DocumentsPage', segment: 'documents', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/addstory/experience-creator/experience-creator.module#ExperienceCreatorModule', name: 'ExperienceCreatorPage', segment: 'experience-creator', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/addstory/favorite-charity/favorite-charity.module#FavoriteCharityPageModule', name: 'FavoriteCharityPage', segment: 'favorite-charity', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/addstory/health-journey/health-journey.module#HealthJourneyModule', name: 'HealthJourneyPage', segment: 'health-journey', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/addstory/interests-passions/interests-passions.module#InterestsPassionsModule', name: 'InterestsPassionsPage', segment: 'interests-passions', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/addstory/petexperience-creator/petexperience-creator.module#PetExperienceCreatorModule', name: 'PetExperienceCreatorPage', segment: 'petexperience-creator', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/addstory/relationship/relationship.module#RelationshipModule', name: 'RelationshipPage', segment: 'relationship', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lifestory/experienceDetails/experienceDetails.module#ExperienceDetailsModule', name: 'ExperienceDetailsPage', segment: 'experienceDetails', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lifestory/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lifestory/life-story/LifeStoryTab/experience-gallary/experience-gallary.module#ExperienceGallaryPageModule', name: 'ExperienceGallaryPage', segment: 'experience-gallary', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lifestory/life-story/LifeStoryTab/experience/experience.module#ExperiencePageModule', name: 'ExperiencePage', segment: 'experience', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lifestory/life-story/LifeStoryTab/familynfriends/familynfriends.module#FamilynFriendsModule', name: 'FamilynFriendsPage', segment: 'familynfriends', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lifestory/life-story/LifeStoryTab/gallery/gallery.module#GalleryModule', name: 'GalleryPage', segment: 'gallery', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lifestory/life-story/LifeStoryTab/media/media.module#SecondPageModule', name: 'MediaPage', segment: 'media', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lifestory/life-story/LifeStoryTab/profile/profile.module#ThirdPageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lifestory/lifeStoryCreation/new-life-storie1/new-life-storie1.module#NewLifeStorie1Module', name: 'NewLifeStorie1Page', segment: 'new-life-storie1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lifestory/lifeStoryCreation/new-life-storie2/new-life-storie2.module#NewLifeStorie2Module', name: 'NewLifeStorie2Page', segment: 'new-life-storie2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lifestory/lifeStoryCreation/new-life-storie3/new-life-storie3.module#NewLifeStorie3Module', name: 'NewLifeStorie3Page', segment: 'new-life-storie3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lifestory/lifeStoryCreation/new-life-storie4/new-life-storie4.module#NewLifeStorie4Module', name: 'NewLifeStorie4Page', segment: 'new-life-storie4', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lifestory/lifeStoryCreation/new-life-storie5/new-life-storie5.module#NewLifeStorie5Module', name: 'NewLifeStorie5Page', segment: 'new-life-storie5', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lifestory/lifeStoryCreation/new-pet-storie1/new-pet-storie1.module#NewPetStorie1Module', name: 'NewPetStorie1Page', segment: 'new-pet-storie1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lifestory/lifeStoryCreation/pet-story/pet-story.module#PetStoryModule', name: 'PetStoryPage', segment: 'pet-story', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/onboarding/onboarding.module#OnboardingModule', name: 'OnboardingPage', segment: 'onboarding', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/edit-profile/edit-profile.module#EditProfileModule', name: 'EditProfilePage', segment: 'edit-profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/my-profile/my-profile.module#MyProfileModule', name: 'MyProfilePage', segment: 'my-profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/change-password/change-password.module#ChangePasswordModule', name: 'ChangePasswordPage', segment: 'change-password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/samples/samples.module#SamplesPageModule', name: 'SamplesPage', segment: 'samples', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings/settings.module#SettingsModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicApp */]],
            entryComponents: [
                //OnboardingPage,
                __WEBPACK_IMPORTED_MODULE_21__app_component__["a" /* ModurnApp */],
                __WEBPACK_IMPORTED_MODULE_29__pages_splash_splash__["a" /* SplashPage */],
                // HomePage,
                __WEBPACK_IMPORTED_MODULE_23__pages_auth_authentication_authentication__["a" /* AuthenticationPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_common_terms_conditions_terms_conditions__["a" /* TermsConditionsPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_auth_forgot_forgot__["a" /* ForgotPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_profile_profile_picture_profile_picture__["a" /* ProfilePicturePage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_profile_basicinfo_basicinfo__["a" /* BasicinfoPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_settings_search_beacon_search_beacon__["a" /* SearchBeaconPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_lifestory_life_story_life_story__["a" /* LifeStoryPage */],
                __WEBPACK_IMPORTED_MODULE_44__components_profile_popover_profile_popover__["a" /* ProfilePopoverComponent */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_toast__["a" /* Toast */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_network__["a" /* Network */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_social_sharing__["a" /* SocialSharing */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_geolocation__["a" /* Geolocation */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_30__providers_camera_camera__["a" /* CameraProvider */],
                __WEBPACK_IMPORTED_MODULE_32__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_33__providers_config_config__["a" /* ConfigProvider */],
                __WEBPACK_IMPORTED_MODULE_45__ionic_native_file_chooser__["a" /* FileChooser */],
                __WEBPACK_IMPORTED_MODULE_46__ionic_native_file_path__["a" /* FilePath */],
                __WEBPACK_IMPORTED_MODULE_34__ionic_native_push__["a" /* Push */],
                __WEBPACK_IMPORTED_MODULE_35__ionic_native_file_transfer__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_36__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_device__["a" /* Device */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_keyboard__["a" /* Keyboard */],
                __WEBPACK_IMPORTED_MODULE_31__ionic_native_bluetooth_serial__["a" /* BluetoothSerial */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_local_notifications__["a" /* LocalNotifications */],
                __WEBPACK_IMPORTED_MODULE_37__providers_back_button_back_button__["a" /* HardwareBackButtonService */],
                __WEBPACK_IMPORTED_MODULE_38__providers_toast_service_toast_service__["a" /* ToastServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_39__providers_alert_service_alert_service__["a" /* AlertServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_40__providers_usercommon_services__["a" /* UserCommonServices */],
                __WEBPACK_IMPORTED_MODULE_41__providers_beaconprovider__["a" /* BeaconProvider */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_ibeacon__["a" /* IBeacon */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_android_permissions__["a" /* AndroidPermissions */],
                __WEBPACK_IMPORTED_MODULE_42__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_43__ionic_native_photo_viewer__["a" /* PhotoViewer */],
                __WEBPACK_IMPORTED_MODULE_19__providers_WebServices_LifeStory_LifeStoryService__["a" /* LifeStoryService */],
                __WEBPACK_IMPORTED_MODULE_20__providers_WebServices_LifeStory_InterestnPassionService__["a" /* InterestnPassionService */],
                __WEBPACK_IMPORTED_MODULE_16__providers_NetworkRequest_NetworkServices__["a" /* NetworkServices */],
                __WEBPACK_IMPORTED_MODULE_18__providers_WebServices_Common_SharedServices__["a" /* SharedServices */],
                __WEBPACK_IMPORTED_MODULE_48__providers_WebServices_User_UserManager__["a" /* UserManager */],
                __WEBPACK_IMPORTED_MODULE_47__providers_SharedTask_sharedtask__["a" /* SharedTaskProvider */],
                __WEBPACK_IMPORTED_MODULE_49__providers_WebServices_Beacon_beaconService__["a" /* BeaconService */],
                __WEBPACK_IMPORTED_MODULE_50__ionic_native_deeplinks__["a" /* Deeplinks */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertServiceProvider = /** @class */ (function () {
    function AlertServiceProvider(alertCtrl) {
        this.alertCtrl = alertCtrl;
        this.isPetFlow = "";
    }
    //change
    AlertServiceProvider.prototype.presentReLinkAlert = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var alert = _this.alertCtrl.create({
                subTitle: 'Sorry. It looks like you are linking a human life story with a pet life story',
                buttons: [
                    {
                        text: 'RE-LINK',
                        handler: function () {
                            console.log("Clicked Re-link");
                            alert.dismiss().then(function () { return resolve(true); });
                            return false;
                        }
                    }
                ],
                enableBackdropDismiss: false,
                cssClass: 'relink-alert'
            });
            return alert.present();
        });
    };
    AlertServiceProvider.prototype.newLifeStoryAlert = function (message) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var alert = _this.alertCtrl.create({
                title: 'A new life story has been found!',
                subTitle: 'The app has detected a life story near you',
                buttons: [
                    {
                        text: message,
                        handler: function () {
                            console.log("Clicked");
                            alert.dismiss().then(function () { return resolve(true); });
                            return false;
                        }
                    }
                    // {
                    //   text: 'ADD TO THIS Life story',
                    //   handler: () => {
                    //     console.log("Clicked ADD TO THIS Life story");
                    //   }
                    // }
                ],
                enableBackdropDismiss: false,
                cssClass: 'newlifestory-alert'
            });
            return alert.present();
        });
    };
    AlertServiceProvider.prototype.newViewerAlert = function (message, name) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var alert = _this.alertCtrl.create({
                subTitle: '<p class="cong-msg"><h1> ' + name + ' Life Story</h1>' + message + '</p>',
                buttons: [
                    {
                        text: 'VIEW LIFE STORY',
                        handler: function () {
                            console.log("Clicked VIEW LIFE STORY");
                            alert.dismiss().then(function () { return resolve(1); });
                        }
                    },
                    {
                        text: 'Skip',
                        role: 'cancel',
                        cssClass: 'cancelbtn',
                        handler: function () {
                            console.log("Cancel Clicked");
                            alert.dismiss().then(function () { return resolve(2); });
                        }
                    }
                ],
                enableBackdropDismiss: false,
                cssClass: 'newViewer-alert'
            });
            return alert.present();
        });
    };
    AlertServiceProvider.prototype.presentAlert = function (title, message) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: message,
            buttons: [
                {
                    text: 'OK'
                }
            ]
        });
        return alert.present();
    };
    AlertServiceProvider.prototype.presentErrorAlert = function (message) {
        return this.presentAlert('An error has occurred.', message);
    };
    // presentCongratsAlert(message: string) {
    //   return this.presentAlert('Congratulations!', message);
    // }
    AlertServiceProvider.prototype.presentCongratsAlert = function (title, message) {
        var _this = this;
        //debugger;
        return new Promise(function (resolve, reject) {
            if (localStorage.getItem("createStoryType") == "1") {
                _this.isPetFlow = 'no';
            }
            else {
                _this.isPetFlow = 'pet-follow';
            }
            var alert = _this.alertCtrl.create({
                // subTitle: '<p class="cong-msg ' + this.isPetFlow + ' "></p><h1>Congratulations!</h1>' + message,
                subTitle: '<p class="cong-msg ' + _this.isPetFlow + ' "></p><h1> ' + title + ' </h1>' + message,
                buttons: [
                    {
                        text: 'O.K.',
                        handler: function () {
                            alert.dismiss().then(function () { return resolve(true); });
                            return true;
                        }
                    }
                ],
                cssClass: 'my-alert'
            });
            return alert.present();
        });
    };
    AlertServiceProvider.prototype.presentAlertWithCallback = function (title, message) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var confirm = _this.alertCtrl.create({
                title: title,
                message: message,
                buttons: [{
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function () {
                            confirm.dismiss().then(function () { return resolve(false); });
                            return false;
                        }
                    }, {
                        text: 'Yes',
                        handler: function () {
                            confirm.dismiss().then(function () { return resolve(true); });
                            return false;
                        }
                    }]
            });
            return confirm.present();
        });
    };
    //logout
    AlertServiceProvider.prototype.presentLogOutAlert = function (message) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var confirm = _this.alertCtrl.create({
                message: message,
                buttons: [{
                        text: 'Yes',
                        handler: function () {
                            confirm.dismiss().then(function () { return resolve(true); });
                            return false;
                        }
                    },
                    {
                        text: 'No',
                        role: 'cancel',
                        handler: function () {
                            confirm.dismiss().then(function () { return resolve(false); });
                            return false;
                        }
                    }],
                cssClass: 'LogOut-Alert'
            });
            return confirm.present();
        });
    };
    AlertServiceProvider.prototype.confirmPasswordCallback = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var alert = _this.alertCtrl.create({
                title: 'Confirm Password',
                message: 'Please confirm your password to save your new email.',
                inputs: [
                    {
                        type: 'password',
                        name: 'currpassword',
                        placeholder: 'Current password'
                    }
                ],
                buttons: [
                    {
                        text: 'SAVE',
                        handler: function (data) {
                            console.log(data.currpassword);
                            return data.currpassword;
                        }
                    }
                ]
            });
            return alert.present();
        });
    };
    AlertServiceProvider.prototype.presentBluetoothWithCallback = function (title, message) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var confirm = _this.alertCtrl.create({
                title: title,
                message: message,
                buttons: [{
                        text: 'Don\'t Allow',
                        role: 'cancel',
                        handler: function () {
                            confirm.dismiss().then(function () { return resolve(false); });
                            return false;
                        }
                    }, {
                        text: 'OK',
                        handler: function () {
                            confirm.dismiss().then(function () { return resolve(true); });
                            return false;
                        }
                    }]
            });
            return confirm.present();
        });
    };
    AlertServiceProvider.prototype.beaconConfirmationAlertMsg = function (msg) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var alert = _this.alertCtrl.create({
                title: msg,
                buttons: [{
                        text: 'Yes',
                        handler: function () {
                            alert.dismiss().then(function () { return resolve(1); });
                            return false;
                        }
                    }, {
                        text: 'Cancel',
                        handler: function () {
                            alert.dismiss().then(function () { return resolve(2); });
                            return false;
                        }
                    }],
                enableBackdropDismiss: false,
                cssClass: 'beaconConfirmation-Alert'
            });
            return alert.present();
        });
    };
    AlertServiceProvider.prototype.beaconConfirmationAlert = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var alert = _this.alertCtrl.create({
                title: 'Are you sure you want to connect life story to this URN',
                buttons: [{
                        text: 'Yes',
                        handler: function () {
                            alert.dismiss().then(function () { return resolve(1); });
                            return false;
                        }
                    }, {
                        text: 'Cancel',
                        handler: function () {
                            alert.dismiss().then(function () { return resolve(2); });
                            return false;
                        }
                    }],
                enableBackdropDismiss: false,
                cssClass: 'beaconConfirmation-Alert'
            });
            return alert.present();
        });
    };
    AlertServiceProvider.prototype.lifestoryViewerConfirmationAlert = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var alert = _this.alertCtrl.create({
                title: 'Are you sure , You want to be the viewer of this life story?',
                buttons: [{
                        text: 'Yes',
                        handler: function () {
                            alert.dismiss().then(function () { return resolve(1); });
                            return false;
                        }
                    }, {
                        text: 'No',
                        handler: function () {
                            alert.dismiss().then(function () { return resolve(2); });
                            return false;
                        }
                    }],
                enableBackdropDismiss: false,
            });
            return alert.present();
        });
    };
    AlertServiceProvider.prototype.experienceCoachmark = function (message) {
        var alert = this.alertCtrl.create({
            subTitle: '<div class="arrow-up"></div><p class="cong-msg ' + this.isPetFlow + ' "></p>' + message,
            buttons: [
                {
                    text: 'GOT IT'
                }
            ],
            cssClass: 'my-coachmark'
        });
        return alert.present();
    };
    AlertServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], AlertServiceProvider);
    return AlertServiceProvider;
}());

//# sourceMappingURL=alert-service.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export errorMessage */
/* unused harmony export isNeedToShowToast */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NetworkServices; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_network__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_toPromise__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_Rx__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Utility_Constant__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Utility_Errors__ = __webpack_require__(698);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__toast_service_toast_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_file_transfer__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_file__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { ConfigProvider } from './config/config';
//import { Network } from '@ionic-native/network';












var errorMessage = '';
var isNeedToShowToast = false;
var NetworkServices = /** @class */ (function () {
    // public isNeedToShowToast:boolean = false;
    // public loadingCtrl: LoadingController;
    // Showing loader
    //public  loader:any;
    // public storage: any;
    function NetworkServices(http, 
        //public configService: ConfigProvider, 
        network, alertCtrl, storage, loadingCtrl, toastService, transfer, file) {
        // this.loader = this.loadingCtrl.create({
        //     content: 'Please wait...'
        //   });
        // this._baseUrl = configService.getApiURI();
        // this.headers = configService.getHeaders();
        this.http = http;
        this.network = network;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.toastService = toastService;
        this.transfer = transfer;
        this.file = file;
        ////debugger;
        // this.headers = this.getHttpHeaders();
    }
    NetworkServices.prototype.isOnline = function () {
        console.log(this.network.type);
        if (this.network.type != 'none') {
            return true;
        }
        else {
            return false;
        }
    };
    NetworkServices.prototype.extractPostData = function (res) {
        //debugger;
        // console.log("************************* Response Start ***********************");
        // console.log("Response :", res);
        // console.log("************************* Response End ***********************");
        if (res.status === 200) {
            return res.json() || {};
        }
        else {
            throw new Error(res.text());
        }
    };
    NetworkServices.prototype.handleError = function (error) {
        //debugger
        console.log('handle error');
        // In a real world app, you might use a remote logging infrastructure
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Response */]) {
            try {
                var body = error.json() || '';
                var err = body.error || body.message;
                errMsg = "" + err;
            }
            catch (e) {
                errMsg = "" + (error.statusText || '');
            }
        }
        else {
            try {
                errMsg = JSON.parse(error._body.message);
            }
            catch (e) {
                errMsg = error;
            }
        }
        console.error(errMsg);
        if (isNeedToShowToast) {
            if (errMsg == 'undefined') {
                errMsg = 'Something went wrong!!!';
            }
            //this.toastService.create(errMsg);
        }
        errorMessage = errMsg;
        return __WEBPACK_IMPORTED_MODULE_9_rxjs_Rx__["Observable"].throw(errMsg || 'Network Error');
    };
    NetworkServices.prototype.addMendatoryFields = function (params) {
        params.deviceToken = window.localStorage.getItem('deviceReg');
        params.deviceType = localStorage.getItem('deviceInfo');
        return params;
    };
    NetworkServices.prototype.addFormDataMendatoryFields = function (params) {
        // var deviceToken = window.localStorage.getItem('deviceReg');
        // alert(deviceToken +' ::::::' +localStorage.getItem('deviceInfo'));
        // alert(localStorage.getItem('deviceReg'));
        //params.deviceToken=deviceToken; 
        params.append("deviceToken", localStorage.getItem('deviceReg'));
        params.append("deviceType", localStorage.getItem('deviceInfo'));
        return params;
    };
    NetworkServices.prototype.getHttpHeaders = function () {
        // //debugger;
        //************* Set token in header if user is logged in
        var httpHeader = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        httpHeader.append('Accept', 'application/json');
        var token = window.localStorage.getItem('token');
        if (token != null)
            httpHeader.append("Authorization", token);
        return httpHeader;
    };
    NetworkServices.prototype.getMultipartHeaders = function () {
        var httpHeader = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        httpHeader.append("Cache-Control", "no-cache");
        httpHeader.append("Cache-Control", "no-store");
        httpHeader.append("Pragma", "no-cache");
        httpHeader.append('enctype', 'multipart/form-data');
        var token = window.localStorage.getItem('token');
        if (token != null)
            httpHeader.append("Authorization", token);
        return httpHeader;
    };
    //////////
    NetworkServices.prototype.performRequest = function (requestMethod, parameters, urlString, showLoader, showToast) {
        // //debugger;
        if (parameters === void 0) { parameters = null; }
        if (showLoader === void 0) { showLoader = false; }
        if (showToast === void 0) { showToast = false; }
        isNeedToShowToast = showToast;
        errorMessage = "";
        /// needtoShow = showToast;
        try {
            if (parameters == null) {
                parameters = {};
            }
            parameters = this.addMendatoryFields(parameters);
            if (!this.isOnline()) {
                if (isNeedToShowToast) {
                    this.toastService.create(__WEBPACK_IMPORTED_MODULE_11__Utility_Errors__["a" /* ErrorMessages */].InternetConnection);
                }
                return this.handleError(__WEBPACK_IMPORTED_MODULE_11__Utility_Errors__["a" /* ErrorMessages */].InternetConnection);
            }
            this.headers = this.getHttpHeaders();
            return this.performHTTPRequest(requestMethod, parameters, urlString, showLoader);
        }
        catch (e) {
            console.log('exception =', e);
            return null;
        }
    };
    NetworkServices.prototype.performRequestProfile = function (requestMethod, parameters, urlString, showLoader, showToast) {
        // //debugger;
        if (parameters === void 0) { parameters = null; }
        if (showLoader === void 0) { showLoader = false; }
        if (showToast === void 0) { showToast = false; }
        isNeedToShowToast = showToast;
        errorMessage = "";
        /// needtoShow = showToast;
        try {
            if (parameters == null) {
                parameters = {};
            }
            parameters = this.addFormDataMendatoryFields(parameters);
            if (!this.isOnline()) {
                if (isNeedToShowToast) {
                    this.toastService.create(__WEBPACK_IMPORTED_MODULE_11__Utility_Errors__["a" /* ErrorMessages */].InternetConnection);
                }
                return this.handleError(__WEBPACK_IMPORTED_MODULE_11__Utility_Errors__["a" /* ErrorMessages */].InternetConnection);
            }
            this.headers = this.getHttpHeaders();
            return this.performHTTPRequest(requestMethod, parameters, urlString, showLoader);
        }
        catch (e) {
            console.log('exception =', e);
            return null;
        }
    };
    NetworkServices.prototype.performMultipartRequest = function (requestMethod, parameters, urlString, showLoader, showToast) {
        // //debugger;
        if (parameters === void 0) { parameters = null; }
        if (showLoader === void 0) { showLoader = true; }
        if (showToast === void 0) { showToast = false; }
        isNeedToShowToast = showToast;
        errorMessage = "";
        /// needtoShow = showToast;
        try {
            parameters = this.addFormDataMendatoryFields(parameters);
            if (!this.isOnline()) {
                if (isNeedToShowToast) {
                    this.toastService.create(__WEBPACK_IMPORTED_MODULE_11__Utility_Errors__["a" /* ErrorMessages */].InternetConnection);
                }
                return this.handleError(__WEBPACK_IMPORTED_MODULE_11__Utility_Errors__["a" /* ErrorMessages */].InternetConnection);
            }
            this.headers = this.getMultipartHeaders();
            return this.performHTTPRequest(requestMethod, parameters, urlString, showLoader);
        }
        catch (e) {
            console.log('exception =', e);
            return null;
        }
    };
    NetworkServices.prototype.performHTTPRequest = function (requestMethod, parameters, urlString, showLoader) {
        if (showLoader === void 0) { showLoader = false; }
        // //debugger
        console.log("************************* Request Start ***********************");
        console.log("Request Method :", requestMethod);
        console.log("Request URL : ", urlString);
        console.log("Request Header :", this.headers);
        console.log("Parameters : ", parameters);
        console.log("showLoader : ", showLoader);
        console.log("************************* Request End  ***********************");
        var tprovider = this.toastService;
        var loader = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        if (showLoader) {
            loader.present();
        }
        var response;
        switch (requestMethod) {
            case __WEBPACK_IMPORTED_MODULE_10__Utility_Constant__["c" /* HTTP_METHOD */].GET:
                {
                    response = this.http.get(urlString, { headers: this.headers });
                }
                break;
            case __WEBPACK_IMPORTED_MODULE_10__Utility_Constant__["c" /* HTTP_METHOD */].POST:
                {
                    response = this.http.post(urlString, parameters, { headers: this.headers });
                }
                break;
            case __WEBPACK_IMPORTED_MODULE_10__Utility_Constant__["c" /* HTTP_METHOD */].PUT:
                {
                    response = this.http.put(urlString, parameters, { headers: this.headers });
                }
                break;
            case __WEBPACK_IMPORTED_MODULE_10__Utility_Constant__["c" /* HTTP_METHOD */].DELETE:
                {
                    response = this.http.delete(urlString, { headers: this.headers });
                }
                break;
            default:
                break;
        }
        //    .timeout(50000, new Error('timeout exceeded'))    
        return response.map(this.extractPostData)
            .catch(this.handleError)
            .finally(function () {
            //debugger;
            loader.dismiss();
            if (isNeedToShowToast) {
                tprovider.create(errorMessage);
            }
        });
    };
    NetworkServices.prototype.uploadImage = function (imageToBeUpload, params, urlString) {
        var _this = this;
        //debugger;
        params.deviceToken = localStorage.getItem('deviceReg');
        params.deviceType = localStorage.getItem('deviceInfo');
        return new Promise(function (resolve, reject) {
            try {
                // //debugger;
                if (imageToBeUpload == null || params == null || params.fileName == null || params.fileKey == null)
                    return reject("Either ImageTobeUpload,filename or filekey is null");
                var fileTransfer_1 = _this.transfer.create();
                _this.storage.get("userData").then(function (result) {
                    if (result) {
                        // //debugger;
                        var options = {
                            fileKey: params.fileKey,
                            fileName: params.fileName,
                            chunkedMode: false,
                            headers: {
                                'Content-Type': undefined,
                                'Authorization': result.token
                            }
                        };
                        options.params = params;
                        console.log("options:");
                        console.log(JSON.stringify(options));
                        fileTransfer_1.upload(imageToBeUpload, urlString, options)
                            .then(function (data) {
                            resolve(data);
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
    NetworkServices = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_12__toast_service_toast_service__["a" /* ToastServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_14__ionic_native_file__["a" /* File */]])
    ], NetworkServices);
    return NetworkServices;
}());

//# sourceMappingURL=NetworkServices.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchBeaconPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_beaconprovider__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_beacon_module__ = __webpack_require__(699);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_android_permissions__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_alert_service_alert_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_local_notifications__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_bluetooth_serial__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_toast_service_toast_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_usercommon_services__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_WebServices_Common_SharedServices__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_WebServices_Beacon_beaconService__ = __webpack_require__(333);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









// import { HomePage } from '../../lifestory/home/home';





var SearchBeaconPage = /** @class */ (function () {
    // myBeacons = [0,1,2,3,4,5,6,7,8];
    function SearchBeaconPage(navCtrl, navParams, platform, viewCtrl, toastCtrl, beaconProvider, events, bluetoothSerial, storage, loadingCtrl, androidPermissions, alertService, commonServices, localNotifications, sharedServices, beaconService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.beaconProvider = beaconProvider;
        this.events = events;
        this.bluetoothSerial = bluetoothSerial;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.androidPermissions = androidPermissions;
        this.alertService = alertService;
        this.commonServices = commonServices;
        this.localNotifications = localNotifications;
        this.sharedServices = sharedServices;
        this.beaconService = beaconService;
        this.beacons = [];
        this.scannedBeacons = [];
        this.flag = false;
        this.isAppInForeground = false;
        this.beaconsName = ['Jane Feldman', 'Charlie Watson', 'Billy', 'Brett Feldman', 'Pamela Feldman', 'Pammy', 'Janey', 'Chas', 'Feldman'];
        this.beaconsImg = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        // required for UI update
        this.zone = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */]({ enableLongStackTrace: false });
        this.findBeacons();
        // this.enableBlutooth();
        this.platform.ready().then(function () {
            console.log("---------------in view did load------------------");
            _this.localNotifications.hasPermission().then(function (granted) {
                if (!granted) {
                    console.log("not granted!");
                    this.localNotifications.registerPermission();
                }
                else {
                    console.log("Already granted!");
                }
            });
            // this.localNotifications.on("click", (notification) => {
            //   console.log("clicked on notification");
            // });
            // console.log("Current component: ", JSON.stringify(this.navCtrl.getActive()));
            // console.log(this.navCtrl.getActive().component);
            // if (this.navCtrl.getActive().component === SearchBeaconPage) {
            //   console.log("SearchPage");
            // } else {
            //   console.log("OtherPage");
            // }
            /*document.addEventListener("pause", () => {
              this.isAppInForeground = false;
              console.log("Pause");
            }, false);
      
            document.addEventListener("resume", () => {
              this.isAppInForeground = true;
              console.log("Resume");
            }, false);*/
        });
    }
    SearchBeaconPage.prototype.enableBlutooth = function () {
        var _this = this;
        this.bluetoothSerial.isEnabled().then(function (success) {
            console.log("Bluetooth is enabled");
        }, function (failure) {
            console.log("Bluetooth is *not* enabled");
            _this.appearBluetoothSettings();
        });
    };
    SearchBeaconPage.prototype.appearBluetoothSettings = function () {
        var _this = this;
        this.alertService.presentBluetoothWithCallback('', '<b>Turn Bluetooth on to allow “modUrn” to find Life Stories near you.<b>').then(function (yes) {
            if (yes) {
                _this.bluetoothSerial.enable();
            }
            else {
                // this.toastCtrl.create('Deny by user');
            }
        });
    };
    SearchBeaconPage.prototype.closeSearching = function () {
        var _this = this;
        this.beaconProvider.stopRanging();
        this.beaconProvider.initialise(2).then(function (isInitialised) {
            if (isInitialised) {
                _this.listenToBeaconEvents();
            }
        });
        this.navCtrl.setRoot('HomePage');
    };
    SearchBeaconPage.prototype.findBeacons = function () {
        var _this = this;
        this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION).then(function (success) { console.log('Permission granted'); }, function (err) { return _this.androidPermissions.requestPermissions(_this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION); });
        this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION, this.androidPermissions.PERMISSION.ACCESS_FINE_LOCATION]);
        this.platform.ready().then(function () {
            //debugger;
            _this.beaconProvider.initialise(1).then(function (isInitialised) {
                if (isInitialised) {
                    _this.listenToBeaconEvents();
                }
            });
        });
    };
    SearchBeaconPage.prototype.listenToBeaconEvents = function () {
        var _this = this;
        this.refreshIntervalId = setInterval(function () {
            _this.beacons = []; // do this after 1 minute
            console.log("do this after 60000 mili sec");
            //check blutooth enable or not.
            // this.enableBlutooth();
        }, 60000);
        this.events.subscribe('didRangeBeaconsInRegion', function (data) {
            //debugger;
            console.log("subscribe event");
            // update the UI with the beacon list
            _this.zone.run(function () {
                // this.beacons = [];
                var beaconList = data.beacons;
                if (beaconList.length == 0) {
                    return;
                }
                beaconList.forEach(function (beacon) {
                    var beaconObject = new __WEBPACK_IMPORTED_MODULE_4__models_beacon_module__["a" /* BeaconModel */](beacon);
                    _this.addBeaconIfNotExist(beaconObject);
                    console.log('beaconst count ====== ' + _this.beacons);
                });
                _this.checkBeaconExistance();
            });
        });
        this.events.subscribe('didEnterRegion', function (data) {
            console.log("subscribe event");
            // fire entry notification
            _this.localNotifications.schedule({
                id: 1,
                title: "modUrn",
                text: "A new life story found!"
            });
        });
    };
    SearchBeaconPage.prototype.checkBeaconExistance = function () {
        var _this = this;
        //debugger;
        if (this.scannedBeacons.length == 0) {
            return;
        }
        var beaconList = [];
        this.scannedBeacons.forEach(function (beacon) {
            var obj = {
                major: beacon.major,
                minor: beacon.minor,
                uuid: beacon.uuid
            };
            beaconList.push(obj);
        });
        var userDataInfo = {
            beaconExistenceList: beaconList
        };
        this.beaconService.checkBeconExistance(userDataInfo)
            .then(function (result) {
            //debugger;
            // console.log(typeof(result));
            var arr = Object.keys(result).map(function (k) { return result[k]; });
            _this.beacons = arr;
            _this.scannedBeacons = [];
            if (_this.beacons.length > 0) {
                /*this.localNotifications.schedule({
                  id: 1,
                  title: "modUrn",
                  text: "A new URN found!"
                });*/
            }
            console.log('beacons array length =' + _this.beacons.length);
        }, function (error) {
            console.log(error);
        });
    };
    SearchBeaconPage.prototype.addBeaconIfNotExist = function (beaconObject) {
        // console.log("isAppInForeground: ", this.isAppInForeground);
        // console.log("beaconObject " + beaconObject);
        // console.log("this.beacons.length " + this.beacons.length)
        if (this.scannedBeacons.length == 0) {
            beaconObject.name = this.beaconsName[this.beacons.length];
            beaconObject.img = this.beaconsImg[this.beacons.length];
            this.scannedBeacons.push(beaconObject);
        }
        var flag = false;
        this.scannedBeacons.forEach(function (beaconObj) {
            if (beaconObj.minor == beaconObject.minor) {
                flag = true;
                // console.log('foreach if flag = true;');
            }
            else {
                // console.log('else foreach flag = true;');
            }
        });
        if (!flag) {
            beaconObject.name = this.beaconsName[this.beacons.length];
            beaconObject.img = this.beaconsImg[this.beacons.length];
            this.scannedBeacons.push(beaconObject);
            console.log("Beacon pushed ", beaconObject.minor);
            /*this.localNotifications.schedule({
              id: 1,
              title: "modUrn",
              text: "New beacon found!"
            });*/
        }
    };
    SearchBeaconPage.prototype.ionViewWillLeave = function () {
        console.log("onPageWillLeave");
        this.beaconProvider.stopRanging();
        clearInterval(this.refreshIntervalId);
        // this.events.subscribe('stopMonitoringForRegion', (data) => {
        //   console.log('::::::stopMonitoringForRegion:::::::');
        // });
    };
    SearchBeaconPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.enableBlutooth();
        this.storage.get("userData").then(function (result) {
            if (result) {
                // Showing loader
                var loader_1 = _this.loadingCtrl.create({
                    content: 'Please wait...'
                });
                loader_1.present();
                try {
                    _this.commonServices.getData("api/v1/profile/relationDetail", result.token).subscribe(function (data) {
                        ////debugger;
                        var relType = JSON.parse(data);
                        if (relType.success) {
                            console.log(relType.success);
                        }
                        ;
                        _this.storage.set("relationData", relType.data);
                        // console.log(relType.data);
                        loader_1.dismiss();
                        // this.navCtrl.push(NewLifeStorie2Page, { userType: userType });
                    }, function (error) {
                        console.log(error);
                        loader_1.dismiss();
                        _this.toastCtrl.create(error);
                    });
                }
                catch (e) {
                    setTimeout(function () {
                        loader_1.dismiss();
                    }, 1000);
                }
            }
            else {
                console.log("else result");
            }
        });
        // this.fetchRelationship()
    };
    SearchBeaconPage.prototype.fetchRelationship = function () {
        var _this = this;
        //  //debugger;
        var params = new FormData();
        this.sharedServices.fetchRelationship(params)
            .then(function (data) {
            // //debugger;
            console.log('life story data =', data);
            _this.storage.set("relationData", data);
        }, function (error) {
            // //debugger;
            console.log(error);
        });
    };
    SearchBeaconPage.prototype.beaconSelected = function (beacon) {
        this.beaconProvider.stopMonitoring();
        this.navCtrl.setRoot('HomePage', { navData: beacon });
    };
    SearchBeaconPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-search-beacon',template:/*ion-inline-start:"/Users/kanikagupta/Documents/Modurn/modurn 2/src/pages/settings/search-beacon/search-beacon.html"*/'<ion-content no-bounce class="no-scroll">\n  <!--<div class="sigContain">\n    <div class="signal s1"></div>\n    <div class="signal s2"></div>\n    <div class="signal s3"></div>\n    <div class="signal s4"></div>\n  </div>-->\n  <div class="beacon-wrapper">\n    <img src="assets/img/animation.gif" alt="">\n\n    <div class="skip-btn">\n      <button ion-button clear (click)="closeSearching()">SKIP</button>\n    </div>\n\n	  <div (click)="beaconSelected(beacon)" class=" {{beacon.proximity == \'ProximityNear\' ? \'ProximityNear\'+in:\'ProximityImmediate\'+in}} beacon-person" *ngFor="let beacon of beacons; let in=index;">\n	  	<div class="img-ctn">\n          <img src="{{beacon.lifeStoryImage200?beacon.lifeStoryImage200:\'assets/img/defaultHuman.png\'}}" alt="">\n          \n			 </div>\n			<p class="person-name">{{beacon.lifeStoryName?beacon.lifeStoryName:"New Story"}}</p>\n	  </div>\n\n  </div>\n\n  \n<!--\n  <button ion-button round (click)="checkBeacons()">Check beacons</button>\n  <ion-list no-lines>\n\n    <ion-item *ngFor="let beacon of beacons">\n      <ion-grid>\n        <ion-row>\n          <ion-col>Major</ion-col>\n          <ion-col>{{beacon.major}}</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>Minor</ion-col>\n          <ion-col>{{beacon.minor}}</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>Proximity</ion-col>\n          <ion-col>{{beacon.proximity}}</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>Accuracy</ion-col>\n          <ion-col>{{beacon.accuracy}}</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>UUID</ion-col>\n          <ion-col>{{beacon.uuid}}</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>RSSI</ion-col>\n          <ion-col>{{beacon.rssi}}</ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n\n  </ion-list>-->\n</ion-content>'/*ion-inline-end:"/Users/kanikagupta/Documents/Modurn/modurn 2/src/pages/settings/search-beacon/search-beacon.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_9__providers_toast_service_toast_service__["a" /* ToastServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_beaconprovider__["a" /* BeaconProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_bluetooth_serial__["a" /* BluetoothSerial */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_android_permissions__["a" /* AndroidPermissions */],
            __WEBPACK_IMPORTED_MODULE_6__providers_alert_service_alert_service__["a" /* AlertServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_10__providers_usercommon_services__["a" /* UserCommonServices */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_local_notifications__["a" /* LocalNotifications */],
            __WEBPACK_IMPORTED_MODULE_11__providers_WebServices_Common_SharedServices__["a" /* SharedServices */],
            __WEBPACK_IMPORTED_MODULE_12__providers_WebServices_Beacon_beaconService__["a" /* BeaconService */]])
    ], SearchBeaconPage);
    return SearchBeaconPage;
}());

//# sourceMappingURL=search-beacon.js.map

/***/ }),

/***/ 698:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorMessages; });
var ErrorMessages = {
    InternetConnection: "No internet connection.",
    URL2: "http://example2.com",
    Relation: "Relation",
    Roles: "UserRoles"
};
//# sourceMappingURL=Errors.js.map

/***/ }),

/***/ 699:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BeaconModel; });
var BeaconModel = /** @class */ (function () {
    function BeaconModel(beacon) {
        this.beacon = beacon;
        this.uuid = beacon.uuid;
        this.major = beacon.major;
        this.minor = beacon.minor;
        this.rssi = beacon.rssi;
        this.proximity = beacon.proximity;
        this.accuracy = beacon.accuracy;
    }
    return BeaconModel;
}());

//# sourceMappingURL=beacon-module.js.map

/***/ }),

/***/ 700:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = /** @class */ (function () {
    function User(user) {
        this.user = user;
        // //debugger;
        console.log('user data = ', user);
        this.uid = user.userId;
        this.name = user.userName;
    }
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 719:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModurnApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_device__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_auth_authentication_authentication__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_push__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_settings_search_beacon_search_beacon__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_lifestory_life_story_life_story__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_deeplinks__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_WebServices_LifeStory_LifeStoryService__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_alert_service_alert_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_SharedTask_sharedtask__ = __webpack_require__(170);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










//import { FabricService } from '../providers/fabricservice';

// import { HomePage } from '../pages/lifestory/home/home';



// import { FabricService } from '../providers/fabricservice';
var ModurnApp = /** @class */ (function () {
    function ModurnApp(platform, statusBar, splashScreen, storage, push, device, app, events, 
        //public fabricService: FabricService,
        modalCtrl, deeplink, lifeStoryService, alertService, sharedTask) {
        var _this = this;
        this.platform = platform;
        this.storage = storage;
        this.push = push;
        this.device = device;
        this.app = app;
        this.events = events;
        this.modalCtrl = modalCtrl;
        this.deeplink = deeplink;
        this.lifeStoryService = lifeStoryService;
        this.alertService = alertService;
        this.sharedTask = sharedTask;
        this.isAppInForeground = false;
        if (this.platform.is('cordova')) {
            // statusBar.overlaysWebView(true);
            platform.ready().then(function () {
                statusBar.styleDefault();
                if (_this.platform.is('android')) {
                    console.log("Android");
                    statusBar.styleLightContent();
                }
                // statusBar.styleBlackTranslucent();
                splashScreen.hide();
                // keyboard.disableScroll(true);
                // keyboard.hideKeyboardAccessoryBar(false);
                _this.initPushNotification();
                // this.storage.set("deviceInfo", JSON.stringify(this.device.platform));
                localStorage.setItem("deviceInfo", _this.device.platform);
                localStorage.setItem("deviceReg", _this.device.uuid);
                _this.storage.get("onboardingStatus").then(function (resulst) {
                    if (resulst) {
                        _this.storage.get("loginStatus").then(function (resulst) {
                            if (resulst) {
                                _this.rootPage = __WEBPACK_IMPORTED_MODULE_8__pages_settings_search_beacon_search_beacon__["a" /* SearchBeaconPage */];
                            }
                            else {
                                _this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_auth_authentication_authentication__["a" /* AuthenticationPage */];
                            }
                        });
                    }
                    else {
                        _this.rootPage = "OnboardingPage";
                    }
                });
                document.addEventListener("pause", function () {
                    _this.isAppInForeground = false;
                    console.log("Pause");
                }, false);
                document.addEventListener("resume", function () {
                    _this.isAppInForeground = true;
                    console.log("Resume");
                }, false);
            });
        }
        // if (this.platform.is('android')) {
        //   console.log("Android");
        //   statusBar.styleLightContent();
        // } else {
        //   console.log("ios");
        //   statusBar.styleDefault();
        // }
    }
    ModurnApp.prototype.listenLogout = function () {
        var _this = this;
        this.events.subscribe("Logout", function () {
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_auth_authentication_authentication__["a" /* AuthenticationPage */]);
            //this.app.getRootNav().setRoot(AuthenticationPage);
            //this.rootPage = AuthenticationPage;
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_auth_authentication_authentication__["a" /* AuthenticationPage */]);
        });
    };
    ModurnApp.prototype.initPushNotification = function () {
        var _this = this;
        if (!this.platform.is('cordova')) {
            console.warn('Push notifications not initialized. Cordova is not available - Run in physical device');
            return;
        }
        // to check if we have permission
        this.push.hasPermission()
            .then(function (res) {
            if (res.isEnabled) {
                console.log('We have permission to send push notifications');
            }
            else {
                console.log('We do not have permission to send push notifications');
            }
        });
        // to initialize push notifications
        var options = {
            android: {
                senderID: '529111944854'
            },
            ios: {
                alert: 'true',
                badge: false,
                sound: 'true'
            },
            windows: {}
        };
        var pushObject = this.push.init(options);
        pushObject.on('notification').subscribe(function (notification) {
            console.log('Received a notification', notification);
            console.log('Experience id: ', notification.additionalData.experienceId);
            console.log('Owner id: ', notification.additionalData.ownerId);
            var userId = localStorage.getItem("userId");
            if (!userId) {
                _this.sharedTask.showToastMessage('To this lifestory you must be logged in.');
                return;
            }
            var data = {
                'experienceId': notification.additionalData.experienceId, 'userId': userId, 'ownerId': notification.additionalData.ownerId
            };
            if (_this.isAppInForeground) {
                console.log("App is open");
            }
            else {
                console.log("App is not open");
                //debugger;
                var modal = _this.modalCtrl.create('ExperienceDetailsPage', { expIdData: data });
                modal.present();
            }
        });
        pushObject.on('registration').subscribe(function (registration) {
            console.log('Device registered', registration.registrationId);
            localStorage.setItem("deviceReg", registration.registrationId);
        });
        pushObject.on('error').subscribe(function (error) { return console.error('Error with Push plugin', error); });
    };
    ModurnApp.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.platform.ready().then(function () {
            //debugger;
            _this.deeplink.routeWithNavController(_this.nav, {}).subscribe(function (match) {
                //debugger;
                try {
                    //  alert("success" + JSON.stringify(match));
                    console.log("success" + JSON.stringify(match));
                    if (!localStorage.getItem("userId")) {
                        _this.sharedTask.showToastMessage('To become viewer of this lifestory you must be logged in.');
                        return;
                    }
                    //debugger
                    var lifeStoryId = (match.$link.path).split(':')[1];
                    var requestedUserId;
                    if ((match.$link.path).split(':').length >= 3) {
                        requestedUserId = (match.$link.path).split(':')[2];
                        if (requestedUserId != localStorage.getItem("userId")) {
                            _this.sharedTask.showToastMessage('You have been logged in with different user.');
                            return;
                        }
                    }
                    _this.alertService.beaconConfirmationAlertMsg("Are you sure you'd like to be added to this lifestory as a viewer?").then(function (clicked) {
                        if (clicked == 1) {
                            //debugger;
                            _this.connectToLifeStoryAsViewer(lifeStoryId);
                            // this.toastCtrl.create('Re-link');
                        }
                        else if (clicked == 2) {
                            //this._app.getRootNav().setRoot(HomePage);
                        }
                    });
                }
                catch (e) {
                    console.log(e);
                }
                //console.log('Successfully matched route', match);
            }, function (nomatch) {
                alert("failure" + JSON.stringify(nomatch));
                // nomatch.$link - the full link data
                console.error('Got a deeplink that didn\'t match', nomatch);
            });
        });
    };
    ModurnApp.prototype.connectToLifeStoryAsViewer = function (ownerId) {
        var _this = this;
        var params = {
            "ownerId": ownerId,
        };
        this.lifeStoryService.connectLifeStoryAsViewer(params)
            .then(function (result) {
            //debugger;
            if (result.responseCode == 200) {
                _this.sharedTask.showToastMessage("User is successfully added as a viewer");
                console.log("Check for beacon paired:: ", result.data);
                console.log("inside connectToLifeStoryAsViewer");
                _this.nav.push(__WEBPACK_IMPORTED_MODULE_9__pages_lifestory_life_story_life_story__["a" /* LifeStoryPage */], {
                    lifeData: result.data,
                });
            }
        }, function (error) {
            console.log(error);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('nav'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Nav */])
    ], ModurnApp.prototype, "nav", void 0);
    ModurnApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/kanikagupta/Documents/Modurn/modurn 2/src/app/app.html"*/'<ion-nav #nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/kanikagupta/Documents/Modurn/modurn 2/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_push__["a" /* Push */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_device__["a" /* Device */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_deeplinks__["a" /* Deeplinks */],
            __WEBPACK_IMPORTED_MODULE_11__providers_WebServices_LifeStory_LifeStoryService__["a" /* LifeStoryService */],
            __WEBPACK_IMPORTED_MODULE_12__providers_alert_service_alert_service__["a" /* AlertServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_13__providers_SharedTask_sharedtask__["a" /* SharedTaskProvider */]])
    ], ModurnApp);
    return ModurnApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_config__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_network__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_throw__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_toPromise__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_Rx__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_toast_service_toast_service__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










// import { Observable } from 'rxjs/Observable';


var AuthProvider = /** @class */ (function () {
    function AuthProvider(http, configService, network, alertCtrl, storage, toastCtrl) {
        this.http = http;
        this.configService = configService;
        this.network = network;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        console.log('Hello AuthServiceProvider Provider');
        this._baseUrl = configService.getApiURI();
        this.headers = configService.getHeaders();
    }
    AuthProvider.prototype.isOnline = function () {
        console.log(this.network.type);
        if (this.network.type != 'none') {
            return true;
        }
        else {
            return false;
        }
    };
    AuthProvider.prototype.getAuthenticate = function (credentials, type) {
        credentials.deviceToken = localStorage.getItem("deviceReg");
        credentials.deviceType = localStorage.getItem("deviceInfo");
        if (this.isOnline()) {
            return this.http.post(this._baseUrl + type, credentials, { headers: this.headers })
                .map(this.extractPostData)
                .catch(this.handleError);
        }
        else {
            this.toastCtrl.create('No internet connection');
        }
    };
    AuthProvider.prototype.getAuthenticateLogOut = function (credentials, type) {
        credentials.deviceToken = localStorage.getItem("deviceReg");
        credentials.deviceType = localStorage.getItem("deviceInfo");
        var token = window.localStorage.getItem('token');
        console.log("Token:: ", token);
        console.log("Headers:: ", this.headers);
        //debugger;
        // console.log("Headers:: ",this.headers.match("Authorization", token));
        // console.log("Headers:: ",this.headers._headers["[[Entries]]"][1].value);
        if (token != undefined)
            this.headers.append("Authorization", token);
        if (this.isOnline()) {
            return this.http.post(this._baseUrl + type, credentials, { headers: this.headers })
                .map(this.extractPostData)
                .catch(this.handleError);
        }
        else {
            this.toastCtrl.create('No internet connection');
        }
    };
    // this is modified
    AuthProvider.prototype.getApiReqeust = function (url) {
        return this.http.get(this._baseUrl + url).do(function (data) {
            // console.log('All: ' + JSON.stringify(data));
        })
            .map(function (res) {
            var result = res;
            return result;
        })
            .catch(this.handleError);
    };
    AuthProvider.prototype.extractPostData = function (res) {
        // console.log(res);
        if (res.status === 200) {
            return res.text() || {};
        }
        else {
            throw new Error(res.text());
        }
    };
    AuthProvider.prototype.handleError = function (error) {
        // In a real world app, you might use a remote logging infrastructure
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || body.message;
            errMsg = "" + err;
            //errMsg = `${error.statusText || ''}`;
        }
        else {
            // errMsg = error._body ? error._body : error.toString();
            errMsg = JSON.parse(error._body.message);
        }
        // console.log(errMsg);
        return __WEBPACK_IMPORTED_MODULE_10_rxjs_Rx__["Observable"].throw(errMsg);
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_11__providers_toast_service_toast_service__["a" /* ToastServiceProvider */]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 720:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SplashPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_auth_authentication_authentication__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_settings_search_beacon_search_beacon__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SplashPage = /** @class */ (function () {
    function SplashPage(navCtrl, storage) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.splash = true;
    }
    SplashPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad SplashPage');
        setTimeout(function () {
            ////debugger;
            _this.splash = false;
            _this.storage.get("onboardingStatus").then(function (resulst) {
                if (resulst) {
                    _this.storage.get("loginStatus").then(function (resulst) {
                        if (resulst) {
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_settings_search_beacon_search_beacon__["a" /* SearchBeaconPage */]);
                        }
                        else {
                            // this.rootPage = AuthenticationPage;
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_auth_authentication_authentication__["a" /* AuthenticationPage */]);
                        }
                    });
                }
                else {
                    // this.rootPage = OnboardingPage;
                    _this.navCtrl.setRoot("OnboardingPage");
                }
            });
        }, 1000);
    };
    SplashPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-splash',template:/*ion-inline-start:"/Users/kanikagupta/Documents/Modurn/modurn 2/src/pages/splash/splash.html"*/'<div id="splash-overlay" [style.display]="splash ? \'flex\': \'none\'">  \n  <img src="assets/img/ModURN.gif">\n</div>'/*ion-inline-end:"/Users/kanikagupta/Documents/Modurn/modurn 2/src/pages/splash/splash.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], SplashPage);
    return SplashPage;
}());

//# sourceMappingURL=splash.js.map

/***/ }),

/***/ 721:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePopoverComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfilePopoverComponent = /** @class */ (function () {
    function ProfilePopoverComponent(viewCtrl) {
        this.viewCtrl = viewCtrl;
        console.log('Hello ProfilePopoverComponent Component');
        this.text = 'Hello World';
    }
    ProfilePopoverComponent.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    ProfilePopoverComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'profile-popover',template:/*ion-inline-start:"/Users/kanikagupta/Documents/Modurn/modurn 2/src/components/profile-popover/profile-popover.html"*/'<ion-list>\n  <button ion-item (click)="close()">How it works</button>\n  <button ion-item (click)="close()">Feedback</button>\n  <button ion-item (click)="close()">App info</button>\n</ion-list>'/*ion-inline-end:"/Users/kanikagupta/Documents/Modurn/modurn 2/src/components/profile-popover/profile-popover.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ViewController */]])
    ], ProfilePopoverComponent);
    return ProfilePopoverComponent;
}());

//# sourceMappingURL=profile-popover.js.map

/***/ })

},[389]);
//# sourceMappingURL=main.js.map