"use strict";
var app_component_1 = require("./app.component");
describe("Component:App", function () {
    it("should be possible to instansiate", function () {
        var appComponent = new app_component_1.AppComponent();
        expect(appComponent.getGreeting("Yngve")).toEqual("Hello Yngve!");
    });
});
//# sourceMappingURL=app.component.spec.js.map