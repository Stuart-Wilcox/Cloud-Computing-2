(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _view_vm_view_vm_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view-vm/view-vm.component */ "./src/app/view-vm/view-vm.component.ts");
/* harmony import */ var _create_vm_create_vm_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create-vm/create-vm.component */ "./src/app/create-vm/create-vm.component.ts");
/* harmony import */ var _start_vm_start_vm_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./start-vm/start-vm.component */ "./src/app/start-vm/start-vm.component.ts");
/* harmony import */ var _stop_vm_stop_vm_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./stop-vm/stop-vm.component */ "./src/app/stop-vm/stop-vm.component.ts");
/* harmony import */ var _usage_usage_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./usage/usage.component */ "./src/app/usage/usage.component.ts");
/* harmony import */ var _charges_charges_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./charges/charges.component */ "./src/app/charges/charges.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");













var routes = [
    {
        path: '',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
    },
    {
        path: 'register',
        component: _register_register_component__WEBPACK_IMPORTED_MODULE_11__["RegisterComponent"],
    },
    {
        path: 'dashboard',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"],
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_12__["AuthGuardService"]],
    },
    {
        path: 'view-vm/:id',
        component: _view_vm_view_vm_component__WEBPACK_IMPORTED_MODULE_5__["ViewVmComponent"],
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_12__["AuthGuardService"]],
    },
    {
        path: 'create-vm',
        component: _create_vm_create_vm_component__WEBPACK_IMPORTED_MODULE_6__["CreateVmComponent"],
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_12__["AuthGuardService"]],
    },
    {
        path: 'start-vm/:id',
        component: _start_vm_start_vm_component__WEBPACK_IMPORTED_MODULE_7__["StartVmComponent"],
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_12__["AuthGuardService"]],
    },
    {
        path: 'stop-vm/:id',
        component: _stop_vm_stop_vm_component__WEBPACK_IMPORTED_MODULE_8__["StopVmComponent"],
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_12__["AuthGuardService"]],
    },
    {
        path: 'usage/:id',
        component: _usage_usage_component__WEBPACK_IMPORTED_MODULE_9__["UsageComponent"],
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_12__["AuthGuardService"]],
    },
    {
        path: 'charges',
        component: _charges_charges_component__WEBPACK_IMPORTED_MODULE_10__["ChargesComponent"],
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_12__["AuthGuardService"]],
    },
    {
        /* MAKE SURE THIS ONE IS LAST IN THE LIST */
        path: '**',
        redirectTo: '',
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <button mat-button>Basic</button>\n<button mat-button color=\"primary\">Primary</button>\n\n<button mat-raised-button>Basic</button>\n<button mat-raised-button color=\"primary\">Primary</button>\n\n<br><br>\n\n<form>\n  <mat-form-field style='display:block;'>\n    <input matInput placeholder=\"Favorite food\" value=\"Sushi\">\n  </mat-form-field>\n\n  <mat-form-field style='display:block;'>\n    <textarea matInput placeholder=\"Leave a comment\"></textarea>\n  </mat-form-field>\n</form> -->\n\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _create_vm_create_vm_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./create-vm/create-vm.component */ "./src/app/create-vm/create-vm.component.ts");
/* harmony import */ var _start_vm_start_vm_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./start-vm/start-vm.component */ "./src/app/start-vm/start-vm.component.ts");
/* harmony import */ var _stop_vm_stop_vm_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./stop-vm/stop-vm.component */ "./src/app/stop-vm/stop-vm.component.ts");
/* harmony import */ var _charges_charges_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./charges/charges.component */ "./src/app/charges/charges.component.ts");
/* harmony import */ var _usage_usage_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./usage/usage.component */ "./src/app/usage/usage.component.ts");
/* harmony import */ var _view_vm_view_vm_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./view-vm/view-vm.component */ "./src/app/view-vm/view-vm.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                _create_vm_create_vm_component__WEBPACK_IMPORTED_MODULE_10__["CreateVmComponent"],
                _start_vm_start_vm_component__WEBPACK_IMPORTED_MODULE_11__["StartVmComponent"],
                _stop_vm_stop_vm_component__WEBPACK_IMPORTED_MODULE_12__["StopVmComponent"],
                _charges_charges_component__WEBPACK_IMPORTED_MODULE_13__["ChargesComponent"],
                _usage_usage_component__WEBPACK_IMPORTED_MODULE_14__["UsageComponent"],
                _view_vm_view_vm_component__WEBPACK_IMPORTED_MODULE_15__["ViewVmComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_16__["RegisterComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_17__["NavbarComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/charges/charges.component.css":
/*!***********************************************!*\
  !*** ./src/app/charges/charges.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJnZXMvY2hhcmdlcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/charges/charges.component.html":
/*!************************************************!*\
  !*** ./src/app/charges/charges.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section *ngIf=\"loading\">\n  <mat-spinner></mat-spinner>\n</section>\n<section *ngIf=\"!loading\"> \n\t<p> Charges </p>\n</section>"

/***/ }),

/***/ "./src/app/charges/charges.component.ts":
/*!**********************************************!*\
  !*** ./src/app/charges/charges.component.ts ***!
  \**********************************************/
