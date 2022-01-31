(self["webpackChunkproject1"] = self["webpackChunkproject1"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _quran_lokmen_lokmen_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quran/lokmen/lokmen.component */ 4555);
/* harmony import */ var _quran_nour_nour_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quran/nour/nour.component */ 6555);
/* harmony import */ var _quran_quran_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./quran/quran.component */ 2167);
/* harmony import */ var _quran_rahmen_rahmen_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./quran/rahmen/rahmen.component */ 6679);
/* harmony import */ var _sonna_sonna_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sonna/sonna.component */ 3709);








const routes = [
    {
        path: 'home',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./home/home.module */ 3467)).then(m => m.HomePageModule)
    },
    {
        path: 'quran',
        component: _quran_quran_component__WEBPACK_IMPORTED_MODULE_2__.QuranComponent
    },
    {
        path: 'sonna',
        component: _sonna_sonna_component__WEBPACK_IMPORTED_MODULE_4__.SonnaComponent
    },
    {
        path: 'nour',
        component: _quran_nour_nour_component__WEBPACK_IMPORTED_MODULE_1__.NourComponent
    },
    {
        path: 'rahmen',
        component: _quran_rahmen_rahmen_component__WEBPACK_IMPORTED_MODULE_3__.RahmenComponent
    },
    {
        path: 'lokmen',
        component: _quran_lokmen_lokmen_component__WEBPACK_IMPORTED_MODULE_0__.LokmenComponent
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_7__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./app.component.html */ 1106);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 3069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let AppComponent = class AppComponent {
    constructor() { }
};
AppComponent.ctorParameters = () => [];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AppComponent);



/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 158);







let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule.forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule],
        providers: [{ provide: _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicRouteStrategy }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 4555:
/*!**************************************************!*\
  !*** ./src/app/quran/lokmen/lokmen.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LokmenComponent": () => (/* binding */ LokmenComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_lokmen_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./lokmen.component.html */ 5461);
/* harmony import */ var _lokmen_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lokmen.component.scss */ 331);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let LokmenComponent = class LokmenComponent {
    constructor() { }
    ngOnInit() { }
};
LokmenComponent.ctorParameters = () => [];
LokmenComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-lokmen',
        template: _raw_loader_lokmen_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_lokmen_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LokmenComponent);



/***/ }),

/***/ 6555:
/*!**********************************************!*\
  !*** ./src/app/quran/nour/nour.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NourComponent": () => (/* binding */ NourComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_nour_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./nour.component.html */ 8142);
/* harmony import */ var _nour_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nour.component.scss */ 9346);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let NourComponent = class NourComponent {
    constructor() { }
    ngOnInit() { }
};
NourComponent.ctorParameters = () => [];
NourComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-nour',
        template: _raw_loader_nour_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_nour_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], NourComponent);



/***/ }),

/***/ 2167:
/*!******************************************!*\
  !*** ./src/app/quran/quran.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuranComponent": () => (/* binding */ QuranComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_quran_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./quran.component.html */ 6323);
/* harmony import */ var _quran_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quran.component.scss */ 3652);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);





let QuranComponent = class QuranComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() { }
    nour() {
        this.router.navigateByUrl('nour');
    }
    rahmen() {
        this.router.navigateByUrl('rahmen');
    }
    lokmen() {
        this.router.navigateByUrl('lokmen');
    }
};
QuranComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
QuranComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-quran',
        template: _raw_loader_quran_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_quran_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], QuranComponent);



/***/ }),

/***/ 6679:
/*!**************************************************!*\
  !*** ./src/app/quran/rahmen/rahmen.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RahmenComponent": () => (/* binding */ RahmenComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_rahmen_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./rahmen.component.html */ 7060);
/* harmony import */ var _rahmen_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rahmen.component.scss */ 7710);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let RahmenComponent = class RahmenComponent {
    constructor() { }
    ngOnInit() { }
};
RahmenComponent.ctorParameters = () => [];
RahmenComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-rahmen',
        template: _raw_loader_rahmen_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_rahmen_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RahmenComponent);



/***/ }),

/***/ 3709:
/*!******************************************!*\
  !*** ./src/app/sonna/sonna.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SonnaComponent": () => (/* binding */ SonnaComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_sonna_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./sonna.component.html */ 8458);
