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
var EstimateComponent = (function () {
    function EstimateComponent() {
        this.isNumbersActive = true;
        this.transform = 'translate3d(0, 0, 0)';
        this.currentDelta = 0;
    }
    EstimateComponent.prototype.estimateSelected = function (val) {
        console.log('currentSelection', this.currentSelection);
        this.currentSelection = val;
    };
    EstimateComponent.prototype.doSwipe = function (ev) {
        if (this.currentSelection === '' || this.currentSelection === 0)
            return;
        if (ev.gesture === 'pan') {
            var deltaPercent = ((this.currentDelta + ev.event.deltaX) * 100 / ev.element.offsetWidth) * 200 / 100;
            this.transform = "translate3d(" + deltaPercent + "vw, 0, 0)";
        }
        if (ev.gesture === 'panend') {
            var deltaPercent = ev.event.deltaX * 100 / ev.element.offsetWidth;
            if (deltaPercent < 10) {
                this.currentDelta = ev.element.offsetWidth * -1 / 2;
                this.isNumbersActive = false;
                this.transform = "translate3d(-100vw, 0, 0)";
            }
            if (deltaPercent > 10) {
                this.currentDelta = 0;
                this.isNumbersActive = true;
                this.transform = "translate3d(0, 0, 0)";
            }
        }
    };
    EstimateComponent = __decorate([
        core_1.Component({
            selector: 'estimate',
            templateUrl: '/app/estimate/estimate.tpl.html'
        }), 
        __metadata('design:paramtypes', [])
    ], EstimateComponent);
    return EstimateComponent;
}());
exports.EstimateComponent = EstimateComponent;
//# sourceMappingURL=estimate.component.js.map