/*! exports provided: ChargesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChargesComponent", function() { return ChargesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ChargesComponent = /** @class */ (function () {
    function ChargesComponent() {
    }
    ChargesComponent.prototype.ngOnInit = function () {
    };
    ChargesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-charges',
            template: __webpack_require__(/*! ./charges.component.html */ "./src/app/charges/charges.component.html"),
            styles: [__webpack_require__(/*! ./charges.component.css */ "./src/app/charges/charges.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ChargesComponent);
    return ChargesComponent;
}());



/***/ }),

/***/ "./src/app/create-vm/create-vm.component.css":
/*!***************************************************!*\
  !*** ./src/app/create-vm/create-vm.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".optionList {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n}\n\n.container{\n  padding: 20px;\n}\n\n.optionListItem {\n  display: inline-block;\n  height: inherit !important;\n  align-items: center;\n  margin-bottom: 10px;\n}\n\n.optionCard:hover {\n  box-shadow: 0px 0px 10px #000;\n}\n\n.example-radio-group {\n  display: inline-flex;\n  flex-direction: column;\n}\n\n.example-radio-button {\n  margin: 5px;\n}\n\n.example-selected-value {\n  margin: 15px 0;\n}\n\n.example-card {\n  margin-top: 20px;\n  max-width: 400px;\n}\n\n.example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.btn-width{\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JlYXRlLXZtL2NyZWF0ZS12bS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiwyQkFBMkI7RUFDM0IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLDBCQUEwQjtFQUMxQixtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2NyZWF0ZS12bS9jcmVhdGUtdm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vcHRpb25MaXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY29udGFpbmVye1xuICBwYWRkaW5nOiAyMHB4O1xufVxuLm9wdGlvbkxpc3RJdGVtIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IGluaGVyaXQgIWltcG9ydGFudDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLm9wdGlvbkNhcmQ6aG92ZXIge1xuICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggIzAwMDtcbn1cblxuLmV4YW1wbGUtcmFkaW8tZ3JvdXAge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmV4YW1wbGUtcmFkaW8tYnV0dG9uIHtcbiAgbWFyZ2luOiA1cHg7XG59XG5cbi5leGFtcGxlLXNlbGVjdGVkLXZhbHVlIHtcbiAgbWFyZ2luOiAxNXB4IDA7XG59XG5cbi5leGFtcGxlLWNhcmQge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXgtd2lkdGg6IDQwMHB4O1xufVxuXG4uZXhhbXBsZS1mb3JtIHtcbiAgbWluLXdpZHRoOiAxNTBweDtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5leGFtcGxlLWZ1bGwtd2lkdGgge1xuICBtaW4td2lkdGg6IDE1MHB4O1xuICBtYXgtd2lkdGg6IDUwMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmJ0bi13aWR0aHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/create-vm/create-vm.component.html":
/*!****************************************************!*\
  !*** ./src/app/create-vm/create-vm.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section *ngIf=\"loading\">\n  <mat-spinner></mat-spinner>\n</section>\n<section class = \"container\">\n  <!-- Display \"this.vms\" options here, get a name and type to create new vm for the user -->\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"VM Name\" [(ngModel)]=\"name\">\n  </mat-form-field>\n  <p>Select VM Type: </p>\n  <mat-radio-group class=\"example-radio-group\" [(ngModel)]=\"type\">\n    <mat-radio-button class=\"example-radio-button\" *ngFor=\"let vm of vms\" [value]=\"vm.type\">\n      {{vm.type}} | {{vm.processorCores}} processor cores | {{vm.virtualRam}} GB virtual RAM |\n       {{vm.storageSpace}} GB storage space | {{vm.price}} cents/minute\n    </mat-radio-button>\n  </mat-radio-group>\n  <mat-card class=\"example-card\">\n    <mat-card-title>VM Name: {{name}}</mat-card-title>\n    <mat-card-title>VM Type: {{type}}</mat-card-title>\n  </mat-card>\n  <button mat-raised-button color=\"primary\" class=\"btn-width\" (click)=\"createVM()\">Create VM</button>\n</section>\n"

/***/ }),

/***/ "./src/app/create-vm/create-vm.component.ts":
/*!**************************************************!*\
  !*** ./src/app/create-vm/create-vm.component.ts ***!
  \**************************************************/
