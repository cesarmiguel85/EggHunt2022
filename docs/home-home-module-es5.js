function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\n<ion-content [fullscreen]=\"true\">\n  <div id=\"containerflex\">\n\n    <ion-button *ngIf=\"mydata.lang==='fr'\" fill=\"outline\" (click)=\"switchLang('en')\" id=\"switch\" slot=\"end\">{{mydata.allmessages.switch_lang}}</ion-button>\n          <ion-button *ngIf=\"mydata.lang==='en'\" fill=\"outline\" (click)=\"switchLang('fr')\" id=\"switch\" slot=\"end\">{{mydata.allmessages.switch_lang}}</ion-button>\n    <div id=\"container\">\n\n      <ion-grid>\n        <ion-row class=\"ion-justify-content-center\">\n          <ion-col size-lg=\"8\" size-xs=\"12\">\n            <div>\n\n\n              <ion-card>\n\n                <img id=\"homelogo\" src=\"assets/images/HOME_LOGO.png\"/>\n                <ion-card-content>\n\n                  <ion-card-title>{{mydata.allmessages.home_title}}</ion-card-title>\n                  <p id=\"home_p\">{{mydata.allmessages.home_desc}}</p>\n                </ion-card-content>\n              </ion-card>\n\n              <ion-card *ngIf=\"mydata.allvariables.with_db\" class=\"cardform\">\n\n                <ion-card-content>\n\n                  <ion-list lines=\"full\" class=\"myform\">\n\n                    <ion-item>\n                      <ion-label position=\"stacked\">{{mydata.allmessages.home_nickname}}<ion-text color=\"danger\"> *</ion-text></ion-label>\n                      <ion-input required type=\"email\" [(ngModel)]=\"nickname\"></ion-input>\n                    </ion-item>\n                    <ion-item>\n                      <ion-label position=\"stacked\">{{mydata.allmessages.home_email}}<ion-text color=\"danger\"> *</ion-text><ion-text color=\"danger\" *ngIf=\"isEmailNOK()\"> {{mydata.allmessages.home_email_wrong}}</ion-text></ion-label>\n                      <ion-input required type=\"email\" [(ngModel)]=\"email\"></ion-input>\n                    </ion-item>\n\n                  </ion-list>\n\n                  <div class=\"ion-padding\">\n                    <ion-button expand=\"block\" (click)=\"GoToAreaPage()\" class=\"ion-no-margin\" disabled=\"{{blockStart()}}\">{{mydata.allmessages.home_start}} <ion-spinner *ngIf=\"spinner\" name=\"bubbles\"></ion-spinner></ion-button>\n                  </div>\n                </ion-card-content>\n              </ion-card>\n\n              <ion-card *ngIf=\"!mydata.allvariables.with_db\">\n                <ion-card-content>\n                  <div class=\"ion-padding\">\n                    <ion-button expand=\"block\" (click)=\"GoToAreaPage()\" class=\"ion-no-margin\">{{mydata.allmessages.home_start}}<ion-spinner *ngIf=\"spinner\" name=\"bubbles\"></ion-spinner></ion-button>\n                  </div>\n                </ion-card-content>\n              </ion-card>\n              <div id=\"ranking\" *ngIf=\"mydata.allvariables.with_db\">\n                <ion-button color=\"success\" (click)=\"GoToRanking()\">{{ mydata.allmessages.finish_ranking }}</ion-button>\n              </div>\n\n\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n\n\n\n\n      <div id=\"margin\" >\n\n      </div>\n    </div>\n    <div id=\"footer\"></div>\n  </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/home/home.module.ts":
  /*!*************************************!*\
    !*** ./src/app/home/home.module.ts ***!
    \*************************************/

  /*! exports provided: HomePageModule */

  /***/
  function srcAppHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
      return HomePageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/home/home.page.ts");

    var HomePageModule = function HomePageModule() {
      _classCallCheck(this, HomePageModule);
    };

    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
      }])],
      declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })], HomePageModule);
    /***/
  },

  /***/
  "./src/app/home/home.page.scss":
  /*!*************************************!*\
    !*** ./src/app/home/home.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#container {\n  text-align: center;\n  margin: auto auto;\n  width: 90%;\n}\n\n#containerflex {\n  text-align: center;\n  margin: auto auto;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-image: url('BACKGROUND.jpg');\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\nion-content ion-toolbar {\n  --background: translucent;\n}\n\n.subtitlebutton {\n  font-size: x-small;\n  clear: both;\n}\n\n.buttontext {\n  width: 100%;\n}\n\n.labelaccept {\n  font-size: 14px;\n}\n\n#footer {\n  position: absolute;\n  height: 10%;\n  width: 100%;\n  bottom: 0px;\n  background-image: url('eggs_footer.png');\n  background-position: center;\n  background-repeat: repeat-x;\n  background-size: contain;\n}\n\n.myform {\n  width: 100%;\n  margin: auto auto;\n}\n\n#ranking {\n  margin-bottom: 4em;\n  margin-top: 1em;\n}\n\nion-card {\n  --ion-background-color: rgba(255, 255, 255, 0.9);\n  --color:black;\n}\n\nion-list {\n  --ion-item-background: rgba(255, 255, 255, 0.6);\n}\n\n.cardform {\n  width: 80%;\n  margin: auto auto;\n  --ion-item-background: rgba(255, 255, 255, 0.95);\n}\n\n#homelogo {\n  height: 120px;\n  margin-top: 1em;\n}\n\n#home_p {\n  font-size: 14px !important;\n  color: black !important;\n  margin-top: 1em !important;\n}\n\n#switch {\n  margin: 1em 1em auto auto;\n  --background:white;\n}\n\n#margin {\n  width: 100%;\n  height: 5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jZXNhci9Eb2N1bWVudHMvRGV2ZWxvcG1lbnQvRWdnSHVudDIwMjIvc3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSx1Q0FBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtBQ0NGOztBREdBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDQUY7O0FER0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFFQSxjQUFBO0VBRUEsU0FBQTtBQ0ZGOztBREtBO0VBQ0UscUJBQUE7QUNGRjs7QURLQTtFQUNFLHlCQUFBO0FDRkY7O0FES0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUNGRjs7QURLQTtFQUNFLFdBQUE7QUNGRjs7QURJQTtFQUNFLGVBQUE7QUNERjs7QURLQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esd0NBQUE7RUFDQSwyQkFBQTtFQUNBLDJCQUFBO0VBQ0Esd0JBQUE7QUNGRjs7QURJQTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtBQ0RGOztBREdBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0FDQUY7O0FER0E7RUFDRSxnREFBQTtFQUNBLGFBQUE7QUNBRjs7QURJQTtFQUNFLCtDQUFBO0FDREY7O0FESUE7RUFDRSxVQUFBO0VBQVUsaUJBQUE7RUFDVixnREFBQTtBQ0FGOztBREdBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7QUNBRjs7QURHQTtFQUNFLDBCQUFBO0VBQ0EsdUJBQUE7RUFDQSwwQkFBQTtBQ0FGOztBREdBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtBQ0FGOztBRElBO0VBQ0UsV0FBQTtFQUNBLFdBQUE7QUNERiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46YXV0byBhdXRvO1xuICB3aWR0aDo5MCU7XG5cbn1cbiNjb250YWluZXJmbGV4IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46YXV0byBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OjEwMCU7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWFnZXMvQkFDS0dST1VORC5qcGcnKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuXG59XG5cbiNjb250YWluZXIgc3Ryb25nIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjZweDtcbn1cblxuI2NvbnRhaW5lciBwIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcblxuICBjb2xvcjogIzhjOGM4YztcblxuICBtYXJnaW46IDA7XG59XG5cbiNjb250YWluZXIgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuaW9uLWNvbnRlbnQgaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zbHVjZW50O1xufVxuXG4uc3VidGl0bGVidXR0b24ge1xuICBmb250LXNpemU6IHgtc21hbGw7XG4gIGNsZWFyOiBib3RoO1xufVxuXG4uYnV0dG9udGV4dHtcbiAgd2lkdGg6MTAwJTtcbn1cbi5sYWJlbGFjY2VwdCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcblxufVxuXG4jZm9vdGVye1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMTAlO1xuICB3aWR0aDogMTAwJTtcbiAgYm90dG9tOiAwcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2ltYWdlcy9lZ2dzX2Zvb3Rlci5wbmcnKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbn1cbi5teWZvcm0ge1xuICB3aWR0aDoxMDAlO1xuICBtYXJnaW46YXV0byBhdXRvO1xufVxuI3Jhbmtpbmcge1xuICBtYXJnaW4tYm90dG9tOjRlbTtcbiAgbWFyZ2luLXRvcDoxZW07XG59XG5cbmlvbi1jYXJkIHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xuICAtLWNvbG9yOmJsYWNrO1xuICBcbn1cblxuaW9uLWxpc3Qge1xuICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTs7XG59XG5cbi5jYXJkZm9ybSB7XG4gIHdpZHRoOjgwJTttYXJnaW46YXV0byBhdXRvO1xuICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45NSk7O1xufVxuXG4jaG9tZWxvZ28ge1xuICBoZWlnaHQ6MTIwcHg7XG4gIG1hcmdpbi10b3A6MWVtO1xufVxuXG4jaG9tZV9wIHtcbiAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAxZW0gIWltcG9ydGFudDtcbn1cblxuI3N3aXRjaCB7XG4gIG1hcmdpbjoxZW0gMWVtIGF1dG8gYXV0bztcbiAgLS1iYWNrZ3JvdW5kOndoaXRlO1xufVxuXG5cbiNtYXJnaW4ge1xuICB3aWR0aDoxMDAlO1xuICBoZWlnaHQ6IDVlbTtcblxufSIsIiNjb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogYXV0byBhdXRvO1xuICB3aWR0aDogOTAlO1xufVxuXG4jY29udGFpbmVyZmxleCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiBhdXRvIGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL0JBQ0tHUk9VTkQuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbiNjb250YWluZXIgc3Ryb25nIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjZweDtcbn1cblxuI2NvbnRhaW5lciBwIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgY29sb3I6ICM4YzhjOGM7XG4gIG1hcmdpbjogMDtcbn1cblxuI2NvbnRhaW5lciBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5pb24tY29udGVudCBpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNsdWNlbnQ7XG59XG5cbi5zdWJ0aXRsZWJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogeC1zbWFsbDtcbiAgY2xlYXI6IGJvdGg7XG59XG5cbi5idXR0b250ZXh0IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5sYWJlbGFjY2VwdCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuI2Zvb3RlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBib3R0b206IDBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9lZ2dzX2Zvb3Rlci5wbmdcIik7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG59XG5cbi5teWZvcm0ge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiBhdXRvIGF1dG87XG59XG5cbiNyYW5raW5nIHtcbiAgbWFyZ2luLWJvdHRvbTogNGVtO1xuICBtYXJnaW4tdG9wOiAxZW07XG59XG5cbmlvbi1jYXJkIHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xuICAtLWNvbG9yOmJsYWNrO1xufVxuXG5pb24tbGlzdCB7XG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xufVxuXG4uY2FyZGZvcm0ge1xuICB3aWR0aDogODAlO1xuICBtYXJnaW46IGF1dG8gYXV0bztcbiAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTUpO1xufVxuXG4jaG9tZWxvZ28ge1xuICBoZWlnaHQ6IDEyMHB4O1xuICBtYXJnaW4tdG9wOiAxZW07XG59XG5cbiNob21lX3Age1xuICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDFlbSAhaW1wb3J0YW50O1xufVxuXG4jc3dpdGNoIHtcbiAgbWFyZ2luOiAxZW0gMWVtIGF1dG8gYXV0bztcbiAgLS1iYWNrZ3JvdW5kOndoaXRlO1xufVxuXG4jbWFyZ2luIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNWVtO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/home/home.page.ts":
  /*!***********************************!*\
    !*** ./src/app/home/home.page.ts ***!
    \***********************************/

  /*! exports provided: HomePage */

  /***/
  function srcAppHomeHomePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePage", function () {
      return HomePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../data.service */
    "./src/app/data.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var HomePage = /*#__PURE__*/function () {
      function HomePage(router, mydata, http, route) {
        var _this = this;

        _classCallCheck(this, HomePage);

        this.router = router;
        this.mydata = mydata;
        this.http = http;
        this.route = route;
        this.accept = false;
        this.email = "";
        this.nickname = "";
        this.spinner = false;
        this.lang = 'fr';
        this.route.queryParams.subscribe(function (params) {
          if (params) {
            _this.mydata.switchLang(params.lang);
          }
        });
      }

      _createClass(HomePage, [{
        key: "GoToAreaPage",
        value: function GoToAreaPage() {
          this.spinner = true;
          console.log("Launching http request");
          this.mydata.email = this.email;
          this.mydata.nickname = this.nickname;
          this.mydata.timestart = new Date();
          this.mydata.sent = false;
          this.spinner = false;
          this.router.navigate(['/areas']);
        }
      }, {
        key: "GoToRanking",
        value: function GoToRanking() {
          this.router.navigate(['/ranking']);
        }
      }, {
        key: "switchLang",
        value: function switchLang(lang) {
          this.mydata.switchLang(lang);
        }
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {}
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "isEmailNOK",
        value: function isEmailNOK() {
          var regExp = /^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/;

          if (regExp.test(this.email)) {
            if (this.email.indexOf(this.mydata.allvariables.valid_domain) >= 0) {
              return false;
            }
          }

          return true;
        }
      }, {
        key: "blockStart",
        value: function blockStart() {
          var regExp = /^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/;

          if (this.nickname.length > 1 && !this.isEmailNOK()) {
            return false;
          }

          return true;
        }
      }]);

      return HomePage;
    }();

    HomePage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.page.scss */
      "./src/app/home/home.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])], HomePage);
    /***/
  }
}]);
//# sourceMappingURL=home-home-module-es5.js.map