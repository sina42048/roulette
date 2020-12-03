(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Lion\Desktop\roulette\frontend\src\main.ts */"zUnb");


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
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]], styles: [".bet-control[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    position: relative;\r\n    width: 1150px;\r\n    max-width: 1150px;\r\n    height: 60px;\r\n    margin: 0 auto 30px auto;\r\n    box-shadow: 10px 10px 50px rgba(255, 0, 0, 0.2) inset;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n    border-radius: 40px;\r\n}\r\n\r\nul[_ngcontent-%COMP%] {\r\n    list-style: none;\r\n\r\n}\r\n\r\nli[_ngcontent-%COMP%] {\r\n    display: inline;\r\n    margin-right: 20px;\r\n    color: white;\r\n    cursor: pointer;\r\n    font-weight: bold;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n    padding: 0;\r\n    color: white;\r\n    font-weight: bold;\r\n}\r\n\r\ninput[type='number'][_ngcontent-%COMP%] {\r\n    border: none;\r\n    height: 70%;\r\n    border-radius: 10px;\r\n    background-color: rgba(0, 0, 0, 0.5);\r\n    color: white;\r\n    text-align: center;\r\n    width: 250px;\r\n}\r\n\r\ninput[type='number'][_ngcontent-%COMP%]::placeholder {\r\n    color: #ccc;\r\n    opacity: 0.2;\r\n}\r\n\r\n@media only screen and (max-width: 1200px) {\r\n    .bet-control[_ngcontent-%COMP%] {\r\n        width: 800px;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 820px) {\r\n    .bet-control[_ngcontent-%COMP%] {\r\n        width: 600px;\r\n    }\r\n    li[_ngcontent-%COMP%] {\r\n        font-size: .8rem;\r\n    }\r\n    p[_ngcontent-%COMP%] {\r\n        font-size: .8rem;\r\n    }\r\n    input[type='number'][_ngcontent-%COMP%] {\r\n        width: 150px;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 620px) {\r\n    .bet-control[_ngcontent-%COMP%] {\r\n        width: 400px;\r\n    }\r\n    ul[_ngcontent-%COMP%] {\r\n        display: none;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 420px) {\r\n    .bet-control[_ngcontent-%COMP%] {\r\n        width: 250px;\r\n    }\r\n    ul[_ngcontent-%COMP%] {\r\n        display: none;\r\n    }\r\n    p[_ngcontent-%COMP%] {\r\n        display: none;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS9iZXQtY29udHJvbC9iZXQtY29udHJvbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWix3QkFBd0I7SUFDeEIscURBQXFEO0lBQ3JELDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCOztBQUVwQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLG9DQUFvQztJQUNwQyxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJO1FBQ0ksWUFBWTtJQUNoQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksWUFBWTtJQUNoQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLFlBQVk7SUFDaEI7SUFDQTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLGFBQWE7SUFDakI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2dhbWUvYmV0LWNvbnRyb2wvYmV0LWNvbnRyb2wuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZXQtY29udHJvbCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDExNTBweDtcclxuICAgIG1heC13aWR0aDogMTE1MHB4O1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG8gMzBweCBhdXRvO1xyXG4gICAgYm94LXNoYWRvdzogMTBweCAxMHB4IDUwcHggcmdiYSgyNTUsIDAsIDAsIDAuMikgaW5zZXQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG59XHJcblxyXG51bCB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG5cclxufVxyXG5cclxubGkge1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbnAge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPSdudW1iZXInXSB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBoZWlnaHQ6IDcwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9J251bWJlciddOjpwbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogI2NjYztcclxuICAgIG9wYWNpdHk6IDAuMjtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuICAgIC5iZXQtY29udHJvbCB7XHJcbiAgICAgICAgd2lkdGg6IDgwMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgyMHB4KSB7XHJcbiAgICAuYmV0LWNvbnRyb2wge1xyXG4gICAgICAgIHdpZHRoOiA2MDBweDtcclxuICAgIH1cclxuICAgIGxpIHtcclxuICAgICAgICBmb250LXNpemU6IC44cmVtO1xyXG4gICAgfVxyXG4gICAgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAuOHJlbTtcclxuICAgIH1cclxuICAgIGlucHV0W3R5cGU9J251bWJlciddIHtcclxuICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjIwcHgpIHtcclxuICAgIC5iZXQtY29udHJvbCB7XHJcbiAgICAgICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgfVxyXG4gICAgdWwge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDIwcHgpIHtcclxuICAgIC5iZXQtY29udHJvbCB7XHJcbiAgICAgICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgfVxyXG4gICAgdWwge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICBwIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"] });
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
            url: 'http://172.93.231.237:4000',
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
    apiUrl: 'http://172.93.231.237:2017/'
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
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../socket.service */ "7fM4");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auth/auth.service */ "qXBG");







class BetService {
    constructor(toastr, socketService, auth) {
        this.toastr = toastr;
        this.socketService = socketService;
        this.auth = auth;
        this.retriveAllBets$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.newBetAdded$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.betAmount = 0;
    }
    changeBetAmount($amount) {
        this.betAmount = $amount;
    }
    newBet(name, color) {
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
}
BetService.ɵfac = function BetService_Factory(t) { return new (t || BetService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_socket_service__WEBPACK_IMPORTED_MODULE_4__["SocketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"])); };
BetService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BetService, factory: BetService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BetService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }, { type: _socket_service__WEBPACK_IMPORTED_MODULE_4__["SocketService"] }, { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }]; }, null); })();


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
            console.log(isLoading);
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
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_6__["ResetPasswordComponent"]], styles: [".sign-in-container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n.sign-in[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 20px;\r\n    width: 34rem;\r\n    box-shadow: 10px 10px 50px rgba(255, 0, 0, 0.2) inset;\r\n    border-radius: 0 40px 0 40px;\r\n}\r\nh1[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n}\r\nbutton[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    border: none;\r\n    height: 3rem;\r\n    font-weight: bolder;\r\n    font-size: 1.2rem;\r\n    color: white;\r\n    border-radius: 10px;\r\n    background: -webkit-linear-gradient(rgb(160, 19, 19), rgb(145, 70, 10));\r\n    text-transform: uppercase;\r\n    cursor: pointer;\r\n}\r\n.ng-invalid.ng-touched[_ngcontent-%COMP%]:not(form) {\r\n    border: 1px solid red;\r\n}\r\n.ng-valid[_ngcontent-%COMP%]:not(form) {\r\n    border: 1px solid green;\r\n}\r\n.help-block[_ngcontent-%COMP%] {\r\n    color: red;\r\n    display: block;\r\n    margin-bottom: 15px;\r\n    margin-left: 5px;\r\n}\r\nbutton[_ngcontent-%COMP%]:disabled {\r\n    cursor: auto;\r\n    opacity: 0.5;\r\n}\r\n.form-control-title[_ngcontent-%COMP%] {\r\n    font-weight: bold;\r\n    font-style: italic;\r\n    font-size: 1rem;\r\n}\r\n.form-control-input[_ngcontent-%COMP%] {\r\n    border: none;\r\n    height: 3.5rem;\r\n    border-radius: 10px;\r\n    background-color: rgba(0, 0, 0, 0.5);\r\n    color: white;\r\n    text-align: center;\r\n    width: 100%;\r\n    margin-top: 15px;\r\n    margin-bottom: 15px;\r\n}\r\n.form-control-input[_ngcontent-%COMP%]::placeholder {\r\n    color: #ccc;\r\n    opacity: 0.2;\r\n}\r\n@media only screen and (max-width: 1200px) {\r\n    .sign-in[_ngcontent-%COMP%] {\r\n        width: 24rem;\r\n    }\r\n}\r\n@media only screen and (max-width: 820px) {\r\n    .sign-in[_ngcontent-%COMP%] {\r\n        width: 18rem;\r\n    }\r\n}\r\n@media only screen and (max-width: 620px) {\r\n    .sign-in[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n        margin-top: 15px;\r\n    }\r\n    button[_ngcontent-%COMP%] {\r\n        font-size: .9rem;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9zaWduLWluL3NpZ24taW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLFlBQVk7SUFDWixxREFBcUQ7SUFDckQsNEJBQTRCO0FBQ2hDO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIseUJBQXlCO0FBQzdCO0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsdUVBQXVFO0lBQ3ZFLHlCQUF5QjtJQUN6QixlQUFlO0FBQ25CO0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjtBQUVBO0lBQ0ksVUFBVTtJQUNWLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtBQUNoQjtBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25CO0FBRUE7SUFDSSxZQUFZO0lBQ1osY0FBYztJQUNkLG1CQUFtQjtJQUNuQixvQ0FBb0M7SUFDcEMsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7QUFHQTtJQUNJO1FBQ0ksWUFBWTtJQUNoQjtBQUNKO0FBRUE7SUFDSTtRQUNJLFlBQVk7SUFDaEI7QUFDSjtBQUVBO0lBQ0k7UUFDSSxXQUFXO1FBQ1gsZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvc2lnbi1pbi9zaWduLWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lnbi1pbi1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuLnNpZ24taW4ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgd2lkdGg6IDM0cmVtO1xyXG4gICAgYm94LXNoYWRvdzogMTBweCAxMHB4IDUwcHggcmdiYSgyNTUsIDAsIDAsIDAuMikgaW5zZXQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwIDQwcHggMCA0MHB4O1xyXG59XHJcblxyXG5oMSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBoZWlnaHQ6IDNyZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQocmdiKDE2MCwgMTksIDE5KSwgcmdiKDE0NSwgNzAsIDEwKSk7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubmctaW52YWxpZC5uZy10b3VjaGVkOm5vdChmb3JtKSB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XHJcbn1cclxuXHJcbi5uZy12YWxpZDpub3QoZm9ybSkge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XHJcbn1cclxuXHJcbi5oZWxwLWJsb2NrIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG59XHJcblxyXG5idXR0b246ZGlzYWJsZWQge1xyXG4gICAgY3Vyc29yOiBhdXRvO1xyXG4gICAgb3BhY2l0eTogMC41O1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sLXRpdGxlIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sLWlucHV0IHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGhlaWdodDogMy41cmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2wtaW5wdXQ6OnBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiAjY2NjO1xyXG4gICAgb3BhY2l0eTogMC4yO1xyXG59XHJcbiAgXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xyXG4gICAgLnNpZ24taW4ge1xyXG4gICAgICAgIHdpZHRoOiAyNHJlbTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MjBweCkge1xyXG4gICAgLnNpZ24taW4ge1xyXG4gICAgICAgIHdpZHRoOiAxOHJlbTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MjBweCkge1xyXG4gICAgLnNpZ24taW4ge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICB9XHJcbiAgICBidXR0b24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogLjlyZW07XHJcbiAgICB9XHJcbn0iXX0= */"] });
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
    constructor(animBuild, socketService) {
        this.animBuild = animBuild;
        this.socketService = socketService;
    }
    ngOnInit() {
        this.audio = new Audio();
        this.audio.src = '../../../../assets/roll.mp3';
        this.audio.load();
        this.initialRoulettePosition = parseInt(getComputedStyle(this.roullete.nativeElement).backgroundPositionX.replace('px', ''));
        this.rollObservable$ = this.socketService.fromEvent('roll').subscribe((rolledNumber) => {
            this.audio.play();
            this.rouletteRoll(rolledNumber, -12000, 9000);
        });
        this.rollingObservable$ = this.socketService.fromEvent('rolling').subscribe((rolledNumber) => {
            this.audio.play();
            this.rouletteRoll(rolledNumber, -1500, 100);
        });
        this.restartRollObservable$ = this.socketService.fromEvent('restart').subscribe(() => {
            this.updateRoulette(this.initialRoulettePosition, 2000);
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
        console.log(rolledNumber, ' | ', rollIndex, ' | ', this.currentPosition);
        this.updateRoulette(this.currentPosition, animTimer);
    }
    randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    onResize($event) {
        if ($event.target.innerWidth > 1200) {
            this.initialRoulettePosition = -175;
        }
        else if ($event.target.innerWidth <= 1200 && $event.target.innerWidth >= 800) {
            this.initialRoulettePosition = -350;
        }
        else if ($event.target.innerWidth < 800 && $event.target.innerWidth >= 620) {
            this.initialRoulettePosition = -450;
        }
        else if ($event.target.innerWidth < 620 && $event.target.innerWidth >= 400) {
            this.initialRoulettePosition = -550;
        }
        else {
            this.initialRoulettePosition = -625;
        }
    }
    ngOnDestroy() {
        this.rollingObservable$.unsubscribe();
        this.rollObservable$.unsubscribe();
        this.restartRollObservable$.unsubscribe();
    }
}
RouletteComponent.ɵfac = function RouletteComponent_Factory(t) { return new (t || RouletteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_animations__WEBPACK_IMPORTED_MODULE_0__["AnimationBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_socket_service__WEBPACK_IMPORTED_MODULE_2__["SocketService"])); };
RouletteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RouletteComponent, selectors: [["app-roulette"]], viewQuery: function RouletteComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.roullete = _t.first);
    } }, decls: 2, vars: 0, consts: [[1, "roulette", 3, "resize"], ["roulette", ""]], template: function RouletteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("resize", function RouletteComponent_Template_div_resize_0_listener($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, styles: [".roulette[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 1150px;\r\n    max-width: 1150px;\r\n    height: 115px;\r\n    background-image: url('cases.png');\r\n    background-position-x: -176px;\r\n    color: white;\r\n    margin: 20px auto 0 auto;\r\n}\r\n\r\n.roulette[_ngcontent-%COMP%]::before {\r\n    content: \"\";\r\n    left: 50%;\r\n    top: 50%;\r\n    width: 4px;\r\n    background-color: rgba(61, 6, 6, 0.5);\r\n    height: 100%;\r\n    position: absolute;\r\n    z-index: 2;\r\n    transform: translate(-50%, -50%);\r\n}\r\n\r\n@media only screen and (min-width: 1200px) {\r\n    .roulette[_ngcontent-%COMP%] {\r\n        background-position-x: -175px;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 1200px) {\r\n    .roulette[_ngcontent-%COMP%] {\r\n        width: 800px;\r\n        background-position-x: -350px;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 820px) {\r\n    .roulette[_ngcontent-%COMP%] {\r\n        width: 600px;\r\n        background-position-x: -450px;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 620px) {\r\n    .roulette[_ngcontent-%COMP%] {\r\n        width: 400px;\r\n        background-position-x: -550px;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 420px) {\r\n    .roulette[_ngcontent-%COMP%] {\r\n        width: 250px;\r\n        background-position-x: -625px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS9yb3VsZXR0ZS9yb3VsZXR0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLGtDQUFrRDtJQUNsRCw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxTQUFTO0lBQ1QsUUFBUTtJQUNSLFVBQVU7SUFDVixxQ0FBcUM7SUFDckMsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsZ0NBQWdDO0FBQ3BDOztBQUdBO0lBQ0k7UUFDSSw2QkFBNkI7SUFDakM7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksWUFBWTtRQUNaLDZCQUE2QjtJQUNqQztBQUNKOztBQUVBO0lBQ0k7UUFDSSxZQUFZO1FBQ1osNkJBQTZCO0lBQ2pDO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLFlBQVk7UUFDWiw2QkFBNkI7SUFDakM7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksWUFBWTtRQUNaLDZCQUE2QjtJQUNqQztBQUNKIiwiZmlsZSI6InNyYy9hcHAvZ2FtZS9yb3VsZXR0ZS9yb3VsZXR0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvdWxldHRlIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMTUwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDExNTBweDtcclxuICAgIGhlaWdodDogMTE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9jYXNlcy5wbmcnKTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogLTE3NnB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luOiAyMHB4IGF1dG8gMCBhdXRvO1xyXG59XHJcblxyXG4ucm91bGV0dGU6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICB3aWR0aDogNHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2MSwgNiwgNiwgMC41KTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxufVxyXG5cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7XHJcbiAgICAucm91bGV0dGUge1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogLTE3NXB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xyXG4gICAgLnJvdWxldHRlIHtcclxuICAgICAgICB3aWR0aDogODAwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiAtMzUwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODIwcHgpIHtcclxuICAgIC5yb3VsZXR0ZSB7XHJcbiAgICAgICAgd2lkdGg6IDYwMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogLTQ1MHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYyMHB4KSB7XHJcbiAgICAucm91bGV0dGUge1xyXG4gICAgICAgIHdpZHRoOiA0MDBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IC01NTBweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjBweCkge1xyXG4gICAgLnJvdWxldHRlIHtcclxuICAgICAgICB3aWR0aDogMjUwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiAtNjI1cHg7XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RouletteComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-roulette',
                templateUrl: './roulette.component.html',
                styleUrls: ['./roulette.component.css']
            }]
    }], function () { return [{ type: _angular_animations__WEBPACK_IMPORTED_MODULE_0__["AnimationBuilder"] }, { type: src_app_socket_service__WEBPACK_IMPORTED_MODULE_2__["SocketService"] }]; }, { roullete: [{
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
        this.rollTimer$ = this.socketService.fromEvent('timer').subscribe((data) => {
            if (data === 0) {
                this.testWidth = 100;
                this.timer = 'Rolling ...';
            }
            else {
                this.testWidth = 100 - (data * 6.6);
                this.timer = data.toString() + ' Sec';
            }
        });
        this.restartRoll$ = this.socketService.fromEvent('restart').subscribe(() => {
            this.timer = 'Restarting Game...';
        });
    }
    ngOnDestroy() {
        this.rollTimer$.unsubscribe();
        this.restartRoll$.unsubscribe();
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
        this.gameButtonInterval$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(500).subscribe(() => {
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
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('200ms linear')
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('end => start', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('200ms linear')
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
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('200ms linear')
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('end => start', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('200ms linear')
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
    } }, directives: [_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_1__["SignUpComponent"], _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_2__["SignInComponent"]], styles: [".container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    width: 100%;\r\n    height: 100vh;\r\n}\r\n\r\n.container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    z-index: 2;\r\n}\r\n\r\n.bg-image[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    height: 100vh;\r\n    width: 100vw;\r\n    background-image: url('roulette.jpg');\r\n    background-repeat: no-repeat, repeat;\r\n    background-position: center;\r\n    background-size: cover;\r\n    filter: grayscale(30%);\r\n    z-index: 1;\r\n    transition: filter 1s;\r\n}\r\n\r\n.bg-image[_ngcontent-%COMP%]::after {\r\n    content: '';\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    background-color: rgba(0, 0, 0, 0.8);\r\n    width: 100vw;\r\n    height: 100vh;\r\n}\r\n\r\n.auth-container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    flex-wrap: wrap;\r\n    position: relative;\r\n    width: 1150px;\r\n    max-width: 1150px;\r\n    color: white;\r\n    margin-top: 120px;\r\n}\r\n\r\n.indicator[_ngcontent-%COMP%] {\r\n    width: 2px;\r\n    height: 100%;\r\n    background-color: rgba(173, 23, 23, 0.5);\r\n}\r\n\r\n@media only screen and (max-width: 1200px) {\r\n    .auth-container[_ngcontent-%COMP%] {\r\n        width: 800px;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 820px) {\r\n    .auth-container[_ngcontent-%COMP%] {\r\n        width: 600px;\r\n    }\r\n    h1[_ngcontent-%COMP%] {\r\n        color: red;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 620px) {\r\n    .auth-container[_ngcontent-%COMP%] {\r\n        flex-direction: column;\r\n        width: 400px;\r\n        height: auto;\r\n    }\r\n\r\n    .indicator[_ngcontent-%COMP%] {\r\n        display: none;\r\n    }\r\n\r\n}\r\n\r\n@media only screen and (max-width: 420px) {\r\n    .auth-container[_ngcontent-%COMP%] {\r\n        flex-direction: column;\r\n        width: 250px;\r\n        height: auto;\r\n    }\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9hdXRoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGVBQWU7SUFDZixNQUFNO0lBQ04sT0FBTztJQUNQLGFBQWE7SUFDYixZQUFZO0lBQ1oscUNBQWtEO0lBQ2xELG9DQUFvQztJQUNwQywyQkFBMkI7SUFDM0Isc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1YscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLG9DQUFvQztJQUNwQyxZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWix3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSTtRQUNJLFlBQVk7SUFDaEI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksWUFBWTtJQUNoQjtJQUNBO1FBQ0ksVUFBVTtJQUNkO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLHNCQUFzQjtRQUN0QixZQUFZO1FBQ1osWUFBWTtJQUNoQjs7SUFFQTtRQUNJLGFBQWE7SUFDakI7O0FBRUo7O0FBRUE7SUFDSTtRQUNJLHNCQUFzQjtRQUN0QixZQUFZO1FBQ1osWUFBWTtJQUNoQjs7QUFFSiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvYXV0aC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbi5jb250YWluZXIgPiAqIHtcclxuICAgIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbi5iZy1pbWFnZSB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL3JvdWxldHRlLmpwZycpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdCwgcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGZpbHRlcjogZ3JheXNjYWxlKDMwJSk7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgdHJhbnNpdGlvbjogZmlsdGVyIDFzO1xyXG59XHJcblxyXG4uYmctaW1hZ2U6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbi5hdXRoLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMTUwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDExNTBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbi10b3A6IDEyMHB4O1xyXG59XHJcblxyXG4uaW5kaWNhdG9yIHtcclxuICAgIHdpZHRoOiAycHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE3MywgMjMsIDIzLCAwLjUpO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xyXG4gICAgLmF1dGgtY29udGFpbmVyIHtcclxuICAgICAgICB3aWR0aDogODAwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODIwcHgpIHtcclxuICAgIC5hdXRoLWNvbnRhaW5lciB7XHJcbiAgICAgICAgd2lkdGg6IDYwMHB4O1xyXG4gICAgfVxyXG4gICAgaDEge1xyXG4gICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjIwcHgpIHtcclxuICAgIC5hdXRoLWNvbnRhaW5lciB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICB3aWR0aDogNDAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgfVxyXG5cclxuICAgIC5pbmRpY2F0b3Ige1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyMHB4KSB7XHJcbiAgICAuYXV0aC1jb250YWluZXIge1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgIH1cclxuXHJcbn1cclxuIl19 */"] });
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
            .subscribe((data) => {
            this.toastr.success('Congrats ! your account created successfully !', 'Sign up', {
                positionClass: 'toast-bottom-right',
            });
            this.router.navigate(['/game']);
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
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: [".sign-up[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 20px;\r\n    width: 34rem;\r\n    box-shadow: 10px 10px 50px rgba(255, 0, 0, 0.2) inset;\r\n    border-radius: 40px 0 40px;\r\n    height: 100%;\r\n}\r\n\r\n.ng-invalid.ng-touched[_ngcontent-%COMP%]:not(form) {\r\n    border: 1px solid red;\r\n}\r\n\r\n.ng-valid[_ngcontent-%COMP%]:not(form) {\r\n    border: 1px solid green;\r\n}\r\n\r\n.help-block[_ngcontent-%COMP%] {\r\n    color: red;\r\n    display: block;\r\n    margin-bottom: 15px;\r\n    margin-left: 5px;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    border: none;\r\n    height: 3rem;\r\n    font-weight: bolder;\r\n    font-size: 1.2rem;\r\n    color: white;\r\n    border-radius: 10px;\r\n    background: -webkit-linear-gradient(rgb(17, 124, 3), rgb(26, 102, 7));\r\n    text-transform: uppercase;\r\n    cursor: pointer;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:disabled {\r\n    cursor: auto;\r\n    opacity: 0.5;\r\n}\r\n\r\n.form-control-title[_ngcontent-%COMP%] {\r\n    display: block;\r\n    font-weight: bold;\r\n    font-style: italic;\r\n    font-size: 1rem;\r\n}\r\n\r\n.form-control-input[_ngcontent-%COMP%] {\r\n    border: none;\r\n    height: 3.5rem;\r\n    border-radius: 10px;\r\n    background-color: rgba(0, 0, 0, 0.5);\r\n    color: white;\r\n    text-align: center;\r\n    width: 100%;\r\n    margin-top: 15px;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.form-control-input[_ngcontent-%COMP%]::placeholder {\r\n    color: #ccc;\r\n    opacity: 0.2;\r\n}\r\n\r\n.form-control-input[_ngcontent-%COMP%]::placeholder {\r\n    color: #ccc;\r\n    opacity: 0.2;\r\n}\r\n\r\n@media only screen and (max-width: 1200px) {\r\n    .sign-up[_ngcontent-%COMP%] {\r\n        width: 24rem;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 820px) {\r\n    .sign-up[_ngcontent-%COMP%] {\r\n        width: 18rem;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 620px) {\r\n    .sign-up[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n        margin-bottom: 15px;\r\n    }\r\n    button[_ngcontent-%COMP%] {\r\n        font-size: .9rem;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9zaWduLXVwL3NpZ24tdXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLFlBQVk7SUFDWixxREFBcUQ7SUFDckQsMEJBQTBCO0lBQzFCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHFFQUFxRTtJQUNyRSx5QkFBeUI7SUFDekIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLG9DQUFvQztJQUNwQyxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJO1FBQ0ksWUFBWTtJQUNoQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxZQUFZO0lBQ2hCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLFdBQVc7UUFDWCxtQkFBbUI7SUFDdkI7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9zaWduLXVwL3NpZ24tdXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWduLXVwIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIHdpZHRoOiAzNHJlbTtcclxuICAgIGJveC1zaGFkb3c6IDEwcHggMTBweCA1MHB4IHJnYmEoMjU1LCAwLCAwLCAwLjIpIGluc2V0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNDBweCAwIDQwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5uZy1pbnZhbGlkLm5nLXRvdWNoZWQ6bm90KGZvcm0pIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxufVxyXG5cclxuLm5nLXZhbGlkOm5vdChmb3JtKSB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcclxufVxyXG5cclxuLmhlbHAtYmxvY2sge1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuXHJcbmgxIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGhlaWdodDogM3JlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChyZ2IoMTcsIDEyNCwgMyksIHJnYigyNiwgMTAyLCA3KSk7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5idXR0b246ZGlzYWJsZWQge1xyXG4gICAgY3Vyc29yOiBhdXRvO1xyXG4gICAgb3BhY2l0eTogMC41O1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sLXRpdGxlIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2wtaW5wdXQge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgaGVpZ2h0OiAzLjVyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbC1pbnB1dDo6cGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6ICNjY2M7XHJcbiAgICBvcGFjaXR5OiAwLjI7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2wtaW5wdXQ6OnBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiAjY2NjO1xyXG4gICAgb3BhY2l0eTogMC4yO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xyXG4gICAgLnNpZ24tdXAge1xyXG4gICAgICAgIHdpZHRoOiAyNHJlbTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MjBweCkge1xyXG4gICAgLnNpZ24tdXAge1xyXG4gICAgICAgIHdpZHRoOiAxOHJlbTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MjBweCkge1xyXG4gICAgLnNpZ24tdXAge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICB9XHJcbiAgICBidXR0b24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogLjlyZW07XHJcbiAgICB9XHJcbn0iXX0= */"] });
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./landing/landing.component */ "JhD/");
/* harmony import */ var _game_game_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./game/game.component */ "jBAD");
/* harmony import */ var _game_roulette_roulette_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./game/roulette/roulette.component */ "GYVa");
/* harmony import */ var _game_timer_timer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./game/timer/timer.component */ "HKqw");
/* harmony import */ var _game_bet_bet_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./game/bet/bet.component */ "ijqx");
/* harmony import */ var _game_latest_roll_latest_roll_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./game/latest-roll/latest-roll.component */ "vSbF");
/* harmony import */ var _game_bet_control_bet_control_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./game/bet-control/bet-control.component */ "2++q");
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./auth/auth.component */ "LS6v");
/* harmony import */ var _auth_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./auth/sign-up/sign-up.component */ "Qv8w");
/* harmony import */ var _auth_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./auth/sign-in/sign-in.component */ "G11N");
/* harmony import */ var _auth_sign_in_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./auth/sign-in/reset-password/reset-password.component */ "eN75");
























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrModule"].forRoot(),
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            ng9_odometer__WEBPACK_IMPORTED_MODULE_6__["Ng9OdometerModule"].forRoot()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
        _landing_landing_component__WEBPACK_IMPORTED_MODULE_10__["LandingComponent"],
        _game_game_component__WEBPACK_IMPORTED_MODULE_11__["GameComponent"],
        _game_roulette_roulette_component__WEBPACK_IMPORTED_MODULE_12__["RouletteComponent"],
        _game_timer_timer_component__WEBPACK_IMPORTED_MODULE_13__["TimerComponent"],
        _game_bet_bet_component__WEBPACK_IMPORTED_MODULE_14__["BetComponent"],
        _game_latest_roll_latest_roll_component__WEBPACK_IMPORTED_MODULE_15__["LatestRollComponent"],
        _game_bet_control_bet_control_component__WEBPACK_IMPORTED_MODULE_16__["BetControlComponent"],
        _auth_auth_component__WEBPACK_IMPORTED_MODULE_17__["AuthComponent"],
        _auth_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_18__["SignUpComponent"],
        _auth_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_19__["SignInComponent"],
        _auth_sign_in_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_20__["ResetPasswordComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], ng9_odometer__WEBPACK_IMPORTED_MODULE_6__["Ng9OdometerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
                    _landing_landing_component__WEBPACK_IMPORTED_MODULE_10__["LandingComponent"],
                    _game_game_component__WEBPACK_IMPORTED_MODULE_11__["GameComponent"],
                    _game_roulette_roulette_component__WEBPACK_IMPORTED_MODULE_12__["RouletteComponent"],
                    _game_timer_timer_component__WEBPACK_IMPORTED_MODULE_13__["TimerComponent"],
                    _game_bet_bet_component__WEBPACK_IMPORTED_MODULE_14__["BetComponent"],
                    _game_latest_roll_latest_roll_component__WEBPACK_IMPORTED_MODULE_15__["LatestRollComponent"],
                    _game_bet_control_bet_control_component__WEBPACK_IMPORTED_MODULE_16__["BetControlComponent"],
                    _auth_auth_component__WEBPACK_IMPORTED_MODULE_17__["AuthComponent"],
                    _auth_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_18__["SignUpComponent"],
                    _auth_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_19__["SignInComponent"],
                    _auth_sign_in_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_20__["ResetPasswordComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrModule"].forRoot(),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                    ng9_odometer__WEBPACK_IMPORTED_MODULE_6__["Ng9OdometerModule"].forRoot()
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





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
    constructor(toastr) {
        this.toastr = toastr;
        this.email = '';
    }
    ngOnInit() {
    }
    onSubmit() {
        this.toastr.info('will be available as soon as possible !', 'under construction !', {
            positionClass: 'toast-bottom-right',
        });
    }
}
ResetPasswordComponent.ɵfac = function ResetPasswordComponent_Factory(t) { return new (t || ResetPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"])); };
ResetPasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResetPasswordComponent, selectors: [["app-reset-password"]], decls: 12, vars: 4, consts: [[1, "reset-password"], [1, "form-control"], ["for", "email", 1, "form-control-title"], ["name", "email", "placeholder", "Enter email", "type", "text", "required", "", "email", "", 1, "form-control-input", 3, "ngModel", "ngModelChange"], ["em", "ngModel"], ["class", "help-block", 4, "ngIf"], ["type", "button", 3, "disabled", "click"], [1, "help-block"]], template: function ResetPasswordComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "send reset link !");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r0.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["EmailValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: [".reset-password[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 20px;\r\n    width: 34rem;\r\n    box-shadow: 10px 10px 50px rgba(255, 0, 0, 0.2) inset;\r\n    border-radius: 40px 0 40px 0;\r\n    margin-top: 15px;\r\n    height: 100%;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    border: none;\r\n    height: 3rem;\r\n    font-weight: bolder;\r\n    font-size: 1.2rem;\r\n    color: white;\r\n    border-radius: 10px;\r\n    background: -webkit-linear-gradient(rgb(124, 82, 3), rgb(102, 69, 7));\r\n    text-transform: uppercase;\r\n    cursor: pointer;\r\n}\r\n\r\n.form-control-title[_ngcontent-%COMP%] {\r\n    font-weight: bold;\r\n    font-style: italic;\r\n    font-size: 1rem;\r\n}\r\n\r\n.form-control-input[_ngcontent-%COMP%] {\r\n    border: none;\r\n    height: 3.5rem;\r\n    border-radius: 10px;\r\n    background-color: rgba(0, 0, 0, 0.5);\r\n    color: white;\r\n    text-align: center;\r\n    width: 100%;\r\n    margin-top: 15px;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.form-control-input[_ngcontent-%COMP%]::placeholder {\r\n    color: #ccc;\r\n    opacity: 0.2;\r\n}\r\n\r\n.ng-invalid.ng-touched[_ngcontent-%COMP%]:not(form) {\r\n    border: 1px solid red;\r\n}\r\n\r\n.ng-valid[_ngcontent-%COMP%]:not(form) {\r\n    border: 1px solid green;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:disabled {\r\n    cursor: auto;\r\n    opacity: 0.5;\r\n}\r\n\r\n.help-block[_ngcontent-%COMP%] {\r\n    color: red;\r\n    display: block;\r\n    margin-bottom: 15px;\r\n    margin-left: 5px;\r\n}\r\n\r\n@media only screen and (max-width: 1200px) {\r\n    .reset-password[_ngcontent-%COMP%] {\r\n        width: 24rem;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 820px) {\r\n    .reset-password[_ngcontent-%COMP%] {\r\n        width: 18rem;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 620px) {\r\n    .reset-password[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n    }\r\n    button[_ngcontent-%COMP%] {\r\n        font-size: .9rem;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9zaWduLWluL3Jlc2V0LXBhc3N3b3JkL3Jlc2V0LXBhc3N3b3JkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixZQUFZO0lBQ1oscURBQXFEO0lBQ3JELDRCQUE0QjtJQUM1QixnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIscUVBQXFFO0lBQ3JFLHlCQUF5QjtJQUN6QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsb0NBQW9DO0lBQ3BDLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCOztBQUdBO0lBQ0k7UUFDSSxZQUFZO0lBQ2hCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLFlBQVk7SUFDaEI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksV0FBVztJQUNmO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvc2lnbi1pbi9yZXNldC1wYXNzd29yZC9yZXNldC1wYXNzd29yZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlc2V0LXBhc3N3b3JkIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIHdpZHRoOiAzNHJlbTtcclxuICAgIGJveC1zaGFkb3c6IDEwcHggMTBweCA1MHB4IHJnYmEoMjU1LCAwLCAwLCAwLjIpIGluc2V0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNDBweCAwIDQwcHggMDtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbmgxIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGhlaWdodDogM3JlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChyZ2IoMTI0LCA4MiwgMyksIHJnYigxMDIsIDY5LCA3KSk7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sLXRpdGxlIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sLWlucHV0IHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGhlaWdodDogMy41cmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2wtaW5wdXQ6OnBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiAjY2NjO1xyXG4gICAgb3BhY2l0eTogMC4yO1xyXG59XHJcblxyXG4ubmctaW52YWxpZC5uZy10b3VjaGVkOm5vdChmb3JtKSB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XHJcbn1cclxuXHJcbi5uZy12YWxpZDpub3QoZm9ybSkge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XHJcbn1cclxuXHJcbmJ1dHRvbjpkaXNhYmxlZCB7XHJcbiAgICBjdXJzb3I6IGF1dG87XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbn1cclxuXHJcbi5oZWxwLWJsb2NrIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG59XHJcblxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuICAgIC5yZXNldC1wYXNzd29yZCB7XHJcbiAgICAgICAgd2lkdGg6IDI0cmVtO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgyMHB4KSB7XHJcbiAgICAucmVzZXQtcGFzc3dvcmQge1xyXG4gICAgICAgIHdpZHRoOiAxOHJlbTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MjBweCkge1xyXG4gICAgLnJlc2V0LXBhc3N3b3JkIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAuOXJlbTtcclxuICAgIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResetPasswordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-reset-password',
                templateUrl: './reset-password.component.html',
                styleUrls: ['./reset-password.component.css']
            }]
    }], function () { return [{ type: ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"] }]; }, null); })();


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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "$");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Welcome ", ctx_r1.userData.username, " | ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("number", ctx_r1.userData.fund);
} }
class HeaderComponent {
    constructor(auth) {
        this.auth = auth;
        this.isUserLoggedIn = false;
    }
    ngOnInit() {
        this.auth.loggedInUserData$.subscribe((userData) => {
            this.isUserLoggedIn = userData != null;
            this.userData = userData;
        });
    }
    ngOnDestroy() {
        this.loggedInUserData$.unsubscribe();
        this.userUpdateFund$.unsubscribe();
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 9, vars: 2, consts: [[1, "nav-menu"], [1, "container"], [1, "menu"], ["class", "menu-item", 4, "ngIf"], [1, "menu-item"], ["routerLink", "/game"], ["routerLink", "/auth"], ["routerLink", "/"], [3, "number"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isUserLoggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userData);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], ng9_odometer__WEBPACK_IMPORTED_MODULE_4__["Ng9OdometerComponent"]], styles: [".nav-menu[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100vw;\r\n    background: -webkit-linear-gradient(rgb(124, 14, 14), rgb(80, 6, 6));\r\n    min-height: 60px;\r\n    z-index: 9999;\r\n    opacity: 0.7;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n    max-width: 1150px;\r\n    margin: 0 auto;\r\n}\r\n\r\n.menu[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    flex-direction: row-reverse;\r\n    justify-content: space-around;\r\n    margin: 0;\r\n    padding: 0;\r\n    list-style-type: none;\r\n    line-height: 60px;\r\n}\r\n\r\n.menu-item[_ngcontent-%COMP%] {\r\n    display: inline;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.menu-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    padding: 8px;\r\n    text-decoration: none;\r\n    color: #eee;\r\n    font-size: 1.2rem;\r\n    display: block;\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n\r\n.menu-item[_ngcontent-%COMP%]:hover {\r\n    background: -webkit-linear-gradient(rgb(187, 83, 22), rgb(80, 6, 6));\r\n    cursor: pointer;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n    width: 30px;\r\n    height: 30px;\r\n    display: inline;\r\n    vertical-align: middle;\r\n    margin-left: 5px;\r\n}\r\n\r\n@media only screen and (max-width: 800px) {\r\n    .menu-item[_ngcontent-%COMP%] {\r\n        padding: 0 5px;\r\n    }\r\n    .menu-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n        font-size: 1rem;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 620px) {\r\n    .menu-item[_ngcontent-%COMP%] {\r\n        padding: 0 5px;\r\n    }\r\n    .menu-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n        font-size: .6rem;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLE1BQU07SUFDTixPQUFPO0lBQ1AsWUFBWTtJQUNaLG9FQUFvRTtJQUNwRSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsMkJBQTJCO0lBQzNCLDZCQUE2QjtJQUM3QixTQUFTO0lBQ1QsVUFBVTtJQUNWLHFCQUFxQjtJQUNyQixpQkFBaUI7QUFDckI7O0FBR0E7SUFDSSxlQUFlO0lBQ2YseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksb0VBQW9FO0lBQ3BFLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0k7UUFDSSxjQUFjO0lBQ2xCO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdi1tZW51IHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChyZ2IoMTI0LCAxNCwgMTQpLCByZ2IoODAsIDYsIDYpKTtcclxuICAgIG1pbi1oZWlnaHQ6IDYwcHg7XHJcbiAgICB6LWluZGV4OiA5OTk5O1xyXG4gICAgb3BhY2l0eTogMC43O1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICAgIG1heC13aWR0aDogMTE1MHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi5tZW51IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICBsaW5lLWhlaWdodDogNjBweDtcclxufVxyXG5cclxuXHJcbi5tZW51LWl0ZW0ge1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLm1lbnUtaXRlbSBhIHtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiAjZWVlO1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubWVudS1pdGVtOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHJnYigxODcsIDgzLCAyMiksIHJnYig4MCwgNiwgNikpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5pbWcge1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gICAgLm1lbnUtaXRlbSB7XHJcbiAgICAgICAgcGFkZGluZzogMCA1cHg7XHJcbiAgICB9XHJcbiAgICAubWVudS1pdGVtIGEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MjBweCkge1xyXG4gICAgLm1lbnUtaXRlbSB7XHJcbiAgICAgICAgcGFkZGluZzogMCA1cHg7XHJcbiAgICB9XHJcbiAgICAubWVudS1pdGVtIGEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogLjZyZW07XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return [{ type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, null); })();


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







function BetComponent_li_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](bet_r1.amount);
} }
const _c0 = function (a0) { return { "filter": a0 }; };
const _c1 = function (a0) { return { "background": a0 }; };
class BetComponent {
    constructor(socketService, betService) {
        this.socketService = socketService;
        this.betService = betService;
        this.bets = [];
        this.winnerStatus = 'normal';
    }
    ngOnInit() {
        this.retriveAllBets$ = this
            .betService
            .retriveAllBets$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((bets) => {
            let colorFiltered;
            colorFiltered = bets.filter((bet) => bet.color == this.betColor);
            return colorFiltered;
        }))
            .subscribe((bets) => {
            this.bets = bets;
        });
        this.newBetAdded$ = this.betService.newBetAdded$.subscribe((bet) => {
            if (bet.color == this.betColor)
                this.bets.push(bet);
            this.bets.sort((a, b) => {
                if (a.amount < b.amount) {
                    return 1;
                }
                else if (a.amount > b.amount) {
                    return -1;
                }
                else {
                    return 0;
                }
            });
        });
        this.winner$ = this.socketService.fromEvent('winner').subscribe((winnerColor) => {
            if (winnerColor == this.betColor) {
                this.winnerStatus = 'winner';
            }
            else {
                this.winnerStatus = 'loser';
            }
        });
        this.restart$ = this.socketService.fromEvent('restart').subscribe(() => {
            this.bets = [];
            this.winnerStatus = 'normal';
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
        this.betService.newBet('Sina', this.betColor);
    }
    ngOnDestroy() {
        this.retriveAllBets$.unsubscribe();
        this.newBetAdded$.unsubscribe();
        this.winner$.unsubscribe();
        this.restart$.unsubscribe();
    }
}
BetComponent.ɵfac = function BetComponent_Factory(t) { return new (t || BetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_socket_service__WEBPACK_IMPORTED_MODULE_3__["SocketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_bet_service__WEBPACK_IMPORTED_MODULE_4__["BetService"])); };
BetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BetComponent, selectors: [["app-bet"]], inputs: { betColor: "betColor", betText: "betText" }, decls: 7, vars: 9, consts: [[1, "bet"], [1, "bet-header"], ["src", "../../../assets/red.png", "alt", "", 1, "bet-image", 3, "ngStyle"], [3, "ngStyle", "click"], [4, "ngFor", "ngForOf"], [1, "place-bet-holder"], [1, "place-bet-name"], [1, "place-bet-amount"]], template: function BetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BetComponent_Template_button_click_3_listener() { return ctx.addNewBet(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, BetComponent_li_6_Template, 6, 4, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c0, ctx.imageColor));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c1, ctx.buttonColor));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.betText);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@list", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.bets);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: [".bet[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 22rem;\r\n    height: 200px;\r\n    overflow: visible;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    border: none;\r\n    height: 3rem;\r\n    font-weight: bolder;\r\n    font-size: 1.2rem;\r\n    color: white;\r\n    border-radius: 10px;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.bet-image[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: -30px;\r\n    width: 50px;\r\n    transform: rotate(-18deg);\r\n}\r\n\r\n.bet-header[_ngcontent-%COMP%]{\r\n    transition: .2s cubic-bezier(0.1, 0.1, 0.1, 0.1);\r\n}\r\n\r\n.bet-header[_ngcontent-%COMP%]:hover {\r\n    transform: scale(1.1);\r\n}\r\n\r\nul[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    padding: 0;\r\n    list-style-type: none;\r\n}\r\n\r\nli[_ngcontent-%COMP%] {\r\n    margin: 20px;\r\n}\r\n\r\n.place-bet-holder[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n\r\n.place-bet-name[_ngcontent-%COMP%] {\r\n    font-weight: bolder;\r\n}\r\n\r\n.place-bet-amount[_ngcontent-%COMP%] {\r\n    font-size: .6rem;\r\n}\r\n\r\n@media only screen and (max-width: 1200px) {\r\n    .bet[_ngcontent-%COMP%] {\r\n        width: 16rem;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 820px) {\r\n    .bet[_ngcontent-%COMP%] {\r\n        width: 12rem;\r\n    }\r\n    button[_ngcontent-%COMP%] {\r\n        font-size: .9rem;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 620px) {\r\n    .bet[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n    }\r\n    button[_ngcontent-%COMP%] {\r\n        font-size: .9rem;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS9iZXQvYmV0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7SUFDYixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixXQUFXO0lBQ1gseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksZ0RBQWdEO0FBQ3BEOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSTtRQUNJLFlBQVk7SUFDaEI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksWUFBWTtJQUNoQjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLFdBQVc7SUFDZjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9nYW1lL2JldC9iZXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZXQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDIycmVtO1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBoZWlnaHQ6IDNyZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG5idXR0b246aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uYmV0LWltYWdlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogLTMwcHg7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC0xOGRlZyk7XHJcbn1cclxuXHJcbi5iZXQtaGVhZGVye1xyXG4gICAgdHJhbnNpdGlvbjogLjJzIGN1YmljLWJlemllcigwLjEsIDAuMSwgMC4xLCAwLjEpO1xyXG59XHJcblxyXG4uYmV0LWhlYWRlcjpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbn1cclxuXHJcbnVsIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbn1cclxuXHJcbmxpIHtcclxuICAgIG1hcmdpbjogMjBweDtcclxufVxyXG5cclxuLnBsYWNlLWJldC1ob2xkZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnBsYWNlLWJldC1uYW1lIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbn1cclxuXHJcbi5wbGFjZS1iZXQtYW1vdW50IHtcclxuICAgIGZvbnQtc2l6ZTogLjZyZW07XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XHJcbiAgICAuYmV0IHtcclxuICAgICAgICB3aWR0aDogMTZyZW07XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODIwcHgpIHtcclxuICAgIC5iZXQge1xyXG4gICAgICAgIHdpZHRoOiAxMnJlbTtcclxuICAgIH1cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAuOXJlbTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MjBweCkge1xyXG4gICAgLmJldCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICBidXR0b24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogLjlyZW07XHJcbiAgICB9XHJcbn0iXX0= */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('list', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(-20px)' }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0)' }))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translateY(0px)' }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translateY(20px)' }))])
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
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(-20px)' }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0)' }))
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translateY(0px)' }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translateY(20px)' }))])
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
GameComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GameComponent, selectors: [["app-game"]], decls: 10, vars: 0, consts: [[1, "bg-image"], [1, "container"], [1, "bets-container"], ["betColor", "red", "betText", "PLACE BET (X2)"], ["betColor", "green", "betText", "PLACE BET (X14)"], ["betColor", "black", "betText", "PLACE BET (X2)"]], template: function GameComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, directives: [_timer_timer_component__WEBPACK_IMPORTED_MODULE_6__["TimerComponent"], _roulette_roulette_component__WEBPACK_IMPORTED_MODULE_7__["RouletteComponent"], _latest_roll_latest_roll_component__WEBPACK_IMPORTED_MODULE_8__["LatestRollComponent"], _bet_control_bet_control_component__WEBPACK_IMPORTED_MODULE_9__["BetControlComponent"], _bet_bet_component__WEBPACK_IMPORTED_MODULE_10__["BetComponent"]], styles: [".container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    width: 100%;\r\n    height: 100vh;\r\n}\r\n\r\n.container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    z-index: 2;\r\n}\r\n\r\n.bg-image[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    height: 100vh;\r\n    width: 100vw;\r\n    background-image: url('roulette.jpg');\r\n    background-repeat: no-repeat, repeat;\r\n    background-position: center;\r\n    background-size: cover;\r\n    filter: grayscale(30%);\r\n    z-index: 1;\r\n    transition: filter 1s;\r\n}\r\n\r\n.bg-image[_ngcontent-%COMP%]::after {\r\n    content: '';\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    background-color: rgba(0, 0, 0, 0.8);\r\n    width: 100vw;\r\n    height: 100vh;\r\n}\r\n\r\n.bets-container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    flex-wrap: wrap;\r\n    position: relative;\r\n    width: 1150px;\r\n    max-width: 1150px;\r\n    color: white;\r\n    margin-top: 20px;\r\n}\r\n\r\n@media only screen and (max-width: 1200px) {\r\n    .bets-container[_ngcontent-%COMP%] {\r\n        width: 800px;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 820px) {\r\n    .bets-container[_ngcontent-%COMP%] {\r\n        width: 600px;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 620px) {\r\n    .bets-container[_ngcontent-%COMP%] {\r\n        flex-direction: column;\r\n        width: 400px;\r\n        height: auto;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 420px) {\r\n    .bets-container[_ngcontent-%COMP%] {\r\n        flex-direction: column;\r\n        width: 250px;\r\n        height: auto;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS9nYW1lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGVBQWU7SUFDZixNQUFNO0lBQ04sT0FBTztJQUNQLGFBQWE7SUFDYixZQUFZO0lBQ1oscUNBQWtEO0lBQ2xELG9DQUFvQztJQUNwQywyQkFBMkI7SUFDM0Isc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1YscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLG9DQUFvQztJQUNwQyxZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUdBO0lBQ0k7UUFDSSxZQUFZO0lBQ2hCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLFlBQVk7SUFDaEI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksc0JBQXNCO1FBQ3RCLFlBQVk7UUFDWixZQUFZO0lBQ2hCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLHNCQUFzQjtRQUN0QixZQUFZO1FBQ1osWUFBWTtJQUNoQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvZ2FtZS9nYW1lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLmNvbnRhaW5lciA+ICoge1xyXG4gICAgei1pbmRleDogMjtcclxufVxyXG5cclxuLmJnLWltYWdlIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvcm91bGV0dGUuanBnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0LCByZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgZmlsdGVyOiBncmF5c2NhbGUoMzAlKTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICB0cmFuc2l0aW9uOiBmaWx0ZXIgMXM7XHJcbn1cclxuXHJcbi5iZy1pbWFnZTo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLmJldHMtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDExNTBweDtcclxuICAgIG1heC13aWR0aDogMTE1MHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XHJcbiAgICAuYmV0cy1jb250YWluZXIge1xyXG4gICAgICAgIHdpZHRoOiA4MDBweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MjBweCkge1xyXG4gICAgLmJldHMtY29udGFpbmVyIHtcclxuICAgICAgICB3aWR0aDogNjAwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjIwcHgpIHtcclxuICAgIC5iZXRzLWNvbnRhaW5lciB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICB3aWR0aDogNDAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyMHB4KSB7XHJcbiAgICAuYmV0cy1jb250YWluZXIge1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-game',
                templateUrl: './game.component.html',
                styleUrls: ['./game.component.css'],
            }]
    }], function () { return [{ type: _socket_service__WEBPACK_IMPORTED_MODULE_2__["SocketService"] }, { type: _bet_service__WEBPACK_IMPORTED_MODULE_3__["BetService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }, { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }]; }, null); })();


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
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((userData) => {
            this.loading$.next(false);
            const loggedInUser = {
                id: userData.user.id,
                email: userData.user.email,
                username: userData.user.username,
                token: userData.token,
                updatedAt: userData.user.updatedAt,
                fund: userData.user.fund,
                createdAt: userData.user.createdAt
            };
            this.loggedInUserData$.next(loggedInUser);
            this.isLoggedIn = true;
        }));
    }
    login(username, password) {
        this.loading$.next(true);
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'public/login', {
            username,
            password
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
            this.socket.emit('userLoggedIn', userData.user.token);
        }));
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
/* harmony import */ var _game_game_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game/game.component */ "jBAD");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./landing/landing.component */ "JhD/");







const routes = [
    { path: '', component: _landing_landing_component__WEBPACK_IMPORTED_MODULE_4__["LandingComponent"] },
    { path: 'game', component: _game_game_component__WEBPACK_IMPORTED_MODULE_3__["GameComponent"] },
    { path: 'auth', component: _auth_auth_component__WEBPACK_IMPORTED_MODULE_2__["AuthComponent"] }
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