(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["imageviewer360-imageviewer360-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/imageviewer360/imageviewer360.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/imageviewer360/imageviewer360.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title><span hideWhen=\"mobile,mobileweb\">{{ mydata.allmessages.imageviewer_title }} </span>{{mydata.alldata[area].area}}!</ion-title>\r\n    <ion-title slot=\"end\">{{ mydata.allmessages.imageviewer_found }} {{total-remaining}}/{{total}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div id=\"photosphere\"></div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/imageviewer360/imageviewer360-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/imageviewer360/imageviewer360-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: Imageviewer360PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Imageviewer360PageRoutingModule", function() { return Imageviewer360PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _imageviewer360_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./imageviewer360.page */ "./src/app/imageviewer360/imageviewer360.page.ts");




const routes = [
    {
        path: '',
        component: _imageviewer360_page__WEBPACK_IMPORTED_MODULE_3__["Imageviewer360Page"]
    }
];
let Imageviewer360PageRoutingModule = class Imageviewer360PageRoutingModule {
};
Imageviewer360PageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], Imageviewer360PageRoutingModule);



/***/ }),

/***/ "./src/app/imageviewer360/imageviewer360.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/imageviewer360/imageviewer360.module.ts ***!
  \*********************************************************/
/*! exports provided: Imageviewer360PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Imageviewer360PageModule", function() { return Imageviewer360PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _imageviewer360_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./imageviewer360-routing.module */ "./src/app/imageviewer360/imageviewer360-routing.module.ts");
/* harmony import */ var _imageviewer360_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./imageviewer360.page */ "./src/app/imageviewer360/imageviewer360.page.ts");







let Imageviewer360PageModule = class Imageviewer360PageModule {
};
Imageviewer360PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _imageviewer360_routing_module__WEBPACK_IMPORTED_MODULE_5__["Imageviewer360PageRoutingModule"]
        ],
        declarations: [_imageviewer360_page__WEBPACK_IMPORTED_MODULE_6__["Imageviewer360Page"]]
    })
], Imageviewer360PageModule);



/***/ }),

/***/ "./src/app/imageviewer360/imageviewer360.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/imageviewer360/imageviewer360.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#photosphere {\n  background: #DDD;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW1hZ2V2aWV3ZXIzNjAvQzpcXFVzZXJzXFxDZXNhck1pZ3VlbFxcRG9jdW1lbnRzXFxHaXRIdWJcXEVnZ0h1bnQyMDIyL3NyY1xcYXBwXFxpbWFnZXZpZXdlcjM2MFxcaW1hZ2V2aWV3ZXIzNjAucGFnZS5zY3NzIiwic3JjL2FwcC9pbWFnZXZpZXdlcjM2MC9pbWFnZXZpZXdlcjM2MC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9pbWFnZXZpZXdlcjM2MC9pbWFnZXZpZXdlcjM2MC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjcGhvdG9zcGhlcmUge1xyXG4gICAgYmFja2dyb3VuZDojREREO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDoxMDAlO1xyXG4gIH1cclxuXHJcbiAgIiwiI3Bob3Rvc3BoZXJlIHtcbiAgYmFja2dyb3VuZDogI0RERDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/imageviewer360/imageviewer360.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/imageviewer360/imageviewer360.page.ts ***!
  \*******************************************************/
/*! exports provided: Imageviewer360Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Imageviewer360Page", function() { return Imageviewer360Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let Imageviewer360Page = class Imageviewer360Page {
    constructor(route, router, mydata) {
        //console.log(mydata);
        this.route = route;
        this.router = router;
        this.mydata = mydata;
        this.alertclick = false;
        this.pictures = [];
        this.total = 0;
        this.remaining = 0;
        this.markers = [];
        this.alertclick = this.mydata.allvariables.doubleclickcoordinates;
        //GET AREA FROM PARAMS ROUTER
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.area = this.router.getCurrentNavigation().extras.state.area;
                console.log("AREA " + this.area);
                this.pictures = mydata.alldata[this.area].pictures;
                [this.remaining, this.total] = this.mydata.calcRemaining(this.area);
                this.mydata.checkDone(this.area);
                this.mydata.alldata[this.area].pictures[0].rectangles.forEach(rectangle => {
                    var marker = {
                        // circle marker
                        id: rectangle.code,
                        polygon_px: [[(rectangle.x - rectangle.width), rectangle.y], [rectangle.x, (rectangle.y + rectangle.height)], [(rectangle.x + rectangle.width), rectangle.y], [rectangle.x, (rectangle.y - rectangle.height)]],
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
                        polygon_px: [[(rectangle.x - rectangle.width), rectangle.y], [rectangle.x, (rectangle.y + rectangle.height)], [(rectangle.x + rectangle.width), rectangle.y], [rectangle.x, (rectangle.y - rectangle.height)]],
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
                    if (this.mydata.myeggs.indexOf(rectangle.code) >= 0) {
                        this.markers.push(markerdone);
                    }
                    else {
                        this.markers.push(marker);
                    }
                });
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
                    polygon_px: [[(marker.x - marker.width), marker.y], [marker.x, (marker.y + marker.height)], [(marker.x + marker.width), marker.y], [marker.x, (marker.y - marker.height)]],
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
};
Imageviewer360Page.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] }
];
Imageviewer360Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-imageviewer360',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./imageviewer360.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/imageviewer360/imageviewer360.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./imageviewer360.page.scss */ "./src/app/imageviewer360/imageviewer360.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
], Imageviewer360Page);



/***/ })

}]);
//# sourceMappingURL=imageviewer360-imageviewer360-module-es2015.js.map