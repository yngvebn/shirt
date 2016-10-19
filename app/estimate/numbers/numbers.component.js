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
var Fibonacci_1 = require('./Fibonacci');
var NumbersComponent = (function () {
    function NumbersComponent() {
        this.selectedNumber = 0;
        this.numbers = this.unique(new Fibonacci_1.Fibonacci().run(7));
    }
    NumbersComponent.prototype.select = function (num) {
        if (this.selectedNumber === num && this.isSelectedNumber) {
            this.selectedNumber = 0;
            this.isSelectedNumber = false;
        }
        else {
            this.selectedNumber = num;
            this.isSelectedNumber = this.selectedNumber > 0;
        }
    };
    NumbersComponent.prototype.unique = function (numbers) {
        var arr = [];
        for (var i = 0; i < numbers.length; i++) {
            if (arr.indexOf(numbers[i]) === -1 && numbers[i] > 0) {
                arr.push(numbers[i]);
            }
        }
        return arr;
    };
    NumbersComponent = __decorate([
        core_1.Component({
            selector: 'numbers',
            templateUrl: '/app/estimate/numbers/numbers.tpl.html',
            animations: [
                core_1.trigger('myAnimation', [
                    core_1.transition(':enter', [
                        core_1.style({ transform: 'scale(0)' }),
                        core_1.animate('125ms  ease-in', core_1.style({ transform: 'scale(1)' }))
                    ]),
                    core_1.transition(':leave', [
                        core_1.style({ transform: 'scale(1)' }),
                        core_1.animate('125ms ease-in', core_1.style({ transform: 'scale(0)' })),
                    ])
                ])
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], NumbersComponent);
    return NumbersComponent;
}());
exports.NumbersComponent = NumbersComponent;
//# sourceMappingURL=numbers.component.js.map