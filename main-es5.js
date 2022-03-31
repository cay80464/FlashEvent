(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "./$$_lazy_route_resource lazy recursive":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function $$_lazy_route_resourceLazyRecursive(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
      /***/
    },

    /***/
    "./src/app/app-routing.module.ts":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./homepage/homepage.component */
      "./src/app/homepage/homepage.component.ts");

      var routes = [{
        path: '',
        component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_2__["HomepageComponent"]
      }];

      var AppRoutingModule = /*#__PURE__*/_createClass(function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      });

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/app.component.ts":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @nebular/theme */
      "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var AppComponent = /*#__PURE__*/_createClass(function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'FlashEvent';
      });

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 5,
        vars: 0,
        consts: [["fixed", ""]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-layout");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nb-layout-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nb-layout-column");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "nb-layout-footer", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbLayoutComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbLayoutHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbLayoutColumnComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbLayoutFooterComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/app.module.ts":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app-routing.module */
      "./src/app/app-routing.module.ts");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./homepage/homepage.component */
      "./src/app/homepage/homepage.component.ts");
      /* harmony import */


      var _page1_page1_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./page1/page1.component */
      "./src/app/page1/page1.component.ts");
      /* harmony import */


      var _page2_page2_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./page2/page2.component */
      "./src/app/page2/page2.component.ts");
      /* harmony import */


      var _page3_page3_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./page3/page3.component */
      "./src/app/page3/page3.component.ts");
      /* harmony import */


      var _page4_page4_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./page4/page4.component */
      "./src/app/page4/page4.component.ts");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @nebular/theme */
      "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
      /* harmony import */


      var _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @nebular/eva-icons */
      "./node_modules/@nebular/eva-icons/__ivy_ngcc__/fesm2015/index.js");
      /* harmony import */


      var _page5_page5_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./page5/page5.component */
      "./src/app/page5/page5.component.ts");

      var AppModule = /*#__PURE__*/_createClass(function AppModule() {
        _classCallCheck(this, AppModule);
      });

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbThemeModule"].forRoot({
          name: 'default'
        }), _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbLayoutModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbTabsetModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbCardModule"], _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_11__["NbEvaIconsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_4__["HomepageComponent"], _page1_page1_component__WEBPACK_IMPORTED_MODULE_5__["Page1Component"], _page2_page2_component__WEBPACK_IMPORTED_MODULE_6__["Page2Component"], _page3_page3_component__WEBPACK_IMPORTED_MODULE_7__["Page3Component"], _page4_page4_component__WEBPACK_IMPORTED_MODULE_8__["Page4Component"], _page5_page5_component__WEBPACK_IMPORTED_MODULE_12__["Page5Component"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbThemeModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbLayoutModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbTabsetModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbCardModule"], _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_11__["NbEvaIconsModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_4__["HomepageComponent"], _page1_page1_component__WEBPACK_IMPORTED_MODULE_5__["Page1Component"], _page2_page2_component__WEBPACK_IMPORTED_MODULE_6__["Page2Component"], _page3_page3_component__WEBPACK_IMPORTED_MODULE_7__["Page3Component"], _page4_page4_component__WEBPACK_IMPORTED_MODULE_8__["Page4Component"], _page5_page5_component__WEBPACK_IMPORTED_MODULE_12__["Page5Component"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbThemeModule"].forRoot({
              name: 'default'
            }), _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbLayoutModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbTabsetModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbCardModule"], _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_11__["NbEvaIconsModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/homepage/homepage.component.ts":
    /*!************************************************!*\
      !*** ./src/app/homepage/homepage.component.ts ***!
      \************************************************/

    /*! exports provided: HomepageComponent */

    /***/
    function srcAppHomepageHomepageComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomepageComponent", function () {
        return HomepageComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @nebular/theme */
      "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
      /* harmony import */


      var _page1_page1_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../page1/page1.component */
      "./src/app/page1/page1.component.ts");
      /* harmony import */


      var _page2_page2_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../page2/page2.component */
      "./src/app/page2/page2.component.ts");
      /* harmony import */


      var _page3_page3_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../page3/page3.component */
      "./src/app/page3/page3.component.ts");
      /* harmony import */


      var _page4_page4_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../page4/page4.component */
      "./src/app/page4/page4.component.ts");
      /* harmony import */


      var _page5_page5_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../page5/page5.component */
      "./src/app/page5/page5.component.ts");

      var HomepageComponent = /*#__PURE__*/function () {
        function HomepageComponent() {
          _classCallCheck(this, HomepageComponent);
        }

        _createClass(HomepageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return HomepageComponent;
      }();

      HomepageComponent.ɵfac = function HomepageComponent_Factory(t) {
        return new (t || HomepageComponent)();
      };

      HomepageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HomepageComponent,
        selectors: [["app-homepage"]],
        decls: 13,
        vars: 0,
        consts: [["tabTitle", "\u6D3B\u52D5\u8FA6\u6CD5"], ["tabTitle", "\u734E\u52F5\u8FA6\u6CD5"], ["tabTitle", "\u6211\u8981\u6295\u7968"], ["tabTitle", "\u6211\u8981\u6295\u7A3F"], ["tabTitle", "\u4E0A\u5C46\u5F97\u734E"]],
        template: function HomepageComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-body");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nb-tabset");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-tab", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-page1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nb-tab", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-page2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nb-tab", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-page3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nb-tab", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-page4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "nb-tab", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-page5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardBodyComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbTabsetComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbTabComponent"], _page1_page1_component__WEBPACK_IMPORTED_MODULE_2__["Page1Component"], _page2_page2_component__WEBPACK_IMPORTED_MODULE_3__["Page2Component"], _page3_page3_component__WEBPACK_IMPORTED_MODULE_4__["Page3Component"], _page4_page4_component__WEBPACK_IMPORTED_MODULE_5__["Page4Component"], _page5_page5_component__WEBPACK_IMPORTED_MODULE_6__["Page5Component"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWVwYWdlL2hvbWVwYWdlLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomepageComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-homepage',
            templateUrl: './homepage.component.html',
            styleUrls: ['./homepage.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/page1/page1.component.ts":
    /*!******************************************!*\
      !*** ./src/app/page1/page1.component.ts ***!
      \******************************************/

    /*! exports provided: Page1Component */

    /***/
    function srcAppPage1Page1ComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Page1Component", function () {
        return Page1Component;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var Page1Component = /*#__PURE__*/function () {
        function Page1Component() {
          _classCallCheck(this, Page1Component);
        }

        _createClass(Page1Component, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return Page1Component;
      }();

      Page1Component.ɵfac = function Page1Component_Factory(t) {
        return new (t || Page1Component)();
      };

      Page1Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: Page1Component,
        selectors: [["app-page1"]],
        decls: 1,
        vars: 0,
        template: function Page1Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "520\u6D3B\u52D5\u62DB\u52DF \u6D3B\u52D5\u4ECB\u7D39\n\u53C8\u5230\u4E86\u4E00\u5E74\u4E00\u5EA6\u7684520\uFF0C\u5C55\u73FE\u4F60\u5011\u6EFF\u6EFF\u7684\u611B\u5427\uFF0C\u524D\u4E09\u540D\u9084\u6709\u611B\u60C5\u734E\u91D1\u54E6\u3002\u5FEB\u4F86\u9080\u8ACB\u4F60\u7684\u53E6\u4E00\u534A\u53C3\u52A0\u5427\uFF01 \u6D3B\u52D5\u8AAA\u660E\n\u6200\u4EBA\u5408\u7167\u6295\u7A3F\uFF0C\u9700\u6709\u7279\u5B9A\u4E3B\u984C\uFF0C3\uFF5E5\u5F35\uFF0C\u9700\u5F9E\u4EE5\u4E0B\u7DB2\u5740\u8A3B\u518A\u767B\u5165\u5F8C\u5373\u53EF\u4E0A\u50B3\uFF0C\u4E0A\u50B3\u5F8C\u5C31\u53EF\u4EE5\u7B49\u4E4B\u5F8C\u7684\u6295\u7968\u6642\u9593\u5566\uFF0C\u524D\u4E09\u540D\u7684\u7968\u6578\uFF0B\u8A55\u9078\u5206\uFF0C\u6700\u9AD8\u7684\u4F9D\u5E8F\u6392\u524D\u4E09\u540D\u53CA\u4EBA\u6C23\u734E\u3002 \u734E\u91D1\n\u7B2C\u4E00\u540D 1\u540D 12000\n\u7B2C\u4E8C\u540D 1\u540D 6000\n\u7B2C\u4E09\u540D 1\u540D 2000\n\u4EBA\u6C23\u734E \u6578\u540D 520 \u6CE8\u610F\u4E8B\u9805\n\u6295\u7A3F\u5F8C\u7B49\u6295\u7968\u7D50\u679C\u4F9D\u5E8F\u6392\u51FA\u6295\u7A3F\u5F8C\u4E0D\u63A5\u53D7\u4FEE\u6539\uFF0C\u4E5F\u4E0D\u5141\u8A31\u4E00\u7A3F\u591A\u6295\uFF0C\u4E00\u7D93\u767C\u73FE\u5373\u53D6\u6D88\u8CC7\u683C\u3002 \u6295\u7A3F\u65E5\u671F\uFF1A\u73FE\u5728\u8D77\u81F34\u670817\u65E5\u665A\u4E0A11.59\u5206\u4E4B\u524D\n\u6295\u7968\u65E5\u671F\uFF1A4\u670825\u65E5\uFF5E5\u67088\u65E5\u665A\u4E0A11.59\u5206\u524D\n\u5F35\u6578\u9650\u5236\uFF1A3\uFF5E5\u5F35\n\u7DB2\u5740\uFF1A\n\u5167\u5BB9\u4E0D\u9650\uFF08\u5167\u5BB9\u9700\u6709\u500B\u7279\u5B9A\u4E3B\u984C\u3002EX:\u79D1\u6280\u611F\u7684\u611B\u60C5\uFF0C\u9752\u6F80\u7684\u6200\u4EBA..\u7B49\u7B49\uFF09");
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2UxL3BhZ2UxLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Page1Component, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-page1',
            templateUrl: './page1.component.html',
            styleUrls: ['./page1.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/page2/page2.component.ts":
    /*!******************************************!*\
      !*** ./src/app/page2/page2.component.ts ***!
      \******************************************/

    /*! exports provided: Page2Component */

    /***/
    function srcAppPage2Page2ComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Page2Component", function () {
        return Page2Component;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var Page2Component = /*#__PURE__*/function () {
        function Page2Component() {
          _classCallCheck(this, Page2Component);
        }

        _createClass(Page2Component, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return Page2Component;
      }();

      Page2Component.ɵfac = function Page2Component_Factory(t) {
        return new (t || Page2Component)();
      };

      Page2Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: Page2Component,
        selectors: [["app-page2"]],
        decls: 2,
        vars: 0,
        template: function Page2Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "page2 works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2UyL3BhZ2UyLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Page2Component, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-page2',
            templateUrl: './page2.component.html',
            styleUrls: ['./page2.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/page3/page3.component.ts":
    /*!******************************************!*\
      !*** ./src/app/page3/page3.component.ts ***!
      \******************************************/

    /*! exports provided: Page3Component */

    /***/
    function srcAppPage3Page3ComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Page3Component", function () {
        return Page3Component;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var Page3Component = /*#__PURE__*/function () {
        function Page3Component() {
          _classCallCheck(this, Page3Component);
        }

        _createClass(Page3Component, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return Page3Component;
      }();

      Page3Component.ɵfac = function Page3Component_Factory(t) {
        return new (t || Page3Component)();
      };

      Page3Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: Page3Component,
        selectors: [["app-page3"]],
        decls: 2,
        vars: 0,
        template: function Page3Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "page3 works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2UzL3BhZ2UzLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Page3Component, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-page3',
            templateUrl: './page3.component.html',
            styleUrls: ['./page3.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/page4/page4.component.ts":
    /*!******************************************!*\
      !*** ./src/app/page4/page4.component.ts ***!
      \******************************************/

    /*! exports provided: Page4Component */

    /***/
    function srcAppPage4Page4ComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Page4Component", function () {
        return Page4Component;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var Page4Component = /*#__PURE__*/function () {
        function Page4Component() {
          _classCallCheck(this, Page4Component);
        }

        _createClass(Page4Component, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return Page4Component;
      }();

      Page4Component.ɵfac = function Page4Component_Factory(t) {
        return new (t || Page4Component)();
      };

      Page4Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: Page4Component,
        selectors: [["app-page4"]],
        decls: 2,
        vars: 0,
        template: function Page4Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "page4 works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2U0L3BhZ2U0LmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Page4Component, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-page4',
            templateUrl: './page4.component.html',
            styleUrls: ['./page4.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/page5/page5.component.ts":
    /*!******************************************!*\
      !*** ./src/app/page5/page5.component.ts ***!
      \******************************************/

    /*! exports provided: Page5Component */

    /***/
    function srcAppPage5Page5ComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Page5Component", function () {
        return Page5Component;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var Page5Component = /*#__PURE__*/function () {
        function Page5Component() {
          _classCallCheck(this, Page5Component);
        }

        _createClass(Page5Component, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return Page5Component;
      }();

      Page5Component.ɵfac = function Page5Component_Factory(t) {
        return new (t || Page5Component)();
      };

      Page5Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: Page5Component,
        selectors: [["app-page5"]],
        decls: 2,
        vars: 0,
        template: function Page5Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "page5 works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2U1L3BhZ2U1LmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Page5Component, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-page5',
            templateUrl: './page5.component.html',
            styleUrls: ['./page5.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/environments/environment.ts":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "./src/main.ts":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function srcMainTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "./src/app/app.module.ts");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Users\賀\Desktop\FlashEvent\Project\FlashEvent\FlashEvent\src\main.ts */
      "./src/main.ts");
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map