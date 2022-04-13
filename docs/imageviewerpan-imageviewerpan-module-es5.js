function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["imageviewerpan-imageviewerpan-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/imageviewerpan/imageviewerpan.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/imageviewerpan/imageviewerpan.page.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppImageviewerpanImageviewerpanPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title><span hideWhen=\"mobile,mobileweb\">{{ mydata.allmessages.imageviewer_title }} </span>{{mydata.alldata[area].area}}!</ion-title>\r\n    <ion-title slot=\"end\">{{ mydata.allmessages.imageviewer_found }} {{total-remaining}}/{{total}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n<div *ngFor=\"let picture of pictures, index as i\">\r\n  <figure *ngIf=\"i===showing\" class=\"burj\" >\r\n    <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 1200 900\" preserveAspectRatio=\"xMinYMin meet\" >\r\n    <image width=\"1200\" height=\"900\" [attr.xlink:href]=\"picture.url\">\r\n    </image>\r\n    <a  *ngFor=\"let rectangle of picture.rectangles\" (click)=\"foundEgg(rectangle.code)\">\r\n      <rect [attr.x]=\"rectangle.x\" [attr.y]=\"rectangle.y\" fill=\"transparent\" opacity=\"20\" [attr.width]=\"rectangle.width\" [attr.height]=\"rectangle.height\" />\r\n      <rect *ngIf=\"mydata.iHaveIt(rectangle.code)\" [attr.x]=\"rectangle.x\" [attr.y]=\"rectangle.y\" stroke=\"green\" stroke-width=\"5\" fill=\"transparent\" opacity=\"20\" [attr.width]=\"rectangle.width\" [attr.height]=\"rectangle.height\" />\r\n    </a>\r\n    </svg>\r\n    <div id=\"arrowleft\" class=\"arrow\" (click)=\"updateShowing(-1)\"><ion-icon name=\"chevron-back-outline\"></ion-icon></div>\r\n    <div id=\"arrowright\" class=\"arrow\" (click)=\"updateShowing(1)\"><ion-icon name=\"chevron-forward-outline\"></ion-icon></div>\r\n  </figure>\r\n\r\n  \r\n</div>  \r\n\r\n\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/imageviewerpan/imageviewerpan-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/imageviewerpan/imageviewerpan-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: ImageviewerpanPageRoutingModule */

  /***/
  function srcAppImageviewerpanImageviewerpanRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImageviewerpanPageRoutingModule", function () {
      return ImageviewerpanPageRoutingModule;
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


    var _imageviewerpan_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./imageviewerpan.page */
    "./src/app/imageviewerpan/imageviewerpan.page.ts");

    var routes = [{
      path: '',
      component: _imageviewerpan_page__WEBPACK_IMPORTED_MODULE_3__["ImageviewerpanPage"]
    }];

    var ImageviewerpanPageRoutingModule = function ImageviewerpanPageRoutingModule() {
      _classCallCheck(this, ImageviewerpanPageRoutingModule);
    };

    ImageviewerpanPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ImageviewerpanPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/imageviewerpan/imageviewerpan.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/imageviewerpan/imageviewerpan.module.ts ***!
    \*********************************************************/

  /*! exports provided: ImageviewerpanPageModule */

  /***/
  function srcAppImageviewerpanImageviewerpanModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImageviewerpanPageModule", function () {
      return ImageviewerpanPageModule;
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


    var _imageviewerpan_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./imageviewerpan-routing.module */
    "./src/app/imageviewerpan/imageviewerpan-routing.module.ts");
    /* harmony import */


    var _imageviewerpan_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./imageviewerpan.page */
    "./src/app/imageviewerpan/imageviewerpan.page.ts");

    var ImageviewerpanPageModule = function ImageviewerpanPageModule() {
      _classCallCheck(this, ImageviewerpanPageModule);
    };

    ImageviewerpanPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _imageviewerpan_routing_module__WEBPACK_IMPORTED_MODULE_5__["ImageviewerpanPageRoutingModule"]],
      declarations: [_imageviewerpan_page__WEBPACK_IMPORTED_MODULE_6__["ImageviewerpanPage"]]
    })], ImageviewerpanPageModule);
    /***/
  },

  /***/
  "./src/app/imageviewerpan/imageviewerpan.page.scss":
  /*!*********************************************************!*\
    !*** ./src/app/imageviewerpan/imageviewerpan.page.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppImageviewerpanImageviewerpanPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".burj {\n  position: relative;\n  width: 100%;\n  padding-bottom: 77%;\n  vertical-align: middle;\n  margin: 0;\n  overflow: hidden;\n}\n\n.burj svg {\n  display: inline-block;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.arrow {\n  position: absolute;\n  height: 100%;\n  width: 6%;\n  display: flex;\n  padding: 0px;\n}\n\n#arrowleft {\n  left: 0px;\n  background: black;\n  background: linear-gradient(90deg, rgba(0, 0, 0, 0.902879902) 0%, black 18%, rgba(0, 0, 0, 0.5079219188) 78%, rgba(0, 0, 0, 0) 100%);\n}\n\n#arrowright {\n  right: 0px;\n  background: black;\n  background: linear-gradient(270deg, rgba(0, 0, 0, 0.902879902) 0%, black 18%, rgba(0, 0, 0, 0.5079219188) 78%, rgba(0, 0, 0, 0) 100%);\n}\n\n.arrow ion-icon {\n  display: block;\n  margin: auto auto;\n  font-size: 6vw;\n  color: #a8a8a8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW1hZ2V2aWV3ZXJwYW4vQzpcXFVzZXJzXFxDZXNhck1pZ3VlbFxcRG9jdW1lbnRzXFxHaXRIdWJcXEVnZ0h1bnQyMDIyL3NyY1xcYXBwXFxpbWFnZXZpZXdlcnBhblxcaW1hZ2V2aWV3ZXJwYW4ucGFnZS5zY3NzIiwic3JjL2FwcC9pbWFnZXZpZXdlcnBhbi9pbWFnZXZpZXdlcnBhbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxrQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FDQ0Q7O0FEQ0E7RUFDQyxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUFRLE9BQUE7QUNHVDs7QURBQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQ0dKOztBRERBO0VBQ0ksU0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0lBQUE7QUNJSjs7QUREQTtFQUNJLFVBQUE7RUFDQSxpQkFBQTtFQUNBLHFJQUFBO0FDSUo7O0FEQUE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQ0dKIiwiZmlsZSI6InNyYy9hcHAvaW1hZ2V2aWV3ZXJwYW4vaW1hZ2V2aWV3ZXJwYW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1cmoge1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRwYWRkaW5nLWJvdHRvbTogNzclO1xyXG5cdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcblx0bWFyZ2luOiAwO1xyXG5cdG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLmJ1cmogc3ZnIHsgXHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0b3A6IDA7IGxlZnQ6IDA7XHJcbn1cclxuXHJcbi5hcnJvdyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBoZWlnaHQ6MTAwJTtcclxuICAgIHdpZHRoOjYlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBhZGRpbmc6MHB4O1xyXG59XHJcbiNhcnJvd2xlZnQge1xyXG4gICAgbGVmdDowcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMCwwLDApO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDAsMCwwLDAuOTAyODc5OTAxOTYwNzg0MykgMCUsIHJnYmEoMCwwLDAsMSkgMTglLCByZ2JhKDAsMCwwLDAuNTA3OTIxOTE4NzY3NTA3KSA3OCUsIHJnYmEoMCwwLDAsMCkgMTAwJSk7XHJcbn1cclxuXHJcbiNhcnJvd3JpZ2h0IHtcclxuICAgIHJpZ2h0OjBweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYigwLDAsMCk7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCByZ2JhKDAsMCwwLDAuOTAyODc5OTAxOTYwNzg0MykgMCUsIHJnYmEoMCwwLDAsMSkgMTglLCByZ2JhKDAsMCwwLDAuNTA3OTIxOTE4NzY3NTA3KSA3OCUsIHJnYmEoMCwwLDAsMCkgMTAwJSk7XHJcblxyXG59XHJcblxyXG4uYXJyb3cgaW9uLWljb24ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46YXV0byBhdXRvO1xyXG4gICAgZm9udC1zaXplOiA2dnc7XHJcbiAgICBjb2xvcjpyZ2IoMTY4LCAxNjgsIDE2OCk7XHJcbn0iLCIuYnVyaiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctYm90dG9tOiA3NyU7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIG1hcmdpbjogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmJ1cmogc3ZnIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbn1cblxuLmFycm93IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiA2JTtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMHB4O1xufVxuXG4jYXJyb3dsZWZ0IHtcbiAgbGVmdDogMHB4O1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDAsIDAsIDAsIDAuOTAyODc5OTAyKSAwJSwgYmxhY2sgMTglLCByZ2JhKDAsIDAsIDAsIDAuNTA3OTIxOTE4OCkgNzglLCByZ2JhKDAsIDAsIDAsIDApIDEwMCUpO1xufVxuXG4jYXJyb3dyaWdodCB7XG4gIHJpZ2h0OiAwcHg7XG4gIGJhY2tncm91bmQ6IGJsYWNrO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCByZ2JhKDAsIDAsIDAsIDAuOTAyODc5OTAyKSAwJSwgYmxhY2sgMTglLCByZ2JhKDAsIDAsIDAsIDAuNTA3OTIxOTE4OCkgNzglLCByZ2JhKDAsIDAsIDAsIDApIDEwMCUpO1xufVxuXG4uYXJyb3cgaW9uLWljb24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiBhdXRvIGF1dG87XG4gIGZvbnQtc2l6ZTogNnZ3O1xuICBjb2xvcjogI2E4YThhODtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/imageviewerpan/imageviewerpan.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/imageviewerpan/imageviewerpan.page.ts ***!
    \*******************************************************/

  /*! exports provided: ImageviewerpanPage */

  /***/
  function srcAppImageviewerpanImageviewerpanPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImageviewerpanPage", function () {
      return ImageviewerpanPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../data.service */
    "./src/app/data.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var ImageviewerpanPage = /*#__PURE__*/function () {
      function ImageviewerpanPage(route, router, mydata) {
        var _this = this;

        _classCallCheck(this, ImageviewerpanPage);

        this.route = route;
        this.router = router;
        this.mydata = mydata;
        this.pictures = [];
        this.total = 0;
        this.remaining = 0;
        this.showing = 0;
        console.log(mydata); //GET AREA FROM PARAMS ROUTER

        this.route.queryParams.subscribe(function (params) {
          if (_this.router.getCurrentNavigation().extras.state) {
            _this.area = _this.router.getCurrentNavigation().extras.state.area;
            _this.pictures = mydata.alldata[_this.area].pictures;

            var _this$mydata$calcRema = _this.mydata.calcRemaining(_this.area);

            var _this$mydata$calcRema2 = _slicedToArray(_this$mydata$calcRema, 2);

            _this.remaining = _this$mydata$calcRema2[0];
            _this.total = _this$mydata$calcRema2[1];

            _this.mydata.checkDone(_this.area);
          }
        });
      }

      _createClass(ImageviewerpanPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "foundEgg",
        value: function foundEgg(num) {
          this.mydata.addEgg(num, this.area);

          var _this$mydata$calcRema3 = this.mydata.calcRemaining(this.area);

          var _this$mydata$calcRema4 = _slicedToArray(_this$mydata$calcRema3, 2);

          this.remaining = _this$mydata$calcRema4[0];
          this.total = _this$mydata$calcRema4[1];
        }
      }, {
        key: "updateShowing",
        value: function updateShowing(num) {
          var numpictures = this.pictures.length;
          var newShowing = this.showing + num;
          this.showing = (newShowing % numpictures + numpictures) % numpictures;
          console.log(this.showing);
        }
      }]);

      return ImageviewerpanPage;
    }();

    ImageviewerpanPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]
      }];
    };

    ImageviewerpanPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-imageviewerpan',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./imageviewerpan.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/imageviewerpan/imageviewerpan.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./imageviewerpan.page.scss */
      "./src/app/imageviewerpan/imageviewerpan.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])], ImageviewerpanPage);
    /***/
  }
}]);
//# sourceMappingURL=imageviewerpan-imageviewerpan-module-es5.js.map