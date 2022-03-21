(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["areas-areas-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/areas/areas.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/areas/areas.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-img id=\"headlogo\" src=\"assets/images/HEAD_LOGO.png\"></ion-img>\n    </ion-buttons>\n    \n\n    <ion-title>\n      {{ mydata.allmessages.areas_title }}\n    </ion-title>\n    <ion-buttons slot=\"end\" *ngIf=\"mydata.allvariables.with_db\" (click)=\"quitGame()\">\n      <ion-button>\n        Quitter\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <div id=\"containerflex\">\n    <div id=\"container\">\n\n      <ion-grid>\n        <ion-row class=\"ion-justify-content-center\">\n          <ion-col size-lg=\"8\" size-xs=\"12\">\n\n            <ion-card>\n            \n              <ion-card-content>\n                <table id=\"cardtable\" style=\"width:100%\">\n                  <tr>\n                    <td>\n                      <ion-img class=\"egg\" src=\"assets/images/Easter-Egg-left.png\"></ion-img>\n                    </td>\n                    <td>\n                      <ion-card-title>{{ mydata.allmessages.areas_card_title }}</ion-card-title>\n                      <p class=\"card_p\">{{ mydata.allmessages.areas_card_desc }}</p>\n                    </td>\n                    <td>\n                      <ion-img class=\"egg\" src=\"assets/images/Easter-Egg-right.png\"></ion-img>\n                    </td>\n                  </tr>\n                </table>\n                \n              </ion-card-content>\n            </ion-card>\n\n            <ion-card>\n            \n              <ion-card-content>\n                <div *ngFor=\"let area of mydata.alldata, index as i\">\n                  <ion-button class=\"areabuttons\" size=\"large\" (click)=\"GoToArea(i)\" [ngClass]=\"{'areadone' : mydata.calcRemaining(i)[0]==0}\"><span>{{area.area}}<br><span class=\"subtitlebutton\">{{mydata.allmessages.areas_remaining}} {{mydata.calcRemaining(i)[0]}}</span></span></ion-button>\n                </div>\n              </ion-card-content>\n            </ion-card>\n\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      \n    </div>\n    <div id=\"footer\"></div>\n  </div>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/areas/areas-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/areas/areas-routing.module.ts ***!
  \***********************************************/
/*! exports provided: AreasPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreasPageRoutingModule", function() { return AreasPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _areas_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./areas.page */ "./src/app/areas/areas.page.ts");




const routes = [
    {
        path: '',
        component: _areas_page__WEBPACK_IMPORTED_MODULE_3__["AreasPage"]
    }
];
let AreasPageRoutingModule = class AreasPageRoutingModule {
};
AreasPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AreasPageRoutingModule);



/***/ }),

/***/ "./src/app/areas/areas.module.ts":
/*!***************************************!*\
  !*** ./src/app/areas/areas.module.ts ***!
  \***************************************/
/*! exports provided: AreasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreasPageModule", function() { return AreasPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _areas_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./areas-routing.module */ "./src/app/areas/areas-routing.module.ts");
/* harmony import */ var _areas_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./areas.page */ "./src/app/areas/areas.page.ts");







let AreasPageModule = class AreasPageModule {
};
AreasPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _areas_routing_module__WEBPACK_IMPORTED_MODULE_5__["AreasPageRoutingModule"]
        ],
        declarations: [_areas_page__WEBPACK_IMPORTED_MODULE_6__["AreasPage"]]
    })
], AreasPageModule);



/***/ }),

