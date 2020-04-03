webpackJsonp([38],{

/***/ 722:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDocumentPageModule", function() { return AddDocumentPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_document__ = __webpack_require__(765);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddDocumentPageModule = /** @class */ (function () {
    function AddDocumentPageModule() {
    }
    AddDocumentPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__add_document__["a" /* AddDocumentPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_document__["a" /* AddDocumentPage */]),
            ],
        })
    ], AddDocumentPageModule);
    return AddDocumentPageModule;
}());

//# sourceMappingURL=add-document.module.js.map

/***/ }),

/***/ 765:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddDocumentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_keyboard__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Utility_Constant__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_transfer__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_config_config__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_chooser__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_toast_service_toast_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_file_path__ = __webpack_require__(387);
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












var AddDocumentPage = /** @class */ (function () {
    function AddDocumentPage(navCtrl, navParams, keyboard, fb, platform, transfer, storage, configService, fileChooser, toastCtrl, modalCtrl, viewCtrl, loadingCtrl, filePath, files) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.keyboard = keyboard;
        this.fb = fb;
        this.platform = platform;
        this.transfer = transfer;
        this.storage = storage;
        this.configService = configService;
        this.fileChooser = fileChooser;
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.filePath = filePath;
        this.files = files;
        this.ownerId = 0;
        this.urnType = 0;
        this.isSubmit = false;
        this.isValid = false;
        this.fileUpload = '';
        //debugger;
        this.ownerId = navParams.data.ownerId;
        this.urnType = navParams.data.urnType;
        this._baseUrl = configService.getApiURI();
        this.addDocumentForm = fb.group({
            'title': [null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_4__Utility_Constant__["j" /* WITHOUT_FIRST_REGES_SPECIAL */])]],
        });
    }
    AddDocumentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddDocumentPage');
    };
    AddDocumentPage.prototype.closeAddDocument = function () {
        this.keyboard.close();
        this.navCtrl.pop();
    };
    AddDocumentPage.prototype.uploadPdf = function () {
        //debugger;
        if (this.platform.is('ios')) {
            FilePicker.pickFile(function (path) {
                var _this = this;
                var fileNameCount = path.lastIndexOf("/");
                var fileName = path.substr(fileNameCount + 1);
                var dirPath = path.substr(0, fileNameCount);
                var directoryPath = "file:///" + dirPath;
                this.getFileSize(directoryPath, fileName).then(function (nativeURL) {
                    console.log("nativeURL", nativeURL);
                    _this.uploadiOS(nativeURL);
                }).catch(function (e) {
                    console.log("error", e);
                });
            }.bind(this), function (err) {
                console.log("error file ios", err);
            }.bind(this));
        }
        else {
            this.uploadAndroid();
        }
    };
    AddDocumentPage.prototype.uploadiOS = function (filePath) {
        var loader = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loader.present();
        // filePath = "file://" + filePath;
        this.file = filePath;
        console.log("File URL:: ", this.file);
        this.fileUpload = this.file.substring(this.file.lastIndexOf('/') + 1);
        this.fileUpload = this.fileUpload.split('%20').join(' ');
        loader.dismiss();
        // const fileTransfer: FileTransferObject = this.transfer.create();
        // this.storage.get("userData").then((result) => {
        //   if (result) {
        //     let options: FileUploadOptions = {
        //       fileKey: 'pdfFile ',
        //       fileName: 'name.pdf',
        //       headers: {
        //         'Content-Type': undefined,
        //         'Authorization': result.token
        //       },
        //       params: { "app_key": "Testappkey" },
        //       chunkedMode: false,
        //     }
        //     var params = {
        //       ownerId: this.ownerId,
        //       title: this.addDocumentForm.value.title,
        //     };
        //     options.params = params;
        //     console.log("options:");
        //     console.log(JSON.stringify(options));
        //     fileTransfer.upload(filePath, this._baseUrl + 'api/v1/story/pdfFile', options)
        //       .then((data) => {
        //         console.log("Success!")
        //         console.log(data.response);
        //       }, (err) => {
        //         console.log(err);
        //       });
        //   } else {
        //     // this.toastCtrl.create('Something went wrong!');
        //   }
        // })
        //   .catch(e => console.log(e));
    };
    AddDocumentPage.prototype.uploadAndroid1 = function () {
        var _this = this;
        this.fileChooser.open()
            .then(function (uri) {
            // console.log(uri)
            _this.file = uri;
            console.log("File URL:: ", _this.file);
            // const fileTransfer: FileTransferObject = this.transfer.create();
            // this.storage.get("userData").then((result) => {
            //   if (result) {
            //     let options: FileUploadOptions = {
            //       fileKey: 'pdfFile ',
            //       fileName: 'name.pdf',
            //       headers: {
            //         'Content-Type': undefined,
            //         'Authorization': result.token
            //       },
            //       params: { "app_key": "Testappkey" },
            //       chunkedMode: false,
            //     }
            //     var params = {
            //       ownerId: this.ownerId,
            //       title: this.addDocumentForm.value.title,
            //     };
            //     options.params = params;
            //     console.log("options:");
            //     console.log(JSON.stringify(options));
            //     fileTransfer.upload(uri, this._baseUrl + 'api/v1/story/pdfFile', options)
            //       .then((data) => {
            //         console.log("Success!")
            //         console.log(data.response);
            //       }, (err) => {
            //         console.log(err);
            //       });
            //   } else {
            //     // this.toastCtrl.create('Something went wrong!');
            //   }
            // })
            //   .catch(e => console.log(e));
        });
    };
    AddDocumentPage.prototype.uploadAndroid = function () {
        var _this = this;
        this.fileChooser.open().then(function (uri) {
            _this.filePath.resolveNativePath(uri)
                .then(function (filePath) {
                var n = filePath.lastIndexOf("/");
                var directorypath = filePath.substr(0, n);
                var fileName = filePath.substr(n + 1);
                _this.file = filePath;
                _this.fileUpload = fileName;
                console.log("Filename: ", fileName);
            }).catch(function (err) {
                // this.uploadedDocuments.splice(id, 1);
                // this.presentToast(this.documentErrMsg);
                console.log("Error: ", err);
            });
        }).catch(function (err) {
            console.log("Android FilePicker error", err);
        });
    };
    AddDocumentPage.prototype.addDocument = function (value) {
        var _this = this;
        this.isValid = true;
        this.isSubmit = true;
        //debugger;
        if (this.file != undefined) {
            this.isSubmit = false;
            if (this.addDocumentForm.valid) {
                this.isValid = false;
                var fileTransfer_1 = this.transfer.create();
                this.storage.get("userData").then(function (result) {
                    if (result) {
                        var loader_1 = _this.loadingCtrl.create({
                            content: 'Please wait...'
                        });
                        loader_1.present();
                        console.log("fileName:: ", _this.file.substring(_this.file.lastIndexOf('/') + 1));
                        var options = {
                            fileKey: 'pdfFile ',
                            fileName: _this.file.substring(_this.file.lastIndexOf('/') + 1),
                            headers: {
                                'Content-Type': undefined,
                                'Authorization': result.token
                            },
                            params: { "app_key": "Testappkey" },
                            chunkedMode: false,
                        };
                        var params = {
                            ownerId: _this.ownerId,
                            title: value.title,
                        };
                        options.params = params;
                        console.log("options:");
                        console.log(JSON.stringify(options));
                        fileTransfer_1.upload(_this.file, _this._baseUrl + 'api/v1/story/pdfFile', options, true)
                            .then(function (data) {
                            console.log("Success!");
                            console.log(data.response);
                            loader_1.dismiss();
                            var documentDataObject;
                            documentDataObject = data;
                            if (documentDataObject.responseCode == '200') {
                                _this.toastCtrl.create('Document added successfully');
                                _this.closeAddDocument();
                                // let modal = this.modalCtrl.create("DocumentsPage", { ownerId: this.ownerId, urnType:this.urnType,});
                                // modal.present();
                            }
                            // this.viewCtrl.dismiss();
                        }, function (err) {
                            loader_1.dismiss();
                            console.log(err);
                            var m = err.code;
                            console.log("m== ", m);
                            if (m == 3) {
                                _this.toastCtrl.create('Either your file format or file size is incorrect.');
                            }
                            else {
                                var r = JSON.parse(err.body);
                                console.log(r.message);
                                _this.toastCtrl.create(r.message);
                            }
                        });
                    }
                    else {
                        // this.toastCtrl.create('Something went wrong!');
                    }
                })
                    .catch(function (e) { return console.log(e); });
            }
            else {
                this.isValid = true;
                console.log("False");
            }
        }
        else {
            this.isSubmit = true;
            console.log("Missing Document");
        }
    };
    AddDocumentPage.prototype.getFileSize = function (directoryPath, fileName) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.files.resolveDirectoryUrl(directoryPath).then(function (directoryObj) {
                console.log("directoryObj", directoryObj);
                _this.files.getFile(directoryObj, fileName, {}).then(function (fileEntry) {
                    console.log("fileEntry", fileEntry);
                    resolve(fileEntry.nativeURL);
                }).catch(function (err) { return reject("fileSizeError"); });
            }).catch(function (err) { return reject("fileSizeError"); });
        });
    };
    AddDocumentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-document',template:/*ion-inline-start:"/Users/kanikagupta/Documents/Modurn/modurn 2/src/pages/addstory/add-document/add-document.html"*/'<ion-header no-border>\n  <ion-navbar>\n\n    <ion-buttons left (click)="closeAddDocument()">\n      <button class="btnColor cross-icn" ion-button icon-only>\n        <ion-icon class="icon icon-cross" item-right></ion-icon>\n        <!--<img src="assets/img/icCross@3x.png" />-->\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content class="story-outer">\n  <div padding class="story-cont">\n    <h1 class="{{urnType == 1 ? \'human-follow\':\'pet-follow\'}}">Add a document</h1>\n  </div>\n\n  <div *ngIf="fileUpload == \'\'" class="image-outer" tappable (click)="uploadPdf()">\n    <div class="img-icon">\n      <img src="{{(urnType == 1) ? \'assets/img/file.png\':\'assets/img/file1.png\' }}" class="icon" alt="File">\n      <p>Click to add a document</p>\n    </div>\n  </div>\n  <div *ngIf="fileUpload != \'\'" class="image-outer" tappable (click)="uploadPdf()">\n    <div style="overflow: hidden;" class="img-icon">\n      <img src="{{(urnType == 1) ? \'assets/img/file-upload.png\':\'assets/img/file-upload1.png\' }}" class="icon" alt="File">\n      <p>{{fileUpload}}</p>\n    </div>\n  </div>\n  <div *ngIf="isSubmit && file==undefined">\n    <div padding class="error-box">\n      Document is required!</div>\n  </div>\n\n  <form padding [formGroup]="addDocumentForm">\n\n    <ion-list class="image-form-list">\n\n      <ion-item class="image-form">\n        <ion-label stacked>Document title</ion-label>\n        <ion-input type="text" [formControl]="addDocumentForm.controls[\'title\']" spellcheck="true" autoComplete="true" autocorrect="true"></ion-input>\n      </ion-item>\n      <div *ngIf="isValid">\n        <div class="error-box" *ngIf="!addDocumentForm.controls[\'title\'].valid && addDocumentForm.controls[\'title\'].hasError(\'required\')">\n          Document title is required!</div>\n        <div class="error-box" *ngIf="addDocumentForm.controls[\'title\'].hasError(\'pattern\')">Please enter valid title.</div>\n      </div>\n\n    </ion-list>\n\n    <button ion-button class="mr-t50 button_color" full color="dark" (click)="addDocument(addDocumentForm.value)">ADD</button>\n\n  </form>\n\n</ion-content>'/*ion-inline-end:"/Users/kanikagupta/Documents/Modurn/modurn 2/src/pages/addstory/add-document/add-document.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_keyboard__["a" /* Keyboard */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Platform */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_7__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_chooser__["a" /* FileChooser */], __WEBPACK_IMPORTED_MODULE_9__providers_toast_service_toast_service__["a" /* ToastServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_10__ionic_native_file_path__["a" /* FilePath */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_file__["a" /* File */]])
    ], AddDocumentPage);
    return AddDocumentPage;
}());

//# sourceMappingURL=add-document.js.map

/***/ })

});
//# sourceMappingURL=38.js.map