/* harmony import */ var _sonna_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sonna.component.scss */ 8028);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let SonnaComponent = class SonnaComponent {
    constructor() { }
    ngOnInit() { }
};
SonnaComponent.ctorParameters = () => [];
SonnaComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-sonna',
        template: _raw_loader_sonna_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_sonna_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SonnaComponent);



/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 4608);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-action-sheet.entry.js": [
		7321,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		6108,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		1489,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		305,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		5830,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		7757,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-button_2.entry.js": [
		392,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		6911,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		937,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		8695,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		6034,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		8837,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		4195,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		1709,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		5931,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		4513,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		8056,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		862,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		7509,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		6272,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		1855,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		8708,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-popover.entry.js": [
		3527,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		4694,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		9222,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		5277,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		9921,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		3122,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		1602,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		5174,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		7895,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		6164,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		592,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		7162,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		1374,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		7896,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		5043,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		7802,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		9072,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		2191,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		801,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		7110,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		431,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 3069:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ 331:
/*!****************************************************!*\
  !*** ./src/app/quran/lokmen/lokmen.component.scss ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".soura {\n  color: #4FCE4A;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxva21lbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7QUFDSiIsImZpbGUiOiJsb2ttZW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc291cmF7XHJcbiAgICBjb2xvcjojNEZDRTRBO1xyXG59Il19 */");

/***/ }),

/***/ 9346:
/*!************************************************!*\
  !*** ./src/app/quran/nour/nour.component.scss ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".soura {\n  color: #4FCE4A;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0FBQ0oiLCJmaWxlIjoibm91ci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zb3VyYXtcclxuICAgIGNvbG9yOiM0RkNFNEE7XHJcbn0iXX0= */");

/***/ }),

/***/ 3652:
/*!********************************************!*\
  !*** ./src/app/quran/quran.component.scss ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#container {\n  text-align: center;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1cmFuLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtBQUNKIiwiZmlsZSI6InF1cmFuLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbn0iXX0= */");

/***/ }),

/***/ 7710:
/*!****************************************************!*\
  !*** ./src/app/quran/rahmen/rahmen.component.scss ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".soura {\n  color: #4FCE4A;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJhaG1lbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7QUFDSiIsImZpbGUiOiJyYWhtZW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc291cmF7XHJcbiAgICBjb2xvcjojNEZDRTRBO1xyXG59Il19 */");

/***/ }),

/***/ 8028:
/*!********************************************!*\
  !*** ./src/app/sonna/sonna.component.scss ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".soura {\n  color: #4FCE4A;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvbm5hLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtBQUNKIiwiZmlsZSI6InNvbm5hLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNvdXJhe1xyXG4gICAgY29sb3I6IzRGQ0U0QTtcclxufSJdfQ== */");

/***/ }),

/***/ 1106:
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n");

/***/ }),

/***/ 5461:
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/quran/lokmen/lokmen.component.html ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar style=\"text-align: center;\">\n    <ion-buttons slot=\"start\">\n        <ion-back-button text=\"\" style=\"margin-top: 1vh;\"></ion-back-button>\n    </ion-buttons>\n    <h3 style=\"color:#E39A33;float: right;margin: 14px;\" >  سُورَة لُقمَان</h3>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <h4 class=\"soura\" style=\"float: right;margin: 14px;\">سُورَة لُقمَان الجُزء(1ـ5)</h4>\n  <iframe height=\"230\" style=\"width: 434px;width: 97%;border-radius: 10px;\" src=\"https://www.youtube.com/embed/H_AmVzoEMfw\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n  <h4 class=\"soura\" style=\"float: right;margin: 14px;\">سُورَة لُقمَان الجُزء(6ـ10)</h4 >\n    <iframe height=\"230\" style=\"width: 434px;width: 97%;border-radius: 10px;\" src=\"https://www.youtube.com/embed/tDWYPHI6-3I\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n  <h4 class=\"soura\" style=\"float: right;margin: 14px;\">سُورَة لُقمَان الجُزء(11ـ14)</h4>\n  <iframe height=\"230\" style=\"width: 434px;width: 97%;border-radius: 10px;\" src=\"https://www.youtube.com/embed/feT2j6NaGks\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n  <h4 class=\"soura\" style=\"float: right;margin: 14px;\">سُورَة لُقمَان الجُزء(15ـ18)</h4>\n  <iframe height=\"230\" style=\"width: 434px;width: 97%;border-radius: 10px;\" src=\"https://www.youtube.com/embed/jYt7IeeZw2c\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n  <h4 class=\"soura\" style=\"float: right;margin: 14px;\">سُورَة لُقمَان الجُزء(19ـ23)</h4>\n  <iframe height=\"230\" style=\"width: 434px;width: 97%;border-radius: 10px;\" src=\"https://www.youtube.com/embed/-2B-tp1e3K4\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n  <h4 class=\"soura\" style=\"float: right;margin: 14px;\">سُورَة لُقمَان الجُزء(24ـ27)</h4>\n  <iframe height=\"230\" style=\"width: 434px;width: 97%;border-radius: 10px;\" src=\"https://www.youtube.com/embed/fxGRgo4CvZE\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n  <h4 class=\"soura\" style=\"float: right;margin: 14px;\">سُورَة لُقمَان الجُزء(28ـ31)</h4>\n  <iframe height=\"230\" style=\"width: 434px;width: 97%;border-radius: 10px;\" src=\"https://www.youtube.com/embed/NI3eLVgoPhk\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n  <h4 class=\"soura\" style=\"float: right;margin: 14px;\">سُورَة لُقمَان الجُزء(32ـ33)</h4>\n  <iframe height=\"230\" style=\"width: 434px;width: 97%;border-radius: 10px;\" src=\"https://www.youtube.com/embed/0wdNWGkDQqQ\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n\n\n\n</ion-content>\n\n");

