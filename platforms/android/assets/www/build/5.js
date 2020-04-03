webpackJsonp([5],{

/***/ 747:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryModule", function() { return GalleryModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gallery__ = __webpack_require__(790);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_bg_image_with_loader_bg_image_with_loader_module__ = __webpack_require__(763);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// import 'hammerjs';
// import { NgxGalleryModule } from 'ngx-gallery';
var GalleryModule = /** @class */ (function () {
    function GalleryModule() {
    }
    GalleryModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__gallery__["a" /* GalleryPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__gallery__["a" /* GalleryPage */]), __WEBPACK_IMPORTED_MODULE_3__components_bg_image_with_loader_bg_image_with_loader_module__["a" /* BgImageWithLoaderPageModule */]
            ], exports: [__WEBPACK_IMPORTED_MODULE_2__gallery__["a" /* GalleryPage */]
            ],
        })
    ], GalleryModule);
    return GalleryModule;
}());

//# sourceMappingURL=gallery.module.js.map

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

/***/ 790:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_photo_viewer__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_WebServices_Common_SharedServices__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_WebServices_LifeStory_InterestnPassionService__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Utility_Constant__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var GalleryPage = /** @class */ (function () {
    function GalleryPage(navCtrl, navParams, viewCtrl, actionSheetCtrl, photoViewer, event, sharedServices, interestnPassion) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.photoViewer = photoViewer;
        this.event = event;
        this.sharedServices = sharedServices;
        this.interestnPassion = interestnPassion;
        this.imagesName = [];
        this.nextPage = '1';
        this.image = null;
        this.container = null;
        this.transforms = [];
        this.adjustScale = 1;
        this.adjustDeltaX = 0;
        this.adjustDeltaY = 0;
        this.role = 0;
        this.currentScale = null;
        this.currentDeltaX = null;
        this.currentDeltaY = null;
        this.index = 0;
        this.mediaLoaded = false;
        this.setMediaLoaded = function () {
            setTimeout(function () { return _this.mediaLoaded = true; }, 200);
        };
        // ionViewDidLoad() {
        //   this.image = this.element.nativeElement;
        //   this.container = this.elementParent.nativeElement;
        //   // Prevent long press saving on mobiles.
        //   this.container.addEventListener('touchstart', function(e) {
        //     e.preventDefault();
        //   });
        //   this.init();
        // }
        /*
      Initialize listeners for gestures
      */
        this.init = function () {
            //create gesture obj w/ ref to DOM element
            _this.gesture = new __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Gesture */](_this.element.nativeElement);
            //listen for the gesture
            _this.gesture.listen();
            _this.gesture.on('doubletap', function (ev) {
                _this.transforms = [];
                _this.adjustScale += 1;
                if (_this.adjustScale >= 4)
                    _this.adjustScale = 1;
                _this.transforms.push('scale(' + _this.adjustScale + ')');
                _this.container.style.transform = _this.transforms.join(' ');
            });
            _this.gesture.on("pinch", function (ev) {
                _this.transforms = [];
                // Adjusting the current pinch/pan event properties using the previous ones set when they finished touching
                _this.currentScale = _this.adjustScale * ev.scale;
                _this.currentDeltaX = _this.adjustDeltaX + (ev.deltaX / _this.currentScale);
                _this.currentDeltaY = _this.adjustDeltaY + (ev.deltaY / _this.currentScale);
                // Concatinating and applying parameters.
                if (_this.currentScale < 1) {
                    _this.currentScale = 1;
                    _this.currentDeltaX = 0;
                    _this.currentDeltaY = 0;
                }
                _this.transforms.push('scale(' + _this.currentScale + ')');
                _this.transforms.push('translate(' + _this.currentDeltaX + 'px,' + _this.currentDeltaY + 'px)');
                _this.container.style.transform = _this.transforms.join(' ');
            });
            _this.gesture.on("pinchend", function (ev) {
                // Saving the final transforms for adjustment next time the user interacts.
                _this.adjustScale = _this.currentScale;
                _this.adjustDeltaX = _this.currentDeltaX;
                _this.adjustDeltaY = _this.currentDeltaY;
            });
            _this.gesture.on("panend", function (ev) {
                // Saving the final transforms for adjustment next time the user interacts.
                _this.adjustScale = _this.currentScale;
                _this.adjustDeltaX = _this.currentDeltaX;
                _this.adjustDeltaY = _this.currentDeltaY;
            });
        };
        // this.images = this.navParams.get("data");
        // console.log(this.images);
        console.log('navParams  ', navParams.data);
        //  console.log('ImageId: ',navParams.data.imageModel[0].imageId)
        //  alert(JSON.stringify(navParams.data));
        this.src = 'https://pbs.twimg.com/profile_images/697468390961651712/p1R4jPlp.png';
        this.role = navParams.data.parms.role;
        console.log("Role: ", this.role);
    }
    GalleryPage.prototype.ionViewDidLoad = function () {
        // console.log("Slides", this.slides);
        // this.slides.centeredSlides = true;
        this.loadMoreImages();
    };
    GalleryPage.prototype.onSlideChanged = function () {
        var currentSlide = this.slides.getActiveIndex();
        var currentIndex = this.slider.getActiveIndex();
        this.index = this.slider.getActiveIndex();
        console.log("Current index is", currentIndex);
        this.slider.slideTo(currentSlide, 500);
    };
    GalleryPage.prototype.onThumbSlideChanged = function () {
        var currentIndex = this.slider.getActiveIndex();
        console.log("Current thumb slide index is", currentIndex);
        if (currentIndex >= 2) {
            if (this.nextPage > 0) {
                // alert('call load maor ' + this.nextPage);
                this.loadMoreImages();
            }
        }
        this.slides.slideTo(currentIndex, 500);
    };
    GalleryPage.prototype.loadMoreImages = function () {
        var _this = this;
        //debugger;
        var params = this.navParams.data.parms;
        params.page = this.nextPage;
        params.size = '9';
        this.sharedServices.loadMoreImages(params)
            .then(function (data) {
            _this.result = data;
            console.log(data);
            for (var i = 0; i < _this.result.contentList.length; i++) {
                _this.imagesName.push(_this.result.contentList[i]);
            }
            _this.nextPage = _this.result.nextPage;
        }, function (error) {
            //debugger;
            console.log(error);
        });
    };
    GalleryPage.prototype.slideClick = function () {
        var theClickedIndex = this.slider.clickedIndex;
        console.log('clicked on slide ', theClickedIndex);
        this.slides.slideTo(theClickedIndex, 500);
    };
    GalleryPage.prototype.showThisImage = function (imgURL, title) {
        console.log(imgURL);
        // this.photoViewer.show(imgURL,title, {share: false});
    };
    GalleryPage.prototype.closeGallery = function () {
        console.log("Close gallery");
        this.event.publish(__WEBPACK_IMPORTED_MODULE_5__Utility_Constant__["d" /* KEY_NOTIFF */].LifeStoryUpdate);
        this.viewCtrl.dismiss();
    };
    /* close modal */
    GalleryPage.prototype.closeModal = function () {
        this.event.publish(__WEBPACK_IMPORTED_MODULE_5__Utility_Constant__["d" /* KEY_NOTIFF */].LifeStoryUpdate);
        this.viewCtrl.dismiss();
    };
    GalleryPage.prototype.actionDelete = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            buttons: [
                {
                    text: 'Delete',
                    role: 'destructive',
                    handler: function () {
                        console.log('Deleting... ');
                        _this.deleteImage();
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
    GalleryPage.prototype.deleteImage = function () {
        var _this = this;
        this.index = this.slider.getActiveIndex();
        var params = {
            "userId": this.navParams.data.parms.userid,
            "ownerId": this.navParams.data.parms.ownerId,
            "imageId": this.imagesName[this.index].imageId
        };
        console.log("params", params);
        // Delete API
        this.interestnPassion.deleteMediaImage(params)
            .then(function (data) {
            console.log(data);
            //debugger
            console.log("Delete at this index: ", _this.index);
            _this.imagesName.splice(_this.index, 1);
            _this.index = _this.index - 1;
            setTimeout(function () {
                _this.slider.slideTo(_this.index, 0);
                _this.slides.slideTo(_this.index, 0);
            }, 100);
            console.log("After delete:", _this.imagesName);
            console.log("After Index:", _this.index);
            if (_this.imagesName.length < 1) {
                _this.closeGallery();
            }
            // else {
            //   this.slider.slideTo(this.index-1, 500);
            // }
        }, function (error) {
            console.log(error);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('slides'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* Slides */])
    ], GalleryPage.prototype, "slides", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('thumbslide'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* Slides */])
    ], GalleryPage.prototype, "slider", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('image'),
        __metadata("design:type", Object)
    ], GalleryPage.prototype, "element", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('imageParent'),
        __metadata("design:type", Object)
    ], GalleryPage.prototype, "elementParent", void 0);
    GalleryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-gallery',template:/*ion-inline-start:"/Users/kanikagupta/Documents/Modurn/modurn 2/src/pages/lifestory/life-story/LifeStoryTab/gallery/gallery.html"*/'<ion-header no-border>\n  <ion-navbar transparent>\n    <ion-title text-center class="gallary-title">Images</ion-title>\n    <ion-buttons left (click)="closeGallery()">\n      <button class="btnColor cross-icn" ion-button icon-only>\n        <ion-icon class="icon icon-ic-back-arrow" item-right></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons right class="mar-header-icon" *ngIf="role != 4">\n      <button class="btnColor" ion-button icon-only (click)="actionDelete()">\n        <ion-icon class="icon icon-ic-three-dots"></ion-icon>\n         </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n\n\n<ion-content class="gallery-content">\n  <div class="zoom-slider">\n    <ion-slides #slides (ionSlideDidChange)="onSlideChanged($event)">\n      <ion-slide *ngFor="let img of imagesName;">\n        \n          <div class="swiper-zoom-container gallery">\n              <bg-image-with-loader (click)="showThisImage(img.mediaImage,img.imageTitle)" [image]="img.mediaImage"></bg-image-with-loader>\n          </div>\n\n        <div class="gal-caption" centre>{{img.imageTitle}}</div>\n      </ion-slide>\n    </ion-slides>\n  </div>\n  <div class="bot-slider">\n    <ion-slides slidesPerView="6" spaceBetween="1" #thumbslide (ionSlideDidChange)="onThumbSlideChanged($event)" (ionSlideTap)="slideClick()">\n      <ion-slide *ngFor="let slide of imagesName">\n        <img [src]="slide.mediaImage200" class="slide-image" />\n      </ion-slide>\n    </ion-slides>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/kanikagupta/Documents/Modurn/modurn 2/src/pages/lifestory/life-story/LifeStoryTab/gallery/gallery.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_photo_viewer__["a" /* PhotoViewer */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_3__providers_WebServices_Common_SharedServices__["a" /* SharedServices */],
            __WEBPACK_IMPORTED_MODULE_4__providers_WebServices_LifeStory_InterestnPassionService__["a" /* InterestnPassionService */]])
    ], GalleryPage);
    return GalleryPage;
}());

//# sourceMappingURL=gallery.js.map

/***/ })

});
//# sourceMappingURL=5.js.map