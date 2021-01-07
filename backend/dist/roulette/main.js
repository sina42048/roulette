(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/8S7":
/*!****************************************************!*\
  !*** ./src/app/panel/support/support.component.ts ***!
  \****************************************************/
/*! exports provided: SupportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportComponent", function() { return SupportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/auth/auth.service */ "qXBG");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");








function SupportComponent_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " title is required ! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SupportComponent_span_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " description is required ! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SupportComponent_span_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " description should be at least 6 character ! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class SupportComponent {
    constructor(auth, toastr, router) {
        this.auth = auth;
        this.toastr = toastr;
        this.router = router;
        this.loading = false;
    }
    ngOnInit() {
        this.loading$ = this.auth.loading$.subscribe((isLoading) => {
            this.loading = isLoading;
        });
        this.supportForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'title': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            'description': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)])
        });
    }
    onSubmit() {
        const { title, description } = this.supportForm.value;
        this.auth.support(title, description).subscribe((response) => {
            this.toastr.success('we will contact you via email soon !', 'Ticket Sent !', {
                positionClass: 'toast-bottom-right',
            });
            this.router.navigate(['panel']);
        });
    }
}
SupportComponent.ɵfac = function SupportComponent_Factory(t) { return new (t || SupportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
SupportComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SupportComponent, selectors: [["app-support"]], decls: 21, vars: 5, consts: [[1, "bg-image"], [1, "container"], [3, "formGroup", "ngSubmit"], [1, "supportticket-container"], [1, "form-control"], ["for", "title", 1, "form-control-title"], ["formControlName", "title", "placeholder", "enter title", "type", "text", "name", "title", 1, "form-control-input"], ["class", "help-block", 4, "ngIf"], ["for", "description", 1, "form-control-title"], ["name", "description", "id", "description", "cols", "30", "rows", "10", "placeholder", "description", "formControlName", "description", 1, "form-control-textarea"], [3, "disabled"], [1, "help-block"]], template: function SupportComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Support Ticket");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "We are ready to respond at any time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SupportComponent_Template_form_ngSubmit_6_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, SupportComponent_span_12_Template, 2, 0, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "textarea", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, SupportComponent_span_17_Template, 2, 0, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, SupportComponent_span_18_Template, 2, 0, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Send Ticket");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.supportForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.supportForm.get("title").invalid && ctx.supportForm.get("title").touched && ctx.supportForm.get("title").errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.supportForm.get("description").invalid && ctx.supportForm.get("description").touched && ctx.supportForm.get("description").errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.supportForm.get("description").invalid && ctx.supportForm.get("description").touched && ctx.supportForm.get("description").errors.minlength);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.supportForm.valid || ctx.loading);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: ["h1[_ngcontent-%COMP%] {\r\n    font-size: 5rem;\r\n    text-transform: uppercase;\r\n    font-weight: bolder;\r\n    background: -webkit-linear-gradient(rgb(124, 14, 14), rgb(80, 6, 6));\r\n    background-clip: text;\r\n    -webkit-background-clip: text;\r\n    -webkit-text-fill-color: transparent;\r\n    margin-top: 90px;\r\n}\r\n\r\nh3[_ngcontent-%COMP%] {\r\n    color: wheat;\r\n    margin-top: 0;\r\n    text-transform: uppercase;\r\n}\r\n\r\nh3[_ngcontent-%COMP%]::after {\r\n    content: ' \uD83D\uDE0E'\r\n}\r\n\r\n.bg-image[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    height: 100vh;\r\n    width: 100vw;\r\n    background-image: url('roulette.jpg');\r\n    background-repeat: no-repeat, repeat;\r\n    background-position: center;\r\n    background-size: cover;\r\n    filter: grayscale(30%);\r\n    z-index: 1;\r\n    transition: filter 1s;\r\n}\r\n\r\n.bg-image[_ngcontent-%COMP%]::after {\r\n    content: '';\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    background-color: rgba(0, 0, 0, 0.8);\r\n    width: 100vw;\r\n    height: 100vh;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    width: 100%;\r\n}\r\n\r\n.container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    z-index: 2;\r\n}\r\n\r\n.supportticket-container[_ngcontent-%COMP%] {\r\n    border-top: 1px solid #e56332;\r\n    padding: 120px;\r\n    background-color: rgba(0, 0, 0, .4);\r\n    border-radius: 100px;\r\n    display: flex;\r\n    margin: 0 auto;\r\n    flex-direction: column ;\r\n    justify-content: space-around;\r\n    flex-wrap: wrap;\r\n    width: 1150px;\r\n    margin-bottom: 20px;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n    background: -webkit-linear-gradient(rgb(124, 14, 14), rgb(80, 6, 6));\r\n    width: 100%;\r\n    height: 5rem;\r\n    background-color: #940a0a;\r\n    border: none;\r\n    border-radius: 25px;\r\n    color: white;\r\n    font-size: 2rem;\r\n    font-style: italic;\r\n    cursor: pointer;\r\n    font-weight: bold;\r\n    text-transform: uppercase;\r\n    opacity: .7;\r\n    margin-top: 20px;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:last-child {\r\n    background: -webkit-linear-gradient(rgb(124, 14, 14), rgb(250, 105, 8));\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:hover {\r\n    background: -webkit-linear-gradient(rgb(146, 31, 31), rgb(179, 87, 12));\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:disabled {\r\n    cursor: auto;\r\n    opacity: 0.5;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:disabled:hover {\r\n    background: -webkit-linear-gradient(rgb(124, 14, 14), rgb(250, 105, 8));\r\n}\r\n\r\n.form-control-title[_ngcontent-%COMP%] {\r\n    font-weight: bold;\r\n    font-style: italic;\r\n    font-size: 1rem;\r\n    color: wheat;\r\n}\r\n\r\n.form-control-input[_ngcontent-%COMP%] {\r\n    border: none;\r\n    height: 3.5rem;\r\n    border-radius: 10px;\r\n    background-color: rgba(66, 9, 9, 0.5);\r\n    color: white;\r\n    text-align: center;\r\n    display: block;\r\n    margin-top: 15px;\r\n    margin-bottom: 15px;\r\n    width: 100%;\r\n}\r\n\r\n.form-control-textarea[_ngcontent-%COMP%] {\r\n    border: none;\r\n    height: 7.5rem;\r\n    border-radius: 10px;\r\n    background-color: rgba(66, 9, 9, 0.5);\r\n    color: white;\r\n    text-align: left;\r\n    display: block;\r\n    margin-top: 15px;\r\n    margin-bottom: 15px;\r\n    width: 100%;\r\n    resize: none;\r\n    padding: 15px;\r\n}\r\n\r\n.form-control-input[_ngcontent-%COMP%]::placeholder {\r\n    color: #ccc;\r\n    opacity: 0.2;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.form-control-textarea[_ngcontent-%COMP%]::placeholder {\r\n    color: #ccc;\r\n    opacity: 0.2;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.ng-invalid.ng-touched[_ngcontent-%COMP%]:not(form) {\r\n    border: 1px solid red;\r\n}\r\n\r\n.ng-valid[_ngcontent-%COMP%]:not(form) {\r\n    border: 1px solid green;\r\n}\r\n\r\n.help-block[_ngcontent-%COMP%] {\r\n    color: red;\r\n    display: block;\r\n    margin-bottom: 15px;\r\n    margin-left: 5px;\r\n}\r\n\r\n@media only screen and (max-width: 1200px) {\r\n    .supportticket-container[_ngcontent-%COMP%] {\r\n        width: 800px;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 830px) {\r\n    h1[_ngcontent-%COMP%] {\r\n        font-size: 4rem;\r\n    }\r\n    .supportticket-container[_ngcontent-%COMP%] {\r\n        width: 600px;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 660px) {\r\n    h1[_ngcontent-%COMP%] {\r\n        font-size: 3rem;\r\n    }\r\n\r\n    .supportticket-container[_ngcontent-%COMP%] {\r\n        width: 450px;\r\n        padding: 80px;\r\n    }\r\n    \r\n}\r\n\r\n@media only screen and (max-width: 460px) {\r\n    h1[_ngcontent-%COMP%] {\r\n        font-size: 2rem;\r\n    }\r\n\r\n    .supportticket-container[_ngcontent-%COMP%] {\r\n        width: 300px;\r\n        padding: 30px;\r\n        border-radius: 30px;\r\n    }\r\n\r\n    button[_ngcontent-%COMP%] {\r\n        font-size: 1.1rem;\r\n    }\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFuZWwvc3VwcG9ydC9zdXBwb3J0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixvRUFBb0U7SUFDcEUscUJBQXFCO0lBQ3JCLDZCQUE2QjtJQUM3QixvQ0FBb0M7SUFDcEMsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksZUFBZTtJQUNmLE1BQU07SUFDTixPQUFPO0lBQ1AsYUFBYTtJQUNiLFlBQVk7SUFDWixxQ0FBcUQ7SUFDckQsb0NBQW9DO0lBQ3BDLDJCQUEyQjtJQUMzQixzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1Asb0NBQW9DO0lBQ3BDLFlBQVk7SUFDWixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsV0FBVztBQUNmOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLGNBQWM7SUFDZCxtQ0FBbUM7SUFDbkMsb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixjQUFjO0lBQ2QsdUJBQXVCO0lBQ3ZCLDZCQUE2QjtJQUM3QixlQUFlO0lBQ2YsYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG9FQUFvRTtJQUNwRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx1RUFBdUU7QUFDM0U7O0FBRUE7SUFDSSx1RUFBdUU7QUFDM0U7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHVFQUF1RTtBQUMzRTs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osY0FBYztJQUNkLG1CQUFtQjtJQUNuQixxQ0FBcUM7SUFDckMsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0lBQ1osY0FBYztJQUNkLG1CQUFtQjtJQUNuQixxQ0FBcUM7SUFDckMsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1oseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0k7UUFDSSxZQUFZO0lBQ2hCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLFlBQVk7SUFDaEI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLFlBQVk7UUFDWixhQUFhO0lBQ2pCOztBQUVKOztBQUVBO0lBQ0k7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksWUFBWTtRQUNaLGFBQWE7UUFDYixtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSxpQkFBaUI7SUFDckI7O0FBRUoiLCJmaWxlIjoic3JjL2FwcC9wYW5lbC9zdXBwb3J0L3N1cHBvcnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxIHtcclxuICAgIGZvbnQtc2l6ZTogNXJlbTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQocmdiKDEyNCwgMTQsIDE0KSwgcmdiKDgwLCA2LCA2KSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIG1hcmdpbi10b3A6IDkwcHg7XHJcbn1cclxuXHJcbmgzIHtcclxuICAgIGNvbG9yOiB3aGVhdDtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG5oMzo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyDwn5iOJ1xyXG59XHJcblxyXG4uYmctaW1hZ2Uge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9yb3VsZXR0ZS5qcGcnKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQsIHJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBmaWx0ZXI6IGdyYXlzY2FsZSgzMCUpO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHRyYW5zaXRpb246IGZpbHRlciAxcztcclxufVxyXG5cclxuLmJnLWltYWdlOjphZnRlciB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY29udGFpbmVyID4gKiB7XHJcbiAgICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG4uc3VwcG9ydHRpY2tldC1jb250YWluZXIge1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlNTYzMzI7XHJcbiAgICBwYWRkaW5nOiAxMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjQpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uIDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgd2lkdGg6IDExNTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChyZ2IoMTI0LCAxNCwgMTQpLCByZ2IoODAsIDYsIDYpKTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA1cmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzk0MGEwYTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBvcGFjaXR5OiAuNztcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbmJ1dHRvbjpsYXN0LWNoaWxkIHtcclxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHJnYigxMjQsIDE0LCAxNCksIHJnYigyNTAsIDEwNSwgOCkpO1xyXG59XHJcblxyXG5idXR0b246aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQocmdiKDE0NiwgMzEsIDMxKSwgcmdiKDE3OSwgODcsIDEyKSk7XHJcbn1cclxuXHJcbmJ1dHRvbjpkaXNhYmxlZCB7XHJcbiAgICBjdXJzb3I6IGF1dG87XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbn1cclxuXHJcbmJ1dHRvbjpkaXNhYmxlZDpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChyZ2IoMTI0LCAxNCwgMTQpLCByZ2IoMjUwLCAxMDUsIDgpKTtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbC10aXRsZSB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGNvbG9yOiB3aGVhdDtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbC1pbnB1dCB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBoZWlnaHQ6IDMuNXJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDY2LCA5LCA5LCAwLjUpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sLXRleHRhcmVhIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGhlaWdodDogNy41cmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNjYsIDksIDksIDAuNSk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcmVzaXplOiBub25lO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbC1pbnB1dDo6cGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6ICNjY2M7XHJcbiAgICBvcGFjaXR5OiAwLjI7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sLXRleHRhcmVhOjpwbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogI2NjYztcclxuICAgIG9wYWNpdHk6IDAuMjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbi5uZy1pbnZhbGlkLm5nLXRvdWNoZWQ6bm90KGZvcm0pIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxufVxyXG5cclxuLm5nLXZhbGlkOm5vdChmb3JtKSB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcclxufVxyXG5cclxuLmhlbHAtYmxvY2sge1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XHJcbiAgICAuc3VwcG9ydHRpY2tldC1jb250YWluZXIge1xyXG4gICAgICAgIHdpZHRoOiA4MDBweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MzBweCkge1xyXG4gICAgaDEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNHJlbTtcclxuICAgIH1cclxuICAgIC5zdXBwb3J0dGlja2V0LWNvbnRhaW5lciB7XHJcbiAgICAgICAgd2lkdGg6IDYwMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY2MHB4KSB7XHJcbiAgICBoMSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAzcmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5zdXBwb3J0dGlja2V0LWNvbnRhaW5lciB7XHJcbiAgICAgICAgd2lkdGg6IDQ1MHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDgwcHg7XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NjBweCkge1xyXG4gICAgaDEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIH1cclxuXHJcbiAgICAuc3VwcG9ydHRpY2tldC1jb250YWluZXIge1xyXG4gICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgIH1cclxuXHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SupportComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-support',
                templateUrl: './support.component.html',
                styleUrls: ['./support.component.css']
            }]
    }], function () { return [{ type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "/QAi":
/*!*********************************************************!*\
  !*** ./src/app/auth/activation/activation.component.ts ***!
  \*********************************************************/
/*! exports provided: ActivationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivationComponent", function() { return ActivationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "qXBG");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "5eHb");





class ActivationComponent {
    constructor(router, activatedRoute, auth, toastr) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.auth = auth;
        this.toastr = toastr;
        this.isLoading = true;
    }
    ngOnInit() {
        this.activatedRoute.paramMap.subscribe(params => {
            const token = params.get('token');
            this.activation$ = this.auth.activation(token).subscribe(() => {
                this.toastr.success('your account activated , you can login now !', 'Sign up', {
                    positionClass: 'toast-bottom-right',
                });
            });
            this.loading$ = this.auth.loading$.subscribe((isLoading) => {
                this.isLoading = isLoading;
            });
        });
    }
    ngOnDestroy() {
        this.activation$.unsubscribe();
        this.loading$.unsubscribe();
    }
}
ActivationComponent.ɵfac = function ActivationComponent_Factory(t) { return new (t || ActivationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"])); };
ActivationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ActivationComponent, selectors: [["app-activation"]], decls: 4, vars: 1, consts: [[1, "bg-image"], [1, "container"]], template: function ActivationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.isLoading ? "Please Wait..." : "Completed");
    } }, styles: ["h1[_ngcontent-%COMP%] {\r\n    font-size: 6rem;\r\n    color:#ffffff;\r\n    font-weight: bolder;\r\n    background: -webkit-linear-gradient(rgb(124, 14, 14), rgb(80, 6, 6));\r\n    background-clip: text;\r\n    -webkit-background-clip: text;\r\n    -webkit-text-fill-color: transparent;\r\n}\r\n\r\n.bg-image[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    height: 100vh;\r\n    width: 100vw;\r\n    background-image: url('roulette.jpg');\r\n    background-repeat: no-repeat, repeat;\r\n    background-position: center;\r\n    background-size: cover;\r\n    filter: grayscale(30%);\r\n    z-index: 1;\r\n    transition: filter 1s;\r\n}\r\n\r\n.bg-image[_ngcontent-%COMP%]::after {\r\n    content: '';\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    background-color: rgba(0, 0, 0, 0.8);\r\n    width: 100vw;\r\n    height: 100vh;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    width: 100%;\r\n    height: 100vh;\r\n    background-color: red;\r\n}\r\n\r\n.container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    z-index: 2;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n    background: -webkit-linear-gradient(rgb(124, 14, 14), rgb(80, 6, 6));\r\n    width: 25rem;\r\n    height: 4rem;\r\n    background-color: #940a0a;\r\n    border: none;\r\n    border-radius: 15px;\r\n    color: white;\r\n    font-size: 2rem;\r\n    font-style: italic;\r\n    cursor: pointer;\r\n    font-weight: bold;\r\n}\r\n\r\n@media only screen and (max-width: 800px) {\r\n    h1[_ngcontent-%COMP%] {\r\n        font-size: 4rem;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 620px) {\r\n    h1[_ngcontent-%COMP%] {\r\n        font-size: 3rem;\r\n    }\r\n    button[_ngcontent-%COMP%] {\r\n        width: 200px;\r\n        font-size: .9rem;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 420px) {\r\n    h1[_ngcontent-%COMP%] {\r\n        font-size: 2rem;\r\n    }\r\n    button[_ngcontent-%COMP%] {\r\n        width: 200px;\r\n        font-size: .9rem;\r\n        height: 2rem;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9hY3RpdmF0aW9uL2FjdGl2YXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG9FQUFvRTtJQUNwRSxxQkFBcUI7SUFDckIsNkJBQTZCO0lBQzdCLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGVBQWU7SUFDZixNQUFNO0lBQ04sT0FBTztJQUNQLGFBQWE7SUFDYixZQUFZO0lBQ1oscUNBQXFEO0lBQ3JELG9DQUFvQztJQUNwQywyQkFBMkI7SUFDM0Isc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1YscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLG9DQUFvQztJQUNwQyxZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsYUFBYTtJQUNiLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLG9FQUFvRTtJQUNwRSxZQUFZO0lBQ1osWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSTtRQUNJLGVBQWU7SUFDbkI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksWUFBWTtRQUNaLGdCQUFnQjtJQUNwQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxZQUFZO1FBQ1osZ0JBQWdCO1FBQ2hCLFlBQVk7SUFDaEI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvYWN0aXZhdGlvbi9hY3RpdmF0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XHJcbiAgICBmb250LXNpemU6IDZyZW07XHJcbiAgICBjb2xvcjojZmZmZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHJnYigxMjQsIDE0LCAxNCksIHJnYig4MCwgNiwgNikpO1xyXG4gICAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5iZy1pbWFnZSB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL3JvdWxldHRlLmpwZycpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdCwgcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGZpbHRlcjogZ3JheXNjYWxlKDMwJSk7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgdHJhbnNpdGlvbjogZmlsdGVyIDFzO1xyXG59XHJcblxyXG4uYmctaW1hZ2U6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5jb250YWluZXIgPiAqIHtcclxuICAgIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChyZ2IoMTI0LCAxNCwgMTQpLCByZ2IoODAsIDYsIDYpKTtcclxuICAgIHdpZHRoOiAyNXJlbTtcclxuICAgIGhlaWdodDogNHJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5NDBhMGE7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAgIGgxIHtcclxuICAgICAgICBmb250LXNpemU6IDRyZW07XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjIwcHgpIHtcclxuICAgIGgxIHtcclxuICAgICAgICBmb250LXNpemU6IDNyZW07XHJcbiAgICB9XHJcbiAgICBidXR0b24ge1xyXG4gICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICBmb250LXNpemU6IC45cmVtO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyMHB4KSB7XHJcbiAgICBoMSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgfVxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAuOXJlbTtcclxuICAgICAgICBoZWlnaHQ6IDJyZW07XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ActivationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-activation',
                templateUrl: './activation.component.html',
                styleUrls: ['./activation.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Lion\Desktop\desktop\roulette\frontend\src\main.ts */"zUnb");


/***/ }),

/***/ "2++q":
/*!***********************************************************!*\
  !*** ./src/app/game/bet-control/bet-control.component.ts ***!
  \***********************************************************/
/*! exports provided: BetControlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BetControlComponent", function() { return BetControlComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _bet_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bet.service */ "FjO3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");




class BetControlComponent {
    constructor(betService) {
        this.betService = betService;
    }
    ngOnInit() {
    }
    increaseBetAmount(amount) {
        this.amount != null ? this.amount = this.amount + amount : this.amount = amount;
        this.onBetAmountChange();
    }
    onBetAmountChange() {
        this.betService.changeBetAmount(this.amount);
    }
    resetBetAmount() {
        this.amount = 0;
        this.onBetAmountChange();
    }
}
BetControlComponent.ɵfac = function BetControlComponent_Factory(t) { return new (t || BetControlComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_bet_service__WEBPACK_IMPORTED_MODULE_1__["BetService"])); };
BetControlComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BetControlComponent, selectors: [["app-bet-control"]], decls: 17, vars: 1, consts: [[1, "bet-control"], ["type", "number", "placeholder", "Enter Amount ...", 3, "ngModel", "ngModelChange", "input"], [3, "click"]], template: function BetControlComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Enter Bet Amount : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BetControlComponent_Template_input_ngModelChange_3_listener($event) { return ctx.amount = $event; })("input", function BetControlComponent_Template_input_input_3_listener() { return ctx.onBetAmountChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BetControlComponent_Template_li_click_5_listener() { return ctx.increaseBetAmount(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "+1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BetControlComponent_Template_li_click_7_listener() { return ctx.increaseBetAmount(5); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "+5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BetControlComponent_Template_li_click_9_listener() { return ctx.increaseBetAmount(10); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "+10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BetControlComponent_Template_li_click_11_listener() { return ctx.increaseBetAmount(50); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "+50");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BetControlComponent_Template_li_click_13_listener() { return ctx.increaseBetAmount(100); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "+100");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BetControlComponent_Template_li_click_15_listener() { return ctx.resetBetAmount(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "CLEAR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.amount);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]], styles: [".bet-control[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    position: relative;\r\n    width: 1150px;\r\n    max-width: 1150px;\r\n    height: 60px;\r\n    margin: 0 auto 30px auto;\r\n    box-shadow: 10px 10px 50px rgba(255, 0, 0, 0.2) inset;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n    border-radius: 40px;\r\n}\r\n\r\nul[_ngcontent-%COMP%] {\r\n    list-style: none;\r\n\r\n}\r\n\r\nli[_ngcontent-%COMP%] {\r\n    display: inline;\r\n    margin-right: 20px;\r\n    color: white;\r\n    cursor: pointer;\r\n    font-weight: bold;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n    padding: 0;\r\n    color: white;\r\n    font-weight: bold;\r\n}\r\n\r\ninput[type='number'][_ngcontent-%COMP%] {\r\n    border: none;\r\n    height: 70%;\r\n    border-radius: 10px;\r\n    background-color: rgba(0, 0, 0, 0.5);\r\n    color: white;\r\n    text-align: center;\r\n    width: 250px;\r\n}\r\n\r\ninput[type='number'][_ngcontent-%COMP%]::placeholder {\r\n    color: #ccc;\r\n    opacity: 0.2;\r\n}\r\n\r\n@media only screen and (max-width: 1200px) {\r\n    .bet-control[_ngcontent-%COMP%] {\r\n        width: 800px;\r\n    }\r\n    p[_ngcontent-%COMP%] {\r\n        font-size: .8rem;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 820px) {\r\n    .bet-control[_ngcontent-%COMP%] {\r\n        width: 600px;\r\n    }\r\n    li[_ngcontent-%COMP%] {\r\n        font-size: .8rem;\r\n    }\r\n    p[_ngcontent-%COMP%] {\r\n        font-size: .7rem;\r\n    }\r\n    input[type='number'][_ngcontent-%COMP%] {\r\n        width: 150px;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 620px) {\r\n    .bet-control[_ngcontent-%COMP%] {\r\n        width: 400px;\r\n    }\r\n    ul[_ngcontent-%COMP%] {\r\n        display: none;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 420px) {\r\n    .bet-control[_ngcontent-%COMP%] {\r\n        width: 250px;\r\n    }\r\n    ul[_ngcontent-%COMP%] {\r\n        display: none;\r\n    }\r\n    p[_ngcontent-%COMP%] {\r\n        display: none;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS9iZXQtY29udHJvbC9iZXQtY29udHJvbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWix3QkFBd0I7SUFDeEIscURBQXFEO0lBQ3JELDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCOztBQUVwQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLG9DQUFvQztJQUNwQyxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJO1FBQ0ksWUFBWTtJQUNoQjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLFlBQVk7SUFDaEI7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxZQUFZO0lBQ2hCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLFlBQVk7SUFDaEI7SUFDQTtRQUNJLGFBQWE7SUFDakI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksWUFBWTtJQUNoQjtJQUNBO1FBQ0ksYUFBYTtJQUNqQjtJQUNBO1FBQ0ksYUFBYTtJQUNqQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvZ2FtZS9iZXQtY29udHJvbC9iZXQtY29udHJvbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJldC1jb250cm9sIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTE1MHB4O1xyXG4gICAgbWF4LXdpZHRoOiAxMTUwcHg7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0byAzMHB4IGF1dG87XHJcbiAgICBib3gtc2hhZG93OiAxMHB4IDEwcHggNTBweCByZ2JhKDI1NSwgMCwgMCwgMC4yKSBpbnNldDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbn1cclxuXHJcbnVsIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcblxyXG59XHJcblxyXG5saSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxucCB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9J251bWJlciddIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGhlaWdodDogNzAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAyNTBweDtcclxufVxyXG5cclxuaW5wdXRbdHlwZT0nbnVtYmVyJ106OnBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiAjY2NjO1xyXG4gICAgb3BhY2l0eTogMC4yO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xyXG4gICAgLmJldC1jb250cm9sIHtcclxuICAgICAgICB3aWR0aDogODAwcHg7XHJcbiAgICB9XHJcbiAgICBwIHtcclxuICAgICAgICBmb250LXNpemU6IC44cmVtO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgyMHB4KSB7XHJcbiAgICAuYmV0LWNvbnRyb2wge1xyXG4gICAgICAgIHdpZHRoOiA2MDBweDtcclxuICAgIH1cclxuICAgIGxpIHtcclxuICAgICAgICBmb250LXNpemU6IC44cmVtO1xyXG4gICAgfVxyXG4gICAgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAuN3JlbTtcclxuICAgIH1cclxuICAgIGlucHV0W3R5cGU9J251bWJlciddIHtcclxuICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjIwcHgpIHtcclxuICAgIC5iZXQtY29udHJvbCB7XHJcbiAgICAgICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgfVxyXG4gICAgdWwge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDIwcHgpIHtcclxuICAgIC5iZXQtY29udHJvbCB7XHJcbiAgICAgICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgfVxyXG4gICAgdWwge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICBwIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BetControlComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-bet-control',
                templateUrl: './bet-control.component.html',
                styleUrls: ['./bet-control.component.css']
            }]
    }], function () { return [{ type: _bet_service__WEBPACK_IMPORTED_MODULE_1__["BetService"] }]; }, null); })();


/***/ }),

/***/ "7fM4":
/*!***********************************!*\
  !*** ./src/app/socket.service.ts ***!
  \***********************************/
/*! exports provided: SocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketService", function() { return SocketService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! socket.io-client */ "jifJ");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_3__);





class SocketService {
    constructor() {
        this.subscribersCounter = {};
        this.eventObservables$ = {};
        this.config = {
            url: 'http://192.168.1.83:4000',
            options: {}
        };
        const url = this.config.url;
        const options = this.config.options;
        const ioFunc = socket_io_client__WEBPACK_IMPORTED_MODULE_3___default.a ? socket_io_client__WEBPACK_IMPORTED_MODULE_3___default.a : socket_io_client__WEBPACK_IMPORTED_MODULE_3__;
        this.ioSocket = ioFunc(url, options);
    }
    of(namespace) {
        this.ioSocket.of(namespace);
    }
    on(eventName, callback) {
        this.ioSocket.on(eventName, callback);
    }
    once(eventName, callback) {
        this.ioSocket.once(eventName, callback);
    }
    connect() {
        return this.ioSocket.connect();
    }
    disconnect(close) {
        return this.ioSocket.disconnect.apply(this.ioSocket, arguments);
    }
    emit(eventName, ...args) {
        return this.ioSocket.emit.apply(this.ioSocket, arguments);
    }
    removeListener(eventName, callback) {
        return this.ioSocket.removeListener.apply(this.ioSocket, arguments);
    }
    removeAllListeners(eventName) {
        return this.ioSocket.removeAllListeners.apply(this.ioSocket, arguments);
    }
    fromEvent(eventName) {
        if (!this.subscribersCounter[eventName]) {
            this.subscribersCounter[eventName] = 0;
        }
        this.subscribersCounter[eventName]++;
        if (!this.eventObservables$[eventName]) {
            this.eventObservables$[eventName] = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]((observer) => {
                const listener = (data) => {
                    observer.next(data);
                };
                this.ioSocket.on(eventName, listener);
                return () => {
                    this.subscribersCounter[eventName]--;
                    if (this.subscribersCounter[eventName] === 0) {
                        this.ioSocket.removeListener(eventName, listener);
                        delete this.eventObservables$[eventName];
                    }
                };
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["share"])());
        }
        return this.eventObservables$[eventName];
    }
    fromOneTimeEvent(eventName) {
        return new Promise(resolve => this.once(eventName, resolve));
    }
}
SocketService.ɵfac = function SocketService_Factory(t) { return new (t || SocketService)(); };
SocketService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SocketService, factory: SocketService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SocketService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "AdIF":
/*!************************************************************!*\
  !*** ./src/app/panel/bet-history/bet-history.component.ts ***!
  \************************************************************/
/*! exports provided: BetHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BetHistoryComponent", function() { return BetHistoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_easy_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-easy-table */ "FTbq");
/* harmony import */ var src_app_game_bet_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/game/bet.service */ "FjO3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");







function BetHistoryComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BetHistoryComponent_ngx_table_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ngx-table", 6);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("configuration", ctx_r1.configuration)("data", ctx_r1.data)("columns", ctx_r1.columns)("loadingTemplate", ctx_r1.loadingTemplate);
} }
class BetHistoryComponent {
    constructor(bet) {
        this.bet = bet;
        this.data = [];
        this.isLoading = true;
    }
    ngOnInit() {
        this.configuration = Object.assign({}, ngx_easy_table__WEBPACK_IMPORTED_MODULE_1__["DefaultConfig"]);
        this.configuration.paginationEnabled = false;
        this.columns = [
            { key: 'id', title: '#' },
            { key: 'color', title: 'Color' },
            { key: 'amount', title: 'Amount' },
            { key: 'status', title: 'Status' },
            { key: 'createdAt', title: 'Date' }
        ];
        this.allBets$ = this.bet.getAllBets().subscribe((userBets) => {
            this.isLoading = false;
            const updatedBets = userBets.map((userBet) => {
                const updatedBet = {
                    id: userBet.id,
                    color: userBet.color,
                    amount: userBet.amount,
                    status: userBet.status,
                    round: userBet.round,
                    createdAt: new Date(userBet.createdAt).toLocaleString(),
                    updatedAt: userBet.updatedAt,
                };
                return updatedBet;
            }).sort((a, b) => {
                return a.id > b.id ? 1 : a.id < b.id ? -1 : 0;
            });
            this.data = updatedBets;
        });
    }
    ngOnDestroy() {
        this.allBets$.unsubscribe();
    }
}
BetHistoryComponent.ɵfac = function BetHistoryComponent_Factory(t) { return new (t || BetHistoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_game_bet_service__WEBPACK_IMPORTED_MODULE_2__["BetService"])); };
BetHistoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BetHistoryComponent, selectors: [["app-bet-history"]], decls: 10, vars: 2, consts: [[1, "bg-image"], [1, "container"], [1, "bethistory-container"], ["class", "lds-roller", 4, "ngIf"], [3, "configuration", "data", "columns", "loadingTemplate", 4, "ngIf"], [1, "lds-roller"], [3, "configuration", "data", "columns", "loadingTemplate"]], template: function BetHistoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Bet's History");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Last 10 bets");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, BetHistoryComponent_div_8_Template, 9, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, BetHistoryComponent_ngx_table_9_Template, 1, 4, "ngx-table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.length > 0 || !ctx.isLoading);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], ngx_easy_table__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]], styles: ["[_nghost-%COMP%]     .ngx-table__header-title {\r\n    color: red;\r\n    font-weight: 200;\r\n}\r\n\r\n\r\n[_nghost-%COMP%]     #table {\r\n    width: 100%;\r\n    border-collapse: collapse;\r\n}\r\n\r\n\r\n[_nghost-%COMP%]     #table > thead > tr > th {\r\n    border-bottom: 1px solid red;\r\n    text-align: center;\r\n}\r\n\r\n\r\n[_nghost-%COMP%]     #table > tbody > tr > td {\r\n    color: wheat;\r\n    text-align: center;\r\n    padding: 20px;\r\n    border-bottom: 1px solid red;\r\n}\r\n\r\n\r\n[_nghost-%COMP%]     #table > tbody > tr:hover {\r\n  background-color: red;\r\n}\r\n\r\n\r\nh1[_ngcontent-%COMP%] {\r\n    font-size: 5rem;\r\n    text-transform: uppercase;\r\n    font-weight: bolder;\r\n    background: -webkit-linear-gradient(rgb(124, 14, 14), rgb(80, 6, 6));\r\n    background-clip: text;\r\n    -webkit-background-clip: text;\r\n    -webkit-text-fill-color: transparent;\r\n    margin-top: 90px;\r\n}\r\n\r\n\r\nh3[_ngcontent-%COMP%] {\r\n    color: wheat;\r\n    margin-top: 0;\r\n    text-transform: uppercase;\r\n}\r\n\r\n\r\nh3[_ngcontent-%COMP%]::after {\r\n    content: ' \uD83D\uDD04'\r\n}\r\n\r\n\r\nh4[_ngcontent-%COMP%] {\r\n  text-transform: uppercase;\r\n  color: wheat;\r\n  text-align: center;\r\n  font-size: 2rem;\r\n}\r\n\r\n\r\n.lds-roller[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    position: relative;\r\n    width: 80px;\r\n    height: 80px;\r\n    left: 50%;\r\n    transform: translate(-50%);\r\n  }\r\n\r\n\r\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\r\n    transform-origin: 40px 40px;\r\n  }\r\n\r\n\r\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:after {\r\n    content: \" \";\r\n    display: block;\r\n    position: absolute;\r\n    width: 7px;\r\n    height: 7px;\r\n    border-radius: 50%;\r\n    background: #fff;\r\n    margin: -4px 0 0 -4px;\r\n  }\r\n\r\n\r\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1) {\r\n    animation-delay: -0.036s;\r\n  }\r\n\r\n\r\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1):after {\r\n    top: 63px;\r\n    left: 63px;\r\n  }\r\n\r\n\r\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2) {\r\n    animation-delay: -0.072s;\r\n  }\r\n\r\n\r\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2):after {\r\n    top: 68px;\r\n    left: 56px;\r\n  }\r\n\r\n\r\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3) {\r\n    animation-delay: -0.108s;\r\n  }\r\n\r\n\r\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3):after {\r\n    top: 71px;\r\n    left: 48px;\r\n  }\r\n\r\n\r\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(4) {\r\n    animation-delay: -0.144s;\r\n  }\r\n\r\n\r\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(4):after {\r\n    top: 72px;\r\n    left: 40px;\r\n  }\r\n\r\n\r\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(5) {\r\n    animation-delay: -0.18s;\r\n  }\r\n\r\n\r\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(5):after {\r\n    top: 71px;\r\n    left: 32px;\r\n  }\r\n\r\n\r\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(6) {\r\n    animation-delay: -0.216s;\r\n  }\r\n\r\n\r\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(6):after {\r\n    top: 68px;\r\n    left: 24px;\r\n  }\r\n\r\n\r\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(7) {\r\n    animation-delay: -0.252s;\r\n  }\r\n\r\n\r\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(7):after {\r\n    top: 63px;\r\n    left: 17px;\r\n  }\r\n\r\n\r\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(8) {\r\n    animation-delay: -0.288s;\r\n  }\r\n\r\n\r\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(8):after {\r\n    top: 56px;\r\n    left: 12px;\r\n  }\r\n\r\n\r\n@keyframes lds-roller {\r\n    0% {\r\n      transform: rotate(0deg);\r\n    }\r\n    100% {\r\n      transform: rotate(360deg);\r\n    }\r\n  }\r\n\r\n\r\n.bg-image[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    height: 100vh;\r\n    width: 100vw;\r\n    background-image: url('roulette.jpg');\r\n    background-repeat: no-repeat, repeat;\r\n    background-position: center;\r\n    background-size: cover;\r\n    filter: grayscale(30%);\r\n    z-index: 1;\r\n    transition: filter 1s;\r\n}\r\n\r\n\r\n.bg-image[_ngcontent-%COMP%]::after {\r\n    content: '';\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    background-color: rgba(0, 0, 0, 0.8);\r\n    width: 100vw;\r\n    height: 100vh;\r\n}\r\n\r\n\r\n.container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    width: 100%;\r\n}\r\n\r\n\r\n.container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    z-index: 2;\r\n}\r\n\r\n\r\n.bethistory-container[_ngcontent-%COMP%] {\r\n    border-top: 1px solid #e56332;\r\n    padding: 120px;\r\n    background-color: rgba(0, 0, 0, .4);\r\n    border-radius: 100px;\r\n    display: flex;\r\n    margin: 0 auto;\r\n    flex-direction: column ;\r\n    justify-content: space-around;\r\n    flex-wrap: wrap;\r\n    width: 1150px;\r\n    overflow-x: hidden;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n    background: -webkit-linear-gradient(rgb(124, 14, 14), rgb(80, 6, 6));\r\n    width: 100%;\r\n    height: 5rem;\r\n    background-color: #940a0a;\r\n    border: none;\r\n    border-radius: 25px;\r\n    color: white;\r\n    font-size: 2rem;\r\n    font-style: italic;\r\n    cursor: pointer;\r\n    font-weight: bold;\r\n    text-transform: uppercase;\r\n    opacity: .7;\r\n    margin-top: 20px;\r\n}\r\n\r\n\r\nbutton[_ngcontent-%COMP%]:last-child {\r\n    background: -webkit-linear-gradient(rgb(124, 14, 14), rgb(250, 105, 8));\r\n}\r\n\r\n\r\nbutton[_ngcontent-%COMP%]:hover {\r\n    background: -webkit-linear-gradient(rgb(146, 31, 31), rgb(179, 87, 12));\r\n}\r\n\r\n\r\nbutton[_ngcontent-%COMP%]:disabled {\r\n    cursor: auto;\r\n    opacity: 0.5;\r\n}\r\n\r\n\r\nbutton[_ngcontent-%COMP%]:disabled:hover {\r\n    background: -webkit-linear-gradient(rgb(124, 14, 14), rgb(250, 105, 8));\r\n}\r\n\r\n\r\n.form-control-title[_ngcontent-%COMP%] {\r\n    font-weight: bold;\r\n    font-style: italic;\r\n    font-size: 1rem;\r\n    color: wheat;\r\n}\r\n\r\n\r\n.form-control-input[_ngcontent-%COMP%] {\r\n    border: none;\r\n    height: 3.5rem;\r\n    border-radius: 10px;\r\n    background-color: rgba(66, 9, 9, 0.5);\r\n    color: white;\r\n    text-align: center;\r\n    display: block;\r\n    margin-top: 15px;\r\n    margin-bottom: 15px;\r\n    width: 100%;\r\n}\r\n\r\n\r\n.form-control-input[_ngcontent-%COMP%]::placeholder {\r\n    color: #ccc;\r\n    opacity: 0.2;\r\n    text-transform: uppercase;\r\n}\r\n\r\n\r\n.ng-invalid.ng-touched[_ngcontent-%COMP%]:not(form) {\r\n    border: 1px solid red;\r\n}\r\n\r\n\r\n.ng-valid[_ngcontent-%COMP%]:not(form) {\r\n    border: 1px solid green;\r\n}\r\n\r\n\r\n.help-block[_ngcontent-%COMP%] {\r\n    color: red;\r\n    display: block;\r\n    margin-bottom: 15px;\r\n    margin-left: 5px;\r\n}\r\n\r\n\r\n@media only screen and (max-width: 1200px) {\r\n    .bethistory-container[_ngcontent-%COMP%] {\r\n        width: 800px;\r\n    }\r\n}\r\n\r\n\r\n@media only screen and (max-width: 830px) {\r\n    h1[_ngcontent-%COMP%] {\r\n        font-size: 4rem;\r\n    }\r\n    .bethistory-container[_ngcontent-%COMP%] {\r\n        width: 600px;\r\n    }\r\n}\r\n\r\n\r\n@media only screen and (max-width: 660px) {\r\n    h1[_ngcontent-%COMP%] {\r\n        font-size: 3rem;\r\n    }\r\n\r\n    .bethistory-container[_ngcontent-%COMP%] {\r\n        width: 450px;\r\n        padding: 80px;\r\n    }\r\n\r\n    [_nghost-%COMP%]     #table {\r\n      font-size: .7rem;\r\n    }\r\n\r\n    [_nghost-%COMP%]     #table > tbody > tr > td {\r\n      padding: 10px;\r\n    }\r\n    \r\n}\r\n\r\n\r\n@media only screen and (max-width: 460px) {\r\n    h1[_ngcontent-%COMP%] {\r\n        font-size: 2rem;\r\n    }\r\n\r\n    .bethistory-container[_ngcontent-%COMP%] {\r\n        width: 300px;\r\n        padding: 30px;\r\n        border-radius: 30px;\r\n    }\r\n\r\n    button[_ngcontent-%COMP%] {\r\n        font-size: 1.1rem;\r\n    }\r\n\r\n    [_nghost-%COMP%]     #table {\r\n      font-size: .5rem;\r\n    }\r\n\r\n    [_nghost-%COMP%]     #table > tbody > tr > td {\r\n      padding: 10px;\r\n    }\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFuZWwvYmV0LWhpc3RvcnkvYmV0LWhpc3RvcnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7QUFDcEI7OztBQUdBO0lBQ0ksV0FBVztJQUNYLHlCQUF5QjtBQUM3Qjs7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsa0JBQWtCO0FBQ3RCOzs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLDRCQUE0QjtBQUNoQzs7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7OztBQUVBO0lBQ0ksZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsb0VBQW9FO0lBQ3BFLHFCQUFxQjtJQUNyQiw2QkFBNkI7SUFDN0Isb0NBQW9DO0lBQ3BDLGdCQUFnQjtBQUNwQjs7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHlCQUF5QjtBQUM3Qjs7O0FBRUE7SUFDSTtBQUNKOzs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7OztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLFNBQVM7SUFDVCwwQkFBMEI7RUFDNUI7OztBQUNBO0lBQ0UsZ0VBQWdFO0lBQ2hFLDJCQUEyQjtFQUM3Qjs7O0FBQ0E7SUFDRSxZQUFZO0lBQ1osY0FBYztJQUNkLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIscUJBQXFCO0VBQ3ZCOzs7QUFDQTtJQUNFLHdCQUF3QjtFQUMxQjs7O0FBQ0E7SUFDRSxTQUFTO0lBQ1QsVUFBVTtFQUNaOzs7QUFDQTtJQUNFLHdCQUF3QjtFQUMxQjs7O0FBQ0E7SUFDRSxTQUFTO0lBQ1QsVUFBVTtFQUNaOzs7QUFDQTtJQUNFLHdCQUF3QjtFQUMxQjs7O0FBQ0E7SUFDRSxTQUFTO0lBQ1QsVUFBVTtFQUNaOzs7QUFDQTtJQUNFLHdCQUF3QjtFQUMxQjs7O0FBQ0E7SUFDRSxTQUFTO0lBQ1QsVUFBVTtFQUNaOzs7QUFDQTtJQUNFLHVCQUF1QjtFQUN6Qjs7O0FBQ0E7SUFDRSxTQUFTO0lBQ1QsVUFBVTtFQUNaOzs7QUFDQTtJQUNFLHdCQUF3QjtFQUMxQjs7O0FBQ0E7SUFDRSxTQUFTO0lBQ1QsVUFBVTtFQUNaOzs7QUFDQTtJQUNFLHdCQUF3QjtFQUMxQjs7O0FBQ0E7SUFDRSxTQUFTO0lBQ1QsVUFBVTtFQUNaOzs7QUFDQTtJQUNFLHdCQUF3QjtFQUMxQjs7O0FBQ0E7SUFDRSxTQUFTO0lBQ1QsVUFBVTtFQUNaOzs7QUFDQTtJQUNFO01BQ0UsdUJBQXVCO0lBQ3pCO0lBQ0E7TUFDRSx5QkFBeUI7SUFDM0I7RUFDRjs7O0FBRUY7SUFDSSxlQUFlO0lBQ2YsTUFBTTtJQUNOLE9BQU87SUFDUCxhQUFhO0lBQ2IsWUFBWTtJQUNaLHFDQUFxRDtJQUNyRCxvQ0FBb0M7SUFDcEMsMkJBQTJCO0lBQzNCLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLHFCQUFxQjtBQUN6Qjs7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1Asb0NBQW9DO0lBQ3BDLFlBQVk7SUFDWixhQUFhO0FBQ2pCOzs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFdBQVc7QUFDZjs7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7OztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLGNBQWM7SUFDZCxtQ0FBbUM7SUFDbkMsb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixjQUFjO0lBQ2QsdUJBQXVCO0lBQ3ZCLDZCQUE2QjtJQUM3QixlQUFlO0lBQ2YsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7OztBQUVBO0lBQ0ksb0VBQW9FO0lBQ3BFLFdBQVc7SUFDWCxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsV0FBVztJQUNYLGdCQUFnQjtBQUNwQjs7O0FBRUE7SUFDSSx1RUFBdUU7QUFDM0U7OztBQUVBO0lBQ0ksdUVBQXVFO0FBQzNFOzs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0FBQ2hCOzs7QUFFQTtJQUNJLHVFQUF1RTtBQUMzRTs7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixZQUFZO0FBQ2hCOzs7QUFFQTtJQUNJLFlBQVk7SUFDWixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLHFDQUFxQztJQUNyQyxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLFdBQVc7QUFDZjs7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHlCQUF5QjtBQUM3Qjs7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7OztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOzs7QUFFQTtJQUNJLFVBQVU7SUFDVixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjs7O0FBRUE7SUFDSTtRQUNJLFlBQVk7SUFDaEI7QUFDSjs7O0FBRUE7SUFDSTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLFlBQVk7SUFDaEI7QUFDSjs7O0FBRUE7SUFDSTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxZQUFZO1FBQ1osYUFBYTtJQUNqQjs7SUFFQTtNQUNFLGdCQUFnQjtJQUNsQjs7SUFFQTtNQUNFLGFBQWE7SUFDZjs7QUFFSjs7O0FBRUE7SUFDSTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxZQUFZO1FBQ1osYUFBYTtRQUNiLG1CQUFtQjtJQUN2Qjs7SUFFQTtRQUNJLGlCQUFpQjtJQUNyQjs7SUFFQTtNQUNFLGdCQUFnQjtJQUNsQjs7SUFFQTtNQUNFLGFBQWE7SUFDZjs7QUFFSiIsImZpbGUiOiJzcmMvYXBwL3BhbmVsL2JldC1oaXN0b3J5L2JldC1oaXN0b3J5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXAgLm5neC10YWJsZV9faGVhZGVyLXRpdGxlIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBmb250LXdlaWdodDogMjAwO1xyXG59XHJcblxyXG5cclxuOmhvc3QgOjpuZy1kZWVwICN0YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAjdGFibGUgPiB0aGVhZCA+IHRyID4gdGgge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJlZDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwICN0YWJsZSA+IHRib2R5ID4gdHIgPiB0ZCB7XHJcbiAgICBjb2xvcjogd2hlYXQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJlZDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwICN0YWJsZSA+IHRib2R5ID4gdHI6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxufVxyXG5cclxuaDEge1xyXG4gICAgZm9udC1zaXplOiA1cmVtO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChyZ2IoMTI0LCAxNCwgMTQpLCByZ2IoODAsIDYsIDYpKTtcclxuICAgIGJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgbWFyZ2luLXRvcDogOTBweDtcclxufVxyXG5cclxuaDMge1xyXG4gICAgY29sb3I6IHdoZWF0O1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbmgzOjphZnRlciB7XHJcbiAgICBjb250ZW50OiAnIPCflIQnXHJcbn1cclxuXHJcbmg0IHtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGNvbG9yOiB3aGVhdDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG59XHJcblxyXG4ubGRzLXJvbGxlciB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUpO1xyXG4gIH1cclxuICAubGRzLXJvbGxlciBkaXYge1xyXG4gICAgYW5pbWF0aW9uOiBsZHMtcm9sbGVyIDEuMnMgY3ViaWMtYmV6aWVyKDAuNSwgMCwgMC41LCAxKSBpbmZpbml0ZTtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IDQwcHggNDBweDtcclxuICB9XHJcbiAgLmxkcy1yb2xsZXIgZGl2OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiIFwiO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogN3B4O1xyXG4gICAgaGVpZ2h0OiA3cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgbWFyZ2luOiAtNHB4IDAgMCAtNHB4O1xyXG4gIH1cclxuICAubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDEpIHtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMDM2cztcclxuICB9XHJcbiAgLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCgxKTphZnRlciB7XHJcbiAgICB0b3A6IDYzcHg7XHJcbiAgICBsZWZ0OiA2M3B4O1xyXG4gIH1cclxuICAubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDIpIHtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMDcycztcclxuICB9XHJcbiAgLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCgyKTphZnRlciB7XHJcbiAgICB0b3A6IDY4cHg7XHJcbiAgICBsZWZ0OiA1NnB4O1xyXG4gIH1cclxuICAubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDMpIHtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMTA4cztcclxuICB9XHJcbiAgLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCgzKTphZnRlciB7XHJcbiAgICB0b3A6IDcxcHg7XHJcbiAgICBsZWZ0OiA0OHB4O1xyXG4gIH1cclxuICAubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDQpIHtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMTQ0cztcclxuICB9XHJcbiAgLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg0KTphZnRlciB7XHJcbiAgICB0b3A6IDcycHg7XHJcbiAgICBsZWZ0OiA0MHB4O1xyXG4gIH1cclxuICAubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDUpIHtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMThzO1xyXG4gIH1cclxuICAubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDUpOmFmdGVyIHtcclxuICAgIHRvcDogNzFweDtcclxuICAgIGxlZnQ6IDMycHg7XHJcbiAgfVxyXG4gIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNikge1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4yMTZzO1xyXG4gIH1cclxuICAubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDYpOmFmdGVyIHtcclxuICAgIHRvcDogNjhweDtcclxuICAgIGxlZnQ6IDI0cHg7XHJcbiAgfVxyXG4gIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNykge1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4yNTJzO1xyXG4gIH1cclxuICAubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDcpOmFmdGVyIHtcclxuICAgIHRvcDogNjNweDtcclxuICAgIGxlZnQ6IDE3cHg7XHJcbiAgfVxyXG4gIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoOCkge1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4yODhzO1xyXG4gIH1cclxuICAubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDgpOmFmdGVyIHtcclxuICAgIHRvcDogNTZweDtcclxuICAgIGxlZnQ6IDEycHg7XHJcbiAgfVxyXG4gIEBrZXlmcmFtZXMgbGRzLXJvbGxlciB7XHJcbiAgICAwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuLmJnLWltYWdlIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvcm91bGV0dGUuanBnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0LCByZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgZmlsdGVyOiBncmF5c2NhbGUoMzAlKTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICB0cmFuc2l0aW9uOiBmaWx0ZXIgMXM7XHJcbn1cclxuXHJcbi5iZy1pbWFnZTo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmNvbnRhaW5lciA+ICoge1xyXG4gICAgei1pbmRleDogMjtcclxufVxyXG5cclxuLmJldGhpc3RvcnktY29udGFpbmVyIHtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTU2MzMyO1xyXG4gICAgcGFkZGluZzogMTIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC40KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbiA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIHdpZHRoOiAxMTUwcHg7XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQocmdiKDEyNCwgMTQsIDE0KSwgcmdiKDgwLCA2LCA2KSk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNXJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5NDBhMGE7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgb3BhY2l0eTogLjc7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG5idXR0b246bGFzdC1jaGlsZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChyZ2IoMTI0LCAxNCwgMTQpLCByZ2IoMjUwLCAxMDUsIDgpKTtcclxufVxyXG5cclxuYnV0dG9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHJnYigxNDYsIDMxLCAzMSksIHJnYigxNzksIDg3LCAxMikpO1xyXG59XHJcblxyXG5idXR0b246ZGlzYWJsZWQge1xyXG4gICAgY3Vyc29yOiBhdXRvO1xyXG4gICAgb3BhY2l0eTogMC41O1xyXG59XHJcblxyXG5idXR0b246ZGlzYWJsZWQ6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQocmdiKDEyNCwgMTQsIDE0KSwgcmdiKDI1MCwgMTA1LCA4KSk7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2wtdGl0bGUge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBjb2xvcjogd2hlYXQ7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2wtaW5wdXQge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgaGVpZ2h0OiAzLjVyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2NiwgOSwgOSwgMC41KTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbC1pbnB1dDo6cGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6ICNjY2M7XHJcbiAgICBvcGFjaXR5OiAwLjI7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG4ubmctaW52YWxpZC5uZy10b3VjaGVkOm5vdChmb3JtKSB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XHJcbn1cclxuXHJcbi5uZy12YWxpZDpub3QoZm9ybSkge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XHJcbn1cclxuXHJcbi5oZWxwLWJsb2NrIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xyXG4gICAgLmJldGhpc3RvcnktY29udGFpbmVyIHtcclxuICAgICAgICB3aWR0aDogODAwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODMwcHgpIHtcclxuICAgIGgxIHtcclxuICAgICAgICBmb250LXNpemU6IDRyZW07XHJcbiAgICB9XHJcbiAgICAuYmV0aGlzdG9yeS1jb250YWluZXIge1xyXG4gICAgICAgIHdpZHRoOiA2MDBweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NjBweCkge1xyXG4gICAgaDEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICAgIH1cclxuXHJcbiAgICAuYmV0aGlzdG9yeS1jb250YWluZXIge1xyXG4gICAgICAgIHdpZHRoOiA0NTBweDtcclxuICAgICAgICBwYWRkaW5nOiA4MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIDpob3N0IDo6bmctZGVlcCAjdGFibGUge1xyXG4gICAgICBmb250LXNpemU6IC43cmVtO1xyXG4gICAgfVxyXG5cclxuICAgIDpob3N0IDo6bmctZGVlcCAjdGFibGUgPiB0Ym9keSA+IHRyID4gdGQge1xyXG4gICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDYwcHgpIHtcclxuICAgIGgxIHtcclxuICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLmJldGhpc3RvcnktY29udGFpbmVyIHtcclxuICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMzBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICB9XHJcblxyXG4gICAgOmhvc3QgOjpuZy1kZWVwICN0YWJsZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogLjVyZW07XHJcbiAgICB9XHJcblxyXG4gICAgOmhvc3QgOjpuZy1kZWVwICN0YWJsZSA+IHRib2R5ID4gdHIgPiB0ZCB7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB9XHJcblxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BetHistoryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-bet-history',
                templateUrl: './bet-history.component.html',
                styleUrls: ['./bet-history.component.css'],
            }]
    }], function () { return [{ type: src_app_game_bet_service__WEBPACK_IMPORTED_MODULE_2__["BetService"] }]; }, null); })();


/***/ }),

/***/ "AytR":
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
const environment = {
    production: false,
    apiUrl: 'http://192.168.1.83:2017/'
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

/***/ "FjO3":
/*!*************************************!*\
  !*** ./src/app/game/bet.service.ts ***!
  \*************************************/
/*! exports provided: BetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BetService", function() { return BetService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../socket.service */ "7fM4");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../auth/auth.service */ "qXBG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");









class BetService {
    constructor(toastr, socketService, auth, http) {
        this.toastr = toastr;
        this.socketService = socketService;
        this.auth = auth;
        this.http = http;
        this.retriveAllBets$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.newBetAdded$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.betAmount = 0;
    }
    changeBetAmount($amount) {
        this.betAmount = $amount;
    }
    newBet(color) {
        if (this.auth.isLoggedIn) {
            if (this.betAmount > 0) {
                this.auth.loggedInUserData$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1)).subscribe((userData) => {
                    this.toastr.info('new Bet Request Sent !', 'new Bet !', {
                        positionClass: 'toast-bottom-right'
                    });
                    this.socketService.emit('newBet', {
                        token: userData.token,
                        color: color,
                        amount: this.betAmount
                    });
                    this.socketService.emit('updateFundRequest', {
                        token: userData.token
                    });
                });
            }
            else {
                this.toastr.warning('Please enter bet amount before submitting bet !', 'Enter Amount !', {
                    positionClass: 'toast-bottom-right'
                });
            }
        }
        else {
            this.toastr.error('Please sing in or sign up before placing bet !', 'Sign in', {
                positionClass: 'toast-bottom-right'
            });
        }
    }
    getAllBets() {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'private/user-all-bets', {
            token: this.auth.token
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(error => {
            if (error.status === 500) {
                this.toastr.error('Server Error, Try Again !', 'Server Error', {
                    positionClass: 'toast-bottom-right',
                });
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])();
        }));
    }
}
BetService.ɵfac = function BetService_Factory(t) { return new (t || BetService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_socket_service__WEBPACK_IMPORTED_MODULE_5__["SocketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"])); };
BetService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BetService, factory: BetService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BetService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }, { type: _socket_service__WEBPACK_IMPORTED_MODULE_5__["SocketService"] }, { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "G11N":
/*!***************************************************!*\
  !*** ./src/app/auth/sign-in/sign-in.component.ts ***!
  \***************************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "qXBG");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reset-password/reset-password.component */ "eN75");









function SignInComponent_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " username field is required ! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignInComponent_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " username field must be 6 character at least ! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignInComponent_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " wrong username format ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignInComponent_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " password field is required ! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignInComponent_span_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " password length must be at least 6 character ! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class SignInComponent {
    constructor(auth, toastr, router) {
        this.auth = auth;
        this.toastr = toastr;
        this.router = router;
        this.loading = false;
    }
    ngOnInit() {
        this.loading$ = this.auth.loading$.subscribe((isLoading) => {
            this.loading = isLoading;
        });
        this.signInForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'username': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[A-Za-z0-9]+/)]),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)])
        });
    }
    onSubmit() {
        const { username, password } = this.signInForm.value;
        this.auth.login(username, password).subscribe((userData) => {
            this.toastr.success(`Welcome dear ${userData.user.username} !`, 'Sign in', {
                positionClass: 'toast-bottom-right',
            });
            this.router.navigate(['/game']);
        });
    }
    ngOnDestroy() {
        this.loading$.unsubscribe();
    }
}
SignInComponent.ɵfac = function SignInComponent_Factory(t) { return new (t || SignInComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
SignInComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignInComponent, selectors: [["app-sign-in"]], decls: 21, vars: 8, consts: [[1, "sign-in-container"], [1, "sign-in"], [3, "formGroup", "ngSubmit"], [1, "form-control"], ["for", "username", 1, "form-control-title"], ["name", "username", "formControlName", "username", "placeholder", "Enter username", "type", "text", 1, "form-control-input"], ["class", "help-block", 4, "ngIf"], ["for", "password", 1, "form-control-title"], ["name", "password", "formControlName", "password", "placeholder", "Enter password", "type", "password", 1, "form-control-input"], ["type", "submit", 3, "disabled"], [1, "help-block"]], template: function SignInComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Sign in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SignInComponent_Template_form_ngSubmit_4_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Username: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SignInComponent_span_9_Template, 2, 0, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SignInComponent_span_10_Template, 2, 0, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SignInComponent_span_11_Template, 2, 0, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Password: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, SignInComponent_span_16_Template, 2, 0, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, SignInComponent_span_17_Template, 2, 0, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "app-reset-password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.signInForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.signInForm.get("username").invalid && ctx.signInForm.get("username").touched && ctx.signInForm.get("username").errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.signInForm.get("username").invalid && ctx.signInForm.get("username").touched && ctx.signInForm.get("username").errors.minlength);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.signInForm.get("username").invalid && ctx.signInForm.get("username").touched && ctx.signInForm.get("username").errors.pattern);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.signInForm.get("password").invalid && ctx.signInForm.get("password").touched && ctx.signInForm.get("password").errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.signInForm.get("password").invalid && ctx.signInForm.get("password").touched && ctx.signInForm.get("password").errors.minlength);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.signInForm.valid || ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.loading ? "Please wait ..." : "Sign In !");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_6__["ResetPasswordComponent"]], styles: [".sign-in-container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n.sign-in[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 20px;\r\n    width: 34rem;\r\n    box-shadow: 10px 10px 50px rgba(255, 0, 0, 0.2) inset;\r\n    border-radius: 5px 40px 5px 40px;\r\n}\r\nh1[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n}\r\nbutton[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    border: none;\r\n    height: 3rem;\r\n    font-weight: bolder;\r\n    font-size: 1.2rem;\r\n    color: white;\r\n    border-radius: 10px;\r\n    background: -webkit-linear-gradient(rgb(160, 19, 19), rgb(145, 70, 10));\r\n    text-transform: uppercase;\r\n    cursor: pointer;\r\n}\r\n.ng-invalid.ng-touched[_ngcontent-%COMP%]:not(form) {\r\n    border: 1px solid red;\r\n}\r\n.ng-valid[_ngcontent-%COMP%]:not(form) {\r\n    border: 1px solid green;\r\n}\r\n.help-block[_ngcontent-%COMP%] {\r\n    color: red;\r\n    display: block;\r\n    margin-bottom: 15px;\r\n    margin-left: 5px;\r\n}\r\nbutton[_ngcontent-%COMP%]:disabled {\r\n    cursor: auto;\r\n    opacity: 0.5;\r\n}\r\n.form-control-title[_ngcontent-%COMP%] {\r\n    font-weight: bold;\r\n    font-style: italic;\r\n    font-size: 1rem;\r\n}\r\n.form-control-input[_ngcontent-%COMP%] {\r\n    border: none;\r\n    height: 3.5rem;\r\n    border-radius: 10px;\r\n    background-color: rgba(0, 0, 0, 0.5);\r\n    color: white;\r\n    text-align: center;\r\n    width: 100%;\r\n    margin-top: 15px;\r\n    margin-bottom: 15px;\r\n}\r\n.form-control-input[_ngcontent-%COMP%]::placeholder {\r\n    color: #ccc;\r\n    opacity: 0.2;\r\n    text-transform: uppercase;\r\n}\r\n@media only screen and (max-width: 1200px) {\r\n    .sign-in[_ngcontent-%COMP%] {\r\n        width: 24rem;\r\n    }\r\n}\r\n@media only screen and (max-width: 820px) {\r\n    .sign-in[_ngcontent-%COMP%] {\r\n        width: 18rem;\r\n    }\r\n}\r\n@media only screen and (max-width: 620px) {\r\n    .sign-in[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n        margin-top: 15px;\r\n    }\r\n    button[_ngcontent-%COMP%] {\r\n        font-size: .9rem;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9zaWduLWluL3NpZ24taW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLFlBQVk7SUFDWixxREFBcUQ7SUFDckQsZ0NBQWdDO0FBQ3BDO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIseUJBQXlCO0FBQzdCO0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsdUVBQXVFO0lBQ3ZFLHlCQUF5QjtJQUN6QixlQUFlO0FBQ25CO0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjtBQUVBO0lBQ0ksVUFBVTtJQUNWLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtBQUNoQjtBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25CO0FBRUE7SUFDSSxZQUFZO0lBQ1osY0FBYztJQUNkLG1CQUFtQjtJQUNuQixvQ0FBb0M7SUFDcEMsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWix5QkFBeUI7QUFDN0I7QUFHQTtJQUNJO1FBQ0ksWUFBWTtJQUNoQjtBQUNKO0FBRUE7SUFDSTtRQUNJLFlBQVk7SUFDaEI7QUFDSjtBQUVBO0lBQ0k7UUFDSSxXQUFXO1FBQ1gsZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvc2lnbi1pbi9zaWduLWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lnbi1pbi1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuLnNpZ24taW4ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgd2lkdGg6IDM0cmVtO1xyXG4gICAgYm94LXNoYWRvdzogMTBweCAxMHB4IDUwcHggcmdiYSgyNTUsIDAsIDAsIDAuMikgaW5zZXQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHggNDBweCA1cHggNDBweDtcclxufVxyXG5cclxuaDEge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgaGVpZ2h0OiAzcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHJnYigxNjAsIDE5LCAxOSksIHJnYigxNDUsIDcwLCAxMCkpO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLm5nLWludmFsaWQubmctdG91Y2hlZDpub3QoZm9ybSkge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG59XHJcblxyXG4ubmctdmFsaWQ6bm90KGZvcm0pIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuO1xyXG59XHJcblxyXG4uaGVscC1ibG9jayB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG5cclxuYnV0dG9uOmRpc2FibGVkIHtcclxuICAgIGN1cnNvcjogYXV0bztcclxuICAgIG9wYWNpdHk6IDAuNTtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbC10aXRsZSB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbC1pbnB1dCB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBoZWlnaHQ6IDMuNXJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sLWlucHV0OjpwbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogI2NjYztcclxuICAgIG9wYWNpdHk6IDAuMjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuICBcclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XHJcbiAgICAuc2lnbi1pbiB7XHJcbiAgICAgICAgd2lkdGg6IDI0cmVtO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgyMHB4KSB7XHJcbiAgICAuc2lnbi1pbiB7XHJcbiAgICAgICAgd2lkdGg6IDE4cmVtO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYyMHB4KSB7XHJcbiAgICAuc2lnbi1pbiB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIH1cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAuOXJlbTtcclxuICAgIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignInComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sign-in',
                templateUrl: './sign-in.component.html',
                styleUrls: ['./sign-in.component.css']
            }]
    }], function () { return [{ type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "GYVa":
/*!*****************************************************!*\
  !*** ./src/app/game/roulette/roulette.component.ts ***!
  \*****************************************************/
/*! exports provided: RouletteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouletteComponent", function() { return RouletteComponent; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_socket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/socket.service */ "7fM4");





const _c0 = ["roulette"];
class RouletteComponent {
    constructor(animBuild, socketService, window) {
        this.animBuild = animBuild;
        this.socketService = socketService;
        this.window = window;
        this.timerDiff = 0;
    }
    ngOnInit() {
        this.audio = new Audio();
        this.audio.src = '../../../../assets/roll.mp3';
        this.audio.load();
        this.initialRoulettePosition = parseInt(getComputedStyle(this.roullete.nativeElement).backgroundPositionX.replace('px', ''));
        this.rollObservable$ = this.socketService.fromEvent('roll').subscribe((rolledNumber) => {
            this.audio.play();
            this.rouletteRoll(rolledNumber, -12000, 9000);
            this.rollStatus = 'rolling';
        });
        this.timerDiff$ = this.socketService.fromEvent('timerDiff').subscribe((timeDiff) => {
            this.timerDiff = 9000 + (timeDiff * 1000) > 0 ? 9000 + (timeDiff * 1000) : 0;
        });
        this.rollingObservable$ = this.socketService.fromEvent('rolling').subscribe((rolledNumber) => {
            this.audio.play();
            this.rouletteRoll(rolledNumber, -12000, this.timerDiff);
            this.rollStatus = 'rolling';
        });
        this.restartRollObservable$ = this.socketService.fromEvent('restart').subscribe(() => {
            this.updateRoulette(this.initialRoulettePosition, 2000);
            this.rollStatus = 'normal';
        });
    }
    updateRoulette(position, timer) {
        const rouletteAnimation = this.animBuild.build([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(`${timer}ms cubic-bezier(0.2, 0.1, 0.1, 1)`, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                backgroundPositionX: `${position}px`
            }))
        ]);
        this.animationRoulette = rouletteAnimation.create(this.roullete.nativeElement);
        this.animationRoulette.play();
    }
    rouletteRoll(rolledNumber, position, animTimer) {
        const layout = [1, 14, 2, 13, 3, 12, 4, 0, 11, 5, 10, 6, 9, 7, 8];
        const rollIndex = layout.findIndex((number) => number === rolledNumber);
        if (rollIndex > 7) {
            this.currentPosition = position + this.initialRoulettePosition + (rollIndex - 7) * -100 - this.randomNumber(-49, 49);
        }
        else {
            this.currentPosition = position + this.initialRoulettePosition + (7 + (rollIndex + 1)) * -100 - this.randomNumber(-49, 49);
        }
        this.updateRoulette(this.currentPosition, animTimer);
    }
    randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    onResize($event) {
        this.resizeHandler();
    }
    onOrientaionChange($event) {
        this.resizeHandler();
    }
    resizeHandler() {
        if (this.window.matchMedia('(min-width: 1200px)').matches) {
            if (this.rollStatus == 'normal') {
                this.updateRoulette(-175, 300);
            }
            this.initialRoulettePosition = -175;
        }
        else if (this.window.matchMedia('(max-width: 1200px)').matches
            && this.window.matchMedia('(min-width: 820px)').matches) {
            if (this.rollStatus == 'normal') {
                this.updateRoulette(-350, 300);
            }
            this.initialRoulettePosition = -350;
        }
        else if (this.window.matchMedia('(max-width: 820px)').matches
            && this.window.matchMedia('(min-width: 620px)').matches) {
            if (this.rollStatus == 'normal') {
                this.updateRoulette(-450, 300);
            }
            this.initialRoulettePosition = -450;
        }
        else if (this.window.matchMedia('(max-width: 620px)').matches
            && this.window.matchMedia('(min-width: 420px)').matches) {
            if (this.rollStatus == 'normal') {
                this.updateRoulette(-550, 300);
            }
            this.initialRoulettePosition = -550;
        }
        else {
            if (this.rollStatus == 'normal') {
                this.updateRoulette(-625, 300);
            }
            this.initialRoulettePosition = -625;
        }
    }
    ngOnDestroy() {
        this.rollingObservable$.unsubscribe();
        this.rollObservable$.unsubscribe();
        this.restartRollObservable$.unsubscribe();
        this.timerDiff$.unsubscribe();
    }
}
RouletteComponent.ɵfac = function RouletteComponent_Factory(t) { return new (t || RouletteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_animations__WEBPACK_IMPORTED_MODULE_0__["AnimationBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_socket_service__WEBPACK_IMPORTED_MODULE_2__["SocketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](Window)); };
RouletteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RouletteComponent, selectors: [["app-roulette"]], viewQuery: function RouletteComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.roullete = _t.first);
    } }, decls: 2, vars: 0, consts: [[1, "roulette", 3, "resize", "orientationchange"], ["roulette", ""]], template: function RouletteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("resize", function RouletteComponent_Template_div_resize_0_listener($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"])("orientationchange", function RouletteComponent_Template_div_orientationchange_0_listener($event) { return ctx.onOrientaionChange($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, styles: [".roulette[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 1150px;\r\n    max-width: 1150px;\r\n    height: 115px;\r\n    background-image: url('cases.png');\r\n    background-position-x: -176px;\r\n    color: white;\r\n    margin: 20px auto 0 auto;\r\n}\r\n\r\n.roulette[_ngcontent-%COMP%]::before {\r\n    width: 4px;\r\n    background-color: rgba(197, 0, 0, 0.493);\r\n    content: \"\";\r\n    left: 50%;\r\n    top: 50%;\r\n    height: 100%;\r\n    position: absolute;\r\n    z-index: 2;\r\n    transform: translate(-50%, -50%);\r\n}\r\n\r\n@media only screen and (min-width: 1200px) {\r\n    .roulette[_ngcontent-%COMP%] {\r\n        background-position-x: -175px;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 1200px) {\r\n    .roulette[_ngcontent-%COMP%] {\r\n        width: 800px;\r\n        background-position-x: -350px;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 820px) {\r\n    .roulette[_ngcontent-%COMP%] {\r\n        width: 600px;\r\n        background-position-x: -450px;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 620px) {\r\n    .roulette[_ngcontent-%COMP%] {\r\n        width: 400px;\r\n        background-position-x: -550px;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 420px) {\r\n    .roulette[_ngcontent-%COMP%] {\r\n        width: 250px;\r\n        background-position-x: -625px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS9yb3VsZXR0ZS9yb3VsZXR0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLGtDQUFrRDtJQUNsRCw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVix3Q0FBd0M7SUFDeEMsV0FBVztJQUNYLFNBQVM7SUFDVCxRQUFRO0lBQ1IsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0k7UUFDSSw2QkFBNkI7SUFDakM7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksWUFBWTtRQUNaLDZCQUE2QjtJQUNqQztBQUNKOztBQUVBO0lBQ0k7UUFDSSxZQUFZO1FBQ1osNkJBQTZCO0lBQ2pDO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLFlBQVk7UUFDWiw2QkFBNkI7SUFDakM7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksWUFBWTtRQUNaLDZCQUE2QjtJQUNqQztBQUNKIiwiZmlsZSI6InNyYy9hcHAvZ2FtZS9yb3VsZXR0ZS9yb3VsZXR0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvdWxldHRlIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMTUwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDExNTBweDtcclxuICAgIGhlaWdodDogMTE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9jYXNlcy5wbmcnKTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogLTE3NnB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luOiAyMHB4IGF1dG8gMCBhdXRvO1xyXG59XHJcblxyXG4ucm91bGV0dGU6OmJlZm9yZSB7XHJcbiAgICB3aWR0aDogNHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxOTcsIDAsIDAsIDAuNDkzKTtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuICAgIC5yb3VsZXR0ZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiAtMTc1cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XHJcbiAgICAucm91bGV0dGUge1xyXG4gICAgICAgIHdpZHRoOiA4MDBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IC0zNTBweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MjBweCkge1xyXG4gICAgLnJvdWxldHRlIHtcclxuICAgICAgICB3aWR0aDogNjAwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiAtNDUwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjIwcHgpIHtcclxuICAgIC5yb3VsZXR0ZSB7XHJcbiAgICAgICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogLTU1MHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyMHB4KSB7XHJcbiAgICAucm91bGV0dGUge1xyXG4gICAgICAgIHdpZHRoOiAyNTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IC02MjVweDtcclxuICAgIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RouletteComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-roulette',
                templateUrl: './roulette.component.html',
                styleUrls: ['./roulette.component.css']
            }]
    }], function () { return [{ type: _angular_animations__WEBPACK_IMPORTED_MODULE_0__["AnimationBuilder"] }, { type: src_app_socket_service__WEBPACK_IMPORTED_MODULE_2__["SocketService"] }, { type: Window }]; }, { roullete: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['roulette', { static: true }]
        }] }); })();


/***/ }),

/***/ "HKqw":
/*!***********************************************!*\
  !*** ./src/app/game/timer/timer.component.ts ***!
  \***********************************************/
/*! exports provided: TimerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimerComponent", function() { return TimerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_socket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/socket.service */ "7fM4");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




const _c0 = function (a0) { return { "width": a0 }; };
class TimerComponent {
    constructor(socketService) {
        this.socketService = socketService;
        this.timer = 'Connecting...';
        this.testWidth = 100;
    }
    ngOnInit() {
        this.rollTimer$ = this.socketService.fromEvent('timer').subscribe((timer) => {
            if (timer === 0) {
                this.testWidth = 100;
                this.timer = 'Rolling ...';
            }
            else {
                this.testWidth = 100 - (timer * 6.6);
                this.timer = timer.toString() + ' Sec';
            }
        });
        this.winner$ = this.socketService.fromEvent('winner').subscribe((winnerColor) => {
            if (winnerColor == 'red') {
                this.timer = 'WINNER : RED';
            }
            else if (winnerColor == 'green') {
                this.timer = 'WINNER : GREEN';
            }
            else {
                this.timer = 'WINNER : BLACK';
            }
        });
        this.restartRoll$ = this.socketService.fromEvent('restart').subscribe(() => {
            this.timer = 'Restarting Game...';
        });
    }
    ngOnDestroy() {
        this.rollTimer$.unsubscribe();
        this.restartRoll$.unsubscribe();
        this.winner$.unsubscribe();
    }
}
TimerComponent.ɵfac = function TimerComponent_Factory(t) { return new (t || TimerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_socket_service__WEBPACK_IMPORTED_MODULE_1__["SocketService"])); };
TimerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TimerComponent, selectors: [["app-timer"]], decls: 4, vars: 4, consts: [[1, "timer"], [1, "timer-elapsed", 3, "ngStyle"]], template: function TimerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx.testWidth + "%"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.timer);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"]], styles: [".timer[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    position: relative;\r\n    width: 1150px;\r\n    max-width: 1150px;\r\n    height: 40px;\r\n    margin: 105px auto 0 auto;\r\n    box-shadow: 10px 10px 50px rgba(255, 0, 0, 0.2) inset;\r\n    align-content: center;\r\n    justify-content: center;\r\n    border-radius: 40px;\r\n}\r\n\r\n.timer-elapsed[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    box-shadow: 10px 10px 50px rgba(255, 0, 0, 0.2) inset;\r\n    width: 80%;\r\n    height: 100%;\r\n    transition: width 1s linear;\r\n    border-radius: 40px;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    padding: 0;\r\n    color: white;\r\n    font-size: 2rem;\r\n    font-weight: bold;\r\n    z-index: 2;\r\n}\r\n\r\n@media only screen and (max-width: 1200px) {\r\n    .timer[_ngcontent-%COMP%] {\r\n        width: 800px;\r\n    }\r\n    p[_ngcontent-%COMP%] {\r\n        font-size: 1rem;\r\n        line-height: 40px;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 820px) {\r\n    .timer[_ngcontent-%COMP%] {\r\n        width: 600px;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 620px) {\r\n    .timer[_ngcontent-%COMP%] {\r\n        width: 400px;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 420px) {\r\n    .timer[_ngcontent-%COMP%] {\r\n        width: 250px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS90aW1lci90aW1lci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWix5QkFBeUI7SUFDekIscURBQXFEO0lBQ3JELHFCQUFxQjtJQUNyQix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AscURBQXFEO0lBQ3JELFVBQVU7SUFDVixZQUFZO0lBQ1osMkJBQTJCO0lBQzNCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1YsWUFBWTtJQUNaLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsVUFBVTtBQUNkOztBQUVBO0lBQ0k7UUFDSSxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxlQUFlO1FBQ2YsaUJBQWlCO0lBQ3JCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLFlBQVk7SUFDaEI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksWUFBWTtJQUNoQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxZQUFZO0lBQ2hCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9nYW1lL3RpbWVyL3RpbWVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGltZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMTUwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDExNTBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIG1hcmdpbjogMTA1cHggYXV0byAwIGF1dG87XHJcbiAgICBib3gtc2hhZG93OiAxMHB4IDEwcHggNTBweCByZ2JhKDI1NSwgMCwgMCwgMC4yKSBpbnNldDtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcclxufVxyXG5cclxuLnRpbWVyLWVsYXBzZWQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJveC1zaGFkb3c6IDEwcHggMTBweCA1MHB4IHJnYmEoMjU1LCAwLCAwLCAwLjIpIGluc2V0O1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRyYW5zaXRpb246IHdpZHRoIDFzIGxpbmVhcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbn1cclxuXHJcbnAge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgei1pbmRleDogMjtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuICAgIC50aW1lciB7XHJcbiAgICAgICAgd2lkdGg6IDgwMHB4O1xyXG4gICAgfVxyXG4gICAgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgyMHB4KSB7XHJcbiAgICAudGltZXIge1xyXG4gICAgICAgIHdpZHRoOiA2MDBweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MjBweCkge1xyXG4gICAgLnRpbWVyIHtcclxuICAgICAgICB3aWR0aDogNDAwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDIwcHgpIHtcclxuICAgIC50aW1lciB7XHJcbiAgICAgICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-timer',
                templateUrl: './timer.component.html',
                styleUrls: ['./timer.component.css'],
            }]
    }], function () { return [{ type: src_app_socket_service__WEBPACK_IMPORTED_MODULE_1__["SocketService"] }]; }, null); })();


/***/ }),

/***/ "IaJZ":
/*!********************************************************************!*\
  !*** ./src/app/panel/change-password/change-password.component.ts ***!
  \********************************************************************/
/*! exports provided: ChangePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function() { return ChangePasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/auth/auth.service */ "qXBG");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");








function ChangePasswordComponent_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " password field is required ! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChangePasswordComponent_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " password length must be at least 6 character ! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChangePasswordComponent_span_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " confirm password field is required ! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChangePasswordComponent_span_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " password not match ! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ChangePasswordComponent {
    constructor(auth, toastr, router) {
        this.auth = auth;
        this.toastr = toastr;
        this.router = router;
        this.loading = false;
    }
    ngOnInit() {
        this.changePassForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)]),
            'cpassword': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6), ChangePasswordComponent.matchValues('password')])
        });
        this.isLoading$ = this.auth.loading$.subscribe((isLoading) => {
            this.loading = isLoading;
        });
    }
    onSubmit() {
        const { password, cpassword } = this.changePassForm.value;
        this.changePassword$ = this.auth.changePassword(password, cpassword).subscribe(() => {
            this.toastr.success('your password updated successsfully !', 'Password Update', {
                positionClass: 'toast-bottom-right',
            });
            this.router.navigate(['/panel']);
        });
    }
    static matchValues(matchTo) {
        return (control) => {
            return !!control.parent &&
                !!control.parent.value &&
                control.value === control.parent.controls[matchTo].value
                ? null
                : { isMatching: false };
        };
    }
    ngOnDestroy() {
        this.isLoading$.unsubscribe();
        if (this.changePassword$) {
            this.changePassword$.unsubscribe();
        }
    }
}
ChangePasswordComponent.ɵfac = function ChangePasswordComponent_Factory(t) { return new (t || ChangePasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
ChangePasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChangePasswordComponent, selectors: [["app-change-password"]], decls: 22, vars: 6, consts: [[1, "bg-image"], [1, "container"], [3, "formGroup", "ngSubmit"], [1, "changepassword-container"], [1, "form-control"], ["for", "password", 1, "form-control-title"], ["formControlName", "password", "placeholder", "enter new password", "type", "password", "name", "password", 1, "form-control-input"], ["class", "help-block", 4, "ngIf"], ["for", "cpassword", 1, "form-control-title"], ["formControlName", "cpassword", "placeholder", "Re-enter new password", "type", "password", "name", "cpassword", 1, "form-control-input"], [3, "disabled"], [1, "help-block"]], template: function ChangePasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Change Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Please enter your new password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ChangePasswordComponent_Template_form_ngSubmit_6_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "New Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ChangePasswordComponent_span_12_Template, 2, 0, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ChangePasswordComponent_span_13_Template, 2, 0, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Confirm New Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ChangePasswordComponent_span_18_Template, 2, 0, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ChangePasswordComponent_span_19_Template, 2, 0, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Change Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.changePassForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.changePassForm.get("password").invalid && ctx.changePassForm.get("password").touched && ctx.changePassForm.get("password").errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.changePassForm.get("password").invalid && ctx.changePassForm.get("password").touched && ctx.changePassForm.get("password").errors.minlength);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.changePassForm.get("cpassword").invalid && ctx.changePassForm.get("cpassword").touched && ctx.changePassForm.get("cpassword").errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.changePassForm.get("cpassword").invalid && ctx.changePassForm.get("cpassword").touched && !ctx.changePassForm.get("cpassword").errors.isMatching);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.changePassForm.valid || ctx.loading);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: ["h1[_ngcontent-%COMP%] {\r\n    font-size: 5rem;\r\n    text-transform: uppercase;\r\n    font-weight: bolder;\r\n    background: -webkit-linear-gradient(rgb(124, 14, 14), rgb(80, 6, 6));\r\n    background-clip: text;\r\n    -webkit-background-clip: text;\r\n    -webkit-text-fill-color: transparent;\r\n    margin-top: 90px;\r\n}\r\n\r\nh3[_ngcontent-%COMP%] {\r\n    color: wheat;\r\n    margin-top: 0;\r\n    text-transform: uppercase;\r\n}\r\n\r\nh3[_ngcontent-%COMP%]::after {\r\n    content: ' \uD83D\uDC4C'\r\n}\r\n\r\n.bg-image[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    height: 100vh;\r\n    width: 100vw;\r\n    background-image: url('roulette.jpg');\r\n    background-repeat: no-repeat, repeat;\r\n    background-position: center;\r\n    background-size: cover;\r\n    filter: grayscale(30%);\r\n    z-index: 1;\r\n    transition: filter 1s;\r\n}\r\n\r\n.bg-image[_ngcontent-%COMP%]::after {\r\n    content: '';\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    background-color: rgba(0, 0, 0, 0.8);\r\n    width: 100vw;\r\n    height: 100vh;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    width: 100%;\r\n}\r\n\r\n.container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    z-index: 2;\r\n}\r\n\r\n.changepassword-container[_ngcontent-%COMP%] {\r\n    border-top: 1px solid #e56332;\r\n    padding: 120px;\r\n    background-color: rgba(0, 0, 0, .4);\r\n    border-radius: 100px;\r\n    display: flex;\r\n    margin: 0 auto;\r\n    flex-direction: column ;\r\n    justify-content: space-around;\r\n    flex-wrap: wrap;\r\n    width: 1150px;\r\n    margin-bottom: 20px;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n    background: -webkit-linear-gradient(rgb(124, 14, 14), rgb(80, 6, 6));\r\n    width: 100%;\r\n    height: 5rem;\r\n    background-color: #940a0a;\r\n    border: none;\r\n    border-radius: 25px;\r\n    color: white;\r\n    font-size: 2rem;\r\n    font-style: italic;\r\n    cursor: pointer;\r\n    font-weight: bold;\r\n    text-transform: uppercase;\r\n    opacity: .7;\r\n    margin-top: 20px;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:last-child {\r\n    background: -webkit-linear-gradient(rgb(124, 14, 14), rgb(250, 105, 8));\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:hover {\r\n    background: -webkit-linear-gradient(rgb(146, 31, 31), rgb(179, 87, 12));\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:disabled {\r\n    cursor: auto;\r\n    opacity: 0.5;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:disabled:hover {\r\n    background: -webkit-linear-gradient(rgb(124, 14, 14), rgb(250, 105, 8));\r\n}\r\n\r\n.form-control-title[_ngcontent-%COMP%] {\r\n    font-weight: bold;\r\n    font-style: italic;\r\n    font-size: 1rem;\r\n    color: wheat;\r\n}\r\n\r\n.form-control-input[_ngcontent-%COMP%] {\r\n    border: none;\r\n    height: 3.5rem;\r\n    border-radius: 10px;\r\n    background-color: rgba(66, 9, 9, 0.5);\r\n    color: white;\r\n    text-align: center;\r\n    display: block;\r\n    margin-top: 15px;\r\n    margin-bottom: 15px;\r\n    width: 100%;\r\n}\r\n\r\n.form-control-input[_ngcontent-%COMP%]::placeholder {\r\n    color: #ccc;\r\n    opacity: 0.2;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.ng-invalid.ng-touched[_ngcontent-%COMP%]:not(form) {\r\n    border: 1px solid red;\r\n}\r\n\r\n.ng-valid[_ngcontent-%COMP%]:not(form) {\r\n    border: 1px solid green;\r\n}\r\n\r\n.help-block[_ngcontent-%COMP%] {\r\n    color: red;\r\n    display: block;\r\n    margin-bottom: 15px;\r\n    margin-left: 5px;\r\n}\r\n\r\n@media only screen and (max-width: 1200px) {\r\n    .changepassword-container[_ngcontent-%COMP%] {\r\n        width: 800px;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 830px) {\r\n    h1[_ngcontent-%COMP%] {\r\n        font-size: 4rem;\r\n    }\r\n    .changepassword-container[_ngcontent-%COMP%] {\r\n        width: 600px;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 660px) {\r\n    h1[_ngcontent-%COMP%] {\r\n        font-size: 3rem;\r\n    }\r\n\r\n    .changepassword-container[_ngcontent-%COMP%] {\r\n        width: 450px;\r\n        padding: 80px;\r\n    }\r\n    \r\n}\r\n\r\n@media only screen and (max-width: 460px) {\r\n    h1[_ngcontent-%COMP%] {\r\n        font-size: 2rem;\r\n    }\r\n\r\n    .changepassword-container[_ngcontent-%COMP%] {\r\n        width: 300px;\r\n        padding: 30px;\r\n        border-radius: 30px;\r\n    }\r\n\r\n    button[_ngcontent-%COMP%] {\r\n        font-size: 1.1rem;\r\n    }\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFuZWwvY2hhbmdlLXBhc3N3b3JkL2NoYW5nZS1wYXNzd29yZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsb0VBQW9FO0lBQ3BFLHFCQUFxQjtJQUNyQiw2QkFBNkI7SUFDN0Isb0NBQW9DO0lBQ3BDLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLGVBQWU7SUFDZixNQUFNO0lBQ04sT0FBTztJQUNQLGFBQWE7SUFDYixZQUFZO0lBQ1oscUNBQXFEO0lBQ3JELG9DQUFvQztJQUNwQywyQkFBMkI7SUFDM0Isc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1YscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLG9DQUFvQztJQUNwQyxZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixjQUFjO0lBQ2QsbUNBQW1DO0lBQ25DLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2IsY0FBYztJQUNkLHVCQUF1QjtJQUN2Qiw2QkFBNkI7SUFDN0IsZUFBZTtJQUNmLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxvRUFBb0U7SUFDcEUsV0FBVztJQUNYLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksdUVBQXVFO0FBQzNFOztBQUVBO0lBQ0ksdUVBQXVFO0FBQzNFOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx1RUFBdUU7QUFDM0U7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIscUNBQXFDO0lBQ3JDLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSTtRQUNJLFlBQVk7SUFDaEI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksWUFBWTtJQUNoQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksWUFBWTtRQUNaLGFBQWE7SUFDakI7O0FBRUo7O0FBRUE7SUFDSTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxZQUFZO1FBQ1osYUFBYTtRQUNiLG1CQUFtQjtJQUN2Qjs7SUFFQTtRQUNJLGlCQUFpQjtJQUNyQjs7QUFFSiIsImZpbGUiOiJzcmMvYXBwL3BhbmVsL2NoYW5nZS1wYXNzd29yZC9jaGFuZ2UtcGFzc3dvcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxIHtcclxuICAgIGZvbnQtc2l6ZTogNXJlbTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQocmdiKDEyNCwgMTQsIDE0KSwgcmdiKDgwLCA2LCA2KSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIG1hcmdpbi10b3A6IDkwcHg7XHJcbn1cclxuXHJcbmgzIHtcclxuICAgIGNvbG9yOiB3aGVhdDtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG5oMzo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyDwn5GMJ1xyXG59XHJcblxyXG4uYmctaW1hZ2Uge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9yb3VsZXR0ZS5qcGcnKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQsIHJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBmaWx0ZXI6IGdyYXlzY2FsZSgzMCUpO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHRyYW5zaXRpb246IGZpbHRlciAxcztcclxufVxyXG5cclxuLmJnLWltYWdlOjphZnRlciB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY29udGFpbmVyID4gKiB7XHJcbiAgICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG4uY2hhbmdlcGFzc3dvcmQtY29udGFpbmVyIHtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTU2MzMyO1xyXG4gICAgcGFkZGluZzogMTIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC40KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbiA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIHdpZHRoOiAxMTUwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQocmdiKDEyNCwgMTQsIDE0KSwgcmdiKDgwLCA2LCA2KSk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNXJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5NDBhMGE7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgb3BhY2l0eTogLjc7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG5idXR0b246bGFzdC1jaGlsZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChyZ2IoMTI0LCAxNCwgMTQpLCByZ2IoMjUwLCAxMDUsIDgpKTtcclxufVxyXG5cclxuYnV0dG9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHJnYigxNDYsIDMxLCAzMSksIHJnYigxNzksIDg3LCAxMikpO1xyXG59XHJcblxyXG5idXR0b246ZGlzYWJsZWQge1xyXG4gICAgY3Vyc29yOiBhdXRvO1xyXG4gICAgb3BhY2l0eTogMC41O1xyXG59XHJcblxyXG5idXR0b246ZGlzYWJsZWQ6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQocmdiKDEyNCwgMTQsIDE0KSwgcmdiKDI1MCwgMTA1LCA4KSk7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2wtdGl0bGUge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBjb2xvcjogd2hlYXQ7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2wtaW5wdXQge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgaGVpZ2h0OiAzLjVyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2NiwgOSwgOSwgMC41KTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbC1pbnB1dDo6cGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6ICNjY2M7XHJcbiAgICBvcGFjaXR5OiAwLjI7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG4ubmctaW52YWxpZC5uZy10b3VjaGVkOm5vdChmb3JtKSB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XHJcbn1cclxuXHJcbi5uZy12YWxpZDpub3QoZm9ybSkge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XHJcbn1cclxuXHJcbi5oZWxwLWJsb2NrIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xyXG4gICAgLmNoYW5nZXBhc3N3b3JkLWNvbnRhaW5lciB7XHJcbiAgICAgICAgd2lkdGg6IDgwMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgzMHB4KSB7XHJcbiAgICBoMSB7XHJcbiAgICAgICAgZm9udC1zaXplOiA0cmVtO1xyXG4gICAgfVxyXG4gICAgLmNoYW5nZXBhc3N3b3JkLWNvbnRhaW5lciB7XHJcbiAgICAgICAgd2lkdGg6IDYwMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY2MHB4KSB7XHJcbiAgICBoMSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAzcmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5jaGFuZ2VwYXNzd29yZC1jb250YWluZXIge1xyXG4gICAgICAgIHdpZHRoOiA0NTBweDtcclxuICAgICAgICBwYWRkaW5nOiA4MHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDYwcHgpIHtcclxuICAgIGgxIHtcclxuICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLmNoYW5nZXBhc3N3b3JkLWNvbnRhaW5lciB7XHJcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIH1cclxuXHJcbiAgICBidXR0b24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgfVxyXG5cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChangePasswordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-change-password',
                templateUrl: './change-password.component.html',
                styleUrls: ['./change-password.component.css']
            }]
    }], function () { return [{ type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "JhD/":
/*!**********************************************!*\
  !*** ./src/app/landing/landing.component.ts ***!
  \**********************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





class LandingComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        this.buttonState = 'start';
        this.gameButtonInterval$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(1100).subscribe(() => {
            this.buttonState == 'start' ? this.buttonState = 'end' : this.buttonState = 'start';
        });
    }
    playSound() {
        this.audio = new Audio();
        this.audio.src = '../../../assets/sound.ogg';
        this.audio.load();
        this.audio.play();
        this.router.navigate(['/game']);
    }
    ngOnDestroy() {
        this.gameButtonInterval$.unsubscribe();
    }
}
LandingComponent.ɵfac = function LandingComponent_Factory(t) { return new (t || LandingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
LandingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LandingComponent, selectors: [["app-landing"]], decls: 6, vars: 1, consts: [[1, "bg-image"], [1, "container"], [3, "click"]], template: function LandingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Welcome To Beroul ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingComponent_Template_button_click_4_listener() { return ctx.playSound(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Start The Game");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@startGameState", ctx.buttonState);
    } }, styles: ["h1[_ngcontent-%COMP%] {\r\n    font-size: 6rem;\r\n    color:#ffffff;\r\n    font-weight: bolder;\r\n    background: -webkit-linear-gradient(rgb(124, 14, 14), rgb(80, 6, 6));\r\n    background-clip: text;\r\n    -webkit-background-clip: text;\r\n    -webkit-text-fill-color: transparent;\r\n}\r\n\r\n.bg-image[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    height: 100vh;\r\n    width: 100vw;\r\n    background-image: url('roulette.jpg');\r\n    background-repeat: no-repeat, repeat;\r\n    background-position: center;\r\n    background-size: cover;\r\n    filter: blur(6px);\r\n    z-index: 1;\r\n    transition: filter 1s;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    width: 100%;\r\n    height: 100vh;\r\n}\r\n\r\n.container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    z-index: 2;\r\n}\r\n\r\n.bg-image[_ngcontent-%COMP%]::after {\r\n    content: '';\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    background-color: rgba(0, 0, 0, 0.7);\r\n    width: 100vw;\r\n    height: 100vh;\r\n}\r\n\r\n.bg-image[_ngcontent-%COMP%]:hover {\r\n    filter: blur(2px);\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n    background: -webkit-linear-gradient(rgb(124, 14, 14), rgb(80, 6, 6));\r\n    width: 25rem;\r\n    height: 4rem;\r\n    background-color: #940a0a;\r\n    border: none;\r\n    border-radius: 15px;\r\n    color: white;\r\n    font-size: 2rem;\r\n    font-style: italic;\r\n    cursor: pointer;\r\n    font-weight: bold;\r\n}\r\n\r\n@media only screen and (max-width: 800px) {\r\n    h1[_ngcontent-%COMP%] {\r\n        font-size: 4rem;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 620px) {\r\n    h1[_ngcontent-%COMP%] {\r\n        font-size: 3rem;\r\n    }\r\n    button[_ngcontent-%COMP%] {\r\n        width: 200px;\r\n        font-size: .9rem;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 420px) {\r\n    h1[_ngcontent-%COMP%] {\r\n        font-size: 2rem;\r\n    }\r\n    button[_ngcontent-%COMP%] {\r\n        width: 200px;\r\n        font-size: .9rem;\r\n        height: 2rem;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixvRUFBb0U7SUFDcEUscUJBQXFCO0lBQ3JCLDZCQUE2QjtJQUM3QixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsTUFBTTtJQUNOLE9BQU87SUFDUCxhQUFhO0lBQ2IsWUFBWTtJQUNaLHFDQUFrRDtJQUNsRCxvQ0FBb0M7SUFDcEMsMkJBQTJCO0lBQzNCLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsVUFBVTtJQUNWLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxvQ0FBb0M7SUFDcEMsWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxvRUFBb0U7SUFDcEUsWUFBWTtJQUNaLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0k7UUFDSSxlQUFlO0lBQ25CO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLFlBQVk7UUFDWixnQkFBZ0I7SUFDcEI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksWUFBWTtRQUNaLGdCQUFnQjtRQUNoQixZQUFZO0lBQ2hCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9sYW5kaW5nL2xhbmRpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxIHtcclxuICAgIGZvbnQtc2l6ZTogNnJlbTtcclxuICAgIGNvbG9yOiNmZmZmZmY7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQocmdiKDEyNCwgMTQsIDE0KSwgcmdiKDgwLCA2LCA2KSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLmJnLWltYWdlIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvcm91bGV0dGUuanBnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0LCByZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgZmlsdGVyOiBibHVyKDZweCk7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgdHJhbnNpdGlvbjogZmlsdGVyIDFzO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG4uY29udGFpbmVyID4gKiB7XHJcbiAgICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG4uYmctaW1hZ2U6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbi5iZy1pbWFnZTpob3ZlciB7XHJcbiAgICBmaWx0ZXI6IGJsdXIoMnB4KTtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHJnYigxMjQsIDE0LCAxNCksIHJnYig4MCwgNiwgNikpO1xyXG4gICAgd2lkdGg6IDI1cmVtO1xyXG4gICAgaGVpZ2h0OiA0cmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzk0MGEwYTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gICAgaDEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNHJlbTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MjBweCkge1xyXG4gICAgaDEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICAgIH1cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogLjlyZW07XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDIwcHgpIHtcclxuICAgIGgxIHtcclxuICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICB9XHJcbiAgICBidXR0b24ge1xyXG4gICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICBmb250LXNpemU6IC45cmVtO1xyXG4gICAgICAgIGhlaWdodDogMnJlbTtcclxuICAgIH1cclxufSJdfQ== */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('startGameState', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('start', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                    transform: 'rotate(0deg) scale(1)',
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('end', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                    transform: 'rotate(8deg) scale(1.5)',
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('start => end', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('1000ms ease-in-out')
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('end => start', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('1000ms ease-in-out')
                ])
            ])
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-landing',
                templateUrl: './landing.component.html',
                styleUrls: ['./landing.component.css'],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('startGameState', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('start', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            transform: 'rotate(0deg) scale(1)',
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('end', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            transform: 'rotate(8deg) scale(1.5)',
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('start => end', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('1000ms ease-in-out')
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('end => start', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('1000ms ease-in-out')
                        ])
                    ])
                ]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "LS6v":
/*!****************************************!*\
  !*** ./src/app/auth/auth.component.ts ***!
  \****************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sign-up/sign-up.component */ "Qv8w");
/* harmony import */ var _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sign-in/sign-in.component */ "G11N");




class AuthComponent {
    constructor() { }
    ngOnInit() {
    }
}
AuthComponent.ɵfac = function AuthComponent_Factory(t) { return new (t || AuthComponent)(); };
AuthComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuthComponent, selectors: [["app-auth"]], decls: 6, vars: 0, consts: [[1, "bg-image"], [1, "container"], [1, "auth-container"], [1, "indicator"]], template: function AuthComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-sign-up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-sign-in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_1__["SignUpComponent"], _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_2__["SignInComponent"]], styles: [".container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    width: 100%;\r\n}\r\n\r\n.container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    z-index: 2;\r\n}\r\n\r\n.bg-image[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    height: 100vh;\r\n    width: 100vw;\r\n    background-image: url('roulette.jpg');\r\n    background-repeat: no-repeat, repeat;\r\n    background-position: center;\r\n    background-size: cover;\r\n    filter: grayscale(30%);\r\n    z-index: 1;\r\n    transition: filter 1s;\r\n}\r\n\r\n.bg-image[_ngcontent-%COMP%]::after {\r\n    content: '';\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    background-color: rgba(0, 0, 0, 0.8);\r\n    width: 100vw;\r\n    height: 100vh;\r\n}\r\n\r\n.auth-container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    flex-wrap: wrap;\r\n    position: relative;\r\n    width: 1150px;\r\n    max-width: 1150px;\r\n    color: white;\r\n    margin-top: 120px;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.indicator[_ngcontent-%COMP%] {\r\n    width: 2px;\r\n    height: 100%;\r\n    background-color: rgba(173, 23, 23, 0.5);\r\n}\r\n\r\n@media only screen and (max-width: 1200px) {\r\n    .auth-container[_ngcontent-%COMP%] {\r\n        width: 800px;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 820px) {\r\n    .auth-container[_ngcontent-%COMP%] {\r\n        width: 600px;\r\n    }\r\n    h1[_ngcontent-%COMP%] {\r\n        color: red;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 620px) {\r\n    .auth-container[_ngcontent-%COMP%] {\r\n        flex-direction: column;\r\n        width: 400px;\r\n        height: auto;\r\n    }\r\n\r\n    .indicator[_ngcontent-%COMP%] {\r\n        display: none;\r\n    }\r\n\r\n}\r\n\r\n@media only screen and (max-width: 420px) {\r\n    .auth-container[_ngcontent-%COMP%] {\r\n        flex-direction: column;\r\n        width: 250px;\r\n        height: auto;\r\n    }\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9hdXRoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsTUFBTTtJQUNOLE9BQU87SUFDUCxhQUFhO0lBQ2IsWUFBWTtJQUNaLHFDQUFrRDtJQUNsRCxvQ0FBb0M7SUFDcEMsMkJBQTJCO0lBQzNCLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxvQ0FBb0M7SUFDcEMsWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJO1FBQ0ksWUFBWTtJQUNoQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxVQUFVO0lBQ2Q7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksc0JBQXNCO1FBQ3RCLFlBQVk7UUFDWixZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksYUFBYTtJQUNqQjs7QUFFSjs7QUFFQTtJQUNJO1FBQ0ksc0JBQXNCO1FBQ3RCLFlBQVk7UUFDWixZQUFZO0lBQ2hCOztBQUVKIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9hdXRoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY29udGFpbmVyID4gKiB7XHJcbiAgICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG4uYmctaW1hZ2Uge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9yb3VsZXR0ZS5qcGcnKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQsIHJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBmaWx0ZXI6IGdyYXlzY2FsZSgzMCUpO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHRyYW5zaXRpb246IGZpbHRlciAxcztcclxufVxyXG5cclxuLmJnLWltYWdlOjphZnRlciB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG4uYXV0aC1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTE1MHB4O1xyXG4gICAgbWF4LXdpZHRoOiAxMTUwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW4tdG9wOiAxMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5pbmRpY2F0b3Ige1xyXG4gICAgd2lkdGg6IDJweDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTczLCAyMywgMjMsIDAuNSk7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XHJcbiAgICAuYXV0aC1jb250YWluZXIge1xyXG4gICAgICAgIHdpZHRoOiA4MDBweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MjBweCkge1xyXG4gICAgLmF1dGgtY29udGFpbmVyIHtcclxuICAgICAgICB3aWR0aDogNjAwcHg7XHJcbiAgICB9XHJcbiAgICBoMSB7XHJcbiAgICAgICAgY29sb3I6IHJlZDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MjBweCkge1xyXG4gICAgLmF1dGgtY29udGFpbmVyIHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIHdpZHRoOiA0MDBweDtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB9XHJcblxyXG4gICAgLmluZGljYXRvciB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDIwcHgpIHtcclxuICAgIC5hdXRoLWNvbnRhaW5lciB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICB3aWR0aDogMjUwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-auth',
                templateUrl: './auth.component.html',
                styleUrls: ['./auth.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Qv8w":
/*!***************************************************!*\
  !*** ./src/app/auth/sign-up/sign-up.component.ts ***!
  \***************************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "qXBG");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");








function SignUpComponent_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " username field is required ! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignUpComponent_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " username field must be 6 character at least ! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignUpComponent_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " wrong username format ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignUpComponent_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " email field is required ! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignUpComponent_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " please enter valid email address ! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignUpComponent_span_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " password field is required ! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignUpComponent_span_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " password length must be at least 6 character ! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignUpComponent_span_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " confirm password field is required ! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignUpComponent_span_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " password not match ! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class SignUpComponent {
    constructor(authService, toastr, router) {
        this.authService = authService;
        this.toastr = toastr;
        this.router = router;
        this.loading = false;
    }
    ngOnInit() {
        this.loading$ = this.authService.loading$.subscribe(isLoading => {
            this.loading = isLoading;
        });
        this.signUpForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'username': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[A-Za-z0-9]+/)]),
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)]),
            'cpassword': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6), SignUpComponent.matchValues('password')])
        });
    }
    static matchValues(matchTo) {
        return (control) => {
            return !!control.parent &&
                !!control.parent.value &&
                control.value === control.parent.controls[matchTo].value
                ? null
                : { isMatching: false };
        };
    }
    onSubmit() {
        const { username, email, password, cpassword } = this.signUpForm.value;
        this
            .authService
            .register(username, email, password, cpassword)
            .subscribe(() => {
            this.toastr.success('your account created successfully , please check your email for activating account !', 'Sign up', {
                positionClass: 'toast-bottom-right',
            });
        });
    }
    ngOnDestroy() {
        this.loading$.unsubscribe();
    }
}
SignUpComponent.ɵfac = function SignUpComponent_Factory(t) { return new (t || SignUpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
SignUpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignUpComponent, selectors: [["app-sign-up"]], decls: 31, vars: 12, consts: [[1, "sign-up"], [3, "formGroup", "ngSubmit"], [1, "form-control"], ["for", "username", 1, "form-control-title"], ["name", "username", "formControlName", "username", "placeholder", "Enter username", "type", "text", 1, "form-control-input"], ["class", "help-block", 4, "ngIf"], ["for", "email", 1, "form-control-title"], ["name", "email", "formControlName", "email", "placeholder", "Enter email", "type", "text", 1, "form-control-input"], ["for", "password", 1, "form-control-title"], ["name", "password", "formControlName", "password", "placeholder", "Enter password", "type", "password", 1, "form-control-input"], ["for", "cpassword", 1, "form-control-title"], ["name", "cpassword", "formControlName", "cpassword", "placeholder", "Enter password", "type", "password", 1, "form-control-input"], ["type", "submit", 3, "disabled"], [1, "help-block"]], template: function SignUpComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Sign up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SignUpComponent_Template_form_ngSubmit_3_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Username: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SignUpComponent_span_8_Template, 2, 0, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SignUpComponent_span_9_Template, 2, 0, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SignUpComponent_span_10_Template, 2, 0, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Email: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, SignUpComponent_span_15_Template, 2, 0, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, SignUpComponent_span_16_Template, 2, 0, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Password: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, SignUpComponent_span_21_Template, 2, 0, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, SignUpComponent_span_22_Template, 2, 0, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Confirm Password: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, SignUpComponent_span_27_Template, 2, 0, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, SignUpComponent_span_28_Template, 2, 0, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.signUpForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.signUpForm.get("username").invalid && ctx.signUpForm.get("username").touched && ctx.signUpForm.get("username").errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.signUpForm.get("username").invalid && ctx.signUpForm.get("username").touched && ctx.signUpForm.get("username").errors.minlength);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.signUpForm.get("username").invalid && ctx.signUpForm.get("username").touched && ctx.signUpForm.get("username").errors.pattern);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.signUpForm.get("email").invalid && ctx.signUpForm.get("email").touched && ctx.signUpForm.get("email").errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.signUpForm.get("email").invalid && ctx.signUpForm.get("email").touched && ctx.signUpForm.get("email").errors.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.signUpForm.get("password").invalid && ctx.signUpForm.get("password").touched && ctx.signUpForm.get("password").errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.signUpForm.get("password").invalid && ctx.signUpForm.get("password").touched && ctx.signUpForm.get("password").errors.minlength);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.signUpForm.get("cpassword").invalid && ctx.signUpForm.get("cpassword").touched && ctx.signUpForm.get("cpassword").errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.signUpForm.get("cpassword").invalid && ctx.signUpForm.get("cpassword").touched && !ctx.signUpForm.get("cpassword").errors.isMatching);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.signUpForm.valid || ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.loading ? "Please wait ..." : "Sign Up Now !");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: [".sign-up[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 20px;\r\n    width: 34rem;\r\n    box-shadow: 10px 10px 50px rgba(255, 0, 0, 0.2) inset;\r\n    border-radius: 5px 40px 5px 40px;\r\n    height: 100%;\r\n}\r\n\r\n.ng-invalid.ng-touched[_ngcontent-%COMP%]:not(form) {\r\n    border: 1px solid red;\r\n}\r\n\r\n.ng-valid[_ngcontent-%COMP%]:not(form) {\r\n    border: 1px solid green;\r\n}\r\n\r\n.help-block[_ngcontent-%COMP%] {\r\n    color: red;\r\n    display: block;\r\n    margin-bottom: 15px;\r\n    margin-left: 5px;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    border: none;\r\n    height: 3rem;\r\n    font-weight: bolder;\r\n    font-size: 1.2rem;\r\n    color: white;\r\n    border-radius: 10px;\r\n    background: -webkit-linear-gradient(rgb(17, 124, 3), rgb(26, 102, 7));\r\n    text-transform: uppercase;\r\n    cursor: pointer;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:disabled {\r\n    cursor: auto;\r\n    opacity: 0.5;\r\n}\r\n\r\n.form-control-title[_ngcontent-%COMP%] {\r\n    display: block;\r\n    font-weight: bold;\r\n    font-style: italic;\r\n    font-size: 1rem;\r\n}\r\n\r\n.form-control-input[_ngcontent-%COMP%] {\r\n    border: none;\r\n    height: 3.5rem;\r\n    border-radius: 10px;\r\n    background-color: rgba(0, 0, 0, 0.5);\r\n    color: white;\r\n    text-align: center;\r\n    width: 100%;\r\n    margin-top: 15px;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.form-control-input[_ngcontent-%COMP%]::placeholder {\r\n    color: #ccc;\r\n    opacity: 0.2;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.form-control-input[_ngcontent-%COMP%]::placeholder {\r\n    color: #ccc;\r\n    opacity: 0.2;\r\n}\r\n\r\n@media only screen and (max-width: 1200px) {\r\n    .sign-up[_ngcontent-%COMP%] {\r\n        width: 24rem;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 820px) {\r\n    .sign-up[_ngcontent-%COMP%] {\r\n        width: 18rem;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 620px) {\r\n    .sign-up[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n        margin-bottom: 15px;\r\n    }\r\n    button[_ngcontent-%COMP%] {\r\n        font-size: .9rem;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9zaWduLXVwL3NpZ24tdXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLFlBQVk7SUFDWixxREFBcUQ7SUFDckQsZ0NBQWdDO0lBQ2hDLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHFFQUFxRTtJQUNyRSx5QkFBeUI7SUFDekIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLG9DQUFvQztJQUNwQyxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJO1FBQ0ksWUFBWTtJQUNoQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxZQUFZO0lBQ2hCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLFdBQVc7UUFDWCxtQkFBbUI7SUFDdkI7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9zaWduLXVwL3NpZ24tdXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWduLXVwIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIHdpZHRoOiAzNHJlbTtcclxuICAgIGJveC1zaGFkb3c6IDEwcHggMTBweCA1MHB4IHJnYmEoMjU1LCAwLCAwLCAwLjIpIGluc2V0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4IDQwcHggNXB4IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5uZy1pbnZhbGlkLm5nLXRvdWNoZWQ6bm90KGZvcm0pIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxufVxyXG5cclxuLm5nLXZhbGlkOm5vdChmb3JtKSB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcclxufVxyXG5cclxuLmhlbHAtYmxvY2sge1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuXHJcbmgxIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGhlaWdodDogM3JlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChyZ2IoMTcsIDEyNCwgMyksIHJnYigyNiwgMTAyLCA3KSk7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5idXR0b246ZGlzYWJsZWQge1xyXG4gICAgY3Vyc29yOiBhdXRvO1xyXG4gICAgb3BhY2l0eTogMC41O1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sLXRpdGxlIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2wtaW5wdXQge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgaGVpZ2h0OiAzLjVyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbC1pbnB1dDo6cGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6ICNjY2M7XHJcbiAgICBvcGFjaXR5OiAwLjI7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sLWlucHV0OjpwbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogI2NjYztcclxuICAgIG9wYWNpdHk6IDAuMjtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuICAgIC5zaWduLXVwIHtcclxuICAgICAgICB3aWR0aDogMjRyZW07XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODIwcHgpIHtcclxuICAgIC5zaWduLXVwIHtcclxuICAgICAgICB3aWR0aDogMThyZW07XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjIwcHgpIHtcclxuICAgIC5zaWduLXVwIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgfVxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgICBmb250LXNpemU6IC45cmVtO1xyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignUpComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sign-up',
                templateUrl: './sign-up.component.html',
                styleUrls: ['./sign-up.component.css']
            }]
    }], function () { return [{ type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppComponent {
    constructor() {
        this.title = 'roulette';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var ng9_odometer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng9-odometer */ "dzYL");
/* harmony import */ var ngx_easy_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-easy-table */ "FTbq");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./landing/landing.component */ "JhD/");
/* harmony import */ var _game_game_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./game/game.component */ "jBAD");
/* harmony import */ var _game_roulette_roulette_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./game/roulette/roulette.component */ "GYVa");
/* harmony import */ var _game_timer_timer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./game/timer/timer.component */ "HKqw");
/* harmony import */ var _game_bet_bet_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./game/bet/bet.component */ "ijqx");
/* harmony import */ var _game_latest_roll_latest_roll_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./game/latest-roll/latest-roll.component */ "vSbF");
/* harmony import */ var _game_bet_control_bet_control_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./game/bet-control/bet-control.component */ "2++q");
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./auth/auth.component */ "LS6v");
/* harmony import */ var _auth_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./auth/sign-up/sign-up.component */ "Qv8w");
/* harmony import */ var _auth_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./auth/sign-in/sign-in.component */ "G11N");
/* harmony import */ var _auth_sign_in_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./auth/sign-in/reset-password/reset-password.component */ "eN75");
/* harmony import */ var _auth_activation_activation_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./auth/activation/activation.component */ "/QAi");
/* harmony import */ var _panel_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./panel/dashboard/dashboard.component */ "iqiX");
/* harmony import */ var _panel_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./panel/change-password/change-password.component */ "IaJZ");
/* harmony import */ var _panel_charge_account_charge_account_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./panel/charge-account/charge-account.component */ "k6Nf");
/* harmony import */ var _panel_bet_history_bet_history_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./panel/bet-history/bet-history.component */ "AdIF");
/* harmony import */ var _panel_support_support_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./panel/support/support.component */ "/8S7");































class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [{ provide: Window, useValue: window }], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrModule"].forRoot(),
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            ng9_odometer__WEBPACK_IMPORTED_MODULE_6__["Ng9OdometerModule"].forRoot(),
            ngx_easy_table__WEBPACK_IMPORTED_MODULE_7__["TableModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"],
        _landing_landing_component__WEBPACK_IMPORTED_MODULE_11__["LandingComponent"],
        _game_game_component__WEBPACK_IMPORTED_MODULE_12__["GameComponent"],
        _game_roulette_roulette_component__WEBPACK_IMPORTED_MODULE_13__["RouletteComponent"],
        _game_timer_timer_component__WEBPACK_IMPORTED_MODULE_14__["TimerComponent"],
        _game_bet_bet_component__WEBPACK_IMPORTED_MODULE_15__["BetComponent"],
        _game_latest_roll_latest_roll_component__WEBPACK_IMPORTED_MODULE_16__["LatestRollComponent"],
        _game_bet_control_bet_control_component__WEBPACK_IMPORTED_MODULE_17__["BetControlComponent"],
        _auth_auth_component__WEBPACK_IMPORTED_MODULE_18__["AuthComponent"],
        _auth_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_19__["SignUpComponent"],
        _auth_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_20__["SignInComponent"],
        _auth_sign_in_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_21__["ResetPasswordComponent"],
        _auth_activation_activation_component__WEBPACK_IMPORTED_MODULE_22__["ActivationComponent"],
        _panel_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_23__["DashboardComponent"],
        _panel_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_24__["ChangePasswordComponent"],
        _panel_charge_account_charge_account_component__WEBPACK_IMPORTED_MODULE_25__["ChargeAccountComponent"],
        _panel_bet_history_bet_history_component__WEBPACK_IMPORTED_MODULE_26__["BetHistoryComponent"],
        _panel_support_support_component__WEBPACK_IMPORTED_MODULE_27__["SupportComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], ng9_odometer__WEBPACK_IMPORTED_MODULE_6__["Ng9OdometerModule"], ngx_easy_table__WEBPACK_IMPORTED_MODULE_7__["TableModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"],
                    _landing_landing_component__WEBPACK_IMPORTED_MODULE_11__["LandingComponent"],
                    _game_game_component__WEBPACK_IMPORTED_MODULE_12__["GameComponent"],
                    _game_roulette_roulette_component__WEBPACK_IMPORTED_MODULE_13__["RouletteComponent"],
                    _game_timer_timer_component__WEBPACK_IMPORTED_MODULE_14__["TimerComponent"],
                    _game_bet_bet_component__WEBPACK_IMPORTED_MODULE_15__["BetComponent"],
                    _game_latest_roll_latest_roll_component__WEBPACK_IMPORTED_MODULE_16__["LatestRollComponent"],
                    _game_bet_control_bet_control_component__WEBPACK_IMPORTED_MODULE_17__["BetControlComponent"],
                    _auth_auth_component__WEBPACK_IMPORTED_MODULE_18__["AuthComponent"],
                    _auth_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_19__["SignUpComponent"],
                    _auth_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_20__["SignInComponent"],
                    _auth_sign_in_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_21__["ResetPasswordComponent"],
                    _auth_activation_activation_component__WEBPACK_IMPORTED_MODULE_22__["ActivationComponent"],
                    _panel_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_23__["DashboardComponent"],
                    _panel_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_24__["ChangePasswordComponent"],
                    _panel_charge_account_charge_account_component__WEBPACK_IMPORTED_MODULE_25__["ChargeAccountComponent"],
                    _panel_bet_history_bet_history_component__WEBPACK_IMPORTED_MODULE_26__["BetHistoryComponent"],
                    _panel_support_support_component__WEBPACK_IMPORTED_MODULE_27__["SupportComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrModule"].forRoot(),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                    ng9_odometer__WEBPACK_IMPORTED_MODULE_6__["Ng9OdometerModule"].forRoot(),
                    ngx_easy_table__WEBPACK_IMPORTED_MODULE_7__["TableModule"]
                ],
                providers: [{ provide: Window, useValue: window }],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "eN75":
/*!*************************************************************************!*\
  !*** ./src/app/auth/sign-in/reset-password/reset-password.component.ts ***!
  \*************************************************************************/
/*! exports provided: ResetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function() { return ResetPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../auth.service */ "qXBG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function ResetPasswordComponent_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " email field is required ! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ResetPasswordComponent_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " wrong email format ! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ResetPasswordComponent {
    constructor(toastr, auth) {
        this.toastr = toastr;
        this.auth = auth;
        this.email = '';
        this.loading = false;
    }
    ngOnInit() {
        this.auth.loading$.subscribe((isLoading) => {
            this.loading = isLoading;
        });
    }
    onSubmit() {
        this.auth.forget(this.email).subscribe(() => {
            this.toastr.success('New password sent to your email !', 'New Password', {
                positionClass: 'toast-bottom-right',
            });
            this.auth.loading$.next(false);
        });
    }
}
ResetPasswordComponent.ɵfac = function ResetPasswordComponent_Factory(t) { return new (t || ResetPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
ResetPasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResetPasswordComponent, selectors: [["app-reset-password"]], decls: 12, vars: 5, consts: [[1, "reset-password"], [1, "form-control"], ["for", "email", 1, "form-control-title"], ["name", "email", "placeholder", "Enter email", "type", "text", "required", "", "email", "", 1, "form-control-input", 3, "ngModel", "ngModelChange"], ["em", "ngModel"], ["class", "help-block", 4, "ngIf"], ["type", "button", 3, "disabled", "click"], [1, "help-block"]], template: function ResetPasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "forget password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Email: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ResetPasswordComponent_Template_input_ngModelChange_6_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ResetPasswordComponent_span_8_Template, 2, 0, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ResetPasswordComponent_span_9_Template, 2, 0, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResetPasswordComponent_Template_button_click_10_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r0.invalid && _r0.touched && _r0.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r0.invalid && _r0.touched && _r0.errors.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r0.valid || ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.loading ? "Please wait ..." : "send reset link!");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["EmailValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: [".reset-password[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 20px;\r\n    width: 34rem;\r\n    box-shadow: 10px 10px 50px rgba(255, 0, 0, 0.2) inset;\r\n    border-radius: 40px 5px 40px 5px;\r\n    margin-top: 15px;\r\n    height: 100%;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    border: none;\r\n    height: 3rem;\r\n    font-weight: bolder;\r\n    font-size: 1.2rem;\r\n    color: white;\r\n    border-radius: 10px;\r\n    background: -webkit-linear-gradient(rgb(124, 82, 3), rgb(102, 69, 7));\r\n    text-transform: uppercase;\r\n    cursor: pointer;\r\n}\r\n\r\n.form-control-title[_ngcontent-%COMP%] {\r\n    font-weight: bold;\r\n    font-style: italic;\r\n    font-size: 1rem;\r\n}\r\n\r\n.form-control-input[_ngcontent-%COMP%] {\r\n    border: none;\r\n    height: 3.5rem;\r\n    border-radius: 10px;\r\n    background-color: rgba(0, 0, 0, 0.5);\r\n    color: white;\r\n    text-align: center;\r\n    width: 100%;\r\n    margin-top: 15px;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.form-control-input[_ngcontent-%COMP%]::placeholder {\r\n    color: #ccc;\r\n    opacity: 0.2;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.ng-invalid.ng-touched[_ngcontent-%COMP%]:not(form) {\r\n    border: 1px solid red;\r\n}\r\n\r\n.ng-valid[_ngcontent-%COMP%]:not(form) {\r\n    border: 1px solid green;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:disabled {\r\n    cursor: auto;\r\n    opacity: 0.5;\r\n}\r\n\r\n.help-block[_ngcontent-%COMP%] {\r\n    color: red;\r\n    display: block;\r\n    margin-bottom: 15px;\r\n    margin-left: 5px;\r\n}\r\n\r\n@media only screen and (max-width: 1200px) {\r\n    .reset-password[_ngcontent-%COMP%] {\r\n        width: 24rem;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 820px) {\r\n    .reset-password[_ngcontent-%COMP%] {\r\n        width: 18rem;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 620px) {\r\n    .reset-password[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n    }\r\n    button[_ngcontent-%COMP%] {\r\n        font-size: .9rem;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9zaWduLWluL3Jlc2V0LXBhc3N3b3JkL3Jlc2V0LXBhc3N3b3JkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixZQUFZO0lBQ1oscURBQXFEO0lBQ3JELGdDQUFnQztJQUNoQyxnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIscUVBQXFFO0lBQ3JFLHlCQUF5QjtJQUN6QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsb0NBQW9DO0lBQ3BDLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCOztBQUdBO0lBQ0k7UUFDSSxZQUFZO0lBQ2hCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLFlBQVk7SUFDaEI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksV0FBVztJQUNmO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvc2lnbi1pbi9yZXNldC1wYXNzd29yZC9yZXNldC1wYXNzd29yZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlc2V0LXBhc3N3b3JkIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIHdpZHRoOiAzNHJlbTtcclxuICAgIGJveC1zaGFkb3c6IDEwcHggMTBweCA1MHB4IHJnYmEoMjU1LCAwLCAwLCAwLjIpIGluc2V0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNDBweCA1cHggNDBweCA1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBoZWlnaHQ6IDNyZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQocmdiKDEyNCwgODIsIDMpLCByZ2IoMTAyLCA2OSwgNykpO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbC10aXRsZSB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbC1pbnB1dCB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBoZWlnaHQ6IDMuNXJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sLWlucHV0OjpwbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogI2NjYztcclxuICAgIG9wYWNpdHk6IDAuMjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbi5uZy1pbnZhbGlkLm5nLXRvdWNoZWQ6bm90KGZvcm0pIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxufVxyXG5cclxuLm5nLXZhbGlkOm5vdChmb3JtKSB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcclxufVxyXG5cclxuYnV0dG9uOmRpc2FibGVkIHtcclxuICAgIGN1cnNvcjogYXV0bztcclxuICAgIG9wYWNpdHk6IDAuNTtcclxufVxyXG5cclxuLmhlbHAtYmxvY2sge1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xyXG4gICAgLnJlc2V0LXBhc3N3b3JkIHtcclxuICAgICAgICB3aWR0aDogMjRyZW07XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODIwcHgpIHtcclxuICAgIC5yZXNldC1wYXNzd29yZCB7XHJcbiAgICAgICAgd2lkdGg6IDE4cmVtO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYyMHB4KSB7XHJcbiAgICAucmVzZXQtcGFzc3dvcmQge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgICBmb250LXNpemU6IC45cmVtO1xyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResetPasswordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-reset-password',
                templateUrl: './reset-password.component.html',
                styleUrls: ['./reset-password.component.css']
            }]
    }], function () { return [{ type: ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"] }, { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "fECr":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth/auth.service */ "qXBG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ng9_odometer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng9-odometer */ "dzYL");






function HeaderComponent_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Sign Up | Sign In");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_li_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ng9-odometer", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.userData.username, " | Coin: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("number", ctx_r1.userData.fund);
} }
class HeaderComponent {
    constructor(auth) {
        this.auth = auth;
        this.isUserLoggedIn = false;
        this.menuClass = '';
    }
    ngOnInit() {
        this.auth.loggedInUserData$.subscribe((userData) => {
            this.isUserLoggedIn = userData != null;
            this.userData = userData != null ? Object.assign({}, userData) : null;
        });
    }
    ngOnDestroy() {
        this.loggedInUserData$.unsubscribe();
        this.userUpdateFund$.unsubscribe();
    }
    onScroll($event) {
        if (window.scrollY > 20) {
            this.menuClass = 'menu-disapear';
        }
        else {
            this.menuClass = '';
        }
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], hostBindings: function HeaderComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function HeaderComponent_scroll_HostBindingHandler($event) { return ctx.onScroll($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 9, vars: 3, consts: [[1, "nav-menu", 3, "ngClass"], [1, "container"], [1, "menu"], ["class", "menu-item", 4, "ngIf"], [1, "menu-item"], ["routerLink", "/game"], ["routerLink", "/auth"], ["routerLink", "/panel"], [3, "number"], ["src", "../../assets/coin.png", "alt", ""]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HeaderComponent_li_4_Template, 3, 0, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HeaderComponent_li_5_Template, 5, 2, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Game");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.menuClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isUserLoggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userData);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], ng9_odometer__WEBPACK_IMPORTED_MODULE_4__["Ng9OdometerComponent"]], styles: [".nav-menu[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100vw;\r\n    background: -webkit-linear-gradient(rgb(124, 14, 14), rgb(80, 6, 6));\r\n    min-height: 60px;\r\n    z-index: 9999;\r\n    opacity: 0.7;\r\n    transition: opacity .5s;\r\n}\r\n\r\n.menu-disapear[_ngcontent-%COMP%] {\r\n    opacity: 0;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n    max-width: 1150px;\r\n    margin: 0 auto;\r\n}\r\n\r\n.menu[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    flex-direction: row-reverse;\r\n    justify-content: space-around;\r\n    margin: 0;\r\n    padding: 0;\r\n    list-style-type: none;\r\n    line-height: 60px;\r\n}\r\n\r\n.menu-item[_ngcontent-%COMP%] {\r\n    display: inline;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.menu-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    padding: 8px;\r\n    text-decoration: none;\r\n    color: #eee;\r\n    font-size: 1.2rem;\r\n    display: block;\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n    width: 30px;\r\n    height: 30px;\r\n    display: inline;\r\n    vertical-align: middle;\r\n    margin-left: 5px;\r\n}\r\n\r\n@media only screen and (max-width: 800px) {\r\n    .menu-item[_ngcontent-%COMP%] {\r\n        padding: 0 5px;\r\n    }\r\n    .menu-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n        font-size: 1rem;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 620px) {\r\n    .menu-item[_ngcontent-%COMP%] {\r\n        padding: 0 5px;\r\n    }\r\n    .menu-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n        font-size: .6rem;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLE1BQU07SUFDTixPQUFPO0lBQ1AsWUFBWTtJQUNaLG9FQUFvRTtJQUNwRSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLFlBQVk7SUFDWix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsMkJBQTJCO0lBQzNCLDZCQUE2QjtJQUM3QixTQUFTO0lBQ1QsVUFBVTtJQUNWLHFCQUFxQjtJQUNyQixpQkFBaUI7QUFDckI7O0FBR0E7SUFDSSxlQUFlO0lBQ2YseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJO1FBQ0ksY0FBYztJQUNsQjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxjQUFjO0lBQ2xCO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXYtbWVudSB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQocmdiKDEyNCwgMTQsIDE0KSwgcmdiKDgwLCA2LCA2KSk7XHJcbiAgICBtaW4taGVpZ2h0OiA2MHB4O1xyXG4gICAgei1pbmRleDogOTk5OTtcclxuICAgIG9wYWNpdHk6IDAuNztcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjVzO1xyXG59XHJcblxyXG4ubWVudS1kaXNhcGVhciB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICAgIG1heC13aWR0aDogMTE1MHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi5tZW51IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICBsaW5lLWhlaWdodDogNjBweDtcclxufVxyXG5cclxuXHJcbi5tZW51LWl0ZW0ge1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLm1lbnUtaXRlbSBhIHtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiAjZWVlO1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5pbWcge1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gICAgLm1lbnUtaXRlbSB7XHJcbiAgICAgICAgcGFkZGluZzogMCA1cHg7XHJcbiAgICB9XHJcbiAgICAubWVudS1pdGVtIGEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MjBweCkge1xyXG4gICAgLm1lbnUtaXRlbSB7XHJcbiAgICAgICAgcGFkZGluZzogMCA1cHg7XHJcbiAgICB9XHJcbiAgICAubWVudS1pdGVtIGEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogLjZyZW07XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return [{ type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, { onScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:scroll', ['$event']]
        }] }); })();


/***/ }),

/***/ "ijqx":
/*!*******************************************!*\
  !*** ./src/app/game/bet/bet.component.ts ***!
  \*******************************************/
/*! exports provided: BetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BetComponent", function() { return BetComponent; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_socket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/socket.service */ "7fM4");
/* harmony import */ var _bet_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../bet.service */ "FjO3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng9_odometer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng9-odometer */ "dzYL");








function BetComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "ng9-odometer", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const bet_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@list", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@winnerState", ctx_r0.winnerStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](bet_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r0.winnerStatus == "winner" ? "+" : ctx_r0.winnerStatus == "loser" ? "-" : "", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("number", bet_r1.amount);
} }
const _c0 = function (a0) { return { "filter": a0 }; };
const _c1 = function (a0) { return { "background": a0 }; };
const _c2 = function (a0) { return { "color": a0 }; };
class BetComponent {
    constructor(socketService, betService) {
        this.socketService = socketService;
        this.betService = betService;
        this.bets = [];
        this.totalBetAmount = 0;
        this.winnerStatus = 'normal';
    }
    ngOnInit() {
        this.retriveAllBets$ = this
            .betService
            .retriveAllBets$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((bets) => {
            const colorFiltered = bets.filter((bet) => bet.color == this.betColor);
            return colorFiltered;
        }))
            .subscribe((bets) => {
            this.bets = bets;
            const totalBetAmount = bets.reduce((acc, cur) => acc + cur.amount, 0);
            this.totalBetAmount = totalBetAmount;
        });
        this.newBetAdded$ = this.betService.newBetAdded$.subscribe((bet) => {
            if (bet.color == this.betColor) {
                this.bets.push(bet);
                this.totalBetAmount += bet.amount;
            }
            this.bets.sort((a, b) => {
                return a.amount < b.amount ? 1 : a.amount > b.amount ? -1 : 0;
            });
        });
        this.winner$ = this.socketService.fromEvent('winner').subscribe((winnerColor) => {
            if (winnerColor == this.betColor) {
                this.winnerStatus = 'winner';
                this.bets.forEach((bet) => {
                    if (bet.color == winnerColor) {
                        if (winnerColor == 'red' || winnerColor == 'black') {
                            return bet.amount *= 2;
                        }
                        return bet.amount *= 14;
                    }
                });
                const totalBetAmount = this.bets.reduce((acc, cur) => acc + cur.amount, 0);
                this.totalBetAmount = totalBetAmount;
            }
            else {
                this.winnerStatus = 'loser';
            }
        });
        this.restart$ = this.socketService.fromEvent('restart').subscribe(() => {
            this.bets = [];
            this.winnerStatus = 'normal';
            this.totalBetAmount = 0;
        });
        if (this.betColor == 'red') {
            this.buttonColor = '-webkit-linear-gradient(rgb(124, 14, 14), rgb(80, 6, 6))';
            this.imageColor = '';
        }
        else if (this.betColor == 'green') {
            this.buttonColor = '-webkit-linear-gradient(rgb(17, 124, 3), rgb(26, 102, 7))';
            this.imageColor = 'hue-rotate(175deg)';
        }
        else {
            this.buttonColor = '-webkit-linear-gradient(rgb(57, 58, 57), rgb(29, 29, 29))';
            this.imageColor = 'grayscale(100%)';
        }
    }
    addNewBet() {
        this.betService.newBet(this.betColor);
    }
    ngOnDestroy() {
        this.retriveAllBets$.unsubscribe();
        this.newBetAdded$.unsubscribe();
        this.winner$.unsubscribe();
        this.restart$.unsubscribe();
    }
}
BetComponent.ɵfac = function BetComponent_Factory(t) { return new (t || BetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_socket_service__WEBPACK_IMPORTED_MODULE_3__["SocketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_bet_service__WEBPACK_IMPORTED_MODULE_4__["BetService"])); };
BetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BetComponent, selectors: [["app-bet"]], inputs: { betColor: "betColor", betText: "betText" }, decls: 14, vars: 14, consts: [[1, "bet"], [1, "bet-header"], ["src", "../../../assets/red.png", "alt", "", 1, "bet-image", 3, "ngStyle"], [3, "ngStyle", "click"], [1, "users-bet"], [1, "bets-count"], [3, "number"], [1, "bets-amount", 3, "ngStyle"], ["src", "../../../assets/coin.png", "alt", ""], ["class", "user-bet", 4, "ngFor", "ngForOf"], [1, "user-bet"], [1, "place-bet-holder"], [1, "place-bet-name"], [1, "place-bet-amount"]], template: function BetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BetComponent_Template_button_click_3_listener() { return ctx.addNewBet(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "ng9-odometer", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Total bets");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "ng9-odometer", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, BetComponent_div_13_Template, 8, 5, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](8, _c0, ctx.imageColor));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](10, _c1, ctx.buttonColor));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.betText);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("number", ctx.bets.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](12, _c2, ctx.winnerStatus == "winner" && ctx.bets.length ? "green" : ctx.winnerStatus == "loser" && ctx.bets.length ? "red" : ""));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.winnerStatus == "winner" && ctx.bets.length ? "+" : ctx.winnerStatus == "loser" && ctx.bets.length ? "-" : "", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("number", ctx.totalBetAmount);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.bets);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"], ng9_odometer__WEBPACK_IMPORTED_MODULE_6__["Ng9OdometerComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: [".bet[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 22rem;\r\n    overflow: visible;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    border: none;\r\n    height: 3rem;\r\n    font-weight: bolder;\r\n    font-size: 1rem;\r\n    color: white;\r\n    border-radius: 10px;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.bet-image[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: -30px;\r\n    width: 50px;\r\n    transform: rotate(-18deg);\r\n}\r\n\r\n.bet-header[_ngcontent-%COMP%]{\r\n    transition: .2s cubic-bezier(0.1, 0.1, 0.1, 0.1);\r\n}\r\n\r\n.bet-header[_ngcontent-%COMP%]:hover {\r\n    transform: scale(1.1);\r\n}\r\n\r\n.bet-header[_ngcontent-%COMP%]:last-child {\r\n    margin-bottom: 40px;\r\n}\r\n\r\n.user-bet[_ngcontent-%COMP%] {\r\n    margin-top: 20px;\r\n    padding: 0;\r\n    list-style-type: lower-greek;\r\n    transition: all .5s;\r\n}\r\n\r\n.user-bet[_ngcontent-%COMP%]:first-child {\r\n    margin-top: 20px;\r\n}\r\n\r\n.place-bet-holder[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    background-color: rgba(109, 27, 27, 0.651);\r\n    padding: 15px;\r\n    border-radius: 40px 10px;\r\n    font-weight: bolder;\r\n    font-size: .7rem;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.place-bet-name[_ngcontent-%COMP%] {\r\n    font-weight: bolder;\r\n}\r\n\r\n.place-bet-amount[_ngcontent-%COMP%] {\r\n    font-size: .7rem;\r\n}\r\n\r\n.place-bet-holder[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 12px;\r\n    height: 12px;\r\n    vertical-align: middle;\r\n    margin-left: 3px;\r\n}\r\n\r\n.users-bet[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    background-color: rgba(34, 32, 32, 0.5);\r\n    margin-top: 20px;\r\n}\r\n\r\n.users-bet[_ngcontent-%COMP%] {\r\n    padding: 15px;\r\n    border-radius: 10px;\r\n    font-weight: bolder;\r\n    font-size: .8rem;\r\n}\r\n\r\n.users-bet[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 15px;\r\n    height: 15px;\r\n    vertical-align: middle;\r\n    margin-left: 3px;\r\n}\r\n\r\n@media only screen and (max-width: 1200px) {\r\n    .bet[_ngcontent-%COMP%] {\r\n        width: 16rem;\r\n    }\r\n    button[_ngcontent-%COMP%] {\r\n        font-size: .9rem;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 820px) {\r\n    .bet[_ngcontent-%COMP%] {\r\n        width: 12rem;\r\n    }\r\n    button[_ngcontent-%COMP%] {\r\n        font-size: .7rem;\r\n    }\r\n    .bet-image[_ngcontent-%COMP%] {\r\n        width: 40px;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 620px) {\r\n    .bet[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n    }\r\n    button[_ngcontent-%COMP%] {\r\n        font-size: 1rem;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS9iZXQvYmV0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFdBQVc7SUFDWCx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxnREFBZ0Q7QUFDcEQ7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLDRCQUE0QjtJQUM1QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQiwwQ0FBMEM7SUFDMUMsYUFBYTtJQUNiLHdCQUF3QjtJQUN4QixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQix1Q0FBdUM7SUFDdkMsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0k7UUFDSSxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksWUFBWTtJQUNoQjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxXQUFXO0lBQ2Y7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksV0FBVztJQUNmO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9nYW1lL2JldC9iZXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZXQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDIycmVtO1xyXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGhlaWdodDogM3JlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG5idXR0b246aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uYmV0LWltYWdlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogLTMwcHg7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC0xOGRlZyk7XHJcbn1cclxuXHJcbi5iZXQtaGVhZGVye1xyXG4gICAgdHJhbnNpdGlvbjogLjJzIGN1YmljLWJlemllcigwLjEsIDAuMSwgMC4xLCAwLjEpO1xyXG59XHJcblxyXG4uYmV0LWhlYWRlcjpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbn1cclxuXHJcbi5iZXQtaGVhZGVyOmxhc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxufVxyXG5cclxuLnVzZXItYmV0IHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBsb3dlci1ncmVlaztcclxuICAgIHRyYW5zaXRpb246IGFsbCAuNXM7XHJcbn1cclxuXHJcbi51c2VyLWJldDpmaXJzdC1jaGlsZCB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4ucGxhY2UtYmV0LWhvbGRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTA5LCAyNywgMjcsIDAuNjUxKTtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4IDEwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgZm9udC1zaXplOiAuN3JlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbi5wbGFjZS1iZXQtbmFtZSB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG59XHJcblxyXG4ucGxhY2UtYmV0LWFtb3VudCB7XHJcbiAgICBmb250LXNpemU6IC43cmVtO1xyXG59XHJcblxyXG4ucGxhY2UtYmV0LWhvbGRlciBpbWcge1xyXG4gICAgd2lkdGg6IDEycHg7XHJcbiAgICBoZWlnaHQ6IDEycHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDNweDtcclxufVxyXG5cclxuLnVzZXJzLWJldCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM0LCAzMiwgMzIsIDAuNSk7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4udXNlcnMtYmV0IHtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgIGZvbnQtc2l6ZTogLjhyZW07XHJcbn1cclxuXHJcbi51c2Vycy1iZXQgaW1nIHtcclxuICAgIHdpZHRoOiAxNXB4O1xyXG4gICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIG1hcmdpbi1sZWZ0OiAzcHg7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XHJcbiAgICAuYmV0IHtcclxuICAgICAgICB3aWR0aDogMTZyZW07XHJcbiAgICB9XHJcbiAgICBidXR0b24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogLjlyZW07XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODIwcHgpIHtcclxuICAgIC5iZXQge1xyXG4gICAgICAgIHdpZHRoOiAxMnJlbTtcclxuICAgIH1cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAuN3JlbTtcclxuICAgIH1cclxuICAgIC5iZXQtaW1hZ2Uge1xyXG4gICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYyMHB4KSB7XHJcbiAgICAuYmV0IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgfVxyXG59Il19 */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('list', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => void', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: '!', opacity: 1 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(200, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: 0, opacity: 0 }))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: 0, opacity: 0 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(400, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: '*', opacity: 1 }))
                ])
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('winnerState', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('winner', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ color: 'green' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('loser', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ color: 'red' })),
            ])
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BetComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-bet',
                templateUrl: './bet.component.html',
                styleUrls: ['./bet.component.css'],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('list', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => void', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: '!', opacity: 1 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(200, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: 0, opacity: 0 }))
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => *', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: 0, opacity: 0 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(400, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: '*', opacity: 1 }))
                        ])
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('winnerState', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('winner', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ color: 'green' })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('loser', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ color: 'red' })),
                    ])
                ]
            }]
    }], function () { return [{ type: src_app_socket_service__WEBPACK_IMPORTED_MODULE_3__["SocketService"] }, { type: _bet_service__WEBPACK_IMPORTED_MODULE_4__["BetService"] }]; }, { betColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], betText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "iqiX":
/*!********************************************************!*\
  !*** ./src/app/panel/dashboard/dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/auth/auth.service */ "qXBG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class DashboardComponent {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    ngOnInit() {
    }
    linkToChangePassword() {
        this.router.navigate(['/panel/change-password']);
    }
    linkToChargeAccount() {
        this.router.navigate(['panel/charge-account']);
    }
    linkToBetHistory() {
        this.router.navigate(['panel/bet-history']);
    }
    linkToSupportTicket() {
        this.router.navigate(['panel/support']);
    }
    logout() {
        this.auth.logout();
        this.router.navigate(['/game']);
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 17, vars: 0, consts: [[1, "bg-image"], [1, "container"], [1, "dashboard-container"], [3, "click"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "what do you want to do");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_7_listener() { return ctx.linkToChangePassword(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Change Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_9_listener() { return ctx.linkToChargeAccount(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Charge Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_11_listener() { return ctx.linkToSupportTicket(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Support ticket");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_13_listener() { return ctx.linkToBetHistory(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Bet's History");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_15_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["h1[_ngcontent-%COMP%] {\r\n    font-size: 5rem;\r\n    text-transform: uppercase;\r\n    font-weight: bolder;\r\n    background: -webkit-linear-gradient(rgb(124, 14, 14), rgb(80, 6, 6));\r\n    background-clip: text;\r\n    -webkit-background-clip: text;\r\n    -webkit-text-fill-color: transparent;\r\n    margin-top: 90px;\r\n}\r\n\r\nh3[_ngcontent-%COMP%] {\r\n    color: wheat;\r\n    margin-top: 0;\r\n    text-transform: uppercase;\r\n}\r\n\r\nh3[_ngcontent-%COMP%]::after {\r\n    content: ' \uD83E\uDD14'\r\n}\r\n\r\n.bg-image[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    height: 100vh;\r\n    width: 100vw;\r\n    background-image: url('roulette.jpg');\r\n    background-repeat: no-repeat, repeat;\r\n    background-position: center;\r\n    background-size: cover;\r\n    filter: grayscale(30%);\r\n    z-index: 1;\r\n    transition: filter 1s;\r\n}\r\n\r\n.bg-image[_ngcontent-%COMP%]::after {\r\n    content: '';\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    background-color: rgba(0, 0, 0, 0.8);\r\n    width: 100vw;\r\n    height: 100vh;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    width: 100%;\r\n}\r\n\r\n.container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    z-index: 2;\r\n}\r\n\r\n.dashboard-container[_ngcontent-%COMP%] {\r\n    border-top: 1px solid #e56332;\r\n    padding: 20px;\r\n    background-color: rgba(0, 0, 0, .4);\r\n    border-radius: 100px;\r\n    display: flex;\r\n    margin: 0 auto;\r\n    flex-direction: row;\r\n    justify-content: space-around;\r\n    flex-wrap: wrap;\r\n    width: 1150px;\r\n    margin-bottom: 20px;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n    background: -webkit-linear-gradient(rgb(124, 14, 14), rgb(80, 6, 6));\r\n    width: 200px;\r\n    height: 8rem;\r\n    background-color: #940a0a;\r\n    border: none;\r\n    border-radius: 25px;\r\n    color: white;\r\n    font-size: 2rem;\r\n    font-style: italic;\r\n    cursor: pointer;\r\n    font-weight: bold;\r\n    font-size: 1rem;\r\n    margin: 20px;\r\n    text-transform: uppercase;\r\n    opacity: .7;\r\n    flex-grow: 1;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:last-child {\r\n    background: -webkit-linear-gradient(rgb(124, 14, 14), rgb(250, 105, 8));\r\n    font-size: 2rem;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:hover {\r\n    background: -webkit-linear-gradient(rgb(146, 31, 31), rgb(179, 87, 12));\r\n}\r\n\r\n@media only screen and (max-width: 1200px) {\r\n    .dashboard-container[_ngcontent-%COMP%] {\r\n        width: 800px;\r\n    }\r\n    button[_ngcontent-%COMP%] {\r\n        width: 320px;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 830px) {\r\n    h1[_ngcontent-%COMP%] {\r\n        font-size: 4rem;\r\n    }\r\n    .dashboard-container[_ngcontent-%COMP%] {\r\n        width: 90%;\r\n    }\r\n    button[_ngcontent-%COMP%] {\r\n        width: 230px;\r\n        font-size: 20px;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 670px) {\r\n    h1[_ngcontent-%COMP%] {\r\n        font-size: 3rem;\r\n    }\r\n    button[_ngcontent-%COMP%] {\r\n        width: 400px;\r\n        font-size: .9rem;\r\n    }\r\n    .dashboard-container[_ngcontent-%COMP%] {\r\n        width: 90%;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 420px) {\r\n    h1[_ngcontent-%COMP%] {\r\n        font-size: 2rem;\r\n    }\r\n    .dashboard-container[_ngcontent-%COMP%] {\r\n        border-radius: 30px;\r\n    }\r\n    button[_ngcontent-%COMP%] {\r\n        width: 250px;\r\n        font-size: .9rem;\r\n        height: 5rem;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFuZWwvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsb0VBQW9FO0lBQ3BFLHFCQUFxQjtJQUNyQiw2QkFBNkI7SUFDN0Isb0NBQW9DO0lBQ3BDLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLGVBQWU7SUFDZixNQUFNO0lBQ04sT0FBTztJQUNQLGFBQWE7SUFDYixZQUFZO0lBQ1oscUNBQXFEO0lBQ3JELG9DQUFvQztJQUNwQywyQkFBMkI7SUFDM0Isc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1YscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLG9DQUFvQztJQUNwQyxZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixhQUFhO0lBQ2IsbUNBQW1DO0lBQ25DLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2IsY0FBYztJQUNkLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsZUFBZTtJQUNmLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxvRUFBb0U7SUFDcEUsWUFBWTtJQUNaLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksdUVBQXVFO0lBQ3ZFLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx1RUFBdUU7QUFDM0U7O0FBRUE7SUFDSTtRQUNJLFlBQVk7SUFDaEI7SUFDQTtRQUNJLFlBQVk7SUFDaEI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksVUFBVTtJQUNkO0lBQ0E7UUFDSSxZQUFZO1FBQ1osZUFBZTtJQUNuQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxZQUFZO1FBQ1osZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxVQUFVO0lBQ2Q7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxZQUFZO1FBQ1osZ0JBQWdCO1FBQ2hCLFlBQVk7SUFDaEI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3BhbmVsL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxIHtcclxuICAgIGZvbnQtc2l6ZTogNXJlbTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQocmdiKDEyNCwgMTQsIDE0KSwgcmdiKDgwLCA2LCA2KSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIG1hcmdpbi10b3A6IDkwcHg7XHJcbn1cclxuXHJcbmgzIHtcclxuICAgIGNvbG9yOiB3aGVhdDtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG5oMzo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyDwn6SUJ1xyXG59XHJcblxyXG4uYmctaW1hZ2Uge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9yb3VsZXR0ZS5qcGcnKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQsIHJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBmaWx0ZXI6IGdyYXlzY2FsZSgzMCUpO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHRyYW5zaXRpb246IGZpbHRlciAxcztcclxufVxyXG5cclxuLmJnLWltYWdlOjphZnRlciB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY29udGFpbmVyID4gKiB7XHJcbiAgICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG4uZGFzaGJvYXJkLWNvbnRhaW5lciB7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2U1NjMzMjtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC40KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgd2lkdGg6IDExNTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChyZ2IoMTI0LCAxNCwgMTQpLCByZ2IoODAsIDYsIDYpKTtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogOHJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5NDBhMGE7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgb3BhY2l0eTogLjc7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbn1cclxuXHJcbmJ1dHRvbjpsYXN0LWNoaWxkIHtcclxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHJnYigxMjQsIDE0LCAxNCksIHJnYigyNTAsIDEwNSwgOCkpO1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG59XHJcblxyXG5idXR0b246aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQocmdiKDE0NiwgMzEsIDMxKSwgcmdiKDE3OSwgODcsIDEyKSk7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XHJcbiAgICAuZGFzaGJvYXJkLWNvbnRhaW5lciB7XHJcbiAgICAgICAgd2lkdGg6IDgwMHB4O1xyXG4gICAgfVxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgICB3aWR0aDogMzIwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODMwcHgpIHtcclxuICAgIGgxIHtcclxuICAgICAgICBmb250LXNpemU6IDRyZW07XHJcbiAgICB9XHJcbiAgICAuZGFzaGJvYXJkLWNvbnRhaW5lciB7XHJcbiAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgIH1cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgd2lkdGg6IDIzMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NzBweCkge1xyXG4gICAgaDEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICAgIH1cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogLjlyZW07XHJcbiAgICB9XHJcbiAgICAuZGFzaGJvYXJkLWNvbnRhaW5lciB7XHJcbiAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjBweCkge1xyXG4gICAgaDEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIH1cclxuICAgIC5kYXNoYm9hcmQtY29udGFpbmVyIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgfVxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgICB3aWR0aDogMjUwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAuOXJlbTtcclxuICAgICAgICBoZWlnaHQ6IDVyZW07XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dashboard',
                templateUrl: './dashboard.component.html',
                styleUrls: ['./dashboard.component.css']
            }]
    }], function () { return [{ type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "jBAD":
/*!****************************************!*\
  !*** ./src/app/game/game.component.ts ***!
  \****************************************/
/*! exports provided: GameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameComponent", function() { return GameComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../socket.service */ "7fM4");
/* harmony import */ var _bet_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bet.service */ "FjO3");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auth/auth.service */ "qXBG");
/* harmony import */ var _timer_timer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./timer/timer.component */ "HKqw");
/* harmony import */ var _roulette_roulette_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./roulette/roulette.component */ "GYVa");
/* harmony import */ var _latest_roll_latest_roll_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./latest-roll/latest-roll.component */ "vSbF");
/* harmony import */ var _bet_control_bet_control_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./bet-control/bet-control.component */ "2++q");
/* harmony import */ var _bet_bet_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./bet/bet.component */ "ijqx");












class GameComponent {
    constructor(socketService, betService, toastr, auth) {
        this.socketService = socketService;
        this.betService = betService;
        this.toastr = toastr;
        this.auth = auth;
    }
    ngOnInit() {
        this.winnerAudio = new Audio();
        this.socketService.emit('enteredGame');
        this.allBets$ = this.socketService.fromEvent('allBets').subscribe((bets) => {
            this.betService.retriveAllBets$.next(bets);
        });
        this.newBetAddedToAllUser$ = this.socketService.fromEvent('newBetAddedToAllUser').subscribe((bet) => {
            this.betService.newBetAdded$.next(bet);
        });
        this.betSuccess$ = this.socketService.fromEvent('betSuccess').subscribe(() => {
            this.toastr.success('Your Bet successfully Submitted !', 'Bet Submitted !', {
                positionClass: 'toast-bottom-right',
                easeTime: 1000
            });
        });
        this.betFailed$ = this.socketService.fromEvent('betFailed').subscribe(() => {
            this.toastr.error('Wait For Next Round !', 'Rolling Time !', {
                positionClass: 'toast-bottom-right',
                easeTime: 1000
            });
        });
        this.userNotFound$ = this.socketService.fromEvent('userNotFound').subscribe(() => {
            this.toastr.error('Failed to placing bet, plaese sign in again !', 'Failed', {
                positionClass: 'toast-bottom-right',
                easeTime: 1000
            });
            this.auth.loggedInUserData$.next(null);
        });
        this.insufficientFund$ = this.socketService.fromEvent('insufficientFund').subscribe(() => {
            this.toastr.error('Charge your account !', 'Insufficient Fund', {
                positionClass: 'toast-bottom-right',
                easeTime: 1000
            });
        });
        this.updateFund$ = this.socketService.fromEvent('updateFund').subscribe((fund) => {
            this.auth.loggedInUserData$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1)).subscribe((userData) => {
                const newUserData = {
                    id: userData.id,
                    email: userData.email,
                    username: userData.username,
                    token: userData.token,
                    fund: fund,
                    updatedAt: userData.updatedAt,
                    createdAt: userData.createdAt
                };
                this.auth.loggedInUserData$.next(newUserData);
            });
        });
        this.winner$ = this.socketService.fromEvent('winner').subscribe((winnerColor) => {
            if (winnerColor == 'red') {
                this.winnerAudio.src = '../../../../assets/red.ogg';
                this.winnerAudio.load();
                this.winnerAudio.play();
            }
            else if (winnerColor == 'green') {
                this.winnerAudio.src = '../../../../assets/green.ogg';
                this.winnerAudio.load();
                this.winnerAudio.play();
            }
            else {
                this.winnerAudio.src = '../../../../assets/black.ogg';
                this.winnerAudio.load();
                this.winnerAudio.play();
            }
        });
    }
    ngOnDestroy() {
        this.allBets$.unsubscribe();
        this.newBetAddedToAllUser$.unsubscribe();
        this.betSuccess$.unsubscribe();
        this.betFailed$.unsubscribe();
        this.winner$.unsubscribe();
        this.userNotFound$.unsubscribe();
        this.insufficientFund$.unsubscribe();
        this.updateFund$.unsubscribe();
    }
}
GameComponent.ɵfac = function GameComponent_Factory(t) { return new (t || GameComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_socket_service__WEBPACK_IMPORTED_MODULE_2__["SocketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_bet_service__WEBPACK_IMPORTED_MODULE_3__["BetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"])); };
GameComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GameComponent, selectors: [["app-game"]], decls: 10, vars: 0, consts: [[1, "bg-image"], [1, "container"], [1, "bets-container"], ["betColor", "red", "betText", "PLACE BET ( WIN X2 )"], ["betColor", "green", "betText", "PLACE BET ( WIN X14 )"], ["betColor", "black", "betText", "PLACE BET ( WIN X2 )"]], template: function GameComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-timer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-roulette");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-latest-roll");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-bet-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-bet", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-bet", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-bet", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_timer_timer_component__WEBPACK_IMPORTED_MODULE_6__["TimerComponent"], _roulette_roulette_component__WEBPACK_IMPORTED_MODULE_7__["RouletteComponent"], _latest_roll_latest_roll_component__WEBPACK_IMPORTED_MODULE_8__["LatestRollComponent"], _bet_control_bet_control_component__WEBPACK_IMPORTED_MODULE_9__["BetControlComponent"], _bet_bet_component__WEBPACK_IMPORTED_MODULE_10__["BetComponent"]], styles: [".container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    width: 100%;\r\n}\r\n\r\n.container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    z-index: 2;\r\n}\r\n\r\n.bg-image[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    height: 100vh;\r\n    width: 100vw;\r\n    background-image: url('roulette.jpg');\r\n    background-repeat: no-repeat, repeat;\r\n    background-position: center;\r\n    background-size: cover;\r\n    filter: grayscale(30%);\r\n    z-index: 1;\r\n    transition: filter 1s;\r\n}\r\n\r\n.bg-image[_ngcontent-%COMP%]::after {\r\n    content: '';\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    background-color: rgba(0, 0, 0, 0.8);\r\n    width: 100vw;\r\n    height: 100vh;\r\n}\r\n\r\n.bets-container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    flex-wrap: wrap;\r\n    position: relative;\r\n    width: 1150px;\r\n    max-width: 1150px;\r\n    color: white;\r\n    margin-top: 20px;\r\n}\r\n\r\n@media only screen and (max-width: 1200px) {\r\n    .bets-container[_ngcontent-%COMP%] {\r\n        width: 800px;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 820px) {\r\n    .bets-container[_ngcontent-%COMP%] {\r\n        width: 600px;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 620px) {\r\n    .bets-container[_ngcontent-%COMP%] {\r\n        flex-direction: column;\r\n        width: 400px;\r\n        height: auto;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 420px) {\r\n    .bets-container[_ngcontent-%COMP%] {\r\n        flex-direction: column;\r\n        width: 250px;\r\n        height: auto;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS9nYW1lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsTUFBTTtJQUNOLE9BQU87SUFDUCxhQUFhO0lBQ2IsWUFBWTtJQUNaLHFDQUFrRDtJQUNsRCxvQ0FBb0M7SUFDcEMsMkJBQTJCO0lBQzNCLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxvQ0FBb0M7SUFDcEMsWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFHQTtJQUNJO1FBQ0ksWUFBWTtJQUNoQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxZQUFZO0lBQ2hCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLHNCQUFzQjtRQUN0QixZQUFZO1FBQ1osWUFBWTtJQUNoQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxzQkFBc0I7UUFDdEIsWUFBWTtRQUNaLFlBQVk7SUFDaEI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2dhbWUvZ2FtZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmNvbnRhaW5lciA+ICoge1xyXG4gICAgei1pbmRleDogMjtcclxufVxyXG5cclxuLmJnLWltYWdlIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvcm91bGV0dGUuanBnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0LCByZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgZmlsdGVyOiBncmF5c2NhbGUoMzAlKTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICB0cmFuc2l0aW9uOiBmaWx0ZXIgMXM7XHJcbn1cclxuXHJcbi5iZy1pbWFnZTo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLmJldHMtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDExNTBweDtcclxuICAgIG1heC13aWR0aDogMTE1MHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XHJcbiAgICAuYmV0cy1jb250YWluZXIge1xyXG4gICAgICAgIHdpZHRoOiA4MDBweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MjBweCkge1xyXG4gICAgLmJldHMtY29udGFpbmVyIHtcclxuICAgICAgICB3aWR0aDogNjAwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjIwcHgpIHtcclxuICAgIC5iZXRzLWNvbnRhaW5lciB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICB3aWR0aDogNDAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyMHB4KSB7XHJcbiAgICAuYmV0cy1jb250YWluZXIge1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-game',
                templateUrl: './game.component.html',
                styleUrls: ['./game.component.css'],
            }]
    }], function () { return [{ type: _socket_service__WEBPACK_IMPORTED_MODULE_2__["SocketService"] }, { type: _bet_service__WEBPACK_IMPORTED_MODULE_3__["BetService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }, { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "k6Nf":
/*!******************************************************************!*\
  !*** ./src/app/panel/charge-account/charge-account.component.ts ***!
  \******************************************************************/
/*! exports provided: ChargeAccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChargeAccountComponent", function() { return ChargeAccountComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/auth/auth.service */ "qXBG");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");








function ChargeAccountComponent_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " amount is required ! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChargeAccountComponent_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " minimum charge amount is 5 ! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ChargeAccountComponent {
    constructor(auth, toastr, router) {
        this.auth = auth;
        this.toastr = toastr;
        this.router = router;
        this.amount = null;
        this.loading = false;
    }
    ngOnInit() {
        this.isLoading$ = this.auth.loading$.subscribe((isLoading) => {
            this.loading = isLoading;
        });
        this.chargeAccountForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'amount': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(5)])
        });
    }
    onSubmit() {
        const { amount } = this.chargeAccountForm.value;
        this.chargeAccount$ = this.auth.chargeAccount(amount).subscribe(() => {
            this.toastr.success('your account charged Successfully !', 'Account charge', {
                positionClass: 'toast-bottom-right',
            });
            this.router.navigate(['/panel']);
        });
    }
}
ChargeAccountComponent.ɵfac = function ChargeAccountComponent_Factory(t) { return new (t || ChargeAccountComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
ChargeAccountComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChargeAccountComponent, selectors: [["app-charge-account"]], decls: 16, vars: 4, consts: [[1, "bg-image"], [1, "container"], [1, "charge-container"], [3, "formGroup", "ngSubmit"], [1, "form-control"], ["for", "amount", 1, "form-control-title"], ["formControlName", "amount", "placeholder", "enter amount", "type", "number", "name", "amount", "min", "6", "required", "", 1, "form-control-input"], ["class", "help-block", 4, "ngIf"], [3, "disabled"], [1, "help-block"]], template: function ChargeAccountComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Charge Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "How much you want to charge account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ChargeAccountComponent_Template_form_ngSubmit_7_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ChargeAccountComponent_span_12_Template, 2, 0, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ChargeAccountComponent_span_13_Template, 2, 0, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Charge Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.chargeAccountForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.chargeAccountForm.get("amount").invalid && ctx.chargeAccountForm.get("amount").touched && ctx.chargeAccountForm.get("amount").errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.chargeAccountForm.get("amount").invalid && ctx.chargeAccountForm.get("amount").touched && ctx.chargeAccountForm.get("amount").errors.min);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.chargeAccountForm.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: ["h1[_ngcontent-%COMP%] {\r\n    font-size: 5rem;\r\n    text-transform: uppercase;\r\n    font-weight: bolder;\r\n    background: -webkit-linear-gradient(rgb(124, 14, 14), rgb(80, 6, 6));\r\n    background-clip: text;\r\n    -webkit-background-clip: text;\r\n    -webkit-text-fill-color: transparent;\r\n    margin-top: 90px;\r\n}\r\n\r\nh3[_ngcontent-%COMP%] {\r\n    color: wheat;\r\n    margin-top: 0;\r\n    text-transform: uppercase;\r\n}\r\n\r\nh3[_ngcontent-%COMP%]::after {\r\n    content: ' \uD83D\uDCB3'\r\n}\r\n\r\n.bg-image[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    height: 100vh;\r\n    width: 100vw;\r\n    background-image: url('roulette.jpg');\r\n    background-repeat: no-repeat, repeat;\r\n    background-position: center;\r\n    background-size: cover;\r\n    filter: grayscale(30%);\r\n    z-index: 1;\r\n    transition: filter 1s;\r\n}\r\n\r\n.bg-image[_ngcontent-%COMP%]::after {\r\n    content: '';\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    background-color: rgba(0, 0, 0, 0.8);\r\n    width: 100vw;\r\n    height: 100vh;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    width: 100%;\r\n}\r\n\r\n.container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    z-index: 2;\r\n}\r\n\r\n.charge-container[_ngcontent-%COMP%] {\r\n    border-top: 1px solid #e56332;\r\n    padding: 120px;\r\n    background-color: rgba(0, 0, 0, .4);\r\n    border-radius: 100px;\r\n    display: flex;\r\n    margin: 0 auto;\r\n    flex-direction: column ;\r\n    justify-content: space-around;\r\n    flex-wrap: wrap;\r\n    width: 1150px;\r\n    margin-bottom: 20px;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n    background: -webkit-linear-gradient(rgb(124, 14, 14), rgb(80, 6, 6));\r\n    width: 100%;\r\n    height: 5rem;\r\n    background-color: #940a0a;\r\n    border: none;\r\n    border-radius: 25px;\r\n    color: white;\r\n    font-size: 2rem;\r\n    font-style: italic;\r\n    cursor: pointer;\r\n    font-weight: bold;\r\n    text-transform: uppercase;\r\n    opacity: .7;\r\n    margin-top: 20px;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:last-child {\r\n    background: -webkit-linear-gradient(rgb(124, 14, 14), rgb(250, 105, 8));\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:hover {\r\n    background: -webkit-linear-gradient(rgb(146, 31, 31), rgb(179, 87, 12));\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:disabled {\r\n    cursor: auto;\r\n    opacity: 0.5;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:disabled:hover {\r\n    background: -webkit-linear-gradient(rgb(124, 14, 14), rgb(250, 105, 8));\r\n}\r\n\r\n.form-control-title[_ngcontent-%COMP%] {\r\n    font-weight: bold;\r\n    font-style: italic;\r\n    font-size: 1rem;\r\n    color: wheat;\r\n}\r\n\r\n.form-control-input[_ngcontent-%COMP%] {\r\n    border: none;\r\n    height: 3.5rem;\r\n    border-radius: 10px;\r\n    background-color: rgba(66, 9, 9, 0.5);\r\n    color: white;\r\n    text-align: center;\r\n    display: block;\r\n    margin-top: 15px;\r\n    margin-bottom: 15px;\r\n    width: 100%;\r\n}\r\n\r\n.form-control-input[_ngcontent-%COMP%]::placeholder {\r\n    color: #ccc;\r\n    opacity: 0.2;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.ng-invalid.ng-touched[_ngcontent-%COMP%]:not(form) {\r\n    border: 1px solid red;\r\n}\r\n\r\n.ng-valid[_ngcontent-%COMP%]:not(form) {\r\n    border: 1px solid green;\r\n}\r\n\r\n.help-block[_ngcontent-%COMP%] {\r\n    color: red;\r\n    display: block;\r\n    margin-bottom: 15px;\r\n    margin-left: 5px;\r\n}\r\n\r\n@media only screen and (max-width: 1200px) {\r\n    .charge-container[_ngcontent-%COMP%] {\r\n        width: 800px;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 830px) {\r\n    h1[_ngcontent-%COMP%] {\r\n        font-size: 4rem;\r\n    }\r\n    .charge-container[_ngcontent-%COMP%] {\r\n        width: 600px;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 660px) {\r\n    h1[_ngcontent-%COMP%] {\r\n        font-size: 3rem;\r\n    }\r\n\r\n    .charge-container[_ngcontent-%COMP%] {\r\n        width: 90%;\r\n        padding: 60px;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 460px) {\r\n    h1[_ngcontent-%COMP%] {\r\n        font-size: 2rem;\r\n    }\r\n    h3[_ngcontent-%COMP%] {\r\n        font-size: 1rem;\r\n    }\r\n    .charge-container[_ngcontent-%COMP%] {\r\n        padding: 40px;\r\n        border-radius: 30px;\r\n    }\r\n    button[_ngcontent-%COMP%] {\r\n        font-size: 1.1rem;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFuZWwvY2hhcmdlLWFjY291bnQvY2hhcmdlLWFjY291bnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLG9FQUFvRTtJQUNwRSxxQkFBcUI7SUFDckIsNkJBQTZCO0lBQzdCLG9DQUFvQztJQUNwQyxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsTUFBTTtJQUNOLE9BQU87SUFDUCxhQUFhO0lBQ2IsWUFBWTtJQUNaLHFDQUFxRDtJQUNyRCxvQ0FBb0M7SUFDcEMsMkJBQTJCO0lBQzNCLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxvQ0FBb0M7SUFDcEMsWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsY0FBYztJQUNkLG1DQUFtQztJQUNuQyxvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsNkJBQTZCO0lBQzdCLGVBQWU7SUFDZixhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksb0VBQW9FO0lBQ3BFLFdBQVc7SUFDWCxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsV0FBVztJQUNYLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHVFQUF1RTtBQUMzRTs7QUFFQTtJQUNJLHVFQUF1RTtBQUMzRTs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksdUVBQXVFO0FBQzNFOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLHFDQUFxQztJQUNyQyxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1oseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0k7UUFDSSxZQUFZO0lBQ2hCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLFlBQVk7SUFDaEI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLFVBQVU7UUFDVixhQUFhO0lBQ2pCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGFBQWE7UUFDYixtQkFBbUI7SUFDdkI7SUFDQTtRQUNJLGlCQUFpQjtJQUNyQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvcGFuZWwvY2hhcmdlLWFjY291bnQvY2hhcmdlLWFjY291bnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxIHtcclxuICAgIGZvbnQtc2l6ZTogNXJlbTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQocmdiKDEyNCwgMTQsIDE0KSwgcmdiKDgwLCA2LCA2KSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIG1hcmdpbi10b3A6IDkwcHg7XHJcbn1cclxuXHJcbmgzIHtcclxuICAgIGNvbG9yOiB3aGVhdDtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG5oMzo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyDwn5KzJ1xyXG59XHJcblxyXG4uYmctaW1hZ2Uge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9yb3VsZXR0ZS5qcGcnKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQsIHJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBmaWx0ZXI6IGdyYXlzY2FsZSgzMCUpO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHRyYW5zaXRpb246IGZpbHRlciAxcztcclxufVxyXG5cclxuLmJnLWltYWdlOjphZnRlciB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY29udGFpbmVyID4gKiB7XHJcbiAgICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG4uY2hhcmdlLWNvbnRhaW5lciB7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2U1NjMzMjtcclxuICAgIHBhZGRpbmc6IDEyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuNCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICB3aWR0aDogMTE1MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHJnYigxMjQsIDE0LCAxNCksIHJnYig4MCwgNiwgNikpO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDVyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTQwYTBhO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIG9wYWNpdHk6IC43O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuYnV0dG9uOmxhc3QtY2hpbGQge1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQocmdiKDEyNCwgMTQsIDE0KSwgcmdiKDI1MCwgMTA1LCA4KSk7XHJcbn1cclxuXHJcbmJ1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChyZ2IoMTQ2LCAzMSwgMzEpLCByZ2IoMTc5LCA4NywgMTIpKTtcclxufVxyXG5cclxuYnV0dG9uOmRpc2FibGVkIHtcclxuICAgIGN1cnNvcjogYXV0bztcclxuICAgIG9wYWNpdHk6IDAuNTtcclxufVxyXG5cclxuYnV0dG9uOmRpc2FibGVkOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHJnYigxMjQsIDE0LCAxNCksIHJnYigyNTAsIDEwNSwgOCkpO1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sLXRpdGxlIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgY29sb3I6IHdoZWF0O1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sLWlucHV0IHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGhlaWdodDogMy41cmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNjYsIDksIDksIDAuNSk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2wtaW5wdXQ6OnBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiAjY2NjO1xyXG4gICAgb3BhY2l0eTogMC4yO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLm5nLWludmFsaWQubmctdG91Y2hlZDpub3QoZm9ybSkge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG59XHJcblxyXG4ubmctdmFsaWQ6bm90KGZvcm0pIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuO1xyXG59XHJcblxyXG4uaGVscC1ibG9jayB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuICAgIC5jaGFyZ2UtY29udGFpbmVyIHtcclxuICAgICAgICB3aWR0aDogODAwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODMwcHgpIHtcclxuICAgIGgxIHtcclxuICAgICAgICBmb250LXNpemU6IDRyZW07XHJcbiAgICB9XHJcbiAgICAuY2hhcmdlLWNvbnRhaW5lciB7XHJcbiAgICAgICAgd2lkdGg6IDYwMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY2MHB4KSB7XHJcbiAgICBoMSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAzcmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5jaGFyZ2UtY29udGFpbmVyIHtcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDYwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDYwcHgpIHtcclxuICAgIGgxIHtcclxuICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICB9XHJcbiAgICBoMyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgfVxyXG4gICAgLmNoYXJnZS1jb250YWluZXIge1xyXG4gICAgICAgIHBhZGRpbmc6IDQwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIH1cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChargeAccountComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-charge-account',
                templateUrl: './charge-account.component.html',
                styleUrls: ['./charge-account.component.css']
            }]
    }], function () { return [{ type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "qXBG":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../socket.service */ "7fM4");








class AuthService {
    constructor(http, toastr, socket) {
        this.http = http;
        this.toastr = toastr;
        this.socket = socket;
        this.loggedInUserData$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.loading$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.isLoggedIn = false;
    }
    register(username, email, password, cPassword) {
        this.loading$.next(true);
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'public/register', {
            username,
            email,
            password,
            cpassword: cPassword
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(error => {
            this.loading$.next(false);
            if (error.status === 400 && error.error.code === 1) {
                this.toastr.error('Email already taken !', 'Email', {
                    positionClass: 'toast-bottom-right',
                });
            }
            if (error.status === 400 && error.error.code === 2) {
                this.toastr.error('Username already taken !', 'Username', {
                    positionClass: 'toast-bottom-right',
                });
            }
            if (error.status === 400 && error.error.code === 3) {
                this.toastr.error('Validation Fail !', 'Validation', {
                    positionClass: 'toast-bottom-right',
                });
            }
            if (error.status === 500) {
                this.toastr.error('Server Error, Try Again !', 'Server Error', {
                    positionClass: 'toast-bottom-right',
                });
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(() => {
            this.loading$.next(false);
        }));
    }
    login(username, password) {
        this.loading$.next(true);
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'public/login', {
            username,
            password
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(error => {
            this.loading$.next(false);
            if (error.status === 400 && error.error.code === 1) {
                this.toastr.error('User not found !', 'User', {
                    positionClass: 'toast-bottom-right',
                });
            }
            if (error.status === 400 && error.error.code === 2) {
                this.toastr.error('Please activate your account !', 'User', {
                    positionClass: 'toast-bottom-right',
                });
            }
            if (error.status === 401) {
                this.toastr.error('Wrong email or password', 'Try again', {
                    positionClass: 'toast-bottom-right',
                });
            }
            if (error.status === 500) {
                this.toastr.error('Server Error, Try Again !', 'Server Error', {
                    positionClass: 'toast-bottom-right',
                });
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((userData) => {
            this.loading$.next(false);
            const loggedInUser = {
                id: userData.user.id,
                email: userData.user.email,
                token: userData.token,
                username: userData.user.username,
                updatedAt: userData.user.updatedAt,
                fund: userData.user.fund,
                createdAt: userData.user.createdAt
            };
            this.loggedInUserData$.next(loggedInUser);
            this.isLoggedIn = true;
            this.token = userData.token;
            this.socket.emit('userLoggedIn', userData.user.token);
        }));
    }
    activation(token) {
        this.loading$.next(true);
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'public/activation', {
            token
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(error => {
            this.loading$.next(false);
            if (error.status === 400) {
                this.toastr.error('User not found !', 'User', {
                    positionClass: 'toast-bottom-right',
                });
            }
            if (error.status === 401) {
                this.toastr.error('Wrong email or password', 'Try again', {
                    positionClass: 'toast-bottom-right',
                });
            }
            if (error.status === 500) {
                this.toastr.error('Server Error, Try Again !', 'Server Error', {
                    positionClass: 'toast-bottom-right',
                });
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(() => {
            this.loading$.next(false);
        }));
    }
    forget(email) {
        this.loading$.next(true);
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'public/forget', {
            email
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(error => {
            this.loading$.next(false);
            if (error.status === 400) {
                this.toastr.error('User not found !', 'User', {
                    positionClass: 'toast-bottom-right',
                });
            }
            if (error.status === 500) {
                this.toastr.error('Server error, try Again !', 'Server Error', {
                    positionClass: 'toast-bottom-right',
                });
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])();
        }));
    }
    changePassword(password, cpassword) {
        this.loading$.next(true);
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'private/reset-password', {
            token: this.token,
            password,
            cpassword
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(error => {
            this.loading$.next(false);
            if (error.status === 400) {
                this.toastr.error('field required', 'User', {
                    positionClass: 'toast-bottom-right',
                });
            }
            if (error.status === 500) {
                this.toastr.error('Server Error, Try Again !', 'Server Error', {
                    positionClass: 'toast-bottom-right',
                });
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(() => {
            this.loading$.next(false);
        }));
    }
    chargeAccount(amount) {
        this.loading$.next(true);
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'private/charge-account', {
            token: this.token,
            amount
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(error => {
            this.loading$.next(false);
            if (error.status === 400) {
                this.toastr.error('field required', 'User', {
                    positionClass: 'toast-bottom-right',
                });
            }
            if (error.status === 500) {
                this.toastr.error('Server Error, Try Again !', 'Server Error', {
                    positionClass: 'toast-bottom-right',
                });
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((response) => {
            this.loading$.next(false);
            this.loggedInUserData$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1)).subscribe((userData) => {
                const newUserData = {
                    id: userData.id,
                    email: userData.email,
                    token: userData.token,
                    username: userData.username,
                    updatedAt: userData.updatedAt,
                    fund: response.amount,
                    createdAt: userData.createdAt
                };
                this.loggedInUserData$.next(newUserData);
            });
        }));
    }
    support(title, description) {
        this.loading$.next(true);
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'private/support', {
            token: this.token,
            title,
            description
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(error => {
            this.loading$.next(false);
            if (error.status === 400) {
                this.toastr.error('field required', 'User', {
                    positionClass: 'toast-bottom-right',
                });
            }
            if (error.status === 500) {
                this.toastr.error('Server Error, Try Again !', 'Server Error', {
                    positionClass: 'toast-bottom-right',
                });
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((response) => {
            this.loading$.next(false);
        }));
    }
    logout() {
        this.loggedInUserData$.next(null);
        this.isLoggedIn = false;
        this.toastr.success('logged out successfully !', 'Logout', {
            positionClass: 'toast-bottom-right',
        });
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_socket_service__WEBPACK_IMPORTED_MODULE_6__["SocketService"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }, { type: _socket_service__WEBPACK_IMPORTED_MODULE_6__["SocketService"] }]; }, null); })();


/***/ }),

/***/ "tIkO":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/auth.service */ "qXBG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AuthGuard {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    canActivateChild(childRoute, state) {
        return this.auth.isLoggedIn === false ? this.router.navigate(['/']) : true;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "vSbF":
/*!***********************************************************!*\
  !*** ./src/app/game/latest-roll/latest-roll.component.ts ***!
  \***********************************************************/
/*! exports provided: LatestRollComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LatestRollComponent", function() { return LatestRollComponent; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_socket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/socket.service */ "7fM4");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






const _c0 = function (a0) { return { "filter": a0 }; };
function LatestRollComponent_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 2);
} if (rf & 2) {
    const roll_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@list", undefined)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, roll_r1.colorStyle));
} }
class LatestRollComponent {
    constructor(socketService) {
        this.socketService = socketService;
    }
    ngOnInit() {
        this.latestRolls$ = this.socketService.fromEvent('latestRolls')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((rolls) => {
            const updatedRolls = [];
            rolls.forEach((roll) => {
                let colorStyle = '';
                if (roll === 0) {
                    colorStyle = 'hue-rotate(175deg)';
                }
                else if (roll > 7) {
                    colorStyle = 'grayscale(100%)';
                }
                updatedRolls.push({ rolledNumber: roll, colorStyle });
            });
            return updatedRolls;
        }))
            .subscribe((rolls) => {
            this.rolls = rolls;
        });
    }
    ngOnDestroy() {
        this.latestRolls$.unsubscribe();
    }
}
LatestRollComponent.ɵfac = function LatestRollComponent_Factory(t) { return new (t || LatestRollComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_socket_service__WEBPACK_IMPORTED_MODULE_3__["SocketService"])); };
LatestRollComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LatestRollComponent, selectors: [["app-latest-roll"]], decls: 4, vars: 1, consts: [[1, "latest-rolls"], ["src", "../../../assets/red.png", "alt", "", 3, "ngStyle", 4, "ngFor", "ngForOf"], ["src", "../../../assets/red.png", "alt", "", 3, "ngStyle"]], template: function LatestRollComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Latest Rolls: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, LatestRollComponent_img_3_Template, 1, 4, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.rolls);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"]], styles: [".latest-rolls[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    position: relative;\r\n    width: 1150px;\r\n    max-width: 1150px;\r\n    height: 145px;\r\n    color: white;\r\n    margin: 0 auto 0 auto;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n    width: 50px;\r\n    padding: 5px;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n    margin-right: 30px;\r\n    font-style: italic;\r\n    font-weight: bolder;\r\n}\r\n\r\n@media only screen and (max-width: 1200px) {\r\n    .latest-rolls[_ngcontent-%COMP%] {\r\n        width: 800px;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 820px) {\r\n    .latest-rolls[_ngcontent-%COMP%] {\r\n        width: 600px;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 620px) {\r\n    .latest-rolls[_ngcontent-%COMP%] {\r\n        width: 400px;\r\n    }\r\n    img[_ngcontent-%COMP%] {\r\n        width: 40px;\r\n    }\r\n    p[_ngcontent-%COMP%] {\r\n        margin-right: 20px;\r\n        font-size: .7rem;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 420px) {\r\n    .latest-rolls[_ngcontent-%COMP%] {\r\n        width: 250px;\r\n    }\r\n    img[_ngcontent-%COMP%] {\r\n        width: 30px;\r\n    }\r\n    p[_ngcontent-%COMP%] {\r\n        display: none;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS9sYXRlc3Qtcm9sbC9sYXRlc3Qtcm9sbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLFlBQVk7SUFDWixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCOztBQUdBO0lBQ0k7UUFDSSxZQUFZO0lBQ2hCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLFlBQVk7SUFDaEI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksWUFBWTtJQUNoQjtJQUNBO1FBQ0ksV0FBVztJQUNmO0lBQ0E7UUFDSSxrQkFBa0I7UUFDbEIsZ0JBQWdCO0lBQ3BCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLFlBQVk7SUFDaEI7SUFDQTtRQUNJLFdBQVc7SUFDZjtJQUNBO1FBQ0ksYUFBYTtJQUNqQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvZ2FtZS9sYXRlc3Qtcm9sbC9sYXRlc3Qtcm9sbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxhdGVzdC1yb2xscyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDExNTBweDtcclxuICAgIG1heC13aWR0aDogMTE1MHB4O1xyXG4gICAgaGVpZ2h0OiAxNDVweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbjogMCBhdXRvIDAgYXV0bztcclxufVxyXG5cclxuaW1nIHtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG5wIHtcclxuICAgIG1hcmdpbi1yaWdodDogMzBweDtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xyXG4gICAgLmxhdGVzdC1yb2xscyB7XHJcbiAgICAgICAgd2lkdGg6IDgwMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgyMHB4KSB7XHJcbiAgICAubGF0ZXN0LXJvbGxzIHtcclxuICAgICAgICB3aWR0aDogNjAwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjIwcHgpIHtcclxuICAgIC5sYXRlc3Qtcm9sbHMge1xyXG4gICAgICAgIHdpZHRoOiA0MDBweDtcclxuICAgIH1cclxuICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICB9XHJcbiAgICBwIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAuN3JlbTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjBweCkge1xyXG4gICAgLmxhdGVzdC1yb2xscyB7XHJcbiAgICAgICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgfVxyXG4gICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogMzBweDtcclxuICAgIH1cclxuICAgIHAge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbn0iXX0= */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('list', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(50px)' }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0)' }))
                ]),
            ])
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LatestRollComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-latest-roll',
                templateUrl: './latest-roll.component.html',
                styleUrls: ['./latest-roll.component.css'],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('list', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(50px)' }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0)' }))
                        ]),
                    ])
                ]
            }]
    }], function () { return [{ type: src_app_socket_service__WEBPACK_IMPORTED_MODULE_3__["SocketService"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/auth.component */ "LS6v");
/* harmony import */ var _auth_activation_activation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/activation/activation.component */ "/QAi");
/* harmony import */ var _game_game_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./game/game.component */ "jBAD");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./landing/landing.component */ "JhD/");
/* harmony import */ var _panel_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./panel/dashboard/dashboard.component */ "iqiX");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth.guard */ "tIkO");
/* harmony import */ var _panel_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./panel/change-password/change-password.component */ "IaJZ");
/* harmony import */ var _panel_charge_account_charge_account_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./panel/charge-account/charge-account.component */ "k6Nf");
/* harmony import */ var _panel_bet_history_bet_history_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./panel/bet-history/bet-history.component */ "AdIF");
/* harmony import */ var _panel_support_support_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./panel/support/support.component */ "/8S7");














const routes = [
    { path: '', component: _landing_landing_component__WEBPACK_IMPORTED_MODULE_5__["LandingComponent"] },
    { path: 'game', component: _game_game_component__WEBPACK_IMPORTED_MODULE_4__["GameComponent"] },
    { path: 'auth', component: _auth_auth_component__WEBPACK_IMPORTED_MODULE_2__["AuthComponent"] },
    { path: 'activation/:token', component: _auth_activation_activation_component__WEBPACK_IMPORTED_MODULE_3__["ActivationComponent"] },
    { path: 'panel', canActivateChild: [_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]], children: [
            { path: '', component: _panel_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"] },
            { path: 'change-password', component: _panel_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_8__["ChangePasswordComponent"] },
            { path: 'charge-account', component: _panel_charge_account_charge_account_component__WEBPACK_IMPORTED_MODULE_9__["ChargeAccountComponent"] },
            { path: 'bet-history', component: _panel_bet_history_bet_history_component__WEBPACK_IMPORTED_MODULE_10__["BetHistoryComponent"] },
            { path: 'support', component: _panel_support_support_component__WEBPACK_IMPORTED_MODULE_11__["SupportComponent"] }
        ] },
    { path: '**', redirectTo: '/' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map