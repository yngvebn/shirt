"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var platform_browser_1 = require('@angular/platform-browser');
var material_1 = require('@angular/material');
var app_component_1 = require('./app.component');
var menu_component_1 = require('./menu/menu.component');
var estimate_component_1 = require('./estimate/estimate.component');
var numbers_component_1 = require('./estimate/numbers/numbers.component');
var shirts_component_1 = require('./estimate/shirts/shirts.component');
var hammer_gestures_directive_1 = require('./hammer/hammer-gestures.directive');
var platform_browser_2 = require('@angular/platform-browser');
var MyHammerConfig = (function (_super) {
    __extends(MyHammerConfig, _super);
    function MyHammerConfig() {
        _super.apply(this, arguments);
        this.overrides = {
            'swipe': { velocity: 0.4, threshold: 20 } // override default settings
        };
    }
    return MyHammerConfig;
}(platform_browser_2.HammerGestureConfig));
exports.MyHammerConfig = MyHammerConfig;
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, material_1.MaterialModule.forRoot()],
            declarations: [app_component_1.AppComponent, menu_component_1.MenuComponent, estimate_component_1.EstimateComponent, numbers_component_1.NumbersComponent, shirts_component_1.ShirtsComponent,
                hammer_gestures_directive_1.HammerGesturesDirective],
            bootstrap: [app_component_1.AppComponent],
            providers: [{
                    provide: platform_browser_2.HAMMER_GESTURE_CONFIG,
                    useClass: MyHammerConfig
                }]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map