/***/ }),

/***/ 8142:
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/quran/nour/nour.component.html ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  \n  <ion-toolbar style=\"text-align: center;\">\n    <ion-buttons slot=\"start\">\n        <ion-back-button text=\"\" style=\"margin-top: 1vh;\"></ion-back-button>\n    </ion-buttons>\n    <h3 style=\"color:#E39A33;float: right;margin: 14px;\">سُورَة النُّور</h3>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <h4 class=\"soura\" style=\"float: right;margin: 14px;\">سُورَة النُّور الجُزء(1ـ5)</h4>\n  <iframe height=\"230\" style=\"width: 434px;width: 97%;border-radius: 10px;\" src=\"https://www.youtube.com/embed/71EPmn6rz90\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n  <h4 class=\"soura\" style=\"float: right;margin: 14px;\">سُورَة النُّور الجُزء(6ـ10)</h4>\n  <iframe height=\"230\" style=\"width: 434px;width: 97%;border-radius: 10px;\" src=\"https://www.youtube.com/embed/CBGCZHlyIGs\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n  <h4 class=\"soura\" style=\"float: right;margin: 14px;\">سُورَة النُّور الجُزء(11ـ18)</h4>\n  <iframe height=\"230\" style=\"width: 434px;width: 97%;border-radius: 10px;\" src=\"https://www.youtube.com/embed/N4QA3zm9lLA\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n  <h4 class=\"soura\" style=\"float: right;margin: 14px;\">سُورَة النُّور الجُزء(19ـ22)</h4>\n  <iframe height=\"230\" style=\"width: 434px;width: 97%;border-radius: 10px;\" src=\"https://www.youtube.com/embed/VwM-W4Z578A\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n  <h4 class=\"soura\" style=\"float: right;margin: 14px;\">سُورَة النُّور الجُزء(23ـ29)</h4>\n  <iframe height=\"230\" style=\"width: 434px;width: 97%;border-radius: 10px;\" src=\"https://www.youtube.com/embed/oovAqJaW5IE\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n  <h4 class=\"soura\" style=\"float: right;margin: 14px;\">سُورَة النُّور الجُزء(30ـ31)</h4>\n  <iframe height=\"230\" style=\"width: 434px;width: 97%;border-radius: 10px;\" src=\"https://www.youtube.com/embed/wNLH1603aLI\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n  <h4 class=\"soura\" style=\"float: right;margin: 14px;\">سُورَة النُّور الجُزء(32ـ34)</h4>\n  <iframe height=\"230\" style=\"width: 434px;width: 97%;border-radius: 10px;\" src=\"https://www.youtube.com/embed/JLYz3c-sQgQ\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n   <h4 class=\"soura\" style=\"float: right;margin: 14px;\">سُورَة النُّور الجُزء(35ـ37)</h4>\n   <iframe height=\"230\" style=\"width: 434px;width: 97%;border-radius: 10px;\" src=\"https://www.youtube.com/embed/yhvsfFixFsg\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n</ion-content>\n");

/***/ }),

