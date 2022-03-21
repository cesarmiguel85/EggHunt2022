function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["imageviewer360-imageviewer360-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/imageviewer360/imageviewer360.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/imageviewer360/imageviewer360.page.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppImageviewer360Imageviewer360PageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title><span hideWhen=\"mobile,mobileweb\">{{ mydata.allmessages.imageviewer_title }} </span>{{mydata.alldata[area].area}}!</ion-title>\n    <ion-title slot=\"end\">{{ mydata.allmessages.imageviewer_found }} {{total-remaining}}/{{total}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div id=\"photosphere\"></div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/imageviewer360/imageviewer360-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/imageviewer360/imageviewer360-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: Imageviewer360PageRoutingModule */

  /***/
  function srcAppImageviewer360Imageviewer360RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Imageviewer360PageRoutingModule", function () {
      return Imageviewer360PageRoutingModule;
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


    var _imageviewer360_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./imageviewer360.page */
    "./src/app/imageviewer360/imageviewer360.page.ts");

    var routes = [{
      path: '',
      component: _imageviewer360_page__WEBPACK_IMPORTED_MODULE_3__["Imageviewer360Page"]
    }];

    var Imageviewer360PageRoutingModule = function Imageviewer360PageRoutingModule() {
      _classCallCheck(this, Imageviewer360PageRoutingModule);
    };

    Imageviewer360PageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], Imageviewer360PageRoutingModule);
    /***/
  },

  /***/
  "./src/app/imageviewer360/imageviewer360.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/imageviewer360/imageviewer360.module.ts ***!
    \*********************************************************/

  /*! exports provided: Imageviewer360PageModule */

  /***/
  function srcAppImageviewer360Imageviewer360ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Imageviewer360PageModule", function () {
      return Imageviewer360PageModule;
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


    var _imageviewer360_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./imageviewer360-routing.module */
    "./src/app/imageviewer360/imageviewer360-routing.module.ts");
    /* harmony import */


    var _imageviewer360_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./imageviewer360.page */
    "./src/app/imageviewer360/imageviewer360.page.ts");

    var Imageviewer360PageModule = function Imageviewer360PageModule() {
      _classCallCheck(this, Imageviewer360PageModule);
    };

    Imageviewer360PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _imageviewer360_routing_module__WEBPACK_IMPORTED_MODULE_5__["Imageviewer360PageRoutingModule"]],
      declarations: [_imageviewer360_page__WEBPACK_IMPORTED_MODULE_6__["Imageviewer360Page"]]
    })], Imageviewer360PageModule);
    /***/
  },

  /***/
  "./src/app/imageviewer360/imageviewer360.page.scss":
  /*!*********************************************************!*\
    !*** ./src/app/imageviewer360/imageviewer360.page.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppImageviewer360Imageviewer360PageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#photosphere {\n  background: #DDD;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jZXNhci9Eb2N1bWVudHMvRGV2ZWxvcG1lbnQvRWdnSHVudDIwMjIvc3JjL2FwcC9pbWFnZXZpZXdlcjM2MC9pbWFnZXZpZXdlcjM2MC5wYWdlLnNjc3MiLCJzcmMvYXBwL2ltYWdldmlld2VyMzYwL2ltYWdldmlld2VyMzYwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2ltYWdldmlld2VyMzYwL2ltYWdldmlld2VyMzYwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNwaG90b3NwaGVyZSB7XG4gICAgYmFja2dyb3VuZDojREREO1xuICAgIHdpZHRoOjEwMCU7XG4gICAgaGVpZ2h0OjEwMCU7XG4gIH1cblxuICAiLCIjcGhvdG9zcGhlcmUge1xuICBiYWNrZ3JvdW5kOiAjREREO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/imageviewer360/imageviewer360.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/imageviewer360/imageviewer360.page.ts ***!
    \*******************************************************/

  /*! exports provided: Imageviewer360Page */

  /***/
  function srcAppImageviewer360Imageviewer360PageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Imageviewer360Page", function () {
      return Imageviewer360Page;
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

    var Imageviewer360Page = /*#__PURE__*/function () {
      function Imageviewer360Page(route, router, mydata) {
        var _this2 = this;

        _classCallCheck(this, Imageviewer360Page);

        //console.log(mydata);
        this.route = route;
        this.router = router;
        this.mydata = mydata;
        this.alertclick = false;
        this.pictures = [];
        this.total = 0;
        this.remaining = 0;
        this.markers = [];
        this.alertclick = this.mydata.allvariables.doubleclickcoordinates; //GET AREA FROM PARAMS ROUTER

        this.route.queryParams.subscribe(function (params) {
          if (_this2.router.getCurrentNavigation().extras.state) {
            _this2.area = _this2.router.getCurrentNavigation().extras.state.area;
            console.log("AREA " + _this2.area);
            _this2.pictures = mydata.alldata[_this2.area].pictures;

            var _this2$mydata$calcRem = _this2.mydata.calcRemaining(_this2.area);

            var _this2$mydata$calcRem2 = _slicedToArray(_this2$mydata$calcRem, 2);

            _this2.remaining = _this2$mydata$calcRem2[0];
            _this2.total = _this2$mydata$calcRem2[1];

            _this2.mydata.checkDone(_this2.area);

            _this2.mydata.alldata[_this2.area].pictures[0].rectangles.forEach(function (rectangle) {
              var marker = {
                // circle marker
                id: rectangle.code,
                polygon_px: [[rectangle.x - rectangle.width, rectangle.y], [rectangle.x, rectangle.y + rectangle.height], [rectangle.x + rectangle.width, rectangle.y], [rectangle.x, rectangle.y - rectangle.height]],
                width: rectangle.width,
                height: rectangle.height,
                x: rectangle.x,
                y: rectangle.y,
                clickable: 1,
                scale: 1,
                svgStyle: {
                  fill: 'transparent',
                  stroke: 'transparent',
                  strokeWidth: '0px'
                }
              };
              var markerdone = {
                // circle marker
                id: rectangle.code,
                polygon_px: [[rectangle.x - rectangle.width, rectangle.y], [rectangle.x, rectangle.y + rectangle.height], [rectangle.x + rectangle.width, rectangle.y], [rectangle.x, rectangle.y - rectangle.height]],
                width: rectangle.width,
                x: rectangle.x,
                y: rectangle.y,
                clickable: 0,
                scale: 1,
                tooltip: 'Déjà trouvé',
                svgStyle: {
                  fill: 'rgba(200, 0, 0, 0.2)',
                  stroke: 'rgba(200, 0, 50, 0.8)',
                  strokeWidth: '2px'
                }
              };

              if (_this2.mydata.myeggs.indexOf(rectangle.code) >= 0) {
                _this2.markers.push(markerdone);
              } else {
                _this2.markers.push(marker);
              }
            });
          }
        });
      }

      _createClass(Imageviewer360Page, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "foundEgg",
        value: function foundEgg(num) {
          this.mydata.addEgg(num, this.area);

          var _this$mydata$calcRema = this.mydata.calcRemaining(this.area);

          var _this$mydata$calcRema2 = _slicedToArray(_this$mydata$calcRema, 2);

          this.remaining = _this$mydata$calcRema2[0];
          this.total = _this$mydata$calcRema2[1];
        }
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          var _this = this;

          console.log(_this.pictures[0].url);
          var PSV = PhotoSphereViewer({
            //panorama: 'https://cdn.rawgit.com/mistic100/Photo-Sphere-Viewer/master/example/Bryce-Canyon-National-Park-Mark-Doliner.jpg',
            panorama: _this.pictures[0].url,
            container: 'photosphere',
            caption: "Swipe and pinch to search. Tap to catch.",
            navbar: false,
            fisheye: true,
            markers: _this.markers,
            min_fov: 1,
            max_fov: 170,
            default_fov: _this.pictures[0].default_fov ? _this.pictures[0].default_fov : 40,
            anim_speed: '0.5rpm',
            default_lat: _this.pictures[0].default_lat ? _this.pictures[0].default_lat : 0,
            zoom_speed: 1
          });
          PSV.on('select-marker', function (marker) {
            if (marker.clickable == 1) {
              _this.foundEgg(marker.id);

              console.log(marker);
              PSV.addMarker({
                id: 'done_' + marker.id,
                x: marker.x,
                y: marker.y,
                polygon_px: [[marker.x - marker.width, marker.y], [marker.x, marker.y + marker.height], [marker.x + marker.width, marker.y], [marker.x, marker.y - marker.height]],
                tooltip: 'Oeuf trouvé',
                scale: 1,
                clickable: 0,
                svgStyle: {
                  fill: 'rgba(200, 0, 0, 0.2)',
                  stroke: 'rgba(200, 0, 50, 0.8)',
                  strokeWidth: '2px'
                }
              });
            }
          });

          if (_this.alertclick) {
            PSV.on('dblclick', function (e) {
              console.log(e);

              _this.mydata.presentToastBottom("Click coordinates >  X: " + e.texture_x + " | Y: " + e.texture_y);
            });
          }
        }
      }]);

      return Imageviewer360Page;
    }();

    Imageviewer360Page.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]
      }];
    };

    Imageviewer360Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-imageviewer360',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./imageviewer360.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/imageviewer360/imageviewer360.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./imageviewer360.page.scss */
      "./src/app/imageviewer360/imageviewer360.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])], Imageviewer360Page);
    /***/
  }
}]);
//# sourceMappingURL=imageviewer360-imageviewer360-module-es5.js.map