(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["finish-finish-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/finish/finish.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/finish/finish.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-img id=\"headlogo\" src=\"assets/images/HEAD_LOGO.png\"></ion-img>\n    </ion-buttons>\n    <ion-title>{{ mydata.allmessages.finish_title }}</ion-title>\n    <ion-buttons slot=\"end\" (click)=\"exitPage()\">\n      <ion-button>\n        {{ mydata.allmessages.finish_quit }}\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  \n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <div id=\"containerflex\">\n    <div id=\"container\">\n\n\n      <ion-grid>\n        <ion-row class=\"ion-justify-content-center\">\n          <ion-col size-lg=\"8\" size-xs=\"12\">\n\n\n            <ion-card>\n            \n              <ion-card-content>\n\n                <table style=\"width:100%\">\n                  <tr>\n                    <td>\n                      <ion-img class=\"egg\" src=\"assets/images/Easter-Egg-left2.png\"></ion-img>\n                    </td>\n                    <td>\n                      <ion-card-title>{{ mydata.allmessages.finish_card_title }}</ion-card-title>\n                      {{ mydata.allmessages.finish_card_content }}\n                      \n                    </td>\n                    <td>\n                      <ion-img class=\"egg\" src=\"assets/images/Easter-Egg-right2.png\"></ion-img>\n                    </td>\n                  </tr>\n                </table>\n\n                <br>\n                      <img id=\"finishimg\" src=\"assets/images/FINISH.png\" alt=\"\">\n\n              </ion-card-content>\n            </ion-card>\n\n            <ion-card>\n              <ion-card-header>\n                <ion-card-title>{{ mydata.allmessages.finish_cardcomment_title }}</ion-card-title>\n              </ion-card-header>\n            \n              <ion-card-content>\n                <p class=\"score\">{{ mydata.allmessages.finish_cardcomment_content }} {{mytime_min}} min. {{mytime_sec}} sec.</p>\n                <p class=\"saving\"><ion-item>\n                  <ion-textarea [(ngModel)]=\"mycomment\"></ion-textarea>\n                  </ion-item>\n                </p>\n                <p class=\"saving\"><ion-button (click)=\"sendFeedback()\">{{mydata.allmessages.finish_cardcomment_button}} &nbsp;<ion-icon name=\"send-outline\"></ion-icon></ion-button></p>\n              \n              </ion-card-content>\n            </ion-card>\n\n            <ion-card>\n              <ion-card-header>\n                <ion-card-title>{{ mydata.allmessages.finish_cardtime_title }}</ion-card-title>\n              </ion-card-header>\n            \n              <ion-card-content>\n                <p class=\"score\">{{ mydata.allmessages.finish_cardtime_content }} {{mytime_min}} min. {{mytime_sec}} sec.</p>\n                <p class=\"saving\"*ngIf=\"spinner && mydata.allvariables.with_db\" ><ion-spinner name=\"bubbles\"></ion-spinner> <span>{{ mydata.allmessages.finish_cardtime_saving }}</span></p>\n                <p class=\"saving\" ><ion-button color=\"success\" (click)=\"GoToRanking()\">{{ mydata.allmessages.finish_ranking }}</ion-button></p>\n              \n              </ion-card-content>\n            </ion-card>\n\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n      <div id=\"margin\" >\n        \n      </div>\n\n    </div>\n    <div id=\"footer\"></div>\n  </div>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/finish/finish-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/finish/finish-routing.module.ts ***!
  \*************************************************/
/*! exports provided: FinishPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinishPageRoutingModule", function() { return FinishPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _finish_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./finish.page */ "./src/app/finish/finish.page.ts");




const routes = [
    {
        path: '',
        component: _finish_page__WEBPACK_IMPORTED_MODULE_3__["FinishPage"]
    }
];
let FinishPageRoutingModule = class FinishPageRoutingModule {
};
FinishPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FinishPageRoutingModule);



/***/ }),

/***/ "./src/app/finish/finish.module.ts":
/*!*****************************************!*\
  !*** ./src/app/finish/finish.module.ts ***!
  \*****************************************/
/*! exports provided: FinishPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinishPageModule", function() { return FinishPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _finish_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./finish-routing.module */ "./src/app/finish/finish-routing.module.ts");
/* harmony import */ var _finish_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./finish.page */ "./src/app/finish/finish.page.ts");







let FinishPageModule = class FinishPageModule {
};
FinishPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _finish_routing_module__WEBPACK_IMPORTED_MODULE_5__["FinishPageRoutingModule"]
        ],
        declarations: [_finish_page__WEBPACK_IMPORTED_MODULE_6__["FinishPage"]]
    })
], FinishPageModule);



