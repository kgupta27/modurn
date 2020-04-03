webpackJsonp([22],{

/***/ 741:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelationshipModule", function() { return RelationshipModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__relationship__ = __webpack_require__(784);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RelationshipModule = /** @class */ (function () {
    function RelationshipModule() {
    }
    RelationshipModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__relationship__["a" /* RelationshipPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__relationship__["a" /* RelationshipPage */]),
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__relationship__["a" /* RelationshipPage */]]
        })
    ], RelationshipModule);
    return RelationshipModule;
}());

//# sourceMappingURL=relationship.module.js.map

/***/ }),

/***/ 784:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RelationshipPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RelationshipPage = /** @class */ (function () {
    function RelationshipPage(navCtrl, navParams, storage, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.viewCtrl = viewCtrl;
        this.relationData = [];
        this.relType = this.navParams.get('relationType');
        // console.log("Relationship type: ");
        // console.log(this.relType);
    }
    RelationshipPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        //debugger;
        console.log('ionViewDidLoad RelationshipPage');
        this.storage.get("relationData").then(function (result) {
            //debugger;
            if (result) {
                for (var i = 0; i < result.length; i++) {
                    if (result[i].isHuman == "1" && _this.relType == '1') {
                        if (result[i].relationId == '1' || result[i].relationId == 1) {
                        }
                        else {
                            _this.relationData.push(result[i]);
                        }
                    }
                    else if (result[i].isHuman == "0" && _this.relType == '2') {
                        // console.log(result[i]);
                        _this.relationData.push(result[i]);
                    }
                }
                // console.log(this.relationData);
            }
        });
    };
    RelationshipPage.prototype.selectData = function (selectionRelationship) {
        console.log(selectionRelationship);
        // localStorage.setItem("selectionRelationship", selectionRelationship);
        this.viewCtrl.dismiss(selectionRelationship);
        // this.navCtrl.pop();
    };
    RelationshipPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-relationship',template:/*ion-inline-start:"/Users/kanikagupta/Documents/Modurn/modurn 2/src/pages/addstory/relationship/relationship.html"*/'<ion-header no-border>\n  <ion-navbar>\n    <ion-title text-center>Relationship</ion-title>\n    \n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list *ngIf="relationData">\n    <ion-item *ngFor="let item of relationData" (click)="selectData(item)">\n      {{ item.relationshipType }}\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/kanikagupta/Documents/Modurn/modurn 2/src/pages/addstory/relationship/relationship.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ViewController */]])
    ], RelationshipPage);
    return RelationshipPage;
}());

//# sourceMappingURL=relationship.js.map

/***/ })

});
//# sourceMappingURL=22.js.map