(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-waitphone-waitphone-module"],{

/***/ "dGd+":
/*!*********************************************************************!*\
  !*** ./src/app/modules/auth/pages/waitphone/waitphone.component.ts ***!
  \*********************************************************************/
/*! exports provided: WaitPhoneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WaitPhoneComponent", function() { return WaitPhoneComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "/JoM");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_modules_main_services_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modules/main/services/notification.service */ "lvt7");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "Q2Ze");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "e6WT");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");











function WaitPhoneComponent_mat_error_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Este campo es obligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class WaitPhoneComponent {
    constructor(authService, router, formB, notiSvc) {
        this.authService = authService;
        this.router = router;
        this.formB = formB;
        this.notiSvc = notiSvc;
        this.hide = true;
        this.buildForm();
    }
    ngOnInit() {
    }
    logIn() {
        /*if(this.logInForm.invalid){
          this.notiSvc.openSnackBar("Favor de introducir los datos correctamente", 2000)
          return ;
        }
        this.setAuthData()
        this.authService.onLogIn(this.userData).subscribe( () => {
            console.log("pog")
            this.router.navigate(['panel/empresas']);
          }, error => {
            console.log(error);
            this.notiSvc.openSnackBar("Credenciales Incorrectas", 2000)
          });*/
    }
    register() {
        this.router.navigate(['auth/login']);
    }
    buildForm() {
        this.logInForm = this.formB.group({
            code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    setAuthData() {
        var _a, _b;
        this.userData = {
            email: (_a = this.logInForm.get('email')) === null || _a === void 0 ? void 0 : _a.value,
            password: (_b = this.logInForm.get('password')) === null || _b === void 0 ? void 0 : _b.value
        };
    }
}
WaitPhoneComponent.ɵfac = function WaitPhoneComponent_Factory(t) { return new (t || WaitPhoneComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_modules_main_services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"])); };
WaitPhoneComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WaitPhoneComponent, selectors: [["app-login"]], decls: 18, vars: 2, consts: [[1, "footer"], [1, "container", "mat-elevation-z8"], ["autocomplete", "off", 3, "formGroup"], [1, "form-container"], [1, "imagen"], [1, "mat-title", 2, "text-align", "center"], ["appearance", "outline", "color", "accent"], ["matInput", "", "placeholder", "", "formControlName", "code", "required", ""], [4, "ngIf"], ["mat-raised-button", "", "color", "primary", "type", "submit", 3, "click"], [1, "paddingTop"]], template: function WaitPhoneComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Permita el accesso desde su telefono ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Codigo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, WaitPhoneComponent_mat_error_12_Template, 2, 0, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WaitPhoneComponent_Template_button_click_15_listener() { return ctx.logIn(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Verificar Codigo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.logInForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.logInForm.controls["code"].invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatError"]], styles: [".mat-form-field[_ngcontent-%COMP%] {\n  display: inline;\n  margin-bottom: 3em;\n  padding-top: 10px;\n  flex-direction: column;\n  align-items: flex-start;\n}\n\n.mat-raised-button[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 40px;\n  font-size: large;\n}\n\n.form-container[_ngcontent-%COMP%] {\n  width: 95%;\n  max-width: 350px;\n}\n\n.paddingTop[_ngcontent-%COMP%] {\n  margin: 20px;\n}\n\n.container[_ngcontent-%COMP%] {\n  background-color: white;\n  margin-top: 4em;\n  margin-left: auto;\n  margin-right: auto;\n  height: 30em;\n  width: 75%;\n  max-width: 400px;\n  display: flex;\n  justify-content: center;\n}\n\n  .mat-form-field.mat-focused .mat-form-field-label {\n  opacity: 1 !important;\n}\n\n  .mat-form-field-appearance-outline .mat-form-field-outline {\n  opacity: 1 !important;\n}\n\n  .mat-focused .mat-form-field-underline .mat-form-field-ripple {\n  background-color: white !important;\n}\n\n  .mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid .mat-form-field-outline-thick {\n  opacity: 0.8 !important;\n}\n\n  .mat-form-field-label {\n  opacity: 0.6 !important;\n}\n\n.imagen[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.mat-title[_ngcontent-%COMP%] {\n  font-size: 2em;\n  margin-top: 0.5em;\n  margin-bottom: 1em;\n}\n\np[_ngcontent-%COMP%] {\n  margin-top: 1.5em;\n  text-align: center;\n  color: white;\n}\n\n.box[_ngcontent-%COMP%] {\n  height: 50vh;\n  margin: 0px;\n  padding: 0px;\n  background-color: #068e8e;\n}\n\n.footer[_ngcontent-%COMP%] {\n  position: fixed;\n  right: 0px;\n  top: 0px;\n  height: 50vh;\n  width: 100%;\n  background: #068e8e;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHdhaXRwaG9uZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7QUFDRjs7QUFDQTtFQUNFLHFCQUFBO0FBRUY7O0FBT0E7RUFDRSxrQ0FBQTtBQUpGOztBQU1BO0VBQ0ksdUJBQUE7QUFISjs7QUFNQTtFQUNFLHVCQUFBO0FBSEY7O0FBTUE7RUFDRSxrQkFBQTtBQUhGOztBQU1BO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFIRjs7QUFNQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBSEY7O0FBTUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQUhGOztBQU1BO0VBQ0UsZUFBQTtFQUNDLFVBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQUhIIiwiZmlsZSI6IndhaXRwaG9uZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtZm9ybS1maWVsZCB7XHJcbiAgZGlzcGxheTogaW5saW5lO1xyXG4gIG1hcmdpbi1ib3R0b206IDNlbTtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG59XHJcblxyXG4ubWF0LXJhaXNlZC1idXR0b24ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNDBweDtcclxuICBmb250LXNpemU6IGxhcmdlO1xyXG59XHJcblxyXG4uZm9ybS1jb250YWluZXIge1xyXG4gIHdpZHRoOiA5NSU7XHJcbiAgbWF4LXdpZHRoOiAzNTBweDtcclxufVxyXG5cclxuLnBhZGRpbmdUb3B7XHJcbiAgbWFyZ2luOiAyMHB4O1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW4tdG9wOiA0ZW07XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIGhlaWdodDogMzBlbTtcclxuICB3aWR0aDogNzUlO1xyXG4gIG1heC13aWR0aDogNDAwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xyXG4gIG9wYWNpdHk6IDEhaW1wb3J0YW50O1xyXG59XHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lIHtcclxuICBvcGFjaXR5OiAxIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2sge1xyXG59XHJcblxyXG46Om5nLWRlZXAgaW5wdXQubWF0LWlucHV0LWVsZW1lbnQge1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDt9XHJcblxyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9ybS1maWVsZC1pbnZhbGlkLm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2t7XHJcbiAgICBvcGFjaXR5OiAwLjghaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcclxuICBvcGFjaXR5OiAwLjYhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaW1hZ2Vue1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm1hdC10aXRsZXtcclxuICBmb250LXNpemU6IDJlbTtcclxuICBtYXJnaW4tdG9wOiAwLjVlbTtcclxuICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbn1cclxuXHJcbnB7XHJcbiAgbWFyZ2luLXRvcDogMS41ZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmJveHtcclxuICBoZWlnaHQ6IDUwdmg7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwNjhlOGU7XHJcbn1cclxuXHJcbi5mb290ZXIge1xyXG4gIHBvc2l0aW9uOmZpeGVkO1xyXG4gICByaWdodDowcHg7XHJcbiAgIHRvcDowcHg7XHJcbiAgIGhlaWdodDo1MHZoO1xyXG4gICB3aWR0aDoxMDAlO1xyXG4gICBiYWNrZ3JvdW5kOiMwNjhlOGU7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WaitPhoneComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './waitphone.component.html',
                styleUrls: ['./waitphone.component.scss']
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_modules_main_services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"] }]; }, null); })();


/***/ }),

/***/ "mJJP":
/*!**************************************************************************!*\
  !*** ./src/app/modules/auth/pages/waitphone/waitphone-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: WaitPhoneRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WaitPhoneRoutingModule", function() { return WaitPhoneRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _waitphone_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./waitphone.component */ "dGd+");





const routes = [{ path: '', component: _waitphone_component__WEBPACK_IMPORTED_MODULE_2__["WaitPhoneComponent"] }];
class WaitPhoneRoutingModule {
}
WaitPhoneRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: WaitPhoneRoutingModule });
WaitPhoneRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function WaitPhoneRoutingModule_Factory(t) { return new (t || WaitPhoneRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](WaitPhoneRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WaitPhoneRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "s+pv":
/*!******************************************************************!*\
  !*** ./src/app/modules/auth/pages/waitphone/waitphone.module.ts ***!
  \******************************************************************/
/*! exports provided: WaitPhoneModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WaitPhoneModule", function() { return WaitPhoneModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _waitphone_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./waitphone-routing.module */ "mJJP");
/* harmony import */ var _waitphone_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./waitphone.component */ "dGd+");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var src_app_shared_modules_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/modules/material.module */ "NA4g");







class WaitPhoneModule {
}
WaitPhoneModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: WaitPhoneModule });
WaitPhoneModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function WaitPhoneModule_Factory(t) { return new (t || WaitPhoneModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _waitphone_routing_module__WEBPACK_IMPORTED_MODULE_2__["WaitPhoneRoutingModule"],
            src_app_shared_modules_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](WaitPhoneModule, { declarations: [_waitphone_component__WEBPACK_IMPORTED_MODULE_3__["WaitPhoneComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _waitphone_routing_module__WEBPACK_IMPORTED_MODULE_2__["WaitPhoneRoutingModule"],
        src_app_shared_modules_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WaitPhoneModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_waitphone_component__WEBPACK_IMPORTED_MODULE_3__["WaitPhoneComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _waitphone_routing_module__WEBPACK_IMPORTED_MODULE_2__["WaitPhoneRoutingModule"],
                    src_app_shared_modules_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-waitphone-waitphone-module.js.map