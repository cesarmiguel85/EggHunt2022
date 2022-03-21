(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["imageviewerpan-imageviewerpan-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/imageviewerpan/imageviewerpan.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/imageviewerpan/imageviewerpan.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title><span hideWhen=\"mobile,mobileweb\">{{ mydata.allmessages.imageviewer_title }} </span>{{mydata.alldata[area].area}}!</ion-title>\n    <ion-title slot=\"end\">{{ mydata.allmessages.imageviewer_found }} {{total-remaining}}/{{total}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n<div *ngFor=\"let picture of pictures, index as i\">\n  <figure *ngIf=\"i===showing\" class=\"burj\" >\n    <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 1200 900\" preserveAspectRatio=\"xMinYMin meet\" >\n    <image width=\"1200\" height=\"900\" [attr.xlink:href]=\"picture.url\">\n    </image>\n    <a  *ngFor=\"let rectangle of picture.rectangles\" (click)=\"foundEgg(rectangle.code)\">\n      <rect [attr.x]=\"rectangle.x\" [attr.y]=\"rectangle.y\" fill=\"transparent\" opacity=\"20\" [attr.width]=\"rectangle.width\" [attr.height]=\"rectangle.height\" />\n      <rect *ngIf=\"mydata.iHaveIt(rectangle.code)\" [attr.x]=\"rectangle.x\" [attr.y]=\"rectangle.y\" stroke=\"green\" stroke-width=\"5\" fill=\"transparent\" opacity=\"20\" [attr.width]=\"rectangle.width\" [attr.height]=\"rectangle.height\" />\n    </a>\n    </svg>\n    <div id=\"arrowleft\" class=\"arrow\" (click)=\"updateShowing(-1)\"><ion-icon name=\"chevron-back-outline\"></ion-icon></div>\n    <div id=\"arrowright\" class=\"arrow\" (click)=\"updateShowing(1)\"><ion-icon name=\"chevron-forward-outline\"></ion-icon></div>\n  </figure>\n\n  \n</div>  \n\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/imageviewerpan/imageviewerpan-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/imageviewerpan/imageviewerpan-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: ImageviewerpanPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageviewerpanPageRoutingModule", function() { return ImageviewerpanPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _imageviewerpan_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./imageviewerpan.page */ "./src/app/imageviewerpan/imageviewerpan.page.ts");




const routes = [
    {
        path: '',
        component: _imageviewerpan_page__WEBPACK_IMPORTED_MODULE_3__["ImageviewerpanPage"]
    }
];
let ImageviewerpanPageRoutingModule = class ImageviewerpanPageRoutingModule {
};
ImageviewerpanPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ImageviewerpanPageRoutingModule);



/***/ }),

/***/ "./src/app/imageviewerpan/imageviewerpan.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/imageviewerpan/imageviewerpan.module.ts ***!
  \*********************************************************/
/*! exports provided: ImageviewerpanPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageviewerpanPageModule", function() { return ImageviewerpanPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _imageviewerpan_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./imageviewerpan-routing.module */ "./src/app/imageviewerpan/imageviewerpan-routing.module.ts");
/* harmony import */ var _imageviewerpan_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./imageviewerpan.page */ "./src/app/imageviewerpan/imageviewerpan.page.ts");







let ImageviewerpanPageModule = class ImageviewerpanPageModule {
};
ImageviewerpanPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _imageviewerpan_routing_module__WEBPACK_IMPORTED_MODULE_5__["ImageviewerpanPageRoutingModule"]
        ],
        declarations: [_imageviewerpan_page__WEBPACK_IMPORTED_MODULE_6__["ImageviewerpanPage"]]
    })
], ImageviewerpanPageModule);



/***/ }),

