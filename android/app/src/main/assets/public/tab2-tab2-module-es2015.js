(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"],{

/***/ "./node_modules/capacitor-admob/dist/esm/definitions.js":
/*!**************************************************************!*\
  !*** ./node_modules/capacitor-admob/dist/esm/definitions.js ***!
  \**************************************************************/
/*! exports provided: AdSize, AdPosition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdSize", function() { return AdSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdPosition", function() { return AdPosition; });
/*
*  For more information
*   Read:  https://developers.google.com/android/reference/com/google/android/gms/ads/AdSize
* */
var AdSize;
(function (AdSize) {
    // Mobile Marketing Association (MMA)
    // banner ad size (320x50 density-independent pixels).
    AdSize["BANNER"] = "BANNER";
    // A dynamically sized banner that matches its parent's
    // width and expands/contracts its height to match the ad's
    // content after loading completes.
    AdSize["FLUID"] = "FLUID";
    //Interactive Advertising Bureau (IAB)
    // full banner ad size (468x60 density-independent pixels).
    AdSize["FULL_BANNER"] = "FULL_BANNER";
    // Large banner ad size (320x100 density-independent pixels).
    AdSize["LARGE_BANNER"] = "LARGE_BANNER";
    // Interactive Advertising Bureau (IAB)
    // leaderboard ad size (728x90 density-independent pixels).
    AdSize["LEADERBOARD"] = "LEADERBOARD";
    // Interactive Advertising Bureau (IAB)
    // medium rectangle ad size (300x250 density-independent pixels).
    AdSize["MEDIUM_RECTANGLE"] = "MEDIUM_RECTANGLE";
    // A dynamically sized banner that is full-width and auto-height.
    AdSize["SMART_BANNER"] = "SMART_BANNER";
    // A special variant of FLUID to be set on SearchAdView when
    // loading a DynamicHeightSearchAdRequest.
    // SEARCH = 'SEARCH',
    // IAB wide skyscraper ad size (160x600 density-independent pixels).
    // This size is currently not supported by the Google Mobile Ads network;
    // this is intended for mediation ad networks only.
    // WIDE_SKYSCRAPER = 'WIDE_SKYSCRAPER',
    // To define a custom banner size, set your desired AdSize
    AdSize["CUSTOM"] = "CUSTOM";
})(AdSize || (AdSize = {}));
/*
*
* More information
* https://developer.android.com/reference/android/widget/LinearLayout#attr_android:gravity
* */
var AdPosition;
(function (AdPosition) {
    AdPosition["TOP_CENTER"] = "TOP_CENTER";
    AdPosition["CENTER"] = "CENTER";
    AdPosition["BOTTOM_CENTER"] = "BOTTOM_CENTER";
})(AdPosition || (AdPosition = {}));
//# sourceMappingURL=definitions.js.map

/***/ }),

/***/ "./node_modules/capacitor-admob/dist/esm/index.js":
/*!********************************************************!*\
  !*** ./node_modules/capacitor-admob/dist/esm/index.js ***!
  \********************************************************/
/*! exports provided: AdSize, AdPosition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./definitions */ "./node_modules/capacitor-admob/dist/esm/definitions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AdSize", function() { return _definitions__WEBPACK_IMPORTED_MODULE_0__["AdSize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AdPosition", function() { return _definitions__WEBPACK_IMPORTED_MODULE_0__["AdPosition"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      Seleccione la canción\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Seleccioná la canción</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <div class=\"loader\" *ngIf=\"loading\">\n    <ion-spinner></ion-spinner>\n  </div>\n\n  <div class=\"items\" *ngIf=\"!loading\">\n    <ion-item *ngFor=\"let video of videos\" (click)=\"startVideo(video.ETag)\">\n      {{video.Key.split('.')[0].replace(regex, ' ')}}\n    </ion-item>\n  </div>\n\n  <div *ngIf=\"webVideo.show\">\n    <h2>Web</h2>\n    <video [crossOrigin]=\"'anonymous'\" [autoplay]=\"true\" [muted]=\"false\">\n      <source [src]=\"webVideo.src\" type=\"video/mp4\">\n    </video>\n  </div>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/tab2/tab2-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/tab2/tab2-routing.module.ts ***!
  \*********************************************/
/*! exports provided: Tab2PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageRoutingModule", function() { return Tab2PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab2.page */ "./src/app/tab2/tab2.page.ts");




const routes = [
    {
        path: '',
        component: _tab2_page__WEBPACK_IMPORTED_MODULE_3__["Tab2Page"],
    }
];
let Tab2PageRoutingModule = class Tab2PageRoutingModule {
};
Tab2PageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], Tab2PageRoutingModule);



/***/ }),

/***/ "./src/app/tab2/tab2.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/*! exports provided: Tab2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function() { return Tab2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab2.page */ "./src/app/tab2/tab2.page.ts");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "./src/app/explore-container/explore-container.module.ts");
/* harmony import */ var _tab2_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tab2-routing.module */ "./src/app/tab2/tab2-routing.module.ts");








let Tab2PageModule = class Tab2PageModule {
};
Tab2PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"],
            _tab2_routing_module__WEBPACK_IMPORTED_MODULE_7__["Tab2PageRoutingModule"]
        ],
        declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_5__["Tab2Page"]]
    })
], Tab2PageModule);



/***/ }),