/*! exports provided: CreateVmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateVmComponent", function() { return CreateVmComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_vm_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/vm.service */ "./src/app/services/vm.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var CreateVmComponent = /** @class */ (function () {
    function CreateVmComponent(router, vmService, snackBar) {
        this.router = router;
        this.vmService = vmService;
        this.snackBar = snackBar;
        this.vms = [];
        this.error = null;
    }
    CreateVmComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this.vmService.getOfferings().then(function (vms) {
            _this.loading = false;
            _this.vms = vms;
        });
    };
    CreateVmComponent.prototype.createVM = function () {
        var _this = this;
        if (this.name && this.type) {
            this.loading = true;
            this.vmService.createVM(this.name, this.type).then(function (vm) {
                _this.loading = false;
                _this.snackBar.open("VM Created Successfully.", '', { duration: 1000 });
                _this.name = null;
                _this.type = null;
                _this.router.navigate(['/dashboard']);
            }).catch(function (err) {
                _this.loading = false;
                _this.snackBar.open("VM Creation Failed.", '', { duration: 1000 });
                _this.error = err;
            });
        }
        else {
            this.snackBar.open("Ensure all the fields are filled.", '', { duration: 1000 });
        }
    };
    CreateVmComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-vm',
            template: __webpack_require__(/*! ./create-vm.component.html */ "./src/app/create-vm/create-vm.component.html"),
            styles: [__webpack_require__(/*! ./create-vm.component.css */ "./src/app/create-vm/create-vm.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _services_vm_service__WEBPACK_IMPORTED_MODULE_3__["VMService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
    ], CreateVmComponent);
    return CreateVmComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hoverable:hover {\n  box-shadow: 0px 0px 10px #000;\n}\n\n.list {\n  display: flex;\n  flex-direction: column;\n}\n\n.listitem {\n  display: inline-block;\n  height: inherit !important;\n}\n\n.listitemcard {\n  margin-bottom: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaG92ZXJhYmxlOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4ICMwMDA7XG59XG5cbi5saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmxpc3RpdGVtIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IGluaGVyaXQgIWltcG9ydGFudDtcbn1cblxuLmxpc3RpdGVtY2FyZCB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<h1>\n  Dashboard\n</h1>\n\n<section *ngIf=\"loading\">\n  <mat-spinner></mat-spinner>\n</section>\n<section *ngIf=\"!loading\">\n  <h3>My VMs</h3>\n  <mat-list class=\"list\">\n    <mat-list-item class=\"listitem\">\n      <a [routerLink]=\"['/create-vm']\" style=\"text-decoration:none;\">\n      <mat-card class=\"hoverable listitemcard\">\n        <mat-card-header>\n          <mat-card-title>Create VM</mat-card-title>\n          <mat-icon>add_to_queue</mat-icon>\n        </mat-card-header>\n      </mat-card>\n      </a>\n    </mat-list-item>\n    <mat-list-item *ngFor=\"let vm of vms\" class=\"listitem\">\n      <a [routerLink]=\"['/view-vm', vm._id]\" style=\"text-decoration:none;\">\n      <mat-card class=\"hoverable listitemcard\">\n        <mat-card-header>\n          <mat-card-title>{{vm.name}}</mat-card-title>\n        </mat-card-header>\n        <mat-card-content>\n          <mat-list>\n            <mat-list-item>\n              <p>Processor Cores: {{vm.processorCores}}<p>\n            </mat-list-item>\n            <mat-list-item>\n              <p>Virtual RAM: {{vm.virtualRam}}GB<p>\n            </mat-list-item>\n            <mat-list-item>\n              <p>Storage Space: {{vm.storageSpace}}GB<p>\n            </mat-list-item>\n            <mat-list-item>\n              <p>Price: {{vm.price}} cents per minute<p>\n            </mat-list-item>\n          </mat-list>\n        </mat-card-content>\n      </mat-card>\n      </a>\n    </mat-list-item>\n  </mat-list>\n</section>\n\n<!-- <ul>\n  <li>\n    <a [routerLink]=\"['/create-vm']\">Create VM</a>\n  </li>\n  <li>\n    <a [routerLink]=\"['/delete-vm', '0']\">Delete VM</a>\n  </li>\n  <li>\n    <a [routerLink]=\"['/start-vm', '0']\">Start VM</a>\n  </li>\n  <li>\n    <a [routerLink]=\"['/stop-vm', '0']\">Stop VM</a>\n  </li>\n  <li>\n    <a [routerLink]=\"['/upgrade-vm', '0']\">Upgrade VM</a>\n  </li>\n  <li>\n    <a [routerLink]=\"['/downgrade-vm', '0']\">Downgrade VM</a>\n  </li>\n  <li>\n    <a [routerLink]=\"['/usage', '0']\">VM Usage</a>\n  </li>\n  <li>\n    <a [routerLink]=\"['/charges']\">Charges</a>\n  </li>\n</ul> -->\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_vm_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/vm.service */ "./src/app/services/vm.service.ts");



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(vmService) {
        this.vmService = vmService;
        this.vms = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this.vmService.getVMs().then(function (vms) {
            _this.vms = vms;
            _this.loading = false;
        });
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_vm_service__WEBPACK_IMPORTED_MODULE_2__["VMService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center{\n    text-align: center;\n}\nspan{\n    padding-left: 10px;\n}\n.maxWidth{\n    max-width: 400px;\n    margin-left: auto;\n    margin-right: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudGVye1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbnNwYW57XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuLm1heFdpZHRoe1xuICAgIG1heC13aWR0aDogNDAwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"center\">SE4455 Assignment 2: Resource Usage Agent Login Page</h1>\n\n<mat-card class=\"maxWidth\">\n  <mat-card-header class=\"center\">\n      <mat-card-title >Login</mat-card-title>\n      <mat-card-subtitle *ngIf=\"loginError\" style=\"background-color:#f44336;color:#fff;padding-left:10px;padding-right:10px;margin-top:10px;\">\n        Invalid username/password\n        <button mat-icon-button (click)=\"dismiss()\">\n          <mat-icon>close</mat-icon>\n        </button>\n      </mat-card-subtitle>\n  </mat-card-header>\n  <mat-card-content class=\"center\">\n    <form> \n      <table cellspacing=\"0\">\n        <tr>\n          <td>\n            <mat-form-field >\n              <input matInput autofocus placeholder=\"Username\" [(ngModel)]=\"username\" name=\"username\" (keyup.enter)=\"login()\" required>\n            </mat-form-field>\n          </td>\n        </tr>\n        <tr>\n          <td><mat-form-field>\n            <input matInput placeholder=\"Password\" [(ngModel)]=\"password\" type=\"password\" name=\"password\" (keyup.enter)=\"login()\" required>\n          </mat-form-field></td>\n        </tr></table>\n    </form>\n    <mat-spinner *ngIf=\"loading\"></mat-spinner>\n    </mat-card-content>\n    <mat-card-actions>\n      <button mat-raised-button (click)=\"login()\" color=\"primary\">Login</button>\n      <span></span>\n      <a [routerLink]=\"['/register']\"><button mat-raised-button color=\"primary\">Register</button></a>\n    </mat-card-actions>\n</mat-card>\n\n\n\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/auth.service */ "./src/app/services/auth.service.ts");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, authService) {
        this.router = router;
        this.authService = authService;
        this.username = null;
        this.password = null;
        this.loginError = false;
        this.loading = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.dismiss = function () {
        this.loginError = false;
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        // this.loading = true;
        this.authService
            .login(this.username, this.password)
            .then(function (result) {
            _this.loading = false;
            _this.router.navigate(['/dashboard']);
        }).catch(function (err) {
            _this.loading = false;
            _this.loginError = true;
            console.error(err);
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/material/material.module.ts":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");





var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTreeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"],
            ],
            exports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTreeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"],
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul {\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n    overflow: hidden;\n    background-color: #333;\n}\n\nli {\n    float: left;\n}\n\nli a {\n    display: block;\n    color: white;\n    text-align: center;\n    padding: 12px 14px;\n    text-decoration: none;\n}\n\n/* Change the link color to #111 (black) on hover */\n\nli a:hover {\n    background-color: #111;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kscUJBQXFCO0lBQ3JCLFNBQVM7SUFDVCxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixxQkFBcUI7QUFDekI7O0FBRUEsbURBQW1EOztBQUNuRDtJQUNJLHNCQUFzQjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInVsIHtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xufVxuXG5saSB7XG4gICAgZmxvYXQ6IGxlZnQ7XG59XG5cbmxpIGEge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTJweCAxNHB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLyogQ2hhbmdlIHRoZSBsaW5rIGNvbG9yIHRvICMxMTEgKGJsYWNrKSBvbiBob3ZlciAqL1xubGkgYTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzExMTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul>\n  <li><a [routerLink]=\"['/dashboard']\">Home</a></li>\n  <li><a [routerLink]=\"['/create-vm']\">Create VMs</a></li>\n\n  \n  <li style=\"float:right\"><a class=\"active\" (click)=\"onLogoutClick()\">logout</a></li>\n</ul>"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/auth.service */ "./src/app/services/auth.service.ts");




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        var _this = this;
        this.authService.logout().then(function () {
            _this.router.navigate(['/login']);
        });
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".maxWidth{\n    max-width: 400px;\n    margin-left: auto;\n    margin-right: auto;\n}\n.center{\n    text-align: center;\n}\nspan{\n    padding-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF4V2lkdGh7XG4gICAgbWF4LXdpZHRoOiA0MDBweDtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG4uY2VudGVye1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbnNwYW57XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"center\">SE4455 Assignment 2: Resource Usage Agent Register Page</h1>\n\n<mat-card class=\"maxWidth\">\n    <mat-card-header>\n        <mat-card-title>Register</mat-card-title>\n        <mat-card-subtitle *ngIf=\"loginError\" style=\"background-color:#f44336;color:#fff;padding-left:10px;padding-right:10px;margin-top:10px;\">\n            Invalid username/password\n            <button mat-icon-button (click)=\"dismiss()\">\n            <mat-icon>close</mat-icon>\n            </button>\n        </mat-card-subtitle>\n        </mat-card-header>\n        <mat-card-content>\n        <form>\n            <table cellspacing=\"0\">\n            <tr>\n                <td>\n                <mat-form-field>\n                <input matInput autofocus placeholder=\"Username\" [(ngModel)]=\"username\" name=\"username\" (keyup.enter)=\"login()\" required>\n                </mat-form-field>\n                </td>\n            </tr>\n            <tr>\n            <td><mat-form-field>\n                <input matInput placeholder=\"Password\" [(ngModel)]=\"password\" type=\"password\" name=\"password\" (keyup.enter)=\"login()\" required>\n            </mat-form-field></td>\n            </tr></table>\n        </form>\n        <mat-spinner *ngIf=\"loading\"></mat-spinner>\n        </mat-card-content>\n    <mat-card-actions>\n        <button mat-raised-button (click)=\"register()\" color=\"primary\">Register</button>\n        <span></span>\n        <a [routerLink]=\"['/']\"><button mat-raised-button color=\"primary\">Login</button></a>\n    </mat-card-actions>\n</mat-card>\n    \n      "

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/auth.service */ "./src/app/services/auth.service.ts");




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.err = '';
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        var user = {
            name: this.name,
            email: this.email,
            username: this.username,
            password: this.password
        };
        if (this.username === '' || this.password === '') {
            this.err = 'Please fill in all fields';
            return false;
        }
        // Register user
        this.authService.register(this.username, this.password).then(function (result) {
            _this.router.navigate(['/']);
        }).catch(function (err) {
            _this.err = 'Something went wrong';
        });
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/services/auth-guard.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/auth-guard.service.ts ***!
  \************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");




var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function () {
        if (!this.auth.isAuthenticated) {
            this.router.navigate(['']); // navigate to login
            return false;
        }
        return true;
    };
    AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var EXPIRY = 5 * (1000 * 60 * 60); // 5 hour expiry
var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.isAuthenticated = false;
        this.accessToken = null;
        var storedToken = window.sessionStorage.getItem('x-access-token');
        var storedTokenTimestamp = parseInt(window.sessionStorage.getItem('x-access-token-timestamp'));
        if (storedToken && storedTokenTimestamp && storedTokenTimestamp + EXPIRY > new Date().getTime()) {
            this.accessToken = storedToken;
            this.isAuthenticated = true;
        }
        if (storedTokenTimestamp + EXPIRY < new Date().getTime()) {
            // token expired
            window.sessionStorage.removeItem('x-access-token');
            window.sessionStorage.removeItem('x-access-token-timestamp');
        }
    }
    AuthService.prototype.logout = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.isAuthenticated = false;
                this.accessToken = null;
                window.sessionStorage.removeItem('x-access-token');
                window.sessionStorage.removeItem('x-access-token-timestamp');
                return [2 /*return*/];
            });
        });
    };
    AuthService.prototype.login = function (username, password) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, this.http
                        .post("/public-api/login", { username: username, password: password })
                        .toPromise()
                        .then(function (response) {
                        if (!response['token']) {
                            throw new Error('No token provided');
                        }
                        _this.isAuthenticated = true;
                        _this.accessToken = response['token'];
                        window.sessionStorage.setItem('x-access-token', _this.accessToken);
                        window.sessionStorage.setItem('x-access-token-timestamp', new Date().getTime().toString());
                        return true;
                    })];
            });
        });
    };
    AuthService.prototype.register = function (username, password) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.http
                    .post("/public-api/register", { username: username, password: password })
                    .toPromise()
                    .then(function (response) {
                    console.log(response);
                    return response;
                })
                    .catch(function (err) {
                    console.error(err);
                    throw err;
                });
                return [2 /*return*/];
            });
        });
    };
    AuthService.prototype.getHttpHeaders = function () {
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'x-access-token': this.accessToken,
        });
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/usage.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/usage.service.ts ***!
  \*******************************************/