/***/ "./src/app/imageviewerpan/imageviewerpan.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/imageviewerpan/imageviewerpan.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".burj {\n  position: relative;\n  width: 100%;\n  padding-bottom: 77%;\n  vertical-align: middle;\n  margin: 0;\n  overflow: hidden;\n}\n\n.burj svg {\n  display: inline-block;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.arrow {\n  position: absolute;\n  height: 100%;\n  width: 6%;\n  display: flex;\n  padding: 0px;\n}\n\n#arrowleft {\n  left: 0px;\n  background: black;\n  background: linear-gradient(90deg, rgba(0, 0, 0, 0.902879902) 0%, black 18%, rgba(0, 0, 0, 0.5079219188) 78%, rgba(0, 0, 0, 0) 100%);\n}\n\n#arrowright {\n  right: 0px;\n  background: black;\n  background: linear-gradient(270deg, rgba(0, 0, 0, 0.902879902) 0%, black 18%, rgba(0, 0, 0, 0.5079219188) 78%, rgba(0, 0, 0, 0) 100%);\n}\n\n.arrow ion-icon {\n  display: block;\n  margin: auto auto;\n  font-size: 6vw;\n  color: #a8a8a8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jZXNhci9Eb2N1bWVudHMvRGV2ZWxvcG1lbnQvRWdnSHVudDIwMjIvc3JjL2FwcC9pbWFnZXZpZXdlcnBhbi9pbWFnZXZpZXdlcnBhbi5wYWdlLnNjc3MiLCJzcmMvYXBwL2ltYWdldmlld2VycGFuL2ltYWdldmlld2VycGFuLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUNDRDs7QURDQTtFQUNDLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQVEsT0FBQTtBQ0dUOztBREFBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FDR0o7O0FEREE7RUFDSSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxvSUFBQTtBQ0lKOztBRERBO0VBQ0ksVUFBQTtFQUNBLGlCQUFBO0VBQ0EscUlBQUE7QUNJSjs7QURBQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FDR0oiLCJmaWxlIjoic3JjL2FwcC9pbWFnZXZpZXdlcnBhbi9pbWFnZXZpZXdlcnBhbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnVyaiB7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0d2lkdGg6IDEwMCU7XG5cdHBhZGRpbmctYm90dG9tOiA3NyU7XG5cdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG5cdG1hcmdpbjogMDtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5idXJqIHN2ZyB7IFxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0dG9wOiAwOyBsZWZ0OiAwO1xufVxuXG4uYXJyb3cge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBoZWlnaHQ6MTAwJTtcbiAgICB3aWR0aDo2JTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBhZGRpbmc6MHB4O1xufVxuI2Fycm93bGVmdCB7XG4gICAgbGVmdDowcHg7XG4gICAgYmFja2dyb3VuZDogcmdiKDAsMCwwKTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMCwwLDAsMC45MDI4Nzk5MDE5NjA3ODQzKSAwJSwgcmdiYSgwLDAsMCwxKSAxOCUsIHJnYmEoMCwwLDAsMC41MDc5MjE5MTg3Njc1MDcpIDc4JSwgcmdiYSgwLDAsMCwwKSAxMDAlKTtcbn1cblxuI2Fycm93cmlnaHQge1xuICAgIHJpZ2h0OjBweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMCwwLDApO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyNzBkZWcsIHJnYmEoMCwwLDAsMC45MDI4Nzk5MDE5NjA3ODQzKSAwJSwgcmdiYSgwLDAsMCwxKSAxOCUsIHJnYmEoMCwwLDAsMC41MDc5MjE5MTg3Njc1MDcpIDc4JSwgcmdiYSgwLDAsMCwwKSAxMDAlKTtcblxufVxuXG4uYXJyb3cgaW9uLWljb24ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjphdXRvIGF1dG87XG4gICAgZm9udC1zaXplOiA2dnc7XG4gICAgY29sb3I6cmdiKDE2OCwgMTY4LCAxNjgpO1xufSIsIi5idXJqIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1ib3R0b206IDc3JTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgbWFyZ2luOiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uYnVyaiBzdmcge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xufVxuXG4uYXJyb3cge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDYlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbiNhcnJvd2xlZnQge1xuICBsZWZ0OiAwcHg7XG4gIGJhY2tncm91bmQ6IGJsYWNrO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMCwgMCwgMCwgMC45MDI4Nzk5MDIpIDAlLCBibGFjayAxOCUsIHJnYmEoMCwgMCwgMCwgMC41MDc5MjE5MTg4KSA3OCUsIHJnYmEoMCwgMCwgMCwgMCkgMTAwJSk7XG59XG5cbiNhcnJvd3JpZ2h0IHtcbiAgcmlnaHQ6IDBweDtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyNzBkZWcsIHJnYmEoMCwgMCwgMCwgMC45MDI4Nzk5MDIpIDAlLCBibGFjayAxOCUsIHJnYmEoMCwgMCwgMCwgMC41MDc5MjE5MTg4KSA3OCUsIHJnYmEoMCwgMCwgMCwgMCkgMTAwJSk7XG59XG5cbi5hcnJvdyBpb24taWNvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IGF1dG8gYXV0bztcbiAgZm9udC1zaXplOiA2dnc7XG4gIGNvbG9yOiAjYThhOGE4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/imageviewerpan/imageviewerpan.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/imageviewerpan/imageviewerpan.page.ts ***!
  \*******************************************************/
/*! exports provided: ImageviewerpanPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageviewerpanPage", function() { return ImageviewerpanPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let ImageviewerpanPage = class ImageviewerpanPage {
    constructor(route, router, mydata) {
        this.route = route;
        this.router = router;
        this.mydata = mydata;
        this.pictures = [];
        this.total = 0;
        this.remaining = 0;
        this.showing = 0;
        console.log(mydata);
        //GET AREA FROM PARAMS ROUTER
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.area = this.router.getCurrentNavigation().extras.state.area;
                this.pictures = mydata.alldata[this.area].pictures;
                [this.remaining, this.total] = this.mydata.calcRemaining(this.area);
                this.mydata.checkDone(this.area);
            }
        });
    }
    ngOnInit() {
    }
    foundEgg(num) {
        this.mydata.addEgg(num, this.area);
        [this.remaining, this.total] = this.mydata.calcRemaining(this.area);
    }
    updateShowing(num) {
        var numpictures = this.pictures.length;
        var newShowing = this.showing + num;
        this.showing = ((newShowing % numpictures) + numpictures) % numpictures;
        console.log(this.showing);
    }
};
ImageviewerpanPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] }
];
ImageviewerpanPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-imageviewerpan',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./imageviewerpan.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/imageviewerpan/imageviewerpan.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./imageviewerpan.page.scss */ "./src/app/imageviewerpan/imageviewerpan.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
], ImageviewerpanPage);



/***/ })

}]);
//# sourceMappingURL=imageviewerpan-imageviewerpan-module-es2015.js.map