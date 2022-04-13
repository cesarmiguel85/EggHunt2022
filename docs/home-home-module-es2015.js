(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <div id=\"containerflex\">\r\n\r\n    <ion-button *ngIf=\"mydata.lang==='fr'\" fill=\"outline\" (click)=\"switchLang('en')\" id=\"switch\" slot=\"end\">{{mydata.allmessages.switch_lang}}</ion-button>\r\n          <ion-button *ngIf=\"mydata.lang==='en'\" fill=\"outline\" (click)=\"switchLang('fr')\" id=\"switch\" slot=\"end\">{{mydata.allmessages.switch_lang}}</ion-button>\r\n    <div id=\"container\">\r\n\r\n      <ion-grid>\r\n        <ion-row class=\"ion-justify-content-center\">\r\n          <ion-col size-lg=\"8\" size-xs=\"12\">\r\n            <div>\r\n\r\n\r\n              <ion-card>\r\n\r\n                <img id=\"homelogo\" src=\"assets/images/HOME_LOGO.png\"/>\r\n                <ion-card-content>\r\n\r\n                  <ion-card-title>{{mydata.allmessages.home_title}}</ion-card-title>\r\n                  <p id=\"home_p\">{{mydata.allmessages.home_desc}}</p>\r\n                </ion-card-content>\r\n              </ion-card>\r\n\r\n              <ion-card *ngIf=\"mydata.allvariables.with_db\" class=\"cardform\">\r\n\r\n                <ion-card-content>\r\n\r\n                  <ion-list lines=\"full\" class=\"myform\">\r\n\r\n                    <ion-item>\r\n                      <ion-label position=\"stacked\">{{mydata.allmessages.home_nickname}}<ion-text color=\"danger\"> *</ion-text></ion-label>\r\n                      <ion-input required type=\"email\" [(ngModel)]=\"nickname\"></ion-input>\r\n                    </ion-item>\r\n                    <ion-item>\r\n                      <ion-label position=\"stacked\">{{mydata.allmessages.home_email}}<ion-text color=\"danger\"> *</ion-text><ion-text color=\"danger\" *ngIf=\"isEmailNOK()\"> {{mydata.allmessages.home_email_wrong}}</ion-text></ion-label>\r\n                      <ion-input required type=\"email\" [(ngModel)]=\"email\"></ion-input>\r\n                    </ion-item>\r\n\r\n                  </ion-list>\r\n\r\n                  <div class=\"ion-padding\">\r\n                    <ion-button expand=\"block\" (click)=\"GoToAreaPage()\" class=\"ion-no-margin\" disabled=\"{{blockStart()}}\">{{mydata.allmessages.home_start}} <ion-spinner *ngIf=\"spinner\" name=\"bubbles\"></ion-spinner></ion-button>\r\n                  </div>\r\n                </ion-card-content>\r\n              </ion-card>\r\n\r\n              <ion-card *ngIf=\"!mydata.allvariables.with_db\">\r\n                <ion-card-content>\r\n                  <div class=\"ion-padding\">\r\n                    <ion-button expand=\"block\" (click)=\"GoToAreaPage()\" class=\"ion-no-margin\">{{mydata.allmessages.home_start}}<ion-spinner *ngIf=\"spinner\" name=\"bubbles\"></ion-spinner></ion-button>\r\n                  </div>\r\n                </ion-card-content>\r\n              </ion-card>\r\n              <div id=\"ranking\" *ngIf=\"mydata.allvariables.with_db\">\r\n                <ion-button color=\"success\" (click)=\"GoToRanking()\">{{ mydata.allmessages.finish_ranking }}</ion-button>\r\n              </div>\r\n\r\n\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n\r\n\r\n\r\n\r\n\r\n      <div id=\"margin\" >\r\n\r\n      </div>\r\n    </div>\r\n    <div id=\"footer\"></div>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                }
            ])
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#container {\n  text-align: center;\n  margin: auto auto;\n  width: 90%;\n}\n\n#containerflex {\n  text-align: center;\n  margin: auto auto;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-image: url('BACKGROUND.jpg');\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\nion-content ion-toolbar {\n  --background: translucent;\n}\n\n.subtitlebutton {\n  font-size: x-small;\n  clear: both;\n}\n\n.buttontext {\n  width: 100%;\n}\n\n.labelaccept {\n  font-size: 14px;\n}\n\n#footer {\n  position: absolute;\n  height: 10%;\n  width: 100%;\n  bottom: 0px;\n  background-image: url('eggs_footer.png');\n  background-position: center;\n  background-repeat: repeat-x;\n  background-size: contain;\n}\n\n.myform {\n  width: 100%;\n  margin: auto auto;\n}\n\n#ranking {\n  margin-bottom: 4em;\n  margin-top: 1em;\n}\n\nion-card {\n  --ion-background-color: rgba(255, 255, 255, 0.9);\n  --color:black;\n}\n\nion-list {\n  --ion-item-background: rgba(255, 255, 255, 0.6);\n}\n\n.cardform {\n  width: 80%;\n  margin: auto auto;\n  --ion-item-background: rgba(255, 255, 255, 0.95);\n}\n\n#homelogo {\n  height: 120px;\n  margin-top: 1em;\n}\n\n#home_p {\n  font-size: 14px !important;\n  color: black !important;\n  margin-top: 1em !important;\n}\n\n#switch {\n  margin: 1em 1em auto auto;\n  --background:white;\n}\n\n#margin {\n  width: 100%;\n  height: 5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXENlc2FyTWlndWVsXFxEb2N1bWVudHNcXEdpdEh1YlxcRWdnSHVudDIwMjIvc3JjXFxhcHBcXGhvbWVcXGhvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSx1Q0FBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtBQ0NGOztBREdBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDQUY7O0FER0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFFQSxjQUFBO0VBRUEsU0FBQTtBQ0ZGOztBREtBO0VBQ0UscUJBQUE7QUNGRjs7QURLQTtFQUNFLHlCQUFBO0FDRkY7O0FES0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUNGRjs7QURLQTtFQUNFLFdBQUE7QUNGRjs7QURJQTtFQUNFLGVBQUE7QUNERjs7QURLQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esd0NBQUE7RUFDQSwyQkFBQTtFQUNBLDJCQUFBO0VBQ0Esd0JBQUE7QUNGRjs7QURJQTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtBQ0RGOztBREdBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0FDQUY7O0FER0E7RUFDRSxnREFBQTtFQUNBLGFBQUE7QUNBRjs7QURJQTtFQUNFLCtDQUFBO0FDREY7O0FESUE7RUFDRSxVQUFBO0VBQVUsaUJBQUE7RUFDVixnREFBQTtBQ0FGOztBREdBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7QUNBRjs7QURHQTtFQUNFLDBCQUFBO0VBQ0EsdUJBQUE7RUFDQSwwQkFBQTtBQ0FGOztBREdBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtBQ0FGOztBRElBO0VBQ0UsV0FBQTtFQUNBLFdBQUE7QUNERiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGFpbmVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luOmF1dG8gYXV0bztcclxuICB3aWR0aDo5MCU7XHJcblxyXG59XHJcbiNjb250YWluZXJmbGV4IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luOmF1dG8gYXV0bztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OjEwMCU7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaW1hZ2VzL0JBQ0tHUk9VTkQuanBnJyk7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuXHJcbn1cclxuXHJcbiNjb250YWluZXIgc3Ryb25nIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbn1cclxuXHJcbiNjb250YWluZXIgcCB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG5cclxuICBjb2xvcjogIzhjOGM4YztcclxuXHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4jY29udGFpbmVyIGEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuaW9uLWNvbnRlbnQgaW9uLXRvb2xiYXIge1xyXG4gIC0tYmFja2dyb3VuZDogdHJhbnNsdWNlbnQ7XHJcbn1cclxuXHJcbi5zdWJ0aXRsZWJ1dHRvbiB7XHJcbiAgZm9udC1zaXplOiB4LXNtYWxsO1xyXG4gIGNsZWFyOiBib3RoO1xyXG59XHJcblxyXG4uYnV0dG9udGV4dHtcclxuICB3aWR0aDoxMDAlO1xyXG59XHJcbi5sYWJlbGFjY2VwdCB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG5cclxufVxyXG5cclxuI2Zvb3RlcntcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgaGVpZ2h0OiAxMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm90dG9tOiAwcHg7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaW1hZ2VzL2VnZ3NfZm9vdGVyLnBuZycpO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG59XHJcbi5teWZvcm0ge1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgbWFyZ2luOmF1dG8gYXV0bztcclxufVxyXG4jcmFua2luZyB7XHJcbiAgbWFyZ2luLWJvdHRvbTo0ZW07XHJcbiAgbWFyZ2luLXRvcDoxZW07XHJcbn1cclxuXHJcbmlvbi1jYXJkIHtcclxuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XHJcbiAgLS1jb2xvcjpibGFjaztcclxuICBcclxufVxyXG5cclxuaW9uLWxpc3Qge1xyXG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpOztcclxufVxyXG5cclxuLmNhcmRmb3JtIHtcclxuICB3aWR0aDo4MCU7bWFyZ2luOmF1dG8gYXV0bztcclxuICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45NSk7O1xyXG59XHJcblxyXG4jaG9tZWxvZ28ge1xyXG4gIGhlaWdodDoxMjBweDtcclxuICBtYXJnaW4tdG9wOjFlbTtcclxufVxyXG5cclxuI2hvbWVfcCB7XHJcbiAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLXRvcDogMWVtICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiNzd2l0Y2gge1xyXG4gIG1hcmdpbjoxZW0gMWVtIGF1dG8gYXV0bztcclxuICAtLWJhY2tncm91bmQ6d2hpdGU7XHJcbn1cclxuXHJcblxyXG4jbWFyZ2luIHtcclxuICB3aWR0aDoxMDAlO1xyXG4gIGhlaWdodDogNWVtO1xyXG5cclxufSIsIiNjb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogYXV0byBhdXRvO1xuICB3aWR0aDogOTAlO1xufVxuXG4jY29udGFpbmVyZmxleCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiBhdXRvIGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL0JBQ0tHUk9VTkQuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbiNjb250YWluZXIgc3Ryb25nIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjZweDtcbn1cblxuI2NvbnRhaW5lciBwIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgY29sb3I6ICM4YzhjOGM7XG4gIG1hcmdpbjogMDtcbn1cblxuI2NvbnRhaW5lciBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5pb24tY29udGVudCBpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNsdWNlbnQ7XG59XG5cbi5zdWJ0aXRsZWJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogeC1zbWFsbDtcbiAgY2xlYXI6IGJvdGg7XG59XG5cbi5idXR0b250ZXh0IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5sYWJlbGFjY2VwdCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuI2Zvb3RlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBib3R0b206IDBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9lZ2dzX2Zvb3Rlci5wbmdcIik7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG59XG5cbi5teWZvcm0ge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiBhdXRvIGF1dG87XG59XG5cbiNyYW5raW5nIHtcbiAgbWFyZ2luLWJvdHRvbTogNGVtO1xuICBtYXJnaW4tdG9wOiAxZW07XG59XG5cbmlvbi1jYXJkIHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xuICAtLWNvbG9yOmJsYWNrO1xufVxuXG5pb24tbGlzdCB7XG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xufVxuXG4uY2FyZGZvcm0ge1xuICB3aWR0aDogODAlO1xuICBtYXJnaW46IGF1dG8gYXV0bztcbiAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTUpO1xufVxuXG4jaG9tZWxvZ28ge1xuICBoZWlnaHQ6IDEyMHB4O1xuICBtYXJnaW4tdG9wOiAxZW07XG59XG5cbiNob21lX3Age1xuICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDFlbSAhaW1wb3J0YW50O1xufVxuXG4jc3dpdGNoIHtcbiAgbWFyZ2luOiAxZW0gMWVtIGF1dG8gYXV0bztcbiAgLS1iYWNrZ3JvdW5kOndoaXRlO1xufVxuXG4jbWFyZ2luIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNWVtO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");