/*! exports provided: UsageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsageService", function() { return UsageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/auth.service */ "./src/app/services/auth.service.ts");




var UsageService = /** @class */ (function () {
    function UsageService(http, auth) {
        this.http = http;
        this.auth = auth;
    }
    UsageService.prototype.getUsage = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, this
                        .http
                        .get("/api/vm/usage?id=" + id, { headers: this.auth.getHttpHeaders() })
                        .toPromise()];
            });
        });
    };
    UsageService.prototype.addEvent = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, this
                        .http
                        .post("/usage?id=" + event.vmId, event, { headers: this.auth.getHttpHeaders() })
                        .toPromise()];
            });
        });
    };
    UsageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], UsageService);
    return UsageService;
}());



/***/ }),

/***/ "./src/app/services/vm.service.ts":
/*!****************************************!*\
  !*** ./src/app/services/vm.service.ts ***!
  \****************************************/
/*! exports provided: VMService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VMService", function() { return VMService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/auth.service */ "./src/app/services/auth.service.ts");




var VMService = /** @class */ (function () {
    function VMService(http, auth) {
        this.http = http;
        this.auth = auth;
    }
    VMService.prototype.getOfferings = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, this
                        .http
                        .get('/api/vm/offerings', { headers: this.auth.getHttpHeaders() })
                        .toPromise()];
            });
        });
    };
    VMService.prototype.getVMs = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, this
                        .http
                        .get('/api/vm', { headers: this.auth.getHttpHeaders() })
                        .toPromise()];
            });
        });
    };
    VMService.prototype.getVM = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, this
                        .http
                        .get("/api/vm?id=" + id, { headers: this.auth.getHttpHeaders() })
                        .toPromise()];
            });
        });
    };
    VMService.prototype.createVM = function (name, type) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, this
                        .http
                        .post('/api/vm', { name: name, type: type }, { headers: this.auth.getHttpHeaders() })
                        .toPromise()];
            });
        });
    };
    VMService.prototype.deleteVM = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, this
                        .http
                        .delete("/api/vm?id=" + id, { headers: this.auth.getHttpHeaders() })
                        .toPromise()];
            });
        });
    };
    VMService.prototype.upgradeVM = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, this
                        .http
                        .post("/api/vm/upgrade?id=" + id, {}, { headers: this.auth.getHttpHeaders() })
                        .toPromise()];
            });
        });
    };
    VMService.prototype.downgradeVM = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, this
                        .http
                        .post("/api/vm/downgrade?id=" + id, {}, { headers: this.auth.getHttpHeaders() })
                        .toPromise()];
            });
        });
    };
    VMService.prototype.startVM = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, this
                        .http
                        .post("/api/vm/start?id=" + id, {}, { headers: this.auth.getHttpHeaders() })
                        .toPromise()];
            });
        });
    };
    VMService.prototype.stopVM = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, this
                        .http
                        .post("api/vm/stop?id=" + id, {}, { headers: this.auth.getHttpHeaders() })
                        .toPromise()];
            });
        });
    };
    VMService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], VMService);
    return VMService;
}());