/***/ }),

/***/ "./src/app/finish/finish.page.scss":
/*!*****************************************!*\
  !*** ./src/app/finish/finish.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#container {\n  text-align: center;\n  margin: auto auto;\n  width: 90%;\n  white-space: pre-wrap;\n}\n\n#containerflex {\n  text-align: center;\n  margin: auto auto;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-image: url('BACKGROUND.jpg');\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  overflow: auto;\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\nion-content ion-toolbar {\n  --background: translucent;\n}\n\n#footer {\n  position: absolute;\n  height: 10%;\n  width: 100%;\n  bottom: 0px;\n  background-image: url('eggs_footer.png');\n  background-position: center;\n  background-repeat: repeat-x;\n  background-size: contain;\n}\n\n#ranking {\n  margin-bottom: 6em;\n}\n\n#finishimg {\n  width: 400px;\n  max-width: 70vw;\n  max-height: 15%;\n  margin-top: 1em;\n}\n\nion-card {\n  --ion-background-color: rgba(255, 255, 255, 0.9);\n  --color:black;\n}\n\n#headlogo {\n  max-width: 50px;\n  max-height: 100px;\n}\n\n.egg {\n  max-width: 100px;\n}\n\nion-card, ion-card-content {\n  --color:black;\n}\n\n.score {\n  color: black;\n}\n\n.saving span {\n  margin: auto auto;\n  display: block;\n}\n\n.saving {\n  margin-top: 1em !important;\n}\n\n#margin {\n  width: 100%;\n  height: 5em;\n}\n\na:link, a:active, a:visited, a:hover {\n  text-decoration: inherit;\n  color: inherit;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jZXNhci9Eb2N1bWVudHMvRGV2ZWxvcG1lbnQvRWdnSHVudDIwMjIvc3JjL2FwcC9maW5pc2gvZmluaXNoLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZmluaXNoL2ZpbmlzaC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLHFCQUFBO0FDQ0o7O0FERUU7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsdUNBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FDQ0o7O0FESUU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUNESjs7QURJRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFFQSxTQUFBO0FDSEo7O0FETUU7RUFDRSxxQkFBQTtBQ0hKOztBRE1FO0VBQ0UseUJBQUE7QUNISjs7QURPRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esd0NBQUE7RUFDQSwyQkFBQTtFQUNBLDJCQUFBO0VBQ0Esd0JBQUE7QUNKSjs7QURPRTtFQUNFLGtCQUFBO0FDSko7O0FET0U7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FDSko7O0FET0U7RUFDRSxnREFBQTtFQUNBLGFBQUE7QUNKSjs7QURPRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQ0pKOztBRFFFO0VBQ0UsZ0JBQUE7QUNMSjs7QURRRTtFQUNFLGFBQUE7QUNMSjs7QURRRTtFQUNFLFlBQUE7QUNMSjs7QURRRTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtBQ0xKOztBRFNFO0VBQ0UsMEJBQUE7QUNOSjs7QURTRTtFQUNFLFdBQUE7RUFDQSxXQUFBO0FDTko7O0FEVUU7RUFDRSx3QkFBQTtFQUNBLGNBQUE7QUNQSiIsImZpbGUiOiJzcmMvYXBwL2ZpbmlzaC9maW5pc2gucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjphdXRvIGF1dG87XG4gICAgd2lkdGg6OTAlO1xuICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbiAgXG4gIH1cbiAgI2NvbnRhaW5lcmZsZXgge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46YXV0byBhdXRvO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6MTAwJTtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWFnZXMvQkFDS0dST1VORC5qcGcnKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICBcbiAgfVxuXG4gIFxuICAjY29udGFpbmVyIHN0cm9uZyB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xuICB9XG4gIFxuICAjY29udGFpbmVyIHAge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgXG4gICAgY29sb3I6ICM4YzhjOGM7XG4gIFxuICAgIG1hcmdpbjogMDtcbiAgfVxuICBcbiAgI2NvbnRhaW5lciBhIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cbiAgXG4gIGlvbi1jb250ZW50IGlvbi10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zbHVjZW50O1xuICB9XG5cblxuICAjZm9vdGVye1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBoZWlnaHQ6IDEwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3R0b206IDBweDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWFnZXMvZWdnc19mb290ZXIucG5nJyk7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIH1cblxuICAjcmFua2luZyB7XG4gICAgbWFyZ2luLWJvdHRvbTo2ZW07XG4gIH1cblxuICAjZmluaXNoaW1nIHtcbiAgICB3aWR0aDo0MDBweDtcbiAgICBtYXgtd2lkdGg6NzB2dztcbiAgICBtYXgtaGVpZ2h0OjE1JTtcbiAgICBtYXJnaW4tdG9wOjFlbTtcbiAgfVxuXG4gIGlvbi1jYXJkIHtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XG4gICAgLS1jb2xvcjpibGFjaztcbiAgICBcbiAgfVxuICAjaGVhZGxvZ28ge1xuICAgIG1heC13aWR0aDogNTBweDtcbiAgICBtYXgtaGVpZ2h0OiAxMDBweDtcbiAgfVxuXG5cbiAgLmVnZyB7XG4gICAgbWF4LXdpZHRoOiAxMDBweDtcbiAgfVxuXG4gIGlvbi1jYXJkLCBpb24tY2FyZC1jb250ZW50e1xuICAgIC0tY29sb3I6YmxhY2s7XG4gIH1cblxuICAuc2NvcmUge1xuICAgIGNvbG9yOmJsYWNrO1xuICB9XG5cbiAgLnNhdmluZyBzcGFue1xuICAgIG1hcmdpbjphdXRvIGF1dG87XG4gICAgZGlzcGxheTpibG9jaztcblxuICB9XG5cbiAgLnNhdmluZyB7XG4gICAgbWFyZ2luLXRvcDoxZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gICNtYXJnaW4ge1xuICAgIHdpZHRoOjEwMCU7XG4gICAgaGVpZ2h0OiA1ZW07XG5cbiAgfVxuXG4gIGE6bGluaywgIGE6YWN0aXZlLCAgYTp2aXNpdGVkLCAgYTpob3ZlciAgIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IGluaGVyaXQ7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gICAgXG4gIH1cbiAgIiwiI2NvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiBhdXRvIGF1dG87XG4gIHdpZHRoOiA5MCU7XG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbn1cblxuI2NvbnRhaW5lcmZsZXgge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogYXV0byBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogYXV0bztcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9CQUNLR1JPVU5ELmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuI2NvbnRhaW5lciBzdHJvbmcge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xufVxuXG4jY29udGFpbmVyIHAge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBjb2xvcjogIzhjOGM4YztcbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmlvbi1jb250ZW50IGlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc2x1Y2VudDtcbn1cblxuI2Zvb3RlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBib3R0b206IDBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9lZ2dzX2Zvb3Rlci5wbmdcIik7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG59XG5cbiNyYW5raW5nIHtcbiAgbWFyZ2luLWJvdHRvbTogNmVtO1xufVxuXG4jZmluaXNoaW1nIHtcbiAgd2lkdGg6IDQwMHB4O1xuICBtYXgtd2lkdGg6IDcwdnc7XG4gIG1heC1oZWlnaHQ6IDE1JTtcbiAgbWFyZ2luLXRvcDogMWVtO1xufVxuXG5pb24tY2FyZCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcbiAgLS1jb2xvcjpibGFjaztcbn1cblxuI2hlYWRsb2dvIHtcbiAgbWF4LXdpZHRoOiA1MHB4O1xuICBtYXgtaGVpZ2h0OiAxMDBweDtcbn1cblxuLmVnZyB7XG4gIG1heC13aWR0aDogMTAwcHg7XG59XG5cbmlvbi1jYXJkLCBpb24tY2FyZC1jb250ZW50IHtcbiAgLS1jb2xvcjpibGFjaztcbn1cblxuLnNjb3JlIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uc2F2aW5nIHNwYW4ge1xuICBtYXJnaW46IGF1dG8gYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5zYXZpbmcge1xuICBtYXJnaW4tdG9wOiAxZW0gIWltcG9ydGFudDtcbn1cblxuI21hcmdpbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDVlbTtcbn1cblxuYTpsaW5rLCBhOmFjdGl2ZSwgYTp2aXNpdGVkLCBhOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBpbmhlcml0O1xuICBjb2xvcjogaW5oZXJpdDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/finish/finish.page.ts":
/*!***************************************!*\
  !*** ./src/app/finish/finish.page.ts ***!
  \***************************************/