/***/ "./src/app/tab2/tab2.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".loader {\n  text-align: center;\n}\n.loader ion-spinner {\n  width: 70px;\n  height: 70px;\n}\n.items .ion-item {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qamFyYW1pbC9Eb2N1bWVudHMvSkovUHJvamVjdHMvZXhwZXJpZW5jaWEtYm9saWNoZS9zcmMvYXBwL3RhYjIvdGFiMi5wYWdlLnNjc3MiLCJzcmMvYXBwL3RhYjIvdGFiMi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQ0NGO0FEQUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0VKO0FER0U7RUFDRSxlQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC90YWIyL3RhYjIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvYWRlcntcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBpb24tc3Bpbm5lciB7XG4gICAgd2lkdGg6IDcwcHg7XG4gICAgaGVpZ2h0OiA3MHB4O1xuICB9XG59XG5cbi5pdGVtcyB7XG4gIC5pb24taXRlbSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG59XG4iLCIubG9hZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmxvYWRlciBpb24tc3Bpbm5lciB7XG4gIHdpZHRoOiA3MHB4O1xuICBoZWlnaHQ6IDcwcHg7XG59XG5cbi5pdGVtcyAuaW9uLWl0ZW0ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */");

/***/ }),

/***/ "./src/app/tab2/tab2.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/*! exports provided: Tab2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2Page", function() { return Tab2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "./node_modules/@ionic-native/splash-screen/ngx/index.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _ionic_native_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/streaming-media/ngx */ "./node_modules/@ionic-native/streaming-media/ngx/index.js");
/* harmony import */ var _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/media/ngx */ "./node_modules/@ionic-native/media/ngx/index.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");
/* harmony import */ var capacitor_admob__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! capacitor-admob */ "./node_modules/capacitor-admob/dist/esm/index.js");










const { AdMob } = _capacitor_core__WEBPACK_IMPORTED_MODULE_7__["Plugins"];
let Tab2Page = class Tab2Page {
    constructor(platform, splashScreen, media, statusBar, streamingMedia, loadingController) {
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.media = media;
        this.statusBar = statusBar;
        this.streamingMedia = streamingMedia;
        this.loadingController = loadingController;
        this.loading = true;
        this.webVideo = { show: false, src: '' };
        this.regex = RegExp(/_/g);
        this.options = {
            //adId: 'ca-app-pub-6326566524185956/6552298156', -> Prod
            adId: 'ca-app-pub-3940256099942544/6300978111',
            adSize: capacitor_admob__WEBPACK_IMPORTED_MODULE_8__["AdSize"].FULL_BANNER,
            position: capacitor_admob__WEBPACK_IMPORTED_MODULE_8__["AdPosition"].BOTTOM_CENTER,
            hasTabBar: true,
        };
    }
    ngOnInit() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
            if (this.platform.is('hybrid')) {
                AdMob.showBanner(this.options).then(value => {
                    console.log(value); // true
                }, error => {
                    console.error(error); // show error
                });
            }
        });
        this.getList();
    }
    startVideo(id) {
        let selectedVideo = this.videos.find(video => video.ETag === id).Key;
        this.platform.ready().then(() => {
            if (this.platform.is('hybrid')) {
                let options = {
                    successCallback: () => { this.result = 'exito'; },
                    errorCallback: () => { this.result = 'error'; },
                    orientation: 'landscape'
                };
                this.streamingMedia.playVideo('https://expbnn.s3.amazonaws.com/' + selectedVideo, options);
            }
            else {
                this.webVideo.show = true;
                this.webVideo.src = 'https://expbnn.s3.amazonaws.com/' + selectedVideo;
            }
        });
    }
    getList() {
        let bucket = 'expbnn';
        let region = 'us-east-1';
        let prefix = '';
        fetch(this.getIndexUrl(bucket, region, prefix))
            .then(response => response.text())
            .then(str => (new DOMParser()).parseFromString(str, "text/xml"))
            .then(data => {
            const obj = this.xml2json(data);
            this.videos = obj.ListBucketResult.Contents;
            this.loading = false;
        });
    }
    getIndexUrl(bucket, region, prefix) {
        return 'https://s3.' + region + '.amazonaws.com/' + bucket + '/?delimiter=/&prefix=' + prefix;
    }
    /**
     * This function coverts a DOM Tree into JavaScript Object.
     * @param srcDOM: DOM Tree to be converted.
     */
    xml2json(srcDOM) {
        let children = [...srcDOM.children];
        // base case for recursion.
        if (!children.length) {
            return srcDOM.innerHTML;
        }
        // initializing object to be returned.
        let jsonResult = {};
        for (let child of children) {
            // checking is child has siblings of same name.
            let childIsArray = children.filter(eachChild => eachChild.nodeName === child.nodeName).length > 1;
            // if child is array, save the values as array, else as strings.
            if (childIsArray) {
                if (jsonResult[child.nodeName] === undefined) {
                    jsonResult[child.nodeName] = [this.xml2json(child)];
                }
                else {
                    jsonResult[child.nodeName].push(this.xml2json(child));
                }
            }
            else {
                jsonResult[child.nodeName] = this.xml2json(child);
            }
        }
        return jsonResult;
    }
};
Tab2Page.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"] },
    { type: _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_6__["Media"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"] },
    { type: _ionic_native_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_5__["StreamingMedia"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }
];
Tab2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab2',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tab2.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tab2.page.scss */ "./src/app/tab2/tab2.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"],
        _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_6__["Media"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"],
        _ionic_native_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_5__["StreamingMedia"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])
], Tab2Page);



/***/ })

}]);
//# sourceMappingURL=tab2-tab2-module-es2015.js.map