/***/ 6323:
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/quran/quran.component.html ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header style=\" background-image: linear-gradient(to right, #ffeecc , #adebeb);\">\n  <ion-toolbar style=\"text-align: center;\">\n    <ion-buttons slot=\"start\">\n        <ion-back-button text=\"\" style=\"margin-top: 1vh;\"></ion-back-button>\n    </ion-buttons>\n    <h3 style=\"color:#E39A33;font-size: 30px;\">قرآن</h3>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n<div id=\"container\">\n<div class=\"row\">\n  <div class=\"col-md-12\"><ion-button style=\"width: 55vh;height: 9vh;font-size: 27px;font-weight: 700;\" color=\"success\" (click)=\"nour()\">سُورَة النُّور</ion-button></div>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-12\"><ion-button style=\"width: 55vh;height: 9vh;font-size: 27px;font-weight: 700;\" color=\"success\" (click)=\"rahmen()\">سُورَة الرّحمَان</ion-button></div>\n</div>\n  <div class=\"col-md-12\"><ion-button style=\"width: 55vh;height: 9vh;font-size: 27px;font-weight: 700;\" color=\"success\" (click)=\"lokmen()\">سُورَة لُقمَان</ion-button></div>\n</div>\n</ion-content>\n");

/***/ }),

/***/ 7060:
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/quran/rahmen/rahmen.component.html ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar style=\"text-align: center;\">\n    <ion-buttons slot=\"start\">\n        <ion-back-button text=\"\" style=\"margin-top: 1vh;\"></ion-back-button>\n    </ion-buttons>\n    <h3 style=\"color: #E39A33;float: right;margin: 14px;\" [routerLink]=\"['/quran']\">  سُورَة الرّحمَان</h3>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <h4 class=\"soura\" style=\"float: right;margin: 14px;\">سُورَة الرّحمَان(1ـ10)</h4>\n  <iframe height=\"230\" style=\"width: 434px;width: 97%;border-radius: 10px;\" src=\"https://www.youtube.com/embed/1vSV1TMCFxg\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n  <h4 class=\"soura\" style=\"float: right;margin: 14px;\">سُورَة الرّحمَان(11ـ25)</h4>\n  <iframe height=\"230\" style=\"width: 434px;width: 97%;border-radius: 10px;\" src=\"https://www.youtube.com/embed/TYjju33rTDI\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n  <h4 class=\"soura\" style=\"float: right;margin: 14px;\">سُورَة الرّحمَان(26ـ43)</h4>\n  <iframe height=\"230\" style=\"width: 434px;width: 97%;border-radius: 10px;\" src=\"https://www.youtube.com/embed/CqiMZsFLPks\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n  <h4 class=\"soura\" style=\"float: right;margin: 14px;\">سُورَة الرّحمَان(44ـ59)</h4>\n  <iframe height=\"230\" style=\"width: 434px;width: 97%;border-radius: 10px;\" src=\"https://www.youtube.com/embed/TnzVCacErwU\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n  <h4 class=\"soura\" style=\"float: right;margin: 14px;\">سُورَة الرّحمَان(60ـ77)</h4>\n  <iframe height=\"230\" style=\"width: 434px;width: 97%;border-radius: 10px;\" src=\"https://www.youtube.com/embed/jSH57ntcdik\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n</ion-content>");

/***/ }),