/***/ }),

/***/ "./src/app/start-vm/start-vm.component.css":
/*!*************************************************!*\
  !*** ./src/app/start-vm/start-vm.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0YXJ0LXZtL3N0YXJ0LXZtLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/start-vm/start-vm.component.html":
/*!**************************************************!*\
  !*** ./src/app/start-vm/start-vm.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section *ngIf=\"loading\">\n  <mat-spinner></mat-spinner>\n</section>\n<section *ngIf=\"!loading\">\n  <p>\n    start-vm works!\n  </p>\n</section>\n"

/***/ }),

/***/ "./src/app/start-vm/start-vm.component.ts":
/*!************************************************!*\
  !*** ./src/app/start-vm/start-vm.component.ts ***!
  \************************************************/
/*! exports provided: StartVmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartVmComponent", function() { return StartVmComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_vm_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/vm.service */ "./src/app/services/vm.service.ts");




var StartVmComponent = /** @class */ (function () {
    function StartVmComponent(route, vmService) {
        this.route = route;
        this.vmService = vmService;
        this.id = '';
        this.vm = null;
        this.error = null;
    }
    StartVmComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this.route.params.subscribe(function (params) {
            _this.id = params['id'];
            _this.vmService.getVM(_this.id).then(function (vm) {
                _this.vm = vm;
                _this.loading = false;
            }).catch(function (err) {
                _this.loading = false;
                _this.error = err;
            });
        });
    };
    StartVmComponent.prototype.startVM = function () {
        var _this = this;
        this.loading = true;
        this.vmService.startVM(this.id).then(function () {
            _this.loading = false;
            // maybe redirect to url=`/view-vm/${this.id}`
        }).catch(function (err) {
            _this.loading = false;
            _this.error = err;
        });
    };
    StartVmComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-start-vm',
            template: __webpack_require__(/*! ./start-vm.component.html */ "./src/app/start-vm/start-vm.component.html"),
            styles: [__webpack_require__(/*! ./start-vm.component.css */ "./src/app/start-vm/start-vm.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_vm_service__WEBPACK_IMPORTED_MODULE_3__["VMService"]])
    ], StartVmComponent);
    return StartVmComponent;
}());



