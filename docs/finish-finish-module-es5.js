function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["finish-finish-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/finish/finish.page.html":
  /*!*******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/finish/finish.page.html ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFinishFinishPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-img id=\"headlogo\" src=\"assets/images/HEAD_LOGO.png\"></ion-img>\r\n    </ion-buttons>\r\n    <ion-title>{{ mydata.allmessages.finish_title }}</ion-title>\r\n    <ion-buttons slot=\"end\" (click)=\"exitPage()\">\r\n      <ion-button>\r\n        {{ mydata.allmessages.finish_quit }}\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n  \r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <div id=\"containerflex\">\r\n    <div id=\"container\">\r\n\r\n\r\n      <ion-grid>\r\n        <ion-row class=\"ion-justify-content-center\">\r\n          <ion-col size-lg=\"8\" size-xs=\"12\">\r\n\r\n\r\n            <ion-card>\r\n            \r\n              <ion-card-content>\r\n\r\n                <table style=\"width:100%\">\r\n                  <tr>\r\n                    <td>\r\n                      <ion-img class=\"egg\" src=\"assets/images/Easter-Egg-left2.png\"></ion-img>\r\n                    </td>\r\n                    <td>\r\n                      <ion-card-title>{{ mydata.allmessages.finish_card_title }}</ion-card-title>\r\n                      {{ mydata.allmessages.finish_card_content }}\r\n                      \r\n                    </td>\r\n                    <td>\r\n                      <ion-img class=\"egg\" src=\"assets/images/Easter-Egg-right2.png\"></ion-img>\r\n                    </td>\r\n                  </tr>\r\n                </table>\r\n\r\n                <br>\r\n                      <img id=\"finishimg\" src=\"assets/images/FINISH.png\" alt=\"\">\r\n\r\n              </ion-card-content>\r\n            </ion-card>\r\n\r\n            <ion-card>\r\n              <ion-card-header>\r\n                <ion-card-title>{{ mydata.allmessages.finish_cardcomment_title }}</ion-card-title>\r\n              </ion-card-header>\r\n            \r\n              <ion-card-content>\r\n                <p class=\"score\">{{ mydata.allmessages.finish_cardcomment_content }}</p>\r\n                <p class=\"saving\"><ion-item>\r\n                  <ion-textarea [(ngModel)]=\"mycomment\"></ion-textarea>\r\n                  </ion-item>\r\n                </p>\r\n                <p class=\"saving\"><ion-button (click)=\"sendFeedback()\">{{mydata.allmessages.finish_cardcomment_button}} &nbsp;<ion-icon name=\"send-outline\"></ion-icon></ion-button></p>\r\n              \r\n              </ion-card-content>\r\n            </ion-card>\r\n\r\n            <ion-card>\r\n              <ion-card-header>\r\n                <ion-card-title>{{ mydata.allmessages.finish_cardtime_title }}</ion-card-title>\r\n              </ion-card-header>\r\n            \r\n              <ion-card-content>\r\n                <p class=\"score\">{{ mydata.allmessages.finish_cardtime_content }} {{mytime_min}} min. {{mytime_sec}} sec.</p>\r\n                <p class=\"saving\"*ngIf=\"spinner && mydata.allvariables.with_db\" ><ion-spinner name=\"bubbles\"></ion-spinner> <span>{{ mydata.allmessages.finish_cardtime_saving }}</span></p>\r\n                <p class=\"saving\" ><ion-button color=\"success\" (click)=\"GoToRanking()\">{{ mydata.allmessages.finish_ranking }}</ion-button></p>\r\n              \r\n              </ion-card-content>\r\n            </ion-card>\r\n\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n\r\n      <div id=\"margin\" >\r\n        \r\n      </div>\r\n\r\n    </div>\r\n    <div id=\"footer\"></div>\r\n  </div>\r\n\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/finish/finish-routing.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/finish/finish-routing.module.ts ***!
    \*************************************************/

  /*! exports provided: FinishPageRoutingModule */

  /***/
  function srcAppFinishFinishRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FinishPageRoutingModule", function () {
      return FinishPageRoutingModule;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _finish_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./finish.page */
    "./src/app/finish/finish.page.ts");

    var routes = [{
      path: '',
      component: _finish_page__WEBPACK_IMPORTED_MODULE_3__["FinishPage"]
    }];

    var FinishPageRoutingModule = function FinishPageRoutingModule() {
      _classCallCheck(this, FinishPageRoutingModule);
    };

    FinishPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], FinishPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/finish/finish.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/finish/finish.module.ts ***!
    \*****************************************/

  /*! exports provided: FinishPageModule */

  /***/
  function srcAppFinishFinishModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FinishPageModule", function () {
      return FinishPageModule;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _finish_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./finish-routing.module */
    "./src/app/finish/finish-routing.module.ts");
    /* harmony import */


    var _finish_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./finish.page */
    "./src/app/finish/finish.page.ts");

    var FinishPageModule = function FinishPageModule() {
      _classCallCheck(this, FinishPageModule);
    };

    FinishPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _finish_routing_module__WEBPACK_IMPORTED_MODULE_5__["FinishPageRoutingModule"]],
      declarations: [_finish_page__WEBPACK_IMPORTED_MODULE_6__["FinishPage"]]
    })], FinishPageModule);
    /***/
  },

  /***/
  "./src/app/finish/finish.page.scss":
  /*!*****************************************!*\
    !*** ./src/app/finish/finish.page.scss ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppFinishFinishPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#container {\n  text-align: center;\n  margin: auto auto;\n  width: 90%;\n  white-space: pre-wrap;\n}\n\n#containerflex {\n  text-align: center;\n  margin: auto auto;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-image: url('BACKGROUND.jpg');\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  overflow: auto;\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\nion-content ion-toolbar {\n  --background: translucent;\n}\n\n#footer {\n  position: absolute;\n  height: 10%;\n  width: 100%;\n  bottom: 0px;\n  background-image: url('eggs_footer.png');\n  background-position: center;\n  background-repeat: repeat-x;\n  background-size: contain;\n}\n\n#ranking {\n  margin-bottom: 6em;\n}\n\n#finishimg {\n  width: 400px;\n  max-width: 70vw;\n  max-height: 15%;\n  margin-top: 1em;\n}\n\nion-card {\n  --ion-background-color: rgba(255, 255, 255, 0.9);\n  --color:black;\n}\n\n#headlogo {\n  max-width: 50px;\n  max-height: 100px;\n}\n\n.egg {\n  max-width: 100px;\n}\n\nion-card, ion-card-content {\n  --color:black;\n}\n\n.score {\n  color: black;\n}\n\n.saving span {\n  margin: auto auto;\n  display: block;\n}\n\n.saving {\n  margin-top: 1em !important;\n}\n\n#margin {\n  width: 100%;\n  height: 5em;\n}\n\na:link, a:active, a:visited, a:hover {\n  text-decoration: inherit;\n  color: inherit;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmluaXNoL0M6XFxVc2Vyc1xcQ2VzYXJNaWd1ZWxcXERvY3VtZW50c1xcR2l0SHViXFxFZ2dIdW50MjAyMi9zcmNcXGFwcFxcZmluaXNoXFxmaW5pc2gucGFnZS5zY3NzIiwic3JjL2FwcC9maW5pc2gvZmluaXNoLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0EscUJBQUE7QUNDSjs7QURFRTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSx1Q0FBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUNDSjs7QURJRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQ0RKOztBRElFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBRUEsY0FBQTtFQUVBLFNBQUE7QUNISjs7QURNRTtFQUNFLHFCQUFBO0FDSEo7O0FETUU7RUFDRSx5QkFBQTtBQ0hKOztBRE9FO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSx3Q0FBQTtFQUNBLDJCQUFBO0VBQ0EsMkJBQUE7RUFDQSx3QkFBQTtBQ0pKOztBRE9FO0VBQ0Usa0JBQUE7QUNKSjs7QURPRTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUNKSjs7QURPRTtFQUNFLGdEQUFBO0VBQ0EsYUFBQTtBQ0pKOztBRE9FO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDSko7O0FEUUU7RUFDRSxnQkFBQTtBQ0xKOztBRFFFO0VBQ0UsYUFBQTtBQ0xKOztBRFFFO0VBQ0UsWUFBQTtBQ0xKOztBRFFFO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0FDTEo7O0FEU0U7RUFDRSwwQkFBQTtBQ05KOztBRFNFO0VBQ0UsV0FBQTtFQUNBLFdBQUE7QUNOSjs7QURVRTtFQUNFLHdCQUFBO0VBQ0EsY0FBQTtBQ1BKIiwiZmlsZSI6InNyYy9hcHAvZmluaXNoL2ZpbmlzaC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGFpbmVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjphdXRvIGF1dG87XHJcbiAgICB3aWR0aDo5MCU7XHJcbiAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XHJcbiAgXHJcbiAgfVxyXG4gICNjb250YWluZXJmbGV4IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjphdXRvIGF1dG87XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OjEwMCU7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2ltYWdlcy9CQUNLR1JPVU5ELmpwZycpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICBcclxuICB9XHJcblxyXG4gIFxyXG4gICNjb250YWluZXIgc3Ryb25nIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xyXG4gIH1cclxuICBcclxuICAjY29udGFpbmVyIHAge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgXHJcbiAgICBjb2xvcjogIzhjOGM4YztcclxuICBcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbiAgXHJcbiAgI2NvbnRhaW5lciBhIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgaW9uLWNvbnRlbnQgaW9uLXRvb2xiYXIge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc2x1Y2VudDtcclxuICB9XHJcblxyXG5cclxuICAjZm9vdGVye1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgaGVpZ2h0OiAxMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaW1hZ2VzL2VnZ3NfZm9vdGVyLnBuZycpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gIH1cclxuXHJcbiAgI3Jhbmtpbmcge1xyXG4gICAgbWFyZ2luLWJvdHRvbTo2ZW07XHJcbiAgfVxyXG5cclxuICAjZmluaXNoaW1nIHtcclxuICAgIHdpZHRoOjQwMHB4O1xyXG4gICAgbWF4LXdpZHRoOjcwdnc7XHJcbiAgICBtYXgtaGVpZ2h0OjE1JTtcclxuICAgIG1hcmdpbi10b3A6MWVtO1xyXG4gIH1cclxuXHJcbiAgaW9uLWNhcmQge1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xyXG4gICAgLS1jb2xvcjpibGFjaztcclxuICAgIFxyXG4gIH1cclxuICAjaGVhZGxvZ28ge1xyXG4gICAgbWF4LXdpZHRoOiA1MHB4O1xyXG4gICAgbWF4LWhlaWdodDogMTAwcHg7XHJcbiAgfVxyXG5cclxuXHJcbiAgLmVnZyB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMHB4O1xyXG4gIH1cclxuXHJcbiAgaW9uLWNhcmQsIGlvbi1jYXJkLWNvbnRlbnR7XHJcbiAgICAtLWNvbG9yOmJsYWNrO1xyXG4gIH1cclxuXHJcbiAgLnNjb3JlIHtcclxuICAgIGNvbG9yOmJsYWNrO1xyXG4gIH1cclxuXHJcbiAgLnNhdmluZyBzcGFue1xyXG4gICAgbWFyZ2luOmF1dG8gYXV0bztcclxuICAgIGRpc3BsYXk6YmxvY2s7XHJcblxyXG4gIH1cclxuXHJcbiAgLnNhdmluZyB7XHJcbiAgICBtYXJnaW4tdG9wOjFlbSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgI21hcmdpbiB7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgaGVpZ2h0OiA1ZW07XHJcblxyXG4gIH1cclxuXHJcbiAgYTpsaW5rLCAgYTphY3RpdmUsICBhOnZpc2l0ZWQsICBhOmhvdmVyICAge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBpbmhlcml0O1xyXG4gICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICBcclxuICB9XHJcbiAgIiwiI2NvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiBhdXRvIGF1dG87XG4gIHdpZHRoOiA5MCU7XG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbn1cblxuI2NvbnRhaW5lcmZsZXgge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogYXV0byBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogYXV0bztcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9CQUNLR1JPVU5ELmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuI2NvbnRhaW5lciBzdHJvbmcge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xufVxuXG4jY29udGFpbmVyIHAge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBjb2xvcjogIzhjOGM4YztcbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmlvbi1jb250ZW50IGlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc2x1Y2VudDtcbn1cblxuI2Zvb3RlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBib3R0b206IDBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9lZ2dzX2Zvb3Rlci5wbmdcIik7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG59XG5cbiNyYW5raW5nIHtcbiAgbWFyZ2luLWJvdHRvbTogNmVtO1xufVxuXG4jZmluaXNoaW1nIHtcbiAgd2lkdGg6IDQwMHB4O1xuICBtYXgtd2lkdGg6IDcwdnc7XG4gIG1heC1oZWlnaHQ6IDE1JTtcbiAgbWFyZ2luLXRvcDogMWVtO1xufVxuXG5pb24tY2FyZCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcbiAgLS1jb2xvcjpibGFjaztcbn1cblxuI2hlYWRsb2dvIHtcbiAgbWF4LXdpZHRoOiA1MHB4O1xuICBtYXgtaGVpZ2h0OiAxMDBweDtcbn1cblxuLmVnZyB7XG4gIG1heC13aWR0aDogMTAwcHg7XG59XG5cbmlvbi1jYXJkLCBpb24tY2FyZC1jb250ZW50IHtcbiAgLS1jb2xvcjpibGFjaztcbn1cblxuLnNjb3JlIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uc2F2aW5nIHNwYW4ge1xuICBtYXJnaW46IGF1dG8gYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5zYXZpbmcge1xuICBtYXJnaW4tdG9wOiAxZW0gIWltcG9ydGFudDtcbn1cblxuI21hcmdpbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDVlbTtcbn1cblxuYTpsaW5rLCBhOmFjdGl2ZSwgYTp2aXNpdGVkLCBhOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBpbmhlcml0O1xuICBjb2xvcjogaW5oZXJpdDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/finish/finish.page.ts":
  /*!***************************************!*\
    !*** ./src/app/finish/finish.page.ts ***!
    \***************************************/

  /*! exports provided: FinishPage */

  /***/
  function srcAppFinishFinishPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FinishPage", function () {
      return FinishPage;
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

    var FinishPage = /*#__PURE__*/function () {
      function FinishPage(mydata, router, http) {
        _classCallCheck(this, FinishPage);

        this.mydata = mydata;
        this.router = router;
        this.http = http;
        this.mytime_min = 0;
        this.mytime_sec = 0;
        this.spinner = true;
        this.share = true;
        this.linkedinlink = "";
        this.mycomment = "";
        this.mydata.timeend = new Date();
        this.mytime_min = Math.trunc((this.mydata.timeend - this.mydata.timestart) / 1000 / 60);
        this.mytime_sec = Math.trunc((this.mydata.timeend - this.mydata.timestart) / 1000 - this.mytime_min * 60);
        if (this.mydata.allvariables.with_db) this.sendInfoToDB();

        if (isNaN(this.mytime_min) || isNaN(this.mytime_sec)) {//Not sharing
        } else {
          this.share = true;
          this.linkedinlink = "https://www.linkedin.com/shareArticle?mini=true&url=https%3A//cesarmiguel85.github.io/EggHunt2020/&title=Virtual%20Easter%20Egg%20Hunt%202020&summary=Take%20a%20short%20trip%20around%20the%20world%20with%20this%20virtual%20Easter%20egg%20hunt!%0AI%20just%20did%20it%20and%20got%20a%20score%20of%20" + this.mytime_min + "min.%20" + this.mytime_sec + "sec.";
        }
      }

      _createClass(FinishPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "exitPage",
        value: function exitPage() {
          window.location.replace(this.mydata.allvariables.root);
          this.router.navigate(['/home']);
        }
      }, {
        key: "sendInfoToDB",
        value: function sendInfoToDB() {
          var _this = this;

          this.mydata.mytime = Math.round((this.mydata.timeend - this.mydata.timestart) / 1000);

          if (this.mydata.nickname.length > 0 && this.mydata.email.length > 0 && this.mydata.mytime > 0 && !this.mydata.sent) {
            // Http Headers
            var postData = {
              "sheet": "Scores",
              "nickname": this.mydata.nickname,
              "email": this.mydata.email,
              "time": this.mydata.mytime,
              "ok_message": this.mydata.allmessages.finish_scores_ok_message
            };
            console.log("Launching http request score");
            this.mydata.requestPostJQForm(this.mydata.allvariables.db_endpoint_log, postData).then(function (data) {
              console.log(data);
              console.log("DATA PARSED"); //var JSONdata = JSON.parse(data.toString());

              var JSONdata = data;
              console.log(JSONdata);

              if (JSONdata.ok == 1) {
                _this.mydata.presentToastBottom(JSONdata.message);
              } else {
                _this.mydata.presentToastBottom(JSONdata.error);
              }

              _this.mydata.sent = true;
              _this.spinner = false;
            })["catch"](function (error) {
              console.log(error);

              _this.mydata.presentToastBottom(_this.mydata.allmessages.finish_scores_nok_message);

              _this.spinner = false;
            });
          } else {
            if (this.mydata.nickname.length <= 0 && this.mydata.email.length <= 0 && (this.mydata.mytime === 0 || isNaN(this.mydata.mytime))) this.mydata.presentToastBottom("Des données sont manquantes... vous n'avez pas suivi le parcours du jeu :-(");
            if (this.mydata.sent) this.mydata.presentToastBottom("Données déjà envoyées...");
          }
        }
      }, {
        key: "formatDate",
        value: function formatDate(mydate) {
          if (mydate == undefined) {
            mydate = new Date();
          }

          var yyyy = mydate.getFullYear().toString();
          var mm = (mydate.getMonth() + 1).toString();
          var dd = mydate.getDate().toString();
          var H = mydate.getHours().toString();
          var M = mydate.getMinutes().toString();
          var S = mydate.getSeconds().toString();
          return yyyy + '-' + (mm[1] ? mm : "0" + mm[0]) + '-' + (dd[1] ? dd : "0" + dd[0]) + ' ' + (H[1] ? H : "0" + H[0]) + ':' + (M[1] ? M : "0" + M[0]) + ':' + (S[1] ? S : "0" + S[0]);
        }
      }, {
        key: "GoToRanking",
        value: function GoToRanking() {
          this.router.navigate(['/ranking']);
        }
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          console.log({
            "nickname": this.mydata.nickname,
            "email": this.mydata.email,
            "comment": this.mycomment,
            "time": this.mydata.mytime,
            "sent": this.mydata.sent
          });
        }
      }, {
        key: "shareLinkedIn",
        value: function shareLinkedIn() {}
      }, {
        key: "sendFeedback",
        value: function sendFeedback() {
          var _this2 = this;

          var postData = {
            "sheet": "Comments",
            "nickname": this.mydata.nickname,
            "email": this.mydata.email,
            "comment": this.mycomment,
            "ok_message": this.mydata.allmessages.finish_comments_ok_message
          };
          console.log("Launching hhtp request comment");
          this.mydata.requestPostJQForm(this.mydata.allvariables.db_endpoint_log, postData).then(function (data) {
            console.log(data);
            console.log("DATA PARSED"); //var JSONdata = JSON.parse(data.toString());

            var JSONdata = data;
            console.log(JSONdata);

            if (JSONdata.ok == 1) {
              _this2.mydata.presentToastBottom(JSONdata.message);
            } else {
              _this2.mydata.presentToastBottom(JSONdata.error);
            }

            _this2.spinner = false;
          })["catch"](function (error) {
            console.log(error);

            _this2.mydata.presentToastBottom(_this2.mydata.allmessages.finish_comments_nok_message);

            _this2.spinner = false;
          });
        }
      }]);

      return FinishPage;
    }();

    FinishPage.ctorParameters = function () {
      return [{
        type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }];
    };

    FinishPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-finish',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./finish.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/finish/finish.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./finish.page.scss */
      "./src/app/finish/finish.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])], FinishPage);
    /***/
  }
}]);
//# sourceMappingURL=finish-finish-module-es5.js.map