/***/ 8458:
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sonna/sonna.component.html ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar style=\"text-align: center;\">\n    <ion-buttons slot=\"start\">\n        <ion-back-button text=\"\" style=\"margin-top: 1vh;\"></ion-back-button>\n    </ion-buttons>\n    <h3 style=\"color:#E39A33;float: right;margin: 14px;\">(من صحيح البخاري) أحاديث نبويّة</h3>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <h4 class=\"soura\" style=\"float: right;margin: 14px;\">الحديث 1</h4>\n  <iframe  height=\"230\" style=\"width: 434px;width: 97%;border-radius: 10px;\" src=\"https://www.youtube.com/embed/_ZOEeuSfLrY\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n  <h4 class=\"soura\" style=\"float: right;margin: 14px;\">الحديث 2</h4>\n  <iframe  height=\"230\" style=\"width: 434px;width: 97%;border-radius: 10px;\" src=\"https://www.youtube.com/embed/0oBXsnc3sHU\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n  <h4 class=\"soura\" style=\"float: right;margin: 14px;\">الحديث 3</h4>\n  <iframe width=\"790\" height=\"365\" src=\"https://www.youtube.com/embed/GVIYafsRoRw\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n  <h4 class=\"soura\" style=\"float: right;margin: 14px;\">الحديث 4</h4>\n  <iframe  height=\"230\" style=\"width: 434px;width: 97%;border-radius: 10px;\" src=\"https://www.youtube.com/embed/nMS0aFeuG9w\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n  <h4 class=\"soura\" style=\"float: right;margin: 14px;\">الحديث 5</h4>\n  <iframe height=\"230\" style=\"width: 434px;width: 97%;border-radius: 10px;\"src=\"https://www.youtube.com/embed/_jz7ly_CFUs\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n  <h4 class=\"soura\" style=\"float: right;margin: 14px;\">الحديث 6</h4>\n  <iframe  height=\"230\" style=\"width: 434px;width: 97%;border-radius: 10px;\"src=\"https://www.youtube.com/embed/JwrOmETxVOE\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n  <h4 class=\"soura\" style=\"float: right;margin: 14px;\">الحديث 7</h4>\n  <iframe  height=\"230\" style=\"width: 434px;width: 97%;border-radius: 10px;\" src=\"https://www.youtube.com/embed/tJPBVa2OBzs\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n  <h4 class=\"soura\" style=\"float: right;margin: 14px;\">الحديث 8</h4>\n  <iframe  height=\"230\" style=\"width: 434px;width: 97%;border-radius: 10px;\" src=\"https://www.youtube.com/embed/7oUZMPFISpM\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n  <h4 class=\"soura\" style=\"float: right;margin: 14px;\">الحديث 9</h4>\n  <iframe  height=\"230\" style=\"width: 434px;width: 97%;border-radius: 10px;\" src=\"https://www.youtube.com/embed/TreAC9YgxjY\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n  <h4 class=\"soura\" style=\"float: right;margin: 14px;\">الحديث 10</h4>\n  <iframe  height=\"230\" style=\"width: 434px;width: 97%;border-radius: 10px;\" src=\"https://www.youtube.com/embed/HdVb7pgvq70\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n  <h4 class=\"soura\" style=\"float: right;margin: 14px;\">الحديث 11</h4>\n  <iframe  height=\"230\" style=\"width: 434px;width: 97%;border-radius: 10px;\" src=\"https://www.youtube.com/embed/93dHEHHveLo\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n  <h4 class=\"soura\" style=\"float: right;margin: 14px;\">الحديث 12</h4>\n  <iframe  height=\"230\" style=\"width: 434px;width: 97%;border-radius: 10px;\" src=\"https://www.youtube.com/embed/ZnYtdg_b1pY\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n  <h4 class=\"soura\" style=\"float: right;margin: 14px;\">الحديث 13</h4>\n  <iframe  height=\"230\" style=\"width: 434px;width: 97%;border-radius: 10px;\" src=\"https://www.youtube.com/embed/Jlp1PaLrfz4\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n  <h4 class=\"soura\" style=\"float: right;margin: 14px;\">الحديث 14</h4>\n  <iframe  height=\"230\" style=\"width: 434px;width: 97%;border-radius: 10px;\" src=\"https://www.youtube.com/embed/8kR2w4n8pMM\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n  <h4 class=\"soura\" style=\"float: right;margin: 14px;\">الحديث 15</h4>\n  <iframe  height=\"230\" style=\"width: 434px;width: 97%;border-radius: 10px;\" src=\"https://www.youtube.com/embed/MByOoPsR2NM\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n  <h4 class=\"soura\" style=\"float: right;margin: 14px;\">الحديث 16</h4>\n  <iframe  height=\"230\" style=\"width: 434px;width: 97%;border-radius: 10px;\" src=\"https://www.youtube.com/embed/ePtguBcWxeg\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n  <h4 class=\"soura\" style=\"float: right;margin: 14px;\">الحديث 17</h4>\n  <iframe  height=\"230\" style=\"width: 434px;width: 97%;border-radius: 10px;\" src=\"https://www.youtube.com/embed/L23DbA_NQgI\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n  <h4 class=\"soura\" style=\"float: right;margin: 14px;\">الحديث 18</h4>\n  <iframe  height=\"230\" style=\"width: 434px;width: 97%;border-radius: 10px;\" src=\"https://www.youtube.com/embed/csQFze3biOU\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n\n</ion-content>\n");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map