/***/ }),

/***/ "./src/app/stop-vm/stop-vm.component.css":
/*!***********************************************!*\
  !*** ./src/app/stop-vm/stop-vm.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0b3Atdm0vc3RvcC12bS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/stop-vm/stop-vm.component.html":
/*!************************************************!*\
  !*** ./src/app/stop-vm/stop-vm.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section *ngIf=\"loading\">\n  <mat-spinner></mat-spinner>\n</section>\n<section *ngIf=\"!loading\">\n  <p>\n    stop-vm works!\n  </p>\n</section>\n"

/***/ }),

/***/ "./src/app/stop-vm/stop-vm.component.ts":
/*!**********************************************!*\
  !*** ./src/app/stop-vm/stop-vm.component.ts ***!
  \**********************************************/
/*! exports provided: StopVmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StopVmComponent", function() { return StopVmComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_vm_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/vm.service */ "./src/app/services/vm.service.ts");




var StopVmComponent = /** @class */ (function () {
    function StopVmComponent(route, vmService) {
        this.route = route;
        this.vmService = vmService;
        this.id = '';
        this.vm = null;
        this.error = null;
    }
    StopVmComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this.route.params.subscribe(function (params) {
            _this.id = params['id'];
            _this.vmService.getVM(_this.id).then(function (vm) {
                _this.vm = vm;
                _this.loading = false;
            }).catch(function (err) {
                _this.loading = false;
                _this.error = err;
            });
        });
    };
    StopVmComponent.prototype.stopVM = function () {
        var _this = this;
        this.loading = true;
        this.vmService.stopVM(this.id).then(function () {
            _this.loading = false;
            // maybe redirect to url=`/view-vm/${this.id}`
        }).catch(function (err) {
            _this.loading = false;
            _this.error = err;
        });
    };
    StopVmComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-stop-vm',
            template: __webpack_require__(/*! ./stop-vm.component.html */ "./src/app/stop-vm/stop-vm.component.html"),
            styles: [__webpack_require__(/*! ./stop-vm.component.css */ "./src/app/stop-vm/stop-vm.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_vm_service__WEBPACK_IMPORTED_MODULE_3__["VMService"]])
    ], StopVmComponent);
    return StopVmComponent;
}());