/***/ "./src/app/areas/areas.page.scss":
/*!***************************************!*\
  !*** ./src/app/areas/areas.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n#container {\n  text-align: center;\n  margin: auto auto;\n}\n#containerflex {\n  text-align: center;\n  margin: auto auto;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-image: url('BACKGROUND.jpg');\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n}\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n#container a {\n  text-decoration: none;\n}\nion-content ion-toolbar {\n  --background: translucent;\n}\n.subtitlebutton {\n  font-size: x-small;\n  clear: both;\n}\n.buttontext {\n  width: 100%;\n}\n.areabuttons {\n  width: 90%;\n  height: 4em;\n  background-color: #3764b8;\n  color: white;\n  border-radius: 5px;\n  font-size: medium;\n}\n.areadone {\n  --background: #25992b;\n}\n#headlogo {\n  max-width: 50px;\n  max-height: 100px;\n}\nion-button {\n  --background:rgb(40, 118, 219);\n}\n.egg {\n  max-width: 100px;\n}\ntable#cardtable  {\n  width: 100% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXJlYXMvYXJlYXMucGFnZS5zY3NzIiwiL1VzZXJzL2Nlc2FyL0RvY3VtZW50cy9EZXZlbG9wbWVudC9FZ2dIdW50MjAyMi9zcmMvYXBwL2FyZWFzL2FyZWFzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0FERUo7QUNFRTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSx1Q0FBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtBRENKO0FDR0U7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QURBSjtBQ0dFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBRUEsY0FBQTtFQUVBLFNBQUE7QURGSjtBQ0tFO0VBQ0UscUJBQUE7QURGSjtBQ0tFO0VBQ0UseUJBQUE7QURGSjtBQ0tFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0FERko7QUNLRTtFQUNFLFdBQUE7QURGSjtBQ0tFO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDRixrQkFBQTtFQUNBLGlCQUFBO0FERko7QUNNRTtFQUNJLHFCQUFBO0FESE47QUNNRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBREhKO0FDTUU7RUFDRSw4QkFBQTtBREhKO0FDTUU7RUFDRSxnQkFBQTtBREhKO0FDTUU7RUFDRSxzQkFBQTtBREhKIiwiZmlsZSI6InNyYy9hcHAvYXJlYXMvYXJlYXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuI2NvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiBhdXRvIGF1dG87XG59XG5cbiNjb250YWluZXJmbGV4IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IGF1dG8gYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvQkFDS0dST1VORC5qcGdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuI2NvbnRhaW5lciBzdHJvbmcge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xufVxuXG4jY29udGFpbmVyIHAge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBjb2xvcjogIzhjOGM4YztcbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmlvbi1jb250ZW50IGlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc2x1Y2VudDtcbn1cblxuLnN1YnRpdGxlYnV0dG9uIHtcbiAgZm9udC1zaXplOiB4LXNtYWxsO1xuICBjbGVhcjogYm90aDtcbn1cblxuLmJ1dHRvbnRleHQge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmFyZWFidXR0b25zIHtcbiAgd2lkdGg6IDkwJTtcbiAgaGVpZ2h0OiA0ZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNzY0Yjg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LXNpemU6IG1lZGl1bTtcbn1cblxuLmFyZWFkb25lIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMjU5OTJiO1xufVxuXG4jaGVhZGxvZ28ge1xuICBtYXgtd2lkdGg6IDUwcHg7XG4gIG1heC1oZWlnaHQ6IDEwMHB4O1xufVxuXG5pb24tYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOnJnYig0MCwgMTE4LCAyMTkpO1xufVxuXG4uZWdnIHtcbiAgbWF4LXdpZHRoOiAxMDBweDtcbn1cblxudGFibGUjY2FyZHRhYmxlwqAge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xufSIsIiNjb250YWluZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46YXV0byBhdXRvO1xuICAgIC8vd2lkdGg6OTAlO1xuICBcbiAgfVxuICAjY29udGFpbmVyZmxleCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjphdXRvIGF1dG87XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDoxMDAlO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2ltYWdlcy9CQUNLR1JPVU5ELmpwZycpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIFxuICB9XG4gIFxuICAjY29udGFpbmVyIHN0cm9uZyB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xuICB9XG4gIFxuICAjY29udGFpbmVyIHAge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgXG4gICAgY29sb3I6ICM4YzhjOGM7XG4gIFxuICAgIG1hcmdpbjogMDtcbiAgfVxuICBcbiAgI2NvbnRhaW5lciBhIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cbiAgXG4gIGlvbi1jb250ZW50IGlvbi10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zbHVjZW50O1xuICB9XG4gIFxuICAuc3VidGl0bGVidXR0b24ge1xuICAgIGZvbnQtc2l6ZTogeC1zbWFsbDtcbiAgICBjbGVhcjogYm90aDtcbiAgfVxuICBcbiAgLmJ1dHRvbnRleHR7XG4gICAgd2lkdGg6MTAwJTtcbiAgfVxuXG4gIC5hcmVhYnV0dG9ucyB7XG4gICAgICB3aWR0aDo5MCU7XG4gICAgICBoZWlnaHQ6NGVtO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU1LCAxMDAsIDE4NCk7XG4gICAgICBjb2xvcjp3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgZm9udC1zaXplOm1lZGl1bTtcblxuICB9XG5cbiAgLmFyZWFkb25lIHtcbiAgICAgIC0tYmFja2dyb3VuZDogIzI1OTkyYjsgIFxuICB9XG5cbiAgI2hlYWRsb2dvIHtcbiAgICBtYXgtd2lkdGg6IDUwcHg7XG4gICAgbWF4LWhlaWdodDogMTAwcHg7XG4gIH1cblxuICBpb24tYnV0dG9ue1xuICAgIC0tYmFja2dyb3VuZDpyZ2IoNDAsIDExOCwgMjE5KTtcbiAgfVxuXG4gIC5lZ2cge1xuICAgIG1heC13aWR0aDogMTAwcHg7XG4gIH1cblxuICB0YWJsZSNjYXJkdGFibGXCoHtcbiAgICB3aWR0aDoxMDAlICFpbXBvcnRhbnQ7XG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/areas/areas.page.ts":
/*!*************************************!*\
  !*** ./src/app/areas/areas.page.ts ***!
  \*************************************/
/*! exports provided: AreasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreasPage", function() { return AreasPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let AreasPage = class AreasPage {
    constructor(router, mydata) {
        this.router = router;
        this.mydata = mydata;
    }
    GoToArea(num) {
        let navigationExtras = {
            state: {
                area: num
            }
        };
        switch (this.mydata.alldata[num].type) {
            case 'image360': {
                this.router.navigate(['/imageviewer360'], navigationExtras);
                break;
            }
            case 'horizontal': {
                this.router.navigate(['/imageviewerpan'], navigationExtras);
                break;
            }
            default: {
                this.router.navigate(['/imageviewer'], navigationExtras);
                break;
            }
        }
        ;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        console.log("IONVIEWWILLENTER");
        this.mydata.checkFinish();
    }
    quitGame() {
        this.router.navigate(['/home']);
        this.mydata.email = "";
    }
    ionViewDidEnter() {
    }
};
AreasPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }
];
AreasPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-areas',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./areas.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/areas/areas.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./areas.page.scss */ "./src/app/areas/areas.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
], AreasPage);



/***/ })

}]);
//# sourceMappingURL=areas-areas-module-es2015.js.map