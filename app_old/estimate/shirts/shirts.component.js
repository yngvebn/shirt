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
var ShirtsComponent = (function () {
    function ShirtsComponent() {
        this.selectedNumber = '';
        this.shirtSelected = new core_1.EventEmitter();
        this.numbers = ['XS', 'S', 'M', 'L', 'XL'];
    }
    ShirtsComponent.prototype.select = function (num) {
        this.shirtSelected.emit(num);
        if (this.selectedNumber === num && this.isSelectedNumber) {
            this.selectedNumber = '';
            this.isSelectedNumber = false;
        }
        else {
            this.selectedNumber = num;
            this.isSelectedNumber = this.selectedNumber !== '';
        }
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], ShirtsComponent.prototype, "shirtSelected", void 0);
    ShirtsComponent = __decorate([
        core_1.Component({
            selector: 'shirts',
            templateUrl: '/app/estimate/shirts/shirts.tpl.html',
            animations: [
                core_1.trigger('myAnimation', [
                    core_1.transition(':enter', [
                        core_1.style({ transform: 'scale(0)', opacity: 0 }),
                        core_1.animate('125ms  ease-in', core_1.style({ transform: 'scale(1)', opacity: 1 }))
                    ]),
                    core_1.transition(':leave', [
                        core_1.style({ transform: 'scale(1)', opacity: 1 }),
                        core_1.animate('125ms ease-in', core_1.style({ transform: 'scale(0)', opacity: 0 })),
                    ])
                ])
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], ShirtsComponent);
    return ShirtsComponent;
}());
exports.ShirtsComponent = ShirtsComponent;
//# sourceMappingURL=shirts.component.js.map