/***/ }),

/***/ "./src/app/usage/usage.component.css":
/*!*******************************************!*\
  !*** ./src/app/usage/usage.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n\tjustify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNhZ2UvdXNhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLHVCQUF1QjtBQUN4QiIsImZpbGUiOiJzcmMvYXBwL3VzYWdlL3VzYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/usage/usage.component.html":
/*!********************************************!*\
  !*** ./src/app/usage/usage.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<section *ngIf=\"loading\">\n  <mat-spinner></mat-spinner>\n</section>\n<section *ngIf=\"!loading\" class=\"mainBody\">\n\t<mat-card *ngIf=\"vm\">\n\t\t<mat-card-header class = \"header\">\n\t      <mat-card-title><h1>Usage for {{vm.name}}</h1></mat-card-title> \n\t    </mat-card-header>\n\n\t    <mat-card-content>\n\t\t<mat-divider></mat-divider>\n\t\t\t\n\t\t\t\t<mat-card-subtitle><h2>Plan</h2></mat-card-subtitle> \n\t\t\t\t<mat-card-content>\n\t\t\t\t\t<mat-list>\n\t\t\t\t\t<mat-list-item>\t{{vm.processorCores}} Cores</mat-list-item>\n\t\t\t\t\t<mat-list-item>\t{{vm.virtualRam}} GB RAM</mat-list-item>\n\t\t\t\t\t<mat-list-item>\t{{vm.storageSpace}} GB Memory</mat-list-item>\n\t\t\t\t\t<mat-list-item>\t{{vm.price}} ¢/min</mat-list-item>\n\t\t\t\t</mat-list>\n\t\t\t\t</mat-card-content>\n\t\t\t\t<mat-divider></mat-divider>\n\t\t\t\t<mat-card-subtitle><h2>Total</h2></mat-card-subtitle>\n\t\t\t\t<mat-card-content *ngIf=\"usage\">\n\t\t\t\t\t<div>$ {{usage.cost}} </div>\n\t\t\t\t</mat-card-content>\n\n\t\t\t\n\t\t</mat-card-content>\n\t</mat-card>\n</section>\n"

/***/ }),

/***/ "./src/app/usage/usage.component.ts":
/*!******************************************!*\
  !*** ./src/app/usage/usage.component.ts ***!
  \******************************************/
/*! exports provided: UsageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsageComponent", function() { return UsageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_usage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/usage.service */ "./src/app/services/usage.service.ts");
/* harmony import */ var _services_vm_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/vm.service */ "./src/app/services/vm.service.ts");





var UsageComponent = /** @class */ (function () {
    function UsageComponent(route, usageService, vmService) {
        this.route = route;
        this.usageService = usageService;
        this.vmService = vmService;
        this.id = '';
        this.vm = null;
        this.usage = null;
        this.error = null;
    }
    UsageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this.route.params.subscribe(function (params) {
            _this.id = params['id'];
            _this.vmService.getVM(_this.id).then(function (vm) {
                _this.vm = vm;
                _this.loading = false;
            }).catch(function (err) {
                _this.loading = false;
                _this.error = err;
            });
            // Using vmService since UsageService doesnt seem to be implemented
            _this.usageService.getUsage(_this.id).then(function (usage) {
                _this.usage = usage;
                _this.loading = false;
            }).catch(function (err) {
                _this.loading = false;
                _this.error = err;
            });
        });
    };
    UsageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-usage',
            template: __webpack_require__(/*! ./usage.component.html */ "./src/app/usage/usage.component.html"),
            styles: [__webpack_require__(/*! ./usage.component.css */ "./src/app/usage/usage.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_usage_service__WEBPACK_IMPORTED_MODULE_3__["UsageService"], _services_vm_service__WEBPACK_IMPORTED_MODULE_4__["VMService"]])
    ], UsageComponent);
    return UsageComponent;
}());



/***/ }),

/***/ "./src/app/view-vm/view-vm.component.css":
/*!***********************************************!*\
  !*** ./src/app/view-vm/view-vm.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\n  margin-right: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy12bS92aWV3LXZtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC92aWV3LXZtL3ZpZXctdm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbiB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/view-vm/view-vm.component.html":
/*!************************************************!*\
  !*** ./src/app/view-vm/view-vm.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<section *ngIf=\"loading\">\n  <mat-spinner></mat-spinner>\n</section>\n<section *ngIf=\"!loading\">\n  <mat-card *ngIf=\"vm\">\n    <mat-card-header>\n      <mat-card-title>{{vm.name}}</mat-card-title>\n    </mat-card-header>\n    <mat-card-content>\n      <mat-list>\n        <mat-list-item>\n          <p>Processor Cores: {{vm.processorCores}}<p>\n        </mat-list-item>\n        <mat-list-item>\n          <p>Virtual RAM: {{vm.virtualRam}}GB<p>\n        </mat-list-item>\n        <mat-list-item>\n          <p>Storage Space: {{vm.storageSpace}}GB<p>\n        </mat-list-item>\n        <mat-list-item>\n          <p>Price: {{vm.price}} cents per minute<p>\n        </mat-list-item>\n      </mat-list>\n\n      <a>\n        <button mat-raised-button color=\"warn\" (click)=\"deleteVM()\">Delete</button>\n      </a>\n      <a>\n        <button *ngIf=\"vm.type != 'Ultra Large'\" mat-raised-button color=\"primary\" (click) = \"upgradeVM()\">Upgrade</button>\n      </a>\n      <button *ngIf=\"vm.type == 'Ultra Large'\" mat-raised-button color=\"primary\" disabled>Upgrade</button>\n      <a>\n        <button *ngIf=\"vm.type != 'Basic'\" mat-raised-button color=\"accent\" (click) = \"downgradeVM()\">Downgrade</button>\n      </a>\n      <button *ngIf=\"vm.type == 'Basic'\" mat-raised-button color=\"accent\" disabled>Downgrade</button>\n\n      <a>\n        <button *ngIf=\"vm.status!=true\" mat-stroked-button color=\"primary\" (click) = \"startVM()\">Start</button>\n      </a>\n      <button *ngIf=\"vm.status==true\" mat-stroked-button color=\"warn\" (click) =\"stopVM()\">Stop</button>\n\n      <a [routerLink]=\"['/usage', vm._id]\">\n        <button mat-raised-button>Usage</button>\n      </a>\n    </mat-card-content>\n  </mat-card>\n</section>\n"

/***/ }),

/***/ "./src/app/view-vm/view-vm.component.ts":
/*!**********************************************!*\
  !*** ./src/app/view-vm/view-vm.component.ts ***!
  \**********************************************/
/*! exports provided: ViewVmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewVmComponent", function() { return ViewVmComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_vm_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/vm.service */ "./src/app/services/vm.service.ts");






var ViewVmComponent = /** @class */ (function () {
    function ViewVmComponent(route, vmService, snackBar, router) {
        this.route = route;
        this.vmService = vmService;
        this.snackBar = snackBar;
        this.router = router;
        this.id = '';
        this.vm = null;
    }
    ViewVmComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this.route.params.subscribe(function (params) {
            _this.id = params['id'];
            _this.vmService.getVM(_this.id).then(function (vm) {
                _this.vm = vm;
                _this.loading = false;
            });
        });
    };
    ViewVmComponent.prototype.deleteVM = function () {
        var _this = this;
        this.vmService.deleteVM(this.id).then(function (res) {
            _this.snackBar.open("VM Deleted Successfully.", '', { duration: 1000 });
            _this.router.navigate(['/dashboard']);
        }).catch(function (err) {
            _this.snackBar.open("Error. VM Deletion Failed.", '', { duration: 1000 });
        });
    };
    ViewVmComponent.prototype.upgradeVM = function () {
        var _this = this;
        this.vmService.upgradeVM(this.id).then(function (vm) {
            _this.snackBar.open("VM Upgraded Successfully.", '', { duration: 1000 });
            _this.vm = vm;
        }).catch(function (err) {
            _this.snackBar.open("Error. VM Upgrade Failed.", '', { duration: 1000 });
        });
    };
    ViewVmComponent.prototype.downgradeVM = function () {
        var _this = this;
        this.vmService.downgradeVM(this.id).then(function (vm) {
            _this.snackBar.open("VM Downgraded Successfully.", '', { duration: 1000 });
            _this.vm = vm;
        }).catch(function (err) {
            _this.snackBar.open("Error. VM Downgrade Failed.", '', { duration: 1000 });
        });
    };
    ViewVmComponent.prototype.startVM = function () {
        var _this = this;
        this.vmService.startVM(this.id).then(function (vm) {
            _this.snackBar.open("VM started Successfully.", '', { duration: 1000 });
            _this.vm = vm;
        }).catch(function (err) {
            _this.snackBar.open("Error. VM start Failed.", '', { duration: 1000 });
        });
    };
    ViewVmComponent.prototype.stopVM = function () {
        var _this = this;
        this.vmService.stopVM(this.id).then(function (vm) {
            _this.snackBar.open("VM stopped Successfully.", '', { duration: 1000 });
            _this.vm = vm;
        }).catch(function (err) {
            _this.snackBar.open("Error. VM stop Failed.", '', { duration: 1000 });
        });
    };
    ViewVmComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view-vm',
            template: __webpack_require__(/*! ./view-vm.component.html */ "./src/app/view-vm/view-vm.component.html"),
            styles: [__webpack_require__(/*! ./view-vm.component.css */ "./src/app/view-vm/view-vm.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_vm_service__WEBPACK_IMPORTED_MODULE_4__["VMService"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ViewVmComponent);
    return ViewVmComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/stuart/Documents/Cloud Computing/SE4455-assignment-2/application/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map