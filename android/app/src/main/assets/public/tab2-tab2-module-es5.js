function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"], {
  /***/
  "./node_modules/capacitor-admob/dist/esm/definitions.js":
  /*!**************************************************************!*\
    !*** ./node_modules/capacitor-admob/dist/esm/definitions.js ***!
    \**************************************************************/

  /*! exports provided: AdSize, AdPosition */

  /***/
  function node_modulesCapacitorAdmobDistEsmDefinitionsJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdSize", function () {
      return AdSize;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdPosition", function () {
      return AdPosition;
    });
    /*
    *  For more information
    *   Read:  https://developers.google.com/android/reference/com/google/android/gms/ads/AdSize
    * */


    var AdSize;

    (function (AdSize) {
      // Mobile Marketing Association (MMA)
      // banner ad size (320x50 density-independent pixels).
      AdSize["BANNER"] = "BANNER"; // A dynamically sized banner that matches its parent's
      // width and expands/contracts its height to match the ad's
      // content after loading completes.

      AdSize["FLUID"] = "FLUID"; //Interactive Advertising Bureau (IAB)
      // full banner ad size (468x60 density-independent pixels).

      AdSize["FULL_BANNER"] = "FULL_BANNER"; // Large banner ad size (320x100 density-independent pixels).

      AdSize["LARGE_BANNER"] = "LARGE_BANNER"; // Interactive Advertising Bureau (IAB)
      // leaderboard ad size (728x90 density-independent pixels).

      AdSize["LEADERBOARD"] = "LEADERBOARD"; // Interactive Advertising Bureau (IAB)
      // medium rectangle ad size (300x250 density-independent pixels).

      AdSize["MEDIUM_RECTANGLE"] = "MEDIUM_RECTANGLE"; // A dynamically sized banner that is full-width and auto-height.

      AdSize["SMART_BANNER"] = "SMART_BANNER"; // A special variant of FLUID to be set on SearchAdView when
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
    })(AdPosition || (AdPosition = {})); //# sourceMappingURL=definitions.js.map

    /***/

  },

  /***/
  "./node_modules/capacitor-admob/dist/esm/index.js":
  /*!********************************************************!*\
    !*** ./node_modules/capacitor-admob/dist/esm/index.js ***!
    \********************************************************/

  /*! exports provided: AdSize, AdPosition */

  /***/
  function node_modulesCapacitorAdmobDistEsmIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./definitions */
    "./node_modules/capacitor-admob/dist/esm/definitions.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AdSize", function () {
      return _definitions__WEBPACK_IMPORTED_MODULE_0__["AdSize"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AdPosition", function () {
      return _definitions__WEBPACK_IMPORTED_MODULE_0__["AdPosition"];
    }); //# sourceMappingURL=index.js.map

    /***/

  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTab2Tab2PageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      Seleccione la canción\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Seleccioná la canción</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <div class=\"loader\" *ngIf=\"loading\">\n    <ion-spinner></ion-spinner>\n  </div>\n\n  <div class=\"items\" *ngIf=\"!loading\">\n    <ion-item *ngFor=\"let video of videos\" (click)=\"startVideo(video.ETag)\">\n      {{video.Key.split('.')[0].replace(regex, ' ')}}\n    </ion-item>\n    <ion-item>\n<!--      This item is to fix ad banner overlap-->\n    </ion-item>\n  </div>\n\n  <div *ngIf=\"webVideo.show\">\n    <h2>Web</h2>\n    <video [crossOrigin]=\"'anonymous'\" [autoplay]=\"true\" [muted]=\"false\">\n      <source [src]=\"webVideo.src\" type=\"video/mp4\">\n    </video>\n  </div>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/tab2/tab2-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/tab2/tab2-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: Tab2PageRoutingModule */

  /***/
  function srcAppTab2Tab2RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab2PageRoutingModule", function () {
      return Tab2PageRoutingModule;
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


    var _tab2_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./tab2.page */
    "./src/app/tab2/tab2.page.ts");

    var routes = [{
      path: '',
      component: _tab2_page__WEBPACK_IMPORTED_MODULE_3__["Tab2Page"]
    }];

    var Tab2PageRoutingModule = function Tab2PageRoutingModule() {
      _classCallCheck(this, Tab2PageRoutingModule);
    };

    Tab2PageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], Tab2PageRoutingModule);
    /***/
  },

  /***/
  "./src/app/tab2/tab2.module.ts":
  /*!*************************************!*\
    !*** ./src/app/tab2/tab2.module.ts ***!
    \*************************************/

  /*! exports provided: Tab2PageModule */

  /***/
  function srcAppTab2Tab2ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function () {
      return Tab2PageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _tab2_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./tab2.page */
    "./src/app/tab2/tab2.page.ts");
    /* harmony import */


    var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../explore-container/explore-container.module */
    "./src/app/explore-container/explore-container.module.ts");
    /* harmony import */


    var _tab2_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./tab2-routing.module */
    "./src/app/tab2/tab2-routing.module.ts");

    var Tab2PageModule = function Tab2PageModule() {
      _classCallCheck(this, Tab2PageModule);
    };

    Tab2PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"], _tab2_routing_module__WEBPACK_IMPORTED_MODULE_7__["Tab2PageRoutingModule"]],
      declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_5__["Tab2Page"]]
    })], Tab2PageModule);
    /***/
  },

  /***/
  "./src/app/tab2/tab2.page.scss":
  /*!*************************************!*\
    !*** ./src/app/tab2/tab2.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppTab2Tab2PageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".loader {\n  text-align: center;\n}\n.loader ion-spinner {\n  width: 70px;\n  height: 70px;\n}\n.items .ion-item {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qamFyYW1pbC9Eb2N1bWVudHMvSkovUHJvamVjdHMvZXhwZXJpZW5jaWEtYm9saWNoZS9zcmMvYXBwL3RhYjIvdGFiMi5wYWdlLnNjc3MiLCJzcmMvYXBwL3RhYjIvdGFiMi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQ0NGO0FEQUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0VKO0FER0U7RUFDRSxlQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC90YWIyL3RhYjIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvYWRlcntcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBpb24tc3Bpbm5lciB7XG4gICAgd2lkdGg6IDcwcHg7XG4gICAgaGVpZ2h0OiA3MHB4O1xuICB9XG59XG5cbi5pdGVtcyB7XG4gIC5pb24taXRlbSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG59XG4iLCIubG9hZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmxvYWRlciBpb24tc3Bpbm5lciB7XG4gIHdpZHRoOiA3MHB4O1xuICBoZWlnaHQ6IDcwcHg7XG59XG5cbi5pdGVtcyAuaW9uLWl0ZW0ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/tab2/tab2.page.ts":
  /*!***********************************!*\
    !*** ./src/app/tab2/tab2.page.ts ***!
    \***********************************/

  /*! exports provided: Tab2Page */

  /***/
  function srcAppTab2Tab2PageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab2Page", function () {
      return Tab2Page;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");
    /* harmony import */


    var _ionic_native_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/streaming-media/ngx */
    "./node_modules/@ionic-native/streaming-media/ngx/index.js");
    /* harmony import */


    var _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/media/ngx */
    "./node_modules/@ionic-native/media/ngx/index.js");
    /* harmony import */


    var _capacitor_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @capacitor/core */
    "./node_modules/@capacitor/core/dist/esm/index.js");
    /* harmony import */


    var capacitor_admob__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! capacitor-admob */
    "./node_modules/capacitor-admob/dist/esm/index.js");

    var AdMob = _capacitor_core__WEBPACK_IMPORTED_MODULE_7__["Plugins"].AdMob;

    var Tab2Page = /*#__PURE__*/function () {
      function Tab2Page(platform, splashScreen, media, statusBar, streamingMedia, loadingController) {
        _classCallCheck(this, Tab2Page);

        this.platform = platform;
        this.splashScreen = splashScreen;
        this.media = media;
        this.statusBar = statusBar;
        this.streamingMedia = streamingMedia;
        this.loadingController = loadingController;
        this.loading = true;
        this.adReady = false;
        this.webVideo = {
          show: false,
          src: ''
        };
        this.regex = RegExp(/_/g);
      }

      _createClass(Tab2Page, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.platform.ready().then(function () {
            _this.statusBar.styleDefault();

            _this.splashScreen.hide();

            if (_this.platform.is('hybrid')) {
              var options;

              if (_this.platform.is('android')) {
                options = {
                  adId: 'ca-app-pub-6326566524185956/6552298156',
                  adSize: capacitor_admob__WEBPACK_IMPORTED_MODULE_8__["AdSize"].FULL_BANNER,
                  position: capacitor_admob__WEBPACK_IMPORTED_MODULE_8__["AdPosition"].BOTTOM_CENTER,
                  hasTabBar: true
                };
                AdMob.showBanner(options).then(function (value) {
                  console.log(value); // true
                }, function (error) {
                  console.error(error); // show error
                });
              } else {
                options = {
                  adId: 'ca-app-pub-6326566524185956/9667338661',
                  autoShow: false,
                  isTesting: false
                };
                AdMob.prepareInterstitial(options).then(function (value) {
                  if (value) {
                    _this.adReady = true;
                  }

                  console.log(value); // true
                }, function (error) {
                  console.error(error); // show error
                });
              }
            }
          });
          this.getList();
        }
      }, {
        key: "showInterstitial",
        value: function showInterstitial() {
          AdMob.showInterstitial().then(function (value) {
            console.log(value); // true
          }, function (error) {
            console.error(error); // show error
          });
        }
      }, {
        key: "startVideo",
        value: function startVideo(id) {
          var _this2 = this;

          if (this.adReady) {
            this.adReady = false;
            this.showInterstitial();
          } else {
            var selectedVideo = this.videos.find(function (video) {
              return video.ETag === id;
            }).Key;
            this.platform.ready().then(function () {
              if (_this2.platform.is('hybrid')) {
                var options = {
                  successCallback: function successCallback() {
                    _this2.result = 'exito';
                  },
                  errorCallback: function errorCallback() {
                    _this2.result = 'error';
                  },
                  orientation: 'landscape'
                };

                _this2.streamingMedia.playVideo('https://expbnn.s3.amazonaws.com/' + selectedVideo, options);
              } else {
                _this2.webVideo.show = true;
                _this2.webVideo.src = 'https://expbnn.s3.amazonaws.com/' + selectedVideo;
              }
            });
          }
        }
      }, {
        key: "getList",
        value: function getList() {
          var _this3 = this;

          var bucket = 'expbnn';
          var region = 'us-east-1';
          var prefix = '';
          fetch(this.getIndexUrl(bucket, region, prefix)).then(function (response) {
            return response.text();
          }).then(function (str) {
            return new DOMParser().parseFromString(str, "text/xml");
          }).then(function (data) {
            var obj = _this3.xml2json(data);

            _this3.videos = obj.ListBucketResult.Contents;
            _this3.loading = false;
          });
        }
      }, {
        key: "getIndexUrl",
        value: function getIndexUrl(bucket, region, prefix) {
          return 'https://s3.' + region + '.amazonaws.com/' + bucket + '/?delimiter=/&prefix=' + prefix;
        }
        /**
         * This function coverts a DOM Tree into JavaScript Object.
         * @param srcDOM: DOM Tree to be converted.
         */

      }, {
        key: "xml2json",
        value: function xml2json(srcDOM) {
          var _this4 = this;

          var children = _toConsumableArray(srcDOM.children); // base case for recursion.


          if (!children.length) {
            return srcDOM.innerHTML;
          } // initializing object to be returned.


          var jsonResult = {};

          var _iterator = _createForOfIteratorHelper(children),
              _step;

          try {
            var _loop = function _loop() {
              var child = _step.value;
              // checking is child has siblings of same name.
              var childIsArray = children.filter(function (eachChild) {
                return eachChild.nodeName === child.nodeName;
              }).length > 1; // if child is array, save the values as array, else as strings.

              if (childIsArray) {
                if (jsonResult[child.nodeName] === undefined) {
                  jsonResult[child.nodeName] = [_this4.xml2json(child)];
                } else {
                  jsonResult[child.nodeName].push(_this4.xml2json(child));
                }
              } else {
                jsonResult[child.nodeName] = _this4.xml2json(child);
              }
            };

            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              _loop();
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          return jsonResult;
        }
      }]);

      return Tab2Page;
    }();

    Tab2Page.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
      }, {
        type: _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_6__["Media"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
      }, {
        type: _ionic_native_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_5__["StreamingMedia"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }];
    };

    Tab2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tab2',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tab2.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tab2.page.scss */
      "./src/app/tab2/tab2.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"], _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_6__["Media"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"], _ionic_native_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_5__["StreamingMedia"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])], Tab2Page);
    /***/
  }
}]);
//# sourceMappingURL=tab2-tab2-module-es5.js.map