let HomePage = class HomePage {
    constructor(router, mydata, http, route) {
        this.router = router;
        this.mydata = mydata;
        this.http = http;
        this.route = route;
        this.accept = false;
        this.email = "";
        this.nickname = "";
        this.spinner = false;
        this.lang = 'fr';
        this.route.queryParams.subscribe(params => {
            if (params) {
                this.mydata.switchLang(params.lang);
            }
        });
    }
    GoToAreaPage() {
        this.spinner = true;
        console.log("Launching http request");
        this.mydata.email = this.email;
        this.mydata.nickname = this.nickname;
        this.mydata.timestart = new Date();
        this.mydata.sent = false;
        this.spinner = false;
        this.router.navigate(['/areas']);
    }
    GoToRanking() {
        this.router.navigate(['/ranking']);
    }
    switchLang(lang) {
        this.mydata.switchLang(lang);
    }
    ionViewDidEnter() {
    }
    ngOnInit() {
    }
    isEmailNOK() {
        const regExp = /^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/;
        if (regExp.test(this.email)) {
            if (this.email.indexOf(this.mydata.allvariables.valid_domain) >= 0) {
                return false;
            }
        }
        return true;
    }
    blockStart() {
        const regExp = /^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/;
        if (this.nickname.length > 1 && !this.isEmailNOK()) {
            return false;
        }
        return true;
    }
};
HomePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map