function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["areas-areas-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/areas/areas.page.html":
  /*!*****************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/areas/areas.page.html ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAreasAreasPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-img id=\"headlogo\" src=\"assets/images/HEAD_LOGO.png\"></ion-img>\r\n    </ion-buttons>\r\n    \r\n\r\n    <ion-title>\r\n      {{ mydata.allmessages.areas_title }}\r\n    </ion-title>\r\n    <ion-buttons slot=\"end\" *ngIf=\"mydata.allvariables.with_db\" (click)=\"quitGame()\">\r\n      <ion-button>\r\n        Quitter\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <div id=\"containerflex\">\r\n    <div id=\"container\">\r\n\r\n      <ion-grid>\r\n        <ion-row class=\"ion-justify-content-center\">\r\n          <ion-col size-lg=\"8\" size-xs=\"12\">\r\n\r\n            <ion-card>\r\n            \r\n              <ion-card-content>\r\n                <table id=\"cardtable\" style=\"width:100%\">\r\n                  <tr>\r\n                    <td>\r\n                      <ion-img class=\"egg\" src=\"assets/images/Easter-Egg-left.png\"></ion-img>\r\n                    </td>\r\n                    <td>\r\n                      <ion-card-title>{{ mydata.allmessages.areas_card_title }}</ion-card-title>\r\n                      <p class=\"card_p\">{{ mydata.allmessages.areas_card_desc }}</p>\r\n                    </td>\r\n                    <td>\r\n                      <ion-img class=\"egg\" src=\"assets/images/Easter-Egg-right.png\"></ion-img>\r\n                    </td>\r\n                  </tr>\r\n                </table>\r\n                \r\n              </ion-card-content>\r\n            </ion-card>\r\n\r\n            <ion-card>\r\n            \r\n              <ion-card-content>\r\n                <div *ngFor=\"let area of mydata.alldata, index as i\">\r\n                  <ion-button class=\"areabuttons\" size=\"large\" (click)=\"GoToArea(i)\" [ngClass]=\"{'areadone' : mydata.calcRemaining(i)[0]==0}\"><span>{{area.area}}<br><span class=\"subtitlebutton\">{{mydata.allmessages.areas_remaining}} {{mydata.calcRemaining(i)[0]}}</span></span></ion-button>\r\n                </div>\r\n              </ion-card-content>\r\n            </ion-card>\r\n\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n      \r\n    </div>\r\n    <div id=\"footer\"></div>\r\n  </div>\r\n\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/areas/areas-routing.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/areas/areas-routing.module.ts ***!
    \***********************************************/

  /*! exports provided: AreasPageRoutingModule */

  /***/
  function srcAppAreasAreasRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AreasPageRoutingModule", function () {
      return AreasPageRoutingModule;
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


    var _areas_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./areas.page */
    "./src/app/areas/areas.page.ts");

    var routes = [{
      path: '',
      component: _areas_page__WEBPACK_IMPORTED_MODULE_3__["AreasPage"]
    }];

    var AreasPageRoutingModule = function AreasPageRoutingModule() {
      _classCallCheck(this, AreasPageRoutingModule);
    };

    AreasPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AreasPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/areas/areas.module.ts":
  /*!***************************************!*\
    !*** ./src/app/areas/areas.module.ts ***!
    \***************************************/

  /*! exports provided: AreasPageModule */

  /***/
  function srcAppAreasAreasModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AreasPageModule", function () {
      return AreasPageModule;
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


    var _areas_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./areas-routing.module */
    "./src/app/areas/areas-routing.module.ts");
    /* harmony import */


    var _areas_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./areas.page */
    "./src/app/areas/areas.page.ts");

    var AreasPageModule = function AreasPageModule() {
      _classCallCheck(this, AreasPageModule);
    };

    AreasPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _areas_routing_module__WEBPACK_IMPORTED_MODULE_5__["AreasPageRoutingModule"]],
      declarations: [_areas_page__WEBPACK_IMPORTED_MODULE_6__["AreasPage"]]
    })], AreasPageModule);
    /***/
  },

  /***/
  "./src/app/areas/areas.page.scss":
  /*!***************************************!*\
    !*** ./src/app/areas/areas.page.scss ***!
    \***************************************/

  /*! exports provided: default */

  /***/
  function srcAppAreasAreasPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n#container {\n  text-align: center;\n  margin: auto auto;\n}\n#containerflex {\n  text-align: center;\n  margin: auto auto;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-image: url('BACKGROUND.jpg');\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n}\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n#container a {\n  text-decoration: none;\n}\nion-content ion-toolbar {\n  --background: translucent;\n}\n.subtitlebutton {\n  font-size: x-small;\n  clear: both;\n}\n.buttontext {\n  width: 100%;\n}\n.areabuttons {\n  width: 90%;\n  height: 4em;\n  background-color: #3764b8;\n  color: white;\n  border-radius: 5px;\n  font-size: medium;\n}\n.areadone {\n  --background: #25992b;\n}\n#headlogo {\n  max-width: 50px;\n  max-height: 100px;\n}\nion-button {\n  --background:rgb(40, 118, 219);\n}\n.egg {\n  max-width: 100px;\n}\ntable#cardtable  {\n  width: 100% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXJlYXMvYXJlYXMucGFnZS5zY3NzIiwic3JjL2FwcC9hcmVhcy9DOlxcVXNlcnNcXENlc2FyTWlndWVsXFxEb2N1bWVudHNcXEdpdEh1YlxcRWdnSHVudDIwMjIvc3JjXFxhcHBcXGFyZWFzXFxhcmVhcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtBREVKO0FDRUU7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsdUNBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7QURDSjtBQ0dFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FEQUo7QUNHRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFFQSxTQUFBO0FERko7QUNLRTtFQUNFLHFCQUFBO0FERko7QUNLRTtFQUNFLHlCQUFBO0FERko7QUNLRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtBREZKO0FDS0U7RUFDRSxXQUFBO0FERko7QUNLRTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0Ysa0JBQUE7RUFDQSxpQkFBQTtBREZKO0FDTUU7RUFDSSxxQkFBQTtBREhOO0FDTUU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QURISjtBQ01FO0VBQ0UsOEJBQUE7QURISjtBQ01FO0VBQ0UsZ0JBQUE7QURISjtBQ01FO0VBQ0Usc0JBQUE7QURISiIsImZpbGUiOiJzcmMvYXBwL2FyZWFzL2FyZWFzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbiNjb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogYXV0byBhdXRvO1xufVxuXG4jY29udGFpbmVyZmxleCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiBhdXRvIGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL0JBQ0tHUk9VTkQuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbiNjb250YWluZXIgc3Ryb25nIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjZweDtcbn1cblxuI2NvbnRhaW5lciBwIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgY29sb3I6ICM4YzhjOGM7XG4gIG1hcmdpbjogMDtcbn1cblxuI2NvbnRhaW5lciBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5pb24tY29udGVudCBpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNsdWNlbnQ7XG59XG5cbi5zdWJ0aXRsZWJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogeC1zbWFsbDtcbiAgY2xlYXI6IGJvdGg7XG59XG5cbi5idXR0b250ZXh0IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5hcmVhYnV0dG9ucyB7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogNGVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzc2NGI4O1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC1zaXplOiBtZWRpdW07XG59XG5cbi5hcmVhZG9uZSB7XG4gIC0tYmFja2dyb3VuZDogIzI1OTkyYjtcbn1cblxuI2hlYWRsb2dvIHtcbiAgbWF4LXdpZHRoOiA1MHB4O1xuICBtYXgtaGVpZ2h0OiAxMDBweDtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDpyZ2IoNDAsIDExOCwgMjE5KTtcbn1cblxuLmVnZyB7XG4gIG1heC13aWR0aDogMTAwcHg7XG59XG5cbnRhYmxlI2NhcmR0YWJsZcKgIHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn0iLCIjY29udGFpbmVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjphdXRvIGF1dG87XHJcbiAgICAvL3dpZHRoOjkwJTtcclxuICBcclxuICB9XHJcbiAgI2NvbnRhaW5lcmZsZXgge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOmF1dG8gYXV0bztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6MTAwJTtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaW1hZ2VzL0JBQ0tHUk9VTkQuanBnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBcclxuICB9XHJcbiAgXHJcbiAgI2NvbnRhaW5lciBzdHJvbmcge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbiAgfVxyXG4gIFxyXG4gICNjb250YWluZXIgcCB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICBcclxuICAgIGNvbG9yOiAjOGM4YzhjO1xyXG4gIFxyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuICBcclxuICAjY29udGFpbmVyIGEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxuICBcclxuICBpb24tY29udGVudCBpb24tdG9vbGJhciB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zbHVjZW50O1xyXG4gIH1cclxuICBcclxuICAuc3VidGl0bGVidXR0b24ge1xyXG4gICAgZm9udC1zaXplOiB4LXNtYWxsO1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbiAgfVxyXG4gIFxyXG4gIC5idXR0b250ZXh0e1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICB9XHJcblxyXG4gIC5hcmVhYnV0dG9ucyB7XHJcbiAgICAgIHdpZHRoOjkwJTtcclxuICAgICAgaGVpZ2h0OjRlbTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU1LCAxMDAsIDE4NCk7XHJcbiAgICAgIGNvbG9yOndoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgZm9udC1zaXplOm1lZGl1bTtcclxuXHJcbiAgfVxyXG5cclxuICAuYXJlYWRvbmUge1xyXG4gICAgICAtLWJhY2tncm91bmQ6ICMyNTk5MmI7ICBcclxuICB9XHJcblxyXG4gICNoZWFkbG9nbyB7XHJcbiAgICBtYXgtd2lkdGg6IDUwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMDBweDtcclxuICB9XHJcblxyXG4gIGlvbi1idXR0b257XHJcbiAgICAtLWJhY2tncm91bmQ6cmdiKDQwLCAxMTgsIDIxOSk7XHJcbiAgfVxyXG5cclxuICAuZWdnIHtcclxuICAgIG1heC13aWR0aDogMTAwcHg7XHJcbiAgfVxyXG5cclxuICB0YWJsZSNjYXJkdGFibGXCoHtcclxuICAgIHdpZHRoOjEwMCUgIWltcG9ydGFudDtcclxuICB9Il19 */";
    /***/
  },

  /***/
  "./src/app/areas/areas.page.ts":
  /*!*************************************!*\
    !*** ./src/app/areas/areas.page.ts ***!
    \*************************************/

  /*! exports provided: AreasPage */

  /***/
  function srcAppAreasAreasPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AreasPage", function () {
      return AreasPage;
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

    var AreasPage = /*#__PURE__*/function () {
      function AreasPage(router, mydata) {
        _classCallCheck(this, AreasPage);

        this.router = router;
        this.mydata = mydata;
      }

      _createClass(AreasPage, [{
        key: "GoToArea",
        value: function GoToArea(num) {
          var navigationExtras = {
            state: {
              area: num
            }
          };

          switch (this.mydata.alldata[num].type) {
            case 'image360':
              {
                this.router.navigate(['/imageviewer360'], navigationExtras);
                break;
              }

            case 'horizontal':
              {
                this.router.navigate(['/imageviewerpan'], navigationExtras);
                break;
              }

            default:
              {
                this.router.navigate(['/imageviewer'], navigationExtras);
                break;
              }
          }

          ;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          console.log("IONVIEWWILLENTER");
          this.mydata.checkFinish();
        }
      }, {
        key: "quitGame",
        value: function quitGame() {
          this.router.navigate(['/home']);
          this.mydata.email = "";
        }
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {}
      }]);

      return AreasPage;
    }();

    AreasPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
      }];
    };

    AreasPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-areas',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./areas.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/areas/areas.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./areas.page.scss */
      "./src/app/areas/areas.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])], AreasPage);
    /***/
  }
}]);
//# sourceMappingURL=areas-areas-module-es5.js.map