/*! exports provided: FinishPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinishPage", function() { return FinishPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");





let FinishPage = class FinishPage {
    constructor(mydata, router, http) {
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
        if (this.mydata.allvariables.with_db)
            this.sendInfoToDB();
        if (isNaN(this.mytime_min) || isNaN(this.mytime_sec)) {
            //Not sharing
        }
        else {
            this.share = true;
            this.linkedinlink = "https://www.linkedin.com/shareArticle?mini=true&url=https%3A//cesarmiguel85.github.io/EggHunt2020/&title=Virtual%20Easter%20Egg%20Hunt%202020&summary=Take%20a%20short%20trip%20around%20the%20world%20with%20this%20virtual%20Easter%20egg%20hunt!%0AI%20just%20did%20it%20and%20got%20a%20score%20of%20" + this.mytime_min + "min.%20" + this.mytime_sec + "sec.";
        }
    }
    ngOnInit() { }
    exitPage() {
        window.location.replace(this.mydata.allvariables.root);
        this.router.navigate(['/home']);
    }
    sendInfoToDB() {
        this.mydata.mytime = Math.round((this.mydata.timeend - this.mydata.timestart) / 1000);
        if (this.mydata.nickname.length > 0 &&
            this.mydata.email.length > 0 &&
            this.mydata.mytime > 0 &&
            !this.mydata.sent) {
            // Http Headers
            let postData = {
                "nickname": this.mydata.nickname,
                "email": this.mydata.email,
                "time": this.mydata.mytime,
            };
            console.log("Launching http request score");
            this.mydata.requestPostJQForm(this.mydata.allvariables.db_endpoint_log, postData)
                .then(data => {
                console.log(data);
                console.log("DATA PARSED");
                var JSONdata = JSON.parse(data.toString());
                console.log(JSONdata);
                if (JSONdata.ok == 1) {
                    this.mydata.presentToastBottom(JSONdata.message);
                }
                else {
                    this.mydata.presentToastBottom(JSONdata.error);
                }
                this.mydata.sent = true;
                this.spinner = false;
            })
                .catch(error => {
                console.log(error);
                this.mydata.presentToastBottom("On n'arrive pas à enregistrer votre score... désolé...");
                this.spinner = false;
            });
        }
        else {
            if (this.mydata.nickname.length <= 0 &&
                this.mydata.email.length <= 0 &&
                (this.mydata.mytime === 0 || isNaN(this.mydata.mytime)))
                this.mydata.presentToastBottom("Des données sont manquantes... vous n'avez pas suivi le parcours du jeu :-(");
            if (this.mydata.sent)
                this.mydata.presentToastBottom("Données déjà envoyées...");
        }
    }
    formatDate(mydate) {
        if (mydate == undefined) {
            mydate = new Date();
        }
        let yyyy = mydate.getFullYear().toString();
        let mm = (mydate.getMonth() + 1).toString();
        let dd = mydate.getDate().toString();
        let H = mydate.getHours().toString();
        let M = mydate.getMinutes().toString();
        let S = mydate.getSeconds().toString();
        return yyyy + '-' + (mm[1] ? mm : "0" + mm[0]) + '-' + (dd[1] ? dd : "0" + dd[0]) + ' ' + (H[1] ? H : "0" + H[0]) + ':' + (M[1] ? M : "0" + M[0]) + ':' + (S[1] ? S : "0" + S[0]);
    }
    GoToRanking() {
        this.router.navigate(['/ranking']);
    }
    ionViewDidEnter() {
        console.log({
            "nickname": this.mydata.nickname,
            "email": this.mydata.email,
            "comment": this.mycomment,
            "time": this.mydata.mytime,
            "sent": this.mydata.sent
        });
    }
    shareLinkedIn() {
    }
    sendFeedback() {
        let postData = {
            "nickname": this.mydata.nickname,
            "email": this.mydata.email,
            "comment": this.mycomment
        };
        console.log("Launching hhtp request comment");
        this.mydata.requestPostJQForm(this.mydata.allvariables.db_endpoint_comment, postData)
            .then(data => {
            console.log(data);
            console.log("DATA PARSED");
            //var JSONdata = JSON.parse(data.toString());
            var JSONdata = data;
            console.log(JSONdata);
            if (JSONdata.ok == 1) {
                this.mydata.presentToastBottom(JSONdata.message);
            }
            else {
                this.mydata.presentToastBottom(JSONdata.error);
            }
            this.spinner = false;
        })
            .catch(error => {
            console.log(error);
            this.mydata.presentToastBottom("On n'arrive pas à enregistrer votre commentaire... désolé :-(");
            this.spinner = false;
        });
    }
};
FinishPage.ctorParameters = () => [
    { type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
];
FinishPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-finish',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./finish.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/finish/finish.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./finish.page.scss */ "./src/app/finish/finish.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
], FinishPage);



/***/ })

}]);
//# sourceMappingURL=finish-finish-module-es2015.js.map