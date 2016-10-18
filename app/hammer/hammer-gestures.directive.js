"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var HammerGesturesDirective = (function () {
    function HammerGesturesDirective(el) {
        this.el = el;
        this.onGesture = new core_1.EventEmitter();
        console.log('hammer-gestures');
    }
    HammerGesturesDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        console.log(HammerGesturesDirective.hammerInitialized);
        if (!HammerGesturesDirective.hammerInitialized) {
            var hammertime = new Hammer(this.el.nativeElement);
            hammertime.get('swipe').set({ direction: Hammer.DIRECTION_ALL });
            hammertime.on("swipeup", function (ev) {
                _this.onGesture.emit({ event: ev, gesture: "swipeup", element: _this.el.nativeElement });
            });
            hammertime.on("swipedown", function (ev) {
                _this.onGesture.emit({ event: ev, gesture: "swipedown", element: _this.el.nativeElement });
            });
            hammertime.on("swipeleft", function (ev) {
                _this.onGesture.emit({ event: ev, gesture: "swipeleft", element: _this.el.nativeElement });
            });
            hammertime.on("swiperight", function (ev) {
                _this.onGesture.emit({ event: ev, gesture: "swiperight", element: _this.el.nativeElement });
            });
            hammertime.on("tap", function (ev) {
                _this.onGesture.emit({ event: ev, gesture: "tap", element: _this.el.nativeElement });
            });
            hammertime.on("pan", function (ev) {
                _this.onGesture.emit({ event: ev, gesture: "pan", element: _this.el.nativeElement });
            });
            hammertime.on("panend", function (ev) {
                _this.onGesture.emit({ event: ev, gesture: "panend", element: _this.el.nativeElement });
            });
            HammerGesturesDirective.hammerInitialized = true;
        }
    };
    HammerGesturesDirective.hammerInitialized = false;
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], HammerGesturesDirective.prototype, "onGesture", void 0);
    HammerGesturesDirective = __decorate([
        core_1.Directive({
            selector: '[hammer-gestures]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], HammerGesturesDirective);
    return HammerGesturesDirective;
}());
exports.HammerGesturesDirective = HammerGesturesDirective;
//# sourceMappingURL=hammer-gestures.directive.js.map