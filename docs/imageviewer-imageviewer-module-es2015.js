(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["imageviewer-imageviewer-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/imageviewer/imageviewer.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/imageviewer/imageviewer.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title><span hideWhen=\"mobile,mobileweb\">{{ mydata.allmessages.imageviewer_title }} </span>{{mydata.alldata[area].area}}!</ion-title>\n    <ion-title slot=\"end\">{{ mydata.allmessages.imageviewer_found }} {{total-remaining}}/{{total}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <figure *ngFor=\"let picture of pictures, index as i\" class=\"burj\">\n    <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 1600 1200\" preserveAspectRatio=\"xMinYMin meet\" >\n    <image width=\"1600\" height=\"1200\" [attr.xlink:href]=\"picture.url\">\n    </image>\n    <a  *ngFor=\"let rectangle of picture.rectangles\" (click)=\"foundEgg(rectangle.code)\">\n      <rect [attr.x]=\"rectangle.x\" [attr.y]=\"rectangle.y\" fill=\"transparent\" opacity=\"20\" [attr.width]=\"rectangle.width\" [attr.height]=\"rectangle.height\" />\n      <rect *ngIf=\"mydata.iHaveIt(rectangle.code)\" [attr.x]=\"rectangle.x\" [attr.y]=\"rectangle.y\" stroke=\"green\" stroke-width=\"5\" fill=\"transparent\" opacity=\"20\" [attr.width]=\"rectangle.width\" [attr.height]=\"rectangle.height\" />\n    </a>\n    </svg>\n\n   \n\n    <div id=\"scrolldown\" *ngIf=\"i<(pictures.length-1) && pictures.length>1\">\n      <div class=\"containerchevron\">\n        <div class=\"chevron\"></div>\n        <div class=\"chevron\"></div>\n        <div class=\"chevron\"></div>\n      </div>\n    </div>\n  </figure>\n  \n</ion-content>\n");

/***/ }),

/***/ "./src/app/imageviewer/imageviewer-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/imageviewer/imageviewer-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: ImageviewerPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageviewerPageRoutingModule", function() { return ImageviewerPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _imageviewer_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./imageviewer.page */ "./src/app/imageviewer/imageviewer.page.ts");




const routes = [
    {
        path: '',
        component: _imageviewer_page__WEBPACK_IMPORTED_MODULE_3__["ImageviewerPage"]
    }
];
let ImageviewerPageRoutingModule = class ImageviewerPageRoutingModule {
};
ImageviewerPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ImageviewerPageRoutingModule);



/***/ }),

/***/ "./src/app/imageviewer/imageviewer.module.ts":
/*!***************************************************!*\
  !*** ./src/app/imageviewer/imageviewer.module.ts ***!
  \***************************************************/
/*! exports provided: ImageviewerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageviewerPageModule", function() { return ImageviewerPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _imageviewer_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./imageviewer-routing.module */ "./src/app/imageviewer/imageviewer-routing.module.ts");
/* harmony import */ var _imageviewer_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./imageviewer.page */ "./src/app/imageviewer/imageviewer.page.ts");







let ImageviewerPageModule = class ImageviewerPageModule {
};
ImageviewerPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _imageviewer_routing_module__WEBPACK_IMPORTED_MODULE_5__["ImageviewerPageRoutingModule"]
        ],
        declarations: [_imageviewer_page__WEBPACK_IMPORTED_MODULE_6__["ImageviewerPage"]]
    })
], ImageviewerPageModule);



/***/ }),

/***/ "./src/app/imageviewer/imageviewer.page.scss":
/*!***************************************************!*\
  !*** ./src/app/imageviewer/imageviewer.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".burj {\n  position: relative;\n  width: 100%;\n  padding-bottom: 77%;\n  vertical-align: middle;\n  margin: 0;\n  overflow: hidden;\n}\n\n.burj svg {\n  display: inline-block;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.containerchevron {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.chevron {\n  position: absolute;\n  width: 2.1rem;\n  height: 0.48rem;\n  opacity: 0;\n  transform: scale(0.3);\n  -webkit-animation: move-chevron 3s ease-out infinite;\n          animation: move-chevron 3s ease-out infinite;\n}\n\n.chevron:first-child {\n  -webkit-animation: move-chevron 3s ease-out 1s infinite;\n          animation: move-chevron 3s ease-out 1s infinite;\n}\n\n.chevron:nth-child(2) {\n  -webkit-animation: move-chevron 3s ease-out 2s infinite;\n          animation: move-chevron 3s ease-out 2s infinite;\n}\n\n.chevron:before,\n.chevron:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  height: 100%;\n  width: 50%;\n  background: #d4d8db;\n}\n\n.chevron:before {\n  left: 0;\n  transform: skewY(30deg);\n}\n\n.chevron:after {\n  right: 0;\n  width: 50%;\n  transform: skewY(-30deg);\n}\n\n@-webkit-keyframes move-chevron {\n  25% {\n    opacity: 1;\n  }\n  33.3% {\n    opacity: 1;\n    transform: translateY(2.28rem);\n  }\n  66.6% {\n    opacity: 1;\n    transform: translateY(3.12rem);\n  }\n  100% {\n    opacity: 0;\n    transform: translateY(4.8rem) scale(0.5);\n  }\n}\n\n@keyframes move-chevron {\n  25% {\n    opacity: 1;\n  }\n  33.3% {\n    opacity: 1;\n    transform: translateY(2.28rem);\n  }\n  66.6% {\n    opacity: 1;\n    transform: translateY(3.12rem);\n  }\n  100% {\n    opacity: 0;\n    transform: translateY(4.8rem) scale(0.5);\n  }\n}\n\n#scrolldown {\n  position: absolute;\n  bottom: 0px;\n  right: 50px;\n  height: 20%;\n}\n\nion-content {\n  --background: rgb(92, 92, 92);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jZXNhci9Eb2N1bWVudHMvRGV2ZWxvcG1lbnQvRWdnSHVudDIwMjIvc3JjL2FwcC9pbWFnZXZpZXdlci9pbWFnZXZpZXdlci5wYWdlLnNjc3MiLCJzcmMvYXBwL2ltYWdldmlld2VyL2ltYWdldmlld2VyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUNDRDs7QURDQTtFQUNDLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQVEsT0FBQTtBQ0dUOztBREVBO0VBQ0MsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNDRDs7QURHQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EscUJBQUE7RUFDQSxvREFBQTtVQUFBLDRDQUFBO0FDQUY7O0FER0E7RUFDRSx1REFBQTtVQUFBLCtDQUFBO0FDQUY7O0FER0E7RUFDRSx1REFBQTtVQUFBLCtDQUFBO0FDQUY7O0FER0E7O0VBRUMsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QUNBRDs7QURHQTtFQUNDLE9BQUE7RUFDQSx1QkFBQTtBQ0FEOztBREdBO0VBQ0MsUUFBQTtFQUNBLFVBQUE7RUFDQSx3QkFBQTtBQ0FEOztBREdBO0VBQ0M7SUFDQyxVQUFBO0VDQUE7RURFRDtJQUNDLFVBQUE7SUFDQSw4QkFBQTtFQ0FBO0VERUQ7SUFDQyxVQUFBO0lBQ0EsOEJBQUE7RUNBQTtFREVEO0lBQ0MsVUFBQTtJQUNBLHdDQUFBO0VDQUE7QUFDRjs7QURmQTtFQUNDO0lBQ0MsVUFBQTtFQ0FBO0VERUQ7SUFDQyxVQUFBO0lBQ0EsOEJBQUE7RUNBQTtFREVEO0lBQ0MsVUFBQTtJQUNBLDhCQUFBO0VDQUE7RURFRDtJQUNDLFVBQUE7SUFDQSx3Q0FBQTtFQ0FBO0FBQ0Y7O0FER0E7RUFDQyxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQ0REOztBREdBO0VBQ0UsNkJBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL2ltYWdldmlld2VyL2ltYWdldmlld2VyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idXJqIHtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHR3aWR0aDogMTAwJTtcblx0cGFkZGluZy1ib3R0b206IDc3JTtcblx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcblx0bWFyZ2luOiAwO1xuXHRvdmVyZmxvdzogaGlkZGVuO1xufVxuLmJ1cmogc3ZnIHsgXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR0b3A6IDA7IGxlZnQ6IDA7XG59XG5cbiRiYXNlOiAwLjZyZW07XG5cbi5jb250YWluZXJjaGV2cm9uIHtcbiBkaXNwbGF5OiBmbGV4O1xuIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbn1cblxuLmNoZXZyb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAkYmFzZSAqIDMuNTtcbiAgaGVpZ2h0OiAkYmFzZSAqIDAuODtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjMpO1xuICBhbmltYXRpb246IG1vdmUtY2hldnJvbiAzcyBlYXNlLW91dCBpbmZpbml0ZTtcbn1cblxuLmNoZXZyb246Zmlyc3QtY2hpbGQge1xuICBhbmltYXRpb246IG1vdmUtY2hldnJvbiAzcyBlYXNlLW91dCAxcyBpbmZpbml0ZTtcbn1cblxuLmNoZXZyb246bnRoLWNoaWxkKDIpIHtcbiAgYW5pbWF0aW9uOiBtb3ZlLWNoZXZyb24gM3MgZWFzZS1vdXQgMnMgaW5maW5pdGU7XG59XG5cbi5jaGV2cm9uOmJlZm9yZSxcbi5jaGV2cm9uOmFmdGVyIHtcbiBjb250ZW50OiAnJztcbiBwb3NpdGlvbjogYWJzb2x1dGU7XG4gdG9wOiAwO1xuIGhlaWdodDogMTAwJTtcbiB3aWR0aDogNTAlO1xuIGJhY2tncm91bmQ6ICNkNGQ4ZGI7XG59XG5cbi5jaGV2cm9uOmJlZm9yZSB7XG4gbGVmdDogMDtcbiB0cmFuc2Zvcm06IHNrZXdZKDMwZGVnKTtcbn1cblxuLmNoZXZyb246YWZ0ZXIge1xuIHJpZ2h0OiAwO1xuIHdpZHRoOiA1MCU7XG4gdHJhbnNmb3JtOiBza2V3WSgtMzBkZWcpO1xufVxuXG5Aa2V5ZnJhbWVzIG1vdmUtY2hldnJvbiB7XG4gMjUlIHtcbiAgb3BhY2l0eTogMTtcblx0fVxuIDMzLjMlIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKCRiYXNlICogMy44KTtcbiB9XG4gNjYuNiUge1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoJGJhc2UgKiA1LjIpO1xuIH1cbiAxMDAlIHtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKCRiYXNlICogOCkgc2NhbGUoMC41KTtcbiB9XG59XG5cbiNzY3JvbGxkb3duIHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRib3R0b206MHB4O1xuXHRyaWdodDo1MHB4O1xuXHRoZWlnaHQ6MjAlXG59XG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogcmdiKDkyLCA5MiwgOTIpO1xufVxuIiwiLmJ1cmoge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLWJvdHRvbTogNzclO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBtYXJnaW46IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5idXJqIHN2ZyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG59XG5cbi5jb250YWluZXJjaGV2cm9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jaGV2cm9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMi4xcmVtO1xuICBoZWlnaHQ6IDAuNDhyZW07XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC4zKTtcbiAgYW5pbWF0aW9uOiBtb3ZlLWNoZXZyb24gM3MgZWFzZS1vdXQgaW5maW5pdGU7XG59XG5cbi5jaGV2cm9uOmZpcnN0LWNoaWxkIHtcbiAgYW5pbWF0aW9uOiBtb3ZlLWNoZXZyb24gM3MgZWFzZS1vdXQgMXMgaW5maW5pdGU7XG59XG5cbi5jaGV2cm9uOm50aC1jaGlsZCgyKSB7XG4gIGFuaW1hdGlvbjogbW92ZS1jaGV2cm9uIDNzIGVhc2Utb3V0IDJzIGluZmluaXRlO1xufVxuXG4uY2hldnJvbjpiZWZvcmUsXG4uY2hldnJvbjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiA1MCU7XG4gIGJhY2tncm91bmQ6ICNkNGQ4ZGI7XG59XG5cbi5jaGV2cm9uOmJlZm9yZSB7XG4gIGxlZnQ6IDA7XG4gIHRyYW5zZm9ybTogc2tld1koMzBkZWcpO1xufVxuXG4uY2hldnJvbjphZnRlciB7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogNTAlO1xuICB0cmFuc2Zvcm06IHNrZXdZKC0zMGRlZyk7XG59XG5cbkBrZXlmcmFtZXMgbW92ZS1jaGV2cm9uIHtcbiAgMjUlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIDMzLjMlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyLjI4cmVtKTtcbiAgfVxuICA2Ni42JSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMy4xMnJlbSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNC44cmVtKSBzY2FsZSgwLjUpO1xuICB9XG59XG4jc2Nyb2xsZG93biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwcHg7XG4gIHJpZ2h0OiA1MHB4O1xuICBoZWlnaHQ6IDIwJTtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHJnYig5MiwgOTIsIDkyKTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/imageviewer/imageviewer.page.ts":
/*!*************************************************!*\
  !*** ./src/app/imageviewer/imageviewer.page.ts ***!
  \*************************************************/
/*! exports provided: ImageviewerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageviewerPage", function() { return ImageviewerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let ImageviewerPage = class ImageviewerPage {
    constructor(route, router, mydata) {
        this.route = route;
        this.router = router;
        this.mydata = mydata;
        this.pictures = [];
        this.total = 0;
        this.remaining = 0;
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
    ionViewDidEnter() {
    }
};
ImageviewerPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] }
];
ImageviewerPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-imageviewer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./imageviewer.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/imageviewer/imageviewer.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./imageviewer.page.scss */ "./src/app/imageviewer/imageviewer.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
], ImageviewerPage);



/***/ })

}]);
//# sourceMappingURL=imageviewer-imageviewer-